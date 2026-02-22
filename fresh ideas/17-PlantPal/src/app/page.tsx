'use client';

import { useState } from 'react';

export default function PlantPalLanding() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [demoPlant, setDemoPlant] = useState<string | null>(null);

  const stats = [
    { value: '25K+', label: 'Species Identified' },
    { value: '92%', label: 'Diagnosis Accuracy' },
    { value: '1.8M', label: 'Plants Saved' },
    { value: '340K+', label: 'Gardeners' },
  ];

  const features = [
    { title: 'Plant Identifier', desc: 'Snap a photo of any plant and instantly know the species, common names, and care requirements.', icon: '📸' },
    { title: 'Disease Diagnosis', desc: 'AI detects pests, root rot, nutrient deficiencies, and over 200 common plant diseases with treatment plans.', icon: '🔬' },
    { title: 'Smart Watering', desc: 'Personalized watering schedules based on your plant type, season, local weather, and indoor conditions.', icon: '💧' },
    { title: 'Care Calendar', desc: 'Never miss a feeding, pruning, or repotting session. Automated reminders tailored to each plant.', icon: '📅' },
    { title: 'Garden Journal', desc: 'Track your plant growth with timestamped photos. Watch your garden flourish over weeks and months.', icon: '📓' },
    { title: 'Community', desc: 'Share tips, ask questions, and get advice from expert botanists and fellow plant enthusiasts.', icon: '🌿' },
  ];

  const demoPlants = ['🌵 Cactus', '🌻 Sunflower', '🌿 Monstera', '🌺 Hibiscus'];

  const pricing = [
    { name: 'Free', price: '$0', period: '', features: ['5 IDs per month', 'Basic care tips', 'Community access', 'Single plant profile'], cta: 'Start Free', highlight: false },
    { name: 'Green Thumb', price: isAnnual ? '$3.49' : '$4.99', period: '/mo', features: ['Unlimited plant IDs', 'Disease diagnosis', 'Smart reminders', 'Garden journal', 'No ads'], cta: 'Go Green', highlight: true },
    { name: 'Botanist', price: isAnnual ? '$6.49' : '$8.99', period: '/mo', features: ['Expert Q&A access', 'Full growth analytics', 'Multi-garden support', 'Priority diagnosis', 'Everything in Green Thumb'], cta: 'Go Pro', highlight: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-lime-500 flex items-center justify-center font-bold text-sm text-black">PP</div>
            <span className="text-xl font-bold">PlantPal</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Try It</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-lime-500 text-black font-medium hover:opacity-90 transition">Download</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-800 bg-black px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <a href="#demo" className="text-gray-400 hover:text-white">Try It</a>
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-lime-500 text-black font-medium">Download</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 text-green-400 text-sm mb-6">🌱 Your AI Plant Doctor</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">
            Never Kill a Plant Again
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Identify any plant from a photo. Get personalized care schedules, disease diagnosis, and watering reminders. Your AI plant doctor is always on call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-lime-500 text-black font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-green-500/25">
              Identify Your First Plant
            </button>
            <button className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:border-gray-500 transition">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Try the Identifier</h2>
          <p className="text-gray-500 mb-8">Click a plant to see instant AI identification</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {demoPlants.map((plant, i) => (
              <button
                key={i}
                onClick={() => setDemoPlant(demoPlant === plant ? null : plant)}
                className={`px-6 py-3 rounded-xl border text-lg transition-all ${demoPlant === plant ? 'border-green-500 bg-green-500/10 scale-105' : 'border-gray-700 hover:border-gray-500'}`}
              >
                {plant}
              </button>
            ))}
          </div>
          {demoPlant && (
            <div className="p-6 rounded-2xl border border-green-500/30 bg-green-500/5 text-left animate-in">
              <div className="text-green-400 text-sm font-medium mb-2">✓ Identified</div>
              <div className="text-2xl font-bold mb-1">{demoPlant}</div>
              <p className="text-gray-400 text-sm">Water every 5-7 days · Indirect sunlight · Humidity 40-60% · Feed monthly in spring/summer</p>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Complete Plant Care Toolkit</h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">From identification to long-term care, PlantPal has everything your garden needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                onClick={() => setSelectedFeature(i)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${selectedFeature === i ? 'border-green-500 bg-green-500/5 scale-[1.02]' : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'}`}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Grow With the Right Plan</h2>
          <p className="text-gray-500 text-center mb-8">Start free. Upgrade when your garden does.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button className="w-12 h-6 rounded-full bg-gray-700 relative transition" onClick={() => setIsAnnual(!isAnnual)}>
              <div className={`w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-lime-500 absolute top-0.5 transition-all ${isAnnual ? 'left-6' : 'left-0.5'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-green-400 text-xs">Save 30%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${p.highlight ? 'border-green-500 bg-gradient-to-b from-green-500/10 to-transparent' : 'border-gray-800 bg-gray-900/50'}`}>
                <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price}</span>
                  <span className="text-gray-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✓</span> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition ${p.highlight ? 'bg-gradient-to-r from-green-500 to-lime-500 text-black hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:border-gray-500'}`}>
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-lime-500 flex items-center justify-center font-bold text-sm text-black">PP</div>
            <span className="font-bold">PlantPal</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 PlantPal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
