'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceLinks = [
    { href: '/services/small-business', label: 'Small Business Launchpads' },
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
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-mermaidTeal/30 bg-midnight/95 backdrop-blur-md shadow-lg shadow-midnight/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo with Business Mark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10">
            {/* Square Business Logo */}
            <Image
              src="/square-logo.png"
              alt="Moonlit Studios Logo"
              width={40}
              height={40}
              className="rounded-lg transition-transform group-hover:scale-110"
              priority
            />
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

        {/* DESKTOP Navigation - Hidden on Mobile, Simplified on Tablet */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-xs md:text-sm text-moonlightSilver items-center" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-mermaidTeal transition-colors font-medium whitespace-nowrap"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
              className="flex items-center gap-1 hover:text-mermaidTeal transition-colors font-medium whitespace-nowrap"
              aria-label="Services menu"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full right-0 mt-2 w-64 md:w-72 bg-deepOcean backdrop-blur-lg border border-mermaidTeal/40 rounded-lg shadow-2xl shadow-midnight/60 overflow-hidden animate-fade-in-up"
                role="menu"
                aria-label="Services submenu"
              >
                <div className="py-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-moonlightSilver hover:bg-mermaidTeal/20 hover:text-mermaidTeal transition-all border-b border-deepOcean/40 last:border-b-0"
                      role="menuitem"
                      aria-label={`Navigate to ${service.label}`}
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

          {/* Client Portal Login - Highlighted CTA */}
          <Link
            href="/portal/login"
            className="px-3 md:px-4 py-2 bg-gradient-to-r from-lunarGold/80 to-phoenixFire/70 text-midnight text-xs md:text-sm font-semibold rounded-lg hover:from-lunarGold hover:to-phoenixFire hover:scale-105 transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
            aria-label="Client Portal Login"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span className="hidden lg:inline">Client Portal</span>
            <span className="lg:hidden">Portal</span>
          </Link>
        </nav>

        {/* MOBILE Navigation - Horizontal Scrollable Magic */}
        <nav className="md:hidden flex-1 ml-4 overflow-x-auto scrollbar-mobile" aria-label="Mobile navigation">
          <div className="flex gap-3 items-center min-w-max px-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2.5 min-h-[44px] text-xs font-medium text-pearlWhite bg-gradient-to-r from-mermaidTeal/20 to-deepOcean/40 border border-mermaidTeal/30 rounded-full hover:from-mermaidTeal/30 hover:to-deepOcean/60 transition-all whitespace-nowrap flex items-center"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services button for mobile */}
            <Link
              href="/services"
              className="px-4 py-2.5 min-h-[44px] text-xs font-medium text-lunarGold bg-gradient-to-r from-lunarGold/20 to-phoenixFire/20 border border-lunarGold/30 rounded-full hover:from-lunarGold/30 hover:to-phoenixFire/40 transition-all whitespace-nowrap flex items-center"
              aria-label="Navigate to Services"
            >
              Services ✨
            </Link>

            {/* Client Portal for mobile */}
            <Link
              href="/portal/login"
              className="px-4 py-2.5 min-h-[44px] text-xs font-semibold text-midnight bg-gradient-to-r from-lunarGold/80 to-phoenixFire/70 border border-lunarGold rounded-full hover:from-lunarGold hover:to-phoenixFire transition-all whitespace-nowrap flex items-center gap-1"
              aria-label="Client Portal Login"
            >
              🔑 Portal
            </Link>

            {/* Get Quote CTA for mobile */}
            <Link
              href="/get-quote"
              className="px-4 py-2.5 min-h-[44px] text-xs font-bold text-midnight bg-gradient-to-r from-lunarGold to-phoenixFire rounded-full hover:shadow-lg transition-all whitespace-nowrap flex items-center"
              aria-label="Get a quote"
            >
              💰 Get Quote
            </Link>
          </div>
        </nav>
      </div>

      {/* Custom scrollbar styling for mobile navigation */}
      <style jsx>{`
        .scrollbar-mobile {
          scrollbar-width: thin;
          scrollbar-color: rgba(94, 234, 212, 0.3) rgba(15, 23, 42, 0.5);
        }
        .scrollbar-mobile::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-mobile::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 3px;
        }
        .scrollbar-mobile::-webkit-scrollbar-thumb {
          background: rgba(94, 234, 212, 0.3);
          border-radius: 3px;
        }
        .scrollbar-mobile::-webkit-scrollbar-thumb:hover {
          background: rgba(94, 234, 212, 0.5);
        }
      `}</style>
    </header>
  );
}
