'use client';
import { useState } from 'react';

export default function LostPetLanding() {
  const [annual, setAnnual] = useState(false);

  const price = (monthly: number) =>
    annual ? (monthly * 10).toFixed(2) : monthly.toFixed(2);
  const period = annual ? '/yr' : '/mo';

  const features = [
    {
      icon: '🚨',
      title: 'Instant Alerts',
      desc: 'One post alerts every LostPet user within 10 miles.',
    },
    {
      icon: '🤖',
      title: 'AI Photo Match',
      desc: 'Upload a photo, AI matches against found pet reports.',
    },
    {
      icon: '📄',
      title: 'Flyer Generator',
      desc: 'Create and share shareable lost pet flyers instantly.',
    },
    {
      icon: '🏠',
      title: 'Shelter Search',
      desc: 'Check if your pet was picked up by local shelters.',
    },
    {
      icon: '👥',
      title: 'Community Network',
      desc: 'Neighbors share sightings in real-time.',
    },
    {
      icon: '💾',
      title: 'Microchip Registry',
      desc: 'Link microchip to your profile for instant contact.',
    },
  ];

  const plans = [
    {
      name: 'Free',
      price: 0,
      badge: 'Core',
      items: ['All core features', 'Reuniting pets should be free', 'Community alerts'],
    },
    {
      name: 'Supporter',
      price: 2.99,
      badge: 'Popular',
      items: ['Premium badges', 'Priority alerts', 'Analytics dashboard'],
    },
    {
      name: 'Shelter',
      price: 19.99,
      badge: 'Enterprise',
      items: ['Bulk management', 'API access', 'Intake tools'],
    },
  ];

  const stats = [
    { value: '34K+', label: 'Pets Reunited' },
    { value: '890K+', label: 'Community Members' },
    { value: '3.2 hr', label: 'Avg Find Time' },
    { value: '200+', label: 'Cities Covered' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          LostPet
        </span>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#stats" className="hover:text-white transition">Impact</a>
        </div>
        <button className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 transition">
          Report Now
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
          Bring Them{' '}
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Home
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Report a lost pet and instantly alert thousands of nearby neighbors. AI-powered photo matching
          helps identify found pets. Reuniting families, one pet at a time.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3.5 rounded-full font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 transition text-lg">
            Report Lost Pet
          </button>
          <button className="px-8 py-3.5 rounded-full font-bold border border-gray-700 text-gray-300 hover:border-red-500 hover:text-white transition text-lg">
            I Found a Pet
          </button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-black bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          Every Tool to{' '}
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Find Your Pet
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-gray-950 border border-gray-800 hover:border-red-500/50 transition"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Free for{' '}
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Everyone
          </span>
        </h2>
        <p className="text-center text-gray-500 mb-10">Core features are always free. Support us to unlock extras.</p>

        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 bg-gray-950 rounded-full px-4 py-2 border border-gray-800">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                annual ? 'bg-red-500' : 'bg-gray-700'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  annual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual <span className="text-orange-400 text-xs font-semibold">Save 17%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 border ${
                p.badge === 'Popular'
                  ? 'border-red-500 bg-gray-950/80'
                  : 'border-gray-800 bg-gray-950'
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-black">${p.price === 0 ? '0' : price(p.price)}</span>
                <span className="text-gray-500 text-sm">{p.price === 0 ? '' : period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-orange-400">✓</span> {item}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-full font-semibold text-sm transition ${
                  p.badge === 'Popular'
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90'
                    : 'border border-gray-700 text-gray-300 hover:border-red-500'
                }`}
              >
                {p.price === 0 ? 'Get Started Free' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            LostPet
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 LostPet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
