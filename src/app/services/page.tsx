import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { Zap, DollarSign, FolderOpen, Calendar, BarChart2, Workflow, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — ClearFlow AI',
  description: 'Done-for-you AI automations built for accounting firms. Client onboarding, invoice chasing, document collection, reporting, and more.',
};

const services = [
  {
    icon: Zap,
    title: 'Client Onboarding Automation',
    desc: 'Transform the chaotic client onboarding process into a seamless, fully automated system. From the moment a client signs, everything from welcome emails to document requests to portal setup happens automatically.',
    included: [
      'Automated welcome email sequence with branded templates',
      'Document request workflow with automated follow-ups',
      'Client portal account creation and setup',
    ],
    result: 'Typical result: 3–5 hours saved per new client',
    color: 'from-cyan-500/20 to-blue-600/20',
    border: 'border-cyan-500/15',
    icon_color: 'text-cyan-400',
  },
  {
    icon: DollarSign,
    title: 'Invoice & Payment Chasing',
    desc: 'Stop the awkward chase. Our smart reminder system sends personalised, timed reminders at exactly the right intervals — maintaining professionalism while dramatically reducing late payments.',
    included: [
      '3-touch automated reminder sequence (7, 14, 30 days)',
      'Escalating tone automation (friendly → firm → final notice)',
      'Real-time payment tracking and auto-close on receipt',
    ],
    result: 'Typical result: 80% reduction in late payments, 4–6 hrs/week saved',
    color: 'from-green-500/20 to-emerald-600/20',
    border: 'border-green-500/15',
    icon_color: 'text-green-400',
  },
  {
    icon: FolderOpen,
    title: 'Document Collection & Sorting',
    desc: 'End the document chaos. Clients upload once through a branded portal, and files automatically route to the correct folders, trigger notifications to the right team member, and update your practice management system.',
    included: [
      'Branded document upload portal with client authentication',
      'Auto-routing to correct client folders with naming conventions',
      'Team notification + task creation on document receipt',
    ],
    result: 'Typical result: Zero lost documents, 5 hrs/week saved',
    color: 'from-blue-500/20 to-indigo-600/20',
    border: 'border-blue-500/15',
    icon_color: 'text-blue-400',
  },
  {
    icon: Calendar,
    title: 'Tax Deadline Tracking',
    desc: 'Never miss another deadline. Our automated deadline tracking system monitors every client\'s key dates, sending proactive alerts to both clients and staff — with escalating urgency as dates approach.',
    included: [
      'Automated deadline calendar synced to all client accounts',
      'Multi-touch client alerts: 30 days, 14 days, 7 days, 48 hours',
      'Internal staff escalation for at-risk accounts',
    ],
    result: 'Typical result: Zero missed deadlines, 3 hrs/week saved',
    color: 'from-amber-500/20 to-orange-600/20',
    border: 'border-amber-500/15',
    icon_color: 'text-amber-400',
  },
  {
    icon: BarChart2,
    title: 'Client Reporting Automation',
    desc: 'Auto-generate and send branded reports on a set schedule. Whether it\'s monthly P&L summaries, quarterly VAT updates, or annual reviews — reports go out on time, every time, without manual effort.',
    included: [
      'Auto-scheduled report generation from your existing software',
      'Branded PDF creation and delivery via email',
      'Client engagement tracking and confirmation receipts',
    ],
    result: 'Typical result: 6 hrs/month saved per 10 clients',
    color: 'from-purple-500/20 to-violet-600/20',
    border: 'border-purple-500/15',
    icon_color: 'text-purple-400',
  },
  {
    icon: Workflow,
    title: 'Internal Workflow Automation',
    desc: 'Eliminate the internal coordination overhead. Staff handoffs, task assignments, and status updates all happen automatically — so your team spends time on work that matters, not chasing updates.',
    included: [
      'Automated task creation and assignment on trigger events',
      'Staff handoff notifications with context and deadlines',
      'Status update broadcasts to relevant team members',
    ],
    result: 'Typical result: 3–4 hrs/week per team member saved',
    color: 'from-pink-500/20 to-rose-600/20',
    border: 'border-pink-500/15',
    icon_color: 'text-pink-400',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-bg-primary text-text-secondary pt-20">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="section-label mb-4">Our Services</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Done-For-You{' '}
              <span className="text-gradient">Automations</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We build custom automations that sit seamlessly inside your existing systems, doing the heavy lifting so your team doesn&apos;t have to.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 border-t border-border-color bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Core Automation Areas</h2>
            <p className="text-text-secondary">The essential workflows every modern practice needs.</p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon; // Keep Icon component for rendering
              return (
                <StaggerItem key={i}>
                  <div className="glass card-glow rounded-3xl p-8 border border-border-color h-full flex flex-col hover:border-accent-teal/50 transition-colors duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6">
                      <Icon size={24} className="text-accent-teal" /> {/* Use Icon component with new size/color */}
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      {service.title}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-1">
                      {service.desc}
                    </p>

                    <div className="space-y-4 pt-6 border-t border-border-color">
                      <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">What&apos;s Included:</p>
                      <ul className="space-y-3">
                        {service.included.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                            <CheckCircle size={18} className="text-accent-teal flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border-color bg-bg-dark relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-light mb-4">
              Not sure which automation you need first?
            </h2>
            <p className="text-border-color mb-8">
              Book a free audit and we&apos;ll map your workflows, identify the biggest time-wasters, and tell you exactly what to automate first.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2">
              Book a Free Audit <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
