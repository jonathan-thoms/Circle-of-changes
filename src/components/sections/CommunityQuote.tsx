import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommunityQuote() {
  return (
    <section className="py-24 bg-earth-canvas border-t border-charcoal-ink/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
          The Circle Philosophy
        </div>

        <blockquote className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight leading-snug">
          &ldquo;When one person recycles a bottle cap, it is a thoughtful gesture. When an entire school{' '}
          <span className="font-script text-earth-coral font-normal text-3xl sm:text-5xl md:text-6xl inline-block lowercase">
            unites
          </span>{' '}
          to build a buddy bench, it becomes an unbroken{' '}
          <span className="font-script text-earth-coral font-normal text-3xl sm:text-5xl md:text-6xl inline-block lowercase">
            circle
          </span>{' '}
          of kindness and sustainability.&rdquo;
        </blockquote>

        <div className="pt-4 flex flex-col items-center justify-center space-y-4">
          <div className="font-script text-earth-teal text-2xl font-bold">
            Circles of Change Collective
          </div>
          <Link
            href="/about"
            className="btn-earth-outline text-xs"
          >
            <span>Read Our Story &amp; Mission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
