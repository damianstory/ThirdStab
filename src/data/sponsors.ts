export interface Sponsor {
  id: string;
  name: string;
  logo: string; // URL or path to logo
  incentiveType: 'student' | 'completion' | 'educator' | 'school';
  contribution: string;
  amount?: string;
}

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
    name: 'BuildWorks Co.',
    logo: 'https://via.placeholder.com/150x50?text=BuildWorks',
    incentiveType: 'student',
    contribution: 'Construction & trades challenge prizes',
    amount: '$1,500/month'
  },
  {
    id: '3',
    name: 'HealthFirst Partners',
    logo: 'https://via.placeholder.com/150x50?text=HealthFirst',
    incentiveType: 'student',
    contribution: 'Healthcare career exploration grants',
    amount: '$1,000/month'
  },
  {
    id: '4',
    name: 'NAV CANADA',
    logo: 'https://i.imgur.com/ov7BCR3.png',
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

  // Series Completion Partners
  {
    id: '6',
    name: 'FutureSkills Foundation',
    logo: 'https://i.imgur.com/Kasr1qf.png',
    incentiveType: 'completion',
    contribution: 'Completion certificates and portfolio reviews',
  },
  {
    id: '7',
    name: 'Career Pathways Network',
    logo: 'https://i.imgur.com/9zruie6.png',
    incentiveType: 'completion',
    contribution: 'Industry mentorship opportunities for completers',
  },
  {
    id: '8',
    name: 'Your Company',
    logo: 'https://i.imgur.com/YLr3fny.png',
    incentiveType: 'completion',
    contribution: 'Get in touch to get involved',
  },

  // Educator Prize Partners
  {
    id: '9',
    name: 'TeachTech Resources',
    logo: 'https://i.imgur.com/N7or0Sk.png',
    incentiveType: 'educator',
    contribution: 'Professional development courses and materials',
  },
  {
    id: '10',
    name: 'Your Company',
    logo: 'https://i.imgur.com/YLr3fny.png',
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
    logo: 'https://i.imgur.com/ZLkRWT7.png',
    incentiveType: 'school',
    contribution: 'School-wide celebration events and recognition',
  },
  {
    id: '14',
    name: 'Education Partners Alliance',
    logo: 'https://i.imgur.com/i7Z0Mlc.png',
    incentiveType: 'school',
    contribution: 'Technology upgrades for winning schools',
    amount: '$5,000 value'
  },
  {
    id: '15',
    name: 'Your Company',
    logo: 'https://i.imgur.com/YLr3fny.png',
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