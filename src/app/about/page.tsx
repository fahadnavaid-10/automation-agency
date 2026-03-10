import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { ArrowRight, CheckCircle, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — ClearFlow AI',
  description: 'We\'re automation specialists who actually understand accounting. Learn our story, our values, and why we\'re different from generic tech agencies.',
};

const values = [
  {
    icon: '⚡',
    title: 'Speed',
    desc: 'We move fast without cutting corners. From first call to live automation in weeks, not months.',
    color: 'bg-accent-teal/10 text-accent-teal',
    border: 'border-accent-teal/20',
  },
  {
    icon: '🔎',
    title: 'Transparency',
    desc: 'No hidden fees, no jargon, no surprises. You get a clear plan, clear pricing, and clear results.',
    color: 'bg-accent-teal/10 text-accent-teal',
    border: 'border-accent-teal/20',
  },
  {
    icon: '📈',
    title: 'Results',
    desc: 'Every automation we build is measured against real outcomes — hours saved, errors reduced, revenue recovered.',
    color: 'bg-accent-teal/10 text-accent-teal',
    border: 'border-accent-teal/20',
  },
];

const comparison = [
  { feature: 'Specialist accounting knowledge', clearflow: true, generic: false },
  { feature: 'Done-for-you (no DIY)', clearflow: true, generic: false },
  { feature: 'Builds inside your existing tools', clearflow: true, generic: 'Sometimes' },
  { feature: 'Understands accounting workflows', clearflow: true, generic: false },
  { feature: 'Ongoing support included', clearflow: true, generic: false },
  { feature: 'Fixed, transparent pricing', clearflow: true, generic: false },
  { feature: 'No long-term lockout contracts', clearflow: true, generic: false },
];

export default function AboutPage() {
  return (
    <div className="bg-bg-primary text-text-secondary pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="section-label mb-4">About Us</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Automation Specialists Who Actually{' '}
              <span className="text-gradient">Understand Accounting</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              We didn&apos;t start as a generic tech agency. We built automations inside accounting firms and saw firsthand how much time was wasted on tasks AI could handle in seconds.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="glass card-glow rounded-2xl p-8 border border-border-color">
                <h2 className="text-3xl font-bold text-text-primary mb-5">Our Story</h2>
                <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
                  <p>
                    When we first started working with accounting practices, we expected to find technology problems. What we found instead were people problems — talented accountants and their teams buried in repetitive, manual tasks that could — and should — be automated.
                  </p>
                  <p>
                    Chasing clients for the same documents month after month. Manually entering the same data into three different systems. Sending invoice reminders by hand. Following up on deadlines that should be tracked automatically.
                  </p>
                  <p>
                    The technology to fix all of this already existed. What was missing was someone who understood both the accounting workflows and how to implement automation properly.
                  </p>
                  <p>
                    That&apos;s why we built ClearFlow AI — a specialist automation agency exclusively for accounting and bookkeeping firms. We bring that same transformation to practices across the UK and US.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              {/* Team card */}
              <div className="glass card-glow rounded-2xl p-8 border border-border-color">
                <div className="flex gap-5 items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent-teal flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                    CF
                  </div>
                  <div>
                    <h3 className="text-text-primary font-bold text-lg">Founder & Lead Automation Architect</h3>
                    <p className="text-accent-teal text-sm font-medium">ClearFlow AI</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  With years of hands-on experience building automations inside real accounting practices, our founder brings a unique combination of technical expertise and deep knowledge of the accountancy sector. Every automation we build is informed by what actually works in the real world of practice management.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-border-color bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="section-label mb-4">Our Values</p>
              <h2 className="text-4xl font-bold text-text-primary">What We Stand For</h2>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <div className={`glass card-glow rounded-2xl p-7 border ${v.border} h-full`}>
                  <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center text-2xl mb-5`}>
                    {v.icon}
                  </div>
                  <h3 className="text-text-primary font-bold text-xl mb-3">{v.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 border-t border-border-color">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="section-label mb-4">Why Us</p>
              <h2 className="text-4xl font-bold text-text-primary mb-3">
                ClearFlow AI vs Generic Agency
              </h2>
              <p className="text-text-secondary">Not all automation agencies are created equal.</p>
            </FadeIn>
          </div>
          <FadeIn>
            <div className="glass card-glow rounded-2xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-3 bg-card-bg border-b border-border-color px-6 py-4">
                <div className="text-text-secondary text-xs font-bold uppercase tracking-wider">Feature</div>
                <div className="text-center text-accent-teal text-xs font-bold uppercase tracking-wider">ClearFlow AI</div>
                <div className="text-center text-text-secondary text-xs font-bold uppercase tracking-wider">Generic Agency</div>
              </div>
              {comparison.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 items-center px-6 py-4 ${i < comparison.length - 1 ? 'border-b border-border-color' : ''}`}>
                  <span className="text-text-secondary text-sm">{row.feature}</span>
                  <div className="flex justify-center">
                    <CheckCircle size={18} className="text-accent-teal" />
                  </div>
                  <div className="flex justify-center">
                    {row.generic === true ? (
                      <CheckCircle size={18} className="text-text-secondary" />
                    ) : row.generic === false ? (
                      <X size={18} className="text-border-color" />
                    ) : (
                      <span className="text-text-secondary text-xs">{row.generic}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border-color bg-bg-dark relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-light mb-4">Ready to Work With Us?</h2>
            <p className="text-border-color mb-8">Book a free audit call and let&apos;s explore exactly what we can automate in your firm.</p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              Book a Free Audit Call <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
