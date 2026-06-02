import React from "react";
import { motion } from "framer-motion";
import { DISCORD_LINK } from "../constants";


/*
 * iOS Safari performance notes:
 * - No filter: blur() — the previous huge animated blur layers forced the GPU
 *   to re-rasterize ~half the viewport every frame and hung iPhones.
 * - No SVG feGaussianBlur filters and no SMIL <animate> — both cause constant
 *   full-SVG repaints on iOS. Ribbons render once and stay static.
 * - The glow blobs are plain radial gradients (already soft, no blur needed);
 *   the ribbon "glow" is a second, wider, low-opacity stroke.
 */
const Ribbons = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Ambient glow blobs — static radial gradients */}
    <div
      className="absolute top-[-15%] right-[20%] w-[45%] h-[55%] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute bottom-[-10%] left-[10%] w-[40%] h-[50%] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(251,146,60,0.06) 0%, transparent 70%)",
      }}
    />

    {/* === The Two Bitget-style ribbon curves (static) === */}
    <motion.svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <defs>
        {/* Ribbon gradient 1 */}
        <linearGradient id="r1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="30%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#fb923c" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
        </linearGradient>

        {/* Ribbon gradient 2 */}
        <linearGradient id="r2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="30%" stopColor="#fb923c" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="70%" stopColor="#fb923c" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* --- Ribbon 1: Background sweep (wide faint stroke fakes the glow) --- */}
      <path
        d="M -200,600 C 400,900 600,100 1100,300 S 1600,800 2000,500"
        fill="none"
        stroke="url(#r1)"
        strokeWidth="44"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M -200,600 C 400,900 600,100 1100,300 S 1600,800 2000,500"
        fill="none"
        stroke="url(#r1)"
        strokeWidth="30"
        strokeLinecap="round"
      />

      {/* --- Ribbon 2: Front crossing sweep --- */}
      <path
        d="M -200,200 C 400,100 600,800 1000,600 S 1500,100 2000,300"
        fill="none"
        stroke="url(#r2)"
        strokeWidth="44"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M -200,200 C 400,100 600,800 1000,600 S 1500,100 2000,300"
        fill="none"
        stroke="url(#r2)"
        strokeWidth="30"
        strokeLinecap="round"
      />
    </motion.svg>
  </div>
);

/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */
const Hero = ({ onJoinClick }) => {
  return (
    <section className="relative min-h-screen flex items-center px-4 pt-24 pb-16 overflow-hidden bg-[#030712]">
      <Ribbons />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* ── Content ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="font-display font-bold text-5xl sm:text-5xl lg:text-8xl leading-[1.1] mb-8 text-white tracking-tight">
            Learn Trading
            <br />
            From A to Z For Free
            <br />
            &amp; Inside <span className="text-emerald-400">TMW</span>
          </h1>

          <p className="text-gray-400 bg-black/70 rounded-2xl p-4 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12">
            Join the free TMW Discord and start learning trading step by step
            through free A to Z courses, beginner lessons, risk management,
            trading psychology, and market structure education.
          </p>

          <button
            onClick={onJoinClick}
            className="w-full sm:hidden bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-xl text-lg text-center transition-all duration-200 mb-8 shadow-lg shadow-emerald-500/20"
          >
            Join Now
          </button>

          {/* Social row */}
          <div className="flex flex-wrap items-center justify-center gap-10"></div>
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
