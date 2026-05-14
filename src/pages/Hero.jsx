import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { DISCORD_LINK } from "../components/Navbar";

/* ─── Static metadata ─── */

const COIN_META = [
  {
    id: "bitcoin",
    sym: "BTC",
    wsKey: "btcusdt",
    label: "Bitcoin",
    icon: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  },
  {
    id: "ethereum",
    sym: "ETH",
    wsKey: "ethusdt",
    label: "Ethereum",
    icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
  },
  {
    id: "ripple",
    sym: "XRP",
    wsKey: "xrpusdt",
    label: "XRP",
    icon: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
  },
  {
    id: "solana",
    sym: "SOL",
    wsKey: "solusdt",
    label: "Solana",
    icon: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
  },
  {
    id: "binancecoin",
    sym: "BNB",
    wsKey: "bnbusdt",
    label: "BNB",
    icon: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
  },
  {
    id: "cardano",
    sym: "ADA",
    wsKey: "adausdt",
    label: "Cardano",
    icon: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
  },
  {
    id: "usd-coin",
    sym: "USDC",
    wsKey: "usdcusdt",
    label: "USD Coin",
    icon: "https://assets.coingecko.com/coins/images/6319/small/usdc.png",
  },
];

/* Build Binance combined-stream URL */
const WS_STREAMS = COIN_META.map((c) => `${c.wsKey}@miniTicker`).join("/");
const WS_URL = `wss://stream.binance.com:9443/stream?streams=${WS_STREAMS}`;

/* key: lowercase Binance symbol (e.g. "btcusdt") -> meta */
const KEY_MAP = Object.fromEntries(COIN_META.map((c) => [c.wsKey, c]));

const fmt = (n) => {
  if (!n && n !== 0) return "—";
  if (n >= 1000)
    return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (n >= 1) return "$" + n.toFixed(2);
  return "$" + n.toFixed(5);
};

/* ─── Hook: real-time prices via Binance WebSocket ─── */
const useLivePrices = () => {
  // prices[id] = { price, change24h, prevPrice }
  const [prices, setPrices] = useState({});
  const [connected, setConnected] = useState(false);
  const wsRef = useRef(null);

  useEffect(() => {
    let reconnectTimer;

    const connect = () => {
      const ws = new WebSocket(WS_URL);
      wsRef.current = ws;

      ws.onopen = () => setConnected(true);

      ws.onmessage = (e) => {
        try {
          const msg = JSON.parse(e.data);
          const d = msg.data; // miniTicker payload
          if (!d) return;
          const sym = d.s.toLowerCase(); // e.g. "BTCUSDT" -> "btcusdt"
          const meta = KEY_MAP[sym];
          if (!meta) return;
          const price = parseFloat(d.c); // current close
          const open = parseFloat(d.o); // 24h open
          const change24h = open ? ((price - open) / open) * 100 : 0;
          setPrices((prev) => ({
            ...prev,
            [meta.id]: {
              price,
              change24h,
              prevPrice: prev[meta.id]?.price ?? price,
            },
          }));
        } catch {}
      };

      ws.onerror = () => ws.close();
      ws.onclose = () => {
        setConnected(false);
        reconnectTimer = setTimeout(connect, 3000); // auto-reconnect
      };
    };

    connect();
    return () => {
      clearTimeout(reconnectTimer);
      wsRef.current?.close();
    };
  }, []);

  return { prices, connected };
};

/* ─── Animated Ribbon background (CSS-only, pure SVG path loops) ─── */
const Ribbons = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Ambient glow blobs */}
    <motion.div
      className="absolute top-[-15%] right-[20%] w-[45%] h-[55%] rounded-full blur-[160px]"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
      }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-10%] left-[10%] w-[40%] h-[50%] rounded-full blur-[150px]"
      style={{
        background:
          "radial-gradient(circle, rgba(251,146,60,0.06) 0%, transparent 70%)",
      }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />

    {/* === The Two Bitget-style ribbon curves === */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Ribbon gradient 1 */}
        <linearGradient id="r1" x1="0%" y1="0%" x2="200%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#fb923c" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
          <animate
            attributeName="x1"
            values="-100%;100%"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="100%;300%"
            dur="6s"
            repeatCount="indefinite"
          />
        </linearGradient>

        {/* Ribbon gradient 2 */}
        <linearGradient id="r2" x1="0%" y1="0%" x2="200%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="30%" stopColor="#fb923c" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="70%" stopColor="#fb923c" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          <animate
            attributeName="x1"
            values="-100%;100%"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="100%;300%"
            dur="8s"
            repeatCount="indefinite"
          />
        </linearGradient>

        {/* Glow filter for thickness */}
        <filter id="glow" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* --- Ribbon 1: Background sweep --- */}
      <motion.path
        d="M -200,600 C 400,900 600,100 1100,300 S 1600,800 2000,500"
        fill="none"
        stroke="url(#r1)"
        strokeWidth="30"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* --- Ribbon 2: Front crossing sweep --- */}
      <motion.path
        d="M -200,200 C 400,100 600,800 1000,600 S 1500,100 2000,300"
        fill="none"
        stroke="url(#r2)"
        strokeWidth="30"
        strokeLinecap="round"
        filter="url(#glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      />
    </svg>
  </div>
);

/* ─── Mini sparkline SVG ─── */
const Sparkline = ({ up }) => {
  const pts = up
    ? "M0 14 L8 10 L16 13 L24 7 L32 9 L40 4 L48 2"
    : "M0 3  L8 6  L16 5  L24 12 L32 9  L40 14 L48 16";
  return (
    <svg width="48" height="18" viewBox="0 0 48 18" fill="none">
      <path
        d={pts}
        stroke={up ? "#10b981" : "#ef4444"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/* ─── Coin row ─── */
const CoinRow = ({ meta, data }) => {
  const pct = data?.change24h ?? 0;
  const up = pct >= 0;
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center gap-3">
        <img
          src={meta.icon}
          alt={meta.sym}
          className="w-5 h-5 rounded-full object-contain bg-gray-800"
        />
        <span className="text-gray-200 font-medium text-sm group-hover:text-white transition-colors">
          {meta.sym}
        </span>
      </div>
      <div className="text-right">
        <div className="text-gray-100 font-semibold text-sm">
          {fmt(data?.price)}
        </div>
        <div
          className={`text-[10px] font-medium ${up ? "text-emerald-400" : "text-red-400"}`}
        >
          {up ? "+" : ""}
          {pct.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */
const Hero = () => {
  const { prices, connected } = useLivePrices();

  /* pick BTC & ETH for the two small side cards */
  const btcData = prices["bitcoin"];
  const ethData = prices["ethereum"];

  return (
    <section className="relative min-h-screen flex items-center px-4 pt-24 pb-16 overflow-hidden bg-[#030712]">
      <Ribbons />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
        {/* ── Left column ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.12] mb-6 text-white tracking-tight">
            Learn Trading
            <br />
            From Scratch &nbsp;&amp;
            <br />
            Inside<span className="text-emerald-400">TMW</span> Discord.
          </h1>

          <p className="text-gray-400 md:bg-[#0c0f1a]/40 md:backdrop-blur-md text-lg max-w-md leading-relaxed mb-10">
            Join the free TMW Discord and start learning trading step by step
            through free A to Z courses, beginner lessons, risk management,
            trading psychology, and market structure education.
          </p>

          {/* Social row */}
          <div className="flex flex-wrap items-start gap-10"></div>
        </motion.div>

        {/* ── Right column: two stacked cards + Popular card side by side ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex gap-4 items-stretch"
          style={{ height: 460 }}
        >
          {/* Left stack — two cards that together fill the full height */}
          <div className="flex flex-col gap-4 w-64 h-full">
            {/* BTC card */}
            <motion.div
              className="bg-[#0c0f1a]/80 backdrop-blur-xl border border-white/[0.07] rounded-2xl p-5 shadow-2xl flex flex-col justify-between flex-1"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300 text-lg font-semibold">
                  Bitcoin
                </span>
                <Sparkline up={!btcData || btcData.change24h >= 0} />
              </div>
              <div>
                {btcData ? (
                  <>
                    <div
                      className={`text-sm mb-1 font-medium ${btcData.change24h >= 0 ? "text-emerald-400" : "text-red-400"}`}
                    >
                      BTC {btcData.change24h >= 0 ? "+" : ""}
                      {btcData.change24h.toFixed(2)}%
                    </div>
                    <div className="text-white font-bold text-3xl">
                      {fmt(btcData.price)}
                    </div>
                  </>
                ) : (
                  <div className="h-8 bg-white/5 rounded animate-pulse" />
                )}
              </div>
              <div className="text-gray-600 text-xs mt-3 hover:text-gray-400 cursor-pointer transition-colors">
                View →
              </div>
            </motion.div>

            {/* ETH card */}
            <motion.div
              className="bg-[#0c0f1a]/80 backdrop-blur-xl border border-white/[0.07] rounded-2xl p-5 shadow-2xl flex flex-col justify-between flex-1"
              animate={{ y: [4, -4, 4] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300 text-lg font-semibold">
                  Ethereum
                </span>
                <Sparkline up={!ethData || ethData.change24h >= 0} />
              </div>
              <div>
                {ethData ? (
                  <>
                    <div
                      className={`text-sm mb-1 font-medium ${ethData.change24h >= 0 ? "text-emerald-400" : "text-red-400"}`}
                    >
                      ETH {ethData.change24h >= 0 ? "+" : ""}
                      {ethData.change24h.toFixed(2)}%
                    </div>
                    <div className="text-white font-bold text-3xl">
                      {fmt(ethData.price)}
                    </div>
                  </>
                ) : (
                  <div className="h-8 bg-white/5 rounded animate-pulse" />
                )}
              </div>
              <div className="text-gray-600 text-xs mt-3 hover:text-gray-400 cursor-pointer transition-colors">
                View →
              </div>
            </motion.div>
          </div>

          {/* Popular card — same height as two stacked cards */}
          <motion.div
            className="bg-[#0c0f1a]/80 backdrop-blur-xl border border-white/[0.07] rounded-2xl p-6 shadow-2xl flex flex-col w-72"
            style={{ height: "100%" }}
            animate={{ y: [-6, 6, -6] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-gray-200 font-semibold">Popular</h3>
              {!connected && Object.keys(prices).length === 0 ? (
                <span className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
                  CONNECTING...
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[10px] text-emerald-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              )}
            </div>

            <div className="flex-1 flex flex-col justify-between space-y-0">
              {Object.keys(prices).length === 0
                ? Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/5 animate-pulse" />
                        <div className="w-8 h-3 bg-white/5 rounded animate-pulse" />
                      </div>
                      <div className="w-16 h-3 bg-white/5 rounded animate-pulse" />
                    </div>
                  ))
                : COIN_META.map((meta) => (
                    <div key={meta.id} className="py-1.5">
                      <CoinRow meta={meta} data={prices[meta.id]} />
                    </div>
                  ))}
            </div>

            <div className="pt-4 mt-3 border-t border-white/[0.06]">
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-emerald-400 transition-colors"
              >
                Explore over 800 assets →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-gray-600 text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-emerald-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
