'use client';

import { useState } from 'react';

export default function MoodMapLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { emoji: '😊', label: 'Great', color: 'text-green-400' },
    { emoji: '🙂', label: 'Good', color: 'text-emerald-400' },
    { emoji: '😐', label: 'Okay', color: 'text-yellow-400' },
    { emoji: '😔', label: 'Low', color: 'text-orange-400' },
    { emoji: '😢', label: 'Sad', color: 'text-red-400' },
  ];

  const price = (monthly: number) =>
    annual ? `$${(monthly * 10 / 12).toFixed(2)}` : `$${monthly.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            MoodMap
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {['Features', 'Pricing', 'Science', 'Resources'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition">
                {l}
              </a>
            ))}
          </div>
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:border-white/40 transition">
              Log In
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold hover:opacity-90 transition">
              Start Journaling
            </button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-gray-950/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {['Features', 'Pricing', 'Science', 'Resources'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            ))}
            <button className="mt-2 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold">
              Start Journaling
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-medium mb-6">
          🧠 HIPAA-compliant & clinically informed
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Understand Your Mind.{' '}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            One Day at a Time.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          AI-powered mental health journaling that detects mood patterns, triggers, and trends.
          Includes guided CBT exercises and therapist-shareable reports.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 font-bold text-lg hover:scale-105 transition-transform">
            Begin Your Journey
          </button>
          <button className="px-8 py-3.5 rounded-xl border border-white/20 font-semibold hover:bg-white/5 transition">
            See How It Works
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[.02]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            ['8.2M', 'Journal Entries'],
            ['73%', 'Improved Mood'],
            ['340K+', 'Users'],
            ['HIPAA', 'Compliant'],
          ].map(([val, label]) => (
            <div key={label} className="py-8 text-center">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {val}
              </div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">How Are You Feeling Right Now?</h2>
        <p className="text-gray-500 mb-8">Tap a mood to see how MoodMap captures your emotional state.</p>
        <div className="flex justify-center gap-4 mb-8">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => setSelectedMood(m.label)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                selectedMood === m.label
                  ? 'border-purple-500 bg-purple-500/10 scale-110'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <span className="text-3xl">{m.emoji}</span>
              <span className={`text-xs font-medium ${selectedMood === m.label ? m.color : 'text-gray-500'}`}>
                {m.label}
              </span>
            </button>
          ))}
        </div>
        {selectedMood && (
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 text-left max-w-lg mx-auto">
            <div className="text-sm text-purple-400 font-semibold mb-2">📝 AI Journaling Prompt</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              You selected <span className="text-white font-semibold">{selectedMood}</span>. MoodMap would now
              guide you through a reflection: &quot;What happened today that contributed to feeling this way? Let&apos;s
              explore any patterns with previous {selectedMood.toLowerCase()} entries.&quot;
            </p>
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your Complete{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Mental Wellness
            </span>{' '}
            Toolkit
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            Clinically-informed tools to understand, track, and improve your emotional well-being.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['🎭', 'Mood Tracking', 'Log mood with emoji, intensity, and context. Build a rich emotional timeline day by day.'],
              ['🔍', 'Pattern Detection', 'AI identifies triggers, cycles, and trends across weeks and months of entries.'],
              ['🧩', 'CBT Exercises', 'Guided cognitive behavioral therapy exercises to reframe thoughts and manage anxiety.'],
              ['✍️', 'Guided Journaling', 'AI prompts to help you process emotions, gratitude lists, and reflective writing.'],
              ['📋', 'Therapist Reports', 'Generate shareable PDF mood reports so your therapist sees the full picture.'],
              ['🆘', 'Crisis Resources', '24/7 crisis hotline integration and grounding exercises when you need them most.'],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[.02] hover:border-purple-500/40 hover:bg-purple-500/[.04] transition-all"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invest in Your Mental Health</h2>
          <p className="text-gray-500 mb-8">Start free. Your mind deserves the best tools.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                annual ? 'bg-gradient-to-r from-purple-500 to-indigo-500' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                  annual ? 'left-6' : 'left-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-purple-400 text-xs">Save 17%</span>
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Free',
                price: 0,
                features: ['Daily mood log', 'Basic insights', '7-day history', 'Community'],
              },
              {
                name: 'Wellness',
                price: 4.99,
                popular: true,
                features: ['CBT exercises', 'Pattern detection', 'Unlimited history', 'Guided journaling', 'Export data'],
              },
              {
                name: 'Therapy',
                price: 8.99,
                features: ['Everything in Wellness', 'Therapist sharing', 'Advanced analytics', 'Priority support', 'Custom prompts'],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 text-left ${
                  tier.popular
                    ? 'border-purple-500/50 bg-purple-500/[.06] scale-105'
                    : 'border-white/10 bg-white/[.02]'
                }`}
              >
                {tier.popular && (
                  <div className="text-xs font-bold text-purple-400 mb-3 uppercase tracking-wider">
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
                      <span className="text-purple-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90'
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
            <span className="text-xl font-extrabold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              MoodMap
            </span>
            <p className="text-sm text-gray-500 mt-3">
              AI-powered mental wellness journaling. Your feelings matter.
            </p>
          </div>
          {[
            ['Product', ['Features', 'Pricing', 'Science', 'Mobile App']],
            ['Resources', ['Help Center', 'Blog', 'Research', 'Therapist Directory']],
            ['Legal', ['Privacy (HIPAA)', 'Terms', 'Data Security', 'Cookie Policy']],
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
          © 2026 MoodMap. All rights reserved. If you&apos;re in crisis, call 988 Suicide &amp; Crisis Lifeline.
        </div>
      </footer>
    </div>
  );
}
