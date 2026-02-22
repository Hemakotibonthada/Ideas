import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">InvoiceFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900">Testimonials</a>
              <Link href="/auth/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">Sign In</Link>
              <Link href="/auth/register" className="btn-primary">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 mb-8">
              🚀 Trusted by 10,000+ businesses worldwide
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
              Invoicing made
              <span className="block text-primary-600">effortless</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Create professional invoices in seconds, automate billing, accept payments online, and get paid faster. The all-in-one billing platform for modern businesses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/auth/register" className="btn-primary text-base px-8 py-3.5">
                Start Free — No Card Required
              </Link>
              <a href="#demo" className="btn-secondary text-base px-8 py-3.5">
                <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                Watch Demo
              </a>
            </div>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary-100 to-primary-50 opacity-40 blur-3xl" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '$2.5B+', label: 'Invoices Processed' },
              { value: '10K+', label: 'Active Businesses' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '< 2 days', label: 'Avg. Payment Time' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Everything you need to get paid</h2>
            <p className="mt-4 text-lg text-gray-600">Powerful features to streamline your billing workflow</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📄', title: 'Professional Invoices', description: 'Create beautiful, branded invoices with customizable templates. Add your logo, colors, and payment terms.' },
              { icon: '💳', title: 'Online Payments', description: 'Accept credit cards, bank transfers, and PayPal. Integrated with Stripe for seamless payment processing.' },
              { icon: '🔄', title: 'Recurring Billing', description: 'Set up automatic recurring invoices for subscription-based services. Never miss a billing cycle.' },
              { icon: '📊', title: 'Analytics Dashboard', description: 'Track revenue, outstanding payments, and client insights with real-time analytics and reports.' },
              { icon: '📧', title: 'Smart Reminders', description: 'Automated payment reminders reduce late payments by up to 50%. Customize timing and messaging.' },
              { icon: '🌍', title: 'Multi-Currency', description: 'Invoice clients in their local currency. Support for 100+ currencies with automatic conversion.' },
              { icon: '👥', title: 'Client Portal', description: 'Give clients a branded portal to view invoices, make payments, and download receipts.' },
              { icon: '📱', title: 'Mobile Ready', description: 'Create and manage invoices on the go. Fully responsive design works on any device.' },
              { icon: '🔒', title: 'Enterprise Security', description: 'Bank-level encryption, SOC 2 compliance, and role-based access control to protect your data.' },
            ].map((feature) => (
              <div key={feature.title} className="card hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-600">Start free, scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$9',
                period: '/month',
                description: 'Perfect for freelancers',
                features: ['Up to 50 invoices/month', '3 clients', 'Basic templates', 'Email support', 'Payment tracking'],
                cta: 'Start Free Trial',
                popular: false,
              },
              {
                name: 'Professional',
                price: '$29',
                period: '/month',
                description: 'Best for growing businesses',
                features: ['Unlimited invoices', 'Unlimited clients', 'Custom branding', 'Recurring billing', 'Analytics dashboard', 'Priority support', 'API access'],
                cta: 'Start Free Trial',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '$79',
                period: '/month',
                description: 'For large organizations',
                features: ['Everything in Pro', 'Multi-user access', 'Role-based permissions', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee', 'SSO & SAML'],
                cta: 'Contact Sales',
                popular: false,
              },
            ].map((plan) => (
              <div key={plan.name} className={`card relative ${plan.popular ? 'border-primary-500 ring-2 ring-primary-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                      <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/auth/register" className={`mt-8 w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ready to get paid faster?</h2>
          <p className="mt-4 text-lg text-gray-600">Join 10,000+ businesses using InvoiceFlow to streamline their billing.</p>
          <Link href="/auth/register" className="btn-primary text-base px-8 py-3.5 mt-8 inline-flex">
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">InvoiceFlow</span>
              </div>
              <p className="mt-4 text-sm text-gray-500">Professional invoicing for modern businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Product</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-700">Features</a></li>
                <li><a href="#" className="hover:text-gray-700">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-700">Integrations</a></li>
                <li><a href="#" className="hover:text-gray-700">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-700">About</a></li>
                <li><a href="#" className="hover:text-gray-700">Blog</a></li>
                <li><a href="#" className="hover:text-gray-700">Careers</a></li>
                <li><a href="#" className="hover:text-gray-700">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Legal</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-700">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-700">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-700">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2026 InvoiceFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
