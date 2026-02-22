'use client';
import { useState } from 'react';

export default function SnoreFixLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const price = (monthly: number) =>
    annual ? `$${(monthly * 10 / 12).toFixed(2)}` : `$${monthly.toFixed(2)}`;

  const features = [
    { icon: '🎤', title: 'Night Recording', desc: 'Automatic snoring detection while you sleep. Wake up to a complete audio analysis of your night.' },
    { icon: '📊', title: 'Intensity Analysis', desc: 'Measure snoring frequency, volume in decibels, and total duration throughout the night.' },
    { icon: '🔬', title: 'Cause Detection', desc: 'Sleep position, congestion, alcohol, weight — AI identifies why you snore and what triggers it.' },
    { icon: '💡', title: 'Solution Library', desc: '45+ evidence-based solutions ranked by effectiveness for your specific snoring profile.' },
    { icon: '📈', title: 'Progress Tracking', desc: 'Before-and-after comparisons show real improvement. See your snoring decrease week by week.' },
    { icon: '👫', title: 'Partner Mode', desc: 'Share detailed reports with your partner or doctor. Export clinical-grade sleep data easily.' },
  ];

  const stats = [
    { value: '2.4M', label: 'Nights Analyzed' },
    { value: '67%', label: 'Snoring Reduction' },
    { value: '340K+', label: 'Users' },
    { value: '45+', label: 'Solutions Tested' },
  ];

  const plans = [
    { name: 'Free', price: 0, features: ['Basic night recording', '3 nights per week', 'Volume tracking', 'Community tips'], cta: 'Start Free' },
    { name: 'Sleep+', price: 4.99, features: ['Nightly recording', 'Full intensity analysis', 'Trend tracking', 'Smart alarm', 'Unlimited history'], cta: 'Get Sleep+', popular: true },
    { name: 'Clinic', price: 8.99, features: ['Everything in Sleep+', 'AI cause detection', 'Personalized solutions', 'Doctor-ready reports', 'Partner sharing'], cta: 'Go Clinic' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="text-2xl">😴</span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SnoreFix</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">Science</a>
            <a href="#" className="hover:text-white transition">Stories</a>
            <button className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:opacity-90 transition">Get Started</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 space-y-3 text-gray-300">
            <a href="#features" className="block hover:text-white">Features</a>
            <a href="#pricing" className="block hover:text-white">Pricing</a>
            <a href="#" className="block hover:text-white">Science</a>
            <a href="#" className="block hover:text-white">Stories</a>
            <button className="w-full mt-2 px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm font-medium">
            🔬 AI Sleep Analysis
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Silent Nights. <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Finally.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Records and analyzes your snoring patterns overnight. AI identifies causes and recommends personalized solutions backed by sleep science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-orange-500/25">
              Record Tonight — Free
            </button>
            <button className="px-8 py-3.5 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:bg-gray-800 transition">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Understand & <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Fix</span> Your Snoring</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">From recording to solutions, SnoreFix uses sleep science and AI to help you breathe easier.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${activeFeature === i ? 'border-orange-500 bg-orange-500/10 scale-[1.02]' : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'}`}
              onClick={() => setActiveFeature(activeFeature === i ? null : i)}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Better Sleep, <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Better Life</span></h2>
            <p className="text-gray-400 text-lg mb-8">Start free tonight. Upgrade for full analysis and personalized solutions.</p>
            <div className="inline-flex items-center gap-3 bg-gray-800 rounded-full p-1">
              <button className={`px-5 py-2 rounded-full text-sm font-medium transition ${!annual ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'text-gray-400'}`} onClick={() => setAnnual(false)}>Monthly</button>
              <button className={`px-5 py-2 rounded-full text-sm font-medium transition ${annual ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'text-gray-400'}`} onClick={() => setAnnual(true)}>Annual <span className="text-xs text-green-400 ml-1">Save 17%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${p.popular ? 'border-orange-500 bg-gradient-to-b from-orange-500/10 to-transparent relative' : 'border-gray-800 bg-gray-900/50'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-xs font-bold">MOST POPULAR</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{p.price === 0 ? '$0' : price(p.price)}</span>
                  {p.price > 0 && <span className="text-gray-400 text-sm">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-orange-400">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition ${p.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold mb-4">
                <span>😴</span>
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">SnoreFix</span>
              </div>
              <p className="text-gray-500 text-sm">Silent nights for everyone.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'API', 'Changelog'] },
              { title: 'Resources', links: ['Sleep Science', 'Blog', 'Help Center', 'Success Stories'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'HIPAA', 'Security'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-3 text-sm">{col.title}</h4>
                <ul className="space-y-2">{col.links.map((l, j) => <li key={j}><a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-sm">
            © 2026 SnoreFix. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}