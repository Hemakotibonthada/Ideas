'use client';

import { useState } from 'react';

export default function NoiseMapLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

  const prices = annual
    ? { free: '$0', resident: '$1.99', realEstate: '$7.99' }
    : { free: '$0', resident: '$2.99', realEstate: '$9.99' };

  const blocks = [
    { id: 0, name: 'Elm St & 3rd Ave', noise: 34, label: '🟢 Very Quiet', color: 'text-green-400', bg: 'bg-green-500/10', sources: ['Residential area', 'Tree-lined street', 'Low traffic'] },
    { id: 1, name: 'Main St & Broadway', noise: 72, label: '🟠 Loud', color: 'text-orange-400', bg: 'bg-orange-500/10', sources: ['Heavy traffic', 'Bus route', 'Street vendors'] },
    { id: 2, name: 'Park Ave & 5th', noise: 45, label: '🟡 Moderate', color: 'text-yellow-400', bg: 'bg-yellow-500/10', sources: ['Park nearby', 'Some pedestrian traffic', 'Occasional events'] },
    { id: 3, name: 'Industrial Blvd', noise: 88, label: '🔴 Very Loud', color: 'text-red-400', bg: 'bg-red-500/10', sources: ['Construction zone', 'Factory operations', 'Heavy trucks'] },
    { id: 4, name: 'Lakeside Dr', noise: 28, label: '🟢 Silent', color: 'text-emerald-400', bg: 'bg-emerald-500/10', sources: ['Waterfront', 'No through traffic', 'Nature sounds only'] },
    { id: 5, name: 'College Row', noise: 61, label: '🟡 Moderate-Loud', color: 'text-amber-400', bg: 'bg-amber-500/10', sources: ['Student nightlife', 'Weekend noise spikes', 'Quiet mornings'] },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">N</div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">NoiseMap</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#explore" className="hover:text-white transition">Explore</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition">Open Map</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 bg-black">
            <a href="#features" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#explore" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Explore</a>
            <a href="#pricing" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium">Open Map</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-24 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-6">🔊 12M+ noise readings collected</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Hear the City</span>
            <br />Before You Move In
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Crowdsourced noise level mapping for every block in every city. Find quiet apartments, peaceful cafés, and silent study spots. Rate and report noise levels in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition">Explore the Map</button>
            <button className="px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-900 transition">Check an Address</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
          {[ ['12M+', 'Noise Readings'], ['340+', 'Cities Mapped'], ['89K+', 'Quiet Spots Found'], ['2.1M+', 'Contributors'] ].map(([v, l]) => (
            <div key={l} className="py-8 px-6 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{v}</div>
              <div className="text-sm text-gray-500 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Map the Sound of Your City</h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Real data from real people. Know what you&apos;re getting into before you sign a lease.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🗺️', title: 'Noise Heatmap', desc: 'Interactive map showing decibel levels by block, updated in real-time by contributors.' },
              { icon: '🏠', title: 'Apartment Score', desc: 'Get a noise rating for any address before you sign a lease. Daytime and nighttime scores.' },
              { icon: '🤫', title: 'Quiet Spots', desc: 'Find the quietest cafés, parks, and libraries near you — perfect for focused work.' },
              { icon: '📢', title: 'Real-Time Reporting', desc: 'Report noise from construction, traffic, or parties. Community-verified data you can trust.' },
              { icon: '📈', title: 'Trend Analysis', desc: 'Hourly and daily noise patterns for any neighborhood. See how noise changes over time.' },
              { icon: '🔔', title: 'Alert Zones', desc: 'Get notified when your area gets unusually loud or when new construction starts nearby.' },
            ].map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl bg-gray-950 border border-gray-800 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-300 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Noise Explorer */}
      <section id="explore" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Explore Noise Levels</h2>
          <p className="text-gray-400 text-center mb-12">Click a block to see its noise profile and sources.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {blocks.map((block) => (
              <button
                key={block.id}
                onClick={() => setSelectedBlock(selectedBlock === block.id ? null : block.id)}
                className={`p-4 rounded-xl border text-left transition-all ${selectedBlock === block.id ? 'border-indigo-500 bg-indigo-500/10 shadow-lg shadow-indigo-500/10' : 'border-gray-800 bg-gray-900 hover:border-gray-700'}`}
              >
                <div className="text-sm font-medium text-white mb-1">{block.name}</div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-white">{block.noise}</div>
                  <div className="text-xs text-gray-500">dB</div>
                </div>
                <div className={`text-xs mt-1 ${block.color}`}>{block.label}</div>
              </button>
            ))}
          </div>
          {selectedBlock !== null && (
            <div className="rounded-2xl border border-gray-800 bg-black p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{blocks[selectedBlock].name}</h3>
                <span className={`text-sm px-3 py-1 rounded-full ${blocks[selectedBlock].bg} ${blocks[selectedBlock].color}`}>
                  {blocks[selectedBlock].noise} dB — {blocks[selectedBlock].label}
                </span>
              </div>
              <div className="mb-4">
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-500 transition-all duration-500"
                    style={{ width: `${blocks[selectedBlock].noise}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>0 dB (Silent)</span>
                  <span>100 dB (Very Loud)</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                <div className="font-medium text-gray-300 mb-2">Noise Sources:</div>
                <ul className="space-y-1">
                  {blocks[selectedBlock].sources.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-purple-400">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 text-center mb-8">Free to explore. Premium for deeper insights.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full p-1 transition ${annual ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-purple-400 text-xs">Save 33%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: prices.free, period: '', features: ['View noise heatmap', 'Basic address search', 'Community reports', 'Contribute readings'], cta: 'Start Free' },
              { name: 'Resident', price: prices.resident, period: '/mo', features: ['Apartment noise scores', 'Trend analysis', 'Alert zones', 'Quiet spot finder', 'Nighttime noise data'], cta: 'Go Resident', pop: true },
              { name: 'Real Estate', price: prices.realEstate, period: '/mo', features: ['API access', 'Bulk address scores', 'Building noise reports', 'Neighborhood analytics', 'White-label embeds'], cta: 'Contact Sales' },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 border ${p.pop ? 'border-indigo-500 bg-gradient-to-b from-indigo-500/10 to-transparent shadow-xl shadow-indigo-500/10' : 'border-gray-800 bg-gray-950'}`}>
                {p.pop && <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-gray-500 mb-1">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-purple-400 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${p.pop ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-900'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">N</div>
            <span className="font-bold text-lg">NoiseMap</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms</a>
            <a href="#" className="hover:text-gray-300 transition">API Docs</a>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 NoiseMap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
