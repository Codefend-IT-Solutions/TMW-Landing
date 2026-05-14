import React from 'react'

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
          TMW Discord is not just a chat group — it's a fully organized educational platform built inside Discord, designed to take you from zero to a structured, confident trader.
        </p>

        {/* Main card */}
        <div className="glass rounded-3xl p-8 sm:p-10 mb-8 relative overflow-hidden">
          {/* Decorative corner glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-500 opacity-5 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Discord icon display */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-3xl bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center">
                <svg className="w-14 h-14 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.15.1 18.15.11 18.176a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
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
