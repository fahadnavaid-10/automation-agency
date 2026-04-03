'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { ArrowRight, ChevronDown } from 'lucide-react';


const stages = [
  {
    num: '01',
    icon: '📞',
    title: 'Book Your Free Audit Call',
    desc: 'A relaxed 30-minute call where we learn about your firm, your team size, your tools, and where you feel the most friction day-to-day.',
    time: '30 minutes',
    color: 'bg-accent-teal/10',
    border: 'border-accent-teal/20',
  },
  {
    num: '02',
    icon: '🗺️',
    title: 'Workflow Mapping Session',
    desc: 'We go deeper in a second session, documenting every manual process — step by step. We identify every bottleneck, every repeated task, every point where time is wasted.',
    time: '1–2 hours',
    color: 'bg-accent-teal/10',
    border: 'border-accent-teal/20',
  },
  {
    num: '03',
    icon: '📋',
    title: 'Automation Proposal',
    desc: 'You receive a clear, prioritised automation plan: what we\'ll build, in what order, with estimated time savings and ROI for each. No jargon, just plain English.',
    time: '3–5 business days',
    color: 'bg-accent-teal/10',
    border: 'border-accent-teal/20',
  },
  {
    num: '04',
    icon: '⚙️',
    title: 'We Build It',
    desc: 'Our team builds and tests every automation inside your existing tools. You\'re kept updated throughout but don\'t need to do anything — that\'s the whole point.',
    time: '1–3 weeks',
    color: 'bg-accent-teal/10',
    border: 'border-accent-teal/20',
  },
  {
    num: '05',
    icon: '🚀',
    title: 'Go Live',
    desc: 'We install the automations in your live environment, run final tests, and walk your team through how everything works. Smooth handover, zero surprises.',
    time: '1–2 days',
    color: 'bg-accent-teal/10',
    border: 'border-accent-teal/20',
  },
  {
    num: '06',
    icon: '📈',
    title: 'Ongoing Support',
    desc: 'We don\'t disappear after go-live. Monthly check-ins, quick fixes when needed, and proactive recommendations for new automations as your practice grows.',
    time: 'Ongoing',
    color: 'bg-accent-teal/10',
    border: 'border-accent-teal/20',
  },
];

const faqs = [
  { q: 'Do I need to know how to code?', a: 'Absolutely not. We handle everything technical end-to-end. Your only job is to tell us about your current processes — we do the rest.' },
  { q: 'How long does it take to go live?', a: 'Typically 2–4 weeks from audit call to go-live, depending on the complexity and number of automations. We\'ll give you a clear timeline in your proposal.' },
  { q: 'Will it work with our existing software?', a: 'Yes. We build inside tools like Xero, QuickBooks, Sage, FreeAgent, IRIS, and more. We don\'t require you to switch or adopt anything new.' },
  { q: 'What if something breaks after go-live?', a: 'We provide ongoing support and monitoring. If anything stops working, we fix it — usually within 24–48 hours. This is part of our ongoing retainer.' },
  { q: 'How much does it cost?', a: 'Projects start from £1,500 depending on scope. We also offer monthly retainers for ongoing support and new builds. Book a call for a custom quote.' },
  { q: 'Is my client data safe?', a: 'Yes. We follow GDPR and UK data protection standards. We only access systems needed to build the automations, and we operate under strict confidentiality agreements.' },
  { q: 'Do you work with small practices?', a: 'Absolutely. We work with practices from solo accountants right up to 50+ staff teams. Some of our best results have come from smaller practices where every hour counts more.' },
  { q: 'What automations give the biggest ROI?', a: 'Client onboarding and invoice chasing consistently deliver the fastest and biggest returns — most firms recover our fees within the first 4–6 weeks.' },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <div className="bg-bg-primary text-text-secondary pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="section-label mb-4">Process</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              A Simple, Proven Process {' '}
              <span className="text-gradient">Audit to Automation in Weeks</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From our first call to your automations going live, here&apos;s exactly how it works step by step.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-border-color via-border-color/50 to-transparent hidden md:block" />

            <div className="space-y-6">
              {stages.map((stage, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-6 md:gap-8 items-start">
                    {/* Step indicator */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full glass border border-accent-teal/20 bg-accent-teal/5 flex flex-col items-center justify-center z-10 relative">
                      <span className="text-2xl">{stage.icon}</span>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 glass rounded-2xl p-6 border ${stage.border} card-glow`}>
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <span className="text-xs text-accent-teal font-bold tracking-widest">STEP {stage.num}</span>
                          <h2 className="text-text-primary font-bold text-xl mt-0.5">{stage.title}</h2>
                        </div>
                        <span className="text-xs font-semibold text-text-secondary bg-card-bg border border-border-color px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                          {stage.time}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">{stage.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-border-color bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="section-label mb-4">FAQ</p>
              <h2 className="text-4xl font-bold text-text-primary">Common Questions</h2>
            </FadeIn>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="glass card-glow rounded-xl overflow-hidden border border-border-color">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-accent-teal/5 transition-colors duration-200"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-text-primary font-semibold text-sm">{faq.q}</span>
                    <ChevronDown
                      size={17}
                      className={`text-accent-teal flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="px-6 pb-5 text-text-secondary text-sm leading-relaxed border-t border-border-color/50 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden border-t border-border-color bg-bg-dark">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-light mb-4">Ready to Start Your Audit?</h2>
            <p className="text-border-color mb-8">Book your free 30-minute call and we&apos;ll walk you through exactly what we can automate in your firm.</p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              Book a Free Audit Call <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
