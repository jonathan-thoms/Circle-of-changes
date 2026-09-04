import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, HeartHandshake, Trophy, Recycle } from 'lucide-react';
import { getInitiatives } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Initiatives & Programs | Circles of Change',
  description:
    'Explore internal flagship programs and supported partner initiatives across waste reduction, youth kindness, and community action.',
};

export default async function InitiativesDirectoryPage() {
  const initiatives = await getInitiatives();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-end pt-24 sm:pt-28 pb-16 overflow-hidden bg-earth-dark select-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/hero-community.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/95 via-earth-dark/65 to-black/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-renewal">
            Programs &amp; Alliances
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white tracking-tight max-w-3xl leading-tight">
            Our Initiatives &amp;{' '}
            <span className="font-script text-earth-yellow font-normal text-5xl sm:text-6xl lg:text-7xl lowercase">
              Partner Alliances
            </span>
          </h1>

          <p className="text-base sm:text-xl text-white/90 max-w-2xl leading-relaxed">
            From youth-led school drives to regional community athletics, discover the programs uniting our circle of change.
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-24 bg-earth-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Photo */}
                <div className="relative h-60 rounded-xl overflow-hidden bg-earth-canvas">
                  {item.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-earth-teal">
                      {item.type}
                    </span>
                    <span className="text-charcoal-ink/60">
                      {item.location}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold font-poppins text-earth-dark leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-charcoal-ink/10 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold font-poppins text-earth-dark">
                        {item.impactStat}
                      </div>
                      <div className="text-xs text-charcoal-ink/60">{item.secondaryStat}</div>
                    </div>

                    <Link
                      href={item.ctaHref || '/about'}
                      className="btn-earth-primary text-xs"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
