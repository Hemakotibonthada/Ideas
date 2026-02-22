'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🔀',
    title: 'Smart Rail Selection',
    desc: 'AI picks the cheapest, fastest rail for each payment. Send via ACH domestically, SWIFT internationally, crypto for instant settlement.',
  },
  {
    icon: '🔄',
    title: 'Auto-Reconciliation',
    desc: 'Match incoming payments to invoices automatically with 98.5% accuracy. Handle partial payments, overpayments, and FX differences.',
  },
  {
    icon: '🪙',
    title: 'Crypto-Native',
    desc: 'Accept and send USDC, ETH, BTC on Ethereum, Polygon, Solana, Base. Auto-convert to fiat if desired.',
  },
  {
    icon: '📄',
    title: 'Invoice-to-Pay',
    desc: 'Generate payment links from invoices. Payers choose their preferred rail. You get settled in your preferred currency.',
  },
  {
    icon: '🌍',
    title: 'Multi-Currency',
    desc: 'Hold, send, and receive in 25+ currencies. Real-time FX rates with transparent markup.',
  },
  {
    icon: '🔗',
    title: 'ERP Integration',
    desc: 'Sync with QuickBooks, Xero, NetSuite, SAP. Auto-post journal entries and bank reconciliation.',
  },
];

const stats = [
  { value: '$2.8B', label: 'Processed' },
  { value: '38', label: 'Countries' },
  { value: '8', label: 'Payment Rails' },
  { value: '99.97%', label: 'Uptime' },
];

const plans = [
  {
    name: 'Starter',
    price: '0.5%',
    per: 'per transaction',
    features: ['Up to $100K/mo volume', 'ACH + Wire', 'Basic reconciliation', 'Email support', '2 users'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '0.3%',
    per: 'per transaction',
    features: ['Up to $1M/mo volume', 'All rails incl. crypto', 'Auto-reconciliation', 'API access', 'Unlimited users'],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    features: ['Unlimited volume', 'FX hedging', 'SWIFT gpi', 'Dedicated account manager', 'Custom SLA'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const paymentSteps = [
  { step: 1, label: 'Invoice Created', detail: 'Invoice #INV-7742 for $25,000', icon: '📄', color: 'from-green-500 to-emerald-600' },
  { step: 2, label: 'Payer Selects Rail', detail: 'ACH selected (cheapest option)', icon: '🔀', color: 'from-green-500 to-emerald-600' },
  { step: 3, label: 'MeshPay Routes', detail: 'Funds cleared in 1 business day', icon: '⚡', color: 'from-green-500 to-emerald-600' },
  { step: 4, label: 'Auto-Reconciled', detail: 'Matched to INV-7742 automatically', icon: '✅', color: 'from-green-500 to-emerald-600' },
  { step: 5, label: 'Posted to ERP', detail: 'Journal entry in QuickBooks', icon: '📊', color: 'from-green-500 to-emerald-600' },
];

const rails = [
  { name: 'ACH', speed: '1-2 days', cost: '$0.50', region: 'US Domestic' },
  { name: 'Wire', speed: 'Same day', cost: '$15', region: 'US Domestic' },
  { name: 'SWIFT', speed: '2-5 days', cost: '$25-45', region: 'International' },
  { name: 'SEPA', speed: '1 day', cost: '€0.20', region: 'Europe' },
  { name: 'USDC', speed: 'Instant', cost: '$0.01', region: 'Global' },
  { name: 'BTC', speed: '10-60 min', cost: 'Variable', region: 'Global' },
];

export default function MeshPayLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [activeStep, setActiveStep] = useState(0);
  const [showAllRails, setShowAllRails] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800/60 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-sm font-bold">M</div>
            <span className="text-xl font-bold tracking-tight">MeshPay</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#rails" className="hover:text-white transition">Payment Rails</a>
            <a href="#flow" className="hover:text-white transition">How It Works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">Log In</button>
            <button className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 text-sm font-semibold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all hover:scale-105">
              Get API Keys
            </button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 space-y-3 text-sm">
            <a href="#features" className="block text-gray-400 hover:text-white">Features</a>
            <a href="#rails" className="block text-gray-400 hover:text-white">Payment Rails</a>
            <a href="#flow" className="block text-gray-400 hover:text-white">How It Works</a>
            <a href="#pricing" className="block text-gray-400 hover:text-white">Pricing</a>
            <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 py-2 text-sm font-semibold">Get API Keys</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs text-green-400 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            $2.8B+ processed across 38 countries
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            One API.{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Every Payment Rail.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            B2B payments are broken. MeshPay unifies ACH, wire, SWIFT, crypto, and BNPL into a single API with automatic reconciliation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3.5 text-sm font-semibold shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all hover:scale-105">
              Get API Keys — Free
            </button>
            <button className="rounded-xl border border-gray-700 bg-gray-900 px-8 py-3.5 text-sm font-semibold text-gray-300 hover:bg-gray-800 transition-all">
              Read the Docs →
            </button>
          </div>

          {/* Code snippet */}
          <div className="mt-16 mx-auto max-w-2xl rounded-2xl border border-gray-800 bg-gray-900/80 overflow-hidden text-left">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-gray-500 ml-2">payment.ts</span>
            </div>
            <pre className="p-5 text-sm font-mono overflow-x-auto">
              <code>
                <span className="text-purple-400">const</span> <span className="text-blue-300">payment</span> = <span className="text-purple-400">await</span> <span className="text-green-400">meshpay</span>.<span className="text-yellow-300">send</span>({'{'}
                {'\n'}  <span className="text-gray-400">amount:</span> <span className="text-orange-300">25000</span>,
                {'\n'}  <span className="text-gray-400">currency:</span> <span className="text-green-300">&quot;USD&quot;</span>,
                {'\n'}  <span className="text-gray-400">to:</span> <span className="text-green-300">&quot;acme@pay.meshpay.com&quot;</span>,
                {'\n'}  <span className="text-gray-400">rail:</span> <span className="text-green-300">&quot;auto&quot;</span>, <span className="text-gray-600">// AI picks best rail</span>
                {'\n'}  <span className="text-gray-400">reconcile:</span> <span className="text-orange-300">true</span>,
                {'\n'}{'}'});
                {'\n'}
                {'\n'}<span className="text-gray-600">// payment.rail → &quot;ach&quot;</span>
                {'\n'}<span className="text-gray-600">// payment.fee → &quot;$0.50&quot;</span>
                {'\n'}<span className="text-gray-600">// payment.eta → &quot;1 business day&quot;</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800/60 bg-gray-900/30">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800/60">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Unified B2B payment infrastructure</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">Every rail, every currency, one API. No more juggling payment providers.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-green-500/40 hover:bg-gray-900 transition-all duration-300">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Rails Table */}
      <section id="rails" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Supported payment rails</h2>
          <p className="mt-4 text-gray-400">8 rails, one integration. AI picks the best one for each payment.</p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 text-left text-xs text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-4">Rail</th>
                <th className="px-6 py-4">Speed</th>
                <th className="px-6 py-4">Cost</th>
                <th className="px-6 py-4 hidden sm:table-cell">Region</th>
              </tr>
            </thead>
            <tbody>
              {(showAllRails ? rails : rails.slice(0, 4)).map((r, i) => (
                <tr key={r.name} className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition ${i % 2 === 0 ? '' : 'bg-gray-900/30'}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/20 flex items-center justify-center text-xs font-bold text-green-400">
                        {r.name.slice(0, 2)}
                      </div>
                      <span className="font-medium text-sm">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{r.speed}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{r.cost}</td>
                  <td className="px-6 py-4 text-sm text-gray-400 hidden sm:table-cell">{r.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!showAllRails && (
            <div className="px-6 py-4 border-t border-gray-800/50">
              <button onClick={() => setShowAllRails(true)} className="text-sm text-green-400 hover:text-green-300 transition font-medium">
                Show all 8 rails →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Payment Flow */}
      <section id="flow" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">From invoice to reconciliation</h2>
          <p className="mt-4 text-gray-400">End-to-end payment flow, fully automated.</p>
        </div>
        <div className="space-y-4">
          {paymentSteps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left rounded-xl border p-5 transition-all duration-300 ${
                activeStep === idx
                  ? 'border-green-500/40 bg-gradient-to-r from-green-500/10 to-emerald-600/5 shadow-lg shadow-green-500/5'
                  : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
                  activeStep === idx ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/25' : 'bg-gray-800'
                }`}>
                  {idx < activeStep ? '✓' : s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${activeStep === idx ? 'text-green-400' : 'text-gray-500'}`}>
                      Step {s.step}
                    </span>
                    <span className={`font-medium text-sm ${activeStep === idx ? 'text-white' : 'text-gray-300'}`}>
                      {s.label}
                    </span>
                  </div>
                  {activeStep === idx && (
                    <p className="mt-1 text-sm text-gray-400">{s.detail}</p>
                  )}
                </div>
                {activeStep === idx && (
                  <div className="hidden sm:block shrink-0">
                    <span className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-xs text-green-400 font-medium">
                      Active
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Pay only for what you move</h2>
          <p className="mt-4 text-gray-400">No monthly minimums on Starter. Scale with volume discounts.</p>
          <div className="mt-6 inline-flex items-center rounded-full bg-gray-800 p-1">
            <button onClick={() => setBillingCycle('monthly')} className={`rounded-full px-4 py-1.5 text-sm transition ${billingCycle === 'monthly' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Monthly</button>
            <button onClick={() => setBillingCycle('annual')} className={`rounded-full px-4 py-1.5 text-sm transition ${billingCycle === 'annual' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Annual (save 15%)</button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-8 flex flex-col ${p.highlight ? 'border-green-500/50 bg-gradient-to-b from-green-500/10 to-transparent shadow-xl shadow-green-500/10' : 'border-gray-800 bg-gray-900/50'}`}>
              {p.highlight && <div className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-4">Most Popular</div>}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">{p.price}</span>
                {p.per && <span className="text-sm text-gray-400 ml-2">{p.per}</span>}
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all ${p.highlight ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 via-emerald-600/5 to-transparent p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold">Stop juggling payment providers</h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">One API, every rail, automatic reconciliation. Get your API keys in 60 seconds.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-4 text-sm font-semibold shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all hover:scale-105">
              Get API Keys — Free
            </button>
            <button className="rounded-xl border border-gray-700 bg-gray-900 px-8 py-4 text-sm font-semibold text-gray-300 hover:bg-gray-800 transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/60 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-xs font-bold">M</div>
                <span className="font-bold">MeshPay</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">B2B payment orchestration for modern finance teams.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Payment Rails</a></li>
                <li><a href="#" className="hover:text-white transition">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">SDKs</a></li>
                <li><a href="#" className="hover:text-white transition">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-xs text-gray-600">© 2026 MeshPay Inc. All rights reserved.</p>
              <span className="text-xs text-gray-700">|</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> All systems operational
              </span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-400 transition text-sm">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition text-sm">LinkedIn</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition text-sm">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-gray-400 transition text-sm">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
