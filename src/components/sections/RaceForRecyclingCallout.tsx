'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Recycle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RaceForRecyclingCallout() {
  const [pledged, setPledged] = useState(false);
  const [pledgePounds, setPledgePounds] = useState('10');

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    setPledged(true);
  };

  return (
    <section className="py-24 bg-deep-ocean text-white relative overflow-hidden" id="race-callout">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Event Story (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-renewal">
              Signature Annual Campaign
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins text-white tracking-tight leading-[1.15]">
              Race for Recycling 5K &amp;{' '}
              <span className="font-script text-earth-yellow font-normal text-4xl sm:text-6xl lg:text-7xl lowercase">
                Eco-Expo
              </span>
            </h2>

            <p className="text-base sm:text-lg text-sand-beige/90 leading-relaxed max-w-xl">
              Turn your athletic miles into circular community infrastructure. Bring clean, sorted bottle caps or rigid plastics to offset race registration and build new school benches.
            </p>

            {/* Clean Event Detail Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-sky-renewal font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Date</span>
                </div>
                <div className="text-sm font-bold text-white font-poppins">May 16, 2026</div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-sky-renewal font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-bold text-white font-poppins">Riverside Park</div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-sky-renewal font-medium">
                  <Recycle className="w-3.5 h-3.5" />
                  <span>Target</span>
                </div>
                <div className="text-sm font-bold text-white font-poppins">15 Tons Diverted</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/race-for-recycling-5k"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-xs uppercase tracking-wider transition shadow-sm"
              >
                <span>View All Sponsorship Packages ($500 - $10k)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: EarthShare Signature Yellow-Outlined Stat Frame & Form (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="border-2 border-earth-yellow rounded-2xl p-8 sm:p-10 bg-deep-ocean/80 backdrop-blur-md shadow-2xl space-y-6">
              
              {/* Stat Highlight inside Yellow Frame (EarthShare exact motif) */}
              <div className="border-b border-white/20 pb-6 space-y-1">
                <div className="text-xs uppercase tracking-widest text-sky-renewal font-semibold">
                  Community Impact Target
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-script text-earth-yellow text-5xl sm:text-6xl font-bold leading-none">
                    15+ Tons
                  </span>
                  <span className="text-sm text-sand-beige font-medium">
                    Recycled Polymers to Date
                  </span>
                </div>
              </div>

              {/* Registration Form */}
              {pledged ? (
                <div className="p-6 rounded-xl bg-white text-earth-dark text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-impact-green text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-poppins text-earth-dark">
                    Pledge Confirmed!
                  </h4>
                  <p className="text-sm text-charcoal-ink/80 leading-relaxed">
                    Thank you for pledging <strong>{pledgePounds} lbs</strong> of recyclables. Your registration slot is secured for May 16, 2026.
                  </p>
                  <button
                    onClick={() => setPledged(false)}
                    className="text-xs font-bold text-earth-teal underline pt-2 cursor-pointer"
                  >
                    Register another participant
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePledge} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5">
                      Recycling Pledge at Race Check-in
                    </label>
                    <select
                      value={pledgePounds}
                      onChange={(e) => setPledgePounds(e.target.value)}
                      className="w-full px-4 py-3 rounded-md bg-white text-earth-dark text-sm focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                    >
                      <option value="5">5 lbs Bottle Caps / Clean Plastics</option>
                      <option value="10">10 lbs Bottle Caps (Receives Eco-Tee)</option>
                      <option value="25">25 lbs Community Drive Champion</option>
                      <option value="0">Virtual Runner (Pledge Virtual Challenge)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-sm uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>Complete Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="text-center text-xs text-sand-beige/70">
                100% of proceeds fund local plastic micro-hubs &amp; student buddy benches.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
