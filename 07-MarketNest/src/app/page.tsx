import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold text-sm">MN</div>
            <span className="text-xl font-bold text-gray-900">MarketNest</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
            <Link href="/seller/register" className="text-sm font-medium text-gray-600">Sell on MarketNest</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-700">Shop Now</Link>
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Your marketplace,<br /><span className="text-rose-600">your rules</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Launch your own multi-vendor marketplace. Let sellers list products, buyers shop with confidence, and you earn commission on every sale.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-rose-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-rose-700">Launch Your Marketplace</Link>
            <Link href="/seller/register" className="inline-flex items-center rounded-lg border border-gray-300 px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50">Become a Seller</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Everything you need to run a marketplace</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏪', title: 'Vendor Management', desc: 'Onboard sellers, manage stores, set commissions, and handle payouts automatically.' },
              { icon: '🛍️', title: 'Product Catalog', desc: 'Rich product listings with images, variants, categories, and search optimization.' },
              { icon: '🛒', title: 'Shopping Cart', desc: 'Multi-vendor cart, wishlists, and seamless checkout experience.' },
              { icon: '💳', title: 'Split Payments', desc: 'Automatic payment splitting between marketplace and vendors via Stripe Connect.' },
              { icon: '📦', title: 'Order Management', desc: 'Per-vendor order fulfillment, tracking, returns, and refund handling.' },
              { icon: '⭐', title: 'Reviews & Trust', desc: 'Product reviews, seller ratings, and verified purchase badges.' },
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
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Revenue Model</h2>
          <p className="text-gray-600 mb-8">Earn money from every transaction on your marketplace</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border p-6">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold">Transaction Fees</h3>
              <p className="text-sm text-gray-500 mt-2">5-15% commission on each sale</p>
            </div>
            <div className="rounded-xl border p-6">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-semibold">Seller Subscriptions</h3>
              <p className="text-sm text-gray-500 mt-2">$29-$199/mo for premium seller features</p>
            </div>
            <div className="rounded-xl border p-6">
              <div className="text-3xl mb-2">📢</div>
              <h3 className="font-semibold">Promoted Listings</h3>
              <p className="text-sm text-gray-500 mt-2">Sellers pay to boost product visibility</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-gray-500">© 2026 MarketNest. All rights reserved.</footer>
    </div>
  );
}
