'use client';

import { useState } from 'react';

export default function TimeBankLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [demoSkill, setDemoSkill] = useState<string | null>(null);

  const skills = ['Guitar Lessons', 'Plumbing', 'Web Design', 'Dog Walking', 'Cooking', 'Tutoring'];

  const features = [
    { icon: '🎯', title: 'Skill Marketplace', desc: 'Browse and offer hundreds of skills in your local community or online.' },
    { icon: '⏱️', title: 'TimeCredits', desc: 'Earn credits by helping others. Spend them on services you need.' },
    { icon: '🤖', title: 'Smart Matching', desc: 'AI matches your needs with nearby providers for perfect skill swaps.' },
    { icon: '⭐', title: 'Trust Score', desc: 'Verified reviews and reputation system keeps the community safe.' },
    { icon: '📅', title: 'Scheduling', desc: 'Built-in calendar for booking time slots with seamless reminders.' },
    { icon: '🏘️', title: 'Community Boards', desc: 'Create and join local time-banking communities in your neighborhood.' },
  ];

  const stats = [
    { value: '180K+', label: 'Hours Exchanged' },
    { value: '2,400+', label: 'Skills Listed' },
    { value: '45K+', label: 'Members' },
    { value: '12K+', label: 'Communities' },
  ];

  const pricing = [
    { tier: 'Free', price: 0, period: '', features: ['5 exchanges/month', 'Basic matching', 'Community access', 'Profile page'], cta: 'Join Free' },
    { tier: 'Active', price: annual ? 1.99 : 2.99, period: '/mo', features: ['Unlimited exchanges', 'Priority matching', 'Advanced scheduling', 'Trust badge', 'Analytics'], cta: 'Get Active', popular: true },
    { tier: 'Community', price: annual ? 14.99 : 19.99, period: '/mo', features: ['Organization tools', 'Community analytics', 'Custom categories', 'All Active features', 'Admin dashboard'], cta: 'Build Community' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⏳</span>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">TimeBank</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Skills</a>
            <a href="#" className="hover:text-white transition">About</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">Sign In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90 transition font-medium">Join Free</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 flex flex-col gap-3">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white">Skills</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <button className="mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 font-medium">Join Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-56 h-56 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium">
            🤝 180K+ hours exchanged
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Trade Skills.{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Not Dollars.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Exchange your time and skills with your community. Teach guitar for 1 hour, earn 1 TimeCredit. Use it for plumbing, tutoring, cooking lessons, or dog walking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-indigo-500/25">
              Start Trading Skills
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-900 transition">
              Browse Skills
            </button>
          </div>
          {/* Interactive Demo */}
          <div className="mx-auto max-w-lg rounded-2xl border border-gray-800 bg-gray-900/80 p-6">
            <p className="text-sm text-gray-400 mb-4">🎓 Try it — pick a skill to trade:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setDemoSkill(skill === demoSkill ? null : skill)}
                  className={`px-3 py-1.5 rounded-full text-sm transition border ${demoSkill === skill ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300' : 'border-gray-700 text-gray-400 hover:border-indigo-500/50'}`}
                >
                  {skill}
                </button>
              ))}
            </div>
            {demoSkill && (
              <div className="text-left space-y-2 p-4 rounded-xl bg-black/50 border border-gray-800 text-sm animate-in">
                <p className="text-indigo-400">✨ Offering: <span className="text-white font-medium">{demoSkill}</span></p>
                <p className="text-violet-400">⏱️ Earn: <span className="text-white font-medium">1 TimeCredit / hour</span></p>
                <p className="text-green-400">🎯 Matches: <span className="text-white">3 people near you need this skill!</span></p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">A New Way to <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Exchange Value</span></h2>
          <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">Your time is valuable. Trade it fairly with people who need what you offer.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-indigo-500/40 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fair Pricing for <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">Fair Trading</span></h2>
          <p className="text-gray-400 mb-8">The platform is about sharing — our pricing reflects that.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-indigo-500' : 'bg-gray-700'}`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : ''}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-indigo-400 text-xs">Save 33%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className={`p-8 rounded-2xl border ${p.popular ? 'border-indigo-500 bg-gray-900 shadow-lg shadow-indigo-500/10 relative' : 'border-gray-800 bg-gray-900/60'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full text-xs font-bold">MOST POPULAR</div>}
                <h3 className="text-xl font-bold mb-2">{p.tier}</h3>
                <div className="mb-6"><span className="text-4xl font-extrabold">${p.price}</span><span className="text-gray-400">{p.period}</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-indigo-400">✓</span>{feat}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? 'bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90' : 'border border-gray-700 hover:bg-gray-800'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">⏳</span>
            <span className="font-bold bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">TimeBank</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Help</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 TimeBank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
