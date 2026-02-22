'use client';

import { useState } from 'react';

export default function FitPathLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoEquipment, setDemoEquipment] = useState<string[]>([]);

  const equipment = ['Dumbbells', 'Barbell', 'Pull-up Bar', 'Resistance Bands', 'Kettlebell', 'Bench'];

  const toggleEquipment = (item: string) => {
    setDemoEquipment((prev) =>
      prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item]
    );
  };

  const price = (monthly: number) =>
    annual ? `$${(monthly * 10 / 12).toFixed(2)}` : `$${monthly.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            FitPath
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {['Features', 'Pricing', 'Exercises', 'Blog'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition">
                {l}
              </a>
            ))}
          </div>
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:border-white/40 transition">
              Log In
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-red-500 to-orange-500 font-semibold hover:opacity-90 transition">
              Start Free
            </button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {['Features', 'Pricing', 'Exercises', 'Blog'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            ))}
            <button className="mt-2 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 font-semibold">
              Start Free
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-red-500/30 text-red-400 text-xs font-medium mb-6">
          🔥 2.1M+ workouts generated and counting
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Your Gym. Your Rules.{' '}
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Your AI Coach.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          AI creates workouts from your available equipment, space, and time. Get real-time form
          feedback. Progress tracking that adapts to your fitness journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 font-bold text-lg hover:scale-105 transition-transform">
            Start Training Free
          </button>
          <button className="px-8 py-3.5 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition">
            Watch Demo
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[.02]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            ['2.1M', 'Workouts Generated'],
            ['67%', 'Faster Progress'],
            ['120K+', 'Exercises'],
            ['890K+', 'Athletes'],
          ].map(([val, label]) => (
            <div key={label} className="py-8 text-center">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                {val}
              </div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Try It — Pick Your Equipment</h2>
        <p className="text-gray-500 mb-8">Select what you have and see how FitPath builds your workout.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {equipment.map((eq) => (
            <button
              key={eq}
              onClick={() => toggleEquipment(eq)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                demoEquipment.includes(eq)
                  ? 'border-red-500 bg-red-500/20 text-red-300'
                  : 'border-white/20 text-gray-400 hover:border-white/40'
              }`}
            >
              {eq}
            </button>
          ))}
        </div>
        {demoEquipment.length > 0 && (
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 text-left">
            <div className="text-sm text-red-400 font-semibold mb-2">🏋️ AI Workout Generated</div>
            <p className="text-gray-300 text-sm">
              Using <span className="text-white font-semibold">{demoEquipment.join(', ')}</span> — 45 min
              session targeting full body with progressive overload tracking enabled.
            </p>
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Train Smarter
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            Six powerful modules that replace your personal trainer, gym notebook, and fitness apps.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['🧠', 'Smart Workouts', 'AI builds routines from your equipment and time. Every session is optimized for your goals.'],
              ['📷', 'Form Checker', 'Camera-based real-time form feedback. Prevent injuries and maximize every rep.'],
              ['📈', 'Progressive Overload', 'Auto-adjusts weights and reps each session so you never plateau.'],
              ['⏱️', 'Workout Timer', 'Built-in rest timers and HIIT intervals keep your intensity perfect.'],
              ['📊', 'Body Metrics', 'Track weight, measurements, body fat percentage, and progress photos over time.'],
              ['📚', 'Exercise Library', '120K+ exercises with video demonstrations and muscle-group targeting.'],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[.02] hover:border-red-500/40 hover:bg-red-500/[.04] transition-all"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Honest Pricing</h2>
          <p className="text-gray-500 mb-8">Start free. Upgrade when you&apos;re ready to go beast mode.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                annual ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                  annual ? 'left-6' : 'left-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-red-400 text-xs">Save 17%</span>
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Free',
                price: 0,
                features: ['3 workouts/week', 'Basic exercises', 'Limited tracking', 'Community access'],
              },
              {
                name: 'Athlete',
                price: 5.99,
                popular: true,
                features: ['Unlimited workouts', 'Form Checker', 'Progressive overload', 'Full exercise library', 'Advanced metrics'],
              },
              {
                name: 'Elite',
                price: 9.99,
                features: ['Everything in Athlete', 'Meal plans', 'Coaching AI', 'Advanced analytics', 'Priority support'],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 text-left ${
                  tier.popular
                    ? 'border-red-500/50 bg-red-500/[.06] scale-105'
                    : 'border-white/10 bg-white/[.02]'
                }`}
              >
                {tier.popular && (
                  <div className="text-xs font-bold text-red-400 mb-3 uppercase tracking-wider">
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
                      <span className="text-red-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90'
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
            <span className="text-xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              FitPath
            </span>
            <p className="text-sm text-gray-500 mt-3">AI-powered fitness coaching for everyone.</p>
          </div>
          {[
            ['Product', ['Features', 'Pricing', 'Exercise Library', 'Mobile App']],
            ['Company', ['About', 'Blog', 'Careers', 'Press']],
            ['Legal', ['Privacy', 'Terms', 'Cookie Policy', 'GDPR']],
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
          © 2026 FitPath. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
