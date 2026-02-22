'use client';

import { useState, useEffect } from 'react';

const features = [
  {
    icon: '🏗️',
    title: '3D Digital Twin Viewer',
    desc: 'Upload CAD/BIM models and see real-time sensor data overlaid on interactive 3D asset models directly in your browser. Supports IFC, STEP, glTF, and Revit formats.',
  },
  {
    icon: '📡',
    title: 'IoT Sensor Integration',
    desc: 'Connect temperature, vibration, pressure, flow, humidity, power, and RPM sensors via MQTT, OPC-UA, or REST. Auto-discovery and plug-and-play configuration.',
  },
  {
    icon: '🔮',
    title: 'Predictive Maintenance AI',
    desc: 'ML models trained on your sensor history predict bearing failures, pump cavitation, and motor burnout 2–6 weeks before they happen. Reduce catastrophic failures to near zero.',
  },
  {
    icon: '📋',
    title: 'Auto Work Orders',
    desc: 'When predictions cross threshold, automatically generate maintenance work orders with parts lists, procedures, estimated labor hours, and technician assignments.',
  },
  {
    icon: '📊',
    title: 'Asset Health Dashboard',
    desc: 'Fleet-wide view of all assets with health scores, remaining useful life estimates, maintenance schedules, and drill-down analytics for every piece of equipment.',
  },
  {
    icon: '🔔',
    title: 'Smart Alerting',
    desc: 'Configurable thresholds with escalation chains. SMS, email, PagerDuty, Slack. Reduce alert fatigue with anomaly-based triggers that learn your normal baselines.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$1.50',
    unit: '/asset/mo',
    highlight: false,
    features: [
      'Up to 100 assets',
      '5 sensor types',
      'Basic dashboards',
      'Email alerts',
      '30-day data retention',
      'Community support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$4',
    unit: '/asset/mo',
    highlight: true,
    features: [
      'Up to 1,000 assets',
      'All 15 sensor types',
      'Predictive maintenance AI',
      'Auto work orders',
      'Full API access',
      'Priority support & Slack',
    ],
    cta: 'Start 14-Day Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: '',
    highlight: false,
    features: [
      'Unlimited assets',
      'Custom ML models',
      'On-premise deployment',
      'Digital Twin Studio',
      'Dedicated SLA',
      'White-glove onboarding',
    ],
    cta: 'Contact Sales',
  },
];

const stats = [
  { value: '71%', label: 'Less unplanned downtime' },
  { value: '34%', label: 'Maintenance cost reduction' },
  { value: '10,000+', label: 'Assets monitored' },
  { value: '15', label: 'Sensor types supported' },
];

function AssetMonitorCard() {
  const [healthScore, setHealthScore] = useState(73);
  const [temp, setTemp] = useState(82.4);
  const [vibration, setVibration] = useState(4.7);
  const [rpm, setRpm] = useState(1475);
  const [pressure, setPressure] = useState(34.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((v) => +(v + (Math.random() - 0.48) * 0.3).toFixed(1));
      setVibration((v) => +(Math.max(0, v + (Math.random() - 0.45) * 0.15)).toFixed(2));
      setRpm((v) => Math.round(v + (Math.random() - 0.5) * 5));
      setPressure((v) => +(v + (Math.random() - 0.5) * 0.2).toFixed(1));
      setHealthScore((v) => Math.max(0, Math.min(100, v + Math.round((Math.random() - 0.52) * 2))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const healthColor =
    healthScore > 80
      ? 'text-green-400'
      : healthScore > 60
      ? 'text-yellow-400'
      : healthScore > 40
      ? 'text-orange-400'
      : 'text-red-400';

  const healthBarColor =
    healthScore > 80
      ? 'from-green-500 to-emerald-400'
      : healthScore > 60
      ? 'from-yellow-500 to-amber-400'
      : healthScore > 40
      ? 'from-orange-500 to-amber-500'
      : 'from-red-500 to-rose-500';

  return (
    <div className="rounded-2xl border border-white/10 bg-gray-900/80 p-6 shadow-2xl max-w-md mx-auto">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-cyan-400 font-mono">LIVE</span>
          </div>
          <h3 className="text-lg font-bold">Pump Station #7</h3>
          <p className="text-xs text-gray-500">Centrifugal Pump – Building A, Floor 2</p>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-extrabold ${healthColor}`}>{healthScore}</div>
          <div className="text-xs text-gray-500">/ 100</div>
        </div>
      </div>

      {/* Health Bar */}
      <div className="w-full h-2 bg-gray-800 rounded-full mb-5 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${healthBarColor} transition-all duration-1000`}
          style={{ width: `${healthScore}%` }}
        />
      </div>

      {/* Sensor Readings */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {[
          { label: 'Temperature', value: `${temp}°F`, icon: '🌡️', warn: temp > 85 },
          { label: 'Vibration', value: `${vibration} mm/s`, icon: '📳', warn: vibration > 5.0 },
          { label: 'Motor RPM', value: `${rpm}`, icon: '⚙️', warn: rpm < 1450 || rpm > 1520 },
          { label: 'Pressure', value: `${pressure} PSI`, icon: '💧', warn: pressure > 36 },
        ].map((s, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl border transition-all ${
              s.warn
                ? 'border-orange-500/30 bg-orange-500/5'
                : 'border-white/5 bg-white/[0.02]'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-sm">{s.icon}</span>
              <span className="text-xs text-gray-500">{s.label}</span>
            </div>
            <div className={`text-lg font-bold font-mono ${s.warn ? 'text-orange-400' : 'text-white'}`}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Prediction Alert */}
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
        <div className="flex items-start gap-3">
          <div className="text-xl mt-0.5">⚠️</div>
          <div>
            <div className="text-sm font-semibold text-amber-300">Predicted Bearing Failure</div>
            <div className="text-xs text-gray-400 mt-1">
              Vibration pattern matches bearing wear signature. Estimated failure in{' '}
              <span className="text-amber-300 font-semibold">18 days</span>. Work order{' '}
              <span className="font-mono text-cyan-400">WO-2847</span> auto-generated.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TwinOpsLanding() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'annual'>('monthly');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-sm font-bold text-black">
              T
            </div>
            <span className="text-lg font-bold tracking-tight">TwinOps</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#demo" className="hover:text-white transition-colors">Live Demo</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#integrations" className="hover:text-white transition-colors">Integrations</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-2">
              Log in
            </button>
            <button className="text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 px-5 py-2 rounded-full font-medium text-black transition-all shadow-lg shadow-cyan-500/20">
              Request Demo
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
          <div className="md:hidden border-t border-white/5 bg-black px-6 py-4 flex flex-col gap-4 text-sm text-gray-400">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Live Demo</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#integrations" className="hover:text-white">Integrations</a>
            <button className="mt-2 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 rounded-full font-medium text-black">
              Request Demo
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/8 via-transparent to-transparent" />
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Trusted by Fortune 500 manufacturers
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            See Your Assets{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Before They Break
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect IoT sensors to 3D digital twins. Predict failures weeks in advance.
            Auto-generate work orders. Cut unplanned downtime by 71%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-full font-semibold text-black transition-all shadow-xl shadow-cyan-500/25 text-base">
              Request a Demo
            </button>
            <button className="px-8 py-3.5 border border-white/10 hover:border-white/20 rounded-full font-semibold text-gray-300 hover:text-white transition-all text-base">
              Watch 2-Min Video →
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
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
              From sensors to{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                predictions
              </span>{' '}
              in minutes
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              TwinOps connects your physical infrastructure to intelligent digital twins.
              See everything. Predict anything. Fix it before it breaks.
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
                    ? 'border-cyan-500/40 bg-cyan-500/5 shadow-lg shadow-cyan-500/5'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 pointer-events-none ${
                    hoveredFeature === i ? 'opacity-100' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Asset Demo */}
      <section id="demo" className="py-24 px-6 bg-gray-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live asset monitoring,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                in real time
              </span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              This card updates every 2 seconds — exactly what your operations team sees.
              Health scores, sensor readings, and predictive alerts all in one place.
            </p>
          </div>
          <AssetMonitorCard />
        </div>
      </section>

      {/* Integrations Bar */}
      <section id="integrations" className="py-16 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-6">
            Connects with your existing stack
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {[
              'MQTT', 'OPC-UA', 'Modbus', 'SAP PM', 'Maximo',
              'ServiceNow', 'PagerDuty', 'Slack', 'Azure IoT', 'AWS IoT',
            ].map((name, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 hover:text-cyan-400 transition-all cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pay per asset,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                scale infinitely
              </span>
            </h2>
            <p className="text-gray-500 mb-8">Start small with a free trial. Grow to thousands of assets.</p>
            <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setActiveTab('monthly')}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'monthly'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab('annual')}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'annual'
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Annual
                <span className="ml-1.5 text-xs text-green-400">Save 25%</span>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border transition-all ${
                  plan.highlight
                    ? 'border-cyan-500/40 bg-cyan-500/5 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-xs font-semibold text-black">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-extrabold">
                    {plan.price === 'Custom'
                      ? 'Custom'
                      : activeTab === 'annual'
                      ? plan.price === '$1.50'
                        ? '$1.12'
                        : '$3'
                      : plan.price}
                  </span>
                  {plan.unit && <span className="text-gray-500 text-sm mb-1">{plan.unit}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                      <svg
                        className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0"
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
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black shadow-lg shadow-cyan-500/20'
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

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
          <div className="relative p-12 rounded-3xl border border-white/5 bg-white/[0.02]">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One hour of unplanned downtime costs $260K
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Your equipment is already telling you it&apos;s about to fail — you just can&apos;t hear it yet.
              TwinOps listens, predicts, and acts before the breakdown.
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-full font-semibold text-black text-base transition-all shadow-xl shadow-cyan-500/25">
              Schedule a Demo →
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
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-black">
                  T
                </div>
                <span className="font-bold tracking-tight">TwinOps</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Digital twin monitoring and predictive maintenance for industrial operations.
              </p>
            </div>
            {[
              { title: 'Product', links: ['Digital Twins', 'Sensors', 'Predictions', 'Work Orders'] },
              { title: 'Resources', links: ['Documentation', 'API Reference', 'Blog', 'Case Studies'] },
              { title: 'Company', links: ['About', 'Careers', 'Partners', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Compliance'] },
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
            <p className="text-xs text-gray-600">© 2026 TwinOps, Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">GitHub</a>
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
              <a href="#" className="hover:text-gray-400">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
