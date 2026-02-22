'use client';
import { useState } from 'react';

export default function BookSwapLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Unlimited local swaps', 'Wish matching', 'Condition ratings', 'Community access'],
      cta: 'Start Swapping',
      highlight: false,
    },
    {
      name: 'Reader',
      price: annual ? '$2.49' : '$2.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Everything in Free', 'Mail swaps nationwide', 'Advanced search filters', 'Book clubs', 'Priority matching'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Librarian',
      price: annual ? '$5.49' : '$6.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Everything in Reader', 'Community management tools', 'Swap analytics dashboard', 'Bulk book management', 'Verified badge', 'API access'],
      cta: 'Go Librarian',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Local Swaps', desc: 'Find book swappers within walking distance. Meet at a café, exchange reads, and discover neighbors who share your taste.', icon: '📍' },
    { title: 'Wish Matching', desc: 'AI matches your wishlist with nearby available books. Get notified the moment your dream read becomes available.', icon: '🎯' },
    { title: 'Condition Rating', desc: 'Honest condition grades so you know exactly what you\'re getting — from "Like New" to "Well-Loved."', icon: '⭐' },
    { title: 'Mail Swap', desc: 'Swap with anyone nationwide via prepaid shipping labels. We handle the logistics, you handle the reading.', icon: '📦' },
    { title: 'Reading Lists', desc: 'Community-curated reading lists by genre, topic, and mood. Discover your next obsession through fellow readers.', icon: '📚' },
    { title: 'Book Clubs', desc: 'Create swap-based book clubs with your neighbors. Everyone reads the same book, then swap for the next one.', icon: '👥' },
  ];

  const stats = [
    { value: '2.1M', label: 'Books swapped' },
    { value: '890K+', label: 'Active readers' },
    { value: '45K+', label: 'Communities' },
    { value: '$34M', label: 'Saved vs buying' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">BookSwap</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#stats" className="hover:text-white transition">Community</a>
        </div>
        <button className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition text-black">Join Free</button>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 text-amber-400 text-xs mb-6">📖 The Book Sharing Community</div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Read More.{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Spend Less.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          List books you&apos;ve finished. Browse books nearby. Swap in person or by mail. Give your books a second life and discover your next favorite read for free.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-black">List Your First Book</button>
          <button className="border border-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition">Browse Library</button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything Readers Need</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">From finding a book to swapping and discussing it — BookSwap has every step covered.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Read Without Limits</h2>
        <p className="text-gray-400 text-center mb-8">Save up to 21% with annual billing.</p>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-amber-500' : 'bg-gray-700'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 border ${p.highlight ? 'border-amber-500 bg-amber-500/5' : 'border-gray-800 bg-gray-900/40'}`}>
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-gray-500 text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((ft) => (
                  <li key={ft} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-amber-400">✓</span>{ft}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:opacity-90' : 'border border-gray-700 hover:border-gray-500'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">BookSwap</div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Community</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <div className="text-sm text-gray-600">© 2026 BookSwap. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}