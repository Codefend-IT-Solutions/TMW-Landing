import React from 'react'

const forList = [
  { text: 'Complete beginners with zero trading experience' },
  { text: 'Self-taught traders who want structured education' },
  { text: 'Anyone tired of random YouTube rabbit holes' },
  { text: 'Traders wanting to add risk management to their strategy' },
  { text: 'People serious about learning markets the right way' },
]

const notForList = [
  { text: 'People looking for "guaranteed profits" or signals' },
  { text: 'Gamblers seeking overnight success stories' },
  { text: 'Those unwilling to put in time to study and practice' },
  { text: 'Get-rich-quick scheme seekers' },
  { text: 'Anyone not open to learning fundamentals first' },
]

const ComparisonSection = () => {
  return (
    <section id="who-is-this-for" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <span className="glass-emerald text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            Is This For You?
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-white mb-4">
          Be{' '}
          <span className="text-gradient">Honest</span>
          {' '}With Yourself
        </h2>
        <p className="text-gray-400 text-center text-lg max-w-xl mx-auto mb-12">
          TMW Discord is built for serious learners. Before you join, make sure you're in the right mindset.
        </p>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FOR column */}
          <div className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-emerald-500 opacity-5 blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">This is For You</h3>
                <p className="text-emerald-400 text-xs font-medium">If you match these ↓</p>
              </div>
            </div>

            <ul className="space-y-3">
              {forList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NOT FOR column */}
          <div className="glass rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-red-500/10">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-red-500 opacity-5 blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white">This is NOT For You</h3>
                <p className="text-red-400 text-xs font-medium">If you have these expectations ↓</p>
              </div>
            </div>

            <ul className="space-y-3">
              {notForList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
