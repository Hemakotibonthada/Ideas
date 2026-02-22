'use client';
import { useState } from 'react';

export default function AquaTrackLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const price = (monthly: number) =>
    annual ? `$${(monthly * 10 / 12).toFixed(2)}` : `$${monthly.toFixed(2)}`;

  const features = [
    { icon: '🎯', title: 'Smart Goals', desc: 'Personalized daily water intake based on your weight, age, activity level, and lifestyle habits.' },
    { icon: '🏃', title: 'Activity Adjust', desc: 'Automatically increases your hydration goals on workout days and high-activity periods.' },
    { icon: '🌡️', title: 'Climate Aware', desc: 'Dynamically adjusts targets based on real-time temperature, humidity, and weather conditions.' },
    { icon: '🔥', title: 'Streak Tracker', desc: 'Build hydration streaks, earn achievements, and stay motivated with daily consistency rewards.' },
    { icon: '💧', title: 'Source Logging', desc: 'Track tap, bottled, filtered, and sparkling water separately for complete hydration insights.' },
    { icon: '📈', title: 'Health Insights', desc: 'See how hydration impacts your energy levels, skin health, focus, and overall well-being.' },
  ];

  const stats = [
    { value: '890K+', label: 'Users' },
    { value: '34%', label: 'More Hydrated' },
    { value: '2.1M', label: 'Liters Tracked Daily' },
    { value: '4.8★', label: 'App Rating' },
  ];

  const plans = [
    { name: 'Free', price: 0, features: ['Basic water tracking', 'Manual reminders', 'Daily log history', 'Community challenges'], cta: 'Start Free' },
    { name: 'Hydro', price: 2.99, features: ['Smart personalized goals', 'Activity auto-adjust', 'Streak & achievements', 'Wearable sync', 'Custom reminders'], cta: 'Go Hydro', popular: true },
    { name: 'Wellness', price: 5.99, features: ['Everything in Hydro', 'Climate-aware targets', 'Health insights dashboard', 'Family profiles (up to 5)', 'Priority support'], cta: 'Get Wellness' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">💧</span>
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">AquaTrack</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Science</a>
            <a href="#" className="hover:text-white transition">Blog</a>
            <button className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition">Get Started</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 space-y-3 text-gray-300">
            <a href="#features" className="block hover:text-white">Features</a>
            <a href="#pricing" className="block hover:text-white">Pricing</a>
            <a href="#" className="block hover:text-white">Science</a>
            <a href="#" className="block hover:text-white">Blog</a>
            <button className="w-full mt-2 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium">
            💧 Personalized Hydration
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hydrate <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Smarter</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Personalized water goals based on your weight, activity, climate, and health. Smart reminders that actually work. Feel better in days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-cyan-500/25">
              Start Tracking — Free
            </button>
            <button className="px-8 py-3.5 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:bg-gray-900 transition">
              See the Science
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Smart <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Hydration</span> Science</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Not just reminders — AquaTrack adapts to your body, activity, and environment in real time.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${activeFeature === i ? 'border-cyan-500 bg-cyan-500/10 scale-[1.02]' : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'}`}
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Invest in Your <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Health</span></h2>
            <p className="text-gray-400 text-lg mb-8">Start free. Level up to smart hydration when you&apos;re ready.</p>
            <div className="inline-flex items-center gap-3 bg-gray-800 rounded-full p-1">
              <button className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'text-gray-400'}`} onClick={() => setAnnual(false)}>Monthly</button>
              <button className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'text-gray-400'}`} onClick={() => setAnnual(true)}>Annual <span className="text-xs text-green-400 ml-1">Save 17%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${p.popular ? 'border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-transparent relative' : 'border-gray-800 bg-gray-900/50'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-bold">MOST POPULAR</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price === 0 ? '$0' : price(p.price)}</span>
                  {p.price > 0 && <span className="text-gray-400 text-sm">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-cyan-400">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${p.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
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
                <span>💧</span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">AquaTrack</span>
              </div>
              <p className="text-gray-500 text-sm">Hydrate smarter, feel better.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
              { title: 'Learn', links: ['Hydration Science', 'Blog', 'Help Center', 'Community'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'GDPR'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-3 text-sm">{col.title}</h4>
                <ul className="space-y-2">{col.links.map((l, j) => <li key={j}><a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
            © 2026 AquaTrack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}