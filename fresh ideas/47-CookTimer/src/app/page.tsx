'use client';

import { useState } from 'react';

export default function CookTimerLanding() {
  const [annual, setAnnual] = useState(false);

  const price = (monthly: number) =>
    annual ? (monthly * 10).toFixed(2) : monthly.toFixed(2);
  const period = annual ? '/yr' : '/mo';

  const features = [
    { icon: '⏱️', title: 'Multi-Timer', desc: 'Run unlimited parallel timers for different dishes — all on one screen.' },
    { icon: '🔄', title: 'Sync Engine', desc: 'Calculates start times so every dish finishes together. No more cold sides.' },
    { icon: '🔊', title: 'Step Alerts', desc: 'Voice alerts for each cooking step — totally hands-free while you cook.' },
    { icon: '📥', title: 'Recipe Import', desc: 'Import from any recipe URL or cookbook and auto-generate timed steps.' },
    { icon: '📊', title: 'Kitchen Dashboard', desc: 'At-a-glance view of all active timers, progress bars, and upcoming steps.' },
    { icon: '📋', title: 'Meal History', desc: 'Save timing configurations for your go-to meals. One-tap reuse forever.' },
  ];

  const stats = [
    { value: '4.2M', label: 'Meals Timed' },
    { value: '89%', label: 'Less Stressful' },
    { value: '120K+', label: 'Recipes' },
    { value: '340K+', label: 'Home Chefs' },
  ];

  const plans = [
    {
      name: 'Free',
      price: 0,
      features: ['3 simultaneous timers', 'Basic alerts', 'Simple dashboard'],
      cta: 'Start Cooking',
      highlight: false,
    },
    {
      name: 'Chef',
      price: 3.99,
      features: ['Everything in Free', 'Unlimited timers', 'Sync engine', 'Voice alerts'],
      cta: 'Upgrade to Chef',
      highlight: true,
    },
    {
      name: 'Pro Chef',
      price: 7.99,
      features: ['Everything in Chef', 'Recipe import', 'Meal planning', 'Family sharing'],
      cta: 'Go Pro Chef',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
          CookTimer
        </div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#stats" className="hover:text-white transition">Stats</a>
        </div>
        <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition">
          Get the App
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Every Dish.{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Perfect Timing.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Cooking multiple dishes? CookTimer orchestrates all your timers so everything finishes
          at the same time. Thanksgiving dinner, perfected.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90 transition">
            Start a Timer
          </button>
          <button className="border border-gray-700 text-gray-300 font-semibold px-8 py-3 rounded-lg text-lg hover:border-amber-500 transition">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
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
          Your Kitchen,{' '}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Orchestrated
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition"
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
          Pick Your Plan
        </h2>
        <p className="text-gray-400 text-center mb-8">Save 2 months with annual billing</p>
        <div className="flex items-center justify-center gap-3 mb-14">
          <span className={annual ? 'text-gray-500' : 'text-white font-semibold'}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition ${
              annual ? 'bg-amber-500' : 'bg-gray-700'
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
                  ? 'border-amber-500 bg-gradient-to-b from-amber-500/10 to-transparent'
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
                    <span className="text-amber-500">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  p.highlight
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:opacity-90'
                    : 'border border-gray-700 text-gray-300 hover:border-amber-500'
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
          <div className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            CookTimer
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Blog</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <div className="text-gray-600 text-sm">© 2026 CookTimer. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
