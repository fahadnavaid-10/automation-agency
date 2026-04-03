import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { CheckCircle, ArrowRight, Zap, BarChart2, Crown } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pricing — Emperor Workflows',
    description: 'Transparent pricing for accounting firm automation. Choose from Starter, Growth, or Enterprise tiers — all done for you.',
};

const tiers = [
    {
        name: 'Starter',
        tagline: 'Audit + 1 Automation',
        price: '£1,500',
        priceSuffix: 'one-time',
        icon: Zap,
        color: 'border-border-color',
        iconBg: 'bg-accent-teal/10',
        iconColor: 'text-accent-teal',
        highlight: false,
        who: 'Solo accountants & small practices (1–5 staff)',
        included: [
            'Free 30-min discovery call',
            'Full workflow audit & mapping session',
            '1 done-for-you automation built & tested',
            'Go-live installation & team walkthrough',
            '30 days post-launch support',
        ],
        cta: 'Book a Free Audit Call',
    },
    {
        name: 'Growth',
        tagline: 'Audit + 3 Automations',
        price: '£3,500',
        priceSuffix: 'one-time',
        icon: BarChart2,
        color: 'border-accent-teal',
        iconBg: 'bg-accent-teal/10',
        iconColor: 'text-accent-teal',
        highlight: true,
        who: 'Growing firms ready to systemise (6–20 staff)',
        included: [
            'Everything in Starter',
            '3 priority automations built & tested',
            'Custom automation roadmap (6-month plan)',
            'Integrations with Xero, QuickBooks, Sage & more',
            '60 days post-launch support',
            'Monthly check-in call',
        ],
        cta: 'Book a Free Audit Call',
    },
    {
        name: 'Enterprise',
        tagline: 'Full Workflow Overhaul',
        price: 'Custom',
        priceSuffix: 'tailored quote',
        icon: Crown,
        color: 'border-border-color',
        iconBg: 'bg-accent-teal/10',
        iconColor: 'text-accent-teal',
        highlight: false,
        who: '20+ staff firms with complex, multi-system workflows',
        included: [
            'Everything in Growth',
            'Unlimited automation scope',
            'AI/OCR data extraction pipelines',
            'Multi-system integrations & API work',
            'Dedicated account manager',
            'Quarterly strategy sessions',
            'Ongoing retainer pricing available',
        ],
        cta: 'Request a Custom Quote',
    },
];

const faqs = [
    { q: 'Are there any hidden fees?', a: 'No. The price you see is the price you pay. We agree the full scope before we start — no surprises.' },
    { q: 'What if I need more than 3 automations on Growth?', a: 'Additional automations can be scoped and quoted separately, or you can upgrade to Enterprise which has unlimited scope.' },
    { q: 'Do you offer monthly retainers?', a: 'Yes. After the initial build, we offer ongoing retainer plans for support, monitoring, and new automation builds as your practice grows.' },
    { q: 'Can I start with Starter and upgrade later?', a: 'Absolutely. Many clients start with a single automation proof-of-concept, then expand once they see the ROI.' },
];

export default function PricingPage() {
    return (
        <div className="bg-bg-primary text-text-secondary pt-20">
            {/* Hero */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 mesh-bg opacity-30" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <FadeIn>
                        <p className="section-label mb-4">Pricing</p>
                        <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                            Transparent,{' '}
                            <span className="text-gradient">ROI-Focused</span> Pricing
                        </h1>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            No complicated packages. No bloated retainers. Just clear scope, clear price, and clear results — built for accounting firms.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Tiers */}
            <section className="py-12 pb-24 border-t border-border-color bg-bg-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tiers.map((tier, i) => {
                            const Icon = tier.icon;
                            return (
                                <StaggerItem key={i}>
                                    <div className={`glass card-glow rounded-3xl p-8 border-2 ${tier.color} h-full flex flex-col relative ${tier.highlight ? 'ring-1 ring-accent-teal/30' : ''}`}>
                                        {tier.highlight && (
                                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                                <span className="bg-accent-teal text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide whitespace-nowrap">
                                                    Most Popular
                                                </span>
                                            </div>
                                        )}

                                        <div className={`w-12 h-12 rounded-xl ${tier.iconBg} border border-accent-teal/20 flex items-center justify-center mb-5`}>
                                            <Icon size={22} className={tier.iconColor} />
                                        </div>

                                        <p className="text-xs font-bold text-accent-teal uppercase tracking-widest mb-1">{tier.tagline}</p>
                                        <h2 className="text-2xl font-bold text-text-primary mb-1">{tier.name}</h2>
                                        <p className="text-text-secondary text-xs mb-5">{tier.who}</p>

                                        <div className="mb-6">
                                            <span className="text-4xl font-bold text-text-primary">{tier.price}</span>
                                            <span className="text-text-secondary text-sm ml-2">{tier.priceSuffix}</span>
                                        </div>

                                        <div className="space-y-3 mb-8 flex-1">
                                            {tier.included.map((item, j) => (
                                                <div key={j} className="flex items-start gap-3 text-sm text-text-secondary">
                                                    <CheckCircle size={15} className="text-accent-teal flex-shrink-0 mt-0.5" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="/contact"
                                            className={`px-6 py-3.5 rounded-xl text-sm font-bold inline-flex items-center justify-center gap-2 transition-all duration-200 ${tier.highlight
                                                    ? 'btn-primary'
                                                    : 'btn-outline'
                                                }`}
                                        >
                                            {tier.cta} <ArrowRight size={15} />
                                        </Link>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>

                    <FadeIn className="text-center mt-10">
                        <p className="text-text-secondary text-sm">
                            Not sure which tier fits?{' '}
                            <Link href="/contact" className="text-accent-teal font-semibold hover:underline">
                                Book a free audit call
                            </Link>{' '}
                            and we&apos;ll tell you exactly what you need.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 border-t border-border-color bg-bg-primary">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <FadeIn className="text-center mb-12">
                        <p className="section-label mb-4">Pricing FAQ</p>
                        <h2 className="text-3xl font-bold text-text-primary">Questions About Cost?</h2>
                    </FadeIn>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FadeIn key={i} delay={i * 0.06}>
                                <div className="glass card-glow rounded-xl p-6">
                                    <h3 className="text-text-primary font-semibold mb-2">{faq.q}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-border-color bg-bg-dark relative overflow-hidden">
                <div className="absolute inset-0 mesh-bg opacity-40" />
                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
                    <FadeIn>
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-light mb-4">
                            Ready to Get a Custom Quote?
                        </h2>
                        <p className="text-border-color mb-8">
                            Book a free 30-min audit call. We&apos;ll map your workflows, identify the biggest ROI automations, and give you a clear, fixed-price proposal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base font-bold inline-flex items-center gap-2 justify-center">
                                Book a Free Audit Call <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-border-color">
                            {['Free, no obligation', '30 minutes', 'Fixed-price proposals'].map((item, i) => (
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
