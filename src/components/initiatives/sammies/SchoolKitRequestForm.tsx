'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Package, School, Mail, Phone, MapPin } from 'lucide-react';

export default function SchoolKitRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    contactName: '',
    email: '',
    phone: '',
    cityState: '',
    role: 'Educator / Teacher',
    targetBenches: '1 Bench (200-250 lbs caps)',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-deep-ocean text-white relative overflow-hidden" id="school-starter-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & What You Get (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-renewal">
              Bring a Buddy Bench to Your School
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins text-white tracking-tight leading-[1.15]">
              Request a School Drive Starter Kit
            </h2>

            <p className="text-base sm:text-lg text-sand-beige/90 leading-relaxed">
              Circles of Change supplies your school or organization with official collection guidelines, printable posters, heavy-duty collection bag tags, and regional freight logistics support.
            </p>

            {/* Included in Kit checklist */}
            <div className="space-y-3 pt-2">
              <div className="text-xs uppercase tracking-wider text-sky-renewal font-bold">
                Every Starter Kit Includes:
              </div>
              <ul className="space-y-2 text-sm text-sand-beige">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-earth-yellow flex-shrink-0" />
                  <span>Classroom Collection Posters &amp; Sorting Guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-earth-yellow flex-shrink-0" />
                  <span>Heavy-Duty Woven Collection Bag Tags</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-earth-yellow flex-shrink-0" />
                  <span>Digital Scale Weight Tracking Spreadsheet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-earth-yellow flex-shrink-0" />
                  <span>Direct freight &amp; manufacturing coordination with Green Tree Plastics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: EarthShare Yellow-Outlined Request Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="border-2 border-earth-yellow rounded-2xl p-8 sm:p-10 bg-deep-ocean/85 backdrop-blur-md shadow-2xl space-y-6">
              
              <div className="border-b border-white/20 pb-4">
                <div className="text-xs uppercase tracking-widest text-sky-renewal font-semibold">
                  Sammie&apos;s Circles of Change
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mt-1">
                  School Drive Registration Form
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-white text-earth-dark text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-impact-green text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold font-poppins text-earth-dark">
                    Kit Request Received!
                  </h4>
                  <p className="text-sm text-charcoal-ink/80 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.contactName}</strong>. Our school outreach team at Circles of Change will mail your Starter Kit to <strong>{formData.schoolName}</strong> within 3-5 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-earth-teal underline pt-2 cursor-pointer"
                  >
                    Submit another school request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        School / Organization Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        placeholder="Oakridge Elementary School"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        Coordinator / Contact Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Sarah Jenkins"
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
                        placeholder="sjenkins@oakridge.edu"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        City, State &amp; ZIP
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cityState}
                        onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                        placeholder="Indianapolis, IN 46201"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm placeholder-charcoal-ink/50 focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        Your Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      >
                        <option value="Educator / Teacher">Educator / Teacher</option>
                        <option value="PTA / PTO Member">PTA / PTO Member</option>
                        <option value="School Principal / Admin">School Principal / Admin</option>
                        <option value="Scout Troop Leader">Scout Troop Leader</option>
                        <option value="Community Volunteer">Community Volunteer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-1">
                        Target Goal
                      </label>
                      <select
                        value={formData.targetBenches}
                        onChange={(e) => setFormData({ ...formData, targetBenches: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-white text-earth-dark text-sm focus:outline-none focus:ring-2 focus:ring-earth-yellow"
                      >
                        <option value="1 Bench (200-250 lbs caps)">1 Buddy Bench (~250 lbs caps)</option>
                        <option value="2 Benches (500 lbs caps)">2 Buddy Benches (~500 lbs caps)</option>
                        <option value="District-Wide Drive (1,000+ lbs)">District-Wide Drive (1,000+ lbs)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-md bg-earth-yellow hover:bg-[#FFE033] text-earth-dark font-bold text-sm uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
                  >
                    <span>Request Free Starter Kit &amp; Tags</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="text-center text-xs text-sand-beige/70 pt-2">
                Circles of Change is a registered 501(c)(3). Starter kits are provided free of charge to recognized schools and youth groups.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
