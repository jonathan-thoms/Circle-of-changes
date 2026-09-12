'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Recycle, Trophy, ArrowRight, Award, Users } from 'lucide-react';

export default function RaceHero() {
  return (
    <section className="relative min-h-[660px] lg:min-h-[740px] flex items-end pt-24 sm:pt-28 pb-16 lg:pb-20 overflow-hidden bg-earth-dark select-none">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out scale-105"
        style={{ backgroundImage: `url(/images/hero-race-5k.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/95 via-earth-dark/70 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-earth-dark/90 via-earth-dark/60 to-transparent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Left Column: Event Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 text-white">
            
            {/* Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-renewal">
              <Trophy className="w-4 h-4 text-earth-yellow" />
              <span>5K for the Planet • April 17, 2027 • Fair Park, Dallas, Texas</span>
            </div>

            {/* ExtraBold Headline with Orange Script Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-[1.15] tracking-tight">
              Lace Up for{' '}
              <span className="font-script text-earth-coral font-normal text-5xl sm:text-6xl lg:text-7xl lowercase inline-block">
                sustainability
              </span>{' '}
              at the Race for Recycling 5K
            </h1>

            {/* Description */}
            <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl">
              A community-wide celebration of sustainability, environmental stewardship, and healthy living. Join runners, families, and corporate leaders turning athletic miles into tangible environmental action.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#sponsorship-packages"
                className="px-7 py-3.5 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-sm transition-all duration-200 shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Sponsorship Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sponsor-pledge-form"
                className="px-6 py-3.5 rounded-md border border-white/70 hover:border-white hover:bg-white hover:text-earth-dark text-white font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <span>Sponsor or Register</span>
              </a>
            </div>

          </div>

          {/* Right Column: Key Event Badges (4 Cols) */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 text-white space-y-5">
            <div className="text-xs font-bold uppercase tracking-widest text-earth-yellow">
              Event Logistics
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-earth-yellow flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white font-poppins text-base">Saturday, April 17, 2027</div>
                  <div className="text-xs text-sand-beige/80">Fair Park • Dallas, Texas</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-earth-yellow flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white font-poppins text-base">Fair Park, Dallas</div>
                  <div className="text-xs text-sand-beige/80">Historic Fair Park 5K Course</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-earth-yellow flex-shrink-0">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white font-poppins text-base">5K for the Planet</div>
                  <div className="text-xs text-sand-beige/80">Community recycling &amp; zero-waste event</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
