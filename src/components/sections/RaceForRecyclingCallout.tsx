'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Recycle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RaceForRecyclingCallout() {
  const [pledged, setPledged] = useState(false);
  const [pledgePounds, setPledgePounds] = useState('10');

  const handlePledge = (e: React.FormEvent) => {
    e.preventDefault();
    setPledged(true);
  };

  return (
    <section className="py-24 bg-white border-t border-charcoal-ink/10" id="race-callout">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Event Story & Photo (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-teal-green">
              Signature Annual Event
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-deep-ocean tracking-tight leading-tight">
              Race for Recycling 5K &amp; Eco-Expo
            </h2>

            <p className="text-base text-charcoal-ink/75 leading-relaxed max-w-xl">
              Turn your athletic miles into circular community infrastructure. Bring clean, sorted bottle caps or rigid plastics to offset race registration.
            </p>

            {/* Clean Event Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-charcoal-ink/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-charcoal-ink/60">
                  <Calendar className="w-3.5 h-3.5 text-teal-green" />
                  <span>Date</span>
                </div>
                <div className="text-sm font-bold text-deep-ocean">Saturday, May 16, 2026</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-charcoal-ink/60">
                  <MapPin className="w-3.5 h-3.5 text-teal-green" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-bold text-deep-ocean">Riverside Park &amp; Virtual</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-charcoal-ink/60">
                  <Recycle className="w-3.5 h-3.5 text-teal-green" />
                  <span>Target</span>
                </div>
                <div className="text-sm font-bold text-deep-ocean">15 Tons Recycled</div>
              </div>
            </div>

            {/* Photo Thumbnail */}
            <div className="relative h-64 rounded-lg overflow-hidden bg-sand-beige mt-4">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/hero-race-5k.jpg)` }}
              />
            </div>
          </div>

          {/* Right: Clean Registration Form (5 Cols) */}
          <div className="lg:col-span-5 bg-eco-cream/80 p-8 sm:p-10 rounded-xl border border-charcoal-ink/10">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-green">
                  Registration &amp; Pledge
                </span>
                <h3 className="text-2xl font-bold font-poppins text-deep-ocean mt-1">
                  Reserve Your Spot
                </h3>
              </div>

              {pledged ? (
                <div className="p-6 bg-white rounded-lg border border-teal-green/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-teal-green text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-poppins text-deep-ocean">
                    Pledge Confirmed
                  </h4>
                  <p className="text-xs text-charcoal-ink/75 leading-relaxed">
                    Thank you for pledging <strong>{pledgePounds} lbs</strong> of recyclables. Your registration details have been reserved.
                  </p>
                  <button
                    onClick={() => setPledged(false)}
                    className="text-xs font-semibold text-teal-green hover:underline pt-2"
                  >
                    Register another participant
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePledge} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-ink/80 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-charcoal-ink/20 bg-white text-sm text-charcoal-ink focus:outline-none focus:ring-2 focus:ring-teal-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-ink/80 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-charcoal-ink/20 bg-white text-sm text-charcoal-ink focus:outline-none focus:ring-2 focus:ring-teal-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-ink/80 mb-1">
                      Recycling Pledge at Race Check-in
                    </label>
                    <select
                      value={pledgePounds}
                      onChange={(e) => setPledgePounds(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-charcoal-ink/20 bg-white text-sm text-charcoal-ink focus:outline-none focus:ring-2 focus:ring-teal-green"
                    >
                      <option value="5">5 lbs Bottle Caps / Clean Plastics</option>
                      <option value="10">10 lbs Bottle Caps (Receives Eco-Tee)</option>
                      <option value="25">25 lbs Community Drive Champion</option>
                      <option value="0">Virtual Runner (Pledge Virtual Challenge)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full font-semibold font-poppins text-sm text-white bg-deep-ocean hover:bg-teal-green transition duration-200 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Complete Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="text-center text-xs text-charcoal-ink/60 pt-2">
                All proceeds directly fund local plastic collection &amp; buddy benches.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
