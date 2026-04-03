'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

const staffOptions = ['1–5 people', '6–15 people', '16–50 people', '50+ people'];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    staffSize: '',
    biggestTask: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const trustPoints = [
    'Free, no obligation',
    '30 minutes — respectful of your time',
    'Clear automation plan you can keep',
  ];

  const contactDetails = [
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z" />
        </svg>
      ),
      label: 'Call or text us',
      value: '(201) 731-6224',
      href: 'tel:+12017316224',
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: 'Email us directly',
      value: 'emperorworkflows@gmail.com',
      href: 'mailto:emperorworkflows@gmail.com',
    },
  ];

  if (status === 'success') {
    return (
      <div className="bg-bg-primary pt-20 min-h-screen flex items-center justify-center">
        <FadeIn className="text-center px-4">
          <div className="w-20 h-20 rounded-full bg-accent-teal flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-4">You&apos;re booked in!</h2>
          <p className="text-text-secondary max-w-md mx-auto mb-8">
            We&apos;ve received your details and will be in touch within 24 hours to confirm your free audit call.
          </p>
          <a href="/" className="btn-outline px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
            Back to Home <ArrowRight size={16} />
          </a>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="section-label mb-4">Get Started</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-5">
              Let&apos;s Build Your{' '}
              <span className="text-gradient">First Automation</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Book a free 30-minute workflow audit. We&apos;ll identify exactly what to automate first and give you a clear plan — no obligation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass card-glow rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="James Robertson"
                      className="w-full bg-card-bg border border-border-color rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-teal focus:bg-card-bg transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Company Name *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Robertson & Co. Accountants"
                      className="w-full bg-card-bg border border-border-color rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-teal focus:bg-card-bg transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="james@robertson.co.uk"
                      className="w-full bg-card-bg border border-border-color rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-teal focus:bg-card-bg transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 7700 000000"
                      className="w-full bg-card-bg border border-border-color rounded-xl px-4 py-3 text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent-teal focus:bg-card-bg transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="staffSize" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    How Many Staff Does Your Firm Have? *
                  </label>
                  <select
                    id="staffSize"
                    name="staffSize"
                    required
                    value={form.staffSize}
                    onChange={handleChange}
                    className="w-full bg-card-bg border border-border-color rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent-teal transition-all duration-200 text-text-primary appearance-none"
                  >
                    <option value="" disabled className="bg-card-bg text-text-secondary">Select firm size...</option>
                    {staffOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-card-bg text-text-primary">{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="biggestTask" className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                    What&apos;s Your Biggest Time-Wasting Task? *
                  </label>
                  <textarea
                    id="biggestTask"
                    name="biggestTask"
                    required
                    rows={4}
                    value={form.biggestTask}
                    onChange={handleChange}
                    placeholder="e.g. We spend hours every month chasing clients for documents and manually sending invoice reminders..."
                    className="w-full bg-card-bg border border-border-color rounded-xl px-4 py-3 text-text-primary text-sm placeholder-text-secondary/50 focus:outline-none focus:border-accent-teal focus:bg-card-bg transition-all duration-200 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or email us at{' '}
                    <a href="mailto:emperorworkflows@gmail.com" className="underline hover:text-red-300">
                      emperorworkflows@gmail.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full px-6 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Book My Free Audit Call
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-600">
                  We respect your privacy. Your details will never be shared.
                </p>
              </form>
            </FadeIn>

            {/* Trust sidebar */}
            <FadeIn delay={0.15} className="lg:col-span-2 flex flex-col gap-6">
              <div className="glass card-glow rounded-2xl p-7 border border-border-color">
                <h3 className="text-text-primary font-bold text-lg mb-5">What to Expect</h3>
                <ul className="space-y-4">
                  {trustPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle size={16} className="text-accent-teal flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass card-glow rounded-2xl p-7 flex-1 border border-border-color">
                <h3 className="text-text-primary font-bold text-base mb-3">On Your Audit Call We&apos;ll Cover:</h3>
                <ul className="space-y-3 text-sm text-text-secondary">
                  {[
                    'Your biggest manual time-wasters',
                    'Which tools your firm already uses',
                    'The 2–3 automations with the biggest ROI for your practice',

                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent-teal text-xs mt-1">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass card-glow rounded-2xl p-6 border border-border-color">
                <h3 className="text-text-primary font-bold text-sm mb-3">Get in Touch Directly</h3>
                {contactDetails.map((detail, i) => (
                  <a key={i} href={detail.href} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center text-accent-teal flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs">{detail.label}</p>
                      <p className="text-text-primary text-sm font-semibold group-hover:text-accent-teal transition-colors">{detail.value}</p>
                    </div>
                  </a>
                ))}
              </div>

            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
