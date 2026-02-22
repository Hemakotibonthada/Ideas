'use client';

import { useState } from 'react';

export default function AccessRouteLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [routeType, setRouteType] = useState<'wheelchair' | 'walker' | 'stroller'>('wheelchair');

  const prices = annual
    ? { free: '$0', plus: '$2.99', advocate: '$5.99' }
    : { free: '$0', plus: '$3.99', advocate: '$7.99' };

  const routeDetails: Record<string, { from: string; to: string; distance: string; time: string; steps: string[] }> = {
    wheelchair: {
      from: 'Central Station',
      to: 'City Library',
      distance: '0.8 mi',
      time: '12 min',
      steps: [
        '♿ Exit via Elevator B (platform level → street)',
        '➡️ Turn right on Oak St — full curb cuts both sides',
        '🚦 Accessible crosswalk at Oak & Main (audio signal)',
        '➡️ Continue on Main St — smooth sidewalk, 5ft wide',
        '🔵 Ramp entrance at Library south door (automatic)',
      ],
    },
    walker: {
      from: 'Central Station',
      to: 'City Library',
      distance: '0.7 mi',
      time: '15 min',
      steps: [
        '🚶 Exit via Ramp A (gradual slope, handrails)',
        '➡️ Turn right on Oak St — benches at 200ft intervals',
        '🚦 Crosswalk at Oak & Main (extended timing available)',
        '📍 Rest bench at Main & 2nd Ave (halfway point)',
        '🏛️ Library front entrance — powered door, flat entry',
      ],
    },
    stroller: {
      from: 'Central Station',
      to: 'City Library',
      distance: '0.8 mi',
      time: '10 min',
      steps: [
        '🚼 Exit via Elevator B or Ramp A',
        '➡️ Turn right on Oak St — wide sidewalk, no steps',
        '🚦 Crosswalk at Oak & Main (pedestrian island midway)',
        '🌳 Shortcut through Park — paved path, shaded',
        '🏛️ Library north entrance — wide double doors, flat',
      ],
    },
  };

  const current = routeDetails[routeType];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">A</div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AccessRoute</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Try It</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition">Navigate Now</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 bg-gray-950">
            <a href="#features" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Try It</a>
            <a href="#pricing" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium">Navigate Now</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-28 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">♿ 890K+ accessible routes mapped</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Every Route.</span>
            <br />Every Ability.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Accessibility-first navigation for wheelchair users, seniors, and people with mobility challenges. Crowdsourced data on ramps, elevators, curb cuts, and accessible entrances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition">Find Accessible Route</button>
            <button className="px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-800 transition">Contribute Data</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
          {[ ['890K+', 'Accessible Routes'], ['45K+', 'Ramps Mapped'], ['120+', 'Cities'], ['340K+', 'Contributors'] ].map(([v, l]) => (
            <div key={l} className="py-8 px-6 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{v}</div>
              <div className="text-sm text-gray-500 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Navigate With Confidence</h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Built for and by the accessibility community.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '♿', title: 'Accessible Navigation', desc: 'Routes prioritize ramps, elevators, and flat terrain. Avoid stairs, steep hills, and narrow paths.' },
              { icon: '⭐', title: 'Venue Ratings', desc: 'Accessibility ratings for restaurants, stores, and offices — door width, ramps, restrooms, and more.' },
              { icon: '👥', title: 'Crowdsourced Data', desc: 'Community reports on new ramps, broken elevators, and construction barriers — updated in real-time.' },
              { icon: '⚠️', title: 'Obstacle Alerts', desc: 'Real-time alerts for construction, broken paths, and temporary barriers along your route.' },
              { icon: '🏥', title: 'Indoor Maps', desc: 'Accessible paths inside malls, hospitals, and airports. Find elevators, ramps, and accessible restrooms.' },
              { icon: '📍', title: 'Companion Mode', desc: 'Share your route and location with a companion in real-time for added safety and coordination.' },
            ].map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Route Demo */}
      <section id="demo" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">See Accessible Routes</h2>
          <p className="text-gray-400 text-center mb-12">Choose your mobility type to see a personalized route.</p>
          <div className="flex gap-3 justify-center mb-8">
            {([
              { key: 'wheelchair', icon: '♿', label: 'Wheelchair' },
              { key: 'walker', icon: '🚶', label: 'Walker' },
              { key: 'stroller', icon: '🚼', label: 'Stroller' },
            ] as const).map((t) => (
              <button
                key={t.key}
                onClick={() => setRouteType(t.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${routeType === t.key ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'}`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <span className="text-sm text-gray-500">From:</span>
                <span className="ml-2 font-semibold text-white">{current.from}</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-cyan-400">{current.distance}</span>
                <span className="text-gray-600">|</span>
                <span className="text-blue-400">{current.time}</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">To:</span>
                <span className="ml-2 font-semibold text-white">{current.to}</span>
              </div>
            </div>
            <div className="space-y-3">
              {current.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-900 border border-gray-800">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-xs text-white font-bold flex-shrink-0 mt-0.5">{i + 1}</div>
                  <span className="text-sm text-gray-300">{step}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Route verified by 42 contributors • Last updated 2 hours ago
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Accessible to All</h2>
          <p className="text-gray-400 text-center mb-8">Core navigation is always free. Premium adds powerful extras.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full p-1 transition ${annual ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-cyan-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: prices.free, period: '', features: ['Basic accessible navigation', 'Community venue reviews', 'Report obstacles', 'Companion mode'], cta: 'Start Free' },
              { name: 'Plus', price: prices.plus, period: '/mo', features: ['Indoor maps access', 'Real-time obstacle alerts', 'Offline route downloads', 'Priority route updates', 'Detailed venue reports'], cta: 'Go Plus', pop: true },
              { name: 'Advocate', price: prices.advocate, period: '/mo', features: ['Organization tools', 'Data API access', 'Bulk venue audits', 'Priority support', 'Custom accessibility reports'], cta: 'Become Advocate' },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 border ${p.pop ? 'border-cyan-500 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-xl shadow-cyan-500/10' : 'border-gray-800 bg-gray-900'}`}>
                {p.pop && <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-gray-500 mb-1">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${p.pop ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">A</div>
            <span className="font-bold text-lg">AccessRoute</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms</a>
            <a href="#" className="hover:text-gray-300 transition">Accessibility</a>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 AccessRoute. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
