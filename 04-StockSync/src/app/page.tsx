import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-sm">SS</div>
            <span className="text-xl font-bold text-gray-900">StockSync</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-700">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Smart inventory<br /><span className="text-orange-600">management</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Real-time stock tracking across multiple warehouses. Barcode scanning, purchase orders, low-stock alerts, and powerful reporting.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-orange-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-orange-700">Start Free Trial</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Complete inventory control</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📦', title: 'Multi-Warehouse', desc: 'Track stock across multiple warehouses, zones, and shelf locations.' },
              { icon: '📱', title: 'Barcode & QR Scanning', desc: 'Scan barcodes for instant stock lookups, receiving, and shipping.' },
              { icon: '🔔', title: 'Smart Alerts', desc: 'Automated low-stock, expiry, and reorder point notifications.' },
              { icon: '📋', title: 'Purchase Orders', desc: 'Create and manage POs with supplier tracking and auto-reordering.' },
              { icon: '📊', title: 'Inventory Reports', desc: 'Stock valuation, movement history, and turnover analysis.' },
              { icon: '🔄', title: 'Stock Transfers', desc: 'Transfer stock between warehouses with full audit trail.' },
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
          <h2 className="text-3xl font-bold mb-16">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$29', desc: '/month', features: ['1 warehouse', '500 products', '2 users', 'Basic reports'] },
              { name: 'Business', price: '$79', desc: '/month', features: ['5 warehouses', 'Unlimited products', '10 users', 'Purchase orders', 'Barcode scanning', 'API access'], popular: true },
              { name: 'Enterprise', price: '$199', desc: '/month', features: ['Unlimited warehouses', 'Unlimited users', 'Batch tracking', 'Expiry management', 'Custom integrations', 'Dedicated support'] },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl border p-6 text-left ${p.popular ? 'border-orange-500 ring-2 ring-orange-500' : ''}`}>
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

      <footer className="border-t py-12 text-center text-sm text-gray-500">© 2026 StockSync. All rights reserved.</footer>
    </div>
  );
}
