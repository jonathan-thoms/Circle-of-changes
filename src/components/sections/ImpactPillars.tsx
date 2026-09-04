'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
  pillars?: Pillar[];
}

export default function ImpactPillars({ pillars }: ImpactPillarsProps) {
  return (
    <section className="py-20 lg:py-24 bg-white" id="how-we-serve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 50/50 Split How We Serve Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Softly Rounded Documentary Photo */}
          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-earth-canvas shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(/images/hero-community.jpg)` }}
            />
          </div>

          {/* Right: Editorial Narrative with Coral Script Accent */}
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
              HOW WE SERVE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark leading-tight tracking-tight">
              Empowering the{' '}
              <span className="font-script text-earth-coral text-4xl sm:text-5xl lg:text-6xl font-normal lowercase inline-block">
                future
              </span>{' '}
              of Our Communities
            </h2>

            <p className="text-base sm:text-lg text-charcoal-ink/80 leading-relaxed">
              From student-led bottle cap collections to regional 5K waste drives, Circles of Change makes it easy to direct collective action toward measurable environmental solutions—quickly, transparently, and with lasting social impact.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="btn-earth-primary"
              >
                <span>Learn About Our Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
