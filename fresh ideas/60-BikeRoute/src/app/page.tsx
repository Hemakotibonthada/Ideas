'use client';
import { useState } from 'react';

export default function BikeRouteLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      desc: 'Basic routing & community reports',
      features: ['Basic route planning', 'Community hazard reports', 'Standard map view', 'Distance tracking', 'Public routes'],
      cta: 'Ride Free',
      highlight: false,
    },
    {
      name: 'Cyclist',
      monthly: 3.99,
      yearly: 39.99,
      desc: 'Safe routing, elevation & weather',
      features: ['Everything in Free', 'Safe route engine', 'Elevation profiles', 'Weather integration', 'Bike-friendly POIs', 'Offline maps'],
      cta: 'Go Cyclist',
      highlight: true,
    },
    {
      name: 'Club',
      monthly: 9.99,
      yearly: 99.99,
      desc: 'Team features & advanced analytics',
      features: ['Everything in Cyclist', 'Team ride planning', 'Group leaderboards', 'Advanced analytics', 'Route export (GPX/KML)', 'Priority support'],
      cta: 'Join Club',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Safe Route Engine', desc: 'Prioritizes bike lanes, dedicated paths, and low-traffic roads to keep you safe on every ride.', icon: '🛡️' },
    { title: 'Elevation Profile', desc: 'See every climb and descent before you ride — plan for hills or avoid them entirely.', icon: '⛰️' },
    { title: 'Hazard Alerts', desc: 'Real-time community reports of potholes, glass, construction, and other road hazards.', icon: '⚠️' },
    { title: 'Bike-Friendly POIs', desc: 'Find bike shops, water fountains, rest stops, and secure parking along your route.', icon: '📍' },
    { title: 'Ride Tracker', desc: 'GPS tracking with speed, distance, calories, and detailed ride history and statistics.', icon: '📊' },
    { title: 'Weather Integration', desc: 'Wind direction, rain alerts, and temperature forecasts specific to your planned route.', icon: '🌤️' },
  ];

  const stats = [
    { value: '2.1M', label: 'Routes Planned' },
    { value: '45%', label: 'Fewer Incidents' },
    { value: '340K+', label: 'Active Cyclists' },
    { value: '120+', label: 'Cities Covered' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-green-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">BikeRoute</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-green-400 transition">Features</a>
            <a href="#pricing" className="hover:text-green-400 transition">Pricing</a>
            <a href="#stats" className="hover:text-green-400 transition">Impact</a>
          </div>
          <button className="bg-gradient-to-r from-green-500 to-lime-500 text-black px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition">Plan a Ride</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">🚴 45% fewer incidents on our routes</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">Ride Safe. Ride Smart.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Cycling route planner that prioritizes bike lanes, low-traffic roads, and safe intersections. Real-time hazard alerts from the cycling community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-lime-500 text-black px-8 py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-green-500/25">Plan Your First Ride</button>
            <button className="border border-green-500/30 text-green-400 px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-green-500/10 transition">Explore Routes</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-green-500/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-500 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built for <span className="bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">Safer Cycling</span></h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Every feature is designed to get you where you&apos;re going safely and enjoyably.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-900/50 border border-green-500/10 rounded-2xl p-6 hover:border-green-500/30 transition group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your <span className="bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">Ride Plan</span></h2>
          <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">From casual commuters to cycling clubs — there&apos;s a plan for every rider.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-green-500' : 'bg-gray-700'}`}>
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-green-400 text-xs ml-1">Save 17%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition ${p.highlight ? 'border-green-500 bg-green-500/5 shadow-lg shadow-green-500/10 scale-105' : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'}`}>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${annual ? p.yearly : p.monthly}</span>
                  <span className="text-gray-500 text-sm">/{annual ? 'year' : 'mo'}</span>
                </div>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition ${p.highlight ? 'bg-gradient-to-r from-green-500 to-lime-500 text-black hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-green-500/50'}`}>{p.cta}</button>
                <ul className="mt-6 space-y-3">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400"><span className="text-green-500">✓</span>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">Ride Safer?</span></h2>
          <p className="text-gray-400 mb-8">Join 340K+ cyclists who trust BikeRoute for every ride. Plan your first route free.</p>
          <button className="bg-gradient-to-r from-green-500 to-lime-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-green-500/25">Plan Your Route Free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">BikeRoute</div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-green-400 transition">Privacy</a>
            <a href="#" className="hover:text-green-400 transition">Terms</a>
            <a href="#" className="hover:text-green-400 transition">Support</a>
            <a href="#" className="hover:text-green-400 transition">Community</a>
          </div>
          <div className="text-gray-600 text-sm">© 2026 BikeRoute. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
