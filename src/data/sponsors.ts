export interface Sponsor {
  id: string;
  name: string;
  slug: string;
  logo: string; // URL or path to logo
  incentiveType: 'activity' | 'completion' | 'educator' | 'school';
  contribution: string;
  amount?: string;
  featured?: boolean;
  activityPage?: string; // Link to activity page (e.g., '/october')
}

// Extended interface for sponsor profile pages (similar to ActivityPageData)
export interface SponsorPageData extends Sponsor {
  slug: string;

  hero: {
    backgroundImage?: string;
    tagline: string;
    introText: string;
  };

  about: {
    title?: string; // Override default "About {sponsor.name}" title
    description: string;
    industry: string;
    website: string;
  };

  partnership: {
    description: string;
    activityMonth?: string;
    incentiveDescription?: string;
    steps?: string[];
    incentiveSteps?: string[];
    hideIcon?: boolean; // Hide the icon next to the steps card title
  };

  careerResources?: Array<{
    title: string;
    description: string;
    url: string;
    type: 'pdf' | 'video' | 'link' | 'article';
    thumbnail?: string;
  }>;

  faqs?: Array<{
    question: string;
    answer: string;
  }>;

  // Sidebar cards for About section
  incentiveCard?: {
    label: string;
    value: string;
  };

  deadlines?: Array<{
    label: string;
    date: string;
  }>;

  // Info card for longer paragraph descriptions (alternative to incentiveCard)
  infoCard?: {
    title: string;
    description: string;
  };

  cta: {
    primaryLabel: string;
    primaryUrl: string;
    secondaryLabel?: string;
    secondaryUrl?: string;
  };

  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
}

// Valid sponsor slugs for routing (sponsors with full profile pages)
export const validSponsorSlugs: string[] = ['shad', 'jack-org'];

// Category colors for visual differentiation
// Gradients match the filter button colors in SponsorsGrid
export const categoryColors: Record<Sponsor['incentiveType'], {
  border: string;
  gradient: string;
  gradientStyle: { background: string }; // Inline style for gradient (avoids Tailwind purge issues)
}> = {
  completion: {
    border: 'border-l-brandBlue',
    gradient: '', // Using inline style instead
    gradientStyle: { background: 'linear-gradient(to bottom right, #C6E7FF, #E8F4FF)' },
  },
  educator: {
    border: 'border-l-[#006BB3]',
    gradient: '',
    gradientStyle: { background: 'linear-gradient(to bottom right, #D4F0FF, #EAF7FF)' },
  },
  school: {
    border: 'border-l-[#0077CC]',
    gradient: '',
    gradientStyle: { background: 'linear-gradient(to bottom right, #E0F4FF, #F0F9FF)' },
  },
  activity: {
    border: 'border-l-brandBlue',
    gradient: '',
    gradientStyle: { background: 'linear-gradient(to bottom right, #F0F8FF, #F8FCFF)' },
  },
};

// Category display labels
export const categoryLabels: Record<Sponsor['incentiveType'], string> = {
  completion: 'Series Completion',
  educator: 'Educator',
  school: 'School',
  activity: 'Activity',
};

// Sort order for categories
export const categoryOrder: Sponsor['incentiveType'][] = ['completion', 'educator', 'school', 'activity'];

export const sponsors: Sponsor[] = [
  // Activity Sponsors
  {
    id: '1',
    name: 'Mining Industry Human Resources Council (MiHR)',
    slug: 'mihr',
    logo: '/images/mihr-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: October 2025',
    activityPage: '/october',
  },
  {
    id: '2',
    name: 'Skills/Compétences Canada',
    slug: 'skills-canada',
    logo: '/images/skillscanada-hand.png',
    incentiveType: 'activity',
    contribution: 'Activity: November 2025',
    activityPage: '/november',
  },
  {
    id: '3',
    name: 'thinkAG',
    slug: 'thinkag',
    logo: '/images/thinkag-logo.jpg',
    incentiveType: 'activity',
    contribution: 'Activity: December 2025',
    activityPage: '/december',
  },
  {
    id: '4',
    name: 'NAV CANADA',
    slug: 'nav-canada',
    logo: '/logo4.png',
    incentiveType: 'activity',
    contribution: 'Activity: January 2026',
  },
  {
    id: '5',
    name: 'Zurich Canada',
    slug: 'zurich-canada',
    logo: '/images/zurich-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: February 2026',
  },
  {
    id: '6',
    name: 'H&R Block Canada',
    slug: 'hrblock-canada',
    logo: '/images/hrblock-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: March 2026',
  },
  {
    id: '7',
    name: 'Tourism HR Canada',
    slug: 'tourism-hr',
    logo: '/images/tourism-hr-logo.jpeg',
    incentiveType: 'activity',
    contribution: 'Activity: April 2026',
  },
  {
    id: '8',
    name: 'Heating, Refrigeration and Air Conditioning Institute of Canada',
    slug: 'hrai',
    logo: '/images/hrai-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: May 2026',
  },
  {
    id: '9',
    name: 'Jack.org',
    slug: 'jack-org',
    logo: '/images/jack-org-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: May 2026',
  },

  // Series Completion Partners
  {
    id: '24',
    name: 'Shad',
    slug: 'shad',
    logo: '/images/sponsor-profiles/shad-canada.png',
    incentiveType: 'completion',
    contribution: '5x Entrance Scholarships to the 2026 (or beyond) Shad program',
    featured: true,
  },
  {
    id: '10',
    name: 'JobSpark',
    slug: 'job-spark',
    logo: '/images/jobspark-logo.png',
    incentiveType: 'completion',
    contribution: '30 individual student codes to access the JobSpark program',
  },
  {
    id: '11',
    name: 'Straight Up Health',
    slug: 'straight-up-health',
    logo: '/images/yolo-logo.png',
    incentiveType: 'completion',
    contribution: 'Young Opportunity Leaders Organization program (3 available)',
  },
  {
    id: '12',
    name: 'AdmissionPrep',
    slug: 'admission-prep',
    logo: '/images/admissionprep-logo.png',
    incentiveType: 'completion',
    contribution: '5x full ride Program Sponsorships',
  },
  
  // Educator Prize Partners
  {
    id: '14',
    name: 'SparkPath',
    slug: 'sparkpath',
    logo: '/images/sparkpath-logo.png',
    incentiveType: 'educator',
    contribution: 'Monthly physical Challenge Cards (single deck) for educators',
  },
  
  // School Recognition Partners
  {
    id: '16',
    name: 'Milwaukee Tools',
    slug: 'milwaukee',
    logo: '/images/milwaukee-logo.png',
    incentiveType: 'school',
    contribution: '$10,000 CAD worth of Milwaukee Tools for a school',
  },
  {
    id: '17',
    name: 'Trade-Finder',
    slug: 'trade-finder',
    logo: '/images/trade-finder-logo.png',
    incentiveType: 'school',
    contribution: 'School access to the Trade-Finder program for one year (10 available; Ontario only)',
  },
  {
    id: '18',
    name: 'SpacesEDU by myBlueprint',
    slug: 'spaces-edu',
    logo: '/images/spacesEDU-logo.png',
    incentiveType: 'school',
    contribution: 'Free SpacesEDU Pro school-wide license (2 available)',
  },
  ];

// Helper function to get sponsors by incentive type
export function getSponsorsByType(type: 'activity' | 'completion' | 'educator' | 'school'): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.incentiveType === type);
}

// Helper function to get a limited number of sponsors for display
export function getLimitedSponsorsByType(type: 'activity' | 'completion' | 'educator' | 'school', limit: number = 3): {
  sponsors: Sponsor[];
  hasMore: boolean;
  totalCount: number;
} {
  const allSponsors = getSponsorsByType(type);
  return {
    sponsors: allSponsors.slice(0, limit),
    hasMore: allSponsors.length > limit,
    totalCount: allSponsors.length
  };
}

// Generate URL-safe slug from sponsor name
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Get sponsor by slug
export function getSponsorBySlug(slug: string): Sponsor | null {
  return sponsors.find(
    sponsor => sponsor.slug === slug.toLowerCase()
  ) ?? null;
}

// Check if slug has a full profile page
export function hasFullProfile(slug: string): boolean {
  return validSponsorSlugs.includes(slug.toLowerCase());
}