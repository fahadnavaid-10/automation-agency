import type { Metadata } from 'next';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Terms of Service — Emperor Workflows',
  description: 'Terms of Service and conditions of use for Emperor Workflows website and services.',
};

export default function TermsPage() {
  return (
    <div className="bg-bg-primary text-text-secondary pt-20 pb-24 min-h-screen">
      {/* Hero Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <p className="section-label mb-4">Legal</p>
            <h1 className="text-5xl font-bold text-text-primary mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-4">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-border-color">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="glass card-glow rounded-2xl p-8 sm:p-12 border border-border-color space-y-8">
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-text-primary">1. Agreement to Terms</h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  By accessing our website and using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services. Emperor Workflows reserves the right to modify or replace these Terms at any time without prior notice.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-text-primary">2. Services Provided</h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Emperor Workflows operates as an AI Automation Agency specializing in accountancy and professional services. Our services include consultancy, workflow audits, custom software engineering, and software connectivity. The specific scope, pricing, and timeline for any paid service will be mutually agreed upon in a subsequent dedicated service agreement or statement of work.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-text-primary">3. Intellectual Property</h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Emperor Workflows and its licensors. Unless otherwise stated in a specific client contract, custom automations built specifically for your firm will become your intellectual property upon final payment, while underlying proprietary frameworks or core systems remain our property.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-text-primary">4. Data and Confidentiality</h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  We frequently interact with highly sensitive accounting data. Both Emperor Workflows and the client agree to maintain strict confidentiality regarding all proprietary information. We do not sell, rent, or recklessly share your data. For specifics on data handling, please refer to our Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-text-primary">5. Limitation of Liability</h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  In no event shall Emperor Workflows, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-text-primary">6. Contact Us</h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  If you have any questions about these Terms, please contact us at: <br />
                  <a href="mailto:emperorworkflows@gmail.com" className="text-accent-teal hover:underline font-medium mt-2 inline-block">emperorworkflows@gmail.com</a>
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
