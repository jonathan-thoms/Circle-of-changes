'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Logo from '../ui/Logo';

interface PartnerItem {
  name: string;
  focus: string;
  status: string;
  subBrandLogo?: boolean;
}

interface PartnerCategory {
  category: string;
  role: string;
  description: string;
  items: PartnerItem[];
}

interface PartnerEcosystemProps {
  categories: PartnerCategory[];
}

export default function PartnerEcosystem({
  categories,
}: PartnerEcosystemProps) {
  return (
    <section className="py-24 bg-eco-cream/50 border-t border-charcoal-ink/10" id="partner-ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-green">
            Collaborative Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-ocean tracking-tight">
            The Partner Network Ecosystem
          </h2>
          <p className="text-base text-charcoal-ink/75 leading-relaxed">
            Circles of Change operates both internal operations and serves as a logistical accelerator for allied non-profits, schools, and civic departments.
          </p>
        </div>

        {/* Sammie's Buddy Bench Sub-Brand Spotlight */}
        <div className="mb-16 bg-white rounded-xl border border-charcoal-ink/10 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Photo on Left */}
            <div className="lg:col-span-6 relative h-72 sm:h-80 rounded-lg overflow-hidden bg-sand-beige">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/hero-buddy-bench.jpg)` }}
              />
            </div>

            {/* Story & Sub-Brand Authorization on Right */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-green">
                Featured Sub-Branded Alliance
              </div>

              <div className="pt-1">
                <Logo
                  variant="subbrand-sammie"
                  size="lg"
                  href="/about#partner-ecosystem"
                  ariaLabel="Sammie's Circles of Change Initiative"
                />
              </div>

              <h3 className="text-2xl font-bold font-poppins text-deep-ocean">
                Sammie&apos;s Circles of Change Initiative
              </h3>

              <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                Founded by youth activist Sammie Vance, the Buddy Bench Project is a flagship partner initiative supported under the Circles of Change umbrella. We provide manufacturing partnerships, collection logistics, and 501(c)(3) sponsorship.
              </p>

              <div className="flex items-center gap-6 pt-2 border-t border-charcoal-ink/10 text-xs text-charcoal-ink/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-green" />
                  <span>350+ Benches Installed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-green" />
                  <span>50 States Reached</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3-Tier Open Directory Grid (EarthShare Inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4 border-t border-charcoal-ink/10">
          {categories.map((cat, idx) => (
            <div key={cat.category} className="space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-green">
                  Tier 0{idx + 1} • {cat.role}
                </div>
                <h3 className="text-xl font-bold font-poppins text-deep-ocean">
                  {cat.category}
                </h3>
                <p className="text-xs text-charcoal-ink/70 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-charcoal-ink/10">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 bg-white rounded-lg border border-charcoal-ink/10 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-deep-ocean font-poppins">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sand-beige text-charcoal-ink/70">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-ink/70">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
