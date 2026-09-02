import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommunityQuote() {
  return (
    <section className="py-24 bg-sand-beige/40 border-t-2 border-charcoal-ink/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-1.5 border-charcoal-ink shadow-neo-sm text-xs font-mono font-bold uppercase tracking-wider text-deep-ocean">
          <span>[ The Circle Philosophy ]</span>
        </div>

        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins text-deep-ocean tracking-tight leading-snug">
          &ldquo;When one person recycles a bottle cap, it is a thoughtful gesture. When a whole school gathers them to build a buddy bench, it becomes an unbreakable circle of kindness and sustainability.&rdquo;
        </blockquote>

        <div className="pt-2 flex flex-col items-center justify-center space-y-3">
          <div className="text-xs font-mono font-bold text-charcoal-ink/70 uppercase tracking-widest">
            Circles of Change Collective
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-deep-ocean bg-white hover:bg-sand-beige border-2 border-charcoal-ink shadow-neo-sm hover:shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150"
          >
            <span>Read our story &amp; mission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
