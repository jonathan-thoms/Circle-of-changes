'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

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
      className="py-24 bg-eco-cream/60 border-t border-charcoal-ink/10"
      id="featured-initiatives"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal-green">
              Initiatives in Action
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-ocean tracking-tight">
              Flagship Programs &amp; Partner Alliances
            </h2>
            <p className="text-base text-charcoal-ink/75 leading-relaxed">
              Explore how we support independent grassroots projects and operate signature community campaigns.
            </p>
          </div>

          <Link
            href="/about#partner-ecosystem"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-deep-ocean hover:text-teal-green transition self-start md:self-end"
          >
            <span>View Partner Network</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Lead Featured Showcase (Split Photo + Content) */}
        {leadInitiative && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-charcoal-ink/10">
            {/* Image */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-lg overflow-hidden bg-sand-beige">
              {leadInitiative.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url(${leadInitiative.image})` }}
                />
              )}
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-green">
                  {leadInitiative.type}
                </span>
                <span className="text-charcoal-ink/30">•</span>
                <span className="text-xs font-medium text-charcoal-ink/60">
                  {leadInitiative.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-deep-ocean leading-tight">
                {leadInitiative.title}
              </h3>

              <p className="text-base text-charcoal-ink/75 leading-relaxed">
                {leadInitiative.description}
              </p>

              {/* Minimal Stats */}
              <div className="flex items-center gap-8 pt-2 border-t border-charcoal-ink/10">
                <div>
                  <div className="text-xl font-bold text-deep-ocean font-poppins">
                    {leadInitiative.impactStat}
                  </div>
                  <div className="text-xs text-charcoal-ink/60">Installed nationwide</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-impact-green font-poppins">
                    {leadInitiative.secondaryStat}
                  </div>
                  <div className="text-xs text-charcoal-ink/60">Polymer diverted</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={leadInitiative.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-deep-ocean hover:bg-teal-green transition shadow-sm"
                >
                  <span>{leadInitiative.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Companion Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16">
          {otherInitiatives.map((item) => (
            <div key={item.id} className="space-y-5 group">
              {/* Photo */}
              <div className="relative h-64 rounded-lg overflow-hidden bg-sand-beige">
                {item.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}
              </div>

              {/* Text */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-teal-green">
                  {item.type} • {item.location}
                </div>

                <h4 className="text-xl font-bold font-poppins text-deep-ocean group-hover:text-teal-green transition-colors">
                  {item.title}
                </h4>

                <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-charcoal-ink/10">
                  <div className="text-sm font-bold font-poppins text-deep-ocean">
                    {item.impactStat}
                  </div>
                  <Link
                    href={item.ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-green hover:text-deep-ocean transition"
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
