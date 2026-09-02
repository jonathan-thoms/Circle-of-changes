'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Building, User, Mail, Phone, HeartHandshake, Trophy } from 'lucide-react';

export default function SponsorPledgeForm() {
  const [activeMode, setActiveMode] = useState<'sponsor' | 'runner'>('sponsor');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    sponsorshipTier: 'Gold Sponsor — $5,000 (10 Entries)',
    notes: '',
    // Runner mode fields
    runnerName: '',
    runnerEmail: '',
    recyclingPledge: '10 lbs Bottle Caps (Receives Eco-Tee)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-deep-ocean text-white relative overflow-hidden" id="sponsor-pledge-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vision & Contact (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-renewal">
              Official Commitment Form
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight leading-[1.15]">
              Secure Your Sponsorship or{' '}
              <span className="font-script text-earth-yellow font-normal text-4xl sm:text-6xl lowercase">
                Race Entry
              </span>
            </h2>

            <p className="text-base sm:text-lg text-sand-beige/90 leading-relaxed">
              Partner with Circles of Change to showcase your brand’s commitment to healthy communities and circular sustainability.
            </p>

            {/* Direct Contact Info */}
            <div className="p-6 rounded-2xl bg-white/10 border border-white/15 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-earth-yellow">
                Sponsorship Relations Office
              </div>
              <div className="text-sm font-semibold text-white space-y-1">
                <div>Circles of Change 501(c)(3)</div>
                <div className="text-sand-beige/80">Phone: (317) 555-0199</div>
                <div className="text-sand-beige/80">Email: sponsorships@circlesofchange.org</div>
              </div>
            </div>
          </div>

          {/* Right Column: EarthShare Yellow-Outlined Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="border-2 border-earth-yellow rounded-2xl p-8 sm:p-10 bg-deep-ocean/90 backdrop-blur-md shadow-2xl space-y-6">
              
              {/* Form Mode Toggle */}
              <div className="flex items-center gap-2 border-b border-white/20 pb-4">
                <button
                  type="button"
                  onClick={() => { setActiveMode('sponsor'); setSubmitted(false); }}
                  className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeMode === 'sponsor'
                      ? 'bg-earth-yellow text-earth-dark'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Corporate / Sponsor Pledge
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveMode('runner'); setSubmitted(false); }}
                  className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    activeMode === 'runner'
                      ? 'bg-earth-yellow text-earth-dark'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Individual Runner Entry
                </button>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-white text-earth-dark text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-impact-green text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold font-poppins text-earth-dark">
                    {activeMode === 'sponsor' ? 'Sponsorship Pledge Received!' : 'Registration Confirmed!'}
                  </h4>
                  <p className="text-sm text-charcoal-ink/80 leading-relaxed max-w-md mx-auto">
                    {activeMode === 'sponsor'
                      ? `Thank you, ${formData.contactName || formData.companyName}. Our race coordinator will contact you at ${formData.email} to confirm logo deliverables, signage specs, and complimentary runner promo codes.`
                      : `Thank you, ${formData.runnerName}. Your race entry and pledge of ${formData.recyclingPledge} have been secured for May 16, 2026.`}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-earth-teal underline pt-2 cursor-pointer"
                  >
                    Submit another form
                  </button>
                </div>
              ) : activeMode === 'sponsor' ? (
                /* Sponsor Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Apex Environmental Solutions"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Jordan Miller"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jmiller@apex.com"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(317) 555-0143"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                      Desired Sponsorship Level
                    </label>
                    <select
                      value={formData.sponsorshipTier}
                      onChange={(e) => setFormData({ ...formData, sponsorshipTier: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                    >
                      <option value="Presenting Sponsor — $10,000 (15 Entries, Title Naming)">
                        Presenting Sponsor — $10,000 (Exclusive Title Naming)
                      </option>
                      <option value="Gold Sponsor — $5,000 (10 Entries)">
                        Gold Sponsor — $5,000 (10 Free Entries)
                      </option>
                      <option value="Silver Sponsor — $2,500 (6 Entries)">
                        Silver Sponsor — $2,500 (6 Free Entries)
                      </option>
                      <option value="Bronze Sponsor — $1,000 (4 Entries)">
                        Bronze Sponsor — $1,000 (4 Free Entries)
                      </option>
                      <option value="Community Sponsor — $500 (2 Entries)">
                        Community Sponsor — $500 (2 Free Entries)
                      </option>
                      <option value="Community Recycling Challenge Sponsor — $2,500">
                        Exclusive: Community Recycling Challenge Sponsor — $2,500
                      </option>
                      <option value="Post-Race Breakfast Sponsor — $750">
                        Exclusive: Breakfast Sponsor — $750
                      </option>
                      <option value="Awards Ceremony Sponsor — $500">
                        Exclusive: Awards Ceremony Sponsor — $500
                      </option>
                      <option value="Water Station Sponsor — $250">
                        Hydration Water Station Sponsor — $250
                      </option>
                      <option value="In-Kind / Custom Collaboration">
                        In-Kind Donation / Custom Collaboration Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                      Notes / Custom Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify company website, billing contact, or in-kind donation item details..."
                      className="w-full px-3.5 py-2 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-sm uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
                  >
                    <span>Submit Sponsorship Pledge</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* Individual Runner Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                      Runner Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.runnerName}
                      onChange={(e) => setFormData({ ...formData, runnerName: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.runnerEmail}
                      onChange={(e) => setFormData({ ...formData, runnerEmail: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                      Recycling Pledge at Race Check-in
                    </label>
                    <select
                      value={formData.recyclingPledge}
                      onChange={(e) => setFormData({ ...formData, recyclingPledge: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                    >
                      <option value="5 lbs Bottle Caps / Clean Plastics">5 lbs Bottle Caps / Clean Plastics</option>
                      <option value="10 lbs Bottle Caps (Receives Eco-Tee)">10 lbs Bottle Caps (Receives Eco-Tee)</option>
                      <option value="25 lbs Community Drive Champion">25 lbs Community Drive Champion</option>
                      <option value="Virtual Runner (Pledge Virtual Challenge)">Virtual Runner (Pledge Virtual Challenge)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-sm uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
                  >
                    <span>Complete Runner Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="text-center text-xs text-sand-beige/70 pt-2">
                Circles of Change is a registered 501(c)(3). Corporate sponsorships are tax-deductible to the fullest extent permitted by law.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
