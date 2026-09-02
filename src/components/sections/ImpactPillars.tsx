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
        return <Recycle className="w-6 h-6 text-earth-teal" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-earth-teal" />;
      case 'Users':
        return <Users className="w-6 h-6 text-earth-teal" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-earth-teal" />;
      default:
        return <Recycle className="w-6 h-6 text-earth-teal" />;
    }
  };

  const pillarCursiveTitles: Record<string, string> = {
    'waste-reduction': 'Circular Recovery',
    'youth-kindness': 'School Friendship',
    'community-action': 'Active Wellness',
    'eco-innovation': 'Future STEM',
  };

  return (
    <section className="py-24 bg-white" id="impact-pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EarthShare "What We Offer" 50/50 Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 pb-16 border-b border-charcoal-ink/10">
          
          {/* Left: Softly Rounded Documentary Photo (EarthShare exact corner radius) */}
          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-earth-canvas">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/images/hero-community.jpg)` }}
            />
          </div>

          {/* Right: Editorial Narrative with Coral Script Accent */}
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
              What We Offer
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark leading-tight tracking-tight">
              Empowering the Future of{' '}
              <span className="font-script text-earth-coral text-4xl sm:text-5xl lg:text-6xl font-normal lowercase inline-block">
                Our Communities
              </span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-ink/80 leading-relaxed">
              From student-led bottle cap collections to regional 5K waste drives, Circles of Change makes it easy to direct collective action toward measurable environmental solutions—quickly, transparently, and with lasting social impact.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="btn-earth-primary"
              >
                <span>More About Our Model</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* EarthShare 4-Column Feature Row on Pale Off-White Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-earth-canvas rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:bg-[#EAECEF] transition-colors duration-200"
            >
              <div className="space-y-4">
                {/* Icon in clean circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {getIcon(pillar.icon)}
                </div>

                {/* Coral Script Subheader (EarthShare signature accent) */}
                <div className="font-script text-earth-coral text-2xl font-bold leading-none">
                  {pillarCursiveTitles[pillar.id] || 'Community Loop'}
                </div>

                {/* ExtraBold Title */}
                <h3 className="text-xl font-bold font-poppins text-earth-dark leading-snug">
                  {pillar.title}
                </h3>

                {/* Clean 1-sentence description */}
                <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Stat & Link */}
              <div className="pt-4 border-t border-charcoal-ink/10 space-y-2">
                <div className="text-2xl font-extrabold font-poppins text-earth-dark">
                  {pillar.stat}
                </div>
                <div className="text-xs text-charcoal-ink/65 font-medium">
                  {pillar.statLabel}
                </div>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-xs font-bold text-earth-teal hover:text-earth-dark transition"
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
