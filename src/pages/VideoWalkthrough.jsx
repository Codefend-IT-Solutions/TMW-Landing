import React from "react";
import { motion } from "framer-motion";

const VideoWalkthrough = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        {/* Header */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
            New to Discord? Watch This Quick 1-Minute Guide
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See exactly how to register, access the free courses, and navigate
            our training steps.
          </p>
        </div>

        {/* Player shell */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl shadow-emerald-500/10 group">
          {/* Emerald ambient glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

          {/* Streamable embed */}
          <iframe
            className="absolute inset-0 w-full h-full border-0 z-0"
            src="https://streamable.com/e/ux8w8u"
            allow="fullscreen; autoplay; encrypted-media"
            allowFullScreen
            title="Discord Walkthrough Video"
          />

          {/* Shield: blocks the Streamable logo in the top-left corner */}
          <div className="absolute top-0 left-0 w-24 h-14 bg-transparent z-10 pointer-events-auto" />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoWalkthrough;
