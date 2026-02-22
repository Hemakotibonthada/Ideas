'use client';

import { useState } from 'react';

const features = [
  {
    icon: '🔀',
    title: 'Prompt Version Control',
    desc: 'Git-like versioning for prompts. See diffs, rollback, branch. Every change tracked with full history.',
  },
  {
    icon: '🧪',
    title: 'A/B Testing Engine',
    desc: 'Split traffic between prompt versions. Measure quality, latency, and cost automatically.',
  },
  {
    icon: '💰',
    title: 'Cost Analytics',
    desc: 'Real-time spend tracking per prompt, per model, per team. Set budgets and alerts before you overspend.',
  },
  {
    icon: '📊',
    title: 'Quality Scoring',
    desc: 'Auto-score outputs using custom rubrics, LLM-as-judge, or human eval pipelines.',
  },
  {
    icon: '🔌',
    title: 'Universal SDK',
    desc: 'Drop-in wrappers for OpenAI, Anthropic, Google, Meta, Mistral, Cohere. 2 lines to integrate.',
  },
  {
    icon: '👥',
    title: 'Team Collaboration',
    desc: 'Shared prompt libraries, review workflows, and role-based access for your AI team.',
  },
];

const steps = [
  { step: '01', title: 'Install SDK', desc: 'Add the PromptVault wrapper around your existing LLM calls. Two lines of code.' },
  { step: '02', title: 'Version Prompts', desc: 'Every prompt change is auto-versioned. Tag releases, create branches, diff changes.' },
  { step: '03', title: 'Run A/B Tests', desc: 'Split traffic across prompt variants and let data decide which version wins.' },
  { step: '04', title: 'Optimize Costs', desc: 'See exactly what you spend per prompt, per model. Cut waste, keep quality.' },
];

const pricing = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    features: ['1,000 executions', '3 projects', '2 users', 'Basic analytics', 'Community support'],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Team',
    price: '$79',
    period: '/mo',
    features: ['50,000 executions', 'Unlimited projects', '10 users', 'A/B testing', 'Cost alerts', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['Unlimited everything', 'SSO & SAML', 'Custom model support', 'Dedicated support', 'SLA guarantee', 'On-premise option'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const codeSnippet = `import { PromptVault } from '@promptvault/sdk';
import OpenAI from 'openai';

const pv = new PromptVault({ apiKey: 'pv_sk_...' });
const openai = new OpenAI();

// Resolve versioned prompt template
const prompt = await pv.resolve('summarize-article', {
  version: 'latest',   // or 'v2.3', 'experiment-A'
  variables: { article: userInput, tone: 'professional' },
});

const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: prompt.text }],
});

// Auto-tracked: cost, latency, token usage, version
pv.log(prompt.executionId, { output: response.choices[0].message.content });`;

export default function PromptVaultLanding() {
  const [activeTab, setActiveTab] = useState(0);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">⬡ PromptVault</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#" className="transition hover:text-white">Docs</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm text-gray-400 transition hover:text-white">Sign In</button>
            <button className="rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-medium transition hover:shadow-lg hover:shadow-indigo-500/25">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
            Now supporting GPT-4o, Claude 3.5, Gemini 2.0 &amp; more
          </div>
          <h1 className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:text-7xl">
            Version Control for<br />the AI Age
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Track, version, A/B test, and optimize every LLM prompt your team uses. See exactly which prompts perform best at the lowest cost.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button className="whitespace-nowrap bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium transition hover:shadow-lg hover:shadow-indigo-500/25">
                Start Free →
              </button>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-600">Free forever plan available · No credit card required</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {[
            ['12M+', 'Prompts versioned'],
            ['$4.2M', 'Saved in LLM costs'],
            ['3,800+', 'Teams worldwide'],
            ['8', 'LLM providers supported'],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col items-center gap-1 px-6 py-8">
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-3xl font-bold text-transparent">{value}</span>
              <span className="text-sm text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Everything you need to manage AI prompts</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">From version control to cost optimization — one platform for your entire prompt engineering workflow.</p>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`group relative cursor-default rounded-2xl border p-6 transition-all duration-300 ${
                  hoveredFeature === i
                    ? 'border-indigo-500/50 bg-indigo-500/5 shadow-lg shadow-indigo-500/10'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="mb-4 text-3xl">{f.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{f.desc}</p>
                <div
                  className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 opacity-0 transition-opacity ${
                    hoveredFeature === i ? 'opacity-100' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippet */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Integrate in 2 minutes</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">Wrap your existing LLM calls with our SDK. No prompt migration needed.</p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-gray-500">app/ai/summarize.ts</span>
            </div>
            <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
              <code className="text-gray-300">
                {codeSnippet.split('\n').map((line, i) => (
                  <div key={i} className="flex">
                    <span className="mr-6 inline-block w-5 text-right text-gray-600 select-none">{i + 1}</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/\/\/.*/g, (m) => `<span class="text-gray-600">${m}</span>`)
                          .replace(/'[^']*'/g, (m) => `<span class="text-emerald-400">${m}</span>`)
                          .replace(/\b(import|from|const|await|new)\b/g, (m) => `<span class="text-violet-400">${m}</span>`),
                      }}
                    />
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">Four steps to prompt engineering excellence.</p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`group relative cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                  activeTab === i ? 'border-indigo-500/50 bg-indigo-500/5' : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
                onClick={() => setActiveTab(i)}
              >
                <span className="mb-4 block bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-4xl font-black text-transparent">
                  {s.step}
                </span>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
                {activeTab === i && (
                  <div className="absolute -bottom-px left-1/2 h-0.5 w-12 -translate-x-1/2 rounded bg-gradient-to-r from-indigo-500 to-violet-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Simple, transparent pricing</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">Start free. Scale as your AI usage grows.</p>
            <div className="mt-8 inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
              <button
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${billingCycle === 'monthly' ? 'bg-white/10 text-white' : 'text-gray-400'}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${billingCycle === 'annual' ? 'bg-white/10 text-white' : 'text-gray-400'}`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual <span className="text-indigo-400">-20%</span>
              </button>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition-all ${
                  plan.highlight
                    ? 'border-indigo-500/50 bg-gradient-to-b from-indigo-500/10 to-transparent shadow-lg shadow-indigo-500/10'
                    : 'border-white/5 bg-white/[0.02]'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-0.5 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price === 'Custom' ? '' : billingCycle === 'annual' && plan.price !== '$0' ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}` : plan.price}
                  </span>
                  {plan.price === 'Custom' ? (
                    <span className="text-2xl font-bold">Custom</span>
                  ) : (
                    <span className="text-gray-500">{plan.period}</span>
                  )}
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-indigo-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-lg py-3 text-sm font-medium transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-500 hover:shadow-lg hover:shadow-indigo-500/25'
                      : 'border border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent p-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Stop guessing which prompts work</h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Join 3,800+ teams using PromptVault to ship better AI features, faster and cheaper.
          </p>
          <button className="mt-8 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-4 text-sm font-medium transition hover:shadow-xl hover:shadow-indigo-500/25">
            Start Free — No Credit Card →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text font-bold text-transparent">⬡ PromptVault</span>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="transition hover:text-white">Docs</a>
            <a href="#" className="transition hover:text-white">Blog</a>
            <a href="#" className="transition hover:text-white">Changelog</a>
            <a href="#" className="transition hover:text-white">Status</a>
            <a href="#" className="transition hover:text-white">Privacy</a>
          </div>
          <span className="text-xs text-gray-600">© 2026 PromptVault. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
