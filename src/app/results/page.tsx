import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { ArrowRight } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata: Metadata = {
  title: 'Results — Emperor Automations',
  description: 'Real results from real accounting firms. See our anonymised case studies and the hours, costs, and errors saved.',
};

const caseStudies = [
  {
    tag: 'UK Accountancy Practice · 8 Staff',
    title: 'Onboarding Overhaul',
    problem: 'Client onboarding was taking an average of 4 hours per new client — manually sending welcome emails, chasing documents, and setting up portals. As the firm grew, this was becoming unsustainable.',
    solution: 'We built a full onboarding automation: instant welcome email with document request, automated follow-up sequence at 24h/48h/7 days, and automatic portal account creation on document receipt.',
    metrics: [
      { value: 45, label: 'Minutes per client (was 4hrs)', suffix: 'min' },
      { value: 12, label: 'Hours saved per week', suffix: 'hrs' },
      { value: 87, label: 'Reduction in manual tasks', suffix: '%' },
    ],
    color: 'from-accent-teal/10 to-bg-primary/10',
    border: 'border-accent-teal/15',
    tag_color: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
  },
  {
    tag: 'Growing UK Sole Trader Accountant',
    title: 'Invoice Chasing Automation',
    problem: 'The firm\'s admin team was spending hours every week manually chasing late invoices — from drafting emails to tracking who had and hadn\'t responded. Late payment rates were above 40%.',
    solution: 'We implemented an automated 3-touch reminder system: friendly reminder at 7 days, firmer notice at 14 days, final notice at 30 days. Each auto-personalised and sent without any manual input.',
    metrics: [
      { value: 80, label: 'Reduction in late payments', suffix: '%' },
      { value: 6, label: 'Hours saved per week', suffix: 'hrs' },
      { value: 3, label: 'Weeks to full ROI', suffix: 'wks' },
    ],
    color: 'from-accent-teal/10 to-bg-primary/10',
    border: 'border-accent-teal/15',
    tag_color: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
  },
  {
    tag: 'US Bookkeeping Firm · Multi-State',
    title: 'Deadline Tracking System',
    problem: 'The team was manually tracking tax deadlines for 60+ clients in a spreadsheet — a system that was fragile, error-prone, and caused significant stress every quarter.',
    solution: 'We built an automated deadline tracker integrated with their practice management system, sending client alerts at 30, 14, and 7 days before each deadline, with internal escalations for at-risk accounts.',
    metrics: [
      { value: 0, label: 'Missed deadlines since go-live', suffix: '' },
      { value: 3, label: 'Hours saved per week', suffix: 'hrs' },
      { value: 60, label: 'Clients managed automatically', suffix: '+' },
    ],
    color: 'from-accent-teal/10 to-bg-primary/10',
    border: 'border-accent-teal/15',
    tag_color: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
  },
  {
    tag: 'UK Mid-Size Practice · 20 Staff',
    title: 'AI Data Extraction & OCR Integration',
    problem: 'Staff were manually re-keying bank statements, invoices, and receipts into Xero — a painfully slow, error-prone process consuming 8+ hours per week. As client volume grew, so did the data entry backlog.',
    solution: 'We built an AI-powered OCR pipeline that automatically extracts transaction data from uploaded documents, validates against Xero chart of accounts, and posts confirmed entries — with an exception queue for human review on edge cases only.',
    metrics: [
      { value: 92, label: 'Data extraction accuracy', suffix: '%' },
      { value: 8, label: 'Hours saved per week', suffix: 'hrs' },
      { value: 4200, label: 'Annual admin cost recovered', suffix: '£' },
    ],
    color: 'from-accent-teal/10 to-bg-primary/10',
    border: 'border-accent-teal/15',
    tag_color: 'bg-accent-teal/10 text-accent-teal border-accent-teal/20',
  },
];

export default function ResultsPage() {
  return (
    <div className="bg-bg-primary text-text-secondary pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="section-label mb-4">Client Results</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Real Impact for{' '}
              <span className="text-gradient">Real Firms</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We don&apos;t just build tech; we build time. Here&apos;s how our automations are transforming daily operations for accounting practices.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-t border-border-color bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-3">Featured Case Studies</h2>
            <p className="text-text-secondary">See what&apos;s possible when you automate the heavy lifting.</p>
          </FadeIn>
          {caseStudies.map((cs, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`glass card-glow rounded-2xl overflow-hidden border ${cs.border}`}>
                {/* Tag bar */}
                <div className={`bg-gradient-to-r ${cs.color} px-7 py-4 border-b ${cs.border} flex flex-wrap items-center justify-between gap-3`}>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cs.tag_color}`}>
                    {cs.tag}
                  </span>
                  <span className="text-xs text-text-secondary italic">Anonymous — details available on request</span>
                </div>

                <div className="p-7">
                  <h2 className="text-text-primary font-bold text-2xl mb-6">{cs.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-xs font-bold text-accent-teal uppercase tracking-wider mb-3">The Problem</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-accent-teal uppercase tracking-wider mb-3">Our Solution</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((m, j) => (
                      <div key={j} className="bg-card-bg border border-border-color rounded-xl p-4 text-center shadow-sm">
                        <div className="text-3xl font-bold text-text-primary mb-1">
                          <AnimatedCounter end={m.value} suffix={m.suffix} />
                        </div>
                        <p className="text-text-secondary text-xs leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden border-t border-border-color bg-bg-dark">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-light mb-4">Want Results Like These?</h2>
            <p className="text-border-color mb-8">Book a free audit call today and let&apos;s see how much time we can save your team.</p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              Book a Free Audit Call <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
