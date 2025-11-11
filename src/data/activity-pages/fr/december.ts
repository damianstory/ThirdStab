import { ActivityPageData } from '../../activities';

export const decemberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '3',
  month: 'December',
  year: '2025',
  title: 'Agriculture Career<br>Exploration Challenge',
  description: `Explore career opportunities in agriculture, food production, and sustainable food systems with thinkAG.`,
  sponsor: {
    name: 'thinkAG',
    logo: '/thinkag-logo.png',
    logoType: 'square'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'december',

  // Extended page content
  hero: {
    backgroundImage: '/december-hero.jpg',
    tagline: 'Discover Your Future in Agriculture',
    introText: `From farm to table, the agriculture and food systems sector offers diverse career paths that feed our communities and sustain our planet. Partner with thinkAG to explore opportunities in one of Canada's most vital industries.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/placeholder',
    title: 'Careers in Agriculture',
    description: `Agriculture and food systems are essential to our communities and economy. With careers in farming, food science, agribusiness, research, technology, and sustainability – there's a place for you in agriculture.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/JYiO_gkFqWM',
    title: 'How this Works - December Challenge'
  },

  explainer: {
    title: 'Challenge Overview',
    rows: [
      {
        label: 'Active Submission Period',
        content: 'December 1-31, 2025'
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
        content: 'December 31, 2025 at 11:59 PM EST'
      },
    ]
  },

  activityDetail: {
    description: 'The agriculture and food systems sector is at the forefront of innovation, sustainability, and community development.<br/><br/><strong>This challenge invites students to explore the diverse career pathways in agriculture</strong>, from traditional farming practices to modern food technology and environmental stewardship.',
    steps: [
      {
        title: "Step 1 - Career Spotlight",
        details: "Start by identifying a specific role within the agriculture and food systems sector, for example: Agricultural Scientist, Food Technologist, Farm Manager, Sustainability Coordinator, etc. There are MANY to choose from.\n\nYou can use the thinkAG Resources below, and/or do your own research, but you need to be able to cite your sources.\n\nImportant: Select one specific role. Research it.\n\n<strong>Then explain what someone in that role is generally responsible for on a day to day basis.</strong>"
      },
      {
        title: "Step 2 - Skills Focus",
        details: "<strong>Highlight 2-3 skills or competencies that are required in that role.</strong>\n\nThese could be transferable or durable skills like problem-solving and communication, and/or more specific technical skills that are unique to the role."
      },
      {
        title: "Step 3 - Pathways to Work",
        details: "<strong>Explain the potential post-secondary pathways and training options required to work in that position.</strong>\n\nFor example, does that role require an apprenticeship, college or university level education? Are there specific certifications that are required?"
      },
      {
        title: "Step 4 - Innovation & Sustainability",
        details: "<strong>Describe specific innovations or sustainable practices being implemented in the agriculture sector and their importance to Canada's food security and environmental goals.</strong>\n\nFor example, precision agriculture technology, sustainable farming methods, local food systems development, waste reduction initiatives, etc."
      },
      {
        title: "Step 5 - Future Outlook",
        details: "The agriculture sector continues to grow with increasing demand for skilled professionals.\n\n<strong>Explain the outlook for the role you have identified. Where are the jobs in Canada? Is there a higher demand for it in one part of the country than another?</strong>"
      },
      {
        title: "Step 6 - Submit",
        details: "<strong>Take the research you have just completed in steps 1-5 and use it to create a 60-90 second video.</strong>\n\nHow you choose to structure your video is up to you.\n\n• Vertical vs. horizontal? Up to you.\n• Talking head vs. all animations? Up to you.\n• Documentary style vs. tiktok style? Up to you.\n\nThe only requirements are that it addresses each of the 5 steps above, and we're able to click a link to watch it - everything else is - up to you.\n\nScore 75/100 or higher on the rubric, and you'll be entered into the pool of students who will then be randomly selected to earn one of twenty micro grants.\n\nSomebody has to win. Why not you? Why not now?"
      }
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
        url: 'https://claude.ai/public/artifacts/placeholder-december-rubric'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/placeholder-december-rubric'
  },

  submission: {
    url: 'https://www.surveymonkey.com/r/placeholder-december',
    deadline: new Date('2025-12-31T23:59:59-05:00'),
    instructions: 'Submit your completed video presentation through the form. Ensure your video link is properly shared with viewing permissions enabled.'
  },

  faqs: [
    {
      question: 'How does this December Activity challenge work?',
      answer: 'Carefully read the Activity Details steps 1-5 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 60 to 90 second video highlighting the research you did from steps 1 through 5 in this specific activity. It's important that the video you create is shared as a clickable link, not something that we need to download, and that you've made sure that the sharing settings are set up in a way that we have access to view the video. It's a good idea to test this before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can complete the activity multiple times for different roles within the agriculture sector, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.`
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
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from thinkAG.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `All videos for this activity will need to be reviewed in English, so if a student wants to submit in French, we ask they include English subtitles in the video.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected, and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the December winners by mid-January.`
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
      answer: `The December challenge has been designed as an individual activity.`
    },
    {
      question: 'Can I still submit the activity after the December 31st deadline?',
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
      title: 'thinkAG Career Hub',
      description: 'Explore career opportunities in agriculture and food systems.',
      url: 'https://thinkag.ca/en-ca/',
      type: 'link'
    },
    {
      title: 'Agriculture Career Videos',
      description: 'Watch videos about different careers in the agriculture sector.',
      url: 'https://thinkag.ca/en-ca/',
      type: 'video'
    },
    {
      title: 'Farm to Table Careers',
      description: 'Learn about the diverse pathways from production to consumption.',
      url: 'https://thinkag.ca/en-ca/',
      type: 'link'
    },
    {
      title: 'Sustainable Agriculture Resources',
      description: 'Discover innovative and sustainable farming practices.',
      url: 'https://thinkag.ca/en-ca/',
      type: 'link'
    },
    {
      title: 'thinkAG Resources',
      description: 'Access all thinkAG educational resources and career information.',
      url: 'https://thinkag.ca/en-ca/',
      type: 'link'
    },
    {
      title: 'Food Systems & Innovation',
      description: 'Explore how technology is transforming agriculture and food production.',
      url: 'https://thinkag.ca/en-ca/',
      type: 'link'
    }
  ],
  resourcesTitle: 'thinkAG Resources',
  resourcesSubtitle: 'Explore these resources to support your activity research',

  meta: {
    title: 'Agriculture & Food Systems Challenge - December 2025',
    description: 'Explore diverse career opportunities in Canada\'s agriculture and food systems sector with thinkAG. Research agricultural careers, learn about sustainability, and win micro grants.',
    ogImage: '/thinkag-logo.png'
  }
};
