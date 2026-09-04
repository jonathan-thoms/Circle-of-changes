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
    <section className="py-24 bg-earth-canvas border-t border-charcoal-ink/10" id="partner-ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
            Our Non-Profit Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
            The Partner Network{' '}
            <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase">
              Ecosystem
            </span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
            Circles of Change operates internal signature programs and serves as a logistical backbone for allied non-profits, schools, and municipal partners.
          </p>
        </div>

        {/* Sammie's Buddy Bench Spotlight (50/50 Split Media Block) */}
        <div className="mb-16 bg-white rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Photo on Left */}
            <div className="lg:col-span-6 relative h-72 sm:h-80 rounded-xl overflow-hidden bg-earth-canvas">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/hero-buddy-bench.jpg)` }}
              />
            </div>

            {/* Story & Sub-Brand on Right */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-earth-coral">
                Featured Partner Alliance
              </div>

              <div className="pt-1">
                <Logo
                  variant="subbrand-sammie"
                  size="lg"
                  href="/initiatives/sammies-buddy-bench"
                  ariaLabel="Sammie's Circles of Change Initiative"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-earth-dark">
                Sammie&apos;s Circles of Change Initiative
              </h3>

              <p className="text-base text-charcoal-ink/75 leading-relaxed">
                Founded by youth activist Sammie Vance, the Buddy Bench Project is a flagship partner initiative supported under the Circles of Change umbrella. We provide manufacturing partnerships, collection logistics, and 501(c)(3) sponsorship.
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-charcoal-ink/10">
                <div className="flex items-center gap-6 text-xs font-semibold text-charcoal-ink/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-earth-teal" />
                    <span>350+ Benches</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-earth-teal" />
                    <span>50 States</span>
                  </div>
                </div>

                <Link
                  href="/initiatives/sammies-buddy-bench"
                  className="inline-flex items-center gap-1 text-xs font-bold text-earth-teal hover:text-earth-dark transition"
                >
                  <span>Explore Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 3-Column Open Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.category} className="space-y-6 p-8 bg-white rounded-2xl shadow-sm">
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold font-poppins text-earth-dark">
                  {cat.category}
                </h3>
                <p className="text-xs text-charcoal-ink/70 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-charcoal-ink/10">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-earth-canvas space-y-1 hover:bg-[#EAECEF] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-earth-dark font-poppins">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-earth-teal uppercase">
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
