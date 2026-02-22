'use client';
import { useState } from 'react';

export default function CarPoolLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      features: ['Basic route matching', '5 rides per month', 'Public profiles', 'In-app messaging'],
      cta: 'Start Riding',
      highlight: false,
    },
    {
      name: 'Commuter',
      monthly: 3.99,
      yearly: 39.99,
      features: ['Unlimited rides', 'Flex schedule support', 'Vehicle preferences', 'Priority matching', 'Carbon dashboard'],
      cta: 'Go Commuter',
      highlight: true,
    },
    {
      name: 'Enterprise',
      monthly: 2,
      yearly: 20,
      features: ['Per user/month pricing', 'Company admin dashboard', 'Sustainability reports', 'SSO integration', 'All Commuter features'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Route Matching', desc: 'AI finds riders on your exact route and schedule — no detours, no wasted time.', icon: '🗺️' },
    { title: 'Split Calculator', desc: 'Automatically splits gas costs fairly among all riders based on distance and vehicle.', icon: '💰' },
    { title: 'Verified Profiles', desc: 'Company email verification ensures you only ride with trusted coworkers and neighbors.', icon: '✅' },
    { title: 'Flex Schedule', desc: 'Adapts to changing schedules seamlessly — skip days, change times, no penalties.', icon: '📅' },
    { title: 'Vehicle Preferences', desc: 'Filter by car type, music taste, pet-friendly, smoking policy, and conversation level.', icon: '🚗' },
    { title: 'Carbon Dashboard', desc: 'See exactly how much CO₂ you're saving by carpooling — track your environmental impact.', icon: '🌍' },
  ];

  const stats = [
    { value: '$45M', label: 'Saved in Gas' },
    { value: '1.2M', label: 'Rides Shared' },
    { value: '890K+', label: 'Commuters' },
    { value: '2.1M', label: 'Tons CO₂ Saved' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚘</span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">CarPool</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Impact</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm font-medium hover:opacity-90 transition">
            Find a Ride
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            Share the Ride. Share the Savings.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">CarPool</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI matches you with neighbors and coworkers on the same route and schedule. Split gas, reduce traffic, and cut your commute costs by up to 60%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold hover:opacity-90 transition text-lg">
              Find Riders Nearby
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:bg-gray-900 transition text-lg">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Smarter Commuting with <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">AI Matching</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Save money, save the planet, and make your commute enjoyable.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Rides for Every Budget</h2>
          <p className="text-gray-500 text-center mb-8">Free forever for casual riders. Upgrade for the full commuter experience.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-green-400 text-xs">(Save 17%)</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border ${p.highlight ? 'border-blue-500 bg-gray-900/80 scale-105' : 'border-gray-800 bg-gray-900/40'} transition hover:border-blue-500/50`}>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? p.yearly : p.monthly}</span>
                  <span className="text-gray-500 text-sm">/{annual ? 'year' : 'mo'}{p.name === 'Enterprise' ? '/user' : ''}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-green-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
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
            <span className="text-xl">🚘</span>
            <span className="font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">CarPool</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Safety</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-gray-600 text-sm">© 2026 CarPool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
