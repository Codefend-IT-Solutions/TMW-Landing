import React from "react";
import { motion } from "framer-motion";
import instructorImg from "../assets/main.jpeg";

const MentorSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#030712]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with stylized frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative elements behind image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-3xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-emerald-500/30 rounded-br-3xl" />

            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={instructorImg}
                alt="Mentor"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Meet Your Mentor
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-8 leading-tight">
              Learn from a <span className="text-gradient">Professional</span>
              <br /> who actually trades.
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Haris Khan, founder of TMW, has more than{" "}
                <span className="text-white font-semibold">10 years</span> of
                experience in financial market education and has helped over{" "}
                <span className="text-white font-semibold">75,000</span>{" "}
                students and learners understand trading in a simple way.
              </p>
              <p>
                Inside TMW Discord, beginners can learn chart reading, market
                structure, risk management, and trading psychology step by step.
                The purpose is to help people build a strong learning foundation
                before making trading decisions. All content is only for
                education and does not guarantee any results or provide
                financial advice.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-white font-bold text-3xl mb-1">75,000+</div>
                <div className="text-gray-500 text-sm">Students Mentored</div>
              </div>
              <div>
                <div className="text-white font-bold text-3xl mb-1">
                  10+ Yrs
                </div>
                <div className="text-gray-500 text-sm">Trading Experience</div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gray-800 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Student"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-500">
                Joined by{" "}
                <span className="text-white font-semibold">
                  200+ new traders
                </span>{" "}
                this month
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
