'use client';

import { useState } from 'react';

export default function SkillTreeLanding() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const earnXp = () => {
    const gained = Math.floor(Math.random() * 50) + 10;
    const newXp = xp + gained;
    if (newXp >= level * 100) {
      setLevel(l => l + 1);
      setXp(newXp - level * 100);
    } else {
      setXp(newXp);
    }
  };

  const stats = [
    { value: '2.4M', label: 'XP Earned Daily' },
    { value: '45', label: 'Skill Categories' },
    { value: '850K+', label: 'Active Learners' },
    { value: '94%', label: 'Complete Goals' },
  ];

  const features = [
    { icon: '🌳', title: 'Visual Skill Trees', desc: 'Branching learning paths visualized like a game skill tree. See prerequisites, unlock advanced nodes, and plan your personal growth journey.' },
    { icon: '⭐', title: 'XP & Levels', desc: 'Earn experience points for every practice session, completed lesson, or challenge. Level up and unlock new abilities and content as you grow.' },
    { icon: '🎯', title: 'Daily Challenges', desc: 'Bite-sized tasks designed to build consistency and reinforce learning. Complete challenges to earn bonus XP and maintain your streak.' },
    { icon: '🛤️', title: 'Learning Paths', desc: 'Curated sequences by domain experts. Follow structured paths for programming, design, music, languages, and 40+ other skill categories.' },
    { icon: '🏆', title: 'Achievement Badges', desc: 'Unlock milestone badges as you progress. From "First Steps" to "Grand Master" — collect them all and showcase your achievements.' },
    { icon: '🏅', title: 'Social Leaderboards', desc: 'Compete with friends and the community on weekly and all-time leaderboards. Stay motivated through healthy competition and mutual encouragement.' },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['3 skill trees', 'Basic XP system', 'Daily challenges', 'Community access'],
      cta: 'Start Leveling Up',
      highlight: false,
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? '$4.99' : '$3.99',
      period: '/mo',
      features: ['Unlimited skill trees', 'All challenges', 'Custom learning paths', 'Achievement badges', 'Advanced analytics', 'Priority support'],
      cta: 'Go Pro',
      highlight: true,
    },
    {
      name: 'Lifetime',
      price: '$49.99',
      period: 'once',
      features: ['Everything in Pro', 'Forever access', 'Beta features', 'Exclusive badges', 'Founder status', 'Direct dev access'],
      cta: 'Buy Lifetime',
      highlight: false,
    },
  ];

  const xpProgress = (xp / (level * 100)) * 100;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-sm font-bold">S</div>
            <span className="text-xl font-bold">SkillTree</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Skills</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Log In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 transition-opacity font-medium text-black">Play Now</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="block text-gray-300 hover:text-white">Skills</a>
            <button className="w-full mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 font-medium text-black">Play Now</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute -top-20 left-1/3 w-[700px] h-[500px] bg-gradient-to-br from-yellow-500/8 to-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-6">
                🎮 Turn learning into an adventure
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Level Up{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Your Life</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Turn personal development into an RPG. Earn XP for learning, build skill trees, complete challenges, and compete with friends on the leaderboard.
              </p>
              <button
                onClick={earnXp}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 font-semibold text-lg text-black hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
              >
                ⚔️ Start Your Quest
              </button>
            </div>
            {/* Interactive XP Demo */}
            <div className="p-6 rounded-2xl bg-gray-900/80 border border-gray-800 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Your Character</h3>
                <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold">
                  Level {level}
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-400">Experience Points</span>
                  <span className="text-yellow-400 font-mono">{xp} / {level * 100} XP</span>
                </div>
                <div className="w-full h-4 rounded-full bg-gray-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500"
                    style={{ width: `${xpProgress}%` }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['🎨 Design', '💻 Code', '📚 Learn'].map((skill, i) => (
                  <div key={i} className="p-3 rounded-xl bg-gray-800/80 text-center">
                    <div className="text-xl mb-1">{skill.split(' ')[0]}</div>
                    <div className="text-xs text-gray-400">{skill.split(' ')[1]}</div>
                    <div className="text-sm font-bold text-yellow-400 mt-1">Lv.{Math.max(1, level - i)}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={earnXp}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 font-medium hover:bg-yellow-500/30 transition-all"
              >
                ⚡ Complete a Challenge (+XP)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-800/50 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Power-Ups</span> for Growth</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Six game mechanics that make personal development addictive and rewarding.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeFeature === i ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 scale-[1.02]' : 'bg-gray-900/50 border-gray-800/50 hover:border-gray-700'}`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Class</h2>
            <p className="text-gray-400 mb-8">Every hero starts somewhere. Pick the path that fits your quest.</p>
            <div className="inline-flex items-center gap-3 bg-gray-900 rounded-full p-1 border border-gray-800">
              <button onClick={() => setBillingCycle('monthly')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
              <button onClick={() => setBillingCycle('annual')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' : 'text-gray-400 hover:text-white'}`}>Annual <span className="text-xs text-emerald-400">Save 20%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.highlight ? 'bg-gradient-to-b from-yellow-500/10 to-transparent border-yellow-500/30 ring-1 ring-yellow-500/20' : 'bg-gray-900/50 border-gray-800/50'}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-yellow-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.highlight ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:shadow-lg hover:shadow-yellow-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
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
          <div className="p-12 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Quest?</h2>
            <p className="text-gray-400 mb-8">Join 850,000+ learners who turned self-improvement into the world&apos;s best game.</p>
            <button
              onClick={earnXp}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 font-semibold text-lg text-black hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
            >
              🚀 Create Your Character
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
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-sm font-bold text-black">S</div>
                <span className="text-lg font-bold">SkillTree</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Gamified learning for the real world. Level up your life, one XP at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Skill Catalog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leaderboards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
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
            <p className="text-sm text-gray-600">© 2026 SkillTree. All rights reserved.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Discord</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Reddit</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
