'use client';
import { useState } from 'react';

export default function NapGeniusLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '',
      features: ['Basic nap timer', 'Manual tracking', 'Sleep tips library', 'Community forum'],
      cta: 'Start Napping',
      highlight: false,
    },
    {
      name: 'Genius',
      price: annual ? '$2.99' : '$3.99',
      period: '/mo',
      features: ['Optimal nap window', 'Smart alarm', 'Chronotype profile', 'Energy tracking', 'Nap history'],
      cta: 'Go Genius',
      highlight: true,
    },
    {
      name: 'Lab',
      price: annual ? '$4.99' : '$6.99',
      period: '/mo',
      features: ['Everything in Genius', 'Energy analytics', 'NASA method', 'Family profiles', 'Wearable sync'],
      cta: 'Go Lab',
      highlight: false,
    },
  ];

  const features = [
    { icon: '🧠', title: 'Optimal Window', desc: 'AI calculates the best time to nap based on your biology and schedule.' },
    { icon: '⏰', title: 'Smart Alarm', desc: 'Wakes you at the lightest sleep phase — no grogginess, ever.' },
    { icon: '🦁', title: 'Chronotype Profile', desc: 'Lion, Bear, Wolf, or Dolphin — discover your energy pattern.' },
    { icon: '⚡', title: 'Energy Tracking', desc: 'Log energy levels throughout the day to refine nap predictions.' },
    { icon: '🚀', title: 'NASA Method', desc: '26-minute nap protocol used by NASA pilots for peak performance.' },
    { icon: '🌅', title: 'Post-Nap Routine', desc: 'Guided wake-up routine for maximum alertness after every nap.' },
  ];

  const stats = [
    { value: '2.1M', label: 'Naps Optimized' },
    { value: '34%', label: 'Performance Boost' },
    { value: '340K+', label: 'Nappers' },
    { value: '4', label: 'Chronotypes Supported' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">NapGenius</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Science</a>
          </div>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">Try Free</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6">Science-Backed Napping</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Nap Like a{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Genius</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Science says a 26-minute nap boosts performance by 34%. NapGenius finds your optimal nap window based on your circadian rhythm and daily schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 px-8 py-3 rounded-lg font-medium text-lg hover:opacity-90 transition">Find Your Window — Free</button>
            <button className="border border-white/20 px-8 py-3 rounded-lg font-medium text-lg hover:bg-white/5 transition">Learn the Science</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Napping, Perfected by Science</h2>
          <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">Six features that turn a simple nap into a performance tool.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/40 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Invest in Rest</h2>
          <p className="text-gray-400 text-center mb-8">Better naps cost less than your daily coffee.</p>
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-3 bg-white/5 rounded-full p-1">
              <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>Annual <span className="text-xs opacity-75">Save 25%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl border ${plan.highlight ? 'border-indigo-500 bg-indigo-500/5' : 'border-white/10 bg-white/5'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-indigo-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition ${plan.highlight ? 'bg-gradient-to-r from-indigo-500 to-blue-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/5'}`}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">NapGenius</div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Research</a>
          </div>
          <div className="text-sm text-gray-500">© 2026 NapGenius. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
