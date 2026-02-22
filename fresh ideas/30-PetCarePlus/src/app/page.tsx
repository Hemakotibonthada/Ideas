'use client';

import { useState } from 'react';

export default function PetCarePlusLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedPet, setSelectedPet] = useState<string | null>(null);

  const petDemo = [
    { name: 'Bella', type: '🐕 Golden Retriever', age: '3 yrs', nextVax: 'Rabies — Mar 12', health: 98, diet: 'Active Adult' },
    { name: 'Whiskers', type: '🐈 Maine Coon', age: '5 yrs', nextVax: 'FVRCP — Apr 5', health: 92, diet: 'Indoor Formula' },
    { name: 'Coco', type: '🐦 Cockatiel', age: '2 yrs', nextVax: 'Polyomavirus — May 20', health: 95, diet: 'Seed & Pellet Mix' },
  ];

  const features = [
    { icon: '📋', title: 'Health Timeline', desc: 'Complete medical history for every pet — visits, treatments, medications, all in one place.' },
    { icon: '💉', title: 'Vaccine Tracker', desc: 'Never miss a vaccination with smart reminders sent days in advance.' },
    { icon: '🥗', title: 'Diet Planner', desc: 'Breed, age, and weight-specific nutrition plans tailored to your pet.' },
    { icon: '🩺', title: 'Symptom Checker', desc: 'AI checks symptoms against breed-specific conditions with advice on urgency.' },
    { icon: '🏥', title: 'Vet Finder', desc: 'Find nearby vets with ratings, availability, and direct booking.' },
    { icon: '🐾', title: 'Multi-Pet Dashboard', desc: 'Manage all your pets from one beautifully organized screen.' },
  ];

  const stats = [
    { value: '1.4M', label: 'Pets Tracked' },
    { value: '12K+', label: 'Breeds Supported' },
    { value: '890K+', label: 'Vet Reminders Sent' },
    { value: '4.9★', label: 'App Rating' },
  ];

  const pricing = [
    { tier: 'Free', price: 0, period: '', features: ['1 pet profile', 'Basic tracking', 'Vaccine reminders', 'Vet finder'], cta: 'Start Free' },
    { tier: 'PetLover', price: annual ? 2.99 : 3.99, period: '/mo', features: ['Up to 3 pets', 'Symptom checker', 'Diet planner', 'Health metrics', 'Priority support'], cta: 'Love Your Pets', popular: true },
    { tier: 'Shelter', price: annual ? 7.49 : 9.99, period: '/mo', features: ['Unlimited pets', 'Vet integration', 'Bulk features', 'All PetLover features', 'API access'], cta: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">PetCare+</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Breeds</a>
            <a href="#" className="hover:text-white transition">Vets</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">Sign In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 transition font-medium">Get Started</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 flex flex-col gap-3">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white">Breeds</a>
            <a href="#" className="text-gray-300 hover:text-white">Vets</a>
            <button className="mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 font-medium">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-28 left-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-44 right-1/4 w-56 h-56 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-medium">
            🐾 Trusted by 1.4M pet parents
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Because They Can&apos;t Tell You{' '}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">What&apos;s Wrong</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Complete pet health and wellness tracking. Vet visits, vaccinations, diet plans, exercise logs, and breed-specific health alerts. All in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-pink-500/25">
              Add Your Pet Free
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-900 transition">
              Explore Features
            </button>
          </div>
          {/* Interactive Pet Dashboard Demo */}
          <div className="mx-auto max-w-xl rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-400">🐾 Your Pet Dashboard</p>
              <span className="text-xs text-gray-600">Demo</span>
            </div>
            <div className="flex gap-2 mb-4">
              {petDemo.map((pet) => (
                <button
                  key={pet.name}
                  onClick={() => setSelectedPet(selectedPet === pet.name ? null : pet.name)}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm border transition ${
                    selectedPet === pet.name
                      ? 'border-pink-500 bg-pink-500/10 text-pink-300'
                      : 'border-gray-700 text-gray-400 hover:border-pink-500/40'
                  }`}
                >
                  {pet.type.split(' ')[0]} {pet.name}
                </button>
              ))}
            </div>
            {selectedPet && (() => {
              const pet = petDemo.find((p) => p.name === selectedPet)!;
              return (
                <div className="p-4 rounded-xl bg-black/50 border border-gray-800 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{pet.type} — {pet.name}</span>
                    <span className="text-xs text-gray-500">{pet.age}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">Health Score:</span>
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-500" style={{ width: `${pet.health}%` }} />
                    </div>
                    <span className="text-sm font-bold text-pink-400">{pet.health}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-400">💉</span>
                    <span className="text-gray-400">Next vaccine:</span>
                    <span className="text-white">{pet.nextVax}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">🥗</span>
                    <span className="text-gray-400">Diet plan:</span>
                    <span className="text-white">{pet.diet}</span>
                  </div>
                </div>
              );
            })()}
            {!selectedPet && (
              <div className="h-24 flex items-center justify-center text-gray-500 text-sm">
                👆 Select a pet above to see their dashboard
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-gray-800 bg-gray-900/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything for <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Happy, Healthy Pets</span></h2>
          <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">From vet visits to daily nutrition — PetCare+ has it all covered.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-pink-500/40 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans for <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Every Pet Parent</span></h2>
          <p className="text-gray-400 mb-8">Give your furry friends the care they deserve. Start free today.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-pink-500' : 'bg-gray-700'}`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : ''}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-pink-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className={`p-8 rounded-2xl border ${p.popular ? 'border-pink-500 bg-gray-900 shadow-lg shadow-pink-500/10 relative' : 'border-gray-800 bg-gray-900'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-xs font-bold">BEST FOR PETS</div>}
                <h3 className="text-xl font-bold mb-2">{p.tier}</h3>
                <div className="mb-6"><span className="text-4xl font-extrabold">${p.price}</span><span className="text-gray-400">{p.period}</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-pink-400">✓</span>{feat}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90' : 'border border-gray-700 hover:bg-gray-800'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐾</span>
            <span className="font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">PetCare+</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Support</a>
            <a href="#" className="hover:text-gray-300">Blog</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 PetCare+. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
