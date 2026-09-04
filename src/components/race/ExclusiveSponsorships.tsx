'use client';

import React from 'react';
import { Trophy, Coffee, Medal, Droplets, ArrowRight } from 'lucide-react';

export default function ExclusiveSponsorships() {
  const exclusiveItems = [
    {
      id: 'challenge-sponsor',
      name: 'Community Recycling Challenge Sponsor',
      price: '$2,500',
      availability: 'Exclusive • 1 Available',
      icon: Trophy,
      description:
        'Support the signature Community Recycling Challenge, encouraging schools, businesses, and groups to compete in collecting the highest volume of plastic caps.',
      deliverables: [
        'Exclusive recognition as the Community Challenge Sponsor',
        'Logo placement on Challenge signage & leaderboards',
        'Recognition during official awards presentation',
        'Opportunity to present trophies on stage to winning teams',
        'Recognition on event website and social media spotlight',
      ],
    },
    {
      id: 'breakfast-sponsor',
      name: 'Post-Race Breakfast Sponsor',
      price: '$750',
      availability: 'Exclusive • 1 Available',
      icon: Coffee,
      description:
        'Help all 5K runners refuel after crossing the finish line with healthy breakfast fruit, bagels, and refreshments.',
      deliverables: [
        'Prominent company logo displayed throughout breakfast & refuel tent',
        'Verbal recognition during race-day public announcements',
        'Logo placement on the official event website',
      ],
    },
    {
      id: 'awards-sponsor',
      name: 'Official Awards Ceremony Sponsor',
      price: '$500',
      availability: 'Exclusive • 1 Available',
      icon: Medal,
      description:
        'Celebrate participant and age-group athletic achievement by sponsoring the official race medals and trophy presentation.',
      deliverables: [
        'Company logo prominently displayed at awards podium & backdrop',
        'Recognition during the awards presentation speech',
        'Logo placement on the official event website',
      ],
    },
    {
      id: 'water-station-sponsor',
      name: 'Hydration Water Station Sponsor',
      price: '$250',
      availability: 'Four (4) Available',
      icon: Droplets,
      description:
        'Keep runners energized and hydrated by sponsoring one of our zero-waste paper cup hydration stations along the 5K course.',
      deliverables: [
        'Company banner/logo displayed at designated water station',
        'Volunteer station shoutout during announcements',
        'Recognition on the official event website',
      ],
    },
  ];

  return (
    <section className="py-24 bg-earth-canvas border-t border-charcoal-ink/10" id="exclusive-sponsorships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-earth-teal">
            Targeted Activation Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-earth-dark tracking-tight">
            Exclusive Experience Sponsorships
          </h2>
          <p className="text-base sm:text-lg text-charcoal-ink/75 leading-relaxed">
            Sponsor specific race-day experiences to connect your brand with active participants, families, and zero-waste community initiatives.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exclusiveItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-charcoal-ink/10"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-earth-canvas flex items-center justify-center text-earth-teal">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-earth-dark text-white">
                    {item.availability}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold font-poppins text-earth-dark leading-tight">
                    {item.name}
                  </h3>
                  <div className="text-2xl font-extrabold font-poppins text-earth-teal mt-1">
                    {item.price}
                  </div>
                </div>

                <p className="text-xs text-charcoal-ink/75 leading-relaxed">
                  {item.description}
                </p>

                {/* Deliverables */}
                <div className="pt-3 border-t border-charcoal-ink/10 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-earth-teal">
                    Includes:
                  </div>
                  {item.deliverables.map((d, idx) => (
                    <div key={idx} className="text-xs text-charcoal-ink/70 leading-relaxed flex items-start gap-1.5">
                      <span className="text-earth-coral font-bold">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-charcoal-ink/10">
                <a
                  href="#sponsor-pledge-form"
                  className="w-full py-2.5 px-4 rounded-md bg-earth-canvas hover:bg-earth-dark hover:text-white text-earth-dark font-bold text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
