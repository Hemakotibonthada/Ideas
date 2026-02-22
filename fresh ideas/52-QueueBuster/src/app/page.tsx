'use client';
import { useState } from 'react';

export default function QueueBusterLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: '',
      features: ['View live wait times', 'Report waits', 'Basic venue search', 'Community access'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Buster+',
      price: annual ? 2.39 : 2.99,
      period: '/mo',
      features: ['Virtual queue joining', 'Wait drop alerts', 'AI predictions', 'Historical data', 'Ad-free experience'],
      cta: 'Upgrade Now',
      highlight: true,
    },
    {
      name: 'Business',
      price: annual ? 15.99 : 19.99,
      period: '/mo',
      features: ['Everything in Buster+', 'Venue dashboard', 'Real-time analytics', 'Queue management', 'Customer insights', 'API access'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Live Wait Map', desc: 'See current wait times at nearby venues in real-time on an interactive map. Color-coded from green to red for quick scanning.', icon: '📍' },
    { title: 'Historical Patterns', desc: 'Know the best day and hour to visit any venue based on months of crowdsourced data and smart pattern analysis.', icon: '📊' },
    { title: 'Wait Alerts', desc: 'Get instantly notified when the wait at your favorite spot drops below your custom threshold. Never miss the sweet spot.', icon: '🔔' },
    { title: 'Join Remotely', desc: 'Virtual queue — wait from home, your car, or a coffee shop at participating venues. Show up right when it\'s your turn.', icon: '🏠' },
    { title: 'Crowd Predictions', desc: 'AI predicts wait times for the next 3 hours based on historical data, weather, events, and real-time crowd patterns.', icon: '🤖' },
    { title: 'Venue Rankings', desc: 'Find the least crowded option near you. Compare similar venues side-by-side and pick the one with the shortest wait.', icon: '🏆' },
  ];

  const stats = [
    { value: '45K+', label: 'Venues Tracked' },
    { value: '12 min', label: 'Avg Saved Per Visit' },
    { value: '890K+', label: 'Wait Reports' },
    { value: '92%', label: 'Accuracy Rate' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">QueueBuster</span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Impact</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-red-500 text-sm font-medium hover:opacity-90 transition">Download App</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium mb-8">⏱ Real-time wait data</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Skip the Wait.{' '}
            <span className="bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">Know Before You Go.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Real-time wait times for restaurants, stores, DMVs, and more. Crowdsourced and live-updated every minute. Never waste time in line again.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 font-semibold hover:opacity-90 transition text-lg">Check Wait Times</button>
            <button className="px-8 py-3 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition text-lg">For Businesses</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Never Wait in Line Again</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">Smart tools that give you back hours of your life every week.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/50 transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center mb-4 text-xl">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-400 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 text-center mb-8">Free for casual users. Upgrade to bust every queue.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-rose-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-rose-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border ${p.highlight ? 'border-rose-500 bg-rose-500/10 scale-105' : 'border-white/10 bg-white/5'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${p.price}</span>
                  {p.period && <span className="text-gray-400">{p.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((ft) => (
                    <li key={ft} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-rose-400">✓</span> {ft}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-rose-500 to-red-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/5'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">QueueBuster</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 QueueBuster. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
