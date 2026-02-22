'use client';

import { useState } from 'react';

export default function TransLiveLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [demoLang, setDemoLang] = useState<string | null>(null);

  const demoTranslations: Record<string, string> = {
    Spanish: '¡Hola! ¿Cómo estás hoy?',
    Japanese: 'こんにちは！今日はお元気ですか？',
    French: 'Bonjour ! Comment allez-vous aujourd\'hui ?',
    Arabic: 'مرحبا! كيف حالك اليوم؟',
    Hindi: 'नमस्ते! आज आप कैसे हैं?',
    Korean: '안녕하세요! 오늘 기분이 어때요?',
  };

  const features = [
    { icon: '🎙️', title: 'Voice Translation', desc: 'Speak naturally, hear the translation instantly in real-time. No typing, no delays.' },
    { icon: '💬', title: 'Conversation Mode', desc: 'Two-way translation for face-to-face conversations. Both sides hear in their own language.' },
    { icon: '👥', title: 'Group Mode', desc: 'Translate for up to 20 people in different languages simultaneously in one room.' },
    { icon: '🗣️', title: 'Dialect Support', desc: 'Regional dialects and accents recognized. From Castilian to Latin American Spanish — we get it.' },
    { icon: '✈️', title: 'Offline Mode', desc: 'Download language packs for travel without internet. Full translation, zero data required.' },
    { icon: '⌨️', title: 'Text Translation', desc: 'Type and translate with context-aware AI that understands idioms, slang, and nuance.' },
  ];

  const pricing = [
    { name: 'Free', price: 0, features: ['15 min/day', '10 languages', 'Text translation', 'Basic voice', 'Community support'] },
    { name: 'Traveler', price: annual ? 4.49 : 5.99, features: ['Unlimited minutes', '95+ languages', 'Offline packs', 'Conversation mode', 'Dialect support', 'Priority support'] },
    { name: 'Business', price: annual ? 9.99 : 12.99, features: ['API access', 'Group mode (20)', 'Custom glossary', 'Analytics dashboard', 'Team management', 'Dedicated support'] },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-sm">TL</div>
            <span className="text-xl font-bold">TransLive</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#demo" className="hover:text-white transition">Try It</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition">Start Free</button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#demo" className="text-gray-300 hover:text-white">Try It</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold">Start Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium">🌍 95+ Languages. Real-time. Zero friction.</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Speak Freely.{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Be Understood.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Real-time voice translation for 95+ languages. You speak. They hear in their language. Break every language barrier instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition">Try Free Now →</button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition">See It Work</button>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm text-gray-400 mb-1">Live demo — translate &quot;Hello! How are you today?&quot;</p>
          <p className="text-xs text-gray-600 mb-5">Pick a language to see instant translation</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.keys(demoTranslations).map(lang => (
              <button key={lang} onClick={() => setDemoLang(lang)} className={`px-4 py-2 rounded-lg text-sm font-medium transition ${demoLang === lang ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                {lang}
              </button>
            ))}
          </div>
          {demoLang && (
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
              <p className="text-xs text-cyan-400 mb-1">{demoLang} translation — 340ms</p>
              <p className="text-xl font-semibold">{demoTranslations[demoLang]}</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['95+', 'Languages'],
            ['340ms', 'Avg Latency'],
            ['97.2%', 'Accuracy'],
            ['4.5M', 'Conversations'],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{val}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Break Every <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Language Barrier</span></h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">Powerful translation features for travelers, businesses, and anyone who wants to connect across languages.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Pricing for Every Speaker</h2>
          <p className="text-gray-500 text-center mb-8">Start free. Go global when you need to.</p>
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-cyan-500' : 'bg-white/20'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-cyan-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${i === 1 ? 'border-cyan-500 bg-cyan-500/5 scale-105' : 'border-white/10 bg-white/[0.03]'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${plan.price.toFixed(2)}</span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${i === 1 ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25' : 'border border-white/20 text-white hover:bg-white/5'}`}>
                  {i === 0 ? 'Start Free' : 'Get ' + plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-xs">TL</div>
            <span className="font-bold">TransLive</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Languages</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 TransLive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
