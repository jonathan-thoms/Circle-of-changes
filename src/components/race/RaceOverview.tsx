'use client';

import React from 'react';
import { CheckCircle2, HeartHandshake, ShieldCheck, Trophy, Flame } from 'lucide-react';

export default function RaceOverview() {
  return (
    <section className="py-24 bg-white" id="overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 50/50 Split Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo & Impact Stat Callout (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-earth-canvas shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/hero-race-5k.jpg)` }}
              />
            </div>

            <div className="p-6 rounded-2xl bg-earth-canvas flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-deep-ocean text-earth-yellow flex items-center justify-center flex-shrink-0 shadow-sm">
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-earth-dark font-poppins">
                  Community &amp; Corporate Stewardship
                </div>
                <p className="text-xs text-charcoal-ink/75 leading-relaxed">
                  Every dollar raised directly supports regional plastic sorting hubs, student recycling drives, and Buddy Bench installations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative from Prospectus (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
              Partner With Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight leading-tight">
              A Celebration of Sustainability, Health &amp;{' '}
              <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase">
                Community
              </span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-ink/80 leading-relaxed">
              The <strong>Race for Recycling 5K</strong> is a race as well as a community-wide celebration of sustainability, environmental stewardship, and healthy living. By becoming a sponsor, your organization will help launch a new annual tradition while gaining meaningful exposure among families, businesses, community leaders, and environmentally conscious participants.
            </p>

            <p className="text-base sm:text-lg text-charcoal-ink/80 leading-relaxed">
              Together, we can inspire positive environmental action while investing in a healthier, stronger, and more resilient community.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-charcoal-ink/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-earth-dark">
                  High-Visibility Corporate Branding
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-earth-dark">
                  Complimentary Race Registrations
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-earth-dark">
                  On-Site Expo &amp; Vendor Booth Space
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-earth-dark">
                  Direct Measurable Waste Diversion Impact
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
