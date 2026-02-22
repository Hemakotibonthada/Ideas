'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🧠',
    title: 'Behavioral Signal Analysis',
    desc: 'Detects after-hours patterns, meeting overload, PR velocity drops, Slack sentiment shifts — all from tools you already use.',
  },
  {
    icon: '🔮',
    title: '90-Day Attrition Prediction',
    desc: 'ML model trained on 500K+ employee journeys. Predicts who\'s likely to leave and why.',
  },
  {
    icon: '🔒',
    title: 'Privacy-First Architecture',
    desc: 'All signals are anonymized and aggregated. No message content, no keylogging. SOC 2 Type II certified.',
  },
  {
    icon: '📈',
    title: 'Team Health Dashboards',
    desc: 'Department-level heatmaps showing burnout risk, engagement trends, and workload distribution.',
  },
  {
    icon: '💡',
    title: 'AI Action Recommendations',
    desc: 'Get specific, actionable suggestions: adjust workload, suggest PTO, recommend 1:1 topics.',
  },
  {
    icon: '🔗',
    title: 'One-Click Integrations',
    desc: 'Connect Slack, GitHub, Jira, Google Calendar, Microsoft 365. Setup in 10 minutes.',
  },
];

const steps = [
  { step: '01', title: 'Connect Tools', desc: 'Integrate your existing work tools with one-click connectors. No code required.' },
  { step: '02', title: 'Analyze Patterns', desc: 'QuietQuit builds behavioral baselines from anonymized, aggregated signals.' },
  { step: '03', title: 'Predict & Alert', desc: 'Get early warnings about burnout risk with team-level dashboards and AI insights.' },
  { step: '04', title: 'Take Action', desc: 'Follow specific AI-generated recommendations to improve wellbeing and retention.' },
];

const dashboardEmployees = [
  { id: 'EMP-4821', dept: 'Engineering', risk: 87, trend: 'rising', signal: 'After-hours work +40%, PR velocity -55%' },
  { id: 'EMP-1094', dept: 'Product', risk: 72, trend: 'rising', signal: 'Meeting load 32hrs/wk, skip-level declined' },
  { id: 'EMP-7736', dept: 'Design', risk: 61, trend: 'stable', signal: 'PTO balance 18 days unused, weekend logins' },
  { id: 'EMP-3302', dept: 'Engineering', risk: 34, trend: 'falling', signal: 'Healthy patterns, engagement stable' },
  { id: 'EMP-9150', dept: 'Marketing', risk: 19, trend: 'stable', signal: 'Active in channels, balanced workload' },
];

const pricing = [
  {
    name: 'Starter',
    price: '$4',
    unit: '/employee/mo',
    features: ['Up to 100 employees', '3 integrations', 'Weekly reports', 'Team-level insights', 'Email support'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$8',
    unit: '/employee/mo',
    features: ['Up to 1,000 employees', 'All integrations', 'Daily insights', 'Action recommendations', 'Individual risk scores', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: '',
    features: ['Unlimited employees', 'Custom ML models', 'HRIS integration', 'Dedicated CSM', 'SLA & BAA', 'On-premise option'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

function getRiskColor(risk: number) {
  if (risk >= 75) return 'text-red-400';
  if (risk >= 50) return 'text-amber-400';
  return 'text-emerald-400';
}

function getRiskBar(risk: number) {
  if (risk >= 75) return 'bg-red-500';
  if (risk >= 50) return 'bg-amber-500';
  return 'bg-emerald-500';
}

export default function QuietQuitLanding() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedEmployee, setExpandedEmployee] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">🔥 QuietQuit</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#dashboard" className="transition hover:text-white">Demo</a>
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-400 transition hover:text-white">Sign In</button>
            <button className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-sm font-medium text-black transition hover:shadow-lg hover:shadow-amber-500/25">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300">
            🛡️ SOC 2 Type II Certified · Privacy-First · No Message Content
          </div>
          <h1 className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-7xl">
            See Burnout Before<br />It Happens
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            No surveys. No guesswork. QuietQuit analyzes anonymous work patterns from your existing tools to predict employee attrition 90 days before it happens.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-sm font-semibold text-black transition hover:shadow-xl hover:shadow-amber-500/25">
              Request a Demo →
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium transition hover:bg-white/10">
              <span className="text-lg">▶</span> Watch 2-Min Overview
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            ['89%', 'Prediction accuracy'],
            ['47%', 'Reduction in attrition'],
            ['12,000+', 'Employees monitored'],
            ['34 day', 'Avg early warning'],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col items-center gap-1 px-6 py-8">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-3xl font-bold text-transparent">{value}</span>
              <span className="text-sm text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Predict attrition. Protect your people.</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              QuietQuit spots the behavioral signals that predict burnout — without invasive monitoring.
            </p>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Demo */}
      <section id="dashboard" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Live Risk Dashboard</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Click any employee row to see detailed behavioral signals. All data shown is anonymized.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gray-950">
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-500">QuietQuit Dashboard — Engineering Team</span>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">● Live</span>
            </div>
            <div className="divide-y divide-white/5">
              <div className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                <span className="col-span-2">Employee</span>
                <span className="col-span-2">Department</span>
                <span className="col-span-2">Risk Score</span>
                <span className="col-span-2">Trend</span>
                <span className="col-span-4">Top Signal</span>
              </div>
              {dashboardEmployees.map((emp) => (
                <div key={emp.id}>
                  <div
                    className={`grid cursor-pointer grid-cols-12 items-center gap-4 px-6 py-4 transition-colors ${
                      expandedEmployee === emp.id ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'
                    }`}
                    onClick={() => setExpandedEmployee(expandedEmployee === emp.id ? null : emp.id)}
                  >
                    <span className="col-span-2 font-mono text-sm">{emp.id}</span>
                    <span className="col-span-2 text-sm text-gray-400">{emp.dept}</span>
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                        <div className={`h-full rounded-full ${getRiskBar(emp.risk)}`} style={{ width: `${emp.risk}%` }} />
                      </div>
                      <span className={`text-sm font-bold ${getRiskColor(emp.risk)}`}>{emp.risk}</span>
                    </div>
                    <span className="col-span-2 text-sm">
                      {emp.trend === 'rising' && <span className="text-red-400">↑ Rising</span>}
                      {emp.trend === 'falling' && <span className="text-emerald-400">↓ Falling</span>}
                      {emp.trend === 'stable' && <span className="text-gray-400">→ Stable</span>}
                    </span>
                    <span className="col-span-4 text-xs text-gray-500">{emp.signal}</span>
                  </div>
                  {expandedEmployee === emp.id && (
                    <div className="border-t border-white/5 bg-white/[0.02] px-6 py-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-xl border border-white/5 bg-black/50 p-4">
                          <div className="text-xs text-gray-500">Work Hours Trend</div>
                          <div className="mt-2 flex items-end gap-1">
                            {[40, 44, 48, 52, 55, 58].map((h, i) => (
                              <div
                                key={i}
                                className={`w-6 rounded-t ${h > 45 ? 'bg-amber-500/60' : 'bg-emerald-500/60'}`}
                                style={{ height: `${(h / 60) * 60}px` }}
                              />
                            ))}
                          </div>
                          <div className="mt-2 text-xs text-gray-600">Last 6 weeks</div>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-black/50 p-4">
                          <div className="text-xs text-gray-500">Meeting Load</div>
                          <div className="mt-2 text-2xl font-bold text-amber-400">28hrs<span className="text-sm text-gray-500">/week</span></div>
                          <div className="mt-1 text-xs text-red-400">+8hrs vs team avg</div>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-black/50 p-4">
                          <div className="text-xs text-gray-500">AI Recommendation</div>
                          <div className="mt-2 text-sm text-gray-300">
                            {emp.risk >= 75 ? 'Reduce meeting load, suggest PTO, schedule 1:1' : emp.risk >= 50 ? 'Monitor workload, check in next week' : 'No action needed — healthy signals'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">From connection to action in four simple steps.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                  activeStep === i ? 'border-amber-500/50 bg-amber-500/5 shadow-lg shadow-amber-500/5' : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
                onClick={() => setActiveStep(i)}
              >
                <span className="mb-4 block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-4xl font-black text-transparent">
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
            <h2 className="text-3xl font-bold md:text-4xl">Invest in retention, not replacement</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              The average cost to replace an employee is $50K+. QuietQuit pays for itself with one prevented departure.
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
                Annual <span className="text-amber-400">-20%</span>
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
                      ? 'border-amber-500/50 bg-gradient-to-b from-amber-500/10 to-transparent shadow-lg shadow-amber-500/10'
                      : 'border-white/5 bg-white/[0.02]'
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-0.5 text-xs font-medium text-black">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{displayPrice}</span>
                    <span className="text-gray-500">{plan.unit}</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="text-amber-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full rounded-lg py-3 text-sm font-medium transition ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:shadow-lg hover:shadow-amber-500/25'
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

      {/* Trust */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-6 text-sm text-gray-400">
            <span className="rounded-full border border-white/10 px-3 py-1">🔒 SOC 2 Type II</span>
            <span className="rounded-full border border-white/10 px-3 py-1">🇪🇺 GDPR Compliant</span>
            <span className="rounded-full border border-white/10 px-3 py-1">🏥 HIPAA Ready</span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">Your best people are thinking about leaving</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            QuietQuit gives you the lead time to act. See the signals. Make the change. Keep your team.
          </p>
          <button className="mt-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-sm font-semibold text-black transition hover:shadow-xl hover:shadow-amber-500/25">
            Book a Demo — See Your Risk Score →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text font-bold text-transparent">🔥 QuietQuit</span>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Security</a>
            <a href="#" className="transition hover:text-white">Compliance</a>
            <a href="#" className="transition hover:text-white">Blog</a>
            <a href="#" className="transition hover:text-white">Careers</a>
          </div>
          <span className="text-xs text-gray-600">© 2026 QuietQuit. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
