'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Logo from '../ui/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-earth-dark text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" size="md" />
            <p className="text-white/80 text-sm leading-relaxed max-w-sm pt-2">
              Uniting grassroots plastic collection, youth kindness projects, and community athletics into an unbroken circle of social and environmental impact.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-white/70 font-medium">
              <ShieldCheck className="w-4 h-4 text-earth-yellow" />
              <span>Registered 501(c)(3) Non-Profit Organization</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Organization
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Circles of Change
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  The &ldquo;Impact C&rdquo; Concept
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Partner Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Values &amp; Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Initiatives */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Initiatives &amp; Events
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Race for Recycling 5K
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  Sammie&apos;s Buddy Bench Project
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition">
                  Community Plastic Bank
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  School Workshop Drives
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup (EarthShare Style) */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Stay in the Circle
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Quarterly updates on polymer metrics, new school buddy benches, and 5K race registrations.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-md bg-earth-teal/30 border border-earth-teal text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-earth-yellow flex-shrink-0" />
                <span>You are connected to the Circle!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs focus:outline-none focus:ring-1 focus:ring-earth-yellow"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sub-Brand & Authorization Notice */}
        <div className="py-6 border-b border-white/10 text-xs text-white/60 leading-relaxed">
          <p>
            <strong className="text-white font-medium">Non-Profit Collaboration Notice:</strong> Circles of Change operates internal flagship initiatives (such as the <em>Race for Recycling 5K</em>) and provides 501(c)(3) sponsorship and logistical support for partner initiatives (including <em>Sammie&apos;s Buddy Bench Project</em>). Designated sub-brand marks are used under authorized collaboration agreements.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Circles of Change. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-white transition">
              Terms of Use
            </Link>
            <Link href="/about" className="hover:text-white transition">
              Financial Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
