'use client';

import { useState } from 'react';

const features = [
  {
    icon: '📄',
    title: 'Upload & Extract',
    desc: 'Upload PDF/DOCX contracts. AI extracts and classifies every clause: indemnification, liability cap, IP, termination, and more.',
  },
  {
    icon: '🎯',
    title: 'Playbook Rules Engine',
    desc: 'Define your company\'s positions: "Never accept unlimited liability", "Require 30-day cure period". AI enforces automatically.',
  },
  {
    icon: '✍️',
    title: 'Auto-Redline',
    desc: 'Generates tracked-changes document with suggested edits that match YOUR negotiation style, not generic legalese.',
  },
  {
    icon: '📚',
    title: 'Precedent Learning',
    desc: 'Learns from your past negotiations. If you always strike auto-renewal clauses, it flags them automatically.',
  },
  {
    icon: '⚖️',
    title: 'Risk Scoring',
    desc: 'Every clause gets a risk score: ACCEPTABLE / RISKY / UNACCEPTABLE with reasoning the attorney can review.',
  },
  {
    icon: '🔄',
    title: 'Review Workflows',
    desc: 'Assign contracts to reviewers, track review status, approve/reject redlines, export final version.',
  },
];

const stats = [
  { value: '74%', label: 'Faster Contract Review' },
  { value: '3,200+', label: 'Contracts Analyzed/Day' },
  { value: '12', label: 'Clause Types' },
  { value: '96%', label: 'Accuracy vs Senior Counsel' },
];

const plans = [
  {
    name: 'Solo',
    price: '$149',
    per: '/mo',
    features: ['50 contracts/mo', '1 playbook', '3 users', 'Basic clause types', 'Email support'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Team',
    price: '$499',
    per: '/mo',
    features: ['300 contracts/mo', 'Unlimited playbooks', '15 users', 'Precedent learning', 'API access'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    features: ['Unlimited contracts', 'Custom clause training', 'Legal ops integrations', 'SSO & SCIM', 'Dedicated success manager'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const riskLevels: Record<string, { color: string; bg: string; border: string }> = {
  ACCEPTABLE: { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  RISKY: { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
  UNACCEPTABLE: { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
};

export default function ClauseHoundLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [expandedClause, setExpandedClause] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800/60 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-sm font-bold">C</div>
            <span className="text-xl font-bold tracking-tight">ClauseHound</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Live Demo</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Docs</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">Log In</button>
            <button className="rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-2 text-sm font-semibold shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all hover:scale-105">
              Get Started
            </button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black px-6 py-4 space-y-3 text-sm">
            <a href="#features" className="block text-gray-400 hover:text-white">Features</a>
            <a href="#demo" className="block text-gray-400 hover:text-white">Live Demo</a>
            <a href="#pricing" className="block text-gray-400 hover:text-white">Pricing</a>
            <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 py-2 text-sm font-semibold">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-600/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs text-rose-400 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
            Trusted by 400+ legal teams worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Your Legal Playbook,{' '}
            <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Automated</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stop reviewing contracts from scratch. ClauseHound learns YOUR company&apos;s negotiation style and auto-redlines risky clauses based on your precedent.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-3.5 text-sm font-semibold shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 transition-all hover:scale-105">
              Start Free Trial
            </button>
            <button className="rounded-xl border border-gray-700 bg-gray-900 px-8 py-3.5 text-sm font-semibold text-gray-300 hover:bg-gray-800 transition-all">
              Book a Demo →
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800/60 bg-gray-950/50">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800/60">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">AI-powered contract intelligence</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">From upload to redline in minutes, not hours. Six capabilities that transform your legal workflow.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-800 bg-gray-950/80 p-8 hover:border-rose-500/40 hover:bg-gray-900/80 transition-all duration-300">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-rose-400 transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clause Analysis Demo */}
      <section id="demo" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Watch AI analyze a clause</h2>
          <p className="mt-4 text-gray-400">Real indemnification clause from a vendor agreement, analyzed in real time.</p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gray-950/80 overflow-hidden">
          {/* Document header */}
          <div className="flex items-center justify-between border-b border-gray-800 px-6 py-4 bg-gray-900/50">
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium">📄 Vendor_Agreement_v3.docx</div>
              <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 text-xs text-amber-400 font-medium">3 Risky Clauses</span>
            </div>
            <div className="text-xs text-gray-500">Page 4, Section 8.1</div>
          </div>

          {/* Clause content */}
          <div className="p-6">
            <button
              onClick={() => setExpandedClause(!expandedClause)}
              className="w-full text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ${riskLevels.RISKY.bg} ${riskLevels.RISKY.border} ${riskLevels.RISKY.color} border`}>
                    ⚠ RISKY
                  </span>
                  <span className="text-sm font-medium">Section 8.1 — Indemnification</span>
                </div>
                <svg className={`w-5 h-5 text-gray-500 transition-transform ${expandedClause ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </button>

            {expandedClause && (
              <div className="mt-6 space-y-6">
                {/* Original */}
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                  <div className="text-xs text-red-400 font-semibold uppercase tracking-wider mb-3">Original Clause</div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    &quot;Vendor shall <span className="bg-red-500/20 text-red-300 px-1 rounded">indemnify, defend, and hold harmless</span> the Client and its affiliates from and against{' '}
                    <span className="bg-red-500/20 text-red-300 px-1 rounded">any and all claims, damages, losses, liabilities, and expenses (including attorneys&apos; fees) without limitation</span>{' '}
                    arising out of or related to Vendor&apos;s performance under this Agreement.&quot;
                  </p>
                </div>

                {/* AI Analysis */}
                <div className="rounded-xl border border-gray-700 bg-gray-900/80 p-5">
                  <div className="text-xs text-rose-400 font-semibold uppercase tracking-wider mb-3">🧠 AI Analysis</div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <span><strong className="text-gray-200">Unlimited liability</strong> — No cap on indemnification amount. Playbook requires a cap tied to contract value.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <span><strong className="text-gray-200">Overly broad scope</strong> — &quot;any and all claims&quot; is too expansive. Should be limited to third-party claims arising from negligence or breach.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">!</span>
                      <span><strong className="text-gray-200">Missing carve-outs</strong> — No exception for Client&apos;s own negligence or willful misconduct.</span>
                    </li>
                  </ul>
                </div>

                {/* Suggested redline */}
                <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                  <div className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-3">✍️ Suggested Redline</div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    &quot;Vendor shall indemnify, defend, and hold harmless the Client and its affiliates from and against{' '}
                    <span className="bg-green-500/20 text-green-300 px-1 rounded">third-party claims, damages, and losses directly arising from Vendor&apos;s negligence or material breach</span>{' '}
                    under this Agreement,{' '}
                    <span className="bg-green-500/20 text-green-300 px-1 rounded">provided that Vendor&apos;s total liability under this section shall not exceed the aggregate fees paid in the preceding 12 months</span>.
                    <span className="bg-green-500/20 text-green-300 px-1 rounded"> This indemnification shall not apply to the extent that a claim arises from Client&apos;s own negligence or willful misconduct.</span>&quot;
                  </p>
                </div>

                {/* Precedent match */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  Based on 47 similar clauses negotiated in the last 12 months. You modified this type 94% of the time.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing for every legal team</h2>
          <p className="mt-4 text-gray-400">From solo practitioners to enterprise legal departments.</p>
          <div className="mt-6 inline-flex items-center rounded-full bg-gray-900 p-1 border border-gray-800">
            <button onClick={() => setBillingCycle('monthly')} className={`rounded-full px-4 py-1.5 text-sm transition ${billingCycle === 'monthly' ? 'bg-gray-800 text-white' : 'text-gray-400'}`}>Monthly</button>
            <button onClick={() => setBillingCycle('annual')} className={`rounded-full px-4 py-1.5 text-sm transition ${billingCycle === 'annual' ? 'bg-gray-800 text-white' : 'text-gray-400'}`}>Annual (save 20%)</button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-8 flex flex-col ${p.highlight ? 'border-rose-500/50 bg-gradient-to-b from-rose-500/10 to-transparent shadow-xl shadow-rose-500/10' : 'border-gray-800 bg-gray-950/80'}`}>
              {p.highlight && <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-4">Most Popular</div>}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-sm text-gray-400">{p.per}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all ${p.highlight ? 'bg-gradient-to-r from-rose-500 to-pink-600 shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-pink-600/5 to-transparent p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold">Never review a contract from scratch again</h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">Your playbook, your precedent, enforced automatically on every contract.</p>
          <button className="mt-8 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-10 py-4 text-sm font-semibold shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 transition-all hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/60 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-xs font-bold">C</div>
                <span className="font-bold">ClauseHound</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">AI contract redlining that learns your style.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">SOC 2 Report</a></li>
                <li><a href="#" className="hover:text-white transition">DPA</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">© 2026 ClauseHound Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-400 transition text-sm">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition text-sm">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition text-sm">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
