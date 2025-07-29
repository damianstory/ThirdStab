export interface CarouselSponsor {
  id: string;
  name: string;
  logo: string;
  type: 'activity' | 'incentive';
  month?: string;
}

const logos = [
  '/images/placeholder-incentive.png', // Placeholder logo for incentive sponsors
];

export const carouselSponsors: CarouselSponsor[] = [
  // Activity Sponsors (8)
  {
    id: 'a1',
    name: 'TechCorp Industries',
    logo: '/logo1.gif',
    type: 'activity',
    month: 'October 2025'
  },
  {
    id: 'a2',
    name: 'Coming Soon',
    logo: '/images/avatar-2.png',
    type: 'activity',
    month: 'November 2025'
  },
  {
    id: 'a3',
    name: 'HealthFirst Partners',
    logo: '/logo3.png',
    type: 'activity',
    month: 'December 2025'
  },
  {
    id: 'a4',
    name: 'AgriTech Solutions',
    logo: '/logo4.png',
    type: 'activity',
    month: 'January 2026'
  },
  {
    id: 'a5',
    name: 'Creative Studios Inc.',
    logo: '/logo5.png',
    type: 'activity',
    month: 'February 2026'
  },
  {
    id: 'a6',
    name: 'Digital Innovation Labs',
    logo: '/logo6.jpeg',
    type: 'activity',
    month: 'March 2026'
  },
  {
    id: 'a7',
    name: 'Green Energy Partners',
    logo: '/logo7.png',
    type: 'activity',
    month: 'April 2026'
  },
  {
    id: 'a8',
    name: 'Manufacturing Excellence',
    logo: '/images/manufacturing-excellence.png',
    type: 'activity',
    month: 'May 2026'
  },
  // Incentive Sponsors (7)
  {
    id: 'i1',
    name: 'Series Completion',
    logo: '/images/series-completion-1.png',
    type: 'incentive'
  },
  {
    id: 'i2',
    name: 'School-Level',
    logo: '/images/school-level-1.png',
    type: 'incentive'
  },
  {
    id: 'i3',
    name: 'Educator-Level',
    logo: '/images/educator-level.png',
    type: 'incentive'
  },
  {
    id: 'i4',
    name: 'Series Completion',
    logo: '/images/series-completion-2.png',
    type: 'incentive'
  },
  {
    id: 'i5',
    name: 'School-Level',
    logo: '/images/school-level-2.png',
    type: 'incentive'
  },
  {
    id: 'i6',
    name: 'Your Company',
    logo: '/images/your-company-carousel.png',
    type: 'incentive'
  }
];