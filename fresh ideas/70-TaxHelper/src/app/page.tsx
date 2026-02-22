'use client';
import { useState } from 'react';

export default function TaxHelperLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Basic deduction tips', 'Tax calendar reminders', 'Standard deduction check', 'Filing status guidance'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Finder',
      price: annual ? '$4.99' : '$5.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Full deduction scanner', 'Receipt vault (unlimited)', 'Real-time refund estimate', 'Category auto-sort', 'Multi-year tracking'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'CPA',
      price: annual ? '$9.99' : '$11.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Everything in Finder', 'Audit shield & risk score', 'Compare filing options', 'Expert CPA review', 'Tax loss harvesting', 'Priority support'],
      cta: 'Go CPA',
      highlight: false,
    },
  ];

  const features = [
    { title: 'Deduction Scanner', desc: 'AI scans your financial data and finds deductions you didn\'t know existed. Home office, mileage, education, and hundreds more.', icon: '🔍' },
    { title: 'Receipt Vault', desc: 'Photograph and store receipts all year long, organized by category. Never scramble at tax time again.', icon: '🧾' },
    { title: 'Real-Time Estimate', desc: 'See your estimated refund update live as you add deductions. Know exactly where you stand at any moment.', icon: '💰' },
    { title: 'Audit Shield', desc: 'Know your audit risk score and get actionable steps to reduce it. File with confidence every year.', icon: '🛡️' },
    { title: 'Tax Calendar', desc: 'Never miss estimated tax deadlines, filing dates, or extension windows. Automated reminders for everything.', icon: '📅' },
    { title: 'Compare Filing', desc: 'Compare filing single vs. joint, standard vs. itemized in seconds. See exactly which option saves you the most.', icon: '⚖️' },
  ];

  const stats = [
    { value: '$890M', label: 'In deductions found' },
    { value: '$1,200', label: 'Avg per user' },
    { value: '340K+', label: 'Returns optimized' },
    { value: '99.2%', label: 'IRS acceptance rate' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">TaxHelper</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#stats" className="hover:text-white transition">Results</a>
        </div>
        <button className="bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition text-black">Find My Deductions</button>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-green-500/30 text-green-400 text-xs mb-6">💵 AI-Powered Tax Optimization</div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Find Every Dollar{' '}
          <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">You&apos;re Owed</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          AI scans your financial data and identifies deductions you&apos;re missing. Average user finds $1,200 in overlooked deductions. Stop leaving money on the table.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-black">Scan My Deductions</button>
          <button className="border border-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition">How It Works</button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Every Deduction, Every Dollar</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">From scanning to filing, TaxHelper makes sure you never miss a deduction or deadline again.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Plans That Pay for Themselves</h2>
        <p className="text-gray-400 text-center mb-8">Save up to 17% with annual billing.</p>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-green-500' : 'bg-gray-700'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 border ${p.highlight ? 'border-green-500 bg-green-500/5' : 'border-gray-800 bg-gray-900/40'}`}>
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-gray-500 text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((ft) => (
                  <li key={ft} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-green-400">✓</span>{ft}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-black hover:opacity-90' : 'border border-gray-700 hover:border-gray-500'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">TaxHelper</div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Security</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <div className="text-sm text-gray-600">© 2026 TaxHelper. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}