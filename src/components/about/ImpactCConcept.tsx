'use client';

import React from 'react';
import {
  Sparkles,
  Layers,
  Recycle,
  Heart,
  Repeat,
} from 'lucide-react';

export default function ImpactCConcept() {
  const steps = [
    {
      number: '01',
      scriptName: 'Individual Spark',
      title: 'Individual Collection',
      summary: 'A child or neighbor collects clean plastic caps at home or school.',
      detail: 'It begins with an individual act of mindfulness—preventing rigid plastics from entering municipal waste streams.',
      icon: Sparkles,
    },
    {
      number: '02',
      scriptName: 'Collective Gathering',
      title: 'School & Race Drives',
      summary: 'Schools and 5K race drives aggregate high-volume clean plastics.',
      detail: 'Through student-led collection drives and community athletic events, thousands of small gestures unite into massive clean streams.',
      icon: Layers,
    },
    {
      number: '03',
      scriptName: 'Local Upcycling',
      title: 'Regional Manufacturing',
      summary: 'Polymers are remanufactured locally into durable 100% recycled goods.',
      detail: 'Clean plastics are sorted, shredded, and forged into long-lasting benches and park structures instead of being shipped overseas.',
      icon: Recycle,
    },
    {
      number: '04',
      scriptName: 'Social Return',
      title: 'Buddy Bench Placement',
      summary: 'Recycled benches return to school playgrounds and public parks.',
      detail: 'Benches are placed in elementary schools as Buddy Benches to combat loneliness and foster playground empathy.',
      icon: Heart,
    },
    {
      number: '05',
      scriptName: 'Perpetual Circle',
      title: 'Youth Eco-Stewards',
      summary: 'The installed bench inspires the next generation of eco-stewards.',
      detail: 'Children seeing the tangible result of their collective effort continue saving materials, closing the C into a perpetual circle.',
      icon: Repeat,
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-charcoal-ink/10" id="impact-c">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Script Accent */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
            Our Impact Framework
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
            The &ldquo;Impact C&rdquo;{' '}
            <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase">
              Framework
            </span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
            How individual micro-actions curve into collective power and close an unbroken loop of environmental and social renewal.
          </p>
        </div>

        {/* 5-Step Horizontal Progression Row (EarthShare Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-left p-6 rounded-2xl bg-earth-canvas hover:bg-[#EAECEF] transition-all duration-200 space-y-3 shadow-xs"
            >
              <div className="font-script text-2xl font-bold leading-none text-earth-coral">
                Step {step.number}
              </div>

              <h3 className="text-base font-bold font-poppins text-earth-dark leading-tight">
                {step.title}
              </h3>

              <p className="text-xs leading-relaxed text-charcoal-ink/75">
                {step.summary}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
