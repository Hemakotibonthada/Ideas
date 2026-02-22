'use client';

import { useState } from 'react';

export default function GrocerySaveLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  const demoResults = [
    { store: 'FreshMart', price: '$3.49', savings: '' },
    { store: 'ValueGrocer', price: '$2.99', savings: '14% less' },
    { store: 'CostClub', price: '$2.19', savings: '37% less' },
  ];

  const price = (monthly: number) =>
    annual ? `$${(monthly * 10 / 12).toFixed(2)}` : `$${monthly.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            GrocerySave
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {['Features', 'Pricing', 'Stores', 'Blog'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition">
                {l}
              </a>
            ))}
          </div>
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:border-white/40 transition">
              Log In
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 font-semibold text-black hover:opacity-90 transition">
              Start Saving
            </button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {['Features', 'Pricing', 'Stores', 'Blog'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            ))}
            <button className="mt-2 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 font-semibold text-black">
              Start Saving
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 text-green-400 text-xs font-medium mb-6">
          💰 Users have saved over $234M on groceries
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Same Groceries.{' '}
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            Half the Price.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Compare grocery prices across every local store in real-time. Build the cheapest shopping
          list automatically. Find coupons and deals before you walk in.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 font-bold text-lg text-black hover:scale-105 transition-transform">
            Start Saving Today
          </button>
          <button className="px-8 py-3.5 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition">
            Compare Prices Now
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[.02]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            ['$234M', 'Saved by Users'],
            ['12K+', 'Stores Indexed'],
            ['89K+', 'Coupons Daily'],
            ['1.4M+', 'Lists Created'],
          ].map(([val, label]) => (
            <div key={label} className="py-8 text-center">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                {val}
              </div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Try a Price Comparison</h2>
        <p className="text-gray-500 mb-8">Type any grocery item and see how prices differ across stores.</p>
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="e.g. Organic Whole Milk"
            className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
          />
        </div>
        {searchItem.trim().length > 0 && (
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 text-left max-w-md mx-auto">
            <div className="text-sm text-green-400 font-semibold mb-4">
              🛒 Results for &quot;{searchItem}&quot;
            </div>
            <div className="space-y-3">
              {demoResults.map((r) => (
                <div
                  key={r.store}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    r.savings.includes('37') ? 'bg-green-500/10 border border-green-500/30' : 'bg-white/[.03]'
                  }`}
                >
                  <span className="text-sm text-gray-300">{r.store}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{r.price}</span>
                    {r.savings && (
                      <span className="text-xs text-green-400 bg-green-500/20 px-2 py-0.5 rounded-full">
                        {r.savings}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Save Money
            </span>{' '}
            on Every Trip
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            Everything you need to slash your grocery bill without changing what you eat.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['💲', 'Price Comparison', 'Compare item prices across all nearby stores instantly. See who has the best deal.'],
              ['📝', 'Smart Lists', 'AI builds the cheapest list by splitting items across stores that are on your route.'],
              ['🏷️', 'Coupon Engine', 'Auto-find digital coupons and deals. Stack savings on top of already-low prices.'],
              ['📰', 'Weekly Flyer Scanner', 'AI reads weekly ads and highlights the best deals so you never miss a sale.'],
              ['🥫', 'Pantry Tracker', 'Track what you have at home so you buy only what you need. Zero food waste.'],
              ['👨‍👩‍👧‍👦', 'Family Sharing', 'Shared shopping lists with real-time updates. Everyone shops smarter together.'],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[.02] hover:border-green-500/40 hover:bg-green-500/[.04] transition-all"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 bg-white/[.02]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing That Pays for Itself</h2>
          <p className="text-gray-500 mb-8">Most users save 10x the subscription cost in their first week.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                annual ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                  annual ? 'left-6' : 'left-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-green-400 text-xs">Save 17%</span>
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Free',
                price: 0,
                features: ['1 store comparison', 'Basic lists', 'Manual coupons', 'Ad-supported'],
              },
              {
                name: 'Saver',
                price: 2.99,
                popular: true,
                features: ['All stores', 'Coupon finder', 'Smart lists', 'Flyer scanner', 'No ads'],
              },
              {
                name: 'Family',
                price: 5.99,
                features: ['Everything in Saver', '6 family members', 'Pantry tracker', 'Meal planning integration', 'Priority support'],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 text-left ${
                  tier.popular
                    ? 'border-green-500/50 bg-green-500/[.06] scale-105'
                    : 'border-white/10 bg-white/[.02]'
                }`}
              >
                {tier.popular && (
                  <div className="text-xs font-bold text-green-400 mb-3 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="text-4xl font-black mb-1">
                  {tier.price === 0 ? '$0' : price(tier.price)}
                  <span className="text-sm text-gray-500 font-normal">/mo</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-400">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-black hover:opacity-90'
                      : 'border border-white/20 hover:bg-white/5'
                  }`}
                >
                  {tier.price === 0 ? 'Get Started' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              GrocerySave
            </span>
            <p className="text-sm text-gray-500 mt-3">
              The smartest way to save on groceries. Every trip, every time.
            </p>
          </div>
          {[
            ['Product', ['Features', 'Pricing', 'Store Directory', 'Mobile App']],
            ['Company', ['About', 'Blog', 'Careers', 'Partners']],
            ['Legal', ['Privacy', 'Terms', 'Data Policy', 'Accessibility']],
          ].map(([heading, links]) => (
            <div key={heading as string}>
              <h4 className="font-semibold mb-3 text-sm">{heading as string}</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                {(links as string[]).map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-xs text-gray-600">
          © 2026 GrocerySave. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
