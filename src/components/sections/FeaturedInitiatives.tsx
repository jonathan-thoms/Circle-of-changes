'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface InitiativeItem {
  id: string;
  title: string;
  subtitle: string;
  pillar: string;
  pillarId: string;
  type: string;
  subBrand: string;
  featured: boolean;
  image?: string;
  description: string;
  impactStat: string;
  secondaryStat: string;
  location: string;
  tags: string[];
  icon: string;
  progressPercent: number;
  partnerName: string;
  ctaText: string;
  ctaHref: string;
}

interface FeaturedInitiativesProps {
  initiatives: InitiativeItem[];
}

export default function FeaturedInitiatives({
  initiatives,
}: FeaturedInitiativesProps) {
  if (!initiatives || initiatives.length === 0) return null;

  const leadInitiative = initiatives[0];
  const otherInitiatives = initiatives.slice(1);

  return (
    <section
      className="py-24 bg-earth-canvas"
      id="featured-initiatives"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Script Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
              On the Frontlines of Change
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight leading-tight">
              Flagship Programs &amp; Partner{' '}
              <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase">
                Initiatives
              </span>
            </h2>
            <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
              Discover how individuals, schools, and communities are joining together to protect our environment and build lasting connection.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-earth-teal hover:text-earth-dark transition self-start md:self-end"
          >
            <span>View All Alliances</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Lead Featured Story (50/50 Split with EarthShare rounded corners) */}
        {leadInitiative && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 bg-white rounded-2xl shadow-sm mb-16">
            {/* Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-xl overflow-hidden bg-earth-canvas">
              {leadInitiative.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${leadInitiative.image})` }}
                />
              )}
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-5">
              {/* Dedicated Initiative Branding Logo */}
              <div className="relative w-64 sm:w-72 h-16 sm:h-20">
                <Image
                  src="/images/Sammie_s COC-black.png"
                  alt="Sammie's Circles of Change"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>

              <p className="text-base text-charcoal-ink/75 leading-relaxed">
                {leadInitiative.description}
              </p>

              {/* Stats Box */}
              <div className="flex items-center gap-8 pt-3 border-t border-charcoal-ink/10">
                <div>
                  <div className="text-2xl font-extrabold font-poppins text-earth-dark">
                    {leadInitiative.impactStat}
                  </div>
                  <div className="text-xs text-charcoal-ink/65 font-medium">Installed nationwide</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-poppins text-earth-teal">
                    {leadInitiative.secondaryStat}
                  </div>
                  <div className="text-xs text-charcoal-ink/65 font-medium">Polymer diverted</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={leadInitiative.ctaHref || '/initiatives/sammies-buddy-bench'}
                  className="btn-earth-primary"
                >
                  <span>{leadInitiative.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Companion Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherInitiatives.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-white rounded-2xl shadow-sm flex flex-col justify-between space-y-6 group"
            >
              {/* Photo */}
              <div className="relative h-64 rounded-xl overflow-hidden bg-earth-canvas">
                {item.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}
              </div>

              {/* Text */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold uppercase tracking-wider text-earth-teal">
                    {item.type}
                  </span>
                  <span className="text-charcoal-ink/60">
                    {item.location}
                  </span>
                </div>

                <h4 className="text-2xl font-extrabold font-poppins text-earth-dark group-hover:text-earth-teal transition-colors">
                  {item.title}
                </h4>

                <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-charcoal-ink/10">
                  <div className="text-lg font-bold font-poppins text-earth-dark">
                    {item.impactStat}
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-earth-teal hover:text-earth-dark transition"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
