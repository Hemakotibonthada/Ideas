'use client';

import { useState } from 'react';

export default function BudgetBrainLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const demoSubscriptions = [
    { name: 'Streaming Plus', cost: 14.99, status: 'unused', lastUsed: '3 months ago' },
    { name: 'Cloud Storage Pro', cost: 9.99, status: 'duplicate', lastUsed: 'Active but redundant' },
    { name: 'Fitness App', cost: 12.99, status: 'unused', lastUsed: '6 months ago' },
  ];

  const features = [
    { icon: '📊', title: 'Spend Analysis', desc: 'AI categorizes and visualizes all your spending. See exactly where every dollar goes.' },
    { icon: '🔍', title: 'Subscription Finder', desc: 'Find and cancel forgotten subscriptions bleeding your wallet. We\'ve saved users millions.' },
    { icon: '🤖', title: 'Savings Autopilot', desc: 'Set goals, and AI automates micro-savings. Small amounts add up to big results.' },
    { icon: '💯', title: 'Financial Score', desc: 'A single score for your financial health. Track it improve as you build better habits.' },
    { icon: '📅', title: 'Bill Predictor', desc: 'Know exactly what you owe before it\'s due. No surprises, no late fees, ever.' },
    { icon: '💡', title: 'Investment Tips', desc: 'Personalized tips to grow your money based on your risk profile and goals.' },
  ];

  const pricing = [
    { name: 'Free', price: 0, features: ['Spend tracking', 'Basic analysis', 'Monthly summary', '3 accounts', 'Community support'] },
    { name: 'Smart', price: annual ? 3.99 : 4.99, features: ['Subscription finder', 'Savings autopilot', 'Bill predictor', 'Unlimited accounts', 'Priority support', 'CSV export'] },
    { name: 'Advisor', price: annual ? 7.99 : 9.99, features: ['Investment tips', 'Financial score', 'Family budgets', 'Tax insights', 'Wealth projections', 'Dedicated advisor'] },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center font-bold text-sm">BB</div>
            <span className="text-xl font-bold">BudgetBrain</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#demo" className="hover:text-white transition">Try It</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold hover:opacity-90 transition">Start Free</button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#demo" className="text-gray-300 hover:text-white">Try It</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold">Start Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium">💰 Like having a CFO for your personal finances</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Your Money.{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">Smarter.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            AI analyzes your spending, finds subscriptions to cancel, automates savings goals, and gives you a financial score. Like having a CFO for your personal finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/25 transition">Analyze Free →</button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition">See How It Works</button>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm text-gray-400 mb-5 text-center">Try it — scan for wasted subscriptions</p>
          {score === null ? (
            <button onClick={() => setScore(72)} className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 font-semibold hover:opacity-90 transition">
              🔍 Scan My Subscriptions
            </button>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Your Financial Score</p>
                <div className="text-5xl font-extrabold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">{score}/100</div>
                <p className="text-xs text-yellow-400 mt-1">⚠️ Room for improvement — we found savings!</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Subscriptions to cancel</p>
                {demoSubscriptions.map((sub, i) => (
                  <div key={i} className="flex items-center justify-between bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <div>
                      <p className="text-sm font-semibold">{sub.name}</p>
                      <p className="text-xs text-gray-500">{sub.lastUsed}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-red-400">${sub.cost}/mo</p>
                      <p className="text-xs text-red-400/70">{sub.status}</p>
                    </div>
                  </div>
                ))}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3 text-center">
                  <p className="text-sm font-bold text-emerald-400">💰 Total savings: $37.97/mo ($455.64/yr)</p>
                </div>
              </div>
              <button onClick={() => setScore(null)} className="block mx-auto text-xs text-gray-600 hover:text-gray-400 transition">Reset demo</button>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['$890M', 'Saved Total'],
            ['340K+', 'Subscriptions Canceled'],
            ['1.2M', 'Savings Goals Hit'],
            ['97%', 'More Financially Aware'],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">{val}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Your Complete <span className="bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">Money Toolkit</span></h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">Six AI-powered features that turn financial chaos into clarity and confidence.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Invest in Your Financial Future</h2>
          <p className="text-gray-500 text-center mb-8">Start free. The app pays for itself in saved subscriptions.</p>
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-emerald-500' : 'bg-white/20'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-emerald-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${i === 1 ? 'border-emerald-500 bg-emerald-500/5 scale-105' : 'border-white/10 bg-white/[0.03]'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${plan.price.toFixed(2)}</span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${i === 1 ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/25' : 'border border-white/20 text-white hover:bg-white/5'}`}>
                  {i === 0 ? 'Start Free' : 'Get ' + plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center font-bold text-xs">BB</div>
            <span className="font-bold">BudgetBrain</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Security</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 BudgetBrain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
