'use client';
import { useState } from 'react';

export default function GreenScoreLanding() {
  const [annual, setAnnual] = useState(false);

  const stats = [
    { value: '120K+', label: 'Homes Scored' },
    { value: '34%', label: 'Avg Improvement' },
    { value: '$2,400', label: 'Avg Annual Savings' },
    { value: '89%', label: 'Take Action' },
  ];

  const features = [
    { title: 'Home Assessment', desc: '20-question quiz generates your sustainability score from 0 to 100 based on energy, water, waste, and materials.' },
    { title: 'Improvement Plan', desc: 'Ranked recommendations sorted by ROI and environmental impact so you know exactly where to start.' },
    { title: 'Savings Calculator', desc: 'See exact dollar savings for each improvement — insulation, solar, LED upgrades, and more.' },
    { title: 'Rebate Finder', desc: 'Find government rebates, tax credits, and utility incentives you qualify for in your area.' },
    { title: 'Before / After', desc: 'Reassess after making improvements and watch your sustainability score climb over time.' },
    { title: 'Neighborhood Compare', desc: 'See how your home stacks up against neighbors anonymously — no personal data shared.' },
  ];

  const featureIcons = ['🏠', '📋', '💰', '🏛️', '📊', '🏘️'];

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      features: ['Basic sustainability score', 'Top 3 recommendations', 'One-time assessment', 'Email report'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Green',
      monthly: 4.99,
      yearly: 49.99,
      features: ['Full improvement plan', 'Savings calculator', 'Unlimited reassessments', 'Priority support'],
      cta: 'Go Green',
      highlight: true,
    },
    {
      name: 'Homeowner',
      monthly: 8.99,
      yearly: 89.99,
      features: ['Rebate finder', 'Progress tracking dashboard', 'Contractor connect', 'Neighborhood compare'],
      cta: 'Upgrade Now',
      highlight: false,
    },
  ];

  const price = (p: { monthly: number; yearly: number }) =>
    annual ? p.yearly : p.monthly;
  const period = annual ? '/yr' : '/mo';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            GreenScore
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Impact</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-sm font-semibold hover:opacity-90 transition">
            Score My Home
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 text-emerald-400 text-sm mb-6">
            🌿 Sustainability starts at home
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            How Green Is{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Your Home?
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Answer 20 questions about your home and get a sustainability score from 0–100. Plus actionable
            recommendations ranked by cost, savings, and environmental impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold hover:opacity-90 transition">
              Take the Quiz — Free
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition">
              See a Sample Report
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">go greener</span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            From assessment to action — track your progress and save money while helping the planet.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={f.title} className="p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 bg-white/5 transition group">
                <div className="text-3xl mb-4">{featureIcons[i]}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-500 mb-8">Start free. Upgrade when you want the full picture.</p>
          <div className="inline-flex items-center gap-3 mb-12 bg-white/5 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Annually
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border text-left transition ${
                  plan.highlight
                    ? 'border-emerald-500 bg-emerald-500/10 scale-105'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="text-4xl font-bold my-4">
                  ${price(plan).toFixed(2)}
                  {price(plan) > 0 && <span className="text-base font-normal text-gray-500">{period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90'
                      : 'border border-white/20 hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
            GreenScore
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 GreenScore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
