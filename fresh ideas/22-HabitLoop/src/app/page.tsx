'use client';

import { useState } from 'react';

export default function HabitLoopLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [streak, setStreak] = useState(0);

  const features = [
    { icon: '🧱', title: 'Habit Stacking', desc: 'Chain habits together for effortless routines. "After I pour coffee, I will journal for 2 minutes."' },
    { icon: '🤝', title: 'Accountability Partners', desc: 'Pair up with friends for mutual motivation. See each other\'s streaks and cheer each other on.' },
    { icon: '🔥', title: 'Streak System', desc: 'Build and protect your streaks with streak shields. One bad day won\'t erase your progress.' },
    { icon: '🔔', title: 'Smart Nudges', desc: 'AI sends perfectly-timed reminders based on your behavior patterns and optimal habit windows.' },
    { icon: '📊', title: 'Habit Analytics', desc: 'Visualize consistency with heatmaps, charts, and completion rates over time.' },
    { icon: '🧬', title: 'Science Mode', desc: 'Learn the neuroscience behind each habit loop — cue, craving, response, reward.' },
  ];

  const pricing = [
    { name: 'Free', price: 0, features: ['3 habits', 'Basic tracking', 'Daily reminders', '7-day history', 'Community access'] },
    { name: 'Pro', price: annual ? 2.99 : 3.99, features: ['Unlimited habits', 'Full analytics', 'Accountability partners', 'Heatmaps', 'Export data', '365-day history'] },
    { name: 'Coach', price: annual ? 5.99 : 7.99, features: ['AI coaching', 'Streak shields', 'Priority nudges', 'Custom habit plans', 'Science insights', 'Team challenges'] },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-sm">HL</div>
            <span className="text-xl font-bold">HabitLoop</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#science" className="hover:text-white transition">Science</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold hover:opacity-90 transition">Start Building</button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-gray-950/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#science" className="text-gray-300 hover:text-white">Science</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold">Start Building</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium">🧠 Based on Atomic Habits by James Clear</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Build Habits That{' '}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Actually Stick</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Science-backed habit loops with accountability partners, streak protection, and smart nudges. Based on James Clear&apos;s Atomic Habits framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition">Start Your Loop →</button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition">See the Science</button>
          </div>
        </div>
      </section>

      {/* Interactive Streak Demo */}
      <section className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm text-gray-400 mb-2">Try it — tap to build your streak</p>
          <div className="text-6xl font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2">{streak} 🔥</div>
          <p className="text-xs text-gray-500 mb-4">{streak === 0 ? 'Start your first day!' : streak < 7 ? 'Keep going! Momentum is building.' : streak < 21 ? 'Amazing! You\'re forming a habit.' : 'Unstoppable! Habit is now automatic.'}</p>
          <button onClick={() => setStreak(s => s + 1)} className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 font-semibold hover:opacity-90 transition">
            ✅ Complete Today
          </button>
          {streak > 0 && (
            <button onClick={() => setStreak(0)} className="block mx-auto mt-3 text-xs text-gray-600 hover:text-gray-400 transition">Reset</button>
          )}
        </div>
      </section>

      {/* Stats */}
      <section id="science" className="py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['12M+', 'Habits Tracked'],
            ['83%', 'Stick After 66 Days'],
            ['2.1M', 'Active Streaks'],
            ['4.8★', 'Avg Rating'],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{val}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">The Full <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Habit Toolkit</span></h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">Every feature is designed around behavioral science to maximize your chances of lasting change.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-300">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Invest in Your Best Self</h2>
          <p className="text-gray-500 text-center mb-8">Free forever. Premium when you&apos;re ready to commit.</p>
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-violet-500' : 'bg-white/20'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-violet-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${i === 1 ? 'border-violet-500 bg-violet-500/5 scale-105' : 'border-white/10 bg-white/[0.03]'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${plan.price.toFixed(2)}</span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-violet-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${i === 1 ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:shadow-lg hover:shadow-violet-500/25' : 'border border-white/20 text-white hover:bg-white/5'}`}>
                  {i === 0 ? 'Start Free' : 'Get ' + plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-xs">HL</div>
            <span className="font-bold">HabitLoop</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Research</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 HabitLoop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
