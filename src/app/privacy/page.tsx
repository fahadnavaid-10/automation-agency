import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="bg-[#0A0A0F] pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-10 transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-400 text-sm leading-relaxed">
          <p>Last updated: March 2025</p>
          <p>ClearFlow AI (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal data. This policy explains how we collect, use, and protect information about you in compliance with the UK GDPR and applicable US data protection laws.</p>
          <h2 className="text-white text-xl font-bold pt-4">Information We Collect</h2>
          <p>We collect information you provide directly to us, including your name, email address, company name, phone number, and any details you share during our workflow audit calls.</p>
          <h2 className="text-white text-xl font-bold pt-4">How We Use Your Information</h2>
          <p>We use your information solely to provide our automation services, communicate with you about your project, and improve our services. We do not sell your information to third parties.</p>
          <h2 className="text-white text-xl font-bold pt-4">Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your data. All automation systems we build are designed with GDPR compliance in mind.</p>
          <h2 className="text-white text-xl font-bold pt-4">Contact</h2>
          <p>For any data protection queries, please contact us via our <Link href="/contact" className="text-cyan-400 hover:underline">contact page</Link>.</p>
        </div>
      </div>
    </div>
  );
}
