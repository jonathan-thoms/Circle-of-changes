# Project Context: Circles of Change (CoC)

## Overview
Circles of Change is a non-profit organization that promotes both its own internal sustainability initiatives (e.g., Race for Recycling 5K) and external partner non-profit initiatives (e.g., Sammie's Buddy Bench Project).

## Technical Architecture Strategy
- **Stage 1 (Current):** Standalone Next.js App Router application with Tailwind CSS, utilizing decoupled JSON mock data files (`src/data/`).
- **Stage 2 (Future):** Connecting WordPress as a headless CMS via WP REST API / WPGraphQL by updating the data fetch layer in `src/lib/api.js`.

## Key Stakeholders & Branding
- **Organization Name:** Circles of Change
- **Primary References:** EarthShare (structure/pillars), Sammie's Buddy Bench Project (initiative template).
- **Sub-Brand Marks:** Specific initiatives (like Sammie's Buddy Bench) utilize sub-branded visual assets ("Sammie's Circles of Change").