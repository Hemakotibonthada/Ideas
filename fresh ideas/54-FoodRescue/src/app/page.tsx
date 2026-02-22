'use client';
import { useState } from 'react';

export default function FoodRescueLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: '',
      features: ['Individual donors', 'Unlimited food posts', 'Basic matching', 'Impact tracking'],
      cta: 'Start Donating',
      highlight: false,
    },
    {
      name: 'Organization',
      price: annual ? 7.99 : 9.99,
      period: '/mo',
      features: ['Advanced analytics', 'Bulk food posting', 'Pickup scheduling', 'Tax receipt automation', 'Priority matching'],
      cta: 'Join as Org',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: annual ? 23.99 : 29.99,
      period: '/mo',
      features: ['Everything in Org', 'REST API access', 'Multi-location management', 'Compliance tools', 'Dedicated support', 'Custom integrations'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Quick Post', desc: 'Donors list surplus food in under 60 seconds. Snap a photo, add details, and post. Our smart form auto-fills food categories and quantities.', icon: '📸' },
    { title: 'Instant Match', desc: 'AI matches food with the nearest accepting organizations based on capacity, dietary needs, distance, and pickup windows.', icon: '🎯' },
    { title: 'Pickup Coordinator', desc: 'Automated scheduling for pickups and deliveries. Drivers get optimized routes. Recipients get ETA notifications in real-time.', icon: '🚗' },
    { title: 'Food Safety', desc: 'Track temperature, time since preparation, handling compliance, and allergen info. Full chain-of-custody documentation for every donation.', icon: '🛡️' },
    { title: 'Impact Dashboard', desc: 'See meals saved, CO₂ reduced, and lives touched in real-time. Generate reports for stakeholders and sustainability goals.', icon: '📊' },
    { title: 'Tax Receipts', desc: 'Auto-generate IRS-compliant donation receipts for tax deductions. Fair market value calculated automatically for every food item.', icon: '🧾' },
  ];

  const stats = [
    { value: '4.2M', label: 'Meals Rescued' },
    { value: '2,100', label: 'Tons CO₂ Saved' },
    { value: '12K+', label: 'Active Donors' },
    { value: '890+', label: 'Shelters Connected' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">FoodRescue</span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">How It Works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Impact</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-lime-500 to-green-500 text-sm font-medium text-black hover:opacity-90 transition">Donate Food</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-32 left-1/3 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-48 right-1/4 w-[350px] h-[350px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-sm font-medium mb-8">🍽️ 4.2M meals rescued and counting</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Save Food.{' '}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">Feed People.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Connect surplus food from restaurants, grocery stores, and events with shelters, food banks, and people in need. Zero food waste. Zero hunger.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-lime-500 to-green-500 font-semibold hover:opacity-90 transition text-lg text-black">I Have Food to Donate</button>
            <button className="px-8 py-3 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition text-lg">I Need Food</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How FoodRescue Works</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">From surplus to served — seamlessly connecting donors with those in need.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-lime-500/50 transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center mb-4 text-xl">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-lime-400 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pricing for Every Scale</h2>
          <p className="text-gray-400 text-center mb-8">Always free for individual donors. Organizations get powerful tools.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-lime-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-lime-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border ${p.highlight ? 'border-lime-500 bg-lime-500/10 scale-105' : 'border-white/10 bg-white/5'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${p.price}</span>
                  {p.period && <span className="text-gray-400">{p.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((ft) => (
                    <li key={ft} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-lime-400">✓</span> {ft}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-lime-500 to-green-500 text-black hover:opacity-90' : 'border border-white/20 hover:bg-white/5'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">FoodRescue</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Partner With Us</a>
            <a href="#" className="hover:text-white transition">Impact Report</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 FoodRescue. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
