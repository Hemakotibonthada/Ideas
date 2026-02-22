'use client';
import { useState } from 'react';

export default function SignLingoLanding() {
  const [annual, setAnnual] = useState(false);

  const stats = [
    { value: '890K+', label: 'Signs Practiced' },
    { value: '6', label: 'Sign Languages' },
    { value: '340K+', label: 'Learners' },
    { value: '92%', label: 'Gesture Accuracy' },
  ];

  const features = [
    { title: 'AI Gesture Check', desc: 'Your camera analyzes hand signs for accuracy in real time — instant feedback on form, speed, and clarity.' },
    { title: 'Structured Lessons', desc: 'Progressive curriculum from the alphabet to full conversations — learn at your own pace with clear milestones.' },
    { title: 'Speed Practice', desc: 'Flash-card style rapid sign practice — build muscle memory and recognition speed with timed drills.' },
    { title: 'Video Dictionary', desc: 'Every sign demonstrated in video with multiple angles. Slow-motion replay and side-by-side comparison.' },
    { title: 'Daily Challenges', desc: '5-minute daily practice sessions designed to build consistency and long-term retention.' },
    { title: 'Conversation Mode', desc: 'Practice signing full sentences with AI-powered response — simulate real dialogues and get scored.' },
  ];

  const featureIcons = ['🤖', '📚', '⚡', '🎥', '🏆', '💬'];

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      features: ['Alphabet + numbers', 'Basic lessons (10)', 'Video dictionary preview', 'Daily streak tracking'],
      cta: 'Start Learning',
      highlight: false,
    },
    {
      name: 'Learner',
      monthly: 4.99,
      yearly: 49.99,
      features: ['Full curriculum access', 'AI gesture check', 'Complete video dictionary', 'Speed practice drills'],
      cta: 'Become a Learner',
      highlight: true,
    },
    {
      name: 'Fluent',
      monthly: 8.99,
      yearly: 89.99,
      features: ['All 6 sign languages', 'Conversation mode', 'Offline downloads', 'Progress analytics'],
      cta: 'Go Fluent',
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
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
            SignLingo
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Community</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-green-500 text-sm font-semibold text-black hover:opacity-90 transition">
            Start Signing
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 text-yellow-400 text-sm mb-6">
            🤟 AI-powered sign language learning
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Speak With{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
              Your Hands
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Learn sign language with AI-powered gesture recognition. Your camera becomes your tutor —
            practice signs and get instant feedback on accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-green-500 font-semibold text-black hover:opacity-90 transition">
              Try Your First Lesson — Free
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition">
              See It in Action
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
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
            Learn to sign with{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">confidence</span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            Your camera, your curriculum, your pace — AI makes sure every sign is right.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={f.title} className="p-6 rounded-2xl border border-white/10 hover:border-yellow-500/40 bg-white/5 transition group">
                <div className="text-3xl mb-4">{featureIcons[i]}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent via-yellow-950/20 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn at any level, any budget</h2>
          <p className="text-gray-500 mb-8">Free to start. Upgrade to unlock the full curriculum.</p>
          <div className="inline-flex items-center gap-3 mb-12 bg-white/5 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-yellow-500 text-black' : 'text-gray-400 hover:text-white'}`}
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
                    ? 'border-yellow-500 bg-yellow-500/10 scale-105'
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
                      <span className="text-yellow-400 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-black hover:opacity-90'
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
          <span className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
            SignLingo
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Languages</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 SignLingo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
