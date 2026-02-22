import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">SP</div>
            <span className="text-xl font-bold text-gray-900">SalesPipe</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <div className="inline-flex rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-8">
            🎯 Close more deals, faster
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
            Your sales pipeline,<br /><span className="text-emerald-600">supercharged</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            The modern CRM that helps you track leads, manage deals, and close more sales. Visual pipeline, contact management, and powerful analytics — all in one platform.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-emerald-700">Start Free — No Card Required</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Built for modern sales teams</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🔄', title: 'Visual Pipeline', desc: 'Drag-and-drop deal management. See your entire pipeline at a glance and never miss a follow-up.' },
              { icon: '👤', title: 'Contact Management', desc: 'Full contact profiles with interaction history, email tracking, and lead scoring.' },
              { icon: '📊', title: 'Sales Analytics', desc: 'Revenue forecasting, conversion rates, and team performance dashboards.' },
              { icon: '📧', title: 'Email Tracking', desc: 'Know when prospects open your emails. Automated follow-up sequences.' },
              { icon: '🏢', title: 'Company Insights', desc: 'Enrich company data automatically. Track relationships across organizations.' },
              { icon: '🤖', title: 'Automation', desc: 'Automate repetitive tasks. Lead assignment, follow-up reminders, and deal routing.' },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$15', desc: '/user/month', features: ['500 contacts', '2 pipelines', 'Email tracking', 'Basic reports'] },
              { name: 'Growth', price: '$39', desc: '/user/month', features: ['10,000 contacts', 'Unlimited pipelines', 'Lead scoring', 'Workflow automation', 'Custom fields', 'API access'], popular: true },
              { name: 'Enterprise', price: '$79', desc: '/user/month', features: ['Unlimited contacts', 'Revenue forecasting', 'Territory management', 'SSO/SAML', 'Dedicated support'] },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl border p-6 text-left ${p.popular ? 'border-emerald-500 ring-2 ring-emerald-500 shadow-lg' : 'border-gray-200'}`}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2"><span className="text-4xl font-bold">{p.price}</span><span className="text-gray-500 text-sm">{p.desc}</span></div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => <li key={f} className="text-sm text-gray-600 flex items-center gap-2"><span className="text-green-500">✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-gray-500">© 2026 SalesPipe. All rights reserved.</footer>
    </div>
  );
}
