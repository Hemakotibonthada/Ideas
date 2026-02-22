'use client';

import { useState } from 'react';

export default function TravelMateLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [destination, setDestination] = useState('');
  const [showItinerary, setShowItinerary] = useState(false);

  const prices = annual
    ? { free: '$0', explorer: '$3.99', nomad: '$7.99' }
    : { free: '$0', explorer: '$5.99', nomad: '$9.99' };

  const sampleItinerary = [
    { day: 'Day 1', items: ['✈️ Arrive at Lisbon Airport — Transfer to Alfama', '🏨 Check in at Boutique Hotel Alfama', '🍽️ Dinner at Time Out Market (hidden floor)'] },
    { day: 'Day 2', items: ['🌅 Sunrise at Miradouro da Graça', '🚃 Tram 28 to Belém (skip the line tip)', '🍰 Pastéis de Belém (original shop, go before 9AM)'] },
    { day: 'Day 3', items: ['🏖️ Day trip to Cascais by train', '🏄 Surf lesson at Guincho Beach', '🌅 Sunset dinner at Boca do Inferno cliff'] },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold text-lg">T</div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">TravelMate</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Try It</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-medium hover:shadow-lg hover:shadow-orange-500/25 transition">Plan a Trip</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 bg-black">
            <a href="#features" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Try It</a>
            <a href="#pricing" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-medium">Plan a Trip</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm mb-6">🌍 2.8M+ trips planned worldwide</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">Plan Less.</span>
            <br />Experience More.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            AI builds full trip itineraries based on your budget, interests, travel style, and local events. Real-time updates, offline maps, and hidden gem recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/30 transition">Plan Your First Trip</button>
            <button className="px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-900 transition">See Examples</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
          {[ ['2.8M+', 'Trips Planned'], ['$340', 'Avg Saved/Trip'], ['195+', 'Countries'], ['89K+', 'Hidden Gems'] ].map(([v, l]) => (
            <div key={l} className="py-8 px-6 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">{v}</div>
              <div className="text-sm text-gray-500 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">AI-Powered Travel Planning</h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">From inspiration to itinerary in minutes, not hours.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI Itinerary', desc: 'Full day-by-day plans customized to your preferences, pace, and travel style.' },
              { icon: '💰', title: 'Budget Optimizer', desc: 'Find the best flights, hotels, and activities that fit perfectly within your budget.' },
              { icon: '💎', title: 'Hidden Gems', desc: 'Discover incredible places tourists never find — curated by locals and seasoned travelers.' },
              { icon: '⚡', title: 'Real-Time Updates', desc: 'Flight delays, weather alerts, and event changes pushed to you instantly.' },
              { icon: '📴', title: 'Offline Mode', desc: 'Download maps and your full itinerary for offline access — even in remote areas.' },
              { icon: '👥', title: 'Group Planning', desc: 'Collaborate on trip plans with travel companions. Vote on activities, split costs.' },
            ].map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl bg-gray-950 border border-gray-800 hover:border-orange-500/50 transition-all hover:shadow-lg hover:shadow-orange-500/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-300 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-24 px-6 bg-gray-950/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Try the AI Planner</h2>
          <p className="text-gray-400 text-center mb-12">Type a destination and see what TravelMate builds for you.</p>
          <div className="rounded-2xl border border-gray-800 bg-black p-6 md:p-8">
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                value={destination}
                onChange={(e) => { setDestination(e.target.value); setShowItinerary(false); }}
                placeholder="Where do you want to go? (e.g., Lisbon)"
                className="flex-1 px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
              />
              <button
                onClick={() => setShowItinerary(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition"
              >
                Plan ✨
              </button>
            </div>
            {showItinerary && (
              <div className="space-y-4 animate-in">
                <div className="text-sm text-orange-400 font-medium mb-2">✨ AI Itinerary for {destination || 'Lisbon'} — 3 days</div>
                {sampleItinerary.map((day) => (
                  <div key={day.day} className="p-4 rounded-xl bg-gray-900 border border-gray-800">
                    <div className="text-sm font-bold text-orange-300 mb-3">{day.day}</div>
                    <div className="space-y-2">
                      {day.items.map((item, i) => (
                        <div key={i} className="text-sm text-gray-300 pl-2 border-l-2 border-orange-500/30 py-1">{item}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!showItinerary && (
              <div className="text-center py-12 text-gray-600">
                <div className="text-4xl mb-3">🗺️</div>
                <p className="text-sm">Enter a destination and hit Plan to see a sample itinerary</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Adventure at Any Budget</h2>
          <p className="text-gray-400 text-center mb-8">Start planning for free. Upgrade for unlimited adventures.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full p-1 transition ${annual ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-yellow-400 text-xs">Save 33%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: prices.free, period: '', features: ['1 trip per month', 'Basic AI itinerary', 'Standard recommendations', 'Community reviews'], cta: 'Start Free' },
              { name: 'Explorer', price: prices.explorer, period: '/mo', features: ['Unlimited trips', 'Hidden gems access', 'Budget optimization', 'Real-time updates', 'Flight price alerts'], cta: 'Start Exploring', pop: true },
              { name: 'Nomad', price: prices.nomad, period: '/mo', features: ['Everything in Explorer', 'Group planning tools', 'Full offline mode', 'Concierge support', 'Travel insurance deals'], cta: 'Go Nomad' },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 border ${p.pop ? 'border-orange-500 bg-gradient-to-b from-orange-500/10 to-transparent shadow-xl shadow-orange-500/10' : 'border-gray-800 bg-gray-950'}`}>
                {p.pop && <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-gray-500 mb-1">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-yellow-400 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${p.pop ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black hover:shadow-lg hover:shadow-orange-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-900'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-bold">T</div>
            <span className="font-bold text-lg">TravelMate</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms</a>
            <a href="#" className="hover:text-gray-300 transition">Blog</a>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 TravelMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
