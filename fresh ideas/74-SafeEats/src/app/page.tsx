'use client';
import { useState } from 'react';

export default function SafeEatsLanding() {
  const [annual, setAnnual] = useState(false);

  const price = (monthly: number) =>
    annual ? (monthly * 10).toFixed(2) : monthly.toFixed(2);
  const period = annual ? '/yr' : '/mo';

  const stats = [
    { value: '45K+', label: 'Restaurants Scored' },
    { value: '120K+', label: 'Inspections Indexed' },
    { value: '890K+', label: 'Active Users' },
    { value: '12', label: 'Violation Categories' },
  ];

  const features = [
    {
      icon: '🛡️',
      title: 'Safety Score',
      desc: 'Every restaurant gets a letter grade based on its latest official health inspection results.',
    },
    {
      icon: '📋',
      title: 'Violation History',
      desc: 'See all past health violations, severity levels, and whether each issue was corrected.',
    },
    {
      icon: '🔔',
      title: 'Live Inspections',
      desc: 'Get notified instantly when a restaurant you follow gets a new health inspection result.',
    },
    {
      icon: '⚖️',
      title: 'Comparison View',
      desc: 'Compare safety scores and violation histories of multiple restaurants side-by-side.',
    },
    {
      icon: '📢',
      title: 'Community Reports',
      desc: 'Report health concerns you observe directly from the app — help keep your community safe.',
    },
    {
      icon: '✨',
      title: 'Clean Kitchens',
      desc: 'Curated lists of the cleanest, highest-rated restaurants near you. Eat with total confidence.',
    },
  ];

  const plans = [
    {
      name: 'Free',
      price: 0,
      features: ['Browse safety scores', 'Basic restaurant search', 'Letter grades', 'Community tips'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'SafeDiner',
      price: 2.99,
      features: ['Full violation history', 'Live inspection alerts', 'Comparison view', 'Bookmarked restaurants', 'Priority support'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Inspector',
      price: 9.99,
      features: ['Restaurant dashboard', 'Analytics & trends', 'API access', 'Bulk data export', 'White-label reports', 'Dedicated support'],
      cta: 'Go Inspector',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            SafeEats
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Stats</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 text-sm font-medium hover:opacity-90 transition">
            Sign Up Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Check Before{' '}
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              You Eat
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Real-time health inspection scores for every restaurant. View violation history, see
            recent inspections, and make informed choices about where you eat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-yellow-500 font-semibold text-lg hover:opacity-90 transition">
              Check a Restaurant
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 font-semibold text-lg hover:bg-gray-900 transition">
              Browse Clean Kitchens
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-gray-500 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Know What You&apos;re Eating
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            Transparency into every restaurant&apos;s kitchen. Real data. Real inspections. Real peace of mind.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Eat Safely at Any Budget
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Start free. Upgrade for deeper inspection data and real-time alerts.
          </p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={annual ? 'text-gray-500' : 'text-white font-medium'}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-14 h-7 rounded-full flex items-center px-1 transition-colors ${
                annual ? 'bg-red-500' : 'bg-gray-700'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  annual ? 'translate-x-7' : ''
                }`}
              />
            </button>
            <span className={annual ? 'text-white font-medium' : 'text-gray-500'}>
              Annual <span className="text-red-400 text-xs ml-1">Save 17%</span>
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`p-8 rounded-2xl border ${
                  p.highlight
                    ? 'border-red-500 bg-gradient-to-b from-red-500/10 to-transparent'
                    : 'border-gray-800 bg-gray-900'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">
                    ${p.price === 0 ? '0' : price(p.price)}
                  </span>
                  {p.price > 0 && <span className="text-gray-500 ml-1">{period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((ft) => (
                    <li key={ft} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-red-400">✓</span> {ft}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition ${
                    p.highlight
                      ? 'bg-gradient-to-r from-red-500 to-yellow-500 hover:opacity-90'
                      : 'border border-gray-700 hover:bg-gray-800'
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            SafeEats
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 SafeEats. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
