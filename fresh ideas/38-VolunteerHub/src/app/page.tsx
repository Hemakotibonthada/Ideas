'use client';

import { useState } from 'react';

export default function VolunteerHubLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const prices = annual
    ? { free: '$0', plus: '$1.99', org: '$14.99' }
    : { free: '$0', plus: '$2.99', org: '$19.99' };

  const skillMatches: Record<string, { title: string; org: string; time: string }[]> = {
    Teaching: [
      { title: 'After-School Math Tutor', org: 'City Youth Center', time: 'Mon/Wed 3-5PM' },
      { title: 'ESL Conversation Partner', org: 'Immigrant Aid Society', time: 'Sat 10AM-12PM' },
      { title: 'STEM Workshop Leader', org: 'Girls Who Code Local', time: 'Thu 4-6PM' },
    ],
    Coding: [
      { title: 'Website Builder for Shelter', org: 'Hope House', time: 'Flexible / Remote' },
      { title: 'App Maintenance Volunteer', org: 'Food Bank Network', time: 'Weekends' },
      { title: 'Data Analyst for Impact Reports', org: 'Green Earth Fund', time: 'Flexible' },
    ],
    Cooking: [
      { title: 'Community Kitchen Helper', org: 'Meals on Wheels', time: 'Tue/Thu 8AM-12PM' },
      { title: 'Nutrition Workshop Leader', org: 'Community Health Center', time: 'Sat 2-4PM' },
      { title: 'Food Drive Organizer', org: 'City Food Bank', time: 'Monthly events' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-lime-500 flex items-center justify-center text-white font-bold text-lg">V</div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">VolunteerHub</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#match" className="hover:text-white transition">Find Match</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-lime-500 text-black font-medium hover:shadow-lg hover:shadow-green-500/25 transition">Join Now</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 bg-gray-950">
            <a href="#features" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#match" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Find Match</a>
            <a href="#pricing" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-lime-500 text-black font-medium">Join Now</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-32 right-1/3 w-80 h-80 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 text-sm mb-6">🌱 1.2M+ volunteer hours logged</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">Give Time.</span>
            <br />Change Lives.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Find volunteer opportunities that match your skills, schedule, and passions. Track impact hours, earn community credits, and build your social resume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-lime-500 text-black font-semibold text-lg hover:shadow-xl hover:shadow-green-500/30 transition">Start Volunteering</button>
            <button className="px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-800 transition">For Organizations</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
          {[ ['1.2M+', 'Volunteer Hours'], ['45K+', 'Opportunities'], ['28K+', 'Organizations'], ['320K+', 'Volunteers'] ].map(([v, l]) => (
            <div key={l} className="py-8 px-6 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">{v}</div>
              <div className="text-sm text-gray-500 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Make Every Hour Count</h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Tools that connect good people to great causes.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Smart Matching', desc: 'AI matches your skills and availability to the perfect volunteer opportunities near you.' },
              { icon: '📊', title: 'Impact Tracker', desc: 'Log hours, see your cumulative community impact, and track causes you\'ve supported.' },
              { icon: '📄', title: 'Social Resume', desc: 'Build a shareable volunteer portfolio perfect for college apps and job applications.' },
              { icon: '👥', title: 'Team Events', desc: 'Organize group volunteering events with friends, family, or coworkers in minutes.' },
              { icon: '🏢', title: 'Organization Dashboard', desc: 'Nonprofits can post opportunities, manage volunteers, and track program outcomes.' },
              { icon: '🏆', title: 'Reward System', desc: 'Earn badges and community credits for reaching volunteer milestones.' },
            ].map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-lime-500/20 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-300 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Skill Matching Demo */}
      <section id="match" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Find Your Match</h2>
          <p className="text-gray-400 text-center mb-12">Select a skill to see matching opportunities near you.</p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['Teaching', 'Coding', 'Cooking'].map((skill) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${selectedSkill === skill ? 'bg-gradient-to-r from-green-500 to-lime-500 text-black shadow-lg shadow-green-500/20' : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'}`}
              >
                {skill === 'Teaching' ? '📚' : skill === 'Coding' ? '💻' : '🍳'} {skill}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8 min-h-[280px]">
            {selectedSkill && skillMatches[selectedSkill] ? (
              <div className="space-y-4">
                <div className="text-sm text-green-400 font-medium">🎯 {skillMatches[selectedSkill].length} matches found for &quot;{selectedSkill}&quot;</div>
                {skillMatches[selectedSkill].map((m, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-green-500/30 transition flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-white">{m.title}</div>
                      <div className="text-sm text-gray-400 mt-1">{m.org}</div>
                    </div>
                    <div className="text-xs text-lime-400 bg-lime-500/10 px-3 py-1 rounded-full whitespace-nowrap">{m.time}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-gray-600">
                <div className="text-4xl mb-3">🤝</div>
                <p className="text-sm">Select a skill above to see matching opportunities</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Plans for Everyone</h2>
          <p className="text-gray-400 text-center mb-8">Free for volunteers. Affordable for organizations.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full p-1 transition ${annual ? 'bg-gradient-to-r from-green-500 to-lime-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-lime-400 text-xs">Save 33%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: prices.free, period: '', features: ['Browse opportunities', 'Log volunteer hours', 'Basic profile', 'Community reviews'], cta: 'Get Started' },
              { name: 'Volunteer+', price: prices.plus, period: '/mo', features: ['Smart skill matching', 'Social resume builder', 'Impact analytics', 'Badge rewards', 'Priority applications'], cta: 'Go Volunteer+', pop: true },
              { name: 'Organization', price: prices.org, period: '/mo', features: ['Post opportunities', 'Volunteer management', 'Impact analytics', 'Custom branding', 'Dedicated support'], cta: 'Start for Orgs' },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 border ${p.pop ? 'border-green-500 bg-gradient-to-b from-green-500/10 to-transparent shadow-xl shadow-green-500/10' : 'border-gray-800 bg-gray-900'}`}>
                {p.pop && <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-gray-500 mb-1">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-lime-400 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${p.pop ? 'bg-gradient-to-r from-green-500 to-lime-500 text-black hover:shadow-lg hover:shadow-green-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-lime-500 flex items-center justify-center text-white font-bold">V</div>
            <span className="font-bold text-lg">VolunteerHub</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms</a>
            <a href="#" className="hover:text-gray-300 transition">For Nonprofits</a>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 VolunteerHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
