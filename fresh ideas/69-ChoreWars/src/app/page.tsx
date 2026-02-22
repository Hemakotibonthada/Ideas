'use client';
import { useState } from 'react';

export default function ChoreWarsLanding() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 chores tracked', 'Basic XP system', '1 household', 'Simple leaderboard'],
      cta: 'Start Playing',
      highlight: false,
    },
    {
      name: 'Family',
      price: annual ? '$2.99' : '$3.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Unlimited chores', 'Custom rewards', 'Full leaderboards', 'Streak bonuses', 'Chore randomizer'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Household',
      price: annual ? '$4.99' : '$6.99',
      period: annual ? '/mo billed yearly' : '/mo',
      features: ['Everything in Family', 'Multiple households', 'Advanced analytics', 'Custom avatars', 'Boss battles', 'Priority support'],
      cta: 'Level Up',
      highlight: false,
    },
  ];

  const features = [
    { title: 'XP System', desc: 'Earn experience points for every chore completed. Harder chores = more XP. Level up and unlock achievements.', icon: '⚡' },
    { title: 'Family Leaderboard', desc: "Who's pulling their weight? Real-time family rankings keep everyone motivated and accountable.", icon: '🏆' },
    { title: 'Custom Rewards', desc: 'Parents set the rewards — extra screen time, allowance boosts, dessert privileges. You name it.', icon: '🎁' },
    { title: 'Chore Randomizer', desc: "Nobody wants to pick? Spin the wheel! Fair, random, and nobody can argue with the wheel.", icon: '🎰' },
    { title: 'Streak Bonuses', desc: 'Consecutive days of chore completion earn bonus XP multipliers. Keep the streak alive!', icon: '🔥' },
    { title: 'Boss Battles', desc: 'Team up as a family for "boss battles" — deep cleaning challenges with massive XP rewards.', icon: '🐉' },
  ];

  const stats = [
    { value: '4.2M', label: 'Chores completed' },
    { value: '89%', label: 'Kids do chores voluntarily' },
    { value: '120K+', label: 'Households' },
    { value: '3.2x', label: 'More chores done' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">ChoreWars</div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#stats" className="hover:text-white transition">Results</a>
        </div>
        <button className="bg-gradient-to-r from-yellow-500 to-green-500 px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition text-black">Play Free</button>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-yellow-500/30 text-yellow-400 text-xs mb-6">🎮 Gamified Chore Management</div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Game On.{' '}
          <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">Chores Done.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Turn household chores into a family competition. Earn XP, level up, unlock rewards, and compete on the leaderboard. Suddenly, everyone wants to do dishes.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-gradient-to-r from-yellow-500 to-green-500 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition text-black">Create Your Household</button>
          <button className="border border-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 transition">See It In Action</button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Chores Have Never Been This Fun</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Every game mechanic is designed to motivate, reward, and make household tasks feel like an adventure.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-yellow-500/50 transition">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Power Up Your Household</h2>
        <p className="text-gray-400 text-center mb-8">Save up to 28% with annual billing.</p>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-yellow-500' : 'bg-gray-700'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual</span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 border ${p.highlight ? 'border-yellow-500 bg-yellow-500/5' : 'border-gray-800 bg-gray-900/40'}`}>
              <h3 className="text-xl font-bold mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-gray-500 text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((ft) => (
                  <li key={ft} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-yellow-400">✓</span>{ft}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${p.highlight ? 'bg-gradient-to-r from-yellow-500 to-green-500 text-black hover:opacity-90' : 'border border-gray-700 hover:border-gray-500'}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">ChoreWars</div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">FAQ</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <div className="text-sm text-gray-600">© 2026 ChoreWars. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}