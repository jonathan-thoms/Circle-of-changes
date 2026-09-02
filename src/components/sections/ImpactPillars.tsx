'use client';

import React from 'react';
import Link from 'next/link';
import {
  Recycle,
  HeartHandshake,
  Users,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

interface Pillar {
  id: string;
  number: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: string;
}

interface ImpactPillarsProps {
  pillars: Pillar[];
}

export default function ImpactPillars({ pillars }: ImpactPillarsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Recycle':
        return <Recycle className="w-5 h-5 text-deep-ocean" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-deep-ocean" />;
      case 'Users':
        return <Users className="w-5 h-5 text-deep-ocean" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-deep-ocean" />;
      default:
        return <Recycle className="w-5 h-5 text-deep-ocean" />;
    }
  };

  return (
    <section className="py-24 bg-white" id="impact-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-beige border-1.5 border-charcoal-ink shadow-neo-sm text-xs font-mono font-bold uppercase tracking-wider text-deep-ocean">
            <span>[ Our Core Focus ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-ocean tracking-tight">
            Four Pillars of Circular &amp; Social Impact
          </h2>
          <p className="text-base text-charcoal-ink/75 leading-relaxed">
            We bridge environmental recovery with human empathy to create measurable, self-sustaining community change.
          </p>
        </div>

        {/* Clean Open 4-Column Layout with Neo-Brutalist Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pt-8 border-t-2 border-charcoal-ink/15">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="flex flex-col justify-between space-y-6 group p-5 bg-eco-cream/40 border-2 border-charcoal-ink/10 hover:border-charcoal-ink hover:shadow-neo hover:bg-white transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Number Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-sand-beige border border-charcoal-ink shadow-neo-sm text-deep-ocean">
                    {pillar.number}
                  </span>
                  <div className="p-2 border border-charcoal-ink bg-white shadow-neo-sm">
                    {getIcon(pillar.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-poppins text-deep-ocean group-hover:text-teal-green transition-colors leading-snug">
                  {pillar.title}
                </h3>

                {/* Concise 1-sentence description */}
                <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Minimalist Stat & Link */}
              <div className="pt-6 border-t border-charcoal-ink/15 space-y-2">
                <div className="text-2xl font-bold font-poppins text-deep-ocean">
                  {pillar.stat}
                </div>
                <div className="text-xs text-charcoal-ink/60 font-medium">
                  {pillar.statLabel}
                </div>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-ocean group-hover:text-teal-green underline underline-offset-4 decoration-2 decoration-teal-green transition"
                  >
                    <span>Learn more</span>
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
