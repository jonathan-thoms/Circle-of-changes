'use client';

import React from 'react';
import { Package, Utensils, Printer, Shield, Sparkles, HeartHandshake, ArrowRight, HelpCircle } from 'lucide-react';

export default function InKindAndCustom() {
  const inKindExamples = [
    { title: 'Bottled Water & Hydration', icon: Package, desc: 'Spring water or compostable hydration cups for runner stations' },
    { title: 'Healthy Snacks & Fuel', icon: Utensils, desc: 'Bananas, energy bars, bagels, and post-race refreshments' },
    { title: 'Printing & Signage Services', icon: Printer, desc: 'Course directional signage, bibs, and event banners' },
    { title: 'Equipment & Medical Support', icon: Shield, desc: 'First aid supplies, finish line sound gear, and volunteer tents' },
    { title: 'Awards & Swag Items', icon: Sparkles, desc: 'Medals, zero-waste prizes, and runner goodie bag merchandise' },
    { title: 'Recycling Collection Gear', icon: HeartHandshake, desc: 'Heavy-duty sorting bags, digital hanging scales, and bins' },
  ];

  return (
    <section className="py-24 bg-white border-t border-charcoal-ink/10" id="in-kind-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: In-Kind Sponsorships (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
              Product &amp; Service Donations
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-earth-dark tracking-tight leading-tight">
              In-Kind Sponsorship Opportunities
            </h2>

            <p className="text-base text-charcoal-ink/80 leading-relaxed">
              Businesses interested in supporting the event through donated products or professional services are encouraged to participate as In-Kind Sponsors. Recognition will be matched to equivalent financial sponsorship tiers based on the fair market value of the donation.
            </p>

            {/* Examples Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {inKindExamples.map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-earth-canvas space-y-1.5 border border-charcoal-ink/5">
                  <div className="flex items-center gap-2 text-earth-teal font-bold text-sm font-poppins">
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-charcoal-ink/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Sponsorship Card (5 Cols) */}
          <div className="lg:col-span-5 bg-earth-dark text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-earth-yellow">
                <HelpCircle className="w-4 h-4" />
                <span>Tailored ESG Programs</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white leading-tight">
                Custom Sponsorship Opportunities
              </h3>

              <p className="text-sm text-white/85 leading-relaxed">
                Interested in creating something unique? We are happy to customize sponsorship opportunities that align with your organization&apos;s corporate social responsibility (CSR) and marketing goals while advancing community plastic reduction.
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 space-y-3">
              <div className="text-xs text-sand-beige/90">
                Contact our executive sponsorship director directly:
              </div>
              <div className="text-sm font-bold text-earth-yellow">
                partnership@circlesofchange.org
              </div>
              <a
                href="#sponsor-pledge-form"
                className="w-full py-3 px-4 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Inquire About Custom Package</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
