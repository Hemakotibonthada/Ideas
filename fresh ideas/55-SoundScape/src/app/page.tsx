'use client';
import { useState } from 'react';

export default function SoundScapeLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: '',
      features: ['20 ambient sounds', '3 layers max', 'Mood presets', 'Community access'],
      cta: 'Start Listening',
      highlight: false,
    },
    {
      name: 'Pro',
      price: annual ? 3.19 : 3.99,
      period: '/mo',
      features: ['200+ sounds', 'Unlimited layers', 'Binaural beats', 'Timer mode', 'No ads', 'Custom presets'],
      cta: 'Go Pro',
      highlight: true,
    },
    {
      name: 'Studio',
      price: annual ? 5.59 : 6.99,
      period: '/mo',
      features: ['Everything in Pro', 'Offline downloads', 'Recording & export', 'Custom sound uploads', 'Team sharing', 'Priority support'],
      cta: 'Get Studio',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Sound Mixer', desc: 'Layer unlimited ambient sounds with individual volume controls. Fine-tune rain intensity, fireplace crackle, wind strength — every detail.', icon: '🎚️' },
    { title: 'Community Mixes', desc: 'Discover and share ambient mixes with the community. Browse curated collections for work, sleep, study, and meditation.', icon: '🌐' },
    { title: 'Mood Presets', desc: 'Focus, relax, sleep, meditate — one-tap presets designed by audio engineers and backed by neuroscience research.', icon: '🎭' },
    { title: 'Timer Mode', desc: 'Auto-fade and stop after a set duration. Perfect for falling asleep or focused work sessions with natural wind-down.', icon: '⏱️' },
    { title: 'Binaural Beats', desc: 'Scientifically-tuned frequencies for brain entrainment. Alpha waves for focus, theta for creativity, delta for deep sleep.', icon: '🧠' },
    { title: 'Offline Mode', desc: 'Download your favorite mixes for airplane mode and no-wifi environments. Listen anywhere, anytime, without streaming.', icon: '✈️' },
  ];

  const stats = [
    { value: '12M+', label: 'Hours Played' },
    { value: '200+', label: 'Ambient Sounds' },
    { value: '45K+', label: 'Community Mixes' },
    { value: '34%', label: 'Productivity Boost' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">SoundScape</span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Community</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 text-sm font-medium hover:opacity-90 transition">Open Mixer</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-60 right-1/3 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-8">🎧 12M+ hours of ambient bliss</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Your Perfect{' '}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">Ambient Sound</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Mix rain, fireplace, coffee shop, birds, and 200+ sounds into your perfect focus or sleep environment. Scientifically designed to boost productivity and calm.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 font-semibold hover:opacity-90 transition text-lg">Start Mixing Free</button>
            <button className="px-8 py-3 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition text-lg">Browse Sounds</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Craft Your Perfect Soundscape</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">Powerful audio tools for focus, relaxation, and sleep.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center mb-4 text-xl">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-400 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Find Your Frequency</h2>
          <p className="text-gray-400 text-center mb-8">Start free. Unlock the full sound library when you're ready.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-sky-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-sky-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border ${p.highlight ? 'border-sky-500 bg-sky-500/10 scale-105' : 'border-white/10 bg-white/5'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${p.price}</span>
                  {p.period && <span className="text-gray-400">{p.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((ft) => (
                    <li key={ft} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-sky-400">✓</span> {ft}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-sky-500 to-blue-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/5'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">SoundScape</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Sound Library</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 SoundScape. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
