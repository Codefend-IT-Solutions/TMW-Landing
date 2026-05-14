import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 4200 },
  { name: 'Mar', value: 3800 },
  { name: 'Apr', value: 5500 },
  { name: 'May', value: 6800 },
  { name: 'Jun', value: 6200 },
  { name: 'Jul', value: 8500 },
  { name: 'Aug', value: 9200 },
  { name: 'Sep', value: 8900 },
  { name: 'Oct', value: 11500 },
  { name: 'Nov', value: 13000 },
  { name: 'Dec', value: 15500 },
];

const MarketPerformance = () => {
  return (
    <section id="performance" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <span className="glass-emerald text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
            Data-Driven Edge
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-white mb-4">
          Numbers That <span className="text-gradient">Speak</span> For Themselves
        </h2>
        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-16">
          Trading isn't about guessing. It's about probabilities, structure, and consistent compounding. See the results of a disciplined approach.
        </p>

        {/* Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Avg. Win Rate', value: '78%', subtext: 'On A+ Setups' },
            { label: 'Funded Members', value: '850+', subtext: 'Across Prop Firms' },
            { label: 'Weekly Setups', value: '15-20', subtext: 'High Probability' },
            { label: 'Community Rating', value: '4.9/5', subtext: 'From 2,000+ Reviews' }
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 relative overflow-hidden group hover:glass-emerald transition-all duration-300">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-300" />
              <div className="font-display font-bold text-4xl text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-emerald-500 font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="glass rounded-3xl p-6 sm:p-8 relative">
          {/* Decorative glows */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-emerald-500 opacity-5 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 relative z-10">
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">Theoretical Portfolio Growth</h3>
              <p className="text-sm text-gray-400">Based on standard risk management protocols taught in our modules.</p>
            </div>
            <div className="flex items-center gap-2 glass-emerald px-4 py-2 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-semibold">+287.5% YTD</span>
            </div>
          </div>
          
          <div className="h-[400px] w-full relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="rgba(255,255,255,0.2)" 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.2)" 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value}`}
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(3, 7, 18, 0.9)', 
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
                  }}
                  itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                  labelStyle={{ color: '#9ca3af', marginBottom: '4px' }}
                  cursor={{ stroke: 'rgba(16, 185, 129, 0.2)', strokeWidth: 2, strokeDasharray: '3 3' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  activeDot={{ r: 6, fill: '#10b981', stroke: '#030712', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default MarketPerformance;
