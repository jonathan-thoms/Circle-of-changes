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
    <section className="py-24 bg-white border-t-2 border-charcoal-ink/15" id="race-callout">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Event Story & Photo (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sand-beige border-1.5 border-charcoal-ink shadow-neo-sm text-xs font-mono font-bold uppercase tracking-wider text-deep-ocean">
              <span>[ Signature Annual Event ]</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-deep-ocean tracking-tight leading-tight">
              Race for Recycling 5K &amp; Eco-Expo
            </h2>

            <p className="text-base text-charcoal-ink/75 leading-relaxed max-w-xl">
              Turn your athletic miles into circular community infrastructure. Bring clean, sorted bottle caps or rigid plastics to offset race registration.
            </p>

            {/* Clean Event Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-eco-cream border-2 border-charcoal-ink shadow-neo-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-charcoal-ink/70">
                  <Calendar className="w-3.5 h-3.5 text-deep-ocean" />
                  <span>Date</span>
                </div>
                <div className="text-sm font-bold text-deep-ocean font-poppins">May 16, 2026</div>
              </div>

              <div className="p-4 bg-eco-cream border-2 border-charcoal-ink shadow-neo-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-charcoal-ink/70">
                  <MapPin className="w-3.5 h-3.5 text-deep-ocean" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-bold text-deep-ocean font-poppins">Riverside Park</div>
              </div>

              <div className="p-4 bg-eco-cream border-2 border-charcoal-ink shadow-neo-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-charcoal-ink/70">
                  <Recycle className="w-3.5 h-3.5 text-deep-ocean" />
                  <span>Target</span>
                </div>
                <div className="text-sm font-bold text-deep-ocean font-poppins">15 Tons Diverted</div>
              </div>
            </div>

            {/* Photo Thumbnail with Neo-Brutalist Border */}
            <div className="relative h-64 border-2 border-charcoal-ink shadow-neo overflow-hidden bg-sand-beige mt-4">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/hero-race-5k.jpg)` }}
              />
            </div>
          </div>

          {/* Right: Neo-Brutalist Registration Form (5 Cols) */}
          <div className="lg:col-span-5 bg-sand-beige/50 p-8 sm:p-10 border-2 border-charcoal-ink shadow-neo-lg">
            <div className="space-y-6">
              <div>
                <span className="px-2 py-0.5 bg-white border border-charcoal-ink text-xs font-mono font-bold uppercase tracking-wider text-deep-ocean">
                  Official Entry Form
                </span>
                <h3 className="text-2xl font-bold font-poppins text-deep-ocean mt-2">
                  Reserve Your Spot
                </h3>
              </div>

              {pledged ? (
                <div className="p-6 bg-white border-2 border-teal-green shadow-neo text-center space-y-3">
                  <div className="w-10 h-10 border-2 border-charcoal-ink bg-teal-green text-white mx-auto flex items-center justify-center shadow-neo-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-poppins text-deep-ocean">
                    Pledge Confirmed!
                  </h4>
                  <p className="text-xs text-charcoal-ink/75 leading-relaxed">
                    Thank you for pledging <strong>{pledgePounds} lbs</strong> of recyclables. Your registration details have been reserved.
                  </p>
                  <button
                    onClick={() => setPledged(false)}
                    className="text-xs font-bold text-teal-green underline underline-offset-2 pt-2 cursor-pointer"
                  >
                    Register another participant
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePledge} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase text-charcoal-ink/90 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 border-2 border-charcoal-ink bg-white text-sm text-charcoal-ink shadow-neo-sm focus:outline-none focus:bg-eco-cream transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase text-charcoal-ink/90 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 border-2 border-charcoal-ink bg-white text-sm text-charcoal-ink shadow-neo-sm focus:outline-none focus:bg-eco-cream transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono uppercase text-charcoal-ink/90 mb-1">
                      Recycling Pledge at Race Check-in
                    </label>
                    <select
                      value={pledgePounds}
                      onChange={(e) => setPledgePounds(e.target.value)}
                      className="w-full px-3.5 py-2.5 border-2 border-charcoal-ink bg-white text-sm text-charcoal-ink shadow-neo-sm focus:outline-none focus:bg-eco-cream transition-colors"
                    >
                      <option value="5">5 lbs Bottle Caps / Clean Plastics</option>
                      <option value="10">10 lbs Bottle Caps (Receives Eco-Tee)</option>
                      <option value="25">25 lbs Community Drive Champion</option>
                      <option value="0">Virtual Runner (Pledge Virtual Challenge)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded text-xs font-bold uppercase tracking-wider text-white bg-impact-green hover:bg-teal-green border-2 border-charcoal-ink shadow-neo hover:shadow-neo-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Complete Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="text-center text-xs font-mono text-charcoal-ink/65 pt-2">
                All proceeds fund local plastic micro-hubs &amp; buddy benches.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
