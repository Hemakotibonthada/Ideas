'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🌐',
    title: 'Self-Service Portal',
    desc: 'Branded portal where data subjects submit requests. Identity verification built-in with multi-factor authentication.',
  },
  {
    icon: '🔍',
    title: 'Auto-Discovery Engine',
    desc: 'Searches across databases, SaaS apps (Salesforce, HubSpot, Zendesk), file storage, and analytics platforms simultaneously.',
  },
  {
    icon: '📦',
    title: 'Smart Data Packaging',
    desc: 'Auto-compiles discovered data into downloadable, redacted packages. Supports PDF, JSON, CSV formats.',
  },
  {
    icon: '🗑️',
    title: 'Right to Delete Orchestration',
    desc: 'Cascade deletion across all systems with confirmation receipts and audit trails. No data left behind.',
  },
  {
    icon: '⏰',
    title: 'Deadline Tracking',
    desc: 'Auto-calculates regulatory deadlines (30 days GDPR, 45 days CCPA). Escalation alerts for at-risk requests.',
  },
  {
    icon: '📋',
    title: 'Compliance Audit Trail',
    desc: 'Every action logged with timestamps, user attribution, and regulatory citations. Regulator-ready exports.',
  },
];

const steps = [
  { step: '01', title: 'Connect Systems', desc: 'Link your databases, SaaS apps, and storage. 50+ pre-built connectors.' },
  { step: '02', title: 'Receive Requests', desc: 'Data subjects submit via your branded portal. Identity auto-verified.' },
  { step: '03', title: 'Auto-Discover', desc: 'Engine searches all connected systems in parallel. Finds every record.' },
  { step: '04', title: 'Deliver & Delete', desc: 'Package data for access requests or orchestrate deletion across all systems.' },
];

type RequestStage = 'received' | 'verified' | 'searched' | 'found' | 'ready';

const requestFlow: { stage: RequestStage; label: string; detail: string; time: string }[] = [
  { stage: 'received', label: 'Received', detail: 'DSAR submitted via portal', time: '0:00' },
  { stage: 'verified', label: 'Identity Verified', detail: 'MFA + email confirmation', time: '0:02' },
  { stage: 'searched', label: '12 Systems Searched', detail: 'Salesforce, HubSpot, Postgres, S3, Zendesk...', time: '0:45' },
  { stage: 'found', label: '847 Records Found', detail: 'PII identified and categorized', time: '1:12' },
  { stage: 'ready', label: 'Package Ready', detail: 'Redacted PDF + JSON download ready', time: '1:38' },
];

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    period: '/mo',
    features: ['50 DSARs/mo', '10 connected systems', 'Email support', 'Basic audit trail', 'PDF exports'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$899',
    period: '/mo',
    features: ['500 DSARs/mo', '50 connected systems', 'Deletion orchestration', 'Priority support', 'Custom branding', 'API access'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited DSARs', 'Custom integrations', 'DPO advisory', 'On-premise option', 'SLA guarantee', 'Dedicated CSM'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const regulations = [
  { name: 'GDPR', region: '🇪🇺 EU', deadline: '30 days', color: 'from-blue-500 to-cyan-500' },
  { name: 'CCPA', region: '🇺🇸 California', deadline: '45 days', color: 'from-cyan-500 to-teal-500' },
  { name: 'CPRA', region: '🇺🇸 California', deadline: '45 days', color: 'from-teal-500 to-emerald-500' },
  { name: 'LGPD', region: '🇧🇷 Brazil', deadline: '15 days', color: 'from-emerald-500 to-green-500' },
];

export default function RightOfWayLanding() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeFlowStage, setActiveFlowStage] = useState(4);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'How quickly can we get set up?', a: 'Most customers connect their first 10 systems and process a test DSAR within 2 hours. Full deployment typically takes 1-2 days.' },
    { q: 'Is the data ever stored on your servers?', a: 'Personal data flows through our system but is never permanently stored. We keep only metadata and audit logs. Data packages are encrypted and stored temporarily for download.' },
    { q: 'Which regulations do you support?', a: 'GDPR, CCPA, CPRA, LGPD, POPIA, PDPA, and more. Our deadline engine auto-calculates the correct response timeline based on the applicable regulation.' },
    { q: 'Can we handle deletion requests too?', a: 'Yes. Our Right to Delete orchestration cascades deletion across all connected systems, collects confirmation receipts, and generates a complete audit trail.' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">⚖️ RightOfWay</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#demo" className="transition hover:text-white">Demo</a>
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-400 transition hover:text-white">Sign In</button>
            <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-medium transition hover:shadow-lg hover:shadow-cyan-500/25">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent" />
        <div className="pointer-events-none absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300">
            <span className="flex h-2 w-2 items-center justify-center rounded-full bg-cyan-400">
              <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
            </span>
            GDPR · CCPA · CPRA · LGPD Compliant
          </div>
          <h1 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-7xl">
            DSAR Compliance<br />on Autopilot
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Citizens request their data. You auto-fulfill it. RightOfWay finds personal data across 50+ systems and delivers compliant response packages in hours — not weeks.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-sm font-semibold transition hover:shadow-xl hover:shadow-cyan-500/25">
              Start Free Trial →
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium transition hover:bg-white/10">
              See It In Action
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            ['$1,400', 'Avg manual DSAR cost'],
            ['94%', 'Automation rate'],
            ['4 hrs', 'Avg fulfillment time'],
            ['50+', 'Supported systems'],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col items-center gap-1 px-6 py-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">{value}</span>
              <span className="text-sm text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Regulation Badges */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500">Built for global privacy regulations</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {regulations.map((reg) => (
              <div key={reg.name} className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center transition hover:border-cyan-500/30">
                <div className={`bg-gradient-to-r ${reg.color} bg-clip-text text-2xl font-bold text-transparent`}>{reg.name}</div>
                <div className="mt-1 text-sm text-gray-400">{reg.region}</div>
                <div className="mt-2 text-xs text-gray-600">{reg.deadline} deadline</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">End-to-end DSAR automation</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">From request intake to compliant delivery — fully automated.</p>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive DSAR Flow Demo */}
      <section id="demo" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Watch a DSAR complete in real-time</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">Click each stage to see the request progress. What used to take 30 days now takes under 2 hours.</p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/50">
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">DSAR-2026-00847</span>
                <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-400">Access Request</span>
              </div>
              <span className="text-xs text-gray-600">john.d****@email.com</span>
            </div>
            <div className="p-6">
              {/* Progress bar */}
              <div className="relative mb-8">
                <div className="absolute left-0 top-4 h-0.5 w-full bg-white/10" />
                <div
                  className="absolute left-0 top-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                  style={{ width: `${(activeFlowStage / (requestFlow.length - 1)) * 100}%` }}
                />
                <div className="relative flex justify-between">
                  {requestFlow.map((rf, i) => (
                    <button
                      key={rf.stage}
                      className="flex flex-col items-center"
                      onClick={() => setActiveFlowStage(i)}
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-all ${
                          i <= activeFlowStage
                            ? 'border-cyan-500 bg-cyan-500 text-white'
                            : 'border-white/20 bg-gray-950 text-gray-600'
                        }`}
                      >
                        {i <= activeFlowStage ? '✓' : i + 1}
                      </div>
                      <span className={`mt-3 text-xs font-medium ${i <= activeFlowStage ? 'text-cyan-400' : 'text-gray-600'}`}>
                        {rf.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active stage detail */}
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{requestFlow[activeFlowStage].label}</h4>
                    <p className="mt-1 text-sm text-gray-400">{requestFlow[activeFlowStage].detail}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-2xl font-bold text-cyan-400">{requestFlow[activeFlowStage].time}</div>
                    <div className="text-xs text-gray-600">elapsed</div>
                  </div>
                </div>
                {activeFlowStage === 4 && (
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-3 text-center">
                      <div className="text-lg font-bold text-emerald-400">847</div>
                      <div className="text-xs text-gray-500">Records found</div>
                    </div>
                    <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-3 text-center">
                      <div className="text-lg font-bold text-cyan-400">12</div>
                      <div className="text-xs text-gray-500">Systems searched</div>
                    </div>
                    <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-3 text-center">
                      <div className="text-lg font-bold text-blue-400">1:38</div>
                      <div className="text-xs text-gray-500">Total time</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-gray-600">
            30-day manual process → 4-hour automated fulfillment
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">Four steps from manual chaos to automated compliance.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                  activeStep === i
                    ? 'border-cyan-500/50 bg-cyan-500/5 shadow-lg shadow-cyan-500/5'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
                onClick={() => setActiveStep(i)}
              >
                <span className="mb-4 block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-4xl font-black text-transparent">
                  {s.step}
                </span>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Stop overpaying for DSAR compliance</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Each manual DSAR costs ~$1,400. RightOfWay automates 94% of the work.
            </p>
            <div className="mt-8 inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
              <button
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${billingCycle === 'monthly' ? 'bg-white/10 text-white' : 'text-gray-400'}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${billingCycle === 'annual' ? 'bg-white/10 text-white' : 'text-gray-400'}`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual <span className="text-cyan-400">-20%</span>
              </button>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => {
              const monthlyPrice = parseInt(plan.price.replace('$', '')) || 0;
              const displayPrice = billingCycle === 'annual' && monthlyPrice > 0 ? `$${Math.round(monthlyPrice * 0.8)}` : plan.price;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-8 transition-all ${
                    plan.highlight
                      ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-lg shadow-cyan-500/10'
                      : 'border-white/5 bg-white/[0.02]'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-0.5 text-xs font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{displayPrice}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="text-cyan-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full rounded-lg py-3 text-sm font-medium transition ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02]">
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium transition hover:text-cyan-400"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className={`ml-4 text-gray-500 transition-transform ${expandedFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {expandedFaq === i && (
                  <div className="border-t border-white/5 px-6 py-4 text-sm leading-relaxed text-gray-400">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent p-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Your next DSAR deadline is ticking</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Automate compliance. Reduce risk. Cut costs by 94%. Start your free trial today.
          </p>
          <button className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-sm font-semibold transition hover:shadow-xl hover:shadow-cyan-500/25">
            Start Free Trial — No Credit Card →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-bold text-transparent">⚖️ RightOfWay</span>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Security</a>
            <a href="#" className="transition hover:text-white">Compliance</a>
            <a href="#" className="transition hover:text-white">Documentation</a>
            <a href="#" className="transition hover:text-white">Status</a>
          </div>
          <span className="text-xs text-gray-600">© 2026 RightOfWay. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
