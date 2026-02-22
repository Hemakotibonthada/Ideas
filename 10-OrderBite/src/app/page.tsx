import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-sm">OB</div>
            <span className="text-xl font-bold text-gray-900">OrderBite</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <div className="inline-flex rounded-full bg-red-50 border border-red-200 px-4 py-1.5 text-sm font-medium text-red-700 mb-8">
            🍕 Trusted by 5,000+ restaurants
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Your restaurant,<br /><span className="text-red-600">digitized</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Complete restaurant management — POS system, online ordering, table management, kitchen display, and delivery tracking. Accept orders from every channel.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-red-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-red-700">Start Free Trial</Link>
            <a href="#demo" className="inline-flex items-center rounded-lg border border-gray-300 px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50">See Demo</a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50/50 border-y">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: '5K+', label: 'Restaurants' },
            { value: '$500M+', label: 'Orders Processed' },
            { value: '15M+', label: 'Orders Monthly' },
            { value: '99.99%', label: 'Uptime' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Everything restaurants need</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📱', title: 'Online Ordering', desc: 'Branded ordering page for delivery & pickup. No commission fees — it\'s YOUR platform.' },
              { icon: '🖥️', title: 'POS System', desc: 'Tablet-ready POS for dine-in. Table management, split bills, and quick order entry.' },
              { icon: '👨‍🍳', title: 'Kitchen Display', desc: 'Real-time kitchen display system. Order queue, prep time tracking, and item status.' },
              { icon: '🪑', title: 'Table Management', desc: 'Floor plan, table status, QR code ordering, and reservation management.' },
              { icon: '📦', title: 'Menu Management', desc: 'Digital menu with categories, modifiers, variants, allergen info, and photos.' },
              { icon: '🚗', title: 'Delivery Tracking', desc: 'Real-time delivery tracking, driver assignment, and estimated arrival times.' },
              { icon: '💰', title: 'Payment Processing', desc: 'Accept cash, cards, and online payments. Tips, split bills, and refunds.' },
              { icon: '📊', title: 'Sales Analytics', desc: 'Revenue reports, popular items, peak hours, and customer insights.' },
              { icon: '🎁', title: 'Promotions', desc: 'Coupons, happy hour pricing, combo deals, and loyalty programs.' },
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

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$49', desc: '/month', features: ['Online ordering page', 'Basic POS', 'Menu management', '100 orders/month', 'Email support'] },
              { name: 'Professional', price: '$99', desc: '/month', features: ['Unlimited orders', 'Full POS system', 'Kitchen display', 'Table management', 'Delivery tracking', 'Analytics dashboard', 'Promotions'], popular: true },
              { name: 'Enterprise', price: '$249', desc: '/month', features: ['Everything in Pro', 'Multi-location', 'API access', 'Custom integrations', 'Dedicated success manager', 'White-label app'] },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl border p-6 text-left ${p.popular ? 'border-red-500 ring-2 ring-red-500' : ''}`}>
                {p.popular && <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700 mb-4">Most Popular</span>}
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

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your restaurant?</h2>
          <p className="text-gray-600 mb-8">Join 5,000+ restaurants already using OrderBite to increase revenue and efficiency.</p>
          <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-red-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-red-700">Start Your Free Trial</Link>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-gray-500">© 2026 OrderBite. All rights reserved.</footer>
    </div>
  );
}
