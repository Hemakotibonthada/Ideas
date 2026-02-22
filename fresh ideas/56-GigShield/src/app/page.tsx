'use client';
import { useState } from 'react';

export default function GigShieldLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      desc: 'Basic tracking & rights center',
      features: ['Basic income tracking', 'Rights center access', 'Single platform', 'Community forum'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Shield',
      monthly: 4.99,
      yearly: 49.99,
      desc: 'Tax estimator & expense tracker',
      features: ['Everything in Free', 'Tax estimator', 'Expense tracker', 'Mileage logging', 'Multi-platform sync', 'Email support'],
      cta: 'Upgrade to Shield',
      highlight: true,
    },
    {
      name: 'Fortress',
      monthly: 9.99,
      yearly: 99.99,
      desc: 'Full protection suite',
      features: ['Everything in Shield', 'Insurance connect', 'Emergency fund AI', 'Priority support', 'Annual tax report', 'Deduction optimizer'],
      cta: 'Go Fortress',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Income Dashboard', desc: 'Track earnings across Uber, DoorDash, Fiverr, and more from a single unified view.', icon: '💰' },
    { title: 'Tax Estimator', desc: 'Quarterly tax estimates so you\'re never surprised when filing season arrives.', icon: '🧾' },
    { title: 'Rights Center', desc: 'Know your labor rights by state and platform — stay informed and protected.', icon: '⚖️' },
    { title: 'Expense Tracker', desc: 'Mileage, supplies, and deductions auto-logged to maximize your take-home pay.', icon: '📊' },
    { title: 'Emergency Fund', desc: 'AI calculates your ideal safety net target based on your income patterns.', icon: '🛡️' },
    { title: 'Insurance Connect', desc: 'Affordable income protection insurance plans tailored for gig workers.', icon: '🏥' },
  ];

  const stats = [
    { value: '$340M', label: 'Income Tracked' },
    { value: '120K+', label: 'Gig Workers' },
    { value: '89%', label: 'Tax Accuracy' },
    { value: '7', label: 'Platforms Supported' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">GigShield</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-amber-400 transition">Features</a>
            <a href="#pricing" className="hover:text-amber-400 transition">Pricing</a>
            <a href="#stats" className="hover:text-amber-400 transition">Stats</a>
          </div>
          <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm mb-6">🛡️ Trusted by 120K+ gig workers</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Protect Your Gig Income</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Track earnings across all gig platforms, understand your rights, file taxes correctly, and access income protection insurance — all designed for gig workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-8 py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/25">Start Free Today</button>
            <button className="border border-amber-500/30 text-amber-400 px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-amber-500/10 transition">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-amber-500/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-500 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need to <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Protect Your Income</span></h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Built specifically for gig economy workers who deserve better tools and protection.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-900/50 border border-amber-500/10 rounded-2xl p-6 hover:border-amber-500/30 transition group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-400 transition">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">Transparent Pricing</span></h2>
          <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">Choose the plan that fits your gig hustle. Upgrade or downgrade anytime.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-amber-500' : 'bg-gray-700'}`}>
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-amber-400 text-xs ml-1">Save 17%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition ${p.highlight ? 'border-amber-500 bg-amber-500/5 shadow-lg shadow-amber-500/10 scale-105' : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'}`}>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${annual ? p.yearly : p.monthly}</span>
                  <span className="text-gray-500 text-sm">/{annual ? 'year' : 'mo'}</span>
                </div>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition ${p.highlight ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-amber-500/50'}`}>{p.cta}</button>
                <ul className="mt-6 space-y-3">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400"><span className="text-amber-500">✓</span>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-500/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">GigShield</div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-400 transition">Privacy</a>
            <a href="#" className="hover:text-amber-400 transition">Terms</a>
            <a href="#" className="hover:text-amber-400 transition">Support</a>
            <a href="#" className="hover:text-amber-400 transition">Blog</a>
          </div>
          <div className="text-gray-600 text-sm">© 2026 GigShield. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
