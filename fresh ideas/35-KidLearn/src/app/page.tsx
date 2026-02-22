'use client';

import { useState } from 'react';

export default function KidLearnLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  const subjects = [
    { name: 'Math', emoji: '🔢', sample: 'What is 3 × 7? Adaptive difficulty adjusts from basic counting to algebra based on age and skill.' },
    { name: 'Reading', emoji: '📖', sample: 'Interactive stories where kids choose the ending. Vocabulary grows with comprehension level.' },
    { name: 'Science', emoji: '🔬', sample: 'Why is the sky blue? Animated experiments kids can run with virtual lab tools.' },
    { name: 'Art', emoji: '🎨', sample: 'Draw, color, and create digital art with guided tutorials matched to motor skill development.' },
    { name: 'Coding', emoji: '💻', sample: 'Visual block coding that teaches logic and loops through fun game creation.' },
  ];

  const price = (monthly: number) =>
    annual ? `$${(monthly * 10 / 12).toFixed(2)}` : `$${monthly.toFixed(2)}`;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
            KidLearn
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            {['Features', 'Pricing', 'For Parents', 'For Schools'].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-white transition">
                {l}
              </a>
            ))}
          </div>
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm rounded-lg border border-white/20 hover:border-white/40 transition">
              Parent Login
            </button>
            <button className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 font-semibold hover:opacity-90 transition">
              Try Free
            </button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {['Features', 'Pricing', 'For Parents', 'For Schools'].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g, '-')}`} className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            ))}
            <button className="mt-2 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 font-semibold">
              Try Free
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 text-sky-400 text-xs font-medium mb-6">
          🎓 COPPA compliant · Ad-free · Ages 3-12
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Learning That Grows{' '}
          <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
            With Your Child
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Adaptive learning platform that adjusts to each child&apos;s pace, interests, and learning
          style. Math, reading, science, and creativity — all in a safe, ad-free environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 font-bold text-lg hover:scale-105 transition-transform">
            Start Learning Free
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
            ['1.8M', 'Lessons Completed'],
            ['45%', 'Faster Learning'],
            ['320K+', 'Kids Enrolled'],
            ['Ages 3-12', 'COPPA Compliant'],
          ].map(([val, label]) => (
            <div key={label} className="py-8 text-center">
              <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
                {val}
              </div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Explore Subjects</h2>
        <p className="text-gray-500 mb-8">Tap a subject to see how KidLearn makes it fun and adaptive.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {subjects.map((s) => (
            <button
              key={s.name}
              onClick={() => setActiveSubject(activeSubject === s.name ? null : s.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                activeSubject === s.name
                  ? 'border-sky-500 bg-sky-500/20 text-sky-300'
                  : 'border-white/20 text-gray-400 hover:border-white/40'
              }`}
            >
              <span>{s.emoji}</span>
              {s.name}
            </button>
          ))}
        </div>
        {activeSubject && (
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 text-left max-w-lg mx-auto">
            <div className="text-sm text-sky-400 font-semibold mb-2">
              {subjects.find((s) => s.name === activeSubject)?.emoji} {activeSubject} Preview
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {subjects.find((s) => s.name === activeSubject)?.sample}
            </p>
          </div>
        )}
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Parents &amp; Teachers{' '}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              Love KidLearn
            </span>
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            Built by educators and child psychologists for effective, enjoyable, safe learning.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['🧠', 'Adaptive Engine', 'AI adjusts difficulty based on each child\'s progress. No child left behind, no child held back.'],
              ['📚', 'Multi-Subject', 'Math, reading, science, art, and coding — all in one app with unified progress tracking.'],
              ['👁️', 'Learning Style Detection', 'Visual, auditory, or kinesthetic — KidLearn detects and adapts to how your child learns best.'],
              ['📊', 'Progress Dashboard', 'Parents see detailed progress reports: time spent, mastery levels, strengths, and areas for growth.'],
              ['⭐', 'Reward System', 'Earn stars, badges, and unlock fun activities. Motivation built into every lesson.'],
              ['🛡️', 'Safe Environment', 'COPPA compliant, zero ads, no external links ever. Your child\'s safety is non-negotiable.'],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="group p-6 rounded-2xl border border-white/10 bg-white/[.02] hover:border-sky-500/40 hover:bg-sky-500/[.04] transition-all"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans for Every Family</h2>
          <p className="text-gray-500 mb-8">Invest in your child&apos;s future. Start with a free plan today.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full relative transition-colors ${
                annual ? 'bg-gradient-to-r from-sky-500 to-violet-500' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                  annual ? 'left-6' : 'left-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-sky-400 text-xs">Save 17%</span>
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Free',
                price: 0,
                features: ['1 child', '2 subjects', 'Basic progress', 'Limited lessons/day'],
              },
              {
                name: 'Family',
                price: 6.99,
                popular: true,
                features: ['4 children', 'All subjects', 'Full analytics', 'Offline mode', 'No limits'],
              },
              {
                name: 'School',
                price: 3,
                priceSuffix: '/student/mo',
                features: ['Classroom tools', 'Teacher dashboard', 'Bulk management', 'Custom curriculum', 'Admin controls'],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 text-left ${
                  tier.popular
                    ? 'border-sky-500/50 bg-sky-500/[.06] scale-105'
                    : 'border-white/10 bg-white/[.02]'
                }`}
              >
                {tier.popular && (
                  <div className="text-xs font-bold text-sky-400 mb-3 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="text-4xl font-black mb-1">
                  {tier.price === 0 ? '$0' : price(tier.price)}
                  <span className="text-sm text-gray-500 font-normal">
                    {tier.priceSuffix || '/mo'}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-400">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-sky-400 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${
                    tier.popular
                      ? 'bg-gradient-to-r from-sky-500 to-violet-500 hover:opacity-90'
                      : 'border border-white/20 hover:bg-white/5'
                  }`}
                >
                  {tier.price === 0 ? 'Get Started' : tier.name === 'School' ? 'Contact Sales' : 'Start Free Trial'}
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
            <span className="text-xl font-extrabold bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              KidLearn
            </span>
            <p className="text-sm text-gray-500 mt-3">
              Adaptive learning for every child, everywhere. Safe, fun, effective.
            </p>
          </div>
          {[
            ['Product', ['Features', 'Pricing', 'For Parents', 'For Schools']],
            ['Resources', ['Help Center', 'Blog', 'Curriculum Guide', 'Research']],
            ['Legal', ['Privacy (COPPA)', 'Terms', 'Child Safety', 'Cookie Policy']],
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
          © 2026 KidLearn. All rights reserved. COPPA compliant. No data is shared with third parties.
        </div>
      </footer>
    </div>
  );
}
