'use client';
import { useState } from 'react';

export default function BabyLogLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      features: ['1 baby profile', 'Basic feed/sleep/diaper logging', 'Daily summary view', 'Web access'],
      cta: 'Start Logging',
      highlight: false,
    },
    {
      name: 'Parent',
      monthly: 3.99,
      yearly: 39.99,
      features: ['Unlimited baby profiles', 'WHO growth charts', 'Milestone tracker', 'Custom notes & tags', 'Data export'],
      cta: 'Go Parent',
      highlight: true,
    },
    {
      name: 'Family',
      monthly: 6.99,
      yearly: 69.99,
      features: ['Partner real-time sync', 'Doctor-ready exports', 'Photo timeline', 'Caregiver access', 'All Parent features'],
      cta: 'Get Family',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Feed Tracker', desc: 'Breast, bottle, or solids — track time, amount, side, and duration with one-tap logging.', icon: '🍼' },
    { title: 'Sleep Logger', desc: 'Nap and night sleep tracking with duration, quality, and wake-up patterns over time.', icon: '😴' },
    { title: 'Diaper Log', desc: 'Quick tap logging with timestamps, type, and notes — never lose track of changes.', icon: '👶' },
    { title: 'Growth Charts', desc: 'Track weight, height, and head circumference — plotted on WHO standard curves for your baby.', icon: '📊' },
    { title: 'Milestone Tracker', desc: '120+ developmental milestones with age-appropriate guides so you never miss a moment.', icon: '🏆' },
    { title: 'Partner Sync', desc: 'Both parents see the same data in real-time — so whoever is on duty has the full picture.', icon: '👫' },
  ];

  const stats = [
    { value: '890K+', label: 'Babies Tracked' },
    { value: '45M+', label: 'Logs Recorded' },
    { value: '340K+', label: 'Happy Parents' },
    { value: '120+', label: 'Developmental Milestones' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👶</span>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">BabyLog</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Community</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-pink-500 text-white text-sm font-medium hover:opacity-90 transition">
            Start Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm mb-6">
            Track Every Precious Moment
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">BabyLog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete newborn care tracker for feeding, sleep, diapers, growth, and milestones. So you can answer every pediatrician question with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-pink-500 text-white font-semibold hover:opacity-90 transition text-lg">
              Start Tracking Free
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:bg-gray-900 transition text-lg">
              See a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything for <span className="bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">New Parents</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">One app to track feeding, sleep, diapers, growth, and every milestone.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-sky-500/30 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-400 transition">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple Plans for Growing Families</h2>
          <p className="text-gray-500 text-center mb-8">Start free with one baby. Upgrade as your family grows.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-gradient-to-r from-sky-500 to-pink-500' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-pink-400 text-xs">(Save 17%)</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border ${p.highlight ? 'border-sky-500 bg-gray-900/80 scale-105' : 'border-gray-800 bg-gray-900/40'} transition hover:border-sky-500/50`}>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? p.yearly : p.monthly}</span>
                  <span className="text-gray-500 text-sm">/{annual ? 'year' : 'mo'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-sky-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-sky-500 to-pink-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">👶</span>
            <span className="font-bold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">BabyLog</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Help Center</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-gray-600 text-sm">© 2026 BabyLog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
