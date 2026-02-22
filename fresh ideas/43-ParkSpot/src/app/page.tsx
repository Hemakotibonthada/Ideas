'use client';
import { useState } from 'react';

export default function ParkSpotLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const price = (monthly: number) =>
    annual ? `$${(monthly * 10 / 12).toFixed(2)}` : `$${monthly.toFixed(2)}`;

  const features = [
    { icon: '🗺️', title: 'Live Parking Map', desc: 'See real-time available spots near your destination on an interactive, crowd-powered map.' },
    { icon: '🤖', title: 'Spot Predictions', desc: 'AI predicts parking availability based on time of day, day of week, and area patterns.' },
    { icon: '💰', title: 'Price Comparison', desc: 'Compare garage, lot, and meter rates instantly. Always find the cheapest option nearby.' },
    { icon: '🔔', title: 'Spot Alerts', desc: 'Set a destination and get notified the moment a spot opens near where you\'re headed.' },
    { icon: '📋', title: 'Street Rules', desc: 'Know parking rules, time limits, permit zones, and restrictions before you park.' },
    { icon: '🏗️', title: 'Garage Navigator', desc: 'Indoor turn-by-turn navigation to open spots inside parking garages and structures.' },
  ];

  const stats = [
    { value: '12M+', label: 'Spots Reported' },
    { value: '8 min', label: 'Avg Time Saved' },
    { value: '890K+', label: 'Drivers' },
    { value: '340+', label: 'Cities' },
  ];

  const plans = [
    { name: 'Free', price: 0, features: ['Basic parking map', 'Community spot reports', 'Street rules info', 'Meter reminders'], cta: 'Start Free' },
    { name: 'Driver', price: 2.99, features: ['AI spot predictions', 'Price comparison', 'Spot alerts', 'Garage navigation', 'Ad-free experience'], cta: 'Go Driver', popular: true },
    { name: 'Fleet', price: 9.99, features: ['Everything in Driver', 'Fleet management API', 'Bulk analytics dashboard', 'Multi-vehicle tracking', 'Priority support'], cta: 'Start Fleet' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">🅿️</span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">ParkSpot</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Cities</a>
            <a href="#" className="hover:text-white transition">Drivers</a>
            <button className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:opacity-90 transition">Get Started</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 space-y-3 text-gray-300">
            <a href="#features" className="block hover:text-white">Features</a>
            <a href="#pricing" className="block hover:text-white">Pricing</a>
            <a href="#" className="block hover:text-white">Cities</a>
            <a href="#" className="block hover:text-white">Drivers</a>
            <button className="w-full mt-2 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
            📍 Real-Time Crowdsourced Parking
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Park in <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Seconds</span>. Not Minutes.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Real-time crowdsourced parking map. See open spots before you arrive. Save time, fuel, and frustration every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-blue-500/25">
              Find Parking Now — Free
            </button>
            <button className="px-8 py-3.5 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800 transition">
              See Coverage Map
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Parking Made <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Effortless</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">From finding spots to navigating garages, ParkSpot handles every parking headache.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${activeFeature === i ? 'border-blue-500 bg-blue-500/10 scale-[1.02]' : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'}`}
              onClick={() => setActiveFeature(activeFeature === i ? null : i)}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Save Time & <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Money</span></h2>
            <p className="text-gray-400 text-lg mb-8">Free for everyday drivers. Pro features for power parkers and fleets.</p>
            <div className="inline-flex items-center gap-3 bg-gray-800 rounded-full p-1">
              <button className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'text-gray-400'}`} onClick={() => setAnnual(false)}>Monthly</button>
              <button className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' : 'text-gray-400'}`} onClick={() => setAnnual(true)}>Annual <span className="text-xs text-green-400 ml-1">Save 17%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${p.popular ? 'border-blue-500 bg-gradient-to-b from-blue-500/10 to-transparent relative' : 'border-gray-800 bg-gray-900/50'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-xs font-bold">MOST POPULAR</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price === 0 ? '$0' : price(p.price)}</span>
                  {p.price > 0 && <span className="text-gray-400 text-sm">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-blue-400">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${p.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold mb-4">
                <span>🅿️</span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">ParkSpot</span>
              </div>
              <p className="text-gray-500 text-sm">Never circle the block again.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'API', 'Coverage'] },
              { title: 'Resources', links: ['Blog', 'Help Center', 'Partnerships', 'Drivers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-3 text-sm">{col.title}</h4>
                <ul className="space-y-2">{col.links.map((l, j) => <li key={j}><a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
            © 2026 ParkSpot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}