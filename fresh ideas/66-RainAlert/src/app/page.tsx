'use client';
import { useState } from 'react';

export default function RainAlertLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Hourly forecast', 'Basic rain alerts', 'Current conditions', 'Single location'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Storm',
      price: annual ? '$2.49' : '$2.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Minute-by-minute forecast', 'Smart alerts', 'Rain timeline', 'Up to 5 locations', 'Umbrella score'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Weather Pro',
      price: annual ? '$4.99' : '$5.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Everything in Storm', 'API access', 'Commute guard', 'Historical data', 'Home screen widgets', 'Priority support'],
      cta: 'Go Pro',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Minute-by-Minute', desc: 'Precipitation forecast for the next 2 hours broken down to the minute so you can plan every step.', icon: '⏱️' },
    { title: 'Block-Level Accuracy', desc: 'Radar + AI = predictions for your exact location, not a generic city-wide guess.', icon: '📍' },
    { title: 'Smart Alerts', desc: 'Get notified 5, 10, 15, or 30 minutes before rain starts at your location.', icon: '🔔' },
    { title: 'Rain Timeline', desc: 'Visual timeline showing when rain starts, peaks, and stops so you see the full picture.', icon: '📊' },
    { title: 'Commute Guard', desc: 'Rain alerts timed to your daily commute schedule — morning and evening.', icon: '🚗' },
    { title: 'Umbrella Score', desc: 'Daily "do I need an umbrella?" score from 0-100. One glance, one decision.', icon: '☂️' },
  ];

  const stats = [
    { value: '94%', label: 'Accuracy within 15 min' },
    { value: '2.1M', label: 'Alerts sent daily' },
    { value: '890K+', label: 'Active users' },
    { value: '60s', label: 'Update frequency' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">RainAlert</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#stats" className="hover:text-white transition">Stats</a>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">Get Started</button>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 text-blue-400 text-xs mb-6">⛈️ Hyperlocal Rain Prediction</div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Rain in 12 Minutes?{' '}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">We&apos;ll Tell You.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Hyperlocal rain prediction accurate to the minute and the block. Know exactly when rain starts and stops at your exact location. Never get caught again.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">Download Free</button>
          <button className="border border-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition">See How It Works</button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Rain Intelligence, Reinvented</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Every feature is engineered to give you hyperlocal, accurate rain data exactly when you need it.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-center mb-8">Save 17% with annual billing.</p>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-blue-500' : 'bg-gray-700'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 border ${p.highlight ? 'border-blue-500 bg-blue-500/5' : 'border-gray-800 bg-gray-900/40'}`}>
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-gray-500 text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((ft) => (
                  <li key={ft} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-blue-400">✓</span>{ft}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90' : 'border border-gray-700 hover:border-gray-500'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">RainAlert</div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-sm text-gray-600">© 2026 RainAlert. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}