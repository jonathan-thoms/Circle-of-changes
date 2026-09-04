import React from 'react';
import { getHeroSlides, getFeaturedInitiatives } from '@/lib/api';
import HeroSlider from '@/components/sections/HeroSlider';
import ImpactPillars from '@/components/sections/ImpactPillars';
import FeaturedInitiatives from '@/components/sections/FeaturedInitiatives';
import RaceForRecyclingCallout from '@/components/sections/RaceForRecyclingCallout';
import CommunityQuote from '@/components/sections/CommunityQuote';

export default async function HomePage() {
  const [heroSlides, featuredInitiatives] = await Promise.all([
    getHeroSlides(),
    getFeaturedInitiatives(),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Multi-Slide Interactive Hero Slider (Auto 7s, pause on hover, 3 slides) */}
      <HeroSlider slides={heroSlides} />

      {/* 2. How We Serve Section */}
      <ImpactPillars />

      {/* 3. Featured Initiatives Grid */}
      <FeaturedInitiatives initiatives={featuredInitiatives} />

      {/* 4. Race for Recycling 5K Callout */}
      <RaceForRecyclingCallout />

      {/* 5. Community Quote & Philosophy */}
      <CommunityQuote />
    </div>
  );
}
