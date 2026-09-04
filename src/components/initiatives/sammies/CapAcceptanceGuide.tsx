'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Download, Info } from 'lucide-react';

export default function CapAcceptanceGuide() {
  const [activeTab, setActiveTab] = useState<'all' | 'acceptable' | 'unacceptable'>('all');

  const acceptableItems = [
    { name: 'Beverage & Drink Caps', example: 'Soda, water, juice, sports drinks, iced tea', category: 'Drinks' },
    { name: 'Milk & Dairy Lids', example: 'Milk jugs, creamer caps, cottage cheese, sour cream, yogurt', category: 'Dairy' },
    { name: 'Food Jar Lids', example: 'Peanut butter, mayonnaise, salsa, butter tubs, spice lids', category: 'Pantry' },
    { name: 'Household Cleaning Caps', example: 'Laundry detergent, fabric softener, dish soap caps', category: 'Household' },
    { name: 'Personal Care Caps', example: 'Shampoo, conditioner, toothpaste tubes, deodorant caps', category: 'Personal' },
    { name: 'Snack Pouch & Tub Lids', example: 'Apple sauce pouch caps, ice cream tub lids (under 8")', category: 'Snacks' },
  ];

  const unacceptableItems = [
    { name: 'Bottles & Jugs (Containers)', reason: 'Only the lids/caps are melted; bottles jam the extruder.' },
    { name: 'Lotion & Soap Pumps', reason: 'Contain internal metal springs that ruin the molding machinery.' },
    { name: 'Trigger Sprayers', reason: 'Contain composite rubber and metal springs.' },
    { name: 'Fast-Food Drink Lids & Straws', reason: 'Made of thin polystyrene (PS) not compatible with polymer melts.' },
    { name: 'Metal Lids or Foil Liners', reason: 'Must remove all foil, cardboard, or metal inserts from inside caps.' },
    { name: 'Lids Over 8 Inches in Diameter', reason: 'Too large for the shredder intake hopper.' },
    { name: 'Medical / Veterinary Supplies', reason: 'Biohazard restrictions prohibit syringes or animal medicine packaging.' },
    { name: 'Dirty / Food-Residue Caps', reason: 'Must be rinsed and dry before packing.' },
  ];

  return (
    <section className="py-24 bg-white border-t border-charcoal-ink/10" id="cap-guide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
            Collection Guidelines &amp; Quality Control
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
            Acceptable vs. Unacceptable Bottle Caps
          </h2>
          <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
            To ensure the plastic can be safely shredded and molded by our remanufacturing partners, all items must be clean, dry, and under 8 inches in diameter.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-charcoal-ink/10 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'all'
                ? 'bg-earth-dark text-white'
                : 'bg-earth-canvas text-charcoal-ink hover:bg-[#EAECEF]'
            }`}
          >
            All Guidelines
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('acceptable')}
            className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
              activeTab === 'acceptable'
                ? 'bg-impact-green text-white'
                : 'bg-earth-canvas text-charcoal-ink hover:bg-[#EAECEF]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Acceptable ({acceptableItems.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('unacceptable')}
            className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
              activeTab === 'unacceptable'
                ? 'bg-[#C53030] text-white'
                : 'bg-earth-canvas text-charcoal-ink hover:bg-[#EAECEF]'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>Unacceptable ({unacceptableItems.length})</span>
          </button>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Acceptable List */}
          {(activeTab === 'all' || activeTab === 'acceptable') && (
            <div className="bg-[#F0FDF4] rounded-2xl p-8 border border-impact-green/20 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-impact-green text-white flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-earth-dark">
                    Acceptable Caps &amp; Lids (Clean &amp; Dry)
                  </h3>
                </div>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-impact-green/20 text-impact-green uppercase">
                  #2, #4, #5 Polymers
                </span>
              </div>

              <div className="space-y-3">
                {acceptableItems.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-white shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-impact-green flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-earth-dark font-poppins">
                        {item.name}
                      </div>
                      <div className="text-xs text-charcoal-ink/70">
                        {item.example}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Unacceptable List */}
          {(activeTab === 'all' || activeTab === 'unacceptable') && (
            <div className="bg-[#FFF5F5] rounded-2xl p-8 border border-[#FEB2B2] space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E53E3E] text-white flex items-center justify-center">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-earth-dark">
                    Unacceptable Items (Do NOT Include)
                  </h3>
                </div>
                <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#FED7D7] text-[#9B2C2C] uppercase">
                  Contaminants
                </span>
              </div>

              <div className="space-y-3">
                {unacceptableItems.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-white shadow-sm flex items-start gap-3"
                  >
                    <XCircle className="w-4 h-4 text-[#E53E3E] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-earth-dark font-poppins">
                        {item.name}
                      </div>
                      <div className="text-xs text-charcoal-ink/70">
                        {item.reason}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Tip Box */}
        <div className="mt-8 p-6 rounded-2xl bg-earth-canvas flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-earth-teal flex-shrink-0" />
            <p className="text-xs sm:text-sm text-charcoal-ink/80 leading-relaxed">
              <strong>Quick Rule of Thumb:</strong> If it’s a clean plastic lid or bottle cap under 8 inches with all cardboard liners removed, it can be turned into a Buddy Bench!
            </p>
          </div>
          <a
            href="#school-starter-form"
            className="btn-earth-primary text-xs flex-shrink-0"
          >
            <span>Request School Drive Kit</span>
          </a>
        </div>

      </div>
    </section>
  );
}
