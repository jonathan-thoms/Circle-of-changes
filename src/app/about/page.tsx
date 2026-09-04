import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Recycle,
  Sparkles,
  ShieldCheck,
  Users,
  ArrowRight,
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
      script: 'For Everyone',
      description: 'Every person—from a school child to a city mayor—plays an essential role in closing the loop.',
      icon: Users,
    },
    {
      title: 'Local Circularity',
      script: 'Tangible Goods',
      description: 'Recycled polymers directly benefit local communities as playground benches and park infrastructure.',
      icon: Recycle,
    },
    {
      title: 'Youth Leadership',
      script: 'Next Gen',
      description: 'We provide the scaffolding and 501(c)(3) support to turn student projects into nationwide movements.',
      icon: Sparkles,
    },
    {
      title: 'Open Metrics',
      script: 'Total Trust',
      description: '100% of polymer collection weights, yields, and bench installations are publicly tracked.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Full-Bleed Photo Hero (EarthShare Style) */}
      <section className="relative min-h-[520px] lg:min-h-[600px] flex items-end pt-24 sm:pt-28 pb-16 overflow-hidden bg-earth-dark select-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/about-landscape.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/95 via-earth-dark/65 to-black/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-sky-renewal">
            Our Story &amp; Purpose
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white tracking-tight max-w-3xl leading-tight">
            Connecting People, Plastics &amp;{' '}
            <span className="font-script text-earth-yellow font-normal text-5xl sm:text-6xl lg:text-7xl lowercase">
              Public Spaces
            </span>
          </h1>

          <p className="text-base sm:text-xl text-white/90 max-w-2xl leading-relaxed">
            Circles of Change was founded on a simple truth: environmental sustainability and human empathy are two arcs of the very same circle.
          </p>
        </div>
      </section>

      {/* 2. 50/50 Split Mission Narrative */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
                Our Narrative
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight leading-tight">
                From Solitary Cap Collections to a{' '}
                <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase">
                  Movement
                </span>
              </h2>

              <p className="text-base sm:text-lg text-charcoal-ink/80 leading-relaxed">
                For years, sustainability efforts operated in separate silos. Environmental groups cleaned waste streams, while schools and community leaders worked independently on youth inclusion.
              </p>

              <p className="text-base sm:text-lg text-charcoal-ink/80 leading-relaxed">
                Circles of Change bridged these silos by creating a collaborative backbone inspired by EarthShare&apos;s non-profit ecosystem. When youth leaders like Sammie Vance needed manufacturing infrastructure to turn bottle caps into Buddy Benches, Circles of Change provided the collection drives, processing logistics, and non-profit sponsorship.
              </p>

              <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-earth-canvas">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-earth-dark font-poppins">
                    250K+ lbs
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-ink/70 mt-1">Plastic diverted</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-earth-teal font-poppins">
                    350+
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-ink/70 mt-1">School buddy benches</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-earth-canvas shadow-sm">
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

      {/* 5. Core Values */}
      <section className="py-24 bg-white border-t border-charcoal-ink/10" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
              Values Rooted in{' '}
              <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase">
                Action
              </span>
            </h2>
            <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
              Every initiative we operate or support adheres to four non-profit benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val) => (
              <div key={val.title} className="p-8 rounded-2xl bg-earth-canvas space-y-4 hover:bg-[#EAECEF] transition-colors">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-earth-teal shadow-sm">
                  {React.createElement(val.icon, { className: 'w-6 h-6' })}
                </div>
                <div className="font-script text-earth-coral text-2xl font-bold leading-none">
                  {val.script}
                </div>
                <h3 className="text-xl font-extrabold font-poppins text-earth-dark">
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

      {/* 6. Action Banner */}
      <section className="py-20 bg-earth-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight">
            Ready to Close the{' '}
            <span className="font-script text-earth-yellow font-normal text-4xl sm:text-6xl lowercase">
              Circle
            </span>
            ?
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Whether you are a school looking to place a Buddy Bench, a runner gearing up for the 5K, or a partner non-profit—connect with us today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/#race-callout"
              className="px-7 py-3.5 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-sm uppercase tracking-wider transition-colors duration-200"
            >
              <span>Register for 5K Race</span>
            </Link>
            <Link
              href="/"
              className="px-7 py-3.5 rounded-md border border-white/70 hover:border-white hover:bg-white hover:text-earth-dark text-white font-semibold text-sm uppercase tracking-wider transition-colors duration-200"
            >
              <span>Explore Initiatives</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
