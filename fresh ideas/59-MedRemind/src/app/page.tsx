'use client';
import { useState } from 'react';

export default function MedRemindLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      desc: '3 medications & basic reminders',
      features: ['Up to 3 medications', 'Basic reminders', 'Medication database', 'Simple schedule', 'Mobile alerts'],
      cta: 'Start Free',
      highlight: false,
    },
    {
      name: 'Health',
      monthly: 3.99,
      yearly: 39.99,
      desc: 'Unlimited meds & interactions',
      features: ['Everything in Free', 'Unlimited medications', 'Refill alerts', 'Interaction checker', 'Smart adaptive reminders', 'Email support'],
      cta: 'Upgrade to Health',
      highlight: true,
    },
    {
      name: 'Family',
      monthly: 7.99,
      yearly: 79.99,
      desc: '8 members & doctor reports',
      features: ['Everything in Health', 'Up to 8 family members', 'Doctor-ready PDF reports', 'Pharmacy connect', 'Caregiver dashboard', 'Priority support'],
      cta: 'Get Family Plan',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Smart Reminders', desc: 'Reminders that adapt to your routine, not just the clock — smart timing that learns your habits.', icon: '⏰' },
    { title: 'Refill Alerts', desc: 'Get notified before you run out of medication so you never miss a dose due to an empty bottle.', icon: '💊' },
    { title: 'Interaction Checker', desc: 'Check for dangerous drug interactions instantly before taking new medications together.', icon: '⚠️' },
    { title: 'Adherence Reports', desc: 'Shareable PDF reports for your doctor showing your medication adherence history.', icon: '📄' },
    { title: 'Family Manager', desc: 'Manage medications for parents, kids, and dependents from a single caregiver dashboard.', icon: '👨‍👩‍👧‍👦' },
    { title: 'Pharmacy Connect', desc: 'Refill prescriptions at your pharmacy with one tap — no more waiting on hold.', icon: '🏪' },
  ];

  const stats = [
    { value: '12M+', label: 'Reminders Sent' },
    { value: '94%', label: 'Adherence Rate' },
    { value: '890K+', label: 'Active Users' },
    { value: '340K+', label: 'Medications in DB' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-red-500/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">MedRemind</div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-red-400 transition">Features</a>
            <a href="#pricing" className="hover:text-red-400 transition">Pricing</a>
            <a href="#stats" className="hover:text-red-400 transition">Stats</a>
          </div>
          <button className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-32 left-1/3 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">💊 Trusted by 890K+ users worldwide</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Never Miss a Dose</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Smart medication reminders with refill tracking, interaction warnings, and adherence reports you can share with your doctor. Health compliance made simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-red-500/25">Add Your First Med</button>
            <button className="border border-red-500/30 text-red-400 px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-red-500/10 transition">See How It Works</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 border-y border-red-500/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-500 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Complete <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Medication Manager</span></h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">From reminders to refills, everything you need to stay on top of your health.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-900/50 border border-red-500/10 rounded-2xl p-6 hover:border-red-500/30 transition group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Health Shouldn&apos;t Be <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Complicated</span></h2>
          <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">Simple plans for individuals and families. Start free, upgrade when ready.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-red-500' : 'bg-gray-700'}`}>
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-red-400 text-xs ml-1">Save 17%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition ${p.highlight ? 'border-red-500 bg-red-500/5 shadow-lg shadow-red-500/10 scale-105' : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'}`}>
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${annual ? p.yearly : p.monthly}</span>
                  <span className="text-gray-500 text-sm">/{annual ? 'year' : 'mo'}</span>
                </div>
                <button className={`w-full py-3 rounded-xl font-semibold text-sm transition ${p.highlight ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-red-500/50'}`}>{p.cta}</button>
                <ul className="mt-6 space-y-3">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400"><span className="text-red-500">✓</span>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Health. <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">On Track.</span></h2>
          <p className="text-gray-400 mb-8">Join 890K+ users who never miss a dose. Start free today.</p>
          <button className="bg-gradient-to-r from-red-500 to-rose-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg shadow-red-500/25">Get Started Free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">MedRemind</div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-red-400 transition">Privacy</a>
            <a href="#" className="hover:text-red-400 transition">Terms</a>
            <a href="#" className="hover:text-red-400 transition">Support</a>
            <a href="#" className="hover:text-red-400 transition">HIPAA</a>
          </div>
          <div className="text-gray-600 text-sm">© 2026 MedRemind. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
