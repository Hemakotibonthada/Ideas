'use client';
import { useState } from 'react';

export default function SkinDocLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      features: ['3 scans per month', 'Basic AI analysis', 'Condition library access', 'Web access only'],
      cta: 'Scan Free',
      highlight: false,
    },
    {
      name: 'Skin+',
      monthly: 5.99,
      yearly: 59.99,
      features: ['Unlimited scans', 'Progress photo tracking', 'Detailed risk assessment', 'Skin diary', 'Push notifications'],
      cta: 'Get Skin+',
      highlight: true,
    },
    {
      name: 'DermPlan',
      monthly: 11.99,
      yearly: 119.99,
      features: ['Derm Connect telehealth', 'Full skin diary & triggers', 'Priority AI analysis', 'Doctor-ready reports', 'All Skin+ features'],
      cta: 'Go DermPlan',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Instant Analysis', desc: 'Snap a photo of any skin concern and get an AI-powered assessment in under 10 seconds.', icon: '📸' },
    { title: 'Condition Library', desc: '200+ skin conditions with HD images, descriptions, and treatment information at your fingertips.', icon: '📚' },
    { title: 'Progress Tracking', desc: 'Photograph the same area over time and watch how your skin changes with visual timelines.', icon: '📈' },
    { title: 'Risk Assessment', desc: 'AI flags concerns that need professional attention — know when to see a dermatologist.', icon: '🔍' },
    { title: 'Skin Diary', desc: 'Log products, diet, stress, and environment to identify your unique skin triggers.', icon: '📓' },
    { title: 'Derm Connect', desc: 'Book a telehealth dermatology appointment directly from your scan results in one tap.', icon: '👨‍⚕️' },
  ];

  const stats = [
    { value: '4.2M', label: 'Scans Completed' },
    { value: '92%', label: 'Accuracy vs Dermatologists' },
    { value: '340K+', label: 'Active Users' },
    { value: '200+', label: 'Conditions Recognized' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔬</span>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">SkinDoc</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Results</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition">
            Scan Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm mb-6">
            Your Skin. Analyzed in Seconds.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">SkinDoc</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Photograph any skin concern and get an AI-powered analysis in under 10 seconds. Track changes over time and know when to see a dermatologist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition text-lg">
              Analyze Your Skin Free
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:bg-gray-900 transition text-lg">
              See Sample Report
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Dermatology-Grade <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">AI in Your Pocket</span>
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">Professional skin analysis without the waiting room.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-pink-500/30 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Clear Pricing for Clearer Skin</h2>
          <p className="text-gray-500 text-center mb-8">Start scanning free. Upgrade for unlimited tracking and telehealth.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-pink-400 text-xs">(Save 17%)</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`p-8 rounded-2xl border ${p.highlight ? 'border-pink-500 bg-gray-900/80 scale-105' : 'border-gray-800 bg-gray-900/40'} transition hover:border-pink-500/50`}>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? p.yearly : p.monthly}</span>
                  <span className="text-gray-500 text-sm">/{annual ? 'year' : 'mo'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-pink-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔬</span>
            <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">SkinDoc</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Medical Disclaimer</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-gray-600 text-sm">© 2026 SkinDoc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
