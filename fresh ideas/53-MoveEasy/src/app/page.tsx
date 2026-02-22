'use client';
import { useState } from 'react';

export default function MoveEasyLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: '',
      features: ['Basic checklist', 'Timeline planner', 'Community tips', 'Move date tracker'],
      cta: 'Start Planning',
      highlight: false,
    },
    {
      name: 'Mover',
      price: 4.99,
      period: ' per move',
      features: ['Full moving toolkit', 'Mover comparison', 'Address updater', 'Inventory tracker', 'Utility transfers'],
      cta: 'Get Mover Plan',
      highlight: true,
    },
    {
      name: 'Relocator',
      price: annual ? 7.99 : 9.99,
      period: '/mo',
      features: ['Everything in Mover', 'Unlimited moves', 'Premium features', 'Concierge support', 'Priority matching', 'Family accounts'],
      cta: 'Go Relocator',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Smart Checklist', desc: 'Dynamic moving checklist customized to your situation — apartment vs house, local vs long-distance, family size, and pets.', icon: '✅' },
    { title: 'Mover Comparison', desc: 'Compare quotes from vetted, insured movers side-by-side. Read verified reviews and book directly — no middleman markup.', icon: '📦' },
    { title: 'Address Updater', desc: 'Update your address everywhere in one click. Banks, subscriptions, government, insurance — we handle all 50+ address changes.', icon: '📬' },
    { title: 'Utility Transfer', desc: 'Auto-schedule disconnect and connect for electricity, gas, water, internet, and more. Never sit in the dark on move-in day.', icon: '⚡' },
    { title: 'Inventory Tracker', desc: 'Catalog everything you\'re moving room-by-room. Photos, condition notes, and estimated value for insurance purposes.', icon: '📋' },
    { title: 'Timeline Planner', desc: 'Day-by-day moving plan from 8 weeks out to move day. Task reminders keep you on track so nothing slips through the cracks.', icon: '📅' },
  ];

  const stats = [
    { value: '340K+', label: 'Moves Managed' },
    { value: '$2,400', label: 'Avg Saved on Movers' },
    { value: '89%', label: 'Less Stress Reported' },
    { value: '45+', label: 'Task Categories' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">MoveEasy</span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Results</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-green-500 text-sm font-medium hover:opacity-90 transition">Plan My Move</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-8">🏡 340K+ moves managed stress-free</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Move{' '}
            <span className="bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">Stress-Free</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            The ultimate relocation assistant. Checklists, mover comparison, address changes, utility transfers — everything in one place so nothing falls through the cracks.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-green-500 font-semibold hover:opacity-90 transition text-lg">Start My Checklist</button>
            <button className="px-8 py-3 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition text-lg">Compare Movers</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Entire Move, Organized</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">From first box to last utility — every step covered.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-green-500 flex items-center justify-center mb-4 text-xl">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pricing That Moves With You</h2>
          <p className="text-gray-400 text-center mb-8">Free to plan. Pay only for premium tools.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-teal-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-teal-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border ${p.highlight ? 'border-teal-500 bg-teal-500/10 scale-105' : 'border-white/10 bg-white/5'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${p.price}</span>
                  {p.period && <span className="text-gray-400">{p.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((ft) => (
                    <li key={ft} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-teal-400">✓</span> {ft}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-teal-500 to-green-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/5'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold bg-gradient-to-r from-teal-500 to-green-500 bg-clip-text text-transparent">MoveEasy</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Help Center</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 MoveEasy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
