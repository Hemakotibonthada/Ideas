'use client';

import { useState } from 'react';

export default function BillSplitLanding() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [splitAmount, setSplitAmount] = useState('');
  const [splitPeople, setSplitPeople] = useState(2);

  const perPerson = splitAmount ? (parseFloat(splitAmount) / splitPeople).toFixed(2) : '0.00';

  const stats = [
    { value: '$2.1B', label: 'Total Split' },
    { value: '890K+', label: 'Active Groups' },
    { value: '15', label: 'Payment Methods' },
    { value: '0', label: 'Arguments Guaranteed' },
  ];

  const features = [
    { icon: '⚖️', title: 'Smart Split', desc: 'Split equally, by percentage, exact amounts, or with custom shares. Handles tax and tip calculations automatically for any group size.' },
    { icon: '🔄', title: 'Recurring Bills', desc: 'Auto-track rent, utilities, subscriptions, and any recurring expense. Everyone gets reminded when bills are due — no nagging required.' },
    { icon: '🤝', title: 'IOUs', desc: 'Track informal debts between friends effortlessly. "I got lunch, you get coffee" — BillSplit remembers so you don\'t have to.' },
    { icon: '⚡', title: 'Instant Settlement', desc: 'Settle up via Venmo, Zelle, PayPal, or mark as cash. One-tap payments mean debts get cleared in seconds, not days.' },
    { icon: '🧾', title: 'Receipt Scanner', desc: 'Snap a photo of any receipt and items are auto-detected. Assign items to individuals — no more squinting at tiny print.' },
    { icon: '✈️', title: 'Trip Mode', desc: 'Track all expenses on a group trip in one place. Everyone logs their spending, and BillSplit calculates who owes whom at the end.' },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Up to 3 groups', 'Basic splitting', 'Manual settlement', 'Transaction history'],
      cta: 'Start Splitting',
      highlight: false,
    },
    {
      name: 'Plus',
      price: billingCycle === 'monthly' ? '$2.99' : '$2.39',
      period: '/mo',
      features: ['Unlimited groups', 'Recurring bills', 'IOUs tracking', 'Priority support', 'Custom categories', 'Export reports'],
      cta: 'Upgrade to Plus',
      highlight: true,
    },
    {
      name: 'Premium',
      price: billingCycle === 'monthly' ? '$4.99' : '$3.99',
      period: '/mo',
      features: ['Receipt scanner', 'Payment integration', 'Spending analytics', 'All Plus features', 'Trip mode', 'Unlimited history'],
      cta: 'Go Premium',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-sm font-bold">B</div>
            <span className="text-xl font-bold">BillSplit</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">How It Works</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Log In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 transition-opacity font-medium">Sign Up Free</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-950 border-b border-gray-800 px-6 py-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="block text-gray-300 hover:text-white">How It Works</a>
            <button className="w-full mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 font-medium">Sign Up Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-b from-green-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
                💰 $2.1 Billion split fairly
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Split Bills.{' '}
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Keep Friends.</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                The smartest way to split expenses with roommates, friends, and groups. Track recurring bills, settle up instantly, and never argue about money again.
              </p>
              <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all">
                Start Splitting Free
              </button>
            </div>
            {/* Interactive Split Calculator */}
            <div className="p-6 rounded-2xl bg-gray-950 border border-gray-800 space-y-5">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span className="text-green-400">⚡</span> Quick Split Calculator
              </h3>
              <div>
                <label className="text-sm text-gray-400 block mb-1.5">Total Bill Amount</label>
                <input
                  type="number"
                  value={splitAmount}
                  onChange={(e) => setSplitAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white text-lg focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-1.5">Number of People: {splitPeople}</label>
                <input
                  type="range"
                  min={2}
                  max={20}
                  value={splitPeople}
                  onChange={(e) => setSplitPeople(Number(e.target.value))}
                  className="w-full accent-green-500"
                />
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="text-sm text-gray-400">Each person pays</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">${perPerson}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-800/50 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Way to <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Split Fair</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">From dinner tabs to rent, BillSplit handles every scenario with zero drama.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeFeature === i ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 scale-[1.02]' : 'bg-gray-950/80 border-gray-800/50 hover:border-gray-700'}`}
                onClick={() => setActiveFeature(activeFeature === i ? null : i)}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fair Pricing for Fair Splitting</h2>
            <p className="text-gray-400 mb-8">Start free. Most friend groups never need to upgrade.</p>
            <div className="inline-flex items-center gap-3 bg-gray-900 rounded-full p-1 border border-gray-800">
              <button onClick={() => setBillingCycle('monthly')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
              <button onClick={() => setBillingCycle('annual')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}>Annual <span className="text-xs text-emerald-400">Save 20%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.highlight ? 'bg-gradient-to-b from-green-500/10 to-transparent border-green-500/30 ring-1 ring-green-500/20' : 'bg-gray-950/80 border-gray-800/50'}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.highlight ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-900'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-sm font-bold">B</div>
                <span className="text-lg font-bold">BillSplit</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Split bills. Keep friends. The fairest way to share expenses.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">What&apos;s New</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Use Cases</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Roommates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Couples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Group Dinners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2026 BillSplit. All rights reserved.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
