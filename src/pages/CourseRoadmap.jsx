import React from 'react'

const roadmap = [
  {
    id: 1,
    title: 'Baby Basics',
    desc: 'What is trading? Market structure, candlesticks, and reading a chart for the very first time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    tag: 'Start Here',
  },
  {
    id: 2,
    title: 'Basics',
    desc: 'Support & resistance, trend lines, key levels, and how to identify trade setups.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tag: 'Foundation',
  },
  {
    id: 3,
    title: 'Intermediate',
    desc: 'Indicators, confluence zones, multi-timeframe analysis, and trade management.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tag: 'Level Up',
  },
  {
    id: 4,
    title: 'Risk Management',
    desc: 'Position sizing, stop-loss strategies, R:R ratios — the rules that protect your capital.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tag: 'Critical',
  },
  {
    id: 5,
    title: 'Trading Psychology',
    desc: 'Discipline, mindset, dealing with losses, fear and greed — the mental edge.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    tag: 'Mindset',
  },
  {
    id: 6,
    title: 'Harmonic Patterns',
    desc: 'Gartley, Bat, Butterfly, Crab — advanced pattern recognition for precise entries.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    tag: 'Advanced',
  },
  {
    id: 7,
    title: 'Education Hub',
    desc: 'Ongoing resources, case studies, chart reviews, and continuous learning materials.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    tag: 'Graduate',
  },
]

const CourseRoadmap = () => {
  return (
    <section id="roadmap" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <span className="glass-emerald text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            Course Roadmap
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-white mb-4">
          Your Trading{' '}
          <span className="text-gradient">Learning Path</span>
        </h2>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-14">
          A clear, step-by-step curriculum designed to build your skills progressively — no jumping ahead, no confusion.
        </p>

        {/* Roadmap steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/30 to-transparent hidden sm:block" />

          <div className="space-y-4">
            {roadmap.map((step, index) => (
              <div
                key={step.id}
                className="relative flex gap-4 sm:gap-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step number + icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-2xl glass-emerald flex items-center justify-center text-emerald-400 group-hover:glow-emerald-sm transition-all duration-300 group-hover:scale-105">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass rounded-2xl p-4 sm:p-5 group-hover:glass-emerald transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-lg text-white">{step.title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            ✦ All 7 modules available immediately upon joining — completely free
          </p>
        </div>
      </div>
    </section>
  )
}

export default CourseRoadmap
