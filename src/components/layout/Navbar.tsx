'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: "Sammie's Buddy Bench", href: '/initiatives/sammies-buddy-bench' },
    { name: 'Race 5K & Sponsors', href: '/race-for-recycling-5k' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href) && href !== '/';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/98 shadow-sm py-3.5 border-b border-charcoal-ink/10'
          : 'bg-white/95 py-4 border-b border-charcoal-ink/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <Logo variant="color" size="md" />
          </div>

          {/* Center Navigation Links (EarthShare Style) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? 'text-earth-teal font-bold border-b-2 border-earth-teal'
                      : 'text-charcoal-ink/80 hover:text-earth-teal'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Dual Action CTAs (Matching EarthShare Outline + Solid) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/about"
              className="px-4 py-2 rounded-md border border-charcoal-ink/30 hover:border-charcoal-ink text-xs font-bold text-charcoal-ink transition-colors duration-200"
            >
              Get Involved
            </Link>
            <Link
              href="/race-for-recycling-5k"
              className="px-4 py-2 rounded-md bg-earth-dark hover:bg-earth-teal text-xs font-bold text-white transition-colors duration-200 flex items-center gap-1.5 shadow-sm"
            >
              <span>Race 5K &amp; Expo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-charcoal-ink focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-charcoal-ink/10 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 text-base font-bold transition-colors ${
                    active
                      ? 'text-earth-teal bg-earth-canvas rounded-md'
                      : 'text-charcoal-ink hover:text-earth-teal'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-charcoal-ink/10 flex flex-col gap-2.5">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-md border border-charcoal-ink text-center text-xs font-bold text-charcoal-ink"
            >
              Get Involved
            </Link>
            <Link
              href="/#race-callout"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-md bg-earth-dark text-center text-xs font-bold text-white flex items-center justify-center gap-1.5"
            >
              <span>Join the Circle</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
