'use client';

import React from 'react';
import { PackageOpen, Scale, Factory, HeartHandshake } from 'lucide-react';

export default function HowItWorksSteps() {
  const steps = [
    {
      step: '01',
      script: 'Community Gather',
      title: 'Collect Clean Caps',
      description:
        'Students, families, and local businesses gather clean plastic caps & lids (under 8" diameter) from daily beverage and food containers.',
      icon: PackageOpen,
      stat: '200-250 lbs',
      statLabel: 'Needed per 6ft bench',
    },
    {
      step: '02',
      script: 'Student Sorting',
      title: 'Weigh & Inspect',
      description:
        'Volunteers remove cardboard liners and non-plastic debris. The collection is weighed in batches and packed into heavy-duty transport bags.',
      icon: Scale,
      stat: '100% Volunteer',
      statLabel: 'Student-led process',
    },
    {
      step: '03',
      script: 'Local Upcycle',
      title: 'Polymer Remanufacturing',
      description:
        'Caps are delivered to Green Tree Plastics & POLYWOOD, where they are shredded, melted, and molded into weather-resistant outdoor benches.',
      icon: Factory,
      stat: '50+ Years',
      statLabel: 'Outdoor durability',
    },
    {
      step: '04',
      script: 'Friendship Loop',
      title: 'Playground Dedication',
      description:
        'The finished Buddy Bench is installed on the school playground with an inaugural ribbon cutting to celebrate youth kindness and inclusion.',
      icon: HeartHandshake,
      stat: '0 Kids Alone',
      statLabel: 'Playground promise',
    },
  ];

  return (
    <section className="py-24 bg-earth-canvas" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
            The Step-by-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
            How a School Gets a Buddy Bench
          </h2>
          <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
            From empty juice bottles to playground infrastructure—our 4-stage circular workflow is simple, hands-on, and accessible to any school.
          </p>
        </div>

        {/* 4-Column Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="space-y-4">
                {/* Icon in clean circle */}
                <div className="w-12 h-12 rounded-full bg-earth-canvas flex items-center justify-center text-earth-teal">
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Coral Script Subheader */}
                <div className="font-script text-earth-coral text-2xl font-bold leading-none">
                  Step {item.step} • {item.script}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold font-poppins text-earth-dark leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-charcoal-ink/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Stat Callout */}
              <div className="pt-4 border-t border-charcoal-ink/10">
                <div className="text-xl font-extrabold font-poppins text-earth-dark">
                  {item.stat}
                </div>
                <div className="text-xs text-charcoal-ink/65 font-medium">
                  {item.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
