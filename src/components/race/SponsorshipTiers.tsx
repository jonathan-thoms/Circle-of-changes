'use client';

import React from 'react';
import { CheckCircle2, Crown, Sparkles, Award, Star, Heart, ArrowRight } from 'lucide-react';

export default function SponsorshipTiers() {
  const tiers = [
    {
      id: 'presenting',
      name: 'Presenting Sponsor',
      price: '$10,000',
      availability: 'Exclusive • One Available',
      badgeClass: 'bg-earth-yellow text-earth-dark',
      cardClass: 'border-2 border-earth-yellow bg-white shadow-lg lg:-translate-y-2',
      highlight: true,
      registrations: '15 Complimentary Entries',
      benefits: [
        'Exclusive event naming rights ("Race for Recycling 5K presented by [Your Brand]")',
        'Premier logo on all marketing, flyers & digital campaigns',
        'Largest logo placement on participant race shirts',
        'Premier logo placement on event website',
        'Featured in all press releases & media opportunities',
        'Dedicated social media spotlight leading up to race day',
        'Opportunity to welcome runners during opening ceremonies',
        'Premier vendor booth location at race expo',
        'Promotional items included in runner swag bags',
        'Fifteen (15) complimentary race registrations',
        'First right of refusal for the following year’s event',
      ],
      icon: Crown,
    },
    {
      id: 'gold',
      name: 'Gold Sponsor',
      price: '$5,000',
      availability: 'Two Available',
      badgeClass: 'bg-earth-dark text-white',
      cardClass: 'bg-white border border-charcoal-ink/15 shadow-sm',
      highlight: false,
      registrations: '10 Complimentary Entries',
      benefits: [
        'All Silver Sponsor benefits included',
        'Larger logo placement on participant race shirts',
        'Premium placement on event & course sponsor signage',
        'Dedicated sponsor spotlight on social media channels',
        'Recognition during official opening ceremony',
        'Vendor booth space at the finish line expo',
        'Promotional item in participant swag bags',
        'Ten (10) complimentary race registrations',
      ],
      icon: Award,
    },
    {
      id: 'silver',
      name: 'Silver Sponsor',
      price: '$2,500',
      availability: 'Four Available',
      badgeClass: 'bg-earth-teal text-white',
      cardClass: 'bg-white border border-charcoal-ink/15 shadow-sm',
      highlight: false,
      registrations: '6 Complimentary Entries',
      benefits: [
        'All Bronze Sponsor benefits included',
        'Logo placement on participant race shirts',
        'Promotional item included in participant swag bags',
        'Recognition on event signage & website',
        'Social media recognition',
        'Vendor booth space at the event expo',
        'Six (6) complimentary race registrations',
      ],
      icon: Star,
    },
    {
      id: 'bronze',
      name: 'Bronze Sponsor',
      price: '$1,000',
      availability: 'Open Availability',
      badgeClass: 'bg-sand-beige text-deep-ocean',
      cardClass: 'bg-white border border-charcoal-ink/15 shadow-sm',
      highlight: false,
      registrations: '4 Complimentary Entries',
      benefits: [
        'All Community Sponsor benefits included',
        'Vendor booth space at the event expo',
        'Recognition on sponsor signage along the course',
        'Social media recognition',
        'Logo placement on the official event website',
        'Four (4) complimentary race registrations',
      ],
      icon: Sparkles,
    },
    {
      id: 'community',
      name: 'Community Sponsor',
      price: '$500',
      availability: 'Open Availability',
      badgeClass: 'bg-earth-canvas text-charcoal-ink',
      cardClass: 'bg-white border border-charcoal-ink/15 shadow-sm',
      highlight: false,
      registrations: '2 Complimentary Entries',
      benefits: [
        'Logo placement on the official event website',
        'Recognition as a Community Sponsor on social feeds',
        'Two (2) complimentary race registrations',
        'Showcase your organization’s green commitment',
      ],
      icon: Heart,
    },
  ];

  return (
    <section className="py-24 bg-earth-canvas" id="sponsorship-packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
            Sponsorship Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
            Sponsorship Packages &amp; Levels
          </h2>
          <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
            Gain premier brand exposure, engage your employees with complimentary race entries, and demonstrate environmental leadership in front of hundreds of community members.
          </p>
        </div>

        {/* Featured Presenting Tier Card (Top Full-Width Showcase) */}
        {tiers[0] && (
          <div className="mb-12 bg-white rounded-2xl border-2 border-earth-yellow p-8 sm:p-12 shadow-md relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-charcoal-ink/10 pb-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-earth-yellow text-earth-dark">
                    {tiers[0].availability}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-earth-teal flex items-center gap-1">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Premier Title Sponsor</span>
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-poppins text-earth-dark">
                  {tiers[0].name}
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                <div className="text-4xl sm:text-5xl font-extrabold font-poppins text-earth-dark">
                  {tiers[0].price}
                </div>
                <a
                  href="#sponsor-pledge-form"
                  className="px-6 py-3.5 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-sm transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Select Presenting Package</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-8">
              <div className="text-xs font-bold uppercase tracking-widest text-earth-teal mb-4">
                Exclusive Package Benefits Include:
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tiers[0].benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-earth-teal flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-charcoal-ink/80 leading-relaxed font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4 Companion Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.slice(1).map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-200 border border-charcoal-ink/10"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-1">
                  <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${tier.badgeClass}`}>
                    {tier.availability}
                  </span>
                  <h4 className="text-2xl font-extrabold font-poppins text-earth-dark pt-1">
                    {tier.name}
                  </h4>
                  <div className="text-3xl font-extrabold font-poppins text-earth-teal">
                    {tier.price}
                  </div>
                  <div className="text-xs font-semibold text-charcoal-ink/60">
                    {tier.registrations}
                  </div>
                </div>

                {/* Benefits */}
                <div className="pt-4 border-t border-charcoal-ink/10 space-y-2.5">
                  {tier.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-earth-teal flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-charcoal-ink/75 leading-relaxed">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Select CTA */}
              <div className="pt-4 border-t border-charcoal-ink/10">
                <a
                  href="#sponsor-pledge-form"
                  className="w-full py-2.5 px-4 rounded-md bg-earth-dark hover:bg-earth-teal text-white font-bold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>Pledge {tier.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
