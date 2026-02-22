'use client';

import { useState } from 'react';

export default function SleepSyncLanding() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const stats = [
    { value: '87%', label: 'Feel More Rested' },
    { value: '23 min', label: 'Faster to Fall Asleep' },
    { value: '500K+', label: 'Nights Tracked' },
    { value: '4', label: 'Chronotypes Supported' },
  ];

  const features = [
    { icon: '⏰', title: 'Smart Alarm', desc: 'Wakes you at your lightest sleep phase so you never feel groggy. Uses motion sensors to detect the perfect moment.' },
    { icon: '🦁', title: 'Chronotype Analysis', desc: 'Discover if you\'re a Lion, Bear, Wolf, or Dolphin. Tailor your entire schedule to your biological rhythm.' },
    { icon: '🌙', title: 'Sleep Score', desc: 'Get a nightly quality rating based on duration, efficiency, latency, and disturbances. Track improvements over time.' },
    { icon: '🌡️', title: 'Environment Sensing', desc: 'Monitor noise levels, ambient light, and room temperature. Get alerts when conditions aren\'t ideal for sleep.' },
    { icon: '📊', title: 'Sleep Debt Tracker', desc: 'Calculate your accumulated sleep deficit and get a personalized recovery plan to pay it back gradually.' },
    { icon: '💡', title: 'Personalized Tips', desc: 'AI-powered bedtime recommendations based on your patterns, lifestyle, caffeine intake, and exercise habits.' },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Basic sleep tracking', 'Simple alarm', 'Daily sleep score', 'Weekly summary'],
      cta: 'Get Started',
      highlight: false,
    },
    {
      name: 'Plus',
      price: billingCycle === 'monthly' ? '$4.99' : '$3.99',
      period: '/mo',
      features: ['Smart alarm timing', 'Full analytics dashboard', 'Chronotype analysis', 'Environment sensing', 'Sleep debt tracking', 'Priority support'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Family',
      price: billingCycle === 'monthly' ? '$9.99' : '$7.99',
      period: '/mo',
      features: ['Up to 6 profiles', 'Shared family insights', 'Kids sleep tracking', 'All Plus features', 'Family sleep reports', 'Dedicated support'],
      cta: 'Start Free Trial',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-sm font-bold">S</div>
            <span className="text-xl font-bold">SleepSync</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Science</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Sign In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 hover:opacity-90 transition-opacity font-medium">Download Free</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="block text-gray-300 hover:text-white">Science</a>
            <button className="w-full mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-medium">Download Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6">
            🌙 Trusted by 500K+ sleepers worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Wake Up to{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Better Sleep</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI analyzes your movement, sound, and light patterns to optimize your sleep schedule. Wake up refreshed with smart alarms that find your lightest sleep phase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all">
              Start Sleeping Better
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-900 transition-colors font-medium">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-800/50 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Perfect Sleep</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Science-backed features that work together to transform your nights and energize your days.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeFeature === i ? 'bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-500/30 scale-[1.02]' : 'bg-gray-900/50 border-gray-800/50 hover:border-gray-700'}`}
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
      <section id="pricing" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 mb-8">Start free. Upgrade when you&apos;re ready.</p>
            <div className="inline-flex items-center gap-3 bg-gray-900 rounded-full p-1 border border-gray-800">
              <button onClick={() => setBillingCycle('monthly')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
              <button onClick={() => setBillingCycle('annual')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'text-gray-400 hover:text-white'}`}>Annual <span className="text-xs text-emerald-400">Save 20%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.highlight ? 'bg-gradient-to-b from-indigo-500/10 to-transparent border-indigo-500/30 ring-1 ring-indigo-500/20' : 'bg-gray-900/50 border-gray-800/50'}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-indigo-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.highlight ? 'bg-gradient-to-r from-indigo-500 to-blue-500 hover:shadow-lg hover:shadow-indigo-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-sm font-bold">S</div>
                <span className="text-lg font-bold">SleepSync</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Better sleep through science and AI. Join half a million people sleeping smarter.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Science</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sleep Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chronotypes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sleep Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2026 SleepSync. All rights reserved.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
