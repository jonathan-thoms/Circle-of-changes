import heroSlidesData from '../data/heroSlides.json';
import initiativesData from '../data/initiatives.json';

/**
 * Fetches all hero slides for the homepage hero slider.
 */
export async function getHeroSlides() {
  return Promise.resolve(heroSlidesData);
}

/**
 * Fetches all active initiatives (Flagship and Partner).
 */
export async function getInitiatives() {
  return Promise.resolve(initiativesData);
}

/**
 * Fetches initiatives tagged as featured for primary homepage highlights.
 */
export async function getFeaturedInitiatives() {
  const featured = initiativesData.filter((item) => item.featured === true);
  return Promise.resolve(featured);
}

/**
 * Fetches a single initiative by its unique id/slug.
 */
export async function getInitiativeBySlug(id) {
  const item = initiativesData.find((init) => init.id === id);
  return Promise.resolve(item || null);
}

/**
 * Returns clean EarthShare-inspired Impact Pillars data.
 */
export async function getImpactPillars() {
  const pillars = [
    {
      id: 'waste-reduction',
      number: '01',
      title: 'Waste Reduction & Circularity',
      description: 'Converting post-consumer polymers into durable public infrastructure and school amenities.',
      stat: '250K+ lbs',
      statLabel: 'Plastic Diverted',
      icon: 'Recycle',
    },
    {
      id: 'youth-kindness',
      number: '02',
      title: 'Youth Kindness & Inclusion',
      description: 'Empowering students to build friendship and combat loneliness through recycled Buddy Benches.',
      stat: '350+ Benches',
      statLabel: 'Nationwide Placements',
      icon: 'HeartHandshake',
    },
    {
      id: 'community-action',
      number: '03',
      title: 'Community Action & Wellness',
      description: 'Signature events like the Race for Recycling 5K transforming fitness into clean waste collection.',
      stat: '1,200+ Runners',
      statLabel: 'Annual Participants',
      icon: 'Users',
    },
    {
      id: 'eco-innovation',
      number: '04',
      title: 'Eco-Innovation & Education',
      description: 'STEM workshops and modular micro-processing tools for the next generation of eco-leaders.',
      stat: '4,500+ Youth',
      statLabel: 'Students Mentored',
      icon: 'Lightbulb',
    },
  ];
  return Promise.resolve(pillars);
}

/**
 * Returns clean Partner Ecosystem data for the About Us page.
 */
export async function getPartnerEcosystem() {
  const partners = [
    {
      category: 'Internal Flagship Programs',
      role: 'Direct CoC Operations',
      description: 'Programs organized and directly managed by Circles of Change.',
      items: [
        {
          name: 'Race for Recycling 5K',
          focus: 'Zero-waste community athletic race and polymer collection drive.',
          status: 'Annual Event',
        },
        {
          name: 'Neighborhood Plastic Repurposing Bank',
          focus: 'Local sorting and fabrication hubs for rigid #2 and #5 plastics.',
          status: 'Active Hubs',
        },
      ],
    },
    {
      category: 'Partner Non-Profit Alliances',
      role: 'Supported & Fiscally Sponsored',
      description: 'Independent non-profits supported by CoC logistics and manufacturing pipelines.',
      items: [
        {
          name: "Sammie's Buddy Bench Project",
          focus: 'Student bottle cap collections remanufactured into school friendship benches.',
          status: 'Premier Partner',
          subBrandLogo: true,
        },
        {
          name: 'Clean Waterways Network',
          focus: 'Volunteer shoreline cleanups capturing ocean-bound plastic waste.',
          status: 'Regional Alliance',
        },
      ],
    },
    {
      category: 'Educational & Civic Hubs',
      role: 'Public Sector Integration',
      description: 'School districts and municipal departments hosting drives and installing amenities.',
      items: [
        {
          name: 'K-12 School Districts (140+ Schools)',
          focus: 'Student cap collections, assemblies, and bench installations.',
          status: 'Active Schools',
        },
        {
          name: 'Municipal Parks & Recreation',
          focus: 'Park picnic tables, trail boardwalks, and recycled signage adoption.',
          status: 'Civic Partners',
        },
      ],
    },
  ];
  return Promise.resolve(partners);
}
