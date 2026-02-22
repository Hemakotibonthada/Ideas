'use client';

import { useState } from 'react';

export default function NeighborNetLanding() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<'tools' | 'skills' | 'events'>('tools');
  const [joinedItems, setJoinedItems] = useState<number[]>([]);

  const stats = [
    { value: '45K+', label: 'Neighborhoods' },
    { value: '1.2M', label: 'Items Shared' },
    { value: '28K+', label: 'Events Organized' },
    { value: '320K+', label: 'Neighbors Connected' },
  ];

  const features = [
    { title: 'Tool Library', desc: 'Borrow power tools, ladders, pressure washers, and more from neighbors. Why buy when you can borrow?', icon: '🔧' },
    { title: 'Skill Exchange', desc: 'Trade skills with your neighbors — tutoring for plumbing, cooking lessons for gardening help. Everyone wins.', icon: '🤝' },
    { title: 'Event Board', desc: 'Organize block parties, neighborhood cleanups, garage sales, and community gatherings in minutes.', icon: '🎉' },
    { title: 'Safety Alerts', desc: 'Neighborhood watch powered by real-time alerts. Report suspicious activity, package theft, and more.', icon: '🚨' },
    { title: 'Local Recommendations', desc: 'Vetted, neighbor-approved recommendations for plumbers, electricians, restaurants, and local services.', icon: '⭐' },
    { title: 'Community Projects', desc: 'Crowdfund neighborhood improvements — fix the park, paint the mural, build the garden. Together.', icon: '🏗️' },
  ];

  const tabContent = {
    tools: [
      { name: 'Power Drill Set', owner: 'Mike R. · 2 blocks away', available: true },
      { name: '24ft Extension Ladder', owner: 'Sarah K. · Next street', available: true },
      { name: 'Pressure Washer', owner: 'Tom B. · 3 blocks away', available: false },
      { name: 'Circular Saw', owner: 'Lisa M. · Same block', available: true },
    ],
    skills: [
      { name: 'Piano Lessons', owner: 'Emma W. · Music teacher', available: true },
      { name: 'Basic Plumbing', owner: 'Dave P. · Retired plumber', available: true },
      { name: 'Spanish Tutoring', owner: 'Maria G. · Native speaker', available: true },
      { name: 'Dog Training', owner: 'Jake F. · Certified trainer', available: false },
    ],
    events: [
      { name: 'Block Party — Sat, Mar 15', owner: '42 neighbors going', available: true },
      { name: 'Park Cleanup — Sun, Mar 9', owner: '28 volunteers signed up', available: true },
      { name: 'Garage Sale Weekend', owner: '15 households participating', available: true },
      { name: 'Movie Night — Fri, Mar 21', owner: '33 spots left', available: true },
    ],
  };

  const toggleJoin = (idx: number) => {
    setJoinedItems(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
  };

  const pricing = [
    { name: 'Free', price: '$0', period: '', features: ['Core community features', 'Tool borrowing', 'Event viewing', 'Safety alerts', 'Basic messaging'], cta: 'Join Free', highlight: false },
    { name: 'Neighbor+', price: isAnnual ? '$1.99' : '$2.99', period: '/mo', features: ['Premium listings', 'Event creation tools', 'Priority visibility', 'Read receipts', 'No ads'], cta: 'Upgrade', highlight: true },
    { name: 'Block Captain', price: isAnnual ? '$39.99' : '$49.99', period: '/yr', features: ['HOA management tools', 'Neighborhood analytics', 'Priority support', 'Custom branding', 'Everything in Neighbor+'], cta: 'Lead Your Block', highlight: false },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center font-bold text-sm text-black">NN</div>
            <span className="text-xl font-bold">NeighborNet</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#explore" className="hover:text-white transition">Explore</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-medium hover:opacity-90 transition">Join Community</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <a href="#explore" className="text-gray-400 hover:text-white">Explore</a>
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-medium">Join Community</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 text-teal-400 text-sm mb-6">🏘️ Hyperlocal Community</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Stronger Together, Block by Block
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Connect with your actual neighbors. Borrow tools, share skills, organize cleanups, report issues, and build the community you&apos;ve always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-teal-500/25">
              Find Your Neighborhood
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:border-gray-500 transition">
              Take a Tour
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Explore */}
      <section id="explore" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Explore Your Neighborhood</h2>
          <p className="text-gray-500 text-center mb-10">See what&apos;s available near you right now</p>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {(['tools', 'skills', 'events'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setJoinedItems([]); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === tab ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-black' : 'border border-gray-700 text-gray-400 hover:border-gray-500'}`}
              >
                {tab === 'tools' ? '🔧 Tools' : tab === 'skills' ? '🤝 Skills' : '🎉 Events'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-3">
            {tabContent[activeTab].map((item, i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-800 bg-gray-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-gray-700 transition">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.owner}</div>
                </div>
                <button
                  onClick={() => toggleJoin(i)}
                  disabled={!item.available}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition whitespace-nowrap ${
                    !item.available
                      ? 'border border-gray-700 text-gray-600 cursor-not-allowed'
                      : joinedItems.includes(i)
                        ? 'bg-teal-500/20 border border-teal-500 text-teal-400'
                        : 'border border-teal-500/30 text-teal-400 hover:bg-teal-500/10'
                  }`}
                >
                  {!item.available ? 'Unavailable' : joinedItems.includes(i) ? '✓ Requested' : activeTab === 'events' ? 'Join' : 'Request'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything Your Neighborhood Needs</h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">From sharing tools to organizing events, NeighborNet brings your community together.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-teal-500/50 transition-all duration-300 group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Community-Friendly Pricing</h2>
          <p className="text-gray-500 text-center mb-8">Core features are free forever. Upgrade for premium tools.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button className="w-12 h-6 rounded-full bg-gray-700 relative transition" onClick={() => setIsAnnual(!isAnnual)}>
              <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 absolute top-0.5 transition-all ${isAnnual ? 'left-6' : 'left-0.5'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-teal-400 text-xs">Save 33%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${p.highlight ? 'border-teal-500 bg-gradient-to-b from-teal-500/10 to-transparent' : 'border-gray-800 bg-gray-900/50'}`}>
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-gray-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-teal-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition ${p.highlight ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-black hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-gray-500'}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center font-bold text-sm text-black">NN</div>
            <span className="font-bold">NeighborNet</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 NeighborNet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
