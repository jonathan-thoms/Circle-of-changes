'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Recycle,
  Heart,
  Repeat,
  ArrowRight,
} from 'lucide-react';

export default function ImpactCConcept() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Individual Spark',
      summary: 'A child or neighbor collects clean plastic caps at home or school.',
      detail: 'It begins with an individual act of mindfulness—preventing rigid plastics from entering municipal waste streams.',
      icon: Sparkles,
    },
    {
      number: '02',
      title: 'Collective Gathering',
      summary: 'Schools and 5K race drives aggregate high-volume clean plastics.',
      detail: 'Through student-led collection drives and community athletic events, thousands of small gestures unite into massive clean streams.',
      icon: Layers,
    },
    {
      number: '03',
      title: 'Local Upcycling',
      summary: 'Polymers are remanufactured locally into durable 100% recycled goods.',
      detail: 'Clean plastics are sorted, shredded, and forged into long-lasting benches and park structures instead of being shipped overseas.',
      icon: Recycle,
    },
    {
      number: '04',
      title: 'Social Reinvestment',
      summary: 'Recycled benches return to school playgrounds and public parks.',
      detail: 'Benches are placed in elementary schools as Buddy Benches to combat loneliness and foster playground empathy.',
      icon: Heart,
    },
    {
      number: '05',
      title: 'Unbroken Circle',
      summary: 'The installed bench inspires the next generation of eco-stewards.',
      detail: 'Children seeing the tangible result of their collective effort continue saving materials, closing the C into a perpetual circle.',
      icon: Repeat,
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-charcoal-ink/10" id="impact-c">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal-green">
            Our Model
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-ocean tracking-tight">
            The &ldquo;Impact C&rdquo; Framework
          </h2>
          <p className="text-base text-charcoal-ink/75 leading-relaxed">
            How individual micro-actions curve into collective power and close an unbroken loop of environmental and social renewal.
          </p>
        </div>

        {/* Horizontal Step Progression (EarthShare Clean Minimalist Style) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-4 border-t border-charcoal-ink/10">
          {steps.map((step, idx) => {
            const isSelected = idx === activeStep;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-lg transition-all duration-200 cursor-pointer space-y-3 ${
                  isSelected
                    ? 'bg-sand-beige/40 border-l-2 border-teal-green'
                    : 'hover:bg-sand-beige/20 border-l-2 border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-teal-green font-poppins">
                    {step.number}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-teal-green" />}
                </div>

                <h3 className="text-base font-bold font-poppins text-deep-ocean">
                  {step.title}
                </h3>

                <p className="text-xs text-charcoal-ink/70 leading-relaxed">
                  {step.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Spotlight Banner */}
        <div className="mt-12 p-8 sm:p-10 bg-eco-cream rounded-xl border border-charcoal-ink/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-green">
              Phase {steps[activeStep].number} Spotlight • {steps[activeStep].title}
            </div>
            <p className="text-base text-deep-ocean font-medium leading-relaxed">
              {steps[activeStep].detail}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
              className="px-4 py-2 text-xs font-semibold text-charcoal-ink/70 hover:text-deep-ocean border border-charcoal-ink/20 rounded-full transition"
            >
              Previous Phase
            </button>
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="px-4 py-2 text-xs font-semibold text-white bg-deep-ocean hover:bg-teal-green rounded-full transition"
            >
              Next Phase →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
