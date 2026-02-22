'use client';

import { useState } from 'react';

export default function DocuSafeLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [demoUploaded, setDemoUploaded] = useState(false);

  const features = [
    { icon: '📄', title: 'Smart Scanner', desc: 'OCR extracts data from documents automatically. Snap a photo, and every field is captured instantly.' },
    { icon: '⏰', title: 'Expiry Alerts', desc: 'Get notified 90, 60, and 30 days before documents expire. Never scramble for renewals again.' },
    { icon: '🔐', title: 'Encrypted Vault', desc: 'Bank-level AES-256 encryption at rest and in transit. Your data is untouchable.' },
    { icon: '🔗', title: 'Secure Sharing', desc: 'Share documents via expiring links with fine-grained access control and view tracking.' },
    { icon: '🏷️', title: 'Category Tags', desc: 'Auto-organize by type: medical, legal, financial, ID. Find anything in milliseconds.' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family Access', desc: 'Shared family vault with permission levels. Parents manage, kids view — simple and safe.' },
  ];

  const pricing = [
    { name: 'Free', price: 0, features: ['10 documents', 'Basic expiry alerts', 'Single user', '1 GB storage', 'Email support'] },
    { name: 'Vault', price: annual ? 3.99 : 4.99, features: ['Unlimited documents', 'OCR scanning', 'Secure sharing', '50 GB storage', 'Priority email support', 'Custom categories'] },
    { name: 'Family', price: annual ? 6.99 : 8.99, features: ['Up to 6 members', 'Shared family vaults', 'Permission levels', '200 GB storage', 'Priority support', 'Advanced analytics'] },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center font-bold text-sm">DS</div>
            <span className="text-xl font-bold">DocuSafe</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#stats" className="hover:text-white transition">Security</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold hover:opacity-90 transition">Get Started</button>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#stats" className="text-gray-300 hover:text-white">Security</a>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold">Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">🔒 Military-grade document security</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Your Documents.{' '}
            <span className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">Fort Knox Secure.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Store passports, insurance, IDs, and vital documents with military-grade encryption. Get expiry alerts months in advance. Share securely with a single link.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition">Start Free →</button>
            <button className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition">Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm text-gray-400 mb-4">Try it — upload simulation</p>
          {!demoUploaded ? (
            <button onClick={() => setDemoUploaded(true)} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 font-semibold hover:opacity-90 transition">
              📄 Upload a Document
            </button>
          ) : (
            <div className="space-y-3 animate-pulse-none">
              <div className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <span className="text-3xl">✅</span>
                <div className="text-left">
                  <p className="font-semibold">passport_scan.pdf</p>
                  <p className="text-xs text-gray-400">Encrypted • OCR extracted • Expires Dec 2028</p>
                </div>
              </div>
              <p className="text-xs text-green-400">🔒 256-bit AES encryption applied</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['8.4M', 'Documents Secured'],
            ['99.97%', 'Uptime'],
            ['256-bit', 'AES Encryption'],
            ['320K+', 'Families Trust Us'],
          ].map(([val, label]) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">{val}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Everything You Need to <span className="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">Stay Organized</span></h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">Six powerful features designed to keep your most important documents safe, accessible, and always up-to-date.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-300">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-center mb-8">Start free. Upgrade when you need more.</p>
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-14 h-7 rounded-full relative transition-colors ${annual ? 'bg-blue-500' : 'bg-white/20'}`}>
              <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${annual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-blue-400 text-xs">Save 20%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${i === 1 ? 'border-blue-500 bg-blue-500/5 scale-105' : 'border-white/10 bg-white/[0.03]'} flex flex-col`}>
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">${plan.price.toFixed(2)}</span>
                  <span className="text-gray-500 mb-1">/mo</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-blue-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition ${i === 1 ? 'bg-gradient-to-r from-blue-500 to-sky-500 text-white hover:shadow-lg hover:shadow-blue-500/25' : 'border border-white/20 text-white hover:bg-white/5'}`}>
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center font-bold text-xs">DS</div>
            <span className="font-bold">DocuSafe</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Support</a>
            <a href="#" className="hover:text-white transition">Blog</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 DocuSafe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
