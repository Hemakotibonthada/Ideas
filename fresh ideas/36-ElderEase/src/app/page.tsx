'use client';

import { useState } from 'react';

export default function ElderEaseLanding() {
  const [annual, setAnnual] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<'meds' | 'calendar' | 'alerts'>('meds');

  const prices = annual
    ? { free: '$0', family: '$5.99', care: '$11.99' }
    : { free: '$0', family: '$7.99', care: '$14.99' };

  const demoContent: Record<string, { title: string; lines: string[] }> = {
    meds: {
      title: 'Medication Dashboard',
      lines: [
        '💊 Metformin 500mg — 8:00 AM ✅ Taken',
        '💊 Lisinopril 10mg — 12:00 PM ⏰ Upcoming',
        '💊 Aspirin 81mg — 6:00 PM 🕐 Scheduled',
        '⚠️ Refill needed: Atorvastatin (3 days left)',
      ],
    },
    calendar: {
      title: 'Appointment Calendar',
      lines: [
        '📅 Feb 20 — Dr. Patel (Cardiology) 10:00 AM',
        '📅 Feb 24 — Lab Work (Quest) 8:30 AM',
        '📅 Mar 3 — Dr. Lin (Primary) 2:00 PM',
        '👨‍👩‍👧 Sarah confirmed she can drive on Feb 20',
      ],
    },
    alerts: {
      title: 'Activity Alerts',
      lines: [
        '✅ 7:12 AM — Morning routine detected',
        '✅ 9:30 AM — Kitchen activity normal',
        '⚠️ 11:45 AM — No movement for 90 min (checked OK)',
        '✅ 1:00 PM — Living room activity resumed',
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg">E</div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">ElderEase</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Demo</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition">Get Started</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4 bg-gray-950">
            <a href="#features" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
            <a href="#demo" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Demo</a>
            <a href="#pricing" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Pricing</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-medium">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">🩺 Trusted by 420K+ families</div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Care for Those</span>
            <br />Who Cared for You
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Senior care coordination for families. Manage medications, track appointments, detect falls, share updates with family, and connect with professional caregivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition">Start Free Today</button>
            <button className="px-8 py-3.5 rounded-full border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-800 transition">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
          {[ ['420K+', 'Seniors Cared For'], ['89%', 'Family Satisfaction'], ['15K+', 'Caregivers Connected'], ['34%', 'Fewer Missed Meds'] ].map(([v, l]) => (
            <div key={l} className="py-8 px-6 text-center">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">{v}</div>
              <div className="text-sm text-gray-500 mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Everything Families Need</h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">Comprehensive tools to coordinate senior care across your entire family.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💊', title: 'Medication Manager', desc: 'Schedule, track, and remind medications with photos. Never miss a dose again.' },
              { icon: '📅', title: 'Appointment Calendar', desc: 'Coordinate doctor visits across family caregivers. Everyone stays in sync.' },
              { icon: '🔔', title: 'Fall Detection', desc: 'Smart alerts when unusual activity is detected. Instant notifications to family.' },
              { icon: '📋', title: 'Family Updates', desc: 'Daily summaries shared with all family members. Stay connected from anywhere.' },
              { icon: '👩‍⚕️', title: 'Caregiver Network', desc: 'Find and vet professional home caregivers with ratings and background checks.' },
              { icon: '🚨', title: 'Emergency Contacts', desc: 'One-tap SOS with live location shared to all designated family members.' },
            ].map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See It In Action</h2>
          <div className="flex gap-2 justify-center mb-8">
            {(['meds', 'calendar', 'alerts'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveDemo(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${activeDemo === tab ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
              >
                {tab === 'meds' ? '💊 Medications' : tab === 'calendar' ? '📅 Calendar' : '🔔 Alerts'}
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-gray-500">{demoContent[activeDemo].title}</span>
            </div>
            <div className="space-y-3">
              {demoContent[activeDemo].lines.map((line, i) => (
                <div key={i} className="p-3 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-300 font-mono">{line}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-center mb-8">Start free. Upgrade when your family needs more.</p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full p-1 transition ${annual ? 'bg-gradient-to-r from-blue-500 to-teal-500' : 'bg-gray-700'}`}>
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-teal-400 text-xs">Save 25%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: prices.free, period: '', features: ['1 senior profile', 'Basic medication tracking', 'Daily reminders', 'Emergency contacts'], cta: 'Start Free' },
              { name: 'Family', price: prices.family, period: '/mo', features: ['Up to 3 seniors', 'All features included', 'Caregiver network access', 'Family updates & reports', 'Priority email support'], cta: 'Start Trial', pop: true },
              { name: 'Care Team', price: prices.care, period: '/mo', features: ['Unlimited seniors', 'Professional caregiver tools', 'Advanced analytics', 'Fall detection AI', 'Priority 24/7 support'], cta: 'Contact Sales' },
            ].map((p) => (
              <div key={p.name} className={`rounded-2xl p-8 border ${p.pop ? 'border-blue-500 bg-gradient-to-b from-blue-500/10 to-transparent shadow-xl shadow-blue-500/10' : 'border-gray-800 bg-gray-900'}`}>
                {p.pop && <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-gray-500 mb-1">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-teal-400 mt-0.5">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${p.pop ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:shadow-lg hover:shadow-blue-500/25' : 'border border-gray-700 text-gray-300 hover:bg-gray-800'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold">E</div>
            <span className="font-bold text-lg">ElderEase</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms</a>
            <a href="#" className="hover:text-gray-300 transition">Support</a>
            <a href="#" className="hover:text-gray-300 transition">Contact</a>
          </div>
          <p className="text-sm text-gray-600">© 2026 ElderEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
