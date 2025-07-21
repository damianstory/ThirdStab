export interface CarouselSponsor {
  id: string;
  name: string;
  logo: string;
  type: 'activity' | 'incentive';
  month?: string;
}

const logos = [
  'https://i.imgur.com/mQptCyT.png', // Placeholder logo
];

export const carouselSponsors: CarouselSponsor[] = [
  // Activity Sponsors (8)
  {
    id: 'a1',
    name: 'TechCorp Industries',
    logo: logos[0],
    type: 'activity',
    month: 'October 2025'
  },
  {
    id: 'a2',
    name: 'BuildWorks Co.',
    logo: logos[0],
    type: 'activity',
    month: 'November 2025'
  },
  {
    id: 'a3',
    name: 'HealthFirst Partners',
    logo: logos[0],
    type: 'activity',
    month: 'December 2025'
  },
  {
    id: 'a4',
    name: 'AgriTech Solutions',
    logo: logos[0],
    type: 'activity',
    month: 'January 2026'
  },
  {
    id: 'a5',
    name: 'Creative Studios Inc.',
    logo: logos[0],
    type: 'activity',
    month: 'February 2026'
  },
  {
    id: 'a6',
    name: 'Digital Innovation Labs',
    logo: logos[0],
    type: 'activity',
    month: 'March 2026'
  },
  {
    id: 'a7',
    name: 'Green Energy Partners',
    logo: logos[0],
    type: 'activity',
    month: 'April 2026'
  },
  {
    id: 'a8',
    name: 'Manufacturing Excellence',
    logo: logos[0],
    type: 'activity',
    month: 'May 2026'
  },
  // Incentive Sponsors (7)
  {
    id: 'i1',
    name: 'FutureSkills Foundation',
    logo: logos[0],
    type: 'incentive'
  },
  {
    id: 'i2',
    name: 'Career Pathways Network',
    logo: logos[0],
    type: 'incentive'
  },
  {
    id: 'i3',
    name: 'Workforce Ready',
    logo: logos[0],
    type: 'incentive'
  },
  {
    id: 'i4',
    name: 'TeachTech Resources',
    logo: logos[0],
    type: 'incentive'
  },
  {
    id: 'i5',
    name: 'Educator Excellence Fund',
    logo: logos[0],
    type: 'incentive'
  },
  {
    id: 'i6',
    name: 'Innovation in Education',
    logo: logos[0],
    type: 'incentive'
  },
  {
    id: 'i7',
    name: 'STEM Leaders Coalition',
    logo: logos[0],
    type: 'incentive'
  }
];