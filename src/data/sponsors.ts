export interface Sponsor {
  id: string;
  name: string;
  logo: string; // URL or path to logo
  incentiveType: 'student' | 'completion' | 'educator' | 'school';
  contribution: string;
  amount?: string;
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
export const validSponsorSlugs: string[] = ['shad-canada'];

export const sponsors: Sponsor[] = [
  // Student Microgrant Partners
  {
    id: '1',
    name: 'TechCorp Industries',
    logo: 'https://via.placeholder.com/150x50?text=TechCorp',
    incentiveType: 'student',
    contribution: 'Monthly student microgrants for STEM challenges',
    amount: '$2,000/month'
  },
  {
    id: '2',
    name: 'Skills/Compétences Canada',
    logo: '/images/skillscanada-hand.png',
    incentiveType: 'student',
    contribution: 'Activity: November 2025',
    amount: '$1,500/month'
  },
  {
    id: '3',
    name: 'thinkAG',
    logo: '/images/thinkag-favicon.png',
    incentiveType: 'student',
    contribution: 'Activity: December 2025',
    amount: '$10,000'
  },
  {
    id: '4',
    name: 'NAV CANADA',
    logo: '/images/nav-canada.png',
    incentiveType: 'student',
    contribution: 'Activity: January 2026',
    amount: '$1,000/month'
  },
  {
    id: '5',
    name: 'Creative Studios Inc.',
    logo: 'https://via.placeholder.com/150x50?text=Creative+Studios',
    incentiveType: 'student',
    contribution: 'Arts & design challenge sponsorship',
    amount: '$500/month'
  },
  {
    id: '16',
    name: 'Digital Innovation Labs',
    logo: 'https://via.placeholder.com/150x50?text=Digital+Labs',
    incentiveType: 'student',
    contribution: 'Technology innovation challenges',
    amount: '$1,500/month'
  },
  {
    id: '17',
    name: 'Green Energy Partners',
    logo: 'https://via.placeholder.com/150x50?text=Green+Energy',
    incentiveType: 'student',
    contribution: 'Sustainability and renewable energy projects',
    amount: '$1,000/month'
  },
  {
    id: '18',
    name: 'Manufacturing Excellence',
    logo: 'https://via.placeholder.com/150x50?text=Manufacturing',
    incentiveType: 'student',
    contribution: 'Advanced manufacturing skill development',
    amount: '$1,000/month'
  },
  {
    id: '19',
    name: 'Jack.org',
    logo: '/images/jack-org-faviconV2.png',
    incentiveType: 'student',
    contribution: 'Placeholder text',
    amount: 'TBD'
  },

  // Series Completion Partners - Shad Canada
  {
    id: '24',
    name: 'Shad Canada',
    logo: '/images/sponsor-profiles/shad-canada.png',
    incentiveType: 'completion',
    contribution: 'Empowering young Canadians to become change-makers through STEAM education',
  },

  // Series Completion Partners
  {
    id: '6',
    name: 'FutureSkills Foundation',
    logo: '/images/futureskills-foundation.png',
    incentiveType: 'completion',
    contribution: 'Completion certificates and portfolio reviews',
  },
  {
    id: '7',
    name: 'Career Pathways Network',
    logo: '/images/career-pathways-network.png',
    incentiveType: 'completion',
    contribution: 'Industry mentorship opportunities for completers',
  },
  {
    id: '21',
    name: 'AdmissionPrep',
    logo: '/images/admissionprep-logo.png',
    incentiveType: 'completion',
    contribution: '5x Program Sponsorships',
  },
  {
    id: '20',
    name: 'Straight Up Health',
    logo: '/images/yolo-logo.png',
    incentiveType: 'completion',
    contribution: 'Young Opportunity Leaders Organization (3 full rides available)',
  },
  {
    id: '8',
    name: 'Your Company',
    logo: '/images/your-company.png',
    incentiveType: 'completion',
    contribution: 'Get in touch to get involved',
  },

  // Educator Prize Partners
  {
    id: '9',
    name: 'TeachTech Resources',
    logo: '/images/sparkpath-logo.png',
    incentiveType: 'educator',
    contribution: 'Professional development courses and materials',
  },
  {
    id: '10',
    name: 'Your Company',
    logo: '/images/your-company.png',
    incentiveType: 'educator',
    contribution: 'Get in touch to get involved',
    amount: '$500 grants'
  },
  {
    id: '11',
    name: 'Innovation in Education',
    logo: 'https://via.placeholder.com/150x50?text=Innovation+Ed',
    incentiveType: 'educator',
    contribution: 'Conference attendance sponsorships',
  },
  {
    id: '12',
    name: 'STEM Leaders Coalition',
    logo: 'https://via.placeholder.com/150x50?text=STEM+Leaders',
    incentiveType: 'educator',
    contribution: 'STEM equipment and lab supplies',
  },

  // School Recognition Partners
  {
    id: '13',
    name: 'Community Champions',
    logo: '/images/community-champions.png',
    incentiveType: 'school',
    contribution: 'School-wide celebration events and recognition',
  },
  {
    id: '14',
    name: 'Education Partners Alliance',
    logo: '/images/education-partners-alliance.png',
    incentiveType: 'school',
    contribution: 'Technology upgrades for winning schools',
    amount: '$5,000 value'
  },
  {
    id: '19',
    name: 'SpacesEDU',
    logo: '/images/spacesEDU-logo.png',
    incentiveType: 'school',
    contribution: 'Free SpacesEDU Pro school-wide license (2 available)',
  },
  {
    id: '22',
    name: 'Trade Finder',
    logo: '/images/trade-finder-logo.png',
    incentiveType: 'school',
    contribution: 'Free Annual License (Ontario Only)',
  },
  {
    id: '23',
    name: 'Milwaukee Tools',
    logo: '/images/milwaukee-tools-logo.png',
    incentiveType: 'school',
    contribution: '$10,000 worth of Milwaukee Tools',
  },
  {
    id: '15',
    name: 'Your Company',
    logo: '/images/your-company.png',
    incentiveType: 'school',
    contribution: 'Get in touch to get involved',
  }
];

// Helper function to get sponsors by incentive type
export function getSponsorsByType(type: 'student' | 'completion' | 'educator' | 'school'): Sponsor[] {
  return sponsors.filter(sponsor => sponsor.incentiveType === type);
}

// Helper function to get a limited number of sponsors for display
export function getLimitedSponsorsByType(type: 'student' | 'completion' | 'educator' | 'school', limit: number = 3): {
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
    sponsor => generateSlug(sponsor.name) === slug.toLowerCase()
  ) ?? null;
}

// Check if slug has a full profile page
export function hasFullProfile(slug: string): boolean {
  return validSponsorSlugs.includes(slug.toLowerCase());
}