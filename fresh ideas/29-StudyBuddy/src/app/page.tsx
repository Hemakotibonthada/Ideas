'use client';

import { useState } from 'react';

export default function StudyBuddyLanding() {
  const [annual, setAnnual] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [demoFlipped, setDemoFlipped] = useState<number | null>(null);

  const demoCards = [
    { q: 'What is spaced repetition?', a: 'A study technique where reviews are spaced at increasing intervals to maximize long-term retention.' },
    { q: 'What is the forgetting curve?', a: 'Ebbinghaus\'s model showing how information is lost over time when there is no attempt to retain it.' },
    { q: 'What is active recall?', a: 'A learning strategy that involves actively stimulating memory during the learning process by testing yourself.' },
  ];

  const features = [
    { icon: '🃏', title: 'Auto-Flashcards', desc: 'Paste notes or upload PDFs — AI creates perfectly structured flashcards in seconds.' },
    { icon: '🧠', title: 'Spaced Repetition', desc: 'Scientifically-timed review intervals so you remember 90% of everything you study.' },
    { icon: '📝', title: 'Practice Quizzes', desc: 'AI generates quizzes from your material — multiple choice, fill-in, and short answer.' },
    { icon: '📅', title: 'Study Planner', desc: 'AI creates optimal study schedules before exams based on your workload.' },
    { icon: '📊', title: 'Progress Metrics', desc: 'Track retention rates, study time analytics, and mastery levels per topic.' },
    { icon: '👥', title: 'Group Study', desc: 'Share decks and study with classmates in real-time with live sessions.' },
  ];

  const stats = [
    { value: '45M+', label: 'Flashcards Generated' },
    { value: '90%', label: 'Retention Rate' },
    { value: '780K+', label: 'Students' },
    { value: '34K+', label: 'Courses Supported' },
  ];

  const pricing = [
    { tier: 'Free', price: 0, period: '', features: ['50 flashcards', 'Basic quizzes', 'Community decks', 'Email support'], cta: 'Start Studying' },
    { tier: 'Student', price: annual ? 3.49 : 4.99, period: '/mo', features: ['Unlimited flashcards', 'Study planner', 'Full analytics', 'Spaced repetition', 'PDF upload'], cta: 'Go Student', popular: true },
    { tier: 'Campus', price: annual ? 1.99 : 2.99, period: '/student', features: ['Team decks', 'Instructor dashboard', 'LMS integration', 'All Student features', 'Bulk management'], cta: 'Contact Sales' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">StudyBuddy</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition">For Schools</a>
            <a href="#" className="hover:text-white transition">Science</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-gray-300 hover:text-white transition">Sign In</button>
            <button className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition font-medium">Try Free</button>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 py-4 flex flex-col gap-3">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white">For Schools</a>
            <a href="#" className="text-gray-300 hover:text-white">Science</a>
            <button className="mt-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 font-medium">Try Free</button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-44 right-1/4 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            🎓 Trusted by 780K+ students worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Study Smarter.{' '}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Remember Everything.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Paste your notes. AI generates flashcards, quizzes, and study plans using spaced repetition. Remember 90% of what you study — backed by cognitive science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-blue-500/25">
              Create Flashcards Free
            </button>
            <button className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-300 font-semibold text-lg hover:bg-gray-900 transition">
              See the Science
            </button>
          </div>
          {/* Interactive Flashcard Demo */}
          <div className="mx-auto max-w-lg">
            <p className="text-sm text-gray-400 mb-4">🧠 Try it — click a card to flip it:</p>
            <div className="space-y-3">
              {demoCards.map((card, i) => (
                <div
                  key={i}
                  onClick={() => setDemoFlipped(demoFlipped === i ? null : i)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
                    demoFlipped === i
                      ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/10'
                      : 'border-gray-800 bg-gray-900 hover:border-blue-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{demoFlipped === i ? 'Answer' : 'Question'}</span>
                    <span className="text-xs text-gray-600">{demoFlipped === i ? '🔄 Click to flip back' : '👆 Click to reveal'}</span>
                  </div>
                  <p className={`mt-2 text-sm ${demoFlipped === i ? 'text-blue-300' : 'text-white'}`}>
                    {demoFlipped === i ? card.a : card.q}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-gray-800 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">{s.value}</div>
              <div className="mt-1 text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Powered by <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Cognitive Science</span></h2>
          <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">Every feature is designed around proven learning techniques that actually work.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-blue-500/40 transition group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invest in <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Your Future</span></h2>
          <p className="text-gray-400 mb-8">Less than a coffee. Better grades guaranteed or your money back.</p>
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${annual ? 'bg-blue-500' : 'bg-gray-700'}`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : ''}`} />
            </button>
            <span className={`text-sm ${annual ? 'text-white' : 'text-gray-500'}`}>Annual <span className="text-blue-400 text-xs">Save 30%</span></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.tier} className={`p-8 rounded-2xl border ${p.popular ? 'border-blue-500 bg-gray-900 shadow-lg shadow-blue-500/10 relative' : 'border-gray-800 bg-gray-900/60'}`}>
                {p.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-xs font-bold">BEST VALUE</div>}
                <h3 className="text-xl font-bold mb-2">{p.tier}</h3>
                <div className="mb-6"><span className="text-4xl font-extrabold">${p.price}</span><span className="text-gray-400">{p.period}</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-300"><span className="text-blue-400">✓</span>{feat}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition ${p.popular ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90' : 'border border-gray-700 hover:bg-gray-800'}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <span className="font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">StudyBuddy</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Help</a>
            <a href="#" className="hover:text-gray-300">Research</a>
          </div>
          <p className="text-xs text-gray-600">© 2026 StudyBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
