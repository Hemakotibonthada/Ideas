'use client';

import { useState } from 'react';

export default function FocusForgeLanding() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [focusTimer, setFocusTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const stats = [
    { value: '3.2 hrs', label: 'Avg Deep Work Gained' },
    { value: '47%', label: 'Fewer Distractions' },
    { value: '120K+', label: 'Active Users' },
    { value: '89%', label: 'Report Better Focus' },
  ];

  const features = [
    { icon: '🧠', title: 'Flow State Detection', desc: 'AI monitors your activity patterns and detects when you\'re "in the zone." Automatically extends focus sessions and silences notifications during peak flow.' },
    { icon: '🚫', title: 'Smart Blocking', desc: 'Intelligently blocks distracting apps and websites during focus time. Learns your distraction patterns and proactively shields you from them.' },
    { icon: '⏱️', title: 'Pomodoro++', desc: 'Enhanced pomodoro timer with AI-optimized break durations. Adapts intervals based on your energy levels and task complexity throughout the day.' },
    { icon: '📂', title: 'Project Tracking', desc: 'Link focus sessions directly to projects and tasks. See exactly how many deep work hours you invest in each project over time.' },
    { icon: '🔥', title: 'Streak System', desc: 'Build unstoppable momentum with daily focus streaks. Achieve milestones, earn badges, and never break the chain of productive days.' },
    { icon: '📈', title: 'Focus Analytics', desc: 'Beautiful weekly and monthly reports showing your deep work trends, peak productivity hours, distraction patterns, and improvement trajectory.' },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['Basic pomodoro timer', 'Daily focus log', 'Simple stats', '1 project tracking'],
      cta: 'Start Focusing',
      highlight: false,
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$5.99' : '$4.79',
      period: '/mo',
      features: ['Smart app blocking', 'Flow state detection', 'Full analytics', 'Unlimited projects', 'Streak system', 'Custom focus modes'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Team',
      price: billingCycle === 'monthly' ? '$3' : '$2.40',
      period: '/user/mo',
      features: ['Team dashboards', 'Shared focus sessions', 'Manager insights', 'All Pro features', 'SSO & admin tools', 'Dedicated support'],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  const toggleTimer = () => {
    if (!timerActive) {
      setTimerActive(true);
      setFocusTimer(prev => prev + 1);
    } else {
      setTimerActive(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-sm font-bold">F</div>
            <span className="text-xl font-bold">FocusForge</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Research</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Sign In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 hover:opacity-90 transition-opacity font-medium">Get Started</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="block text-gray-300 hover:text-white">Research</a>
            <button className="w-full mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 font-medium">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-violet-500/8 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-6">
            🧠 Backed by Cal Newport&apos;s Deep Work research
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Forge{' '}
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Deep Work</span>{' '}
            Habits
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Block distractions, track flow states, and build a deep work practice that 10x your productivity. Backed by Cal Newport&apos;s research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={toggleTimer}
              className={`px-8 py-3.5 rounded-xl font-semibold text-lg transition-all ${timerActive ? 'bg-red-500/80 hover:bg-red-500' : 'bg-gradient-to-r from-violet-500 to-purple-500 hover:shadow-lg hover:shadow-violet-500/25'}`}
            >
              {timerActive ? `⏸ Stop Focus (${focusTimer} sessions)` : '▶ Start Focus Session'}
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-900 transition-colors font-medium">
              See The Science
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-800/50 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Arsenal for <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Deep Work</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Six powerful tools working in harmony to protect your attention and amplify your output.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeFeature === i ? 'bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/30 scale-[1.02]' : 'bg-gray-900/50 border-gray-800/50 hover:border-gray-700'}`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Invest in Your Attention</h2>
            <p className="text-gray-400 mb-8">Your focus is your most valuable asset. Protect it.</p>
            <div className="inline-flex items-center gap-3 bg-gray-900 rounded-full p-1 border border-gray-800">
              <button onClick={() => setBillingCycle('monthly')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
              <button onClick={() => setBillingCycle('annual')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}>Annual <span className="text-xs text-emerald-400">Save 20%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.highlight ? 'bg-gradient-to-b from-violet-500/10 to-transparent border-violet-500/30 ring-1 ring-violet-500/20' : 'bg-gray-900/50 border-gray-800/50'}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-violet-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.highlight ? 'bg-gradient-to-r from-violet-500 to-purple-500 hover:shadow-lg hover:shadow-violet-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Reclaim Your Focus?</h2>
            <p className="text-gray-400 mb-8">Join 120,000+ professionals who&apos;ve transformed their productivity with FocusForge.</p>
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 font-semibold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-sm font-bold">F</div>
                <span className="text-lg font-bold">FocusForge</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Forge unbreakable focus habits. Deep work is the new superpower.</p>
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
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Learn</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Deep Work Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Flow State Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Productivity Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
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
            <p className="text-sm text-gray-600">© 2026 FocusForge. All rights reserved.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
