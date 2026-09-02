'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Recycle,
  Heart,
  Repeat,
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
    <section className="py-24 bg-white border-t-2 border-charcoal-ink/15" id="impact-c">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-beige border-1.5 border-charcoal-ink shadow-neo-sm text-xs font-mono font-bold uppercase tracking-wider text-deep-ocean">
            <span>[ Our Impact Framework ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-deep-ocean tracking-tight">
            The &ldquo;Impact C&rdquo; Framework
          </h2>
          <p className="text-base text-charcoal-ink/75 leading-relaxed">
            How individual micro-actions curve into collective power and close an unbroken loop of environmental and social renewal.
          </p>
        </div>

        {/* Horizontal Step Progression with Neo-Brutalist Tactile Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t-2 border-charcoal-ink/15">
          {steps.map((step, idx) => {
            const isSelected = idx === activeStep;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 border-2 border-charcoal-ink transition-all duration-150 cursor-pointer space-y-3 ${
                  isSelected
                    ? 'bg-sand-beige shadow-neo-ocean -translate-y-1'
                    : 'bg-eco-cream/50 shadow-neo-sm hover:shadow-neo hover:bg-white hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-white border border-charcoal-ink text-deep-ocean">
                    {step.number}
                  </span>
                  {isSelected && <span className="w-2.5 h-2.5 bg-deep-ocean border border-charcoal-ink" />}
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

        {/* Selected Step Spotlight Drawer */}
        <div className="mt-10 p-8 sm:p-10 bg-eco-cream border-2 border-charcoal-ink shadow-neo-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-charcoal-ink text-xs font-mono font-bold uppercase tracking-wider text-deep-ocean">
              <span>Phase {steps[activeStep].number} Spotlight • {steps[activeStep].title}</span>
            </div>
            <p className="text-lg text-deep-ocean font-semibold leading-relaxed pt-1">
              {steps[activeStep].detail}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
              className="px-4 py-2 text-xs font-bold font-mono uppercase text-charcoal-ink bg-white border-2 border-charcoal-ink shadow-neo-sm hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer"
            >
              Prev Phase
            </button>
            <button
              type="button"
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="px-5 py-2 text-xs font-bold font-mono uppercase text-white bg-deep-ocean border-2 border-charcoal-ink shadow-neo-sm hover:shadow-neo hover:bg-teal-green hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 cursor-pointer"
            >
              Next Phase →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
