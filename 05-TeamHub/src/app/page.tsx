import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">TH</div>
            <span className="text-xl font-bold text-gray-900">TeamHub</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">Start Free Trial</Link>
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            HR made<br /><span className="text-indigo-600">human-friendly</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Complete HR platform for modern companies. Employee management, leave tracking, payroll, attendance, performance reviews — all streamlined.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-indigo-700">Start Free Trial</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Everything HR needs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '👥', title: 'Employee Directory', desc: 'Complete employee profiles, org charts, and department management.' },
              { icon: '🏖️', title: 'Leave Management', desc: 'Custom leave types, approval workflows, and balance tracking.' },
              { icon: '⏰', title: 'Attendance Tracking', desc: 'Clock in/out, overtime tracking, and attendance reports.' },
              { icon: '💰', title: 'Payroll Processing', desc: 'Automated payroll with tax calculations, deductions, and payslips.' },
              { icon: '⭐', title: 'Performance Reviews', desc: 'Goal setting, 360° feedback, and performance tracking cycles.' },
              { icon: '📋', title: 'Expense Management', desc: 'Submit and approve expenses with receipt uploads and reporting.' },
              { icon: '🎓', title: 'Training Tracker', desc: 'Track employee skills, certifications, and training programs.' },
              { icon: '📢', title: 'Announcements', desc: 'Company-wide announcements and policy management.' },
              { icon: '📁', title: 'Document Management', desc: 'Store employee documents securely — contracts, IDs, certificates.' },
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
          <h2 className="text-3xl font-bold mb-16">Pricing — Per Employee/Month</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Essential', price: '$4', features: ['Employee directory', 'Leave management', 'Attendance', 'Basic reports'] },
              { name: 'Professional', price: '$8', features: ['Everything in Essential', 'Payroll processing', 'Performance reviews', 'Expense management', 'Training tracker'], popular: true },
              { name: 'Enterprise', price: '$14', features: ['Everything in Pro', 'Custom workflows', 'API access', 'SSO/SAML', 'Audit logs', 'Dedicated support'] },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl border p-6 text-left ${p.popular ? 'border-indigo-500 ring-2 ring-indigo-500' : ''}`}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2"><span className="text-4xl font-bold">{p.price}</span><span className="text-gray-500 text-sm">/employee/month</span></div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => <li key={f} className="text-sm text-gray-600 flex items-center gap-2"><span className="text-green-500">✓</span>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-gray-500">© 2026 TeamHub. All rights reserved.</footer>
    </div>
  );
}
