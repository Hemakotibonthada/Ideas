'use client';

import { useState } from 'react';

export default function RepairHubLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [demoImage, setDemoImage] = useState(false);

  const features = [
    { icon: '📸', title: 'Visual Diagnosis', desc: 'Snap a photo, AI identifies the problem and suggests fixes instantly.' },
    { icon: '🎬', title: 'Video Guides', desc: 'Step-by-step repair videos for every skill level, from beginner to pro.' },
    { icon: '🔩', title: 'Parts Finder', desc: 'Find & order exact replacement parts instantly with price comparison.' },
    { icon: '📊', title: 'Difficulty Rating', desc: 'Know how hard a repair is before you start — no surprises halfway through.' },
    { icon: '🧰', title: 'Tool Checklist', desc: 'Know exactly which tools you'll need before you begin any repair.' },
    { icon: '🏪', title: 'Repair Shops', desc: 'Find trusted local repair shops if DIY isn't for you. Rated by community.' },
  ];

  const stats = [
    { value: '850K+', label: 'Repairs Completed' },
    { value: '$124M', label: 'Saved vs Buying New' },
    { value: '28K+', label: 'Repair Guides' },
    { value: '94%', label: 'Success Rate' },
  ];

  const pricing = [
    { tier: 'Free', price: 0, period: '', features: ['3 guides/month', 'Basic diagnosis', 'Community forum', 'Email support'], cta: 'Get Started' },
    { tier: 'Fixer', price: annual ? 3.99 : 4.99, period: '/mo', features: ['Unlimited guides', 'Parts finder', 'Video guides', 'Difficulty ratings', 'Tool checklists'], cta: 'Start Fixing', popular: true },
    { tier: 'Master', price: annual ? 6.99 : 8.99, period: '/mo', features: ['Live expert help', 'Priority parts ordering', 'Offline guides', 'All Fixer features', 'Direct expert chat'], cta: 'Go Master' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔧</span>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">RepairHub</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Guides</a>
            <a href="#" className="hover:text-white transition">Community</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">Sign In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition font-medium">Start Free</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 flex flex-col gap-3">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white">Guides</a>
            <a href="#" className="text-gray-300 hover:text-white">Community</a>
            <button className="mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 font-medium">Start Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium">
            🛠️ 850K+ repairs and counting
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Fix It Yourself.{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Save a Fortune.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Scan any broken item — laptop, faucet, bike, car part — and get step-by-step video repair guides. Order replacement parts in 2 taps. Find local repair shops nearby.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-orange-500/25">
              Start Repairing Free
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-800 transition">
              Watch Demo
            </button>
          </div>
          {/* Interactive Demo */}
          <div
            onClick={() => setDemoImage(!demoImage)}
            className="cursor-pointer mx-auto max-w-2xl rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:border-orange-500/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4 text-left">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-500">RepairHub Scanner</span>
            </div>
            {demoImage ? (
              <div className="text-left space-y-3 animate-pulse-none">
                <div className="flex items-center gap-2 text-green-400 text-sm">✅ Problem identified: <span className="text-white font-medium">Cracked laptop screen — Dell XPS 15 (9520)</span></div>
                <div className="flex items-center gap-2 text-orange-400 text-sm">🔩 Parts needed: <span className="text-white">LCD Panel ($89) + Bezel ($12)</span></div>
                <div className="flex items-center gap-2 text-blue-400 text-sm">📊 Difficulty: <span className="text-yellow-400 font-medium">Medium (45 min)</span></div>
                <div className="flex items-center gap-2 text-purple-400 text-sm">🎬 Video guide: <span className="text-white underline">12-step replacement tutorial</span></div>
              </div>
            ) : (
              <div className="h-32 flex items-center justify-center text-gray-500">
                <span className="text-4xl mr-3">📷</span> Click to simulate a repair scan...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Fix Anything</span></h2>
          <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">From diagnosis to done — RepairHub walks you through every step.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-orange-500/40 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Fair Pricing</span></h2>
          <p className="text-gray-400 mb-8">Save thousands on repairs. Start free, upgrade when you need more.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-orange-500' : 'bg-gray-700'}`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : ''}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-orange-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className={`p-8 rounded-2xl border ${p.popular ? 'border-orange-500 bg-gray-900 shadow-lg shadow-orange-500/10 relative' : 'border-gray-800 bg-gray-900'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold">POPULAR</div>}
                <h3 className="text-xl font-bold mb-2">{p.tier}</h3>
                <div className="mb-6"><span className="text-4xl font-extrabold">${p.price}</span><span className="text-gray-400">{p.period}</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-orange-400">✓</span>{feat}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90' : 'border border-gray-700 hover:bg-gray-800'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔧</span>
            <span className="font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">RepairHub</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Support</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 RepairHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
