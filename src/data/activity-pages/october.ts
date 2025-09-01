import { ActivityPageData } from '../activities';

export const octoberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '1',
  month: 'October',
  year: '2025',
  title: 'Mining Industry Challenge',
  description: `With careers above and underground, in the field, in minerals processing and metallurgy facilities, laboratories, and offices - there's a place for you in mining.`,
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
  slug: 'october',
  
  // Extended page content
  hero: {
    tagline: 'Discover Your Future in Mining',
    introText: `From underground operations to cutting-edge technology, the mining industry offers diverse career paths that power our modern world. Join MiHR to explore opportunities in one of Canada's most essential industries.`
  },
  
  video: {
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder URL
    title: 'Mining Needs You',
    description: `Mining is essential to our way of life today and the world we want to create tomorrow. 
    With careers above and underground, in the field, in minerals processing and metallurgy facilities, laboratories, and offices – there’s a place for you in mining.`
  },
  
  explainer: {
    title: 'Challenge Overview',
    rows: [
      {
        label: 'Active Submission Period',
        content: 'October 1-31, 2025'
      },
      {
        label: 'Eligibility',
        content: 'Grades 7-12 students across Canada'
      },
      {
        label: 'Total Incentives',
        content: '$10,000 in micro grants'
      },
      {
        label: 'Individual Awards',
        content: '20 winners × $500 each'
      },
      {
        label: 'Submission Deadline',
        content: 'October 31, 2025 at 11:59 PM EST'
      },
    ]
  },
  
  activityDetail: {
    description: 'The mining industry is at the forefront of technological innovation, environmental stewardship, and sustainable resource development. This challenge invites students to explore the diverse career pathways in mining, from traditional underground operations to modern data analytics and environmental sciences.',
    requirements: [
      'Research a specific mining career that interests you',
      'Create a presentation or infographic about your chosen career',
      'Include information about education requirements, day-to-day tasks, and career progression',
      'Explain how this career contributes to sustainable mining practices',
      'Submit your work through the provided Google Form'
    ],
    deliverables: [
      'A 3-5 minute presentation video OR a detailed infographic',
      'Written reflection (300-500 words) on why this career appeals to you',
      'List of sources used in your research (minimum 3 credible sources)'
    ]
  },
  
  rubric: {
    criteria: [
      {
        category: 'Research Quality',
        weight: 30,
        description: 'Depth and accuracy of career information gathered'
      },
      {
        category: 'Presentation',
        weight: 25,
        description: 'Clarity and creativity of deliverable format'
      },
      {
        category: 'Sustainability Focus',
        weight: 20,
        description: 'Understanding of environmental and sustainable practices'
      },
      {
        category: 'Personal Reflection',
        weight: 15,
        description: 'Thoughtful analysis of personal career interests'
      },
      {
        category: 'Sources & Citations',
        weight: 10,
        description: 'Quality and proper citation of research sources'
      }
    ],
    totalPoints: 100
  },
  
  submission: {
    googleFormUrl: 'https://forms.google.com/placeholder-october-form',
    deadline: new Date('2025-10-31T23:59:59-05:00'),
    instructions: 'Submit your completed presentation or infographic along with your written reflection through the Google Form. Ensure all files are properly named with your name and school.'
  },
  
  faqs: [
    {
      question: 'What mining careers can I research?',
      answer: 'You can explore any career in the mining industry, including: mining engineers, geologists, environmental scientists, heavy equipment operators, safety specialists, data analysts, metallurgists, and mine planners.'
    },
    {
      question: 'Can I work in a group?',
      answer: `This is an individual challenge. Each student must submit their own unique research and presentation, but you're encouraged to discuss ideas with classmates and teachers.`
    },
    {
      question: 'What format should my presentation be?',
      answer: 'You can choose between a 3-5 minute video presentation or a detailed infographic. Both formats should cover all the required elements outlined in the deliverables section.'
    },
    {
      question: 'How will winners be selected?',
      answer: 'Submissions will be evaluated by MiHR industry professionals using the provided rubric. Winners will be selected based on research quality, presentation clarity, and understanding of sustainable mining practices.'
    },
    {
      question: 'When will results be announced?',
      answer: 'Winners will be announced in the first week of November 2025. All participants will receive participation certificates, and winners will be contacted directly about their micro grants.'
    }
  ],
  
  resources: [
    {
      title: 'Mining Careers Guide',
      description: 'Comprehensive overview of career paths in the Canadian mining industry',
      url: 'https://mihr.ca/careers',
      type: 'pdf'
    },
    {
      title: 'Sustainable Mining Practices',
      description: 'Learn about environmental stewardship in modern mining operations',
      url: 'https://mihr.ca/sustainability',
      type: 'article'
    },
    {
      title: 'Mining Technology Innovations',
      description: 'Discover cutting-edge technologies transforming the mining industry',
      url: 'https://mihr.ca/innovation',
      type: 'video'
    },
    {
      title: 'Education Pathways',
      description: 'Find programs and schools that can prepare you for a mining career',
      url: 'https://mihr.ca/education',
      type: 'link'
    },
    {
      title: 'Safety in Mining',
      description: 'Understanding safety protocols and careers in mine safety',
      url: 'https://mihr.ca/safety',
      type: 'pdf'
    },
    {
      title: 'Women in Mining',
      description: 'Stories and opportunities for women in the mining industry',
      url: 'https://mihr.ca/women-in-mining',
      type: 'article'
    }
  ],
  
  meta: {
    title: 'Mining Industry Challenge - October 2025',
    description: 'Explore diverse career opportunities in Canada\'s mining industry with MiHR. Research mining careers, learn about sustainability, and win micro grants.',
    ogImage: '/logo1.gif'
  }
};