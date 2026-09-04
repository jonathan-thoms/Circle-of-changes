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
      // Transition from transparent to white background on scrolling down past 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Initialize immediately on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  // Header is transparent at top when mobile menu is closed
  const isTransparent = !isScrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isTransparent
          ? 'bg-transparent border-b border-transparent py-4 sm:py-5'
          : 'bg-white shadow-sm border-b border-charcoal-ink/10 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Automatically switches between light (transparent) and dark (white) */}
          <div className="flex items-center">
            <Logo
              variant={isTransparent ? 'white' : 'color'}
              onDark={isTransparent}
              size="md"
            />
          </div>

          {/* Center Navigation Links with Animated Underline and Hover/Click Effects */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group px-3.5 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                    isTransparent
                      ? active
                        ? 'text-earth-yellow font-bold'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                      : active
                        ? 'text-earth-teal font-bold'
                        : 'text-charcoal-ink/80 hover:text-earth-teal hover:bg-earth-canvas'
                  }`}
                >
                  <span className="relative inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                    {link.name}
                    {/* Sliding / Expanding Underline Micro-Interaction */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 ease-out ${
                        active
                          ? isTransparent
                            ? 'w-full bg-earth-yellow shadow-[0_0_8px_rgba(255,208,0,0.6)]'
                            : 'w-full bg-earth-teal'
                          : isTransparent
                            ? 'w-0 group-hover:w-full bg-earth-yellow'
                            : 'w-0 group-hover:w-full bg-earth-teal'
                      }`}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Dual Action CTAs with Hover Lift and Tactile Click */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/about"
              className={`px-4 py-2 rounded-md text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105 ${
                isTransparent
                  ? 'border border-white/60 hover:border-white text-white hover:bg-white/15 drop-shadow-sm hover:shadow-sm'
                  : 'border border-charcoal-ink/30 hover:border-charcoal-ink text-charcoal-ink hover:bg-charcoal-ink/5 hover:shadow-sm'
              }`}
            >
              Get Involved
            </Link>
            <Link
              href="/race-for-recycling-5k"
              className={`group px-4 py-2 rounded-md text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-95 hover:scale-105 shadow-sm hover:shadow-md ${
                isTransparent
                  ? 'bg-earth-yellow hover:bg-[#FFE033] text-earth-dark'
                  : 'bg-earth-dark hover:bg-earth-teal text-white'
              }`}
            >
              <span>Race 5K &amp; Expo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button with Tactile Feedback */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-md transition-all duration-200 focus:outline-none cursor-pointer active:scale-90 hover:scale-105 ${
                isTransparent
                  ? 'text-white hover:text-earth-yellow hover:bg-white/10'
                  : 'text-charcoal-ink hover:text-earth-teal hover:bg-earth-canvas'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
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
                  className={`px-4 py-2.5 rounded-lg text-base font-bold transition-all duration-150 active:scale-98 ${
                    active
                      ? 'text-earth-teal bg-earth-canvas'
                      : 'text-charcoal-ink hover:text-earth-teal hover:bg-earth-canvas/60'
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
              className="w-full py-2.5 px-4 rounded-md border border-charcoal-ink text-center text-xs font-bold text-charcoal-ink transition-transform active:scale-95"
            >
              Get Involved
            </Link>
            <Link
              href="/race-for-recycling-5k"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-md bg-earth-dark text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-transform active:scale-95"
            >
              <span>Race 5K &amp; Expo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
