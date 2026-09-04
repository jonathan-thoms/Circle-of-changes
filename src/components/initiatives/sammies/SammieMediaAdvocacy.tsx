'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, Radio, Award, Tv, Star, ArrowRight, ExternalLink } from 'lucide-react';

export default function SammieMediaAdvocacy() {
  const mediaOutlets = [
    { name: 'NBC Nightly News', feature: "Kids Caring: Sammie's Buddy Benches" },
    { name: 'The Kelly Clarkson Show', feature: 'Inspiring Kids Making a Real Difference' },
    { name: 'Disney Heroes', feature: 'Youth Conservation Champion Honor' },
    { name: 'Hallmark Channel', feature: 'Home & Family Kindness Spotlight' },
    { name: 'USA Today', feature: 'How Bottle Caps Turned into Friendship' },
  ];

  return (
    <section className="py-24 bg-earth-canvas border-t border-charcoal-ink/10" id="media-advocacy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
            Advocacy, Book &amp; Media
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
            Inspiring the Nation to Choose{' '}
            <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase">
              Kindness
            </span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
            Sammie Vance has become a national voice for youth environmental action, authoring an acclaimed children’s book and speaking to thousands of students worldwide.
          </p>
        </div>

        {/* 2-Column Grid: Book & Podcast Spotlight (Left) + Media Mentions (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Book & Podcast Spotlight (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              
              {/* Book Icon Box */}
              <div className="w-28 h-36 rounded-xl bg-deep-ocean text-white flex flex-col items-center justify-center p-4 shadow-md flex-shrink-0 text-center space-y-2">
                <BookOpen className="w-8 h-8 text-earth-yellow" />
                <span className="text-[11px] font-bold font-poppins uppercase tracking-wider leading-tight">
                  Inspire the World
                </span>
              </div>

              {/* Book Info */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-earth-coral">
                  Published Author &amp; Speaker
                </div>
                <h3 className="text-2xl font-extrabold font-poppins text-earth-dark leading-tight">
                  &ldquo;Inspire the World: A Kid&apos;s Journey to Making a Difference&rdquo;
                </h3>
                <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                  Written by Sammie Vance, this illustrated guide shares how any child can find a cause they care about, rally their friends, and turn simple ideas into lasting community impact.
                </p>
              </div>
            </div>

            {/* Podcast Callout */}
            <a
              href="https://podcasts.apple.com/us/podcast/sammie-smiles/id1536338801"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen to Sammie Smiles Podcast on Apple Podcasts"
              className="group p-6 rounded-xl bg-earth-canvas hover:bg-[#EAECEF] transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer active:scale-98"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-earth-teal shadow-sm group-hover:scale-105 group-hover:text-earth-dark transition-all duration-200">
                  <Radio className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-earth-dark font-poppins group-hover:text-earth-teal transition-colors">
                    Sammie Smiles Podcast
                  </div>
                  <div className="text-xs text-charcoal-ink/70">
                    Interviews with young changemakers and kindness ambassadors
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-earth-teal group-hover:text-earth-dark group-hover:translate-x-0.5 transition-all">
                <span>Listen Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          {/* Right Column: Media Badges (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
              Featured On National Broadcasts
            </div>

            <div className="space-y-3">
              {mediaOutlets.map((outlet) => (
                <div
                  key={outlet.name}
                  className="p-4 rounded-xl bg-white shadow-sm flex items-center justify-between gap-3 hover:bg-[#FAFBFB] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Tv className="w-4 h-4 text-earth-teal flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-earth-dark font-poppins">
                        {outlet.name}
                      </div>
                      <div className="text-xs text-charcoal-ink/65">
                        {outlet.feature}
                      </div>
                    </div>
                  </div>
                  <Star className="w-4 h-4 text-earth-yellow flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
