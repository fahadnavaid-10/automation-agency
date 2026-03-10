'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroParticles from '@/components/HeroParticles';
import AnimatedCounter from '@/components/AnimatedCounter';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import {
  Clock, FileText, RefreshCw, Users, Bell, Mail,
  Zap, DollarSign, FolderOpen, Calendar, BarChart2, Workflow,
  ArrowRight, CheckCircle, Shield
} from 'lucide-react';

const painPoints = [
  { icon: Users, text: 'Chasing clients for documents every month' },
  { icon: Bell, text: 'Manually sending invoice reminders' },
  { icon: RefreshCw, text: 'Copy-pasting data between systems' },
  { icon: Clock, text: 'Slow, inconsistent client onboarding' },
  { icon: Calendar, text: 'Missing tax deadlines due to manual tracking' },
  { icon: Mail, text: 'Hours wasted on internal status update emails' },
];

const solutions = [
  { icon: Zap, title: 'Client Onboarding Automation', desc: 'Auto welcome emails, document requests, and portal setup the moment a client signs.' },
  { icon: DollarSign, title: 'Invoice & Payment Chasing', desc: 'Smart reminders sent automatically at the right time — no more awkward follow-ups.' },
  { icon: FolderOpen, title: 'Document Collection & Sorting', desc: 'Clients upload once, files route to the right folder automatically.' },
  { icon: Calendar, title: 'Tax Deadline Tracking', desc: 'Automated alerts to clients and staff before every deadline — zero slippage.' },
  { icon: BarChart2, title: 'Client Reporting Automation', desc: 'Auto-generate and send reports on schedule without a team member lifting a finger.' },
  { icon: Workflow, title: 'Internal Workflow Automation', desc: 'Staff handoffs, task assignments, and status updates — all automatic.' },
];

const tools = [
  { name: 'Zapier', color: 'text-text-primary' },
  { name: 'Make.com', color: 'text-text-primary' },
  { name: 'n8n', color: 'text-text-primary' },
  { name: 'OpenAI', color: 'text-text-primary' },
  { name: 'Xero', color: 'text-text-primary' },
  { name: 'QuickBooks', color: 'text-text-primary' },
  { name: 'Notion', color: 'text-text-primary' },
  { name: 'Slack', color: 'text-text-primary' },
  { name: 'Google Workspace', color: 'text-text-primary' },
  { name: 'Microsoft 365', color: 'text-text-primary' },
  { name: 'Calendly', color: 'text-text-primary' },
  { name: 'Stripe', color: 'text-text-primary' },
];

const stats = [
  { value: 500, suffix: '+', label: 'Workflows Built' },
  { value: 20, suffix: '+', label: 'Accounting Firms Served' },
  { value: 15000, suffix: '+', label: 'Manual Hours Saved' },
  { value: 14, suffix: ' hrs', label: 'Avg. Saved Per Week' },
];

const steps = [
  { num: '01', icon: '🔍', title: 'Free Workflow Audit', desc: 'We map your current processes and find exactly where time is being wasted — a clear, honest picture.' },
  { num: '02', icon: '⚙️', title: 'We Build It For You', desc: 'Our team builds and tests every automation in your existing tools. You don\'t touch a line of code.' },
  { num: '03', icon: '🚀', title: 'Go Live + Ongoing Support', desc: 'We install, train your team, and stay on hand for tweaks and growth as your practice scales.' },
];

const testimonials = [
  {
    quote: 'We saved 3 days a month on client onboarding alone. Incredible ROI. The audit process alone was worth it.',
    name: 'James R.',
    role: 'Partner, 12-person firm',
    avatar: 'JR',
    color: 'bg-accent-teal',
  },
  {
    quote: 'Invoice chasing used to take our admin team hours every week. Now it just happens. We don\'t even think about it.',
    name: 'Sarah M.',
    role: 'Director, UK Practice',
    avatar: 'SM',
    color: 'bg-bg-dark',
  },
  {
    quote: 'The audit process was eye-opening. They found 6 automations we didn\'t even know we needed. Game-changer.',
    name: 'Mohammed A.',
    role: 'Founder, Boutique Accountancy',
    avatar: 'MA',
    color: 'bg-accent-gold',
  },
];

const softwareLogos = [
  { name: 'Xero', dot: 'bg-accent-teal' },
  { name: 'QuickBooks', dot: 'bg-accent-teal' },
  { name: 'Sage', dot: 'bg-accent-teal' },
  { name: 'FreeAgent', dot: 'bg-accent-teal' },
  { name: 'IRIS', dot: 'bg-accent-teal' },
  { name: 'Zapier', dot: 'bg-accent-teal' },
  { name: 'Make.com', dot: 'bg-accent-teal' },
  { name: 'n8n', dot: 'bg-accent-teal' },
  { name: 'Slack', dot: 'bg-accent-teal' },
  { name: 'Notion', dot: 'bg-accent-teal' },
  { name: 'Stripe', dot: 'bg-accent-teal' },
  { name: 'OpenAI', dot: 'bg-accent-teal' },
];

export default function HomeClient() {
  return (
    <div className="bg-bg-primary text-text-secondary">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-dark">
        {/* Background */}
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark" />

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-accent-teal/10 float-1 pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full border border-bg-primary/5 float-2 pointer-events-none" />
        <div className="absolute top-1/2 right-1/6 w-32 h-32 rounded-full bg-accent-teal/5 blur-3xl float-3 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-bg-primary/5 blur-[100px] pointer-events-none" />

        <HeroParticles />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-teal/20 bg-accent-teal/5 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-teal pulse-glow" />
              <span className="text-xs font-medium text-accent-teal tracking-wide">AI Automation for Accounting Firms</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-light leading-[1.05] mb-6"
            >
              We Automate the{' '}
              <span className="text-gradient">Repetitive Work</span>{' '}
              Killing Your Accounting Firm
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-border-color mb-10 max-w-2xl leading-relaxed"
            >
              Custom AI automations built and installed into your practice — done for you, not DIY.
              We go inside your firm, map every workflow, and build systems that run themselves.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-xl text-base font-bold inline-flex items-center gap-2 justify-center">
                Book a Free Audit Call
                <ArrowRight size={18} />
              </Link>
              <Link href="/how-it-works" className="btn-outline px-7 py-3.5 rounded-xl text-base font-semibold inline-flex items-center gap-2 justify-center">
                See How It Works
              </Link>
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-2 text-sm text-border-color"
            >
              <Shield size={14} className="text-accent-teal" />
              <span>Free 30-min call. No obligation. No tech knowledge needed.</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF TICKER */}
      <section className="relative py-10 border-y border-border-color bg-bg-primary overflow-hidden">
        <div className="text-center mb-6">
          <p className="section-label mb-1">Trusted tool integrations</p>
          <p className="text-text-secondary text-sm">We build inside the platforms your firm already uses — no switching required</p>
        </div>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg-primary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg-primary to-transparent" />

        <div className="relative overflow-hidden">
          <div className="ticker-track flex gap-4 whitespace-nowrap">
            {[...softwareLogos, ...softwareLogos, ...softwareLogos].map((tool, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-color bg-card-bg text-sm font-medium text-text-primary hover:border-accent-teal hover:text-accent-teal shadow-sm transition-all duration-300 cursor-default flex-shrink-0"
              >
                <span className={`w-2 h-2 rounded-full ${tool.dot} flex-shrink-0 opacity-80`} />
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 border-b border-border-color bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-secondary text-sm font-medium">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 relative bg-bg-primary">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="section-label mb-4">The Problem</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Still Doing This Manually?
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Your team is drowning in tasks that shouldn&apos;t need humans
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {painPoints.map((pain, i) => {
              const Icon = pain.icon;
              return (
                <StaggerItem key={i}>
                  <div className="glass card-glow rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-accent-teal" />
                    </div>
                    <p className="text-text-primary text-sm font-medium leading-relaxed">{pain.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn className="text-center">
            <p className="text-text-secondary text-base">
              Sound familiar? You&apos;re not alone —{' '}
              <span className="text-accent-teal font-semibold">and it&apos;s 100% fixable.</span>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 border-t border-border-color bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="section-label mb-4">The Solution</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                6 Core Automations We Build for{' '}
                <span className="text-gradient">Accounting Firms</span>
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <StaggerItem key={i}>
                  <div className="glass card-glow rounded-2xl p-6 h-full flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-accent-teal" />
                    </div>
                    <h3 className="text-text-primary font-semibold text-base mb-2">{sol.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">{sol.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn className="text-center">
            <Link href="/services" className="btn-outline px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20 border-t border-border-color bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <p className="section-label mb-4">Tool Stack</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
              We Build Inside the Tools Your Firm Already Uses
            </h2>
            <p className="text-text-secondary">No switching required.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {tools.map((tool, i) => (
              <StaggerItem key={i}>
                <div className="glass card-glow rounded-xl p-4 text-center">
                  <p className={`text-xs font-semibold ${tool.color}`}>{tool.name}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 relative border-t border-border-color bg-bg-secondary">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="section-label mb-4">Process</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">How It Works</h2>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border-color to-transparent z-0" />
                  )}
                  <div className="glass card-glow rounded-2xl p-7 relative z-10 h-full">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="text-xs font-bold text-accent-teal tracking-widest mb-2">{step.num}</div>
                    <h3 className="text-text-primary font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-12">
            <Link href="/how-it-works" className="btn-outline px-6 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
              See the Full Process <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-t border-border-color bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="section-label mb-4">Client Results</p>
              <h2 className="text-4xl font-bold text-text-primary">What Our Clients Say</h2>
            </FadeIn>
          </div>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="glass card-glow rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-text-primary text-sm font-semibold">{t.name}</p>
                      <p className="text-text-secondary text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden border-t border-border-color bg-bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/5 via-transparent to-bg-primary/5" />
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-teal/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-light mb-5">
              Ready to Get Your Time Back?
            </h2>
            <p className="text-lg text-border-color mb-8">
              Book a free 30-minute workflow audit. We&apos;ll show you exactly what can be automated in your firm — no obligation, no tech knowledge needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 justify-center">
                Book My Free Audit Call
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-border-color">
              {['Free, no obligation', '30 minutes', 'Clear automation plan'].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle size={13} className="text-accent-teal" />
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
