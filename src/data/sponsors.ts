export interface Sponsor {
  id: string;
  name: string;
  slug: string;
  logo: string; // URL or path to logo
  incentiveType: 'activity';
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
    variant?: 'default' | 'featured';
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
export const validSponsorSlugsByLanguage: Record<'en' | 'fr', string[]> = {
  en: ['jack-org', 'zurich-canada', 'hrblock-canada', 'discover-tourism', 'hrai'],
  fr: [],
};

export const validSponsorSlugs = validSponsorSlugsByLanguage.en;

// Category colors for visual differentiation
// Gradients match the filter button colors in SponsorsGrid
export const categoryColors: Record<Sponsor['incentiveType'], {
  border: string;
  gradient: string;
  gradientStyle: { background: string }; // Inline style for gradient (avoids Tailwind purge issues)
}> = {
  activity: {
    border: 'border-l-brandBlue',
    gradient: '',
    gradientStyle: { background: 'linear-gradient(to bottom right, #F0F8FF, #F8FCFF)' },
  },
};

// Category display labels
export const categoryLabels: Record<Sponsor['incentiveType'], string> = {
  activity: 'Activity',
};

// Sort order for categories
export const categoryOrder: Sponsor['incentiveType'][] = ['activity'];

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
    activityPage: '/january',
  },
  {
    id: '5',
    name: 'Zurich Canada',
    slug: 'zurich-canada',
    logo: '/images/zurich-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: February 2026',
    activityPage: '/february',
  },
  {
    id: '6',
    name: 'H&R Block Canada',
    slug: 'hrblock-canada',
    logo: '/images/hrblock-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: March 2026',
    activityPage: '/march',
  },
  {
    id: '7',
    name: 'Discover Tourism',
    slug: 'discover-tourism',
    logo: '/images/discover-tourism-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: April 2026',
    activityPage: '/april',
  },
  {
    id: '8',
    name: 'HVACR Career Connections powered by HRAI',
    slug: 'hrai',
    logo: '/images/hrai-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: May 2026',
    activityPage: '/may-1',
  },
  {
    id: '9',
    name: 'Jack.org',
    slug: 'jack-org',
    logo: '/images/jack-org-logo.png',
    incentiveType: 'activity',
    contribution: 'Activity: May 2026',
    activityPage: '/may-2',
  },
];

// Helper function to get sponsors by incentive type
export function getSponsorsByType(type: Sponsor['incentiveType']): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.incentiveType === type);
}

// Helper function to get a limited number of sponsors for display
export function getLimitedSponsorsByType(type: Sponsor['incentiveType'], limit: number = 3): {
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
export function getValidSponsorSlugs(language: 'en' | 'fr' = 'en'): string[] {
  return validSponsorSlugsByLanguage[language];
}

export function hasFullProfile(slug: string, language: 'en' | 'fr' = 'en'): boolean {
  return getValidSponsorSlugs(language).includes(slug.toLowerCase());
}
