import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/results', label: 'Results' },
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
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-teal flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8L8 3L13 8L8 13L3 8Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="8" cy="8" r="2" fill="white" />
                </svg>
              </div>
              <span className="text-lg font-bold text-text-light">
                ClearFlow<span className="text-gradient"> AI</span>
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-color/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-border-color text-xs">
            © {new Date().getFullYear()} ClearFlow AI. All rights reserved.
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
