import React from 'react'
import DiscordIcon from '../assets/discord-logo.png'

const ContextSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      title: 'Structured Courses',
      desc: 'Organized channels act as classrooms — each topic in its own space, easy to follow at your own pace.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: 'Live Discussions',
      desc: 'Ask questions, share analysis, and get feedback in real time from fellow traders and mentors.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Always Free',
      desc: 'No paywalls, no subscriptions. Every course, resource and discussion is completely free forever.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <span className="glass-emerald text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            What is TMW Discord?
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-white mb-4">
          Your Online Trading{' '}
          <span className="text-gradient">Classroom</span>
        </h2>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-12">
          Discord is a free community app where all TMW courses, learning sections, updates, and discussions happen in one organized place.

Think of it like an online trading classroom. After joining, you will see the Free Courses section and can start from the beginner lessons.
        </p>

        {/* Main card */}
        <div className="glass rounded-3xl p-8 sm:p-10 mb-8 relative overflow-hidden">
          {/* Decorative corner glow */}
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
            }}
          />
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Discord icon display */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-3xl bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center">
              <img src={DiscordIcon} alt="discord icon" loading="lazy" decoding="async" width="80" height="80" className="w-20 h-20" />
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Think of it as a free trading school — inside Discord
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Each channel is structured like a classroom. You progress through modules at your own pace, with written lessons, chart examples, and the ability to ask questions directly in the discussion thread. No fluff, no noise — just focused learning.
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 hover:glass-emerald transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                {f.icon}
              </div>
              <h4 className="font-semibold text-white mb-2">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContextSection
