'use client';

import React from 'react';
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
      className="py-24 bg-eco-cream border-t-2 border-charcoal-ink/15"
      id="featured-initiatives"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-1.5 border-charcoal-ink shadow-neo-sm text-xs font-mono font-bold uppercase tracking-wider text-deep-ocean">
              <span>[ Programs in Action ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-ocean tracking-tight">
              Flagship Programs &amp; Partner Alliances
            </h2>
            <p className="text-base text-charcoal-ink/75 leading-relaxed">
              Explore how we support independent grassroots projects and operate signature community campaigns.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-ocean hover:text-teal-green underline underline-offset-4 decoration-2 decoration-deep-ocean transition self-start md:self-end"
          >
            <span>View Partner Network</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Lead Featured Showcase (Split Photo + Content with Neo-Brutalist Frame) */}
        {leadInitiative && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 bg-white border-2 border-charcoal-ink shadow-neo-lg mb-16">
            {/* Photo with crisp border & offset */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 border-2 border-charcoal-ink overflow-hidden bg-sand-beige shadow-neo-sm">
              {leadInitiative.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url(${leadInitiative.image})` }}
                />
              )}
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 bg-sand-beige border border-charcoal-ink text-xs font-mono font-bold uppercase text-deep-ocean">
                  {leadInitiative.type}
                </span>
                <span className="text-charcoal-ink/40 font-mono">•</span>
                <span className="text-xs font-mono font-medium text-charcoal-ink/70">
                  {leadInitiative.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-deep-ocean leading-tight">
                {leadInitiative.title}
              </h3>

              <p className="text-base text-charcoal-ink/75 leading-relaxed">
                {leadInitiative.description}
              </p>

              {/* Neo Stats Display */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-eco-cream border border-charcoal-ink/20">
                <div>
                  <div className="text-xl font-bold text-deep-ocean font-poppins">
                    {leadInitiative.impactStat}
                  </div>
                  <div className="text-xs text-charcoal-ink/65 font-medium">Installed nationwide</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-impact-green font-poppins">
                    {leadInitiative.secondaryStat}
                  </div>
                  <div className="text-xs text-charcoal-ink/65 font-medium">Polymer diverted</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-bold uppercase tracking-wider text-white bg-deep-ocean hover:bg-teal-green border-2 border-charcoal-ink shadow-neo hover:shadow-neo-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150"
                >
                  <span>{leadInitiative.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Companion Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {otherInitiatives.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-white border-2 border-charcoal-ink shadow-neo hover:shadow-neo-lg transition-all duration-200 flex flex-col justify-between space-y-5 group"
            >
              {/* Photo with crisp border */}
              <div className="relative h-60 border-2 border-charcoal-ink overflow-hidden bg-sand-beige">
                {item.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}
              </div>

              {/* Text */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-sand-beige border border-charcoal-ink text-[11px] font-mono font-bold uppercase text-deep-ocean">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-charcoal-ink/60">
                    {item.location}
                  </span>
                </div>

                <h4 className="text-xl font-bold font-poppins text-deep-ocean group-hover:text-teal-green transition-colors">
                  {item.title}
                </h4>

                <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-charcoal-ink/15">
                  <div className="text-sm font-bold font-poppins text-deep-ocean">
                    {item.impactStat}
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-ocean hover:text-teal-green underline underline-offset-4 decoration-2 decoration-teal-green transition"
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
