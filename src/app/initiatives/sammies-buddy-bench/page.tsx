import React from 'react';
import { Metadata } from 'next';
import SammieHero from '@/components/initiatives/sammies/SammieHero';
import SammieStory from '@/components/initiatives/sammies/SammieStory';
import HowItWorksSteps from '@/components/initiatives/sammies/HowItWorksSteps';
import CapAcceptanceGuide from '@/components/initiatives/sammies/CapAcceptanceGuide';
import SammieMediaAdvocacy from '@/components/initiatives/sammies/SammieMediaAdvocacy';
import SchoolKitRequestForm from '@/components/initiatives/sammies/SchoolKitRequestForm';

export const metadata: Metadata = {
  title: "Sammie's Buddy Bench Project | Sammie's Circles of Change",
  description:
    "Explore Sammie's Circles of Change Buddy Bench initiative. Learn how students across 50 states collect recycled bottle caps to forge 100% recycled playground buddy benches that combat loneliness and inspire kindness.",
  keywords: [
    "Sammie's Buddy Bench Project",
    "Sammie Vance",
    "Sammie's Circles of Change",
    "Bottle Cap Recycling",
    "School Buddy Bench",
    "Green Tree Plastics",
    "Youth Environmental Leadership",
  ],
  openGraph: {
    title: "Sammie's Buddy Bench Project | Sammie's Circles of Change",
    description:
      "Turning recycled bottle caps into playground friendship. Join over 350+ schools across all 50 states.",
    type: 'website',
    images: ['/images/hero-buddy-bench.jpg'],
  },
};

export default function SammiesBuddyBenchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with Dedicated Sub-Brand Logo & Metrics */}
      <SammieHero />

      {/* 2. Sammie's Origin Story & Circles of Change Logistics (50/50 Split) */}
      <SammieStory />

      {/* 3. The 4-Step "How a School Gets a Bench" Roadmap */}
      <HowItWorksSteps />

      {/* 4. Interactive Bottle Cap Acceptance & Quality Control Guide */}
      <CapAcceptanceGuide />

      {/* 5. Sammie's Book, Podcast & National Media Spotlight */}
      <SammieMediaAdvocacy />

      {/* 6. School Starter Kit Request Form in Yellow-Outlined Frame */}
      <SchoolKitRequestForm />
    </div>
  );
}
