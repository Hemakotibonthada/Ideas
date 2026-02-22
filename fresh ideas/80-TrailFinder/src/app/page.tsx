'use client';
import { useState } from 'react';

export default function TrailFinderLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '',
      features: ['Browse all trails', 'Basic conditions', 'Community photos', 'Trail search'],
      cta: 'Start Exploring',
      highlight: false,
    },
    {
      name: 'Explorer',
      price: annual ? '$2.99' : '$3.99',
      period: '/mo',
      features: ['Crowd meter', 'Weather overlay', 'Offline maps', 'Difficulty details', 'Saved trails'],
      cta: 'Go Explorer',
      highlight: true,
    },
    {
      name: 'Ranger',
      price: annual ? '$5.99' : '$7.99',
      period: '/mo',
      features: ['Everything in Explorer', 'Advanced analytics', 'Trip planning tools', 'Group features', 'Priority reports'],
      cta: 'Go Ranger',
      highlight: false,
    },
  ];

  const features = [
    { icon: '🌧️', title: 'Trail Conditions', desc: 'Real-time reports on mud, snow, closures, and hazards from fellow hikers.' },
    { icon: '👥', title: 'Crowd Meter', desc: 'Know how busy a trail is before you drive there — save time and frustration.' },
    { icon: '🌤️', title: 'Weather Overlay', desc: 'Trail-specific weather forecasts for the next 48 hours.' },
    { icon: '⛰️', title: 'Difficulty Ratings', desc: 'Detailed difficulty with elevation, distance, and terrain breakdowns.' },
    { icon: '📸', title: 'Photo Timeline', desc: 'See recent photos from the trail, sorted by date for up-to-date views.' },
    { icon: '📍', title: 'Offline Maps', desc: 'Download topographic maps for hiking without cell signal.' },
  ];

  const stats = [
    { value: '45K+', label: 'Trails Mapped' },
    { value: '890K+', label: 'Condition Reports' },
    { value: '340K+', label: 'Hikers' },
    { value: '120+', label: 'National Parks' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">TrailFinder</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Coverage</a>
          </div>
          <button className="bg-gradient-to-r from-green-500 to-yellow-500 px-5 py-2 rounded-lg text-sm font-medium text-black hover:opacity-90 transition">Find Trails</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">Real-Time Trail Intel</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Find Your Next{' '}
            <span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Real-time trail conditions, crowd levels, and weather for every hiking trail. Crowdsourced updates so you always know what you&apos;re getting into before you go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-yellow-500 px-8 py-3 rounded-lg font-medium text-lg text-black hover:opacity-90 transition">Explore Trails — Free</button>
            <button className="border border-white/20 px-8 py-3 rounded-lg font-medium text-lg hover:bg-white/5 transition">See Coverage Map</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Know Before You Go</h2>
          <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">Six features that ensure every hike is a great hike.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/40 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Hit the Trail for Less</h2>
          <p className="text-gray-400 text-center mb-8">Free to browse. Upgrade to get the full picture.</p>
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-3 bg-white/5 rounded-full p-1">
              <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-gradient-to-r from-green-500 to-yellow-500 text-black' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
              <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-gradient-to-r from-green-500 to-yellow-500 text-black' : 'text-gray-400 hover:text-white'}`}>Annual <span className="text-xs opacity-75">Save 25%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`p-8 rounded-2xl border ${plan.highlight ? 'border-green-500 bg-green-500/5' : 'border-white/10 bg-white/5'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-medium transition ${plan.highlight ? 'bg-gradient-to-r from-green-500 to-yellow-500 text-black hover:opacity-90' : 'border border-white/20 hover:bg-white/5'}`}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">TrailFinder</div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Trail Blog</a>
          </div>
          <div className="text-sm text-gray-500">© 2026 TrailFinder. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
