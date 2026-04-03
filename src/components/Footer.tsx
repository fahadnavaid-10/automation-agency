import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/results', label: 'Results' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-color bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image 
                src="/emperor-logo.png" 
                alt="Emperor Workflows Logo" 
                width={120} 
                height={120} 
                className="w-auto h-10 sm:h-12 object-contain" 
              />
              <span className="text-lg font-bold text-text-light">
                Emperor<span className="text-gradient"> Workflows</span>
              </span>
            </Link>
            <p className="text-border-color text-sm leading-relaxed max-w-xs">
              We audit, automate, and systemise accounting firms — done for you.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border-color/20 flex items-center justify-center text-border-color hover:text-accent-teal hover:border-accent-teal/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border-color/20 flex items-center justify-center text-border-color hover:text-accent-teal hover:border-accent-teal/30 transition-all duration-200"
                aria-label="Twitter/X"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-border-color hover:text-accent-teal text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="section-label mb-5">Ready to automate?</p>
            <p className="text-border-color text-sm mb-5 leading-relaxed">
              Book a free 30-minute workflow audit and find out exactly what can be automated in your firm.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Book a Free Audit Call
            </Link>
            <div className="mt-5 flex items-center gap-2 text-border-color text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-teal flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z" />
              </svg>
              <a href="tel:+12017316224" className="hover:text-accent-teal transition-colors">(201) 731-6224</a>
            </div>
            <div className="mt-3 flex items-center gap-2 text-border-color text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-teal flex-shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:emperorworkflows@gmail.com" className="hover:text-accent-teal transition-colors">emperorworkflows@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-color/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-border-color text-xs">
            © {new Date().getFullYear()} Emperor Workflows. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-border-color hover:text-accent-teal text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-border-color hover:text-accent-teal text-xs transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
