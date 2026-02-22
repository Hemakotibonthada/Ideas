'use client';

import { useState } from 'react';

export default function WellCheckLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [heartRate, setHeartRate] = useState(72);

  const features = [
    { icon: '💓', title: 'Vital Dashboard', desc: 'Track BP, heart rate, weight, glucose, SpO2 — all in one beautiful, real-time dashboard.' },
    { icon: '📝', title: 'Symptom Journal', desc: 'Log symptoms with severity, time, and triggers. Build a clear picture for your doctor.' },
    { icon: '💊', title: 'Medication Reminders', desc: 'Never miss a dose with smart reminders that adapt to your schedule and timezone.' },
    { icon: '📄', title: 'Doctor Reports', desc: 'Generate clean PDF health summaries for appointments. Impress your physician with real data.' },
    { icon: '📈', title: 'Trend Analysis', desc: 'Spot health trends with charts over weeks and months. Catch problems before they escalate.' },
    { icon: '👨‍👩‍👧', title: 'Family Health', desc: 'Track health for your whole family in one app. One dashboard, everyone covered.' },
  ];

  const pricing = [
    { name: 'Free', price: 0, features: ['Basic vitals tracking', 'Medication reminders', '7-day history', 'Single user', 'Community support'] },
    { name: 'Health+', price: annual ? 3.99 : 4.99, features: ['All 45+ vitals', 'Doctor reports (PDF)', 'Symptom journal', 'Trend analysis', '365-day history', 'Email support'] },
    { name: 'Family', price: annual ? 7.99 : 9.99, features: ['Up to 8 members', 'Shared dashboard', 'Doctor sharing', 'Priority alerts', 'Export to EHR', 'Dedicated support'] },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center font-bold text-sm">WC</div>
            <span className="text-xl font-bold">WellCheck</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#vitals" className="hover:text-white transition">Vitals</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:opacity-90 transition">Get Started</button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-gray-950/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#vitals" className="text-gray-300 hover:text-white">Vitals</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium">🏥 Your complete personal health dashboard</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Know Your Health.{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Own Your Health.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Track vitals, log symptoms, manage medications, and generate doctor-ready health reports. Your complete personal health dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-red-500/25 transition">Start Tracking →</button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Interactive Vital Demo */}
      <section id="vitals" className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm text-gray-400 mb-4">Interactive demo — simulate a heart rate reading</p>
          <div className="text-7xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-1">{heartRate} <span className="text-3xl">bpm</span></div>
          <p className="text-xs text-gray-500 mb-5">{heartRate < 60 ? '⚠️ Below normal range' : heartRate <= 100 ? '✅ Normal resting heart rate' : '⚠️ Above normal range'}</p>
          <div className="flex gap-3 justify-center">
            <button onClick={() => setHeartRate(h => Math.max(40, h - 5))} className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition">- 5</button>
            <button onClick={() => setHeartRate(72)} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 font-semibold transition hover:opacity-90">Reset</button>
            <button onClick={() => setHeartRate(h => Math.min(180, h + 5))} className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-semibold transition">+ 5</button>
          </div>
          <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300" style={{ width: `${((heartRate - 40) / 140) * 100}%` }} />
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>40</span><span>Normal (60-100)</span><span>180</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['2.8M', 'Health Logs'],
            ['45+', 'Vitals Tracked'],
            ['1.2M', 'Reminders Sent Daily'],
            ['890K+', 'Active Users'],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">{val}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Your Health, <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Fully Covered</span></h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">Six powerful features to track, understand, and share your health data with the people who matter.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-red-500/30 transition-all duration-300">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Health Plans for Everyone</h2>
          <p className="text-gray-500 text-center mb-8">Start free. Upgrade as your health journey grows.</p>
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-red-500' : 'bg-white/20'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-red-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${i === 1 ? 'border-red-500 bg-red-500/5 scale-105' : 'border-white/10 bg-white/[0.03]'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${plan.price.toFixed(2)}</span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-red-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${i === 1 ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:shadow-lg hover:shadow-red-500/25' : 'border border-white/20 text-white hover:bg-white/5'}`}>
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center font-bold text-xs">WC</div>
            <span className="font-bold">WellCheck</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">HIPAA</a>
            <a href="#" className="hover:text-white transition">Support</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 WellCheck. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
