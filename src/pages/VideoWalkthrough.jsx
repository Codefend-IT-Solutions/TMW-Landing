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
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display">
            New to Discord? Watch This Quick 1-Minute Guide
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See exactly how to register, access the free courses, and navigate our training steps.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl shadow-emerald-500/5 aspect-video group">
          {/* Subtle green ambient hover glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <video
            className="w-full h-full object-cover"
            src="https://drive.google.com/uc?export=download&id=1fo45-7J4F0L-4pi0P4Vct-3XsoWf6heb"
            controls
            preload="metadata"
            playsInline
          />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoWalkthrough;
