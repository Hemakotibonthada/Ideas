'use client';
import { useState } from 'react';

export default function MealPrepLanding() {
  const [annual, setAnnual] = useState(false);

  const stats = [
    { value: '890K+', label: 'Prep Sessions' },
    { value: '4.2 hrs', label: 'Avg Saved Per Week' },
    { value: '340K+', label: 'Meal Preppers' },
    { value: '$120', label: 'Avg Saved Per Month' },
  ];

  const features = [
    { title: 'Weekly Plans', desc: 'AI generates 5-day meal plans tailored to your dietary preferences, calorie goals, and available ingredients.' },
    { title: 'Batch Optimizer', desc: 'Groups recipes intelligently to minimize total cooking time — chop once, cook smart.' },
    { title: 'Sync Timers', desc: 'Parallel timers ensure every dish finishes on schedule. No more cold pasta, no more burnt rice.' },
    { title: 'Auto Grocery List', desc: 'Aggregated shopping list across all recipes — sorted by aisle, with quantities combined.' },
    { title: 'Container Planner', desc: 'Tells you exactly which containers you need and how to portion meals for the week.' },
    { title: 'Reheat Guide', desc: 'Optimal reheating instructions for each prepped meal — microwave, oven, or stovetop.' },
  ];

  const featureIcons = ['📅', '⚡', '⏱️', '🛒', '📦', '🔥'];

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      features: ['1 plan per week', 'Basic recipe library', 'Simple grocery list', 'Community recipes'],
      cta: 'Start Free',
      highlight: false,
    },
    {
      name: 'Prepper',
      monthly: 4.99,
      yearly: 49.99,
      features: ['Unlimited plans', 'Sync timers', 'Smart grocery lists', 'Batch optimizer'],
      cta: 'Start Prepping',
      highlight: true,
    },
    {
      name: 'Chef',
      monthly: 8.99,
      yearly: 89.99,
      features: ['Custom recipe import', 'Macro & nutrition tracking', 'Family-size plans', 'Priority support'],
      cta: 'Go Chef',
      highlight: false,
    },
  ];

  const price = (p: { monthly: number; yearly: number }) =>
    annual ? p.yearly : p.monthly;
  const period = annual ? '/yr' : '/mo';

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            MealPrep
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Results</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-sm font-semibold text-black hover:opacity-90 transition">
            Plan My Week
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 text-orange-400 text-sm mb-6">
            🍳 Sunday prep, done in 2 hours
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Cook Once.{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Eat All Week.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            AI generates weekly batch cooking plans. Synchronized timers ensure everything cooks in order.
            Grocery lists auto-generated. Sunday prep, done in 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-black hover:opacity-90 transition">
              Generate My Plan — Free
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition">
              Watch How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
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
            Your kitchen,{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">optimized</span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            From plan to plate — every tool you need to make meal prep effortless.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={f.title} className="p-6 rounded-2xl border border-white/10 hover:border-orange-500/40 bg-white/5 transition group">
                <div className="text-3xl mb-4">{featureIcons[i]}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent via-orange-950/20 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans that fit your appetite</h2>
          <p className="text-gray-500 mb-8">Start free. Scale when your prep game grows.</p>
          <div className="inline-flex items-center gap-3 mb-12 bg-white/5 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'}`}
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
                    ? 'border-orange-500 bg-orange-500/10 scale-105'
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
                      <span className="text-orange-400 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:opacity-90'
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
          <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            MealPrep
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Recipes</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 MealPrep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
