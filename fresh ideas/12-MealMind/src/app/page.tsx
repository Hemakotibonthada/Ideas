'use client';

import { useState } from 'react';

export default function MealMindLanding() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [scanCount, setScanCount] = useState(10_432_891);

  const stats = [
    { value: '10M+', label: 'Recipes Generated' },
    { value: '42%', label: 'Less Food Waste' },
    { value: '15', label: 'Dietary Profiles' },
    { value: '190+', label: 'Cuisines Covered' },
  ];

  const features = [
    { icon: '📸', title: 'Fridge Scanner', desc: 'Snap a photo of your fridge and AI instantly identifies every ingredient. No manual input needed — just point and shoot.' },
    { icon: '🛡️', title: 'Allergy-Safe Recipes', desc: 'Automatically filters out all allergens from recipe suggestions. Supports 15+ common allergens including nuts, gluten, dairy, and shellfish.' },
    { icon: '📋', title: 'Weekly Meal Plans', desc: 'Get auto-generated weekly meal plans tailored to your preferences with complete grocery lists. Save hours of planning.' },
    { icon: '📊', title: 'Nutrition Tracker', desc: 'Track calories, macros, and micronutrients for every meal. Visual breakdowns make it easy to hit your nutrition goals.' },
    { icon: '⏳', title: 'Expiry Alerts', desc: 'Smart reminders to use ingredients before they expire. Reduces food waste and saves money on groceries every week.' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family Mode', desc: 'Manage multiple dietary profiles in one household. Kids, adults, and guests all get personalized recipe suggestions.' },
  ];

  const pricing = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: ['5 fridge scans per week', 'Basic recipe suggestions', 'Simple nutrition info', 'Community recipes'],
      cta: 'Start Cooking',
      highlight: false,
    },
    {
      name: 'Premium',
      price: billingCycle === 'monthly' ? '$6.99' : '$5.49',
      period: '/mo',
      features: ['Unlimited fridge scans', 'Weekly meal plans', 'Full nutrition tracking', 'Expiry alerts', 'All cuisine filters', 'Priority support'],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Family',
      price: billingCycle === 'monthly' ? '$11.99' : '$9.49',
      period: '/mo',
      features: ['Up to 6 profiles', 'Shared grocery lists', 'Family nutrition dashboard', 'All Premium features', 'Kids-friendly recipes', 'Meal prep guides'],
      cta: 'Start Free Trial',
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-sm font-bold">M</div>
            <span className="text-xl font-bold">MealMind</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Recipes</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition-colors">Sign In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-90 transition-opacity font-medium">Try Free</button>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white">
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-950 border-b border-gray-800 px-6 py-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="block text-gray-300 hover:text-white">Recipes</a>
            <button className="w-full mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 font-medium">Try Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-6">
            🍳 {scanCount.toLocaleString()} fridge scans and counting
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Snap Your Fridge.{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Get Dinner.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Take a photo of your fridge. AI identifies every ingredient and generates personalized recipes that match your dietary needs, allergies, and taste preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setScanCount(c => c + 1)}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            >
              📸 Scan Your Fridge
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-900 transition-colors font-medium">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-800/50 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your AI-Powered <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Kitchen Assistant</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">From fridge to table in minutes. Every feature designed to make cooking effortless and waste-free.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${activeFeature === i ? 'bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/30 scale-[1.02]' : 'bg-gray-950/80 border-gray-800/50 hover:border-gray-700'}`}
                onClick={() => setActiveFeature(activeFeature === i ? null : i)}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-950/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Feed Your Family, Not Your Wallet</h2>
            <p className="text-gray-400 mb-8">Plans that pay for themselves in saved groceries.</p>
            <div className="inline-flex items-center gap-3 bg-gray-900 rounded-full p-1 border border-gray-800">
              <button onClick={() => setBillingCycle('monthly')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
              <button onClick={() => setBillingCycle('annual')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'annual' ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white' : 'text-gray-400 hover:text-white'}`}>Annual <span className="text-xs text-emerald-400">Save 20%</span></button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${plan.highlight ? 'bg-gradient-to-b from-orange-500/10 to-transparent border-orange-500/30 ring-1 ring-orange-500/20' : 'bg-gray-950/80 border-gray-800/50'}`}>
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-orange-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium transition-all ${plan.highlight ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:shadow-lg hover:shadow-orange-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-900'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-sm font-bold">M</div>
                <span className="text-lg font-bold">MealMind</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">Turn your fridge into a recipe book. Reduce waste, eat better, cook smarter.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Recipe Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nutrition Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Food Waste Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">© 2026 MealMind. All rights reserved.</p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">TikTok</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
