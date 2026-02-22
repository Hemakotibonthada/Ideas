import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-sm">BE</div>
            <span className="text-xl font-bold text-gray-900">BookEase</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700">Start Free</Link>
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Online booking<br /><span className="text-teal-600">made simple</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Let your clients book appointments 24/7. Perfect for salons, clinics, consultants, fitness studios, and more. Accept payments online and reduce no-shows.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-teal-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-700">Start Free Trial</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Built for service businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📅', title: 'Online Booking Page', desc: 'Beautiful booking page with your branding. Clients pick service, staff, and time slot.' },
              { icon: '👩‍💼', title: 'Staff Management', desc: 'Individual schedules, breaks, and service assignments for each team member.' },
              { icon: '💳', title: 'Online Payments', desc: 'Collect deposits or full payments at booking time. Stripe integration.' },
              { icon: '🔔', title: 'Automated Reminders', desc: 'Email & SMS reminders reduce no-shows by up to 90%.' },
              { icon: '📊', title: 'Business Analytics', desc: 'Revenue reports, booking trends, staff performance, and customer insights.' },
              { icon: '⭐', title: 'Reviews & Ratings', desc: 'Collect customer reviews after appointments. Build trust and credibility.' },
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
              { name: 'Free', price: '$0', features: ['1 staff member', '50 bookings/month', 'Booking page', 'Email reminders'] },
              { name: 'Professional', price: '$29', desc: '/month', features: ['5 staff members', 'Unlimited bookings', 'Online payments', 'SMS reminders', 'Custom branding', 'Analytics'], popular: true },
              { name: 'Business', price: '$79', desc: '/month', features: ['Unlimited staff', 'Multiple locations', 'Group bookings', 'Gift cards & coupons', 'API access', 'Priority support'] },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl border p-6 text-left ${p.popular ? 'border-teal-500 ring-2 ring-teal-500' : ''}`}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2"><span className="text-4xl font-bold">{p.price}</span><span className="text-gray-500 text-sm">{p.desc || ''}</span></div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => <li key={f} className="text-sm text-gray-600 flex items-center gap-2"><span className="text-green-500">✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-gray-500">© 2026 BookEase. All rights reserved.</footer>
    </div>
  );
}
