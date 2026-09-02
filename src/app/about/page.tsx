import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Recycle,
  Sparkles,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { getPartnerEcosystem } from '@/lib/api';
import ImpactCConcept from '@/components/about/ImpactCConcept';
import PartnerEcosystem from '@/components/about/PartnerEcosystem';

export const metadata: Metadata = {
  title: 'About Us | Circles of Change Non-Profit',
  description:
    'Discover the story, mission, and the Impact C philosophy powering Circles of Change. Explore our partner ecosystem uniting youth initiatives like Sammies Buddy Bench and community recycling drives.',
};

export default async function AboutPage() {
  const partnerCategories = await getPartnerEcosystem();

  const coreValues = [
    {
      title: 'Radical Inclusivity',
      description: 'Every person—from a school child to a city mayor—plays an essential role in closing the loop.',
      icon: Users,
    },
    {
      title: 'Local Circularity',
      description: 'Recycled polymers directly benefit local communities as playground benches and park infrastructure.',
      icon: Recycle,
    },
    {
      title: 'Youth-Led Action',
      description: 'We provide the scaffolding and 501(c)(3) support to turn student projects into nationwide movements.',
      icon: Sparkles,
    },
    {
      title: 'Transparent Metrics',
      description: '100% of polymer collection weights, yields, and bench installations are publicly tracked.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Full-Bleed Photo Hero */}
      <section className="relative min-h-[480px] lg:min-h-[560px] flex items-end pb-16 overflow-hidden bg-deep-ocean select-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/about-landscape.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/95 via-deep-ocean/70 to-black/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-renewal">
            Our Story &amp; Purpose
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-white tracking-tight max-w-3xl leading-tight">
            Connecting People, Plastics &amp; Public Spaces
          </h1>

          <p className="text-base sm:text-lg text-sand-beige/90 max-w-2xl leading-relaxed">
            Circles of Change was founded on a simple truth: environmental sustainability and human empathy are two arcs of the very same circle.
          </p>
        </div>
      </section>

      {/* 2. Concise Mission Narrative with Photo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-green">
                Our Narrative
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-ocean tracking-tight">
                From Solitary Cap Collections to a Collective Movement
              </h2>

              <p className="text-base text-charcoal-ink/75 leading-relaxed">
                For years, sustainability efforts operated in separate silos. Environmental groups cleaned waste streams, while schools and community leaders worked independently on youth inclusion.
              </p>

              <p className="text-base text-charcoal-ink/75 leading-relaxed">
                Circles of Change bridged these silos by creating a collaborative backbone inspired by EarthShare&apos;s non-profit ecosystem. When youth leaders like Sammie Vance needed manufacturing infrastructure to turn bottle caps into Buddy Benches, Circles of Change provided the collection drives, processing logistics, and non-profit sponsorship.
              </p>

              <div className="flex items-center gap-8 pt-4 border-t border-charcoal-ink/10">
                <div>
                  <div className="text-3xl font-bold text-deep-ocean font-poppins">
                    250K+ lbs
                  </div>
                  <div className="text-xs text-charcoal-ink/60">Plastic diverted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-green font-poppins">
                    350+
                  </div>
                  <div className="text-xs text-charcoal-ink/60">School buddy benches</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-lg overflow-hidden bg-sand-beige">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/plastic-sorting.jpg)` }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. The "Impact C" Concept */}
      <ImpactCConcept />

      {/* 4. Partner Network Ecosystem */}
      <PartnerEcosystem categories={partnerCategories} />

      {/* 5. Core Values (Clean Open Grid) */}
      <section className="py-24 bg-white border-t border-charcoal-ink/10" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal-green">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-ocean tracking-tight">
              Values Rooted in Action
            </h2>
            <p className="text-base text-charcoal-ink/75 leading-relaxed">
              Every initiative we operate or support adheres to four non-profit benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 border-t border-charcoal-ink/10">
            {coreValues.map((val) => (
              <div key={val.title} className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-sand-beige/40 flex items-center justify-center text-teal-green">
                  {React.createElement(val.icon, { className: 'w-5 h-5' })}
                </div>
                <h3 className="text-lg font-bold font-poppins text-deep-ocean">
                  {val.title}
                </h3>
                <p className="text-sm text-charcoal-ink/70 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Clean Minimalist Action Banner */}
      <section className="py-20 bg-deep-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white tracking-tight">
            Ready to Join the Circle?
          </h2>
          <p className="text-sand-beige/90 text-base max-w-xl mx-auto leading-relaxed">
            Whether you are a school looking to place a Buddy Bench, a runner gearing up for the 5K, or a partner non-profit—connect with us today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/#race-callout"
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-deep-ocean bg-sand-beige hover:bg-white transition shadow-sm"
            >
              Register for 5K Race
            </Link>
            <Link
              href="/#featured-initiatives"
              className="px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-teal-green hover:bg-impact-green transition shadow-sm"
            >
              Explore Initiatives
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
