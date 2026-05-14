import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ghaniImage from "../assets/Ghani.webp";
import harisImage from "../assets/haris.webp";
import arsalanImage from "../assets/khuram.webp";
import aliImage from "../assets/pradeep.webp";

const testimonials = [
  {
    id: 1,
    name: "Ghani Rajkotwala",
    img: ghaniImage,
    text: "Before joining this bootcamp, I was struggling with understanding charts, how to analyze them, and how to use various technical indicators such as support, resistance, MACD, and RSI. The whole process seemed overwhelming, and I was confused about when to enter or exit trades. However, this bootcamp helped me declutter and understand everything step by step. I learned how all the pieces fall into place, when to enter a trade, and where to place stop losses. Most importantly, I learned how to rely on my own knowledge and understanding rather than blindly following someone else's signals. The best part of the bootcamp was that I was able to understand everything on my own and take baby steps towards becoming a successful trader.",
    role: "Student",
  },
  {
    id: 2,
    name: "Muhammad Haris",
    img: harisImage,
    text: "Firstly, I would like to thank Haris khan for giving me an opportunity to become a part of bootcamp. The course structure was designed very well and the knowledge shared by the mentor was terrific. We learned in-depth price action and advanced money management skills that nobody talks about. Our trading skills have improved significantly. Many of my batch mates have started trading in the live market with proven results. I still remember the days when I used to run for the trading signals and drained multiple accounts. I can't thank enough for the teaching Haris Khan has provided us and the valuable skills to survive these brutal markets.",
    role: "Student",
  },
  {
    id: 3,
    name: "Muhammad Khurram",
    img: arsalanImage,
    text: "I found the bootcamp to be a valuable investment. The program exceeded my expectations and covered everything from the basics to advanced topics. Haris sir shared his personal knowledge, which was highly beneficial. We learned about technical analysis, risk management, psychology, and more. After the boot camp, I gained a new perspective on the market. I highly recommend this program to everyone. It provides a solid foundation for understanding trading and can lead to increased earnings over time.",
    role: "Student",
  },
  {
    id: 4,
    name: "Pradeep Kumar",
    img: aliImage,
    text: "In 2020, I entered the world of crypto and paid for a course with Bitcoin. Although I did not learn much from that course, I came to know about Haris sir and learned about analyzing the market. Haris Khan's bootcamp had a significant impact on me, and I recommend this to anyone seeking to learn. I have learned so much that I no longer need to look for other groups for learning. God bless Haris Khan.",
    role: "Student",
  },
];

const Testimonials = () => {
  const [selectedId, setSelectedId] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const selectedTestimonial = testimonials.find((t) => t.id === selectedId);

  return (
    <section
      id="testimonials"
      className="py-24 px-4 relative overflow-hidden bg-[#030712]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Success Stories
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
              What Our <span className="text-gradient">Students</span>
              <br /> Are Saying
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 group-active:scale-90 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 group-active:scale-90 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-full sm:min-w-[400px] snap-center"
            >
              <div className="glass rounded-[2rem] p-8 h-full flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all duration-500">
                <h3 className="font-display font-bold text-2xl text-white mb-8 group-hover:text-emerald-400 transition-colors">
                  {t.name}
                </h3>

                {/* Profile Image with Ring */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-40 h-40 rounded-full p-1 border-2 border-dashed border-emerald-500/30 group-hover:border-emerald-500 transition-colors duration-500">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full rounded-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Truncated Text */}
                <p className="text-gray-400 leading-relaxed mb-8 flex-1 line-clamp-1 overflow-hidden text-ellipsis w-full">
                  "{t.text}"
                </p>

                <button
                  onClick={() => setSelectedId(t.id)}
                  className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedId && selectedTestimonial && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-[#0c0f1a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              {/* Top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-emerald-500/10 blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-0 right-0 p-2 text-gray-500 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="w-24 h-24 rounded-full p-1 border-2 border-emerald-500 mb-6">
                  <img
                    src={selectedTestimonial.img}
                    alt={selectedTestimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>

                <h3 className="font-display font-bold text-3xl text-white mb-6">
                  {selectedTestimonial.name}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-10 text-left md:text-center">
                  "{selectedTestimonial.text}"
                </p>

                <button
                  onClick={() => setSelectedId(null)}
                  className="px-10 py-4 rounded-xl bg-gray-800 text-white font-bold hover:bg-gray-700 transition-colors border border-white/5"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
};

export default Testimonials;
