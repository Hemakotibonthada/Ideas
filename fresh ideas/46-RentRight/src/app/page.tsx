'use client';

import { useState } from 'react';

export default function RentRightLanding() {
  const [annual, setAnnual] = useState(false);

  const price = (monthly: number) =>
    annual ? (monthly * 10).toFixed(2) : monthly.toFixed(2);
  const period = annual ? '/yr' : '/mo';

  const features = [
    { icon: '📄', title: 'Lease Scanner', desc: 'AI reads your lease, highlights concerning clauses and unfair terms automatically.' },
    { icon: '⚖️', title: 'Rights Lookup', desc: 'Know your exact tenant rights by state and city — updated in real time.' },
    { icon: '📸', title: 'Issue Documenter', desc: 'Photograph, timestamp, and log maintenance issues with geotagged evidence.' },
    { icon: '💰', title: 'Deposit Tracker', desc: 'Know exactly what your landlord can and can't charge against your deposit.' },
    { icon: '✉️', title: 'Letter Generator', desc: 'Auto-generate legal notice letters to your landlord backed by local law.' },
    { icon: '👨‍⚖️', title: 'Attorney Finder', desc: 'Find tenant rights attorneys near you with verified reviews and ratings.' },
  ];

  const stats = [
    { value: '890K+', label: 'Leases Analyzed' },
    { value: '$34M', label: 'Deposits Recovered' },
    { value: '45', label: 'States Covered' },
    { value: '92%', label: 'Issue Resolution' },
  ];

  const plans = [
    {
      name: 'Free',
      price: 0,
      features: ['Rights lookup', 'Basic lease tips', 'Community forum access'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Tenant+',
      price: 4.99,
      features: ['Everything in Free', 'Lease analysis', 'Letter generator', 'Issue documenter'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Protected',
      price: 9.99,
      features: ['Everything in Tenant+', 'Attorney connect', 'Deposit tracker', 'Priority support'],
      cta: 'Go Protected',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
          RentRight
        </div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#stats" className="hover:text-white transition">Impact</a>
        </div>
        <button className="bg-gradient-to-r from-green-500 to-teal-500 text-black font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition">
          Sign Up Free
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Know Your Rights.{' '}
          <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            Protect Your Home.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          AI-powered lease analysis, tenant rights lookup by state, and issue documentation.
          Fight unfair landlords with knowledge and evidence.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-green-500 to-teal-500 text-black font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90 transition">
            Analyze My Lease
          </button>
          <button className="border border-gray-700 text-gray-300 font-semibold px-8 py-3 rounded-lg text-lg hover:border-green-500 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Everything You Need to{' '}
          <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            Fight Back
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 text-center mb-8">Save 2 months with annual billing</p>
        <div className="flex items-center justify-center gap-3 mb-14">
          <span className={annual ? 'text-gray-500' : 'text-white font-semibold'}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition ${
              annual ? 'bg-green-500' : 'bg-gray-700'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                annual ? 'translate-x-7' : ''
              }`}
            />
          </button>
          <span className={annual ? 'text-white font-semibold' : 'text-gray-500'}>Annual</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${
                p.highlight
                  ? 'border-green-500 bg-gradient-to-b from-green-500/10 to-transparent'
                  : 'border-gray-800 bg-gray-900'
              }`}
            >
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <div className="text-4xl font-extrabold my-4">
                ${p.price === 0 ? '0' : price(p.price)}
                {p.price > 0 && <span className="text-base font-normal text-gray-400">{period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-green-500">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  p.highlight
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-black hover:opacity-90'
                    : 'border border-gray-700 text-gray-300 hover:border-green-500'
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            RentRight
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <div className="text-gray-600 text-sm">© 2026 RentRight. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
