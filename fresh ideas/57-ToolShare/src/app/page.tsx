'use client';
import { useState } from 'react';

export default function ToolShareLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      desc: 'Browse, borrow & 3 listings',
      features: ['Browse tool library', 'Borrow from neighbors', '3 tool listings', 'Basic trust scores', 'Community access'],
      cta: 'Start Sharing',
      highlight: false,
    },
    {
      name: 'Maker',
      monthly: 2.99,
      yearly: 29.99,
      desc: 'Unlimited listings & priority',
      features: ['Everything in Free', 'Unlimited listings', 'Priority requests', 'Condition tracking photos', 'Lending history', 'Email support'],
      cta: 'Go Maker',
      highlight: true,
    },
    {
      name: 'Workshop',
      monthly: 7.99,
      yearly: 79.99,
      desc: 'Full inventory & insurance',
      features: ['Everything in Maker', 'Organization tools', 'Inventory management', 'Tool insurance coverage', 'Analytics dashboard', 'Priority support'],
      cta: 'Go Workshop',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Tool Library', desc: 'Browse available tools in your neighborhood — from drills to ladders, it\'s all here.', icon: '🔧' },
    { title: 'Quick Request', desc: 'Need a tool? Post a request and get responses from neighbors in minutes.', icon: '⚡' },
    { title: 'Lending Manager', desc: 'Track who has your tools and when they\'re due back with automatic reminders.', icon: '📋' },
    { title: 'Condition Tracking', desc: 'Photo check-in and check-out protects your tools and builds trust.', icon: '📸' },
    { title: 'Trust Scores', desc: 'Verified profiles with community ratings so you always know who you\'re sharing with.', icon: '⭐' },
    { title: 'Delivery Option', desc: 'Some lenders will drop off — check availability and skip the trip.', icon: '🚗' },
  ];

  const stats = [
    { value: '890K+', label: 'Tools Shared' },
    { value: '$23M', label: 'Saved vs Buying' },
    { value: '45K+', label: 'Neighborhoods' },
    { value: '97%', label: 'Return Rate' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-orange-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">ToolShare</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-orange-400 transition">Features</a>
            <a href="#pricing" className="hover:text-orange-400 transition">Pricing</a>
            <a href="#stats" className="hover:text-orange-400 transition">Impact</a>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-black px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition">Join Free</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6">🔧 Join 45K+ neighborhoods already sharing</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Borrow. Don&apos;t Buy.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Why buy a power drill you&apos;ll use twice a year? Borrow from neighbors, share yours, and save money while reducing waste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-black px-8 py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-orange-500/25">Start Sharing Free</button>
            <button className="border border-orange-500/30 text-orange-400 px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-orange-500/10 transition">Browse Tools</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-orange-500/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-500 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Share Smarter, <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Not Harder</span></h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Everything you need to share tools with your community safely and easily.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-900/50 border border-orange-500/10 rounded-2xl p-6 hover:border-orange-500/30 transition group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Plans That <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Pay for Themselves</span></h2>
          <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">One borrowed tool saves more than a month of any plan.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-orange-500' : 'bg-gray-700'}`}>
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-orange-400 text-xs ml-1">Save 17%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition ${p.highlight ? 'border-orange-500 bg-orange-500/5 shadow-lg shadow-orange-500/10 scale-105' : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'}`}>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${annual ? p.yearly : p.monthly}</span>
                  <span className="text-gray-500 text-sm">/{annual ? 'year' : 'mo'}</span>
                </div>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition ${p.highlight ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-black hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-orange-500/50'}`}>{p.cta}</button>
                <ul className="mt-6 space-y-3">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400"><span className="text-orange-500">✓</span>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Stop Buying Tools You <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Barely Use?</span></h2>
          <p className="text-gray-400 mb-8">Join your neighbors. Share more. Waste less. Save together.</p>
          <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-orange-500/25">Join ToolShare Free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-500/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">ToolShare</div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-400 transition">Privacy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms</a>
            <a href="#" className="hover:text-orange-400 transition">Support</a>
            <a href="#" className="hover:text-orange-400 transition">Blog</a>
          </div>
          <div className="text-gray-600 text-sm">© 2026 ToolShare. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
