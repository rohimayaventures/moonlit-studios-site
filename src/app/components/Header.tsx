'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/ai-lab', label: 'AI Lab' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-silverMist/20 bg-nightNavy/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo with Animated Moon Phase */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10">
            {/* Animated moon that cycles through phases */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lunarGold via-moonlightSilver to-lunarGold opacity-90 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-midnight opacity-0 group-hover:opacity-20 transition-opacity" style={{
              background: 'radial-gradient(circle at 30% 30%, transparent 40%, rgba(10, 17, 40, 0.8) 40%)'
            }} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-wide leading-tight">
              Moonlit Studios
            </span>
            <span className="text-[10px] text-lunarGold/80 tracking-widest uppercase hidden sm:block">
              The Nurse Who Codes
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-silverMist">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-glacierWhite transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-silverMist hover:text-glacierWhite transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-midnight/98 backdrop-blur-xl md:hidden border-t border-mermaidTeal/20">
          <nav className="flex flex-col items-center gap-6 px-6 py-8 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-pearlWhite hover:text-mermaidTeal transition-colors w-full py-3 border-b border-deepOcean/40 hover:border-mermaidTeal/60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
