// import React from "react";
// import { DISCORD_LINK } from "../constants";
// import discordImg from '../assets/discord.webp'

// const FinalCTA = ({ onJoinClick }) => {
//   return (
//     <section id="join" className="py-24 px-4 relative overflow-hidden">
//       {/* Top divider */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

//       {/* Background decoration */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500 opacity-[0.04] blur-3xl" />
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
//       </div>

//       <div className="max-w-3xl mx-auto relative z-10 text-center">
//         {/* Badge */}
//         <div className="flex justify-center mb-6">
//           <span className="glass-emerald text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full animate-pulse-slow">
//             🎓 Join 5,000+ Traders Learning for Free
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
//           Start Learning <span className="text-gradient">Free</span>
//           <br />
//           Inside <span className="text-gradient">TMW Discord</span>
//         </h2>

//         <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
//           Everything you need to go from zero to a structured, confident trader
//           — organized, free, and waiting for you right now.
//         </p>

//         {/* CTA Button */}
//         <div className="flex flex-col items-center gap-4">
//           <button
//             onClick={onJoinClick}
//             id="final-join-btn"
//             className="btn-emerald text-white font-bold text-xl px-12 py-5 rounded-2xl flex items-center gap-4 glow-emerald animate-pulse-slow"
//           >
//            <img src={discordImg} alt="discord" className="w-10 h-10" />
//             Join Free Discord
//           </button>

//           {/* Trust signals */}
//           <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 text-sm">
//             <span className="flex items-center gap-1.5">
//               <svg
//                 className="w-4 h-4 text-emerald-500"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               No signup fees
//             </span>
//             <span className="w-1 h-1 rounded-full bg-gray-700" />
//             <span className="flex items-center gap-1.5">
//               <svg
//                 className="w-4 h-4 text-emerald-500"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Instant access
//             </span>
//             <span className="w-1 h-1 rounded-full bg-gray-700" />
//             <span className="flex items-center gap-1.5">
//               <svg
//                 className="w-4 h-4 text-emerald-500"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Cancel any time
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Financial Disclaimer */}
//       <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-white/5">
//         <p className="text-gray-600 text-xs leading-relaxed text-center">
//           <strong className="text-gray-500">Financial Disclaimer:</strong> All
//           content shared inside TMW Discord is for educational and informational
//           purposes only. Nothing within this community constitutes financial
//           advice, investment recommendations, or solicitations to buy or sell
//           any financial instrument. Trading carries significant risk of loss and
//           is not suitable for all investors. Past performance is not indicative
//           of future results. Always do your own research and consult a qualified
//           financial advisor before making any investment decisions. TMW Discord
//           is not a licensed financial advisor.
//         </p>
//       </div>

//       {/* Footer */}
//       <div className="max-w-3xl mx-auto mt-8 text-center">
//         <p className="text-gray-700 text-xs">
//           © {new Date().getFullYear()} TMW Discord. All rights reserved. · Built
//           with ❤️ for traders.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default FinalCTA;
