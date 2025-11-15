'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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

  return (
    <header className="sticky top-0 z-50 border-b border-mermaidTeal/30 bg-midnight/95 backdrop-blur-md shadow-lg shadow-midnight/50">
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
            <span className="text-lg font-semibold tracking-wide leading-tight text-pearlWhite">
              Moonlit Studios
            </span>
            <span className="text-[10px] text-lunarGold/80 tracking-widest uppercase hidden sm:block">
              The Nurse Who Codes
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-moonlightSilver items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-mermaidTeal transition-colors font-medium"
            >
              {link.label}
            </a>
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
                className="absolute top-full right-0 mt-2 w-72 bg-deepOcean/98 backdrop-blur-lg border border-mermaidTeal/40 rounded-lg shadow-2xl shadow-midnight/60 overflow-hidden animate-fade-in-up"
              >
                <div className="py-2">
                  {serviceLinks.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-moonlightSilver hover:bg-mermaidTeal/20 hover:text-mermaidTeal transition-all border-b border-deepOcean/40 last:border-b-0"
                    >
                      {service.label}
                    </a>
                  ))}
                  <a
                    href="/services"
                    className="block px-4 py-3 text-sm text-lunarGold hover:bg-lunarGold/10 hover:text-lunarGold font-semibold transition-all"
                  >
                    View All Services →
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-mermaidTeal hover:text-lunarGold transition-colors rounded-lg hover:bg-mermaidTeal/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-midnight/98 backdrop-blur-lg md:hidden border-t border-mermaidTeal/40 shadow-2xl overflow-y-auto">
          <nav className="flex flex-col px-4 py-6 text-left max-w-md mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-pearlWhite hover:text-mermaidTeal hover:bg-mermaidTeal/10 transition-all py-4 px-4 rounded-lg border-b border-deepOcean/40"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Services Accordion */}
            <div className="border-b border-deepOcean/40">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-lg font-medium text-pearlWhite hover:text-mermaidTeal hover:bg-mermaidTeal/10 transition-all py-4 px-4 rounded-lg"
              >
                Services
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="bg-deepOcean/40 rounded-lg mb-2 overflow-hidden animate-fade-in-up">
                  {serviceLinks.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-6 py-3 text-sm text-moonlightSilver hover:bg-mermaidTeal/20 hover:text-mermaidTeal transition-all border-b border-deepOcean/20 last:border-b-0"
                    >
                      {service.label}
                    </a>
                  ))}
                  <a
                    href="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-3 text-sm text-lunarGold hover:bg-lunarGold/10 font-semibold transition-all"
                  >
                    View All Services →
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
