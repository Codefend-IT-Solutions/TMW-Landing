import React from "react";
import { DISCORD_LINK } from "../components/Navbar";

const FinalCTA = () => {
  return (
    <section id="join" className="py-24 px-4 relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500 opacity-[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="glass-emerald text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full animate-pulse-slow">
            🎓 Join 5,000+ Traders Learning for Free
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
          Start Learning <span className="text-gradient">Free</span>
          <br />
          Inside <span className="text-gradient">TMW Discord</span>
        </h2>

        <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Everything you need to go from zero to a structured, confident trader
          — organized, free, and waiting for you right now.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="final-join-btn"
            className="btn-emerald text-white font-bold text-xl px-12 py-5 rounded-2xl flex items-center gap-4 glow-emerald"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.15.1 18.15.11 18.176a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Join Free Discord
          </a>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No signup fees
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Instant access
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Cancel any time
            </span>
          </div>
        </div>
      </div>

      {/* Financial Disclaimer */}
      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-white/5">
        <p className="text-gray-600 text-xs leading-relaxed text-center">
          <strong className="text-gray-500">Financial Disclaimer:</strong> All
          content shared inside TMW Discord is for educational and informational
          purposes only. Nothing within this community constitutes financial
          advice, investment recommendations, or solicitations to buy or sell
          any financial instrument. Trading carries significant risk of loss and
          is not suitable for all investors. Past performance is not indicative
          of future results. Always do your own research and consult a qualified
          financial advisor before making any investment decisions. TMW Discord
          is not a licensed financial advisor.
        </p>
      </div>

      {/* Footer */}
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} TMW Discord. All rights reserved. · Built
          with ❤️ for traders.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
