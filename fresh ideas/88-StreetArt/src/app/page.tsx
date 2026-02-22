'use client';
import { useState } from 'react';

export default function StreetArtLanding() {
  const [annual, setAnnual] = useState(false);

  const stats = [
    { value: '340K+', label: 'Artworks Mapped' },
    { value: '89K+', label: 'Artists Featured' },
    { value: '45K+', label: 'Tours Created' },
    { value: '200+', label: 'Cities' },
  ];

  const features = [
    { title: 'Art Map', desc: 'Interactive map of street art and murals near you — filter by style, artist, medium, and neighborhood.' },
    { title: 'Photo Archive', desc: 'Photograph and catalog art with GPS location, artist info, date, and condition — building a living archive.' },
    { title: 'Walking Tours', desc: 'Curated and community-created street art walking tours with turn-by-turn navigation.' },
    { title: 'Artist Profiles', desc: 'Learn about artists, follow their work, see their portfolio, and support them directly.' },
    { title: 'Before / After', desc: 'Track how art changes and ages over time — document restorations, buffing, and evolving pieces.' },
    { title: 'AR Preview', desc: 'View art overlaid on walls before it's painted — artists can pitch murals to building owners in AR.' },
  ];

  const featureIcons = ['🗺️', '📸', '🚶', '🎨', '🔄', '👓'];

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      features: ['Browse art map', 'Photograph & upload', 'Basic walking tours', 'Community access'],
      cta: 'Explore Free',
      highlight: false,
    },
    {
      name: 'Artist',
      monthly: 3.99,
      yearly: 39.99,
      features: ['Create custom tours', 'Artist profile tools', 'Upload analytics', 'Priority listing'],
      cta: 'Join as Artist',
      highlight: true,
    },
    {
      name: 'Curator',
      monthly: 7.99,
      yearly: 79.99,
      features: ['API access', 'Organization dashboard', 'Sponsored tour slots', 'Bulk export & reports'],
      cta: 'Become Curator',
      highlight: false,
    },
  ];

  const price = (p: { monthly: number; yearly: number }) =>
    annual ? p.yearly : p.monthly;
  const period = annual ? '/yr' : '/mo';

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            StreetArt
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Community</a>
          </div>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-500 text-sm font-semibold hover:opacity-90 transition">
            Open Map
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-fuchsia-500/30 text-fuchsia-400 text-sm mb-6">
            🎨 The world's gallery is outside
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Art Is{' '}
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Everywhere
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Discover murals, graffiti, and installations around you. Photograph, map, and share street art.
            Create walking tours. Support local artists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-500 font-semibold hover:opacity-90 transition">
              Explore Nearby Art
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition">
              Browse Tours
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-y border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Discover, document,{' '}
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">celebrate</span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            Tools for art lovers, photographers, artists, and curators to explore the outdoor gallery.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={f.title} className="p-6 rounded-2xl border border-white/10 hover:border-fuchsia-500/40 bg-white/5 transition group">
                <div className="text-3xl mb-4">{featureIcons[i]}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-fuchsia-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-transparent via-fuchsia-950/20 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support the art. Pick your plan.</h2>
          <p className="text-gray-500 mb-8">Free to explore. Upgrade to create and curate.</p>
          <div className="inline-flex items-center gap-3 mb-12 bg-white/5 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-fuchsia-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Annually
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border text-left transition ${
                  plan.highlight
                    ? 'border-fuchsia-500 bg-fuchsia-500/10 scale-105'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="text-4xl font-bold my-4">
                  ${price(plan).toFixed(2)}
                  {price(plan) > 0 && <span className="text-base font-normal text-gray-500">{period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-fuchsia-400 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-fuchsia-500 to-purple-500 hover:opacity-90'
                      : 'border border-white/20 hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-lg font-bold bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            StreetArt
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Artists</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 StreetArt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
