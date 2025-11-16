'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  const serviceLinks = [
    { href: '/services/creative-design-development', label: 'Creative Design & Development' },
    { href: '/services/health-tech-development', label: 'Health x Tech Development' },
    { href: '/services/consulting', label: 'Consulting' },
    { href: '/services/ai-innovation', label: 'AI Innovation Suite' },
    { href: '/services/ghostwriting', label: 'Author & Ghostwriting Studio' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ai-lab', label: 'AI Lab' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-[40] border-b border-mermaidTeal/30 bg-midnight/95 backdrop-blur-md shadow-lg shadow-midnight/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo with Animated Moon Phase */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10">
            {/* Animated moon that cycles through phases */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lunarGold via-moonlightSilver to-lunarGold opacity-90 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-midnight opacity-0 group-hover:opacity-20 transition-opacity" style={{
              background: 'radial-gradient(circle at 30% 30%, transparent 40%, rgba(10, 17, 40, 0.8) 40%)'
            }} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-wide leading-tight text-pearlWhite">
              Moonlit Studios
            </span>
            <span className="text-[10px] text-lunarGold/80 tracking-widest uppercase hidden sm:block">
              The Nurse Who Codes
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-moonlightSilver items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-mermaidTeal transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 hover:text-mermaidTeal transition-colors font-medium"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full right-0 mt-2 w-72 bg-deepOcean backdrop-blur-lg border border-mermaidTeal/40 rounded-lg shadow-2xl shadow-midnight/60 overflow-hidden animate-fade-in-up"
              >
                <div className="py-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-moonlightSilver hover:bg-mermaidTeal/20 hover:text-mermaidTeal transition-all border-b border-deepOcean/40 last:border-b-0"
                    >
                      {service.label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-4 py-3 text-sm text-lunarGold hover:bg-lunarGold/10 hover:text-lunarGold font-semibold transition-all"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mobile menu button clicked!', !mobileMenuOpen);
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="md:hidden p-2 text-mermaidTeal hover:text-lunarGold transition-colors rounded-lg hover:bg-mermaidTeal/10 z-50"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu - ALWAYS RENDERED, visibility controlled by CSS */}
      <div className={`md:hidden fixed inset-0 z-[20000] bg-midnight/95 backdrop-blur-md transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="fixed left-0 right-0 top-[73px] bottom-0 overflow-y-auto border-t-2 border-mermaidTeal">
          <nav className="flex flex-col px-6 py-8 space-y-2">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-lg font-medium text-pearlWhite hover:text-mermaidTeal hover:bg-mermaidTeal/10 transition-all py-3 px-4 rounded-lg border-b border-deepOcean/40"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Accordion */}
            <div className="border-b border-deepOcean/40">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Services accordion clicked!', !mobileServicesOpen);
                  setMobileServicesOpen(!mobileServicesOpen);
                }}
                className="w-full flex items-center justify-between text-lg font-medium text-pearlWhite hover:text-mermaidTeal hover:bg-mermaidTeal/10 transition-all py-3 px-4 rounded-lg"
              >
                <span className="flex items-center gap-2">
                  Services
                  <span className="px-2 py-0.5 text-xs bg-mermaidTeal/20 text-mermaidTeal rounded-full font-semibold">
                    5
                  </span>
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Services List */}
              <div className={`bg-deepOcean/40 rounded-lg my-2 overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-3 text-sm text-moonlightSilver hover:bg-mermaidTeal/20 hover:text-mermaidTeal transition-all border-b border-deepOcean/20 last:border-b-0"
                  >
                    {service.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className="block px-6 py-3 text-sm text-lunarGold hover:bg-lunarGold/10 font-semibold transition-all"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
