'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Heart, Users, MapPin, Sparkles } from 'lucide-react';

export default function SammieHero() {
  return (
    <section className="relative min-h-[660px] lg:min-h-[740px] flex items-end pt-24 sm:pt-28 pb-16 lg:pb-20 overflow-hidden bg-earth-dark select-none">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out scale-105"
        style={{ backgroundImage: `url(/images/hero-buddy-bench.jpg)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/95 via-earth-dark/70 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-earth-dark/90 via-earth-dark/60 to-transparent" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Left Column: Narrative & Dedicated Logo (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 text-white">
            
            {/* Dedicated Sub-Brand Logo (White) */}
            <div className="relative w-64 sm:w-72 h-16 sm:h-20 drop-shadow-md">
              <Image
                src="/images/Sammie_s COC-White.png"
                alt="Sammie's Circles of Change"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            {/* ExtraBold Headline with Yellow Script Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white leading-[1.15] tracking-tight">
              Turning Recycled Plastic Caps into School{' '}
              <span className="font-script text-earth-yellow font-normal text-5xl sm:text-6xl lg:text-7xl lowercase inline-block">
                Friendship
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl">
              Founded by 8-year-old youth leader Sammie Vance, this initiative empowers students across all 50 states to collect bottle caps and forge them into 100% recycled Buddy Benches—ensuring no child sits alone on the playground.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#school-starter-form"
                className="px-7 py-3.5 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-sm transition-all duration-200 shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Start a School Drive</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#cap-guide"
                className="px-6 py-3.5 rounded-md border border-white/70 hover:border-white hover:bg-white hover:text-earth-dark text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Cap Checklist</span>
              </a>
            </div>

          </div>

          {/* Right Column: Key Impact Highlight Card (4 Cols) */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 text-white space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-earth-yellow">
              <Sparkles className="w-4 h-4" />
              <span>Project Milestones</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-earth-yellow">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-poppins text-white">350+ Benches</div>
                  <div className="text-xs text-sand-beige/80">Installed on playgrounds</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-earth-yellow">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-poppins text-white">50 States + Mexico</div>
                  <div className="text-xs text-sand-beige/80">Participating communities</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-earth-yellow">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-poppins text-white">250,000+ lbs</div>
                  <div className="text-xs text-sand-beige/80">Bottle caps diverted from landfills</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
