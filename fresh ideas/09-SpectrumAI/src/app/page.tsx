'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🖼️',
    title: 'AI Alt Text Generation',
    desc: 'Context-aware image descriptions powered by vision AI. Not just "a photo" — actual meaningful alt text that captures objects, actions, emotions, and spatial relationships.',
  },
  {
    icon: '📝',
    title: 'Auto-Captioning',
    desc: 'Generate accurate captions and transcripts for video/audio content. 40+ languages supported. Export to SRT, VTT, or plain text with speaker diarization.',
  },
  {
    icon: '🤟',
    title: 'Sign Language Avatars',
    desc: 'Generate animated sign language interpretation for any text or video content. Supports ASL, BSL, Auslan, and more with natural avatar motion.',
  },
  {
    icon: '🎨',
    title: 'WCAG Auto-Fix',
    desc: 'Scan pages for color contrast, focus order, ARIA labels, heading structure issues. Auto-generate code fixes you can merge in one click.',
  },
  {
    icon: '📊',
    title: 'Compliance Dashboard',
    desc: 'Track WCAG A/AA/AAA compliance across your entire site. Per-page scores, trend charts, issue breakdown, and exportable audit reports.',
  },
  {
    icon: '🔌',
    title: 'Developer API',
    desc: 'RESTful API and React/Vue/Angular SDKs. Fix accessibility in your CI/CD pipeline before it ships. GitHub Actions and GitLab CI integrations included.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: false,
    features: [
      '1,000 API calls/mo',
      '1 website',
      'Basic alt text generation',
      'WCAG scanner (manual)',
      'Email support',
      'Community forum access',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/mo',
    highlight: true,
    features: [
      '50,000 API calls/mo',
      'Up to 10 websites',
      'All AI features included',
      'Auto-captioning & transcripts',
      'Sign language avatars',
      'Priority support & Slack',
    ],
    cta: 'Start 14-Day Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'Unlimited API calls',
      'Unlimited websites',
      'Custom model training',
      'On-premise deployment',
      'SOC 2 Type II compliant',
      'Dedicated SLA & CSM',
    ],
    cta: 'Contact Sales',
  },
];

const stats = [
  { value: '300%', label: 'ADA lawsuits up since 2020' },
  { value: '98.2%', label: 'WCAG compliance rate' },
  { value: '2.1M', label: 'Images described' },
  { value: '45,000+', label: 'Pages fixed' },
];

const codeSnippet = `import { SpectrumAI } from '@spectrumapi/sdk';

const spectrum = new SpectrumAI({ apiKey: process.env.SPECTRUM_KEY });

// Generate context-aware alt text for an image
const result = await spectrum.altText.generate({
  imageUrl: 'https://example.com/hero-banner.jpg',
  context: 'Product landing page for outdoor gear',
  format: 'concise',        // 'concise' | 'detailed' | 'poetic'
  language: 'en',
});

console.log(result);
// => {
//   alt: "A hiker standing on a mountain ridge at golden hour,
//         wearing a red backpack and looking toward snow-capped
//         peaks in the distance",
//   confidence: 0.96,
//   wcagCompliant: true,
//   tokens: 38
// }`;

export default function SpectrumAILanding() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'annual'>('monthly');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-sm font-bold">
              S
            </div>
            <span className="text-lg font-bold tracking-tight">SpectrumAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#api" className="hover:text-white transition-colors">API</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
              Log in
            </button>
            <button className="text-sm bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-purple-500/20">
              Start Free
            </button>
          </div>
          <button
            className="md:hidden text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-gray-950 px-6 py-4 flex flex-col gap-4 text-sm text-gray-400">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#api" className="hover:text-white">API</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#docs" className="hover:text-white">Docs</a>
            <button className="mt-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-2 rounded-full font-medium text-white">
              Start Free
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Now SOC 2 Type II Certified
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Accessibility That{' '}
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Actually Fixes
            </span>{' '}
            Your Code
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Not another overlay widget. SpectrumAI generates real alt text, real captions,
            real WCAG fixes — injected directly into your codebase via API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 rounded-full font-semibold transition-all shadow-xl shadow-purple-500/25 text-base">
              Start Free — No Credit Card
            </button>
            <button className="px-8 py-3.5 border border-white/10 hover:border-white/20 rounded-full font-semibold text-gray-300 hover:text-white transition-all text-base">
              View API Docs →
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                real accessibility
              </span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              No overlays. No widgets. No band-aids. SpectrumAI fixes your actual code with
              production-grade AI that understands context.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-default ${
                  hoveredFeature === i
                    ? 'border-purple-500/40 bg-purple-500/5 shadow-lg shadow-purple-500/5'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5 opacity-0 transition-opacity duration-300 ${
                    hoveredFeature === i ? 'opacity-100' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Code Snippet */}
      <section id="api" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ship accessible code in{' '}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                3 lines
              </span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Our SDK makes it dead simple. Import, initialize, call. Get production-ready
              alt text and WCAG fixes in milliseconds.
            </p>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-gray-900/60 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-xs text-gray-500 font-mono">generate-alt-text.ts</span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
              <code className="text-gray-300 font-mono">
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i} className="flex">
                    <span className="w-8 text-right mr-4 text-gray-600 select-none text-xs leading-relaxed">
                      {i + 1}
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/\/\/.*/g, (m) => `<span class="text-gray-600">${m}</span>`)
                          .replace(
                            /(import|from|const|await|process|console)/g,
                            (m) => `<span class="text-purple-400">${m}</span>`
                          )
                          .replace(
                            /('.*?'|".*?")/g,
                            (m) => `<span class="text-fuchsia-300">${m}</span>`
                          ),
                      }}
                    />
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple,{' '}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                transparent
              </span>{' '}
              pricing
            </h2>
            <p className="text-gray-500 mb-8">Start free. Scale as you grow. No surprise bills.</p>
            <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setActiveTab('monthly')}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'monthly'
                    ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab('annual')}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'annual'
                    ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual
                <span className="ml-1.5 text-xs text-green-400">Save 20%</span>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border transition-all ${
                  plan.highlight
                    ? 'border-purple-500/40 bg-purple-500/5 shadow-xl shadow-purple-500/10 scale-[1.02]'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">
                    {plan.price === '$0'
                      ? '$0'
                      : plan.price === 'Custom'
                      ? 'Custom'
                      : activeTab === 'annual'
                      ? '$159'
                      : plan.price}
                  </span>
                  {plan.period && <span className="text-gray-500 text-sm mb-1">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                      <svg
                        className="w-4 h-4 mt-0.5 text-purple-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 text-white shadow-lg shadow-purple-500/20'
                      : 'border border-white/10 text-gray-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 rounded-3xl blur-3xl" />
          <div className="relative p-12 rounded-3xl border border-white/5 bg-white/[0.02]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your next lawsuit could cost $50K+
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              ADA digital accessibility lawsuits hit an all-time high. SpectrumAI fixes your
              codebase — not just the symptoms. Start in under 5 minutes.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 rounded-full font-semibold text-base transition-all shadow-xl shadow-purple-500/25">
              Get Started Free →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold">
                  S
                </div>
                <span className="font-bold tracking-tight">SpectrumAI</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Real accessibility fixes for real codebases. No overlays, no excuses.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Alt Text API', 'Captioning', 'WCAG Scanner', 'SDKs'] },
              { title: 'Resources', links: ['Documentation', 'API Reference', 'Blog', 'Changelog'] },
              { title: 'Company', links: ['About', 'Careers', 'Security', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'DPA', 'VPAT'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-sm font-semibold mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">© 2026 SpectrumAI, Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">GitHub</a>
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
              <a href="#" className="hover:text-gray-400">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
