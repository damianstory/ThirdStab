// Grant Recipients Data
// Showcases monthly winning video submissions

export interface VideoWinner {
  id: string;
  youtubeId: string;
  grade: number;
  schoolBoard: string;
  schoolName: string;
  province: string;
}

export interface MonthRecipients {
  month: string;
  monthFr: string;
  year: number;
  slug: string;
  sponsorName: string;
  sponsorLogo: string;
  activityTitle: string;
  activityTitleFr: string;
  activitySlug: string;
  description: string;
  descriptionFr: string;
  winners: VideoWinner[];
  enabled: boolean;
}

// All months in the program
export const allMonths: MonthRecipients[] = [
  {
    month: 'October',
    monthFr: 'Octobre',
    year: 2025,
    slug: 'october',
    sponsorName: 'Mining Industry Human Resources Council (MiHR)',
    sponsorLogo: '/logo1.gif',
    activityTitle: 'Mining Industry Challenge',
    activityTitleFr: "Défi de l'industrie minière",
    activitySlug: 'october',
    description: 'Congratulations to these 20 students who explored careers in Canada\'s mining industry and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont exploré les carrières dans l\'industrie minière canadienne et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: true,
    winners: [
      // Grade 7
      { id: 'oct-1', youtubeId: 'kBZLvt01-jU', grade: 7, schoolBoard: 'York Region DSB', schoolName: 'Terry Fox Public School', province: 'Ontario' },
      // Grade 8
      { id: 'oct-2', youtubeId: '-2YdosXo7KU', grade: 8, schoolBoard: 'Hamilton-Wentworth DSB', schoolName: 'Dr. Davey Elementary School', province: 'Ontario' },
      // Grade 9
      { id: 'oct-3', youtubeId: 'uA-rq6OHL4s', grade: 9, schoolBoard: 'Toronto DSB', schoolName: 'Agincourt Collegiate Institute', province: 'Ontario' },
      // Grade 10
      { id: 'oct-4', youtubeId: 'UNmBLL-_B0c', grade: 10, schoolBoard: 'Waterloo Region DSB', schoolName: 'Kitchener Waterloo Collegiate and Vocational', province: 'Ontario' },
      { id: 'oct-5', youtubeId: '5Qit0dPALDI', grade: 10, schoolBoard: 'STEM Innovation Academy', schoolName: 'STEM Innovation Academy', province: 'Alberta' },
      { id: 'oct-6', youtubeId: 'UlcI3_N0RyI', grade: 10, schoolBoard: 'NL Schools', schoolName: 'St. Lewis Academy', province: 'Newfoundland and Labrador' },
      { id: 'oct-7', youtubeId: 'sTSJpfyhCto', grade: 10, schoolBoard: 'York Catholic DSB', schoolName: 'St. Augustine', province: 'Ontario' },
      { id: 'oct-8', youtubeId: 'z1JjW29UoA8', grade: 10, schoolBoard: 'Heritage Christian', schoolName: 'Heritage Christian Online School', province: 'British Columbia' },
      { id: 'oct-9', youtubeId: 'QILsRuTjzwo', grade: 10, schoolBoard: 'Calgary Board of Education', schoolName: 'Bowness High School', province: 'Alberta' },
      // Grade 11
      { id: 'oct-10', youtubeId: 'tBuu16bma64', grade: 11, schoolBoard: 'Hamilton-Wentworth DSB', schoolName: 'Glendale Secondary School', province: 'Ontario' },
      { id: 'oct-11', youtubeId: 'rkDipiv3Nho', grade: 11, schoolBoard: 'Grand Erie DSB', schoolName: 'North Park Collegiate and Vocational', province: 'Ontario' },
      { id: 'oct-12', youtubeId: 'kXEkWxFRL4I', grade: 11, schoolBoard: 'Edmonton Public SB', schoolName: 'Dr. Anne Anderson High School', province: 'Alberta' },
      // Grade 12
      { id: 'oct-13', youtubeId: 'jTsY1rmThG4', grade: 12, schoolBoard: 'Greater Essex County DSB', schoolName: 'Vincent Massey Secondary School', province: 'Ontario' },
      { id: 'oct-14', youtubeId: '_N33vTuMHyw', grade: 12, schoolBoard: 'Toronto DSB', schoolName: 'A.Y. Jackson Secondary School', province: 'Ontario' },
      { id: 'oct-15', youtubeId: 'Qt7ljjwMd0M', grade: 12, schoolBoard: 'York Region DSB', schoolName: 'Maple High School', province: 'Ontario' },
      { id: 'oct-16', youtubeId: '4bxv8vzc1G4', grade: 12, schoolBoard: 'Hamilton-Wentworth Catholic DSB', schoolName: 'Cathedral High School', province: 'Ontario' },
      { id: 'oct-17', youtubeId: 'QEq2E5lG2uY', grade: 12, schoolBoard: 'York Region DSB', schoolName: 'Maple High School', province: 'Ontario' },
      { id: 'oct-18', youtubeId: 'YiCQhDLSazo', grade: 12, schoolBoard: 'Edmonton Public SB', schoolName: 'W.P. Wagner', province: 'Alberta' },
      { id: 'oct-19', youtubeId: 'FqcDqmNN5Uc', grade: 12, schoolBoard: 'Dufferin Peel CDSB', schoolName: 'St. Thomas Aquinas Catholic Secondary School', province: 'Ontario' },
      { id: 'oct-20', youtubeId: 'lxUQ2T5QGkw', grade: 12, schoolBoard: 'Toronto DSB', schoolName: 'Jarvis Collegiate Institute', province: 'Ontario' },
    ]
  },
  {
    month: 'November',
    monthFr: 'Novembre',
    year: 2025,
    slug: 'november',
    sponsorName: 'Skills/Compétences Canada',
    sponsorLogo: '/logo2.png',
    activityTitle: 'Skilled Career Exploration Challenge',
    activityTitleFr: "Défi d'exploration des métiers spécialisés",
    activitySlug: 'november',
    description: 'Congratulations to these 20 students who explored Canada\'s Skills for Success and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont exploré les Compétences pour réussir du Canada et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: true,
    winners: [
      // Grade 7
      { id: 'nov-1', youtubeId: 'V9RKNSzGqug', grade: 7, schoolBoard: 'Toronto District School Board', schoolName: 'Cook/Chef', province: 'Ontario' },
      // Grade 8
      { id: 'nov-2', youtubeId: 'wiLJxqmSj40', grade: 8, schoolBoard: 'York Region District School Board', schoolName: 'Car Painting', province: 'Ontario' },
      { id: 'nov-3', youtubeId: 'rbhz3yIQ2gU', grade: 8, schoolBoard: 'York Region District School Board', schoolName: 'Carpenter', province: 'Ontario' },
      // Grade 10
      { id: 'nov-4', youtubeId: '4luAGXO0Nw4', grade: 10, schoolBoard: 'Strait Regional Centre of Education', schoolName: 'Cook/Chef', province: 'Nova Scotia' },
      { id: 'nov-5', youtubeId: 'nSYDSz4bg8U', grade: 10, schoolBoard: 'Brant Haldimand Norfolk Catholic', schoolName: 'CNC Machining', province: 'Ontario' },
      { id: 'nov-6', youtubeId: 'Zf9fD1GFs8I', grade: 10, schoolBoard: 'North East School Division', schoolName: 'Cook/Chef', province: 'Saskatchewan' },
      { id: 'nov-7', youtubeId: 'NnfdBAyZfy8', grade: 10, schoolBoard: 'SD36 Surrey', schoolName: 'Cook/Chef', province: 'British Columbia' },
      { id: 'nov-8', youtubeId: 'bsCtDhJpV1g', grade: 10, schoolBoard: 'Conseil scolaire public du grand nord', schoolName: 'Cook/Chef', province: 'Ontario' },
      { id: 'nov-9', youtubeId: '1rG3xg_kpfE', grade: 10, schoolBoard: 'St. Thomas Aquinas Roman Catholic Schools (STAR Catholic)', schoolName: 'Carpenter', province: 'Alberta' },
      // Grade 11
      { id: 'nov-10', youtubeId: 'dXqE1kHJ0qw', grade: 11, schoolBoard: 'Edmonton Public School Board', schoolName: 'Carpenter', province: 'Alberta' },
      { id: 'nov-11', youtubeId: 'h7IYX4s7sqI', grade: 11, schoolBoard: 'York Region District School Board', schoolName: 'CNC Machining', province: 'Ontario' },
      { id: 'nov-12', youtubeId: '8x-MAfBAqvA', grade: 11, schoolBoard: 'Halton DSB', schoolName: 'Graphic Design', province: 'Ontario' },
      // Grade 12
      { id: 'nov-13', youtubeId: 'flPzoyOgVBU', grade: 12, schoolBoard: 'Toronto DSB', schoolName: 'Graphic Design', province: 'Ontario' },
      { id: 'nov-14', youtubeId: '9Pz9CkiFmrg', grade: 12, schoolBoard: 'York Region District School Board', schoolName: 'Carpenter', province: 'Ontario' },
      { id: 'nov-15', youtubeId: 'kTd7vlQhwak', grade: 12, schoolBoard: 'Yellowknife Education District No. 1', schoolName: 'Cook/Chef', province: 'Northwest Territories' },
      { id: 'nov-16', youtubeId: 'vZrkUIPAUuM', grade: 12, schoolBoard: 'NL Schools', schoolName: 'Cook/Chef', province: 'Newfoundland and Labrador' },
      { id: 'nov-17', youtubeId: 'suALX0yVpc8', grade: 12, schoolBoard: 'Independent', schoolName: 'Carpenter', province: 'Alberta' },
      { id: 'nov-18', youtubeId: '2L4Ifp8MBwc', grade: 12, schoolBoard: 'Edmonton Public School Board', schoolName: 'Carpenter', province: 'Alberta' },
      // Placeholders
      { id: 'nov-19', youtubeId: 'X2emIiPoRP4', grade: 12, schoolBoard: 'Coming Soon', schoolName: 'Coming Soon', province: 'Coming Soon' },
      { id: 'nov-20', youtubeId: 'X2emIiPoRP4', grade: 12, schoolBoard: 'Coming Soon', schoolName: 'Coming Soon', province: 'Coming Soon' },
    ]
  },
  {
    month: 'December',
    monthFr: 'Décembre',
    year: 2025,
    slug: 'december',
    sponsorName: 'thinkAG',
    sponsorLogo: '/thinkag-logo.png',
    activityTitle: 'Agriculture Career Exploration Challenge',
    activityTitleFr: "Défi d'exploration des carrières en agriculture",
    activitySlug: 'december',
    description: 'Congratulations to these 20 students who explored careers in Canada\'s agriculture sector and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont exploré les carrières dans le secteur agricole canadien et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: false,
    winners: []
  },
  {
    month: 'January',
    monthFr: 'Janvier',
    year: 2026,
    slug: 'january',
    sponsorName: 'NAV CANADA',
    sponsorLogo: '/logo4.png',
    activityTitle: 'Beyond the Skies Challenge',
    activityTitleFr: 'Défi Au-delà des nuages',
    activitySlug: 'january',
    description: 'Congratulations to these 20 students who explored careers in air traffic control and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont exploré les carrières en contrôle de la circulation aérienne et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: false,
    winners: []
  },
  {
    month: 'February',
    monthFr: 'Février',
    year: 2026,
    slug: 'february',
    sponsorName: 'Zurich Canada',
    sponsorLogo: '/logo5.png',
    activityTitle: 'Climate Insurance Challenge',
    activityTitleFr: "Défi sur l'assurance climatique",
    activitySlug: 'february',
    description: 'Congratulations to these 20 students who explored careers in insurance and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont exploré les carrières en assurance et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: false,
    winners: []
  },
  {
    month: 'March',
    monthFr: 'Mars',
    year: 2026,
    slug: 'march',
    sponsorName: 'H&R Block Canada',
    sponsorLogo: '/logo6.jpeg',
    activityTitle: 'Teach Me Taxes Challenge',
    activityTitleFr: 'Défi Comprends les impôts',
    activitySlug: 'march',
    description: 'Congratulations to these 20 students who learned about taxes and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont appris à propos des impôts et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: false,
    winners: []
  },
  {
    month: 'April',
    monthFr: 'Avril',
    year: 2026,
    slug: 'april',
    sponsorName: 'Tourism HR Canada',
    sponsorLogo: '/logo7.png',
    activityTitle: 'Tourism & Hospitality Challenge',
    activityTitleFr: 'Défi Tourisme et hospitalité',
    activitySlug: 'april',
    description: 'Congratulations to these 20 students who explored careers in tourism and hospitality and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont exploré les carrières en tourisme et hospitalité et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: false,
    winners: []
  },
  {
    month: 'May-1',
    monthFr: 'Mai-1',
    year: 2026,
    slug: 'may',
    sponsorName: 'HRAI',
    sponsorLogo: '/hvacr-career-connections.png',
    activityTitle: 'HVACR Industry Challenge',
    activityTitleFr: "Défi de l'industrie CVC&R",
    activitySlug: 'may',
    description: 'Congratulations to these 20 students who explored careers in HVACR and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont exploré les carrières en CVC&R et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: false,
    winners: []
  },
  {
    month: 'May-2',
    monthFr: 'Mai-2',
    year: 2026,
    slug: 'may-2',
    sponsorName: 'Jack.org',
    sponsorLogo: '/jack-logo.png',
    activityTitle: 'Be There Certificate Challenge',
    activityTitleFr: 'Défi Certificat Sois présent',
    activitySlug: 'may-2',
    description: 'Congratulations to these 20 students who learned to support mental health and received $500 microgrants for their outstanding video submissions.',
    descriptionFr: 'Félicitations à ces 20 élèves qui ont appris à soutenir la santé mentale et qui ont reçu des microbourses de 500 $ pour leurs excellentes soumissions vidéo.',
    enabled: false,
    winners: []
  }
];

// Helper functions
export function getEnabledMonths(): MonthRecipients[] {
  return allMonths.filter(month => month.enabled);
}

export function getRecipientsByMonth(slug: string): MonthRecipients | null {
  return allMonths.find(month => month.slug === slug) ?? null;
}

export function getAllRecipients(): MonthRecipients[] {
  return allMonths;
}

export function getMonthBySlug(slug: string): MonthRecipients | null {
  return allMonths.find(month => month.slug === slug) ?? null;
}
