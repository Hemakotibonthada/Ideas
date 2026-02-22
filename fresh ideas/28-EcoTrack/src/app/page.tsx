'use client';

import { useState } from 'react';

export default function EcoTrackLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [carbonScore, setCarbonScore] = useState<number | null>(null);

  const activities = [
    { label: 'Drive 10 mi', kg: 4.1 },
    { label: 'Flight 1 hr', kg: 90 },
    { label: 'Beef meal', kg: 6.6 },
    { label: 'Vegan meal', kg: 0.7 },
    { label: 'Hot shower 10 min', kg: 1.5 },
    { label: 'Stream 2 hrs', kg: 0.04 },
  ];

  const features = [
    { icon: '🧮', title: 'Carbon Calculator', desc: 'Auto-calculate your footprint from daily activities with smart integrations.' },
    { icon: '💡', title: 'Smart Tips', desc: 'Personalized suggestions to reduce your impact based on your habits.' },
    { icon: '🏆', title: 'Eco Challenges', desc: 'Join 7, 30, or 90-day community challenges and compete for impact.' },
    { icon: '🌿', title: 'Green Score', desc: 'Your environmental impact score from 0–100 updated weekly.' },
    { icon: '🌍', title: 'Offset Marketplace', desc: 'Buy verified carbon offsets directly through the app.' },
    { icon: '📈', title: 'Impact Tracking', desc: 'See your cumulative environmental savings over time with rich charts.' },
  ];

  const stats = [
    { value: '1.2M', label: 'Tons CO₂ Tracked' },
    { value: '34%', label: 'Avg Reduction' },
    { value: '89K+', label: 'Challenges Completed' },
    { value: '520K+', label: 'Eco Warriors' },
  ];

  const pricing = [
    { tier: 'Free', price: 0, period: '', features: ['Basic tracking', 'Monthly report', 'Green Score', 'Community access'], cta: 'Start Tracking' },
    { tier: 'Eco+', price: annual ? 2.99 : 3.99, period: '/mo', features: ['Daily tips', 'All challenges', 'Carbon offsets', 'Weekly insights', 'Badge system'], cta: 'Go Eco+', popular: true },
    { tier: 'Planet', price: annual ? 4.99 : 6.99, period: '/mo', features: ['Family tracking (5)', 'API access', 'Premium challenges', 'All Eco+ features', 'Priority support'], cta: 'Save the Planet' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">EcoTrack</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Challenges</a>
            <a href="#" className="hover:text-white transition">Community</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">Sign In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 transition font-medium">Start Free</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 flex flex-col gap-3">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white">Challenges</a>
            <a href="#" className="text-gray-300 hover:text-white">Community</a>
            <button className="mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 font-medium">Start Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-32 left-1/3 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-48 right-1/3 w-48 h-48 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
            🌍 520K+ eco warriors and growing
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Measure. Reduce.{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Thrive.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Track your personal carbon footprint from travel, food, energy, and shopping. Get actionable reduction tips. Join community challenges to go greener together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-emerald-500/25">
              Track Your Footprint
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-900 transition">
              Join a Challenge
            </button>
          </div>
          {/* Interactive Carbon Demo */}
          <div className="mx-auto max-w-xl rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-gray-400 mb-4">⚡ Quick carbon check — tap an activity:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              {activities.map((a) => (
                <button
                  key={a.label}
                  onClick={() => setCarbonScore(a.kg)}
                  className={`px-3 py-2 rounded-lg text-sm border transition ${carbonScore === a.kg ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-gray-700 text-gray-400 hover:border-emerald-500/40'}`}
                >
                  {a.label}
                </button>
              ))}
            </div>
            {carbonScore !== null && (
              <div className="p-4 rounded-xl bg-black/50 border border-gray-800 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-400 text-sm font-medium">CO₂ Emitted</span>
                  <span className={`text-lg font-bold ${carbonScore > 10 ? 'text-red-400' : carbonScore > 3 ? 'text-yellow-400' : 'text-emerald-400'}`}>{carbonScore} kg</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${carbonScore > 10 ? 'bg-red-500' : carbonScore > 3 ? 'bg-yellow-500' : 'bg-emerald-500'}`}
                    style={{ width: `${Math.min((carbonScore / 100) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {carbonScore > 10 ? '🔴 High impact — consider alternatives' : carbonScore > 3 ? '🟡 Moderate — room for improvement' : '🟢 Low impact — great choice!'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-gray-800 bg-gray-900/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tools to <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Go Green</span></h2>
          <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">Everything you need to understand and shrink your environmental footprint.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-emerald-500/40 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing That&apos;s <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">Planet‑Friendly</span></h2>
          <p className="text-gray-400 mb-8">Start free. Go deeper when you're ready to make real impact.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-emerald-500' : 'bg-gray-700'}`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : ''}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-emerald-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className={`p-8 rounded-2xl border ${p.popular ? 'border-emerald-500 bg-gray-900 shadow-lg shadow-emerald-500/10 relative' : 'border-gray-800 bg-gray-900'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-xs font-bold">POPULAR</div>}
                <h3 className="text-xl font-bold mb-2">{p.tier}</h3>
                <div className="mb-6"><span className="text-4xl font-extrabold">${p.price}</span><span className="text-gray-400">{p.period}</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-emerald-400">✓</span>{feat}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90' : 'border border-gray-700 hover:bg-gray-800'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌱</span>
            <span className="font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">EcoTrack</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 EcoTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
