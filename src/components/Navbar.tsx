'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/results', label: 'Results' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-card-bg/95 backdrop-blur-md shadow-md border-b border-border-color'
        : 'bg-card-bg shadow-sm border-b border-border-color'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/emperor-logo.png"
            alt="Emperor Automations Logo"
            width={500}
            height={500}
            className="w-auto h-12 sm:h-14 mt-2"
            priority
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-text-primary">
            Emperor<span className="text-gradient"> Workflows</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 relative group ${pathname === link.href
                ? 'text-accent-teal'
                : 'text-text-secondary hover:text-accent-teal'
                }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-accent-teal transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold"
          >
            Book a Free Call
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-text-secondary hover:text-accent-teal transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="glass-strong px-4 pb-6 pt-2 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                ? 'text-accent-teal bg-accent-teal/10'
                : 'text-text-secondary hover:text-accent-teal hover:bg-black/5'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary px-5 py-3 rounded-lg text-sm font-semibold text-center mt-2"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </header>
  );
}
