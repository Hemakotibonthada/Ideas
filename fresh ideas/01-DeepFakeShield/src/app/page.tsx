'use client';

import { useState } from 'react';

export default function DeepFakeShieldLanding() {
  const [activeTab, setActiveTab] = useState<'video' | 'audio' | 'image'>('video');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xl font-bold">DeepFakeShield</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#api" className="text-gray-400 hover:text-white transition-colors">API</a>
            <a href="#detection" className="text-gray-400 hover:text-white transition-colors">Detection</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="text-gray-400 hover:text-white transition-colors">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">Sign In</button>
            <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Get API Key
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
            🛡️ Trusted by 2,400+ enterprises worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Detect Deepfakes<br />
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Before They Cause Damage
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Enterprise-grade deepfake detection API. Verify video, audio, and image authenticity in real-time. 
            Protect KYC flows, video calls, media uploads, and identity verification with 99.7% accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-xl font-medium text-lg hover:opacity-90 transition-opacity">
              Start Free — 500 Scans/Month
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-xl font-medium text-lg hover:border-gray-500 transition-colors">
              View Live Demo
            </button>
          </div>

          {/* Detection Demo */}
          <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="flex gap-2 mb-6">
              {(['video', 'audio', 'image'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab ? 'bg-red-500/20 text-red-400' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Detection
                </button>
              ))}
            </div>
            <div className="bg-black/50 rounded-xl p-6 font-mono text-sm text-left">
              <div className="text-gray-500 mb-2">// Detect deepfakes with a single API call</div>
              <div>
                <span className="text-purple-400">const</span> <span className="text-blue-400">result</span> = <span className="text-purple-400">await</span> <span className="text-yellow-400">fetch</span>(
              </div>
              <div className="pl-4 text-green-400">'https://api.deepfakeshield.ai/v1/scan'</div>
              <div>, {'{'}</div>
              <div className="pl-4">
                <span className="text-blue-300">method</span>: <span className="text-green-400">'POST'</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-300">headers</span>: {'{'} <span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer dfs_live_...'</span> {'}'},
              </div>
              <div className="pl-4">
                <span className="text-blue-300">body</span>: JSON.stringify({'{'}
              </div>
              <div className="pl-8">
                <span className="text-blue-300">mediaType</span>: <span className="text-green-400">'{activeTab}'</span>,
              </div>
              <div className="pl-8">
                <span className="text-blue-300">url</span>: <span className="text-green-400">'https://example.com/media.{activeTab === 'video' ? 'mp4' : activeTab === 'audio' ? 'wav' : 'jpg'}'</span>,
              </div>
              <div className="pl-8">
                <span className="text-blue-300">webhookUrl</span>: <span className="text-green-400">'https://your-app.com/webhook'</span>
              </div>
              <div className="pl-4">{'}'})</div>
              <div>{'}'});</div>
              <div className="mt-4 text-gray-500">// Response</div>
              <div>{'{'}</div>
              <div className="pl-4"><span className="text-blue-300">"verdict"</span>: <span className="text-red-400">"MANIPULATED"</span>,</div>
              <div className="pl-4"><span className="text-blue-300">"confidence"</span>: <span className="text-yellow-400">0.973</span>,</div>
              <div className="pl-4"><span className="text-blue-300">"processingMs"</span>: <span className="text-yellow-400">340</span>,</div>
              <div className="pl-4"><span className="text-blue-300">"detections"</span>: [</div>
              <div className="pl-8">{'{'} <span className="text-blue-300">"type"</span>: <span className="text-green-400">"face_swap"</span>, <span className="text-blue-300">"region"</span>: <span className="text-green-400">"face_0"</span>, <span className="text-blue-300">"confidence"</span>: <span className="text-yellow-400">0.96</span> {'}'},</div>
              <div className="pl-8">{'{'} <span className="text-blue-300">"type"</span>: <span className="text-green-400">"lip_sync_mismatch"</span>, <span className="text-blue-300">"confidence"</span>: <span className="text-yellow-400">0.89</span> {'}'}</div>
              <div className="pl-4">]</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '99.7%', label: 'Detection Accuracy' },
            { value: '<400ms', label: 'Avg Response Time' },
            { value: '50M+', label: 'Scans Processed' },
            { value: '2,400+', label: 'Enterprise Clients' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section id="detection" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Protect Every Attack Surface
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Deepfake threats target identity verification, video conferencing, media integrity, and social engineering. We cover them all.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🪪',
                title: 'KYC & Identity Verification',
                desc: 'Detect face-swapped selfies and synthetic IDs in onboarding flows. Prevent fraud before account creation.',
                tag: 'FINTECH',
              },
              {
                icon: '📹',
                title: 'Video Call Authentication',
                desc: 'Real-time analysis of Zoom/Teams calls to flag deepfake participants in board meetings and wire approvals.',
                tag: 'ENTERPRISE',
              },
              {
                icon: '📰',
                title: 'Media & Content Integrity',
                desc: 'News organizations verify uploaded videos and images. Detect AI-generated misinformation at scale.',
                tag: 'MEDIA',
              },
              {
                icon: '🏦',
                title: 'Wire Transfer Verification',
                desc: 'Voice deepfake detection for phone-based banking authorizations. Prevent CEO fraud attacks.',
                tag: 'BANKING',
              },
              {
                icon: '⚖️',
                title: 'Legal Evidence Validation',
                desc: 'Courts and law firms verify video/audio evidence authenticity with certified forensic reports.',
                tag: 'LEGAL',
              },
              {
                icon: '🏥',
                title: 'Healthcare Telehealth',
                desc: 'Verify patient identity in telemedicine sessions. Detect prescription fraud via synthetic personas.',
                tag: 'HEALTH',
              },
            ].map((useCase) => (
              <div key={useCase.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <div className="text-3xl mb-3">{useCase.icon}</div>
                <span className="text-xs font-bold text-red-400 bg-red-400/10 px-2 py-0.5 rounded">{useCase.tag}</span>
                <h3 className="text-lg font-semibold mt-3 mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How Detection Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Media', desc: 'Upload video, audio, or image via API or drag-and-drop dashboard' },
              { step: '02', title: 'Multi-Model Analysis', desc: 'Our ensemble of 7 detection models analyzes facial artifacts, audio spectrograms, and temporal inconsistencies' },
              { step: '03', title: 'Forensic Report', desc: 'Get a detailed breakdown: manipulation type, affected regions, confidence scores, and model provenance' },
              { step: '04', title: 'Verdict & Alert', desc: 'Receive AUTHENTIC/MANIPULATED verdict. Trigger webhooks, block users, or escalate to human review' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple API Pricing</h2>
          <p className="text-gray-400 text-center mb-16">Pay per scan. No hidden fees. Volume discounts available.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$0',
                period: 'forever',
                scans: '500 scans/month',
                features: ['Image & Audio detection', 'REST API access', 'Dashboard analytics', '95% accuracy tier', 'Community support', '100 req/min rate limit'],
                cta: 'Start Free',
                highlight: false,
              },
              {
                name: 'Professional',
                price: '$299',
                period: '/month',
                scans: '25,000 scans/month',
                features: ['Video + Live Stream detection', 'Webhook integrations', 'Forensic PDF reports', '99.7% accuracy (ensemble)', 'Priority support (4h SLA)', '1,000 req/min rate limit'],
                cta: 'Start Trial',
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                scans: 'Unlimited scans',
                features: ['On-premise deployment option', 'Custom model training', 'SOC 2 / HIPAA compliance', 'Dedicated account manager', '99.99% SLA', 'SSO & audit logs'],
                cta: 'Contact Sales',
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-red-500/10 to-purple-600/10 border-2 border-red-500/30 relative'
                    : 'bg-gray-900 border border-gray-800'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-red-500 to-purple-600 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.scans}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span className="text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-opacity ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-90'
                      : 'border border-gray-700 hover:border-gray-500'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-bold">DeepFakeShield</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 DeepFakeShield. Protecting truth in the age of AI.</p>
        </div>
      </footer>
    </div>
  );
}
