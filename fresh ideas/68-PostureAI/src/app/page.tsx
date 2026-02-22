'use client';
import { useState } from 'react';

export default function PostureAILanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Basic posture monitoring', '3 alerts per hour', 'Daily posture summary', 'Single device'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Spine',
      price: annual ? '$3.99' : '$4.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Unlimited real-time alerts', 'Exercise library', 'Posture score tracking', 'Break reminders', 'Multi-device sync'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Ergo',
      price: annual ? '$6.99' : '$8.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Everything in Spine', 'Desk setup guide', 'Weekly progress reports', 'Team management', 'API integrations', 'Priority support'],
      cta: 'Go Ergo',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Webcam Monitor', desc: 'AI detects posture issues in real-time via your camera. No wearable required — just your laptop webcam.', icon: '📷' },
    { title: 'Instant Alerts', desc: 'Gentle nudge the moment you start slouching, leaning forward, or rounding your shoulders.', icon: '🔔' },
    { title: 'Posture Score', desc: 'Daily score tracking your overall posture quality from 0 to 100. Watch yourself improve week over week.', icon: '📈' },
    { title: 'Exercise Library', desc: 'Targeted corrective exercises for your specific posture issues. 5-minute routines that actually work.', icon: '🏋️' },
    { title: 'Desk Setup Guide', desc: 'Personalized ergonomic setup recommendations based on your height, desk, and monitor position.', icon: '🖥️' },
    { title: 'Progress Reports', desc: 'Weekly reports showing improvement over time with detailed metrics and actionable insights.', icon: '📊' },
  ];

  const stats = [
    { value: '67%', label: 'Posture improvement' },
    { value: '890K+', label: 'Corrections daily' },
    { value: '340K+', label: 'Active users' },
    { value: '45%', label: 'Less back pain reported' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">PostureAI</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#science" className="hover:text-white transition">Science</a>
        </div>
        <button className="bg-gradient-to-r from-violet-500 to-purple-500 px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">Try Free</button>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-violet-500/30 text-violet-400 text-xs mb-6">🧘 AI-Powered Posture Coach</div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Sit Better.{' '}
          <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Feel Better.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Your webcam becomes a posture coach. Real-time alerts when you slouch, forward head, or round shoulders. Corrective exercises delivered daily.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-violet-500 to-purple-500 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">Start Monitoring Free</button>
          <button className="border border-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition">Watch Demo</button>
        </div>
      </section>

      {/* Stats */}
      <section id="science" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Personal Posture Coach</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">From real-time detection to corrective exercises, PostureAI covers every aspect of spinal health.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Invest in Your Spine</h2>
        <p className="text-gray-400 text-center mb-8">Save up to 22% with annual billing.</p>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-violet-500' : 'bg-gray-700'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 border ${p.highlight ? 'border-violet-500 bg-violet-500/5' : 'border-gray-800 bg-gray-900/40'}`}>
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-gray-500 text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((ft) => (
                  <li key={ft} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-violet-400">✓</span>{ft}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90' : 'border border-gray-700 hover:border-gray-500'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">PostureAI</div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Research</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <div className="text-sm text-gray-600">© 2026 PostureAI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}