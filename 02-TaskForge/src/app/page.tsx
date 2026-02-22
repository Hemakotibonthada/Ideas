import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-sm">TF</div>
              <span className="text-xl font-bold text-gray-900">TaskForge</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
              <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
              <Link href="/auth/register" className="btn-primary">Get Started Free</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-8">
            ⚡ Built for high-performance teams
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
            Ship projects<br />
            <span className="text-violet-600">10x faster</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            The modern project management platform for agile teams. Kanban boards, sprint planning, time tracking, and real-time collaboration — all in one place.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/auth/register" className="btn-primary text-base px-8 py-3.5">Start Free Trial</Link>
            <a href="#demo" className="btn-secondary text-base px-8 py-3.5">See Demo</a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Everything your team needs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📋', title: 'Kanban Boards', desc: 'Visualize workflows with drag-and-drop boards. Customize columns, WIP limits, and swimlanes.' },
              { icon: '🏃', title: 'Sprint Planning', desc: 'Plan and manage sprints with story points, velocity tracking, and burndown charts.' },
              { icon: '⏱️', title: 'Time Tracking', desc: 'Built-in time tracking for every task. Generate timesheets and productivity reports.' },
              { icon: '💬', title: 'Real-time Collaboration', desc: 'Comments, mentions, and live updates via WebSocket. Stay in sync with your team.' },
              { icon: '🏷️', title: 'Labels & Filters', desc: 'Organize tasks with custom labels, filters, and views. Find anything instantly.' },
              { icon: '📊', title: 'Analytics & Reports', desc: 'Track velocity, cycle time, and team productivity with beautiful charts and dashboards.' },
              { icon: '🔗', title: 'Integrations', desc: 'Connect with GitHub, Slack, Figma, and 50+ tools your team already uses.' },
              { icon: '🔒', title: 'Enterprise Security', desc: 'SSO/SAML, audit logs, data encryption, and role-based permissions.' },
              { icon: '📱', title: 'Mobile App', desc: 'Manage projects on the go with our native iOS and Android apps.' },
            ].map((f) => (
              <div key={f.title} className="card hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Plans for every team size</h2>
          <p className="text-gray-600 mb-16">Start free for up to 5 members. Upgrade as you scale.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Free', price: '$0', desc: 'For small teams', features: ['5 members', '3 projects', 'Kanban boards', 'Basic reporting'] },
              { name: 'Business', price: '$12', desc: 'Per seat/month', features: ['Unlimited members', 'Unlimited projects', 'Sprint planning', 'Time tracking', 'Advanced analytics', 'Priority support'], popular: true },
              { name: 'Enterprise', price: '$25', desc: 'Per seat/month', features: ['Everything in Business', 'SSO/SAML', 'Audit logs', 'Custom fields', 'API access', 'Dedicated support'] },
            ].map((p) => (
              <div key={p.name} className={`card text-left ${p.popular ? 'border-violet-500 ring-2 ring-violet-500' : ''}`}>
                {p.popular && <span className="badge bg-violet-100 text-violet-700 mb-4">Most Popular</span>}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2"><span className="text-4xl font-bold">{p.price}</span><span className="text-gray-500 text-sm"> {p.desc}</span></div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/auth/register" className={`mt-6 w-full ${p.popular ? 'btn-primary' : 'btn-secondary'}`}>Get Started</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 text-center text-sm text-gray-500">
        © 2026 TaskForge. All rights reserved.
      </footer>
    </div>
  );
}
