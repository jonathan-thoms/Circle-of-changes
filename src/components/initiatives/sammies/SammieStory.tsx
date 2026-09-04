'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function SammieStory() {
  return (
    <section className="py-24 bg-white" id="story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 50/50 Split Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo & Vertical Logo Stack (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-80 sm:h-[440px] rounded-2xl overflow-hidden bg-earth-canvas shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/hero-buddy-bench.jpg)` }}
              />
            </div>

            {/* Vertical Logo Badge Callout */}
            <div className="p-6 rounded-2xl bg-earth-canvas flex items-center gap-6">
              <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded-xl p-2 shadow-sm border border-charcoal-ink/10">
                <Image
                  src="/images/sammies-logo-vertical.png"
                  alt="Sammie's Circles of Change Vertical Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="space-y-1 text-xs">
                <div className="font-bold uppercase tracking-wider text-earth-teal">
                  Authorized Sub-Brand Partnership
                </div>
                <div className="text-sm font-extrabold text-earth-dark font-poppins">
                  Sammie&apos;s Circles of Change™
                </div>
                <p className="text-charcoal-ink/75 leading-relaxed">
                  Operated in official alliance with the Sammie Vance Foundation and manufactured via Green Tree Plastics &amp; POLYWOOD.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
              The Origin Story
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight leading-tight">
              One 8-Year-Old Girl&apos;s{' '}
              <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase inline-block">
                dream
              </span>{' '}
              to End Loneliness
            </h2>

            <p className="text-base sm:text-lg text-charcoal-ink/80 leading-relaxed">
              In 2017, when Sammie Vance learned about the concept of a &ldquo;Buddy Bench&rdquo;—a designated bench where children can sit when they are feeling lonely or need someone to play with—she was determined to bring one to her own elementary school in Indiana.
            </p>

            <p className="text-base text-charcoal-ink/80 leading-relaxed">
              Instead of simply asking for money to buy a bench, Sammie decided to rally her entire community to collect clean recycled plastic bottle caps and lids. In just two months, she gathered over 1,600 lbs of plastic caps—enough to create three full benches with surplus left to help neighboring schools.
            </p>

            <p className="text-base text-charcoal-ink/80 leading-relaxed">
              Today, through <strong>Sammie&apos;s Circles of Change</strong>, we provide the 501(c)(3) sponsorship, collection bags, regional drop-off logistics, and manufacturing coordination to scale Sammie&apos;s mission into hundreds of communities across all 50 states.
            </p>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-charcoal-ink/10">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-earth-dark">
                  100% Recycled Post-Consumer Polymer
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-earth-dark">
                  Youth &amp; Student Led Campaigns
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-earth-dark">
                  Fosters Empathy &amp; Playground Kindness
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-earth-teal flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-earth-dark">
                  Prevents Micro-Plastics in Landfills
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
