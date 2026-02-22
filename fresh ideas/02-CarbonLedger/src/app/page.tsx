'use client';

import { useState } from 'react';

export default function CarbonLedgerLanding() {
  const [activeFramework, setActiveFramework] = useState('CSRD');

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Nav */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-lg">🌍</div>
            <span className="text-xl font-bold">CarbonLedger</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white">Features</a>
            <a href="#compliance" className="text-gray-400 hover:text-white">Compliance</a>
            <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-gray-300 hover:text-white">Login</button>
            <button className="px-4 py-2 bg-emerald-600 rounded-lg font-medium hover:bg-emerald-500">Start Free</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6">
            🏛️ CSRD & SEC Climate Rule Ready
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Carbon Accounting<br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              That Actually Works
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Automated Scope 1, 2, and 3 emissions tracking with audit-grade evidence trails. 
            Generate CSRD, CDP, TCFD, and SEC Climate reports in minutes — not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="px-8 py-4 bg-emerald-600 rounded-xl font-medium text-lg hover:bg-emerald-500">
              Calculate Your Footprint Free
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-xl font-medium text-lg hover:border-gray-500">
              Watch 3-Min Demo
            </button>
          </div>

          {/* Emissions Dashboard Preview */}
          <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Emissions Overview — Q4 2025</h3>
              <div className="flex gap-2">
                {['CSRD', 'CDP', 'TCFD', 'SEC'].map((fw) => (
                  <button
                    key={fw}
                    onClick={() => setActiveFramework(fw)}
                    className={`px-3 py-1 rounded text-xs font-medium ${
                      activeFramework === fw ? 'bg-emerald-500/20 text-emerald-400' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {fw}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-gray-500 text-sm mb-1">Scope 1 (Direct)</div>
                <div className="text-2xl font-bold text-orange-400">12,450 tCO₂e</div>
                <div className="text-red-400 text-xs mt-1">↑ 3.2% vs Q3</div>
              </div>
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-gray-500 text-sm mb-1">Scope 2 (Energy)</div>
                <div className="text-2xl font-bold text-yellow-400">8,230 tCO₂e</div>
                <div className="text-green-400 text-xs mt-1">↓ 12.1% vs Q3</div>
              </div>
              <div className="bg-black/40 rounded-xl p-4">
                <div className="text-gray-500 text-sm mb-1">Scope 3 (Supply Chain)</div>
                <div className="text-2xl font-bold text-red-400">89,100 tCO₂e</div>
                <div className="text-gray-400 text-xs mt-1">247 suppliers tracked</div>
              </div>
            </div>
            <div className="bg-black/40 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-500 text-sm">Net Emissions (after offsets)</div>
                  <div className="text-3xl font-bold">98,230 tCO₂e</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-500 text-sm">Carbon Credits Retired</div>
                  <div className="text-2xl font-bold text-emerald-400">11,550 tCO₂e</div>
                </div>
                <div className="text-right">
                  <div className="text-gray-500 text-sm">{activeFramework} Readiness</div>
                  <div className="text-2xl font-bold text-emerald-400">94%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Not Another Spreadsheet</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Stop manually collecting data from 50 systems. CarbonLedger auto-ingests from ERPs, utilities, fleet telematics, 
            and supplier platforms.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔌', title: 'Auto-Ingest Emissions Data', desc: 'Connect SAP, Oracle, QuickBooks, utility APIs, fleet GPS, and 40+ data sources. No manual entry.' },
              { icon: '🏭', title: 'Scope 3 Supply Chain Mapping', desc: 'Send supplier questionnaires, import CDP data, or estimate from spend-based emission factors automatically.' },
              { icon: '📊', title: 'One-Click Regulatory Reports', desc: 'Generate CSRD, CDP, TCFD, SEC Climate, and ISSB-compliant reports with audit trails and evidence links.' },
              { icon: '🌿', title: 'Carbon Credit Marketplace', desc: 'Browse verified offsets (Verra, Gold Standard). Purchase, retire, and track credits with serial-number-level provenance.' },
              { icon: '🔍', title: 'Audit-Grade Evidence Trail', desc: 'Every data point is timestamped, source-linked, and version-controlled. Survives Big 4 auditor scrutiny.' },
              { icon: '🎯', title: 'Science-Based Target Tracking', desc: 'Set SBTi-aligned reduction targets. Track progress with automated forecasting and scenario modeling.' },
            ].map((f) => (
              <div key={f.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-emerald-500/30 transition-colors">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Transparent Pricing</h2>
          <p className="text-gray-400 text-center mb-16">Based on organization size and reporting needs</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Standard', price: '$499', period: '/month', desc: 'For mid-size companies starting ESG reporting',
                features: ['Scope 1 & 2 tracking', '5 facilities', 'CDP & GHG Protocol reports', '50 suppliers', 'Email support', 'Basic dashboards'],
                cta: 'Start Free Trial', highlight: false
              },
              {
                name: 'Professional', price: '$1,499', period: '/month', desc: 'For companies with complex supply chains',
                features: ['Full Scope 1, 2, 3', 'Unlimited facilities', 'All frameworks (CSRD, SEC, TCFD)', '500 suppliers', 'Carbon credit marketplace', 'SBTi target tracking'],
                cta: 'Start Free Trial', highlight: true
              },
              {
                name: 'Enterprise', price: 'Custom', period: '', desc: 'For multinationals with complex structures',
                features: ['Multi-entity consolidation', 'Custom ERP integrations', 'Dedicated CSO advisor', 'Board-ready presentations', 'Assurance-ready audit packs', 'SSO & API access'],
                cta: 'Contact Sales', highlight: false
              }
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-8 ${
                plan.highlight ? 'bg-gradient-to-b from-emerald-500/10 to-teal-600/10 border-2 border-emerald-500/30 relative' : 'bg-gray-900 border border-gray-800'
              }`}>
                {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 rounded-full text-xs font-bold">MOST POPULAR</span>}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6"><span className="text-4xl font-bold">{plan.price}</span><span className="text-gray-400">{plan.period}</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm"><span className="text-emerald-400">✓</span><span className="text-gray-300">{f}</span></li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-medium ${
                  plan.highlight ? 'bg-emerald-600 hover:bg-emerald-500' : 'border border-gray-700 hover:border-gray-500'
                }`}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold">🌍 CarbonLedger</span>
          <p className="text-gray-500 text-sm">© 2026 CarbonLedger. Making Net Zero achievable.</p>
        </div>
      </footer>
    </div>
  );
}
