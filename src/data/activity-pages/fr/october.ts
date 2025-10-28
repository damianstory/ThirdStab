import { ActivityPageData } from '../../activities';

// TODO: Replace English text content with French translations
// NOTE: Keep this file structure identical to en/october.ts for consistency

export const octoberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '1',
  month: 'October',
  year: '2025',
  title: 'Mining Industry Challenge', // TODO: Translate to French
  description: `With careers above and underground, in the field, in minerals processing and metallurgy facilities, laboratories, and offices - there's a place for you in mining.`, // TODO: Translate to French
  sponsor: {
    name: 'MiHR',
    logo: '/logo1.gif', // Sponsor logo stays the same
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
    // TODO: If you have a French-specific hero image, update this path
    // Example: backgroundImage: '/october-hero-fr.jpg'
    tagline: 'Discover Your Future in Mining', // TODO: Translate to French
    introText: `From underground operations to cutting-edge technology, the mining industry offers diverse career paths that power our modern world. Join the Mining Industry Human Resources Council (MiHR) to explore opportunities in one of Canada's most essential industries.` // TODO: Translate to French
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/WevQbV6TLv8', // Same video for EN/FR
    title: 'Mining Needs You', // TODO: Translate to French
    description: `Mining is essential to our way of life today and the world we want to create tomorrow.
    With careers above and underground, in the field, in minerals processing and metallurgy facilities, laboratories, and offices – there's a place for you in mining.` // TODO: Translate to French
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/JYiO_gkFqWM', // Same video for EN/FR
    title: 'How this Works - October Challenge' // TODO: Translate to French
  },

  explainer: {
    title: 'Challenge Overview', // TODO: Translate to French
    rows: [
      {
        label: 'Active Submission Period', // TODO: Translate to French
        content: 'October 1-31, 2025' // TODO: Translate month name if needed
      },
      {
        label: 'Eligibility', // TODO: Translate to French
        content: 'Grades 7-12 students across Canada' // TODO: Translate to French
      },
      {
        label: 'Total Incentives', // TODO: Translate to French
        content: '$10,000 in micro grants' // TODO: Translate to French
      },
      {
        label: 'Individual Awards', // TODO: Translate to French
        content: '20 winners × $500 each' // TODO: Translate to French
      },
      {
        label: 'Submission Deadline', // TODO: Translate to French
        content: 'October 31, 2025 at 11:59 PM EST' // TODO: Translate to French
      },
    ]
  },

  activityDetail: {
    description: 'The mining industry is at the forefront of technological innovation, environmental stewardship, and sustainable resource development.<br/><br/><strong>This challenge invites students to explore the diverse career pathways in mining</strong>, from traditional underground operations to modern data analytics and environmental sciences.', // TODO: Translate to French (includes HTML)
    steps: [
      {
        title: "Step 1 - Career Spotlight", // TODO: Translate to French
        details: "Start by identifying a specific role within the mining industry, for example: Environmental Scientist, Mining Engineer, Data Analyst, Technical Services Specialist, etc. There are MANY to choose from.\n\nYou can use the MiHR Resources below, and/or do your own research, but you need to be able to cite your sources.\n\nImportant: Select one specific role. Research it.\n\n<strong>Then explain what someone in that role is generally responsible for on a day to day basis.</strong>" // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 2 - Skills Focus", // TODO: Translate to French
        details: "<strong>Highlight 2-3 skills or competencies that are required in that role.</strong>\n\nThese could be transferable or durable skills like critical thinking, and/or more specific technical skills that are unique to the role." // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 3 - Pathways to Work", // TODO: Translate to French
        details: "<strong>Explain the potential post-secondary pathways and training options required to work in that position.</strong>\n\nFor example, does that role require an apprenticeship, college or university level education? Are there specific certifications that are required?" // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 4 - Sustainability Focus", // TODO: Translate to French
        details: "<strong>Describe specific actions the mining industry is taking as part of their commitment to sustainability and its importance to reaching Canada's environmental goals.</strong>\n\nFor example, integration of renewable energy and eco-friendly equipment, strategic investments in northern infrastructure, and strong collaboration with Indigenous communities to advance responsible land management and nature-positive goals, etc." // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 5 - Future Outlook", // TODO: Translate to French
        details: "MiHR's research shows 80,000 new workers are needed in the industry by 2030.\n\n<strong>Explain the outlook for the role you have identified. Where are the jobs in Canada? Is there a higher demand for it in one part of the country than another?</strong>" // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 6 - Submit", // TODO: Translate to French
        details: "<strong>Take the research you have just completed in steps 1-5 and use it to create a 60-90 second video.</strong>\n\nHow you choose to structure your video is up to you.\n\n• Vertical vs. horizontal? Up to you.\n• Talking head vs. all animations? Up to you.\n• Documentary style vs. tiktok style? Up to you.\n\nThe only requirements are that it addresses each of the 5 steps above, and we're able to click a link to watch it - everything else is - up to you.\n\nScore 75/100 or higher on the rubric, and you'll be entered into the pool of students who will then be randomly selected to earn one of twenty micro grants.\n\nSomebody has to win. Why not you? Why not now?" // TODO: Translate to French (includes HTML)
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Content & Accuracy', // TODO: Translate to French
        weight: 40,
        description: 'Comprehensive coverage of all 5 required steps with accurate, detailed information' // TODO: Translate to French
      },
      {
        category: 'Research & Citations', // TODO: Translate to French
        weight: 20,
        description: 'Quality sources properly cited throughout the video presentation' // TODO: Translate to French
      },
      {
        category: 'Engagement & Creativity', // TODO: Translate to French
        weight: 20,
        description: 'Compelling delivery that maintains viewer interest through creative presentation' // TODO: Translate to French
      },
      {
        category: 'Communication & Clarity', // TODO: Translate to French
        weight: 20,
        description: 'Clear audio/visuals with logical organization, smooth flow, and meets 60-90 second requirement' // TODO: Translate to French
      },
      {
        category: 'View Detailed Evaluation Rubric Here', // TODO: Translate to French
        weight: 0,
        description: '',
        isLink: true,
        // TODO: Update to French rubric URL when available
        url: 'https://claude.ai/public/artifacts/a00eb95e-7d81-4043-a3c5-781a040b4e05'
      }
    ],
    totalPoints: 100,
    // TODO: Update to French rubric URL when available
    detailedRubricUrl: 'https://claude.ai/public/artifacts/a00eb95e-7d81-4043-a3c5-781a040b4e05'
  },

  submission: {
    // TODO: Update to French SurveyMonkey form URL when available
    url: 'https://www.surveymonkey.com/r/K2W32NQ',
    deadline: new Date('2025-10-31T23:59:59-05:00'),
    instructions: 'Submit your completed presentation or infographic along with your written reflection through the Google Form. Ensure all files are properly named with your name and school.' // TODO: Translate to French
  },

  faqs: [
    {
      question: 'How does this October Activity challenge work?', // TODO: Translate to French
      answer: 'Carefully read the Activity Details steps 1-5 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.' // TODO: Translate to French
    },
    {
      question: 'What am I actually being asked to submit?', // TODO: Translate to French
      answer: `You're being asked to submit a 60 to 90 second video highlighting the research you did from steps 1 through 5 in this specific activity. It's important that the video you create is shared as a clickable link, not something that we need to download, and that you've made sure that the sharing settings are set up in a way that we have access to view the video. It's a good idea to test this before submitting.` // TODO: Translate to French
    },
    {
      question: 'Can I submit more than one video?', // TODO: Translate to French
      answer: `Yes, you can complete the activity multiple times for different roles within the mining industry, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.` // TODO: Translate to French
    },
    {
      question: 'Is there a preferred style for the video?', // TODO: Translate to French
      answer: `No, it's whatever feels authentic and engaging to you. It can be a Tik Tok style video with lots of different cuts and background music or more documentary style - whatever you will enjoy making more, and clearly communicates the requested information from steps 1-5.` // TODO: Translate to French
    },
    {
      question: 'Does it matter what tool I use to make the video?', // TODO: Translate to French
      answer: `Nope, it doesn't matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to be able to create videos with.` // TODO: Translate to French
    },
    {
      question: 'What skills will I be developing by doing this activity?', // TODO: Translate to French
      answer: `Lots of skills like research, critical thinking, communication, content creation, and many others. It would be a good idea to add the completed video to your myBlueprint portfolio and reflect on what skills you feel like you've developed as part of completing this activity.` // TODO: Translate to French
    },
    {
      question: 'Who is reviewing the submissions?', // TODO: Translate to French
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from MiHR.` // TODO: Translate to French
    },
    {
      question: 'Can students submit their videos in French?', // TODO: Translate to French
      answer: `All videos for this activity will need to be reviewed in English, so if a student wants to submit in French, we ask they include English subtitles in the video.` // TODO: Translate to French
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?', // TODO: Translate to French
      answer: `Depending on the volume of submissions, we plan to have selected, and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the October winners by mid-November.` // TODO: Translate to French
    },
    {
      question: 'Should I add these submissions to my portfolio in myBlueprint?', // TODO: Translate to French
      answer: `Yeah, that's a great idea, along with a reflection of what you learned from doing this activity and what you found interesting. As a heads up, we'll also be asking students to submit evidence of their completed activities through a myBlueprint portfolio if you plan on applying for one of the Series Completion incentives at the end of the year.` // TODO: Translate to French
    },
    {
      question: 'Do I need to do this in class, or can I just do this on my own?', // TODO: Translate to French
      answer: `You can absolutely complete this activity on your own. That being said, you should absolutely communicate with your teachers (and parents) that you're doing this and see if you can potentially earn credit for the work that you're doing for this activity.` // TODO: Translate to French
    },
    {
      question: 'Can I do this as a group project?', // TODO: Translate to French
      answer: `The October challenge has been designed as an individual activity.` // TODO: Translate to French
    },
    {
      question: 'Can I still submit the activity after the October 31st deadline?', // TODO: Translate to French
      answer: `Yes, you can still submit monthly activities after the deadline. However, any activity submitted after the deadline is not eligible for that month's pool of micro grants. It still makes sense to complete them even after the deadline so that you can potentially earn one of the Series Completion incentives. Those only require all activities to be completed, not necessarily completed within the month of the activity.` // TODO: Translate to French
    },
    {
      question: 'Will teachers be able to see who has submitted an entry?', // TODO: Translate to French
      answer: `Teachers won't be able to see through myBlueprint which students have submitted activities or not. However, we will create reports that will be shared with your myBlueprint lead at the school board level who can share specifics with you upon request.` // TODO: Translate to French
    },
    {
      question: 'What data is being collected and by who?', // TODO: Translate to French
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series.

Meaning that only myBlueprint is collecting any information related to this Series. No personally identifiable information is being shared with any 3rd parties.

We will publish de-identified (anonymous summary data) information to provide updates on how the Series is going. For example, the number of activity submissions received for each month, which province they're coming from, and communicate with our school board partners about school-specific participation.

<a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Click here to see the questions students are being asked</a> to answer when they submit their completed activity.` // TODO: Translate to French (includes HTML)
    }
  ],

  resources: [
    // TODO: Update resource URLs to French equivalents if available
    {
      title: 'Take a Quiz', // TODO: Translate to French
      description: 'Whatever your education level, find a career that suits you.', // TODO: Translate to French
      url: 'https://miningneedsyou.ca/#take-a-quiz', // TODO: Check if French version exists
      type: 'link'
    },
    {
      title: 'Career Seeker', // TODO: Translate to French
      description: 'A central hub designed to help you explore, plan, and advance your future in Canada\'s mining industry.', // TODO: Translate to French
      url: 'https://miningneedsyou.ca/mining-career-seeker-dashboard', // TODO: Check if French version exists
      type: 'link'
    },
    {
      title: 'Career Videos', // TODO: Translate to French
      description: 'Different videos about mining careers. Like Netflix for mining.', // TODO: Translate to French
      url: 'https://mihr.ca/resources/?resource-type=video&resource-category=careers', // TODO: Check if French version exists
      type: 'video'
    },
    {
      title: 'Workforce Map', // TODO: Translate to French
      description: 'This data visualization tool offers you a comprehensive look into evolving workforce needs.', // TODO: Translate to French
      url: 'https://analytics.mihr.ca/map/en/0/labour_force/total/Economic%20regions/total/1/Default', // TODO: Update URL (notice '/en/' in path)
      type: 'link'
    },
    {
      title: 'MiHR Resources', // TODO: Translate to French
      description: 'All of MiHR\'s resources.\nAll in one place.', // TODO: Translate to French
      url: 'https://mihr.ca/resources/?resource-category=national-outlook', // TODO: Check if French version exists
      type: 'link'
    },
    {
      title: 'Mining Needs You Career Resources', // TODO: Translate to French
      description: 'Find out where you can get started, based on your skills and interests.', // TODO: Translate to French
      url: 'https://miningneedsyou.ca/resources/', // TODO: Check if French version exists
      type: 'link'
    }
  ],

  meta: {
    title: 'Mining Industry Challenge - October 2025', // TODO: Translate to French
    description: 'Explore diverse career opportunities in Canada\'s mining industry with MiHR. Research mining careers, learn about sustainability, and win micro grants.', // TODO: Translate to French
    ogImage: '/logo1.gif' // Sponsor logo stays the same
  }
};
