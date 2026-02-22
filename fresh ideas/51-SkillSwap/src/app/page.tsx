'use client';
import { useState } from 'react';

export default function SkillSwapLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      period: '',
      features: ['3 swaps per month', 'Basic matching', 'Public profile', 'Community access'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: annual ? 3.99 : 4.99,
      period: '/mo',
      features: ['Unlimited swaps', 'AI-powered matching', 'Portfolio showcase', 'Priority support', 'Verified badge'],
      cta: 'Go Pro',
      highlight: true,
    },
    {
      name: 'Agency',
      price: annual ? 11.99 : 14.99,
      period: '/mo',
      features: ['Everything in Pro', 'Team swaps', 'Advanced analytics', 'Priority matching', 'API access', 'Dedicated manager'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Skill Marketplace', desc: 'Browse & offer hundreds of professional skills across categories like design, development, writing, and marketing.' },
    { title: 'AI Matching', desc: 'Get instant matches with compatible skill seekers using our intelligent algorithm that factors in skill level and availability.' },
    { title: 'Portfolio Showcase', desc: 'Show your work to build trust. Upload samples, case studies, and testimonials to win more swaps.' },
    { title: 'Fair Exchange', desc: 'AI ensures equal value in every swap by analyzing market rates, skill complexity, and time investment.' },
    { title: 'Verified Reviews', desc: 'Build your swap reputation with honest ratings and reviews from every completed exchange.' },
    { title: 'Contract Builder', desc: 'Auto-generate swap agreements for clarity. Define deliverables, timelines, and revision limits upfront.' },
  ];

  const stats = [
    { value: '180K+', label: 'Swaps Completed' },
    { value: '2,400+', label: 'Skills Listed' },
    { value: '89K+', label: 'Freelancers' },
    { value: '$12M', label: 'Equivalent Value Traded' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">SkillSwap</span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Stats</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 text-sm font-medium hover:opacity-90 transition">Start Swapping</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Trade Skills.{' '}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">Grow Together.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            A marketplace where freelancers barter expertise. Offer web design, get video editing. Trade copywriting for SEO. No money needed — just talent.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 font-semibold hover:opacity-90 transition text-lg">Start Free</button>
            <button className="px-8 py-3 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition text-lg">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need to Swap</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">Powerful tools that make skill trading seamless, fair, and rewarding.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-4 text-xl">⚡</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-center mb-8">Start free. Upgrade when you need more.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-violet-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-violet-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border ${p.highlight ? 'border-violet-500 bg-violet-500/10 scale-105' : 'border-white/10 bg-white/5'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${p.price}</span>
                  {p.period && <span className="text-gray-400">{p.period}</span>}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((ft) => (
                    <li key={ft} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-violet-400">✓</span> {ft}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-violet-500 to-indigo-500 hover:opacity-90' : 'border border-white/20 hover:bg-white/5'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">SkillSwap</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 SkillSwap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
