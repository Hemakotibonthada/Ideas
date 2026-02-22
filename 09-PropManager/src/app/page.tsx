import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold text-sm">PM</div>
            <span className="text-xl font-bold text-gray-900">PropManager</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-700">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Property management<br /><span className="text-amber-600">simplified</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Manage properties, tenants, leases, and maintenance in one place. Collect rent online, track expenses, and grow your real estate portfolio.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-amber-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-amber-700">Start Free Trial</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Complete property management</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏠', title: 'Property Portfolio', desc: 'Track all properties, units, and amenities. Photos, valuations, and tax info.' },
              { icon: '👤', title: 'Tenant Management', desc: 'Applicant screening, tenant profiles, communication, and document storage.' },
              { icon: '📜', title: 'Lease Tracking', desc: 'Digital lease management with renewal alerts, terms, and e-signatures.' },
              { icon: '💳', title: 'Online Rent Collection', desc: 'Tenants pay rent online via Stripe. Auto late fees and payment tracking.' },
              { icon: '🔧', title: 'Maintenance Requests', desc: 'Tenants submit requests. Assign vendors, track progress, and manage costs.' },
              { icon: '📊', title: 'Financial Reports', desc: 'Income/expense tracking, P&L statements, and tax-ready reports.' },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border bg-white p-6 shadow-sm">
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
          <h2 className="text-3xl font-bold mb-16">Pricing — Per Unit/Month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$1.50', features: ['Up to 10 units', 'Tenant management', 'Lease tracking', 'Online rent collection'] },
              { name: 'Professional', price: '$2.50', features: ['Up to 100 units', 'Maintenance system', 'Financial reports', 'Document storage', 'Tenant portal'], popular: true },
              { name: 'Enterprise', price: '$4', features: ['Unlimited units', 'Multi-property', 'Vendor management', 'API access', 'Custom branding', 'Priority support'] },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl border p-6 text-left ${p.popular ? 'border-amber-500 ring-2 ring-amber-500' : ''}`}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2"><span className="text-4xl font-bold">{p.price}</span><span className="text-gray-500 text-sm">/unit/month</span></div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => <li key={f} className="text-sm text-gray-600 flex items-center gap-2"><span className="text-green-500">✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-gray-500">© 2026 PropManager. All rights reserved.</footer>
    </div>
  );
}
