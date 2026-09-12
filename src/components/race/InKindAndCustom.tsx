'use client';

import React from 'react';
import { Package, Utensils, Printer, Shield, Sparkles, HeartHandshake, ArrowRight, HelpCircle } from 'lucide-react';

export default function InKindAndCustom() {
  const inKindExamples = [
    { title: 'Bottled Water', icon: Package },
    { title: 'Healthy Snacks & Refreshments', icon: Utensils },
    { title: 'Printing Services', icon: Printer },
    { title: 'Event Equipment', icon: Shield },
    { title: 'Medical Support', icon: Shield },
    { title: 'Volunteer Meals', icon: Utensils },
    { title: 'Awards & Giveaways', icon: Sparkles },
    { title: 'Recycling Supplies', icon: HeartHandshake },
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
              In-Kind Sponsorships
            </h2>

            <p className="text-base text-charcoal-ink/80 leading-relaxed">
              Businesses interested in supporting the event through donated products or services are encouraged to participate as In-Kind Sponsors.
            </p>

            {/* Examples Grid */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-earth-dark font-poppins">
                Examples Include:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inKindExamples.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-earth-canvas flex items-center gap-3 border border-charcoal-ink/5">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-earth-teal shadow-xs flex-shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-earth-dark">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Deck Note Callout */}
            <div className="p-4 rounded-xl bg-earth-canvas border-l-4 border-earth-yellow text-xs text-charcoal-ink/80 leading-relaxed space-y-1">
              <span className="font-bold text-earth-dark uppercase tracking-wider block">Note:</span>
              <p>
                Recognition for In-Kind Sponsors will be determined based on the fair market value of the contribution and may include website recognition, event signage, social media recognition, and additional promotional opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Custom Sponsorship Card (5 Cols) */}
          <div className="lg:col-span-5 bg-earth-dark text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-md">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-earth-yellow">
                <HelpCircle className="w-4 h-4" />
                <span>Tailored Partnerships</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white leading-tight">
                Custom Sponsorship Opportunities
              </h3>

              <div className="text-sm font-bold text-sand-beige">
                Interested in creating something unique?
              </div>

              <p className="text-sm text-white/85 leading-relaxed">
                We are happy to customize sponsorship opportunities that align with your organization&apos;s marketing goals while supporting the mission of the Race for Recycling 5K.
              </p>
            </div>

            <div className="pt-6 border-t border-white/15 space-y-4">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider text-sand-beige/90 font-semibold">
                  For sponsorship inquiries, please contact:
                </div>
                <div className="text-base font-bold text-white font-poppins">
                  Sherry Lambe
                </div>
                <a
                  href="mailto:slambe@circlesofchange.net"
                  className="text-sm font-bold text-earth-yellow hover:underline block"
                >
                  slambe@circlesofchange.net
                </a>
              </div>

              <a
                href="#sponsor-pledge-form"
                className="w-full py-3 px-4 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Inquire About Sponsorship</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
