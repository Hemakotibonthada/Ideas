'use client';

import { useState } from 'react';

export default function MemoryVaultLanding() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCapsule, setActiveCapsule] = useState<number | null>(null);
  const [unlockDate, setUnlockDate] = useState('');

  const stats = [
    { value: '12M+', label: 'Memories Stored' },
    { value: '2.1M', label: 'Capsules Created' },
    { value: '99.99%', label: 'Uptime' },
    { value: '🔒', label: 'Military-Grade Encryption' },
  ];

  const features = [
    { title: 'Time Capsules', desc: 'Lock your precious memories and set them to open on any future date — birthdays, anniversaries, or years from now.', icon: '⏳' },
    { title: 'AI Organization', desc: 'Automatically tag and organize photos by people, places, and emotions using advanced facial and scene recognition.', icon: '🧠' },
    { title: 'Story Generator', desc: 'AI creates beautiful cinematic slideshows and montages from your memories, complete with music.', icon: '🎬' },
    { title: 'End-to-End Encryption', desc: 'Your memories are encrypted on your device before upload. Only you hold the keys. Zero-knowledge architecture.', icon: '🔐' },
    { title: 'Shared Vaults', desc: 'Create collaborative vaults with family and friends. Everyone contributes, everyone relives the moments.', icon: '👨‍👩‍👧‍👦' },
    { title: 'Legacy Mode', desc: 'Designate trusted recipients. Your memories can be passed on to loved ones when the time comes.', icon: '💝' },
  ];

  const capsuleDemos = [
    { label: '🎂 Birthday 2027', date: 'Jan 15, 2027', memories: 24 },
    { label: '🎓 Graduation', date: 'Jun 1, 2026', memories: 156 },
    { label: '✈️ Japan Trip', date: 'Dec 25, 2026', memories: 89 },
    { label: '💍 Anniversary', date: 'Feb 14, 2027', memories: 43 },
  ];

  const pricing = [
    { name: 'Free', price: '$0', period: '', features: ['5 GB storage', 'Basic organization', '3 time capsules', 'Standard encryption'], cta: 'Start Free', highlight: false },
    { name: 'Vault', price: isAnnual ? '$4.49' : '$5.99', period: '/mo', features: ['100 GB storage', 'AI story generation', 'Unlimited capsules', 'Shared vaults', 'Priority processing'], cta: 'Open Your Vault', highlight: true },
    { name: 'Forever', price: isAnnual ? '$7.49' : '$9.99', period: '/mo', features: ['Unlimited storage', 'Legacy mode', 'Priority support', '8K media support', 'Everything in Vault'], cta: 'Go Forever', highlight: false },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">MV</div>
            <span className="text-xl font-bold">MemoryVault</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#capsules" className="hover:text-white transition">Capsules</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition">Get Started</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <a href="#capsules" className="text-gray-400 hover:text-white">Capsules</a>
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-sm mb-6">✨ Digital Time Capsules</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Memories That Last Forever
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Create digital time capsules that unlock on future dates. AI organizes photos and videos by people, places, and emotions. Relive your best moments, beautifully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-purple-500/25">
              Create Your First Capsule
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:border-gray-500 transition">
              See Examples
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Capsule Demo */}
      <section id="capsules" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Explore Time Capsules</h2>
          <p className="text-gray-500 text-center mb-10">Click a capsule to peek inside</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {capsuleDemos.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveCapsule(activeCapsule === i ? null : i)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 ${activeCapsule === i ? 'border-purple-500 bg-purple-500/10 scale-[1.02]' : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'}`}
              >
                <div className="text-xl font-semibold mb-1">{c.label}</div>
                <div className="text-sm text-gray-500">Opens {c.date} · {c.memories} memories</div>
                {activeCapsule === i && (
                  <div className="mt-3 pt-3 border-t border-purple-500/20 text-sm text-purple-400">
                    🔒 Locked — {c.memories} photos & videos waiting
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-3">Create your own capsule — pick an unlock date:</p>
            <input
              type="date"
              value={unlockDate}
              onChange={(e) => setUnlockDate(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-purple-500 focus:outline-none transition"
            />
            {unlockDate && (
              <p className="mt-3 text-purple-400 text-sm">✨ Your capsule would unlock on {new Date(unlockDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Preserve What Matters Most</h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Cutting-edge AI meets beautiful design, wrapped in military-grade security.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Keep Your Memories Safe</h2>
          <p className="text-gray-500 text-center mb-8">Start free. Your memories deserve the best.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button className="w-12 h-6 rounded-full bg-gray-700 relative transition" onClick={() => setIsAnnual(!isAnnual)}>
              <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0.5 transition-all ${isAnnual ? 'left-6' : 'left-0.5'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-purple-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${p.highlight ? 'border-purple-500 bg-gradient-to-b from-purple-500/10 to-transparent' : 'border-gray-800 bg-gray-900/50'}`}>
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-gray-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-purple-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition ${p.highlight ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-gray-500'}`}>
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">MV</div>
            <span className="font-bold">MemoryVault</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 MemoryVault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
