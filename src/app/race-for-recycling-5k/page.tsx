import React from 'react';
import { Metadata } from 'next';
import RaceHero from '@/components/race/RaceHero';
import RaceOverview from '@/components/race/RaceOverview';
import SponsorshipTiers from '@/components/race/SponsorshipTiers';
import SponsorshipMatrix from '@/components/race/SponsorshipMatrix';
import ExclusiveSponsorships from '@/components/race/ExclusiveSponsorships';
import InKindAndCustom from '@/components/race/InKindAndCustom';
import SponsorPledgeForm from '@/components/race/SponsorPledgeForm';

export const metadata: Metadata = {
  title: 'Race for Recycling 5K — 5K for the Planet | Sponsorship Opportunities',
  description:
    'Join the Race for Recycling 5K on April 17, 2027 at Fair Park in Dallas, Texas. Explore corporate sponsorship packages ($500 to $10,000 title sponsorship), exclusive challenge sponsorships, in-kind opportunities, and runner registration.',
  keywords: [
    'Race for Recycling 5K',
    '5K for the Planet',
    'Fair Park Dallas 5K',
    'Dallas Recycling Run',
    '5K Sponsorship Opportunities',
    'Corporate Sponsorship Packages',
    'Community Recycling Challenge',
    'Circles of Change 5K',
  ],
  openGraph: {
    title: 'Race for Recycling 5K — 5K for the Planet | Circles of Change',
    description:
      'Lace up for sustainability on April 17, 2027 at Fair Park in Dallas, Texas. Partner with the Race for Recycling 5K to gain premier corporate visibility and support environmental stewardship.',
    type: 'website',
    images: ['/images/hero-race-5k.jpg'],
  },
};

export default function RaceForRecyclingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <RaceHero />

      {/* 2. Partner With Us & Event Vision (50/50 Split) */}
      <RaceOverview />

      {/* 3. Core Sponsorship Packages (Presenting, Gold, Silver, Bronze, Community) */}
      <SponsorshipTiers />

      {/* 4. Full 10-Point Benefits Comparison Matrix */}
      <SponsorshipMatrix />

      {/* 5. Exclusive Experience Sponsorships (Challenge, Breakfast, Awards, Water Stations) */}
      <ExclusiveSponsorships />

      {/* 6. In-Kind & Custom Sponsorship Opportunities */}
      <InKindAndCustom />

      {/* 7. Sponsor Pledge & Runner Registration Form in Yellow-Outlined Frame */}
      <SponsorPledgeForm />
    </div>
  );
}
