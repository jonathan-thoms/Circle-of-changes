import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommunityQuote() {
  return (
    <section className="py-24 bg-sand-beige/40 border-t border-charcoal-ink/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="text-xs font-semibold uppercase tracking-widest text-teal-green">
          Our Philosophy
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-deep-ocean tracking-tight leading-snug">
          &ldquo;When one person recycles a bottle cap, it is a thoughtful gesture. When a whole school gathers them to build a buddy bench, it becomes an unbreakable circle of kindness and sustainability.&rdquo;
        </blockquote>

        <div className="pt-2 flex flex-col items-center justify-center space-y-3">
          <div className="text-xs font-semibold text-charcoal-ink/60 uppercase tracking-wider">
            Circles of Change Collective
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-deep-ocean hover:text-teal-green transition underline underline-offset-4"
          >
            <span>Read our story and mission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
