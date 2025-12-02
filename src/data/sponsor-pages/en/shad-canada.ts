import { SponsorPageData } from '../../sponsors';

export const shadCanadaSponsor: SponsorPageData = {
  // Base sponsor information
  id: '24',
  name: 'Shad Canada',
  logo: '/images/sponsor-profiles/shad-canada.png',
  incentiveType: 'completion',
  contribution: 'Empowering young Canadians to become change-makers through STEAM education',
  slug: 'shad-canada',

  // Extended page content
  hero: {
    tagline: 'Where Big Ideas Come To Life',
    introText: 'Shad Canada is a registered charity that empowers exceptional high school students to recognize their own capabilities and envision their potential as tomorrow\'s leaders and change-makers.'
  },

  about: {
    description: 'Shad offers a suite of immersive programs designed to ignite curiosity, build confidence, and prepare students in Grades 10 and 11 to thrive in a fast-changing world.\n\nEvery Shad program follows a balanced design—blending hands-on STEAM and entrepreneurship projects, vibrant community-building experiences, and real-world design challenges. Beyond classroom-based projects, participants also take part in unforgettable excursions that spark discovery and showcase the wonders of Canada\'s nature and heritage.\n\nWhether you\'re looking to explore a new campus, connect face-to-face with peers, or challenge yourself digitally, every Shad program provides the same rigorous learning, collaborative problem-solving, and national network of like-minded youth.',
    industry: 'Education & Youth Development',
    website: 'https://www.shad.ca'
  },

  partnership: {
    description: 'As a Series Completion Partner, Shad Canada recognizes students who demonstrate exceptional commitment to career exploration throughout the Industry Immersion Series. Completing the full series shows the kind of initiative and curiosity that Shad looks for in their program applicants.',
    incentiveDescription: 'Shad Canada may offer priority consideration or special recognition for Industry Immersion Series completers who apply to their summer programs.',
    steps: [
      'Submit the October, November & December activities **before January 5th, 2026**',
      'Indicate your interest to apply for one of the Shad Canada 2026 Program Entrance Scholarships',
      'January 7th | Winners announced',
      'January 23rd | Deadline for recipients to complete content portion of the SHAD application',
      'If selected, continue completing all remaining Industry Immersion Series activities by school year-end'
    ],
    incentiveSteps: [
      'Submit all 9 Industry Immersion activities **before May 30, 2026**',
      'Your participation is tracked automatically. If you are in grade 7, 8, 9 and you complete all 9 monthly activities, you will be automatically entered to win a future Entrance Scholarship',
      'In June 2026, one winner per grade will be selected',
      'Your scholarship covers a future SHAD program, not 2026.'
    ]
  },

  careerResources: [
    {
      title: 'Shad Summer Program',
      description: 'Learn about the transformative month-long summer program for grades 10-12 students.',
      url: 'https://www.shad.ca/shad-summer-program/',
      type: 'link'
    },
    {
      title: 'Application Information',
      description: 'Find out how to apply and what Shad looks for in applicants.',
      url: 'https://www.shad.ca/apply/',
      type: 'link'
    },
    {
      title: 'Alumni Stories',
      description: 'Discover where Shad alumni have gone and what they\'ve accomplished.',
      url: 'https://www.shad.ca/alumni/',
      type: 'article'
    }
  ],

  incentiveCard: {
    label: 'Series Completion Incentive',
    value: '5x Entrance Scholarships'
  },

  deadlines: [
    {
      label: 'Deadline 1: Grade 10, 11',
      date: 'January 7th, 2026'
    },
    {
      label: 'Deadline 2: Grade 7, 8, 9',
      date: 'May 30th, 2026'
    }
  ],

  faqs: [
    {
      question: 'What is the Shad summer program?',
      answer: 'The Shad summer program is a month-long enrichment experience held at university campuses across Canada. Students engage in STEAM workshops, entrepreneurship challenges, and personal development activities while building lifelong connections with peers and mentors.'
    },
    {
      question: 'What is an Entrance Scholarship to Shad?',
      answer: 'An Entrance Scholarship is equivalent to a full-ride scholarship. So, with an Entrance Scholarship you will be able to attend either an in-person or virtual summer program at no cost to you.'
    },
    {
      question: 'What is a day at Shad like?',
      answer: 'https://www.youtube.com/embed/gjzTnm9QgU4'
    },
    {
      question: 'Who can apply to Shad?',
      answer: 'Shad accepts applications from students in grades 10 and 11 from across Canada. The program looks for curious, engaged students who want to make a difference in their communities and beyond.'
    },
    {
      question: 'Can I apply now?',
      answer: 'Yes, applications are open now. You can apply now at: https://www.shad.ca/apply/\n\nYou can indicate in your application that you\'re also participating in the Industry Immersion Series incentive opportunity.\n\nApply before Dec. 15 for a chance to win a lunch with Shad CEO, Tim Jackson.'
    },
    {
      question: 'Does completing the Industry Immersion Series help with Shad applications?',
      answer: 'While Shad evaluates each application holistically, completing the Industry Immersion Series demonstrates initiative, curiosity about career pathways, and commitment to personal growth; all qualities that align with what Shad looks for in applicants.'
    },
    {
      question: 'What is the Industry Immersion Series?',
      answer: '• Each month, a new industry partner releases a skill-building challenge designed to introduce students to occupations and opportunities in their industry.\n\n• Students individually work on the challenge, developing awareness of industry opportunities, relevant skills, post-secondary pathways, and more.\n\n• Completed work is submitted and assessed against a rubric for review by the selection committee. Twenty submissions will be selected each month.\n\n• Outstanding submissions receive micro grants and recognition from industry partners. $10,000 in micro grants are awarded EACH month, with extra participation incentives available for students, educators, and schools.\n\nClick the myBlueprint logo in the top left of this page to learn more.'
    }
  ],

  cta: {
    primaryLabel: 'Visit Shad Canada',
    primaryUrl: 'https://www.shad.ca',
    secondaryLabel: 'Apply to Shad',
    secondaryUrl: 'https://www.shad.ca/apply/'
  },

  meta: {
    title: 'Shad Canada | Industry Immersion Series Sponsor',
    description: 'Learn about Shad Canada, a Series Completion Partner for the Industry Immersion Series, empowering young Canadians through STEAM education and entrepreneurship.',
    ogImage: '/images/sponsors/shad-canada-og.png'
  }
};
