export interface CarouselSponsor {
  id: string;
  name: string;
  logo: string;
  type: 'activity';
  month?: string;
}

export const carouselSponsors: CarouselSponsor[] = [
  {
    id: 'a1',
    name: 'MiHR',
    logo: '/images/mihr-logo.jpg',
    type: 'activity',
    month: 'October 2025'
  },
  {
    id: 'a2',
    name: 'Skills Competences Canada',
    logo: '/logo2.png',
    type: 'activity',
    month: 'November 2025'
  },
  {
    id: 'a3',
    name: 'thinkAG',
    logo: '/thinkag-logo.png',
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
    logo: '/images/discover-tourism-logo.png',
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
  {
    id: 'a9',
    name: 'Jack.org',
    logo: '/images/jack-logo.png',
    type: 'activity',
    month: 'May 2026'
  }
];
