'use client';

import React from 'react';
import { Check, Minus } from 'lucide-react';

export default function SponsorshipMatrix() {
  const rows = [
    { benefit: 'Recognition on Event Website', community: true, bronze: true, silver: true, gold: true, presenting: true },
    { benefit: 'Social Media Recognition', community: false, bronze: true, silver: true, gold: true, presenting: true },
    { benefit: 'Event Signage Along 5K Course', community: false, bronze: true, silver: true, gold: true, presenting: true },
    { benefit: 'Vendor Booth Space at Finish Expo', community: false, bronze: true, silver: true, gold: true, presenting: true },
    { benefit: 'Promotional Item in Runner Swag Bag', community: false, bronze: false, silver: true, gold: true, presenting: true },
    { benefit: 'Logo on Participant Race Shirt', community: false, bronze: false, silver: true, gold: true, presenting: true },
    { benefit: 'Complimentary Race Registrations', community: '2', bronze: '4', silver: '6', gold: '10', presenting: '15' },
    { benefit: 'Recognition During Opening Ceremony', community: false, bronze: false, silver: false, gold: true, presenting: true },
    { benefit: 'Opportunity to Welcome Participants', community: false, bronze: false, silver: false, gold: false, presenting: true },
    { benefit: 'Featured Press & Media Recognition', community: false, bronze: false, silver: false, gold: false, presenting: true },
    { benefit: 'Event Naming Rights (Title Sponsor)', community: false, bronze: false, silver: false, gold: false, presenting: true },
    { benefit: 'First Right of Refusal for Following Year', community: false, bronze: false, silver: false, gold: false, presenting: true },
  ];

  const renderValue = (val: boolean | string) => {
    if (typeof val === 'string') {
      return (
        <span className="font-extrabold font-poppins text-earth-dark text-sm sm:text-base">
          {val}
        </span>
      );
    }
    if (val === true) {
      return (
        <div className="w-6 h-6 rounded-full bg-impact-green/15 text-impact-green flex items-center justify-center mx-auto">
          <Check className="w-4 h-4 stroke-[3]" />
        </div>
      );
    }
    return (
      <div className="text-charcoal-ink/20 flex items-center justify-center">
        <Minus className="w-4 h-4" />
      </div>
    );
  };

  return (
    <section className="py-24 bg-white border-t border-charcoal-ink/10" id="comparison-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
            Comprehensive Overview
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
            Sponsorship Benefits{' '}
            <span className="font-script text-earth-coral font-normal text-4xl sm:text-5xl lg:text-6xl lowercase">
              Comparison
            </span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
            Compare all deliverables and marketing placements side-by-side to choose the best sponsorship fit for your business goals.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-charcoal-ink/15 shadow-sm bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-earth-dark text-white text-xs uppercase tracking-wider font-poppins">
                <th className="py-5 px-6 font-extrabold">Benefits &amp; Deliverables</th>
                <th className="py-5 px-4 text-center font-bold">Community<br /><span className="text-earth-yellow font-normal">$500</span></th>
                <th className="py-5 px-4 text-center font-bold">Bronze<br /><span className="text-earth-yellow font-normal">$1,000</span></th>
                <th className="py-5 px-4 text-center font-bold">Silver<br /><span className="text-earth-yellow font-normal">$2,500</span></th>
                <th className="py-5 px-4 text-center font-bold">Gold<br /><span className="text-earth-yellow font-normal">$5,000</span></th>
                <th className="py-5 px-4 text-center font-extrabold bg-earth-teal text-white">Presenting<br /><span className="text-earth-yellow font-bold">$10,000</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-ink/10 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <tr
                  key={row.benefit}
                  className={`transition-colors hover:bg-earth-canvas/60 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-earth-canvas/30'
                  }`}
                >
                  <td className="py-4 px-6 font-semibold text-earth-dark">
                    {row.benefit}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderValue(row.community)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderValue(row.bronze)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderValue(row.silver)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderValue(row.gold)}
                  </td>
                  <td className="py-4 px-4 text-center bg-earth-teal/5 font-semibold">
                    {renderValue(row.presenting)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
