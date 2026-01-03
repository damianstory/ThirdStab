import { SponsorPageData } from '../../sponsors';

export const zurichCanadaSponsor: SponsorPageData = {
  // Base sponsor information
  id: '5',
  name: 'Zurich Canada',
  logo: '/images/zurich-logo.png',
  incentiveType: 'activity',
  contribution: 'Activity: February 2026',
  slug: 'zurich-canada',

  // Extended page content
  hero: {
    tagline: 'Discover Careers in Risk Management & Insurance',
    introText: 'Zurich Canada and the Industry Immersion Series are partnering to help students explore careers in risk management and insurance. Complete the February activity and you could earn a $500 micro grant.'
  },

  about: {
    title: 'About Zurich Canada',
    description: `Zurich Canada helps protect people and communities by supporting the businesses you see every day — from your favourite local shop to major companies across the country.

We're problem-solvers who tackle big challenges like climate change, extreme weather, and community safety.

We're also here for the next generation — that's you!

We run programs that help students discover exciting career paths, build real-world skills, and make a difference in the world.

Whether you're into science, tech, helping people, or protecting the planet, there's a place for you in the work we do.`,
    industry: 'Risk Management & Insurance',
    website: 'https://www.zurich.ca'
  },

  partnership: {
    description: `In February 2026, Zurich Canada is sponsoring an activity where you'll learn how climate insurance works, why it's important, and discover the people involved in protecting Canadian infrastructure and communities from climate-related risks.

**Starting February 1st, 2026**, complete the activity and submit your work for a chance to be one of 20 students selected to receive a $500 micro grant.

Each monthly activity is assessed against a rubric specific to that challenge. Outstanding submissions receive recognition from our industry partners along with the micro grant.`,
    hideIcon: true,
    steps: [
      'Wait for the activity to launch on **February 1st, 2026**',
      'Complete the activity following the provided instructions and rubric',
      'Submit your completed work through the submission form by **February 28th, 2026**',
      '20 students will be selected to receive **$500 micro grants** for outstanding submissions'
    ]
  },

  faqs: [
    {
      question: 'How does this program work?',
      answer: 'Each month of this school year is being sponsored by a different company or industry association. By sponsoring that month, we create an opt-in activity that allows students to develop a skill and learn about careers in that industry. Each month\'s activity is a little bit different, but the idea is that students will complete the activity, submit evidence of completion, and be assessed against an individual rubric for that activity, with 20 students earning a micro grant of $500.'
    },
    {
      question: 'Is this only open to myBlueprint users?',
      answer: 'No. Any student across Canada is welcome and encouraged to participate.'
    },
    {
      question: 'What grade levels can participate?',
      answer: 'These activities have been designed for students across grades 7-12.'
    },
    {
      question: 'What if I miss the February deadline? Can I still complete the activity?',
      answer: 'Yes, you can still submit the activity after the deadline has passed. You won\'t be eligible for that month\'s pool of micro grants, but can still complete activities so that you are eligible for the Series Completion incentives at the end of the year.'
    },
    {
      question: 'How will students access these challenges?',
      answer: 'There will be a banner at the top of a student\'s myBlueprint account once logged in where they can click to access the Industry Immersion Series website and access all open challenges. You can also bookmark this page for easy reference.'
    },
    {
      question: 'Why micro grants as an incentive?',
      answer: 'The majority of education-related money available to young people today is reserved for scholarships. Scholarships are great, but not every student is going to post-secondary and not every role requires it. This money can help students build skills today that will put them in a better position to accomplish their goals, regardless of which direction they\'re interested in pursuing.'
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: 'Individual monthly activities are assessed against a rubric specific to that month\'s challenge. Our goal is to be able to announce the successful submissions by the midpoint of the following month.'
    },
    {
      question: 'Can students win more than one micro grant?',
      answer: 'You can\'t earn more than one micro grant within the same month; however, you can earn multiple micro grants across different months. For example, you could earn a micro grant in November and again in March. There\'s no maximum number of micro grants you can earn.'
    },
    {
      question: 'How will students receive the funds?',
      answer: 'The easiest method is by e-transfer, whether to a student\'s account or their parent/guardian. However, other methods may be needed and can be explored on a case-by-case basis.'
    },
    {
      question: 'What can students use the funds for?',
      answer: 'We encourage students to use the money toward skill development and career exploration related activities. For example, buying parts or equipment for a project they want to build, or attending an industry conference. However, it will be up to the students\' own discretion as to how they use their funds.'
    },
    {
      question: 'What data is being collected and by who?',
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series. This means only myBlueprint collects any information related to this Series. No personally identifiable information is being shared with any 3rd parties.

<a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Click here to see the questions students are being asked</a> to answer when they submit their completed activity.`
    }
  ],

  cta: {
    primaryLabel: 'Learn About Zurich Canada',
    primaryUrl: 'https://www.zurichcanada.com/en-ca/careers'
  },

  meta: {
    title: 'Zurich Canada | Industry Immersion Series Sponsor',
    description: 'Explore careers in risk management and insurance with Zurich Canada. Complete the February activity for a chance to earn a $500 micro grant.',
    ogImage: '/images/meta-preview.png'
  }
};
