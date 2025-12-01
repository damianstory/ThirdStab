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
    title: 'Skilled Career Exploration Challenge',
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
    title: 'Agriculture Career Exploration Challenge',
    description: 'Explore Canada\'s agriculture sector in this challenge as you increase your awareness and cultivate curiosity in agriculture and food careers across the country.',
    sponsor: {
      name: 'thinkAG',
      logo: '/thinkag-logo.png',
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

  // How this Works Video (separate from Challenge Overview video)
  howThisWorksVideo?: {
    embedUrl: string;
    title: string;
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
    steps: Array<{
      title: string;
      details: string;
    }>;
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
    detailedRubricUrl?: string; // URL to full detailed rubric
  };

  // Submission
  submission: {
    url: string; // Submission form/survey URL
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
    image?: string;
    buttonText?: string; // Optional custom button text
    borderColor?: string; // Optional custom border color for branding
  }>;
  resourcesTitle?: string; // Optional custom title for Resources section
  resourcesSubtitle?: string; // Optional custom subtitle for Resources section

  // Promotional Banner (optional - for time-sensitive campaigns)
  promotionalBanner?: {
    imageEn: string;
    imageFr: string;
    altTextEn: string;
    altTextFr: string;
    link?: string;
    displayDates?: {
      start: Date;
      end: Date;
    };
  };

  // Meta/SEO
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
}

// Valid activity months for routing
export const validActivityMonths = ['october', 'november', 'december', 'january', 'february', 'march', 'april', 'may', 'may-2'];

// Helper function to get activity by slug
export function getActivityBySlug(slug: string): Activity | null {
  return activities.find(activity => activity.slug.toLowerCase() === slug.toLowerCase()) ?? null;
}

// Helper function to check if month is valid for routing
export function isValidActivityMonth(month: string): boolean {
  return validActivityMonths.includes(month.toLowerCase());
}

// French translations for activities
const activitiesFr: Activity[] = [
  {
    id: '1',
    month: 'octobre',
    year: '2025',
    title: "Défi de l'industrie minière",
    description: "Avec des carrières à la surface et sous terre, sur le terrain, dans les usines de traitement des minéraux et de métallurgie, les laboratoires et les bureaux — il y a une place pour vous dans le secteur minier.",
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
    status: 'coming-soon',
    slug: 'october'
  },
  {
    id: '2',
    month: 'novembre',
    year: '2025',
    title: "Défi d'exploration des métiers spécialisés",
    description: "Découvrez les Compétences pour réussir du Canada : neuf compétences essentielles qui favorisent la réussite au travail, dans les études et dans la vie — peu importe où vous vivez ou le métier que vous exercez.",
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
    month: 'décembre',
    year: '2025',
    title: "Défi d'exploration des carrières en agriculture",
    description: "Explorez le secteur agricole canadien dans ce défi qui vous aidera à mieux connaître les carrières en agriculture et en agroalimentaire partout au pays.",
    sponsor: {
      name: 'thinkAG',
      logo: '/thinkag-logo.png',
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
    month: 'janvier',
    year: '2026',
    title: "Défi Au-delà des nuages",
    description: "Chez NAV CANADA, nous transformons la gestion de l'espace aérien. Découvrez comment les professionnels du contrôle de la circulation aérienne et des services de vol assurent un transport aérien sécuritaire, efficace et agréable pour des millions de voyageurs.",
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
    month: 'février',
    year: '2026',
    title: "Défi sur l'assurance climatique",
    description: "Apprenez comment les professionnels de l'assurance sont des résolveurs de problèmes qui s'attaquent à de grands défis tels que les changements climatiques, les phénomènes météorologiques extrêmes et la sécurité des collectivités pour protéger les personnes et les communautés.",
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
    month: 'mars',
    year: '2026',
    title: "Défi Comprends les impôts",
    description: "On entend souvent dire qu'on devrait apprendre des compétences de la vie courante à l'école — comme comment faire ses impôts. Ce défi vous permettra de comprendre ce que sont les impôts, comment ils fonctionnent et pourquoi ils sont importants.",
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
    month: 'avril',
    year: '2026',
    title: "Défi Tourisme et hospitalité",
    description: "Explorez l'une des industries qui connaît la plus forte croissance au monde. Des entreprises locales uniques aux marques mondiales influentes, trouvez la carrière qui vous correspond et planifiez votre parcours pour y arriver.",
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
    month: 'mai',
    year: '2026',
    title: "Défi de l'industrie CVC&R",
    description: "Le domaine du chauffage, de la ventilation, de la climatisation et de la réfrigération (CVC) dépasse les simples outils et conduits. C'est un métier bien rémunéré et en forte demande, qui peut mener vers des carrières en conception, en ingénierie, en ventes, en technologies vertes, ou même la possibilité d'avoir sa propre entreprise.",
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
    month: 'mai',
    year: '2026',
    title: "Défi Certificat Sois présent",
    description: "Apprenez à soutenir une personne qui vit des difficultés en santé mentale grâce à ce cours en ligne créé par Jack.org, en partenariat avec la Born This Way Foundation.",
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

// Helper function to get localized activities
export function getActivities(language: 'en' | 'fr' = 'en'): Activity[] {
  return language === 'fr' ? activitiesFr : activities;
}