'use client';

import { useState } from 'react';

export default function SafeWalkLanding() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDemo, setActiveDemo] = useState<number | null>(null);

  const stats = [
    { value: '4.2M', label: 'Safe Walks' },
    { value: '73%', label: 'Safer Routes Chosen' },
    { value: '180+', label: 'Cities' },
    { value: '24/7', label: 'Live Monitoring' },
  ];

  const features = [
    { title: 'Safe Route Engine', desc: 'AI calculates the safest path, not just the shortest. Factors in lighting, foot traffic, and incident history.', icon: '🛡️' },
    { title: 'Live Safety Map', desc: 'Real-time crowd density and crime heatmaps so you always know what's ahead.', icon: '🗺️' },
    { title: 'Walk Sharing', desc: 'Share your live location with trusted contacts while you walk. They see your route in real time.', icon: '📍' },
    { title: 'SOS Button', desc: 'One-tap emergency alert that sends your exact GPS location to emergency contacts and local services.', icon: '🚨' },
    { title: 'Community Reports', desc: 'Report hazards, poorly lit areas, and suspicious activity. Help make your neighborhood safer for everyone.', icon: '📢' },
    { title: 'Safety Score', desc: 'Rate and review neighborhoods by real safety metrics. See aggregated scores before you go.', icon: '⭐' },
  ];

  const pricing = [
    { name: 'Free', price: '$0', period: '', features: ['Basic safe routes', '3 walks/day', 'Community reports', 'Safety scores'], cta: 'Get Started', highlight: false },
    { name: 'Plus', price: isAnnual ? '$2.99' : '$3.99', period: '/mo', features: ['Live walk sharing', 'SOS button', 'Premium routes', 'No ads', 'Priority alerts'], cta: 'Go Plus', highlight: true },
    { name: 'Family', price: isAnnual ? '$5.99' : '$7.99', period: '/mo', features: ['Up to 6 members', 'Guardian tracking', 'Auto-alerts', 'Family dashboard', 'Everything in Plus'], cta: 'Protect Family', highlight: false },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center font-bold text-sm">SW</div>
            <span className="text-xl font-bold">SafeWalk</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#demo" className="hover:text-white transition">Demo</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-rose-500 text-white font-medium hover:opacity-90 transition">Download</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
            <a href="#demo" className="text-gray-400 hover:text-white">Demo</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-rose-500 text-white font-medium">Download</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 text-red-400 text-sm mb-6">🚶 Walk Home Safer</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">
            Walk Home Safer
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Real-time safe route planning using crime data, street lighting, crowd density, and live reports. Share your walk with trusted contacts for peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-red-500/25">
              Start Walking Safe
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:border-gray-500 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need to Walk Safely</h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Powered by real-time data and AI to make every walk safer.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeDemo === i ? 'border-red-500 bg-red-500/5 scale-[1.02]' : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'}`}
                onClick={() => setActiveDemo(activeDemo === i ? null : i)}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                {activeDemo === i && (
                  <div className="mt-4 pt-4 border-t border-red-500/20 text-sm text-red-400">
                    ✨ Interactive preview coming soon
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Protection</h2>
          <p className="text-gray-500 text-center mb-8">Safety shouldn&apos;t be a luxury. Start free, upgrade anytime.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              className="w-12 h-6 rounded-full bg-gray-700 relative transition"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-rose-500 absolute top-0.5 transition-all ${isAnnual ? 'left-6' : 'left-0.5'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-red-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${p.highlight ? 'border-red-500 bg-gradient-to-b from-red-500/10 to-transparent' : 'border-gray-800 bg-gray-900/50'}`}>
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-gray-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-red-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition ${p.highlight ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-gray-500'}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center font-bold text-sm">SW</div>
            <span className="font-bold">SafeWalk</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 SafeWalk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
