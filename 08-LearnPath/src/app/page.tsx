import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">LP</div>
            <span className="text-xl font-bold text-gray-900">LearnPath</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/courses" className="text-sm font-medium text-gray-600">Browse Courses</Link>
            <Link href="/teach" className="text-sm font-medium text-gray-600">Teach</Link>
            <Link href="/auth/login" className="text-sm font-medium text-gray-600">Sign In</Link>
            <Link href="/auth/register" className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Get Started</Link>
          </div>
        </div>
      </nav>

      <section className="py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Learn anything,<br /><span className="text-blue-600">teach everything</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            The all-in-one platform to create, sell, and deliver online courses. Video hosting, quizzes, certificates, student analytics — everything you need to build a successful education business.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/courses" className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-700">Explore Courses</Link>
            <Link href="/teach" className="inline-flex items-center rounded-lg border border-gray-300 px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50">Start Teaching</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50/50 border-y">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: '50K+', label: 'Students' },
            { value: '2,500+', label: 'Courses' },
            { value: '500+', label: 'Instructors' },
            { value: '4.8/5', label: 'Avg Rating' },
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
          <h2 className="text-3xl font-bold text-center mb-16">Powerful course creation tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎬', title: 'Video Hosting', desc: 'Upload and stream HD video lessons. Progress tracking and resume playback.' },
              { icon: '📝', title: 'Quizzes & Assignments', desc: 'Create interactive quizzes with auto-grading. Multiple question types.' },
              { icon: '🎓', title: 'Certificates', desc: 'Auto-generate completion certificates with unique verification IDs.' },
              { icon: '📊', title: 'Student Analytics', desc: 'Track enrollment, completion rates, engagement, and revenue per course.' },
              { icon: '💬', title: 'Discussion Forums', desc: 'Course-specific discussion boards for student-instructor interaction.' },
              { icon: '💰', title: 'Monetization', desc: 'Set prices, create coupons, and process payments via Stripe.' },
              { icon: '📱', title: 'Mobile Learning', desc: 'Fully responsive design for learning on any device.' },
              { icon: '📋', title: 'Curriculum Builder', desc: 'Drag-and-drop course builder with sections, lessons, and resources.' },
              { icon: '🏷️', title: 'Course Categories', desc: 'Organize courses by category with search and filter functionality.' },
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
          <h2 className="text-3xl font-bold mb-16">Revenue Model</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border bg-white p-8 text-left">
              <h3 className="text-xl font-bold mb-4">For Instructors</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Keep 70-95% of revenue</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Set your own prices</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Monthly payouts via Stripe</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span>Create unlimited courses</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-white p-8 text-left">
              <h3 className="text-xl font-bold mb-4">Platform Revenue</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span>5-30% commission per sale</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span>Pro instructor plans ($49/mo)</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span>Enterprise team plans</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">→</span>Featured course placements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 text-center text-sm text-gray-500">© 2026 LearnPath. All rights reserved.</footer>
    </div>
  );
}
