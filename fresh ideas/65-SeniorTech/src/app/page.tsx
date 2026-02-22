'use client';
import { useState } from 'react';

export default function SeniorTechLanding() {
  const [annual, setAnnual] = useState(false);

  const price = (monthly: number) =>
    annual ? (monthly * 10).toFixed(2) : monthly.toFixed(2);
  const period = annual ? '/yr' : '/mo';

  const features = [
    {
      icon: '📖',
      title: 'Simple Guides',
      desc: 'Large-text, illustrated tutorials for common tasks.',
    },
    {
      icon: '🎬',
      title: 'Video Walk-Through',
      desc: 'Watch someone do it step-by-step before you try.',
    },
    {
      icon: '🧑‍💻',
      title: 'Live Helper',
      desc: 'Connect with a patient, trained human helper via video call.',
    },
    {
      icon: '🎤',
      title: 'Voice Control',
      desc: 'Navigate the app entirely with voice commands.',
    },
    {
      icon: '🛡️',
      title: 'Scam Shield',
      desc: 'Identifies and warns about common tech scams.',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Family Dashboard',
      desc: 'Family members can track and help remotely.',
    },
  ];

  const plans = [
    {
      name: 'Free',
      price: 0,
      badge: '',
      items: ['Basic guides', 'Scam alerts', 'Community forum'],
    },
    {
      name: 'Helper',
      price: 6.99,
      badge: 'Popular',
      items: ['Live helpers 24/7', 'Voice control', 'Video guides'],
    },
    {
      name: 'Family',
      price: 12.99,
      badge: 'Best Value',
      items: ['4 seniors included', 'Family dashboard', 'Priority support'],
    },
  ];

  const stats = [
    { value: '340K+', label: 'Seniors Helped' },
    { value: '92%', label: 'Solve on First Try' },
    { value: '24/7', label: 'Support Available' },
    { value: '4.9★', label: 'Average Rating' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
          SeniorTech
        </span>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#stats" className="hover:text-white transition">Impact</a>
        </div>
        <button className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:opacity-90 transition">
          Get Help Now
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
          Technology Made{' '}
          <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
            Simple
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Step-by-step tech help designed for seniors. Large text, voice guides, and patient human
          helpers available 24/7. Because everyone deserves digital confidence.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-full font-bold bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:opacity-90 transition text-lg">
            Start Learning Free
          </button>
          <button className="px-8 py-3.5 rounded-full font-bold border border-gray-700 text-gray-300 hover:border-sky-500 hover:text-white transition text-lg">
            Talk to a Helper
          </button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-black bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          Help That{' '}
          <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
            Actually Helps
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-sky-500/50 transition"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Affordable{' '}
          <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
            Peace of Mind
          </span>
        </h2>
        <p className="text-center text-gray-500 mb-10">Confidence with technology, at any budget.</p>

        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 bg-gray-900 rounded-full px-4 py-2 border border-gray-800">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                annual ? 'bg-sky-500' : 'bg-gray-700'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  annual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-sky-400 text-xs font-semibold">Save 17%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 border ${
                p.badge === 'Popular'
                  ? 'border-sky-500 bg-gray-900/80'
                  : 'border-gray-800 bg-gray-900'
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-black">${p.price === 0 ? '0' : price(p.price)}</span>
                <span className="text-gray-500 text-sm">{p.price === 0 ? '' : period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-sky-400">✓</span> {item}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-full font-semibold text-sm transition ${
                  p.badge === 'Popular'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white hover:opacity-90'
                    : 'border border-gray-700 text-gray-300 hover:border-sky-500'
                }`}
              >
                {p.price === 0 ? 'Get Started' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
            SeniorTech
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 SeniorTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
