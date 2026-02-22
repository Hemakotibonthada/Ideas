'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🧠',
    title: 'AI Split Engine',
    desc: 'ML model evaluates inventory location, carrier rates, delivery zones, and customer SLA to decide optimal split strategy in <50ms.',
  },
  {
    icon: '📦',
    title: 'Multi-Node Routing',
    desc: 'Route partial orders to closest fulfillment nodes. Support warehouse, dark store, 3PL, drop-ship, and store pickup.',
  },
  {
    icon: '💰',
    title: 'Real-Time Cost Optimizer',
    desc: 'Compares 30+ carriers simultaneously. Factors in dimensional weight, zones, fuel surcharges, and negotiated rates.',
  },
  {
    icon: '🔗',
    title: 'Platform Connectors',
    desc: 'Native Shopify, WooCommerce, BigCommerce, Magento plugins. Install and go.',
  },
  {
    icon: '📊',
    title: 'Savings Dashboard',
    desc: 'Track exactly how much you save per order vs naive single-shipment. Monthly ROI reports.',
  },
  {
    icon: '🚚',
    title: 'Unified Tracking',
    desc: 'Single tracking page for customers even when orders ship from multiple locations.',
  },
];

const stats = [
  { value: '32%', label: 'Avg Shipping Cost Reduction' },
  { value: '1.4 day', label: 'Faster Delivery' },
  { value: '8M+', label: 'Orders Optimized' },
  { value: '200+', label: '3PL Integrations' },
];

const plans = [
  {
    name: 'Launch',
    price: '$49',
    per: '/mo + $0.05/order',
    features: ['Up to 5,000 orders', '3 fulfillment nodes', '2 carriers', 'Email support', 'Savings dashboard'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Scale',
    price: '$199',
    per: '/mo + $0.03/order',
    features: ['Up to 50,000 orders', 'Unlimited nodes', 'All carriers', 'API access', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: '',
    features: ['Unlimited volume', 'Custom carrier contracts', 'SLA guarantees', 'Dedicated CSM', 'On-prem option'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function SplitShipLanding() {
  const [activeTab, setActiveTab] = useState<'split' | 'single'>('split');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-800/60 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-sm font-bold">S</div>
            <span className="text-xl font-bold tracking-tight">SplitShip</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">How It Works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Docs</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">Log In</button>
            <button className="rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 text-sm font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:scale-105">
              Get Started
            </button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 space-y-3 text-sm">
            <a href="#features" className="block text-gray-400 hover:text-white">Features</a>
            <a href="#demo" className="block text-gray-400 hover:text-white">How It Works</a>
            <a href="#pricing" className="block text-gray-400 hover:text-white">Pricing</a>
            <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 py-2 text-sm font-semibold">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs text-sky-400 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            Now processing 8M+ orders per month
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Ship Smarter,{' '}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Not Cheaper</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stop overpaying for shipping. SplitShip intelligently splits orders across warehouses, dark stores, and 3PLs to minimize cost and delivery time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3.5 text-sm font-semibold shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:scale-105">
              Start Free Trial
            </button>
            <button className="rounded-xl border border-gray-700 bg-gray-900 px-8 py-3.5 text-sm font-semibold text-gray-300 hover:bg-gray-800 transition-all">
              Watch Demo →
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800/60 bg-gray-900/30">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800/60">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-8 text-center">
              <div className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to optimize fulfillment</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">Six powerful modules working together to slash your shipping costs and delight your customers.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-8 hover:border-sky-500/40 hover:bg-gray-900 transition-all duration-300">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-400 transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order Split Demo */}
      <section id="demo" className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">See the split in action</h2>
          <p className="mt-4 text-gray-400">A real order, optimized in real time.</p>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('split')}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition ${activeTab === 'split' ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
          >
            SplitShip Optimized
          </button>
          <button
            onClick={() => setActiveTab('single')}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition ${activeTab === 'single' ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
          >
            Single Shipment
          </button>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
          {activeTab === 'split' ? (
            <div className="space-y-6">
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Order #SS-48291 · 3 items</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">
                  <div className="text-xs text-sky-400 font-semibold mb-2">📦 Warehouse A — Dallas, TX</div>
                  <div className="text-sm text-gray-300">2 items · Shipped via USPS Priority</div>
                  <div className="mt-2 text-2xl font-bold text-sky-400">$4.20</div>
                  <div className="text-xs text-gray-500 mt-1">Est. delivery: 2 days</div>
                </div>
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                  <div className="text-xs text-blue-400 font-semibold mb-2">🏪 Dark Store B — Phoenix, AZ</div>
                  <div className="text-sm text-gray-300">1 item · Shipped via FedEx Ground</div>
                  <div className="mt-2 text-2xl font-bold text-blue-400">$2.10</div>
                  <div className="text-xs text-gray-500 mt-1">Est. delivery: 1 day</div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-sky-500/10 to-blue-600/10 border border-sky-500/20 p-5">
                <div>
                  <div className="text-sm text-gray-400">Total Shipping Cost</div>
                  <div className="text-3xl font-extrabold text-white">$6.30</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-400 font-semibold">You save $5.50</div>
                  <div className="text-xs text-gray-500">46.6% reduction</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Order #SS-48291 · 3 items</div>
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5">
                <div className="text-xs text-gray-400 font-semibold mb-2">📦 Central Warehouse — Chicago, IL</div>
                <div className="text-sm text-gray-300">3 items · Shipped via UPS Ground</div>
                <div className="mt-2 text-2xl font-bold text-red-400">$11.80</div>
                <div className="text-xs text-gray-500 mt-1">Est. delivery: 4 days</div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-red-500/5 border border-red-500/20 p-5">
                <div>
                  <div className="text-sm text-gray-400">Total Shipping Cost</div>
                  <div className="text-3xl font-extrabold text-white">$11.80</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-red-400 font-semibold">No optimization</div>
                  <div className="text-xs text-gray-500">Slower delivery</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-400">Start free. Scale as you grow. No hidden fees.</p>
          <div className="mt-6 inline-flex items-center rounded-full bg-gray-800 p-1">
            <button onClick={() => setBillingCycle('monthly')} className={`rounded-full px-4 py-1.5 text-sm transition ${billingCycle === 'monthly' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Monthly</button>
            <button onClick={() => setBillingCycle('annual')} className={`rounded-full px-4 py-1.5 text-sm transition ${billingCycle === 'annual' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}>Annual (save 20%)</button>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-8 flex flex-col ${p.highlight ? 'border-sky-500/50 bg-gradient-to-b from-sky-500/10 to-transparent shadow-xl shadow-sky-500/10' : 'border-gray-800 bg-gray-900/50'}`}>
              {p.highlight && <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-4">Most Popular</div>}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-sm text-gray-400">{p.per}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all ${p.highlight ? 'bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-blue-600/5 to-transparent p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to slash your shipping costs?</h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">Join 2,000+ brands saving an average of 32% on every order.</p>
          <button className="mt-8 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-10 py-4 text-sm font-semibold shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 transition-all hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/60 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-xs font-bold">S</div>
                <span className="font-bold">SplitShip</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Micro-fulfillment orchestration for modern commerce.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">DPA</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">© 2026 SplitShip Inc. All rights reserved.</p>
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
