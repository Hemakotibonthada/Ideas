'use client';

import { useState } from 'react';

export default function PowerDownLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAppliance, setActiveAppliance] = useState<string | null>(null);

  const appliances = [
    { name: 'HVAC', watts: '3,500W', cost: '$142/mo', pct: 45 },
    { name: 'Water Heater', watts: '1,200W', cost: '$48/mo', pct: 18 },
    { name: 'Dryer', watts: '900W', cost: '$36/mo', pct: 12 },
    { name: 'Fridge', watts: '400W', cost: '$16/mo', pct: 8 },
    { name: 'Lighting', watts: '300W', cost: '$12/mo', pct: 6 },
  ];

  const price = (monthly: number) =>
    annual ? `$${(monthly * 10 / 12).toFixed(2)}` : `$${monthly.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            PowerDown
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {['Features', 'Pricing', 'Solar', 'Help'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition">
                {l}
              </a>
            ))}
          </div>
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:border-white/40 transition">
              Log In
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-yellow-500 to-amber-500 font-semibold text-black hover:opacity-90 transition">
              Get Started
            </button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-950/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {['Features', 'Pricing', 'Solar', 'Help'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            ))}
            <button className="mt-2 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-500 font-semibold text-black">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 text-yellow-400 text-xs font-medium mb-6">
          ⚡ Average 34% reduction on energy bills
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Cut Your Energy Bill{' '}
          <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            in Half
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Monitor every appliance&apos;s energy usage in real-time. Find energy waste, get savings
          recommendations, estimate solar panel ROI — all from your phone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 font-bold text-lg text-black hover:scale-105 transition-transform">
            Start Monitoring Free
          </button>
          <button className="px-8 py-3.5 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition">
            Calculate Solar ROI
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[.02]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            ['$67M', 'Saved on Bills'],
            ['34%', 'Avg Reduction'],
            ['120K+', 'Homes Monitored'],
            ['89%', 'Satisfaction'],
          ].map(([val, label]) => (
            <div key={label} className="py-8 text-center">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                {val}
              </div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">See Where Your Energy Goes</h2>
        <p className="text-gray-500 mb-8">Click an appliance to see its energy footprint and savings tips.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {appliances.map((a) => (
            <button
              key={a.name}
              onClick={() => setActiveAppliance(activeAppliance === a.name ? null : a.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                activeAppliance === a.name
                  ? 'border-yellow-500 bg-yellow-500/20 text-yellow-300'
                  : 'border-white/20 text-gray-400 hover:border-white/40'
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>
        {activeAppliance && (
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 text-left max-w-lg mx-auto">
            <div className="text-sm text-yellow-400 font-semibold mb-3">
              ⚡ {activeAppliance} Energy Profile
            </div>
            {appliances
              .filter((a) => a.name === activeAppliance)
              .map((a) => (
                <div key={a.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Average draw</span>
                    <span className="text-white font-semibold">{a.watts}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Monthly cost</span>
                    <span className="text-white font-semibold">{a.cost}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-gray-400">% of total bill</span>
                    <span className="text-white font-semibold">{a.pct}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 transition-all"
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Take Control of Your{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
              Energy Costs
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            Six powerful tools to understand, reduce, and optimize your home energy use.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['📊', 'Real-Time Monitor', 'See which appliances consume the most power at any given moment.'],
              ['🚨', 'Waste Alerts', 'Get notified when appliances waste energy — phantom loads, left-on devices, inefficiencies.'],
              ['📈', 'Usage Analytics', 'Hourly, daily, and monthly consumption charts and trends to spot savings opportunities.'],
              ['☀️', 'Solar Calculator', 'Estimate ROI for solar panels on your home based on your actual usage data.'],
              ['💡', 'Smart Tips', 'AI recommendations to reduce usage without sacrificing comfort or convenience.'],
              ['🌍', 'Carbon Impact', 'See your home\'s CO₂ footprint and track your emission reduction over time.'],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[.02] hover:border-yellow-500/40 hover:bg-yellow-500/[.04] transition-all"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans That Save You Money</h2>
          <p className="text-gray-500 mb-8">The subscription pays for itself in reduced energy bills.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                annual ? 'bg-gradient-to-r from-yellow-500 to-amber-500' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                  annual ? 'left-6' : 'left-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-yellow-400 text-xs">Save 17%</span>
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Free',
                price: 0,
                features: ['Manual logging', 'Basic charts', 'Monthly summary', 'Community tips'],
              },
              {
                name: 'Monitor',
                price: 3.99,
                popular: true,
                features: ['Real-time tracking', 'Waste alerts', 'Smart tips', 'Usage analytics', 'No ads'],
              },
              {
                name: 'HomeOwner',
                price: 8.99,
                features: ['Everything in Monitor', 'Solar calculator', 'Smart home integration', 'Family sharing', 'Priority support'],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 text-left ${
                  tier.popular
                    ? 'border-yellow-500/50 bg-yellow-500/[.06] scale-105'
                    : 'border-white/10 bg-white/[.02]'
                }`}
              >
                {tier.popular && (
                  <div className="text-xs font-bold text-yellow-400 mb-3 uppercase tracking-wider">
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
                      <span className="text-yellow-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${
                    tier.popular
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:opacity-90'
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
            <span className="text-xl font-extrabold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
              PowerDown
            </span>
            <p className="text-sm text-gray-500 mt-3">
              Smart energy monitoring for a greener, cheaper home.
            </p>
          </div>
          {[
            ['Product', ['Features', 'Pricing', 'Solar ROI', 'Smart Home']],
            ['Company', ['About', 'Blog', 'Careers', 'Sustainability']],
            ['Legal', ['Privacy', 'Terms', 'Energy Data Policy', 'Cookie Policy']],
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
          © 2026 PowerDown. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
