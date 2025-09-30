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
    introText: `From underground operations to cutting-edge technology, the mining industry offers diverse career paths that power our modern world. Join the Mining Industry Human Resources Council (MiHR) to explore opportunities in one of Canada's most essential industries.`
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
    description: 'The mining industry is at the forefront of technological innovation, environmental stewardship, and sustainable resource development.<br/><br/><strong>This challenge invites students to explore the diverse career pathways in mining</strong>, from traditional underground operations to modern data analytics and environmental sciences.',
    requirements: [
      'Research a specific mining career that interests you',
      'Create a presentation or infographic about your chosen career',
      'Include information about education requirements, day-to-day tasks, and career progression',
      'Explain how this career contributes to sustainable mining practices',
      'Submit your work through the provided Google Form',
      '<a href="https://www.surveymonkey.com/r/K2W32NQ" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Submit your video before the end of the day on October 31st here.</a>'
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
        category: 'Content & Accuracy',
        weight: 40,
        description: 'Comprehensive coverage of all 5 required steps with accurate, detailed information'
      },
      {
        category: 'Research & Citations',
        weight: 20,
        description: 'Quality sources properly cited throughout the video presentation'
      },
      {
        category: 'Engagement & Creativity',
        weight: 20,
        description: 'Compelling delivery that maintains viewer interest through creative presentation'
      },
      {
        category: 'Communication & Clarity',
        weight: 20,
        description: 'Clear audio/visuals with logical organization, smooth flow, and meets 60-90 second requirement'
      },
      {
        category: 'View Detailed Evaluation Rubric Here',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/a9e7a244-0594-4771-8b98-d876121df6c9'
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
      question: 'How does this October Activity challenge work?',
      answer: 'Carefully read the Activity Details steps 1-5 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 60 to 90 second video highlighting the research you did from steps 1 through 5 in this specific activity. It's important that the video you create is shared as a clickable link, not something that we need to download, and that you've made sure that the sharing settings are set up in a way that we have access to view the video. It's a good idea to test this before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can complete the activity multiple times for different roles within the mining industry, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.`
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: `No, it's whatever feels authentic and engaging to you. It can be a Tik Tok style video with lots of different cuts and background music or more documentary style - whatever you will enjoy making more, and clearly communicates the requested information from steps 1-5.`
    },
    {
      question: 'Does it matter what tool I use to make the video?',
      answer: `Nope, it doesn't matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to be able to create videos with.`
    },
    {
      question: 'What skills will I be developing by doing this activity?',
      answer: `Lots of skills like research, critical thinking, communication, content creation, and many others. It would be a good idea to add the completed video to your myBlueprint portfolio and reflect on what skills you feel like you've developed as part of completing this activity.`
    },
    {
      question: 'Who is reviewing the submissions?',
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from MiHR.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `All videos for this activity will need to be reviewed in English, so if a student wants to submit in French, we ask they include English subtitles in the video.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected, and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the October winners by mid-November.`
    },
    {
      question: 'Should I add these submissions to my portfolio in myBlueprint?',
      answer: `Yeah, that's a great idea, along with a reflection of what you learned from doing this activity and what you found interesting. As a heads up, we'll also be asking students to submit evidence of their completed activities through a myBlueprint portfolio if you plan on applying for one of the Series Completion incentives at the end of the year.`
    },
    {
      question: 'Do I need to do this in class, or can I just do this on my own?',
      answer: `You can absolutely complete this activity on your own. That being said, you should absolutely communicate with your teachers (and parents) that you're doing this and see if you can potentially earn credit for the work that you're doing for this activity.`
    },
    {
      question: 'Can I do this as a group project?',
      answer: `The October challenge has been designed as an individual activity.`
    },
    {
      question: 'Can I still submit the activity after the October 31st deadline?',
      answer: `Yes, you can still submit monthly activities after the deadline. However, any activity submitted after the deadline is not eligible for that month's pool of micro grants. It still makes sense to complete them even after the deadline so that you can potentially earn one of the Series Completion incentives. Those only require all activities to be completed, not necessarily completed within the month of the activity.`
    },
    {
      question: 'Will teachers be able to see who has submitted an entry?',
      answer: `Teachers won't be able to see through myBlueprint which students have submitted activities or not. However, we will create reports that will be shared with your myBlueprint lead at the school board level who can share specifics with you upon request.`
    },
    {
      question: 'What data is being collected and by who?',
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series.

Meaning that only myBlueprint is collecting any information related to this Series. No personally identifiable information is being shared with any 3rd parties.

We will publish de-identified (anonymous summary data) information to provide updates on how the Series is going. For example, the number of activity submissions received for each month, which province they're coming from, and communicate with our school board partners about school-specific participation.

<a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Click here to see the questions students are being asked</a> to answer when they submit their completed activity.`
    }
  ],
  
  resources: [
    {
      title: 'Take a Quiz',
      description: 'Whatever your education level, find a career that suits you.',
      url: 'https://miningneedsyou.ca/#take-a-quiz',
      type: 'link'
    },
    {
      title: 'Career Seeker',
      description: 'A central hub designed to help you explore, plan, and advance your future in Canada\'s mining industry.',
      url: 'https://miningneedsyou.ca/mining-career-seeker-dashboard',
      type: 'link'
    },
    {
      title: 'Career Videos',
      description: 'Different videos about mining careers. Like Netflix for mining.',
      url: 'https://mihr.ca/resources/?resource-type=video&resource-category=careers',
      type: 'video'
    },
    {
      title: 'Workforce Map',
      description: 'This data visualization tool offers you a comprehensive look into evolving workforce needs.',
      url: 'https://analytics.mihr.ca/map/en/0/labour_force/total/Economic%20regions/total/1/Default',
      type: 'link'
    },
    {
      title: 'MiHR Resources',
      description: 'All of MiHR\'s resources.\nAll in one place.',
      url: 'https://mihr.ca/resources/?resource-category=national-outlook',
      type: 'link'
    },
    {
      title: 'Mining Needs You Career Resources',
      description: 'Find out where you can get started, based on your skills and interests.',
      url: 'https://miningneedsyou.ca/resources/',
      type: 'link'
    }
  ],
  
  meta: {
    title: 'Mining Industry Challenge - October 2025',
    description: 'Explore diverse career opportunities in Canada\'s mining industry with MiHR. Research mining careers, learn about sustainability, and win micro grants.',
    ogImage: '/logo1.gif'
  }
};