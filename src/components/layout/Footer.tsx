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
    <footer className="bg-recycled-navy text-white pt-20 pb-12 border-t-2 border-charcoal-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/15">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="white" size="md" />
            <p className="text-sand-beige/85 text-sm leading-relaxed max-w-sm pt-2">
              Uniting grassroots plastic collection, youth kindness projects, and community athletics into an unbroken circle of social and environmental impact.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-sky-renewal font-medium">
              <ShieldCheck className="w-4 h-4 text-regen-mint" />
              <span>Registered 501(c)(3) Non-Profit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-renewal">
              Organization
            </h4>
            <ul className="space-y-2 text-sm text-sand-beige/85 font-medium">
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition">
                  About Circles of Change
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition">
                  The &ldquo;Impact C&rdquo; Concept
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition">
                  Partner Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition">
                  Values &amp; Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Initiatives */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-renewal">
              Initiatives &amp; Events
            </h4>
            <ul className="space-y-2 text-sm text-sand-beige/85 font-medium">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition">
                  Race for Recycling 5K
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition">
                  Sammie&apos;s Buddy Bench Project
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white hover:underline transition">
                  Community Plastic Bank
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition">
                  School Workshop Drives
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup with Neo-Brutalist Input */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-renewal">
              Stay in the Circle
            </h4>
            <p className="text-xs text-sand-beige/85 leading-relaxed">
              Quarterly updates on polymer metrics, new school buddy benches, and 5K race registrations.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-impact-green border-2 border-white shadow-neo-sm text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
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
                  className="w-full px-3.5 py-2.5 rounded border-2 border-white bg-deep-ocean/90 text-white placeholder-sand-beige/60 text-xs shadow-neo-sm focus:outline-none focus:bg-deep-ocean"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-sand-beige text-deep-ocean font-bold text-xs uppercase tracking-wider border-2 border-white shadow-neo-white hover:shadow-none hover:bg-white active:translate-x-0.5 active:translate-y-0.5 transition-all duration-150 cursor-pointer"
                >
                  <span>Subscribe to Updates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sub-Brand & Authorization Notice */}
        <div className="py-6 border-b border-white/10 text-xs text-sand-beige/70 leading-relaxed">
          <p>
            <strong className="text-sand-beige font-semibold">Non-Profit Collaboration Notice:</strong> Circles of Change operates internal flagship initiatives (such as the <em>Race for Recycling 5K</em>) and provides 501(c)(3) sponsorship and logistical support for partner initiatives (including <em>Sammie&apos;s Buddy Bench Project</em>). Designated sub-brand marks are used under authorized collaboration agreements.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-beige/65 gap-4">
          <p>© {new Date().getFullYear()} Circles of Change. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
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
