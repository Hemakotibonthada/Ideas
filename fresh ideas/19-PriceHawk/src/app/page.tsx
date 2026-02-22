'use client';

import { useState } from 'react';

export default function PriceHawkLanding() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [trackedProduct, setTrackedProduct] = useState('');
  const [priceTarget, setPriceTarget] = useState('');
  const [alertSet, setAlertSet] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const stats = [
    { value: '$47M', label: 'Saved for Users' },
    { value: '28M+', label: 'Products Tracked' },
    { value: '2,400+', label: 'Stores Monitored' },
    { value: '14 sec', label: 'Avg Alert Speed' },
  ];

  const features = [
    { title: 'Universal Tracking', desc: 'Track any product from any online store. Just paste the URL — we handle the rest across 2,400+ retailers.', icon: '🎯' },
    { title: 'Price History', desc: 'Full interactive charts showing price trends over weeks and months. Know if a "sale" is really a deal.', icon: '📊' },
    { title: 'Drop Alerts', desc: 'Instant push notifications and email alerts the second a price hits your target. Never miss a deal.', icon: '🔔' },
    { title: 'Coupon Finder', desc: 'Automatically finds and tests coupon codes at checkout. Stack savings on top of price drops.', icon: '🏷️' },
    { title: 'Price Comparison', desc: 'Compare the same product across all available stores. See shipping costs, ratings, and total price.', icon: '⚖️' },
    { title: 'Wishlist Sync', desc: 'Import wishlists from Amazon, eBay, Best Buy, and more. Track everything in one unified dashboard.', icon: '💫' },
  ];

  const sampleProducts = [
    { name: 'Sony WH-1000XM5', current: '$278', low: '$248', high: '$399' },
    { name: 'MacBook Air M3', current: '$1,049', low: '$999', high: '$1,199' },
    { name: 'PS5 DualSense', current: '$54', low: '$39', high: '$69' },
  ];

  const pricing = [
    { name: 'Free', price: '$0', period: '', features: ['10 product trackers', 'Basic price alerts', 'Daily price checks', '7-day price history'], cta: 'Start Tracking', highlight: false },
    { name: 'Hunter', price: isAnnual ? '$2.99' : '$3.99', period: '/mo', features: ['Unlimited trackers', 'Coupon finder', 'Real-time alerts', '1-year price history', 'Multi-store comparison'], cta: 'Go Hunter', highlight: true },
    { name: 'Eagle', price: isAnnual ? '$4.99' : '$6.99', period: '/mo', features: ['API access', 'Priority alerts (14s)', 'Price predictions', 'Bulk tracking', 'Everything in Hunter'], cta: 'Go Eagle', highlight: false },
  ];

  const handleSetAlert = () => {
    if (trackedProduct && priceTarget) {
      setAlertSet(true);
      setTimeout(() => setAlertSet(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center font-bold text-sm text-black">PH</div>
            <span className="text-xl font-bold">PriceHawk</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Try It</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium hover:opacity-90 transition">Install Free</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-800 bg-black px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <a href="#demo" className="text-gray-400 hover:text-white">Try It</a>
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium">Install Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 text-amber-400 text-sm mb-6">🦅 Smart Price Tracking</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
            Never Overpay Again
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Track prices across every shopping site. Get instant alerts when prices drop. View full price history charts. Save hundreds every month on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/25">
              Add to Browser — Free
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:border-gray-500 transition">
              See Savings Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Try Price Tracking</h2>
          <p className="text-gray-500 text-center mb-10">Set up a mock price alert in seconds</p>

          {/* Price Alert Demo */}
          <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 mb-8">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                placeholder="Product name or URL..."
                value={trackedProduct}
                onChange={(e) => setTrackedProduct(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition"
              />
              <input
                type="text"
                placeholder="Target price ($)"
                value={priceTarget}
                onChange={(e) => setPriceTarget(e.target.value)}
                className="w-full sm:w-36 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition"
              />
              <button
                onClick={handleSetAlert}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-medium hover:opacity-90 transition whitespace-nowrap"
              >
                Set Alert
              </button>
            </div>
            {alertSet && (
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm">
                ✓ Alert set! We&apos;ll notify you when &quot;{trackedProduct}&quot; drops below {priceTarget}
              </div>
            )}
          </div>

          {/* Sample Products */}
          <div className="space-y-3">
            {sampleProducts.map((p, i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-800 bg-gray-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-gray-700 transition">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-500">Low: {p.low} · High: {p.high}</div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-amber-400">{p.current}</span>
                  <button className="px-4 py-2 rounded-lg border border-amber-500/30 text-amber-400 text-sm hover:bg-amber-500/10 transition">Track</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Complete Savings Toolkit</h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">Every tool you need to ensure you never pay more than you should.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${activeFeature === i ? 'border-amber-500 bg-amber-500/5 scale-[1.02]' : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'}`}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                {activeFeature === i && (
                  <div className="mt-4 pt-4 border-t border-amber-500/20 text-sm text-amber-400">
                    ⚡ Click to learn more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Plans That Pay for Themselves</h2>
          <p className="text-gray-500 text-center mb-8">Most users save more in the first week than the yearly cost.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button className="w-12 h-6 rounded-full bg-gray-700 relative transition" onClick={() => setIsAnnual(!isAnnual)}>
              <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 absolute top-0.5 transition-all ${isAnnual ? 'left-6' : 'left-0.5'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-amber-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${p.highlight ? 'border-amber-500 bg-gradient-to-b from-amber-500/10 to-transparent' : 'border-gray-800 bg-gray-900/50'}`}>
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-gray-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-amber-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition ${p.highlight ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-gray-500'}`}>
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center font-bold text-sm text-black">PH</div>
            <span className="font-bold">PriceHawk</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 PriceHawk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
