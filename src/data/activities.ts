export interface Activity {
  id: string;
  month: string;
  year: string;
  title: string;
  description: string;
  sponsor: {
    name: string;
    logo: string;
    logoType: 'tall' | 'wide' | 'square';
  };
  incentive: {
    total: number;
    individual: number;
    count: number;
  };
  status: 'coming-soon' | 'active' | 'ongoing';
  slug: string;
}

// Activity data for all 8 months
export const activities: Activity[] = [
  {
    id: '1',
    month: 'October',
    year: '2025',
    title: 'Mining Industry Challenge',
    description: 'With careers above and underground, in the field, in minerals processing and metallurgy facilities, laboratories, and offices – there’s a place for you in mining.',
    sponsor: {
      name: 'MiHR',
      logo: '/logo1.gif',
      logoType: 'square'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon', // Will be calculated dynamically
    slug: 'october'
  },
  {
    id: '2',
    month: 'November',
    year: '2025',
    title: 'Skills/Compétences Canada',
    description: 'Explore Canada\'s Skills for Success: nine skills that can set workers up for success with work, learning, and life – no matter where they live or what job they pursue.',
    sponsor: {
      name: 'Skills Competences Canada',
      logo: '/logo2.png',
      logoType: 'wide'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon',
    slug: 'november'
  },
  {
    id: '3',
    month: 'December',
    year: '2025',
    title: 'myBlueprint Community Improvement Challenge',
    description: 'Have an idea to improve your community? Your school, your neighbourhood, your town or city? myBlueprint can help you bring your idea to life. No idea is too big or too small.',
    sponsor: {
      name: 'myBlueprint',
      logo: '/logo3.png',
      logoType: 'wide'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon',
    slug: 'december'
  },
  {
    id: '4',
    month: 'January',
    year: '2026',
    title: 'Beyond the Skies Challenge',
    description: 'At NAV CANADA, we\'re transforming the way our skies operate. Explore how air traffic control and flight service professionals are keeping air travel safe, efficient, and enjoyable for millions. ',
    sponsor: {
      name: 'NAV CANADA',
      logo: '/logo4.png',
      logoType: 'tall'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon',
    slug: 'january'
  },
  {
    id: '5',
    month: 'February',
    year: '2026',
    title: 'Climate Insurance Challenge',
    description: 'Learn how insurance professionals are problem-solvers who tackle big challenges like climate change, extreme weather, and community safety to protect our people and our communities.',
    sponsor: {
      name: 'Zurich Canada',
      logo: '/logo5.png',
      logoType: 'wide'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon',
    slug: 'february'
  },
  {
    id: '6',
    month: 'March',
    year: '2026',
    title: 'Teach Me Taxes Challenge',
    description: 'People love to complain that we should be learning life skills in school like how to do our taxes. Bet. In this challenge, you\'ll learn what taxes are, how they work, and why you should care.',
    sponsor: {
      name: 'H&R Block Canada',
      logo: '/logo6.jpeg',
      logoType: 'wide'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon',
    slug: 'march'
  },
  {
    id: '7',
    month: 'April',
    year: '2026',
    title: 'Tourism & Hospitality Challenge',
    description: 'Explore one of the world’s fastest-growing industries. From unique local businesses to influential global brands, find your perfect career destination and map out how to get there.',
    sponsor: {
      name: 'Tourism HR Canada',
      logo: '/logo7.png',
      logoType: 'wide'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon',
    slug: 'april'
  },
  {
    id: '8',
    month: 'May-1',
    year: '2026',
    title: 'HVACR Industry Challenge',
    description: 'HVACR is more than just tools and ductwork - it\'s a high-paying, in-demand trade with paths into design, engineering, sales, green tech, even owning your own business.',
    sponsor: {
      name: 'HRAI',
      logo: '/hvacr-career-connections.png',
      logoType: 'wide'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon',
    slug: 'may'
  },
  {
    id: '9',
    month: 'May-2',
    year: '2026',
    title: 'Be There Certificate Challenge',
    description: 'Learn to support someone struggling with their mental health through this online course created by Jack.org in partnership with Born This Way Foundation.',
    sponsor: {
      name: 'Jack.org',
      logo: '/jack-logo.png',
      logoType: 'wide'
    },
    incentive: {
      total: 10000,
      individual: 500,
      count: 20
    },
    status: 'coming-soon',
    slug: 'may-2'
  }
];

// Helper function to get month number from month name
function getMonthNumber(monthName: string): number {
  // Remove any suffix like "-1" or "-2" from the month name
  const cleanMonthName = monthName.split('-')[0];

  const months = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3,
    'May': 4, 'June': 5, 'July': 6, 'August': 7,
    'September': 8, 'October': 9, 'November': 10, 'December': 11
  };
  return months[cleanMonthName as keyof typeof months] ?? 0;
}

// Helper function to determine activity status based on current date
export function getCurrentStatus(activityMonth: string, activityYear: string): 'coming-soon' | 'active' | 'ongoing' {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  const activityMonthNumber = getMonthNumber(activityMonth);
  const activityYearNumber = parseInt(activityYear);
  
  // If the activity year is in the future
  if (activityYearNumber > currentYear) {
    return 'coming-soon';
  }
  
  // If the activity year is in the past
  if (activityYearNumber < currentYear) {
    return 'ongoing';
  }
  
  // Same year - compare months
  if (activityMonthNumber > currentMonth) {
    return 'coming-soon';
  } else if (activityMonthNumber === currentMonth) {
    return 'active';
  } else {
    return 'ongoing';
  }
}

// Helper function to get all activities with calculated status
export function getActivitiesWithStatus(): Activity[] {
  return activities.map(activity => ({
    ...activity,
    status: getCurrentStatus(activity.month, activity.year)
  }));
}

// Helper function to get the currently active activity (if any)
export function getActiveActivity(): Activity | null {
  const activitiesWithStatus = getActivitiesWithStatus();
  return activitiesWithStatus.find(activity => activity.status === 'active') ?? null;
}

// Helper function to format incentive display
export function formatIncentive(incentive: Activity['incentive']): string {
  return `${incentive.count} x $${incentive.individual} microgrants`;
}

// Extended interface for full activity page content
export interface ActivityPageData extends Activity {
  // Hero Section
  hero: {
    backgroundImage?: string;
    tagline: string;
    introText: string;
  };
  
  // Video Section
  video: {
    embedUrl: string;
    title: string;
    description: string;
  };
  
  // Explainer Table/Timeline
  explainer: {
    title: string;
    rows: Array<{
      label: string;
      content: string;
    }>;
  };
  
  // Activity Detail & Rubric
  activityDetail: {
    description: string;
    requirements: string[];
    deliverables: string[];
  };
  
  rubric: {
    criteria: Array<{
      category: string;
      weight: number;
      description: string;
      isLink?: boolean;
      url?: string;
    }>;
    totalPoints: number;
  };
  
  // Submission
  submission: {
    googleFormUrl: string;
    deadline: Date;
    instructions: string;
  };
  
  // FAQs
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  // Resources
  resources: Array<{
    title: string;
    description: string;
    url: string;
    type: 'pdf' | 'video' | 'link' | 'article';
    thumbnail?: string;
  }>;
  
  // Meta/SEO
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
}

// Valid activity months for routing
export const validActivityMonths = ['october', 'november', 'december', 'january', 'february', 'march', 'april', 'may'];

// Helper function to get activity by slug
export function getActivityBySlug(slug: string): Activity | null {
  return activities.find(activity => activity.slug.toLowerCase() === slug.toLowerCase()) ?? null;
}

// Helper function to check if month is valid for routing
export function isValidActivityMonth(month: string): boolean {
  return validActivityMonths.includes(month.toLowerCase());
}