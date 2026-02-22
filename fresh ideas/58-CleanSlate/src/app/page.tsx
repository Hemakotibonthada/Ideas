'use client';
import { useState } from 'react';

export default function CleanSlateLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      desc: 'Basic scan & 3 actions',
      features: ['Basic system scan', '3 cleanup actions', 'Subscription finder (view only)', 'Storage overview', 'Community tips'],
      cta: 'Scan Free',
      highlight: false,
    },
    {
      name: 'Clean',
      monthly: 3.99,
      yearly: 39.99,
      desc: 'Unlimited actions & monthly scans',
      features: ['Everything in Free', 'Unlimited cleanup actions', 'Monthly automated scans', 'File deduplicator', 'Inbox unsubscribe', 'Priority support'],
      cta: 'Get Clean',
      highlight: true,
    },
    {
      name: 'Pristine',
      monthly: 6.99,
      yearly: 69.99,
      desc: 'Auto-cleanup & family accounts',
      features: ['Everything in Clean', 'Auto-cleanup scheduler', 'Privacy cleaner', 'Family accounts (5 members)', 'Old account finder', 'Dedicated support'],
      cta: 'Go Pristine',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Subscription Finder', desc: 'Find every subscription you\'re paying for across all payment methods — stop the silent drain.', icon: '💳' },
    { title: 'File Deduplicator', desc: 'Find and remove duplicate files and photos, freeing up gigabytes of wasted storage.', icon: '📁' },
    { title: 'Inbox Zero', desc: 'Mass unsubscribe from newsletters and promotions in one click. Reclaim your inbox.', icon: '📧' },
    { title: 'App Audit', desc: 'Identify apps you haven\'t opened in months — see what\'s wasting space and attention.', icon: '📱' },
    { title: 'Storage Map', desc: 'Visualize exactly what\'s eating your storage with an interactive treemap.', icon: '🗺️' },
    { title: 'Privacy Cleaner', desc: 'Find and delete old accounts you\'ve forgotten about across the web.', icon: '🔒' },
  ];

  const stats = [
    { value: '$89M', label: 'Subscriptions Found' },
    { value: '4.2TB', label: 'Storage Reclaimed' },
    { value: '340K+', label: 'Happy Users' },
    { value: '12 min', label: 'Avg Cleanup Time' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">CleanSlate</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-cyan-400 transition">Features</a>
            <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
            <a href="#stats" className="hover:text-cyan-400 transition">Impact</a>
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition">Free Scan</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-60 right-1/4 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">✨ 4.2TB of storage reclaimed and counting</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Declutter Your Digital Life</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Find forgotten subscriptions, unused apps, duplicate files, and inbox clutter. Reclaim storage, save money, and simplify your digital world in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black px-8 py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-cyan-500/25">Run Free Scan</button>
            <button className="border border-cyan-500/30 text-cyan-400 px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition">See How It Works</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-cyan-500/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-500 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Six Powerful Ways to <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Clean Up</span></h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">From hidden subscriptions to forgotten accounts, we cover every corner of your digital life.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-900/50 border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-500/30 transition group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pricing That&apos;s <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Already Clean</span></h2>
          <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">Most users save more in found subscriptions than the cost of any plan.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-cyan-500' : 'bg-gray-700'}`}>
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-cyan-400 text-xs ml-1">Save 17%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition ${p.highlight ? 'border-cyan-500 bg-cyan-500/5 shadow-lg shadow-cyan-500/10 scale-105' : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'}`}>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${annual ? p.yearly : p.monthly}</span>
                  <span className="text-gray-500 text-sm">/{annual ? 'year' : 'mo'}</span>
                </div>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition ${p.highlight ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-black hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-cyan-500/50'}`}>{p.cta}</button>
                <ul className="mt-6 space-y-3">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400"><span className="text-cyan-500">✓</span>{feat}</li>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Digital Life Deserves a <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Fresh Start</span></h2>
          <p className="text-gray-400 mb-8">Run a free scan in 12 minutes. You&apos;ll be amazed what you find.</p>
          <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-cyan-500/25">Start Your Free Scan</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">CleanSlate</div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition">Support</a>
            <a href="#" className="hover:text-cyan-400 transition">Blog</a>
          </div>
          <div className="text-gray-600 text-sm">© 2026 CleanSlate. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
