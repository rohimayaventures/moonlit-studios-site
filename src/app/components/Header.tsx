'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

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

        {/* DESKTOP Navigation - Hidden on Mobile */}
        <nav className="hidden lg:flex gap-6 text-sm text-moonlightSilver items-center">
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

        {/* MOBILE/TABLET Navigation - Horizontal Scrollable Magic */}
        <div className="lg:hidden flex-1 ml-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 items-center min-w-max px-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-pearlWhite bg-gradient-to-r from-mermaidTeal/20 to-deepOcean/40 border border-mermaidTeal/30 rounded-full hover:from-mermaidTeal/30 hover:to-deepOcean/60 transition-all whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}

            {/* Services button for mobile */}
            <Link
              href="/services"
              className="px-3 py-1.5 text-xs font-medium text-lunarGold bg-gradient-to-r from-lunarGold/20 to-phoenixFire/20 border border-lunarGold/30 rounded-full hover:from-lunarGold/30 hover:to-phoenixFire/40 transition-all whitespace-nowrap"
            >
              Services ✨
            </Link>
          </div>
        </div>
      </div>

      {/* Custom scrollbar hide for mobile navigation */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
}
