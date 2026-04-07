import { ActivityPageData } from '../../activities';

// Export uses camelCase (may1Activity) since 'may-1Activity' isn't a valid identifier
export const may1Activity: ActivityPageData = {
  // Base activity information (from activities.ts)
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
  slug: 'may-1',

  // Extended page content
  hero: {
    backgroundImage: '/images/may-hero.jpg', // TODO: Replace with hero image from HRAI (without text overlay blocks)
    backgroundPosition: 'center top',
    tagline: 'Discover the High-Demand Careers Powering Canada\'s Buildings and Climate Future',
    introText: `Heating, ventilation, air conditioning, and refrigeration (HVACR) is one of the fastest-growing trades in Canada — and it's about much more than fixing furnaces. From designing energy-efficient buildings to installing heat pumps that fight climate change, HVACR professionals are at the forefront of Canada's green transition.\n\nIn this challenge, you'll research a real HVACR company in your community, spotlight a specific career in the industry, and explore how HVACR technology is shaping a more sustainable future. Along the way, you'll discover a high-demand career path you may not have known existed.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/IBeLJ33OCoc',
    title: 'About HVACR Careers',
    description: `Watch this video to discover why the HVACR sector is an essential, $4 billion industry offering flexible, hands-on, and high-paying career paths. Whether you aspire to be a technician, engineer, or even your own boss, explore how you can quickly enter the workforce and solve real-world problems.`
  },

  howThisWorksVideo: {
    embedUrl: '', // TODO: Replace with How This Works video once created
    title: 'How this Works - May Challenge'
  },

  explainer: {
    title: 'Challenge Overview',
    rows: [
      {
        label: 'Active Submission Period',
        content: 'May 1-31, 2026'
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
        content: 'May 31, 2026 at 11:59 PM EDT'
      }
    ]
  },

  activityDetail: {
    description: `Canada needs tens of thousands more HVACR professionals in the coming years — and the career opportunities go far beyond what most people imagine. <strong>In this challenge, you'll research a real HVACR company in your community, spotlight a specific career role, and explore how HVACR technology is driving environmental progress.</strong>`,
    steps: [
      {
        title: "Step 1: Research a Local HVACR Company",
        details: `<strong>Find and feature at least one HVACR company in your community.</strong>

Your research should cover:
• What does this company do? (installation, service, manufacturing, design, etc.)
• What types of HVACR systems do they work with?
• How long have they been in your area?
• What kinds of roles do they hire for?

<strong>Where to look:</strong>
• Search online for HVACR, heating, cooling, or refrigeration companies in your city or town
• Ask family, friends, or neighbours if they know a local HVACR company
• Check the HRAI resources below for directories and career information

The goal is to show that real HVACR companies exist in communities across Canada — maybe even right down the street from you.`
      },
      {
        title: "Step 2: Spotlight an HVACR Career",
        details: `<strong>Choose a specific HVACR role and go deep on what it involves.</strong>

Your career spotlight should include:
• <strong>What they do day-to-day</strong> — What does a typical workday look like in this role?
• <strong>Skills required</strong> — What technical and interpersonal skills are needed?
• <strong>Training & education pathway</strong> — What certifications, apprenticeships, or schooling does it take to get there?
• <strong>Earning potential</strong> — What can someone expect to earn in this role?

<strong>Bonus points:</strong> If you can connect with and interview an actual HVACR professional — even a brief conversation — it will make your video stand out.

Examples of HVACR roles to explore: service technician, refrigeration mechanic, HVAC designer, energy auditor, sales representative, building automation specialist, sheet metal worker, project manager, business owner.`
      },
      {
        title: "Step 3: Technology & Environmental Impact",
        details: `<strong>Explain one piece of HVACR technology and how it connects to environmental and climate goals.</strong>

Choose a technology like:
• <strong>Heat pumps</strong> — How do they work? Why are they seen as key to reducing carbon emissions?
• <strong>Smart HVAC systems</strong> — How does automation and IoT improve energy efficiency in buildings?
• <strong>Modern refrigerants</strong> — Why is the industry moving away from older refrigerants? What's replacing them?
• <strong>Geothermal systems</strong> — How do they use the earth's natural temperature for heating and cooling?

Then connect it to the bigger picture:
• How is the HVACR industry contributing to Canada's climate goals?
• What role does HVACR play in making buildings more energy efficient?
• Why does this create even more demand for skilled HVACR professionals?`
      },
      {
        title: "Step 4: Future Outlook",
        details: `<strong>Show where the demand is for HVACR professionals in your region.</strong>

Use the resources below (Job Bank, HRAI website, and others) to answer:
• Is there a projected labour shortage in HVACR? How many professionals are needed?
• Where are the jobs? Are there openings in your province or city?
• What's driving the demand? (aging workforce, new construction, green retrofits, climate policy)

The goal is to demonstrate that HVACR isn't just a good career — it's an in-demand career with real job opportunities available right now and into the future.`
      },
      {
        title: "Step 5: Create Your Video & Submit",
        details: `<strong>Record a 90-120 second video covering Steps 1-4.</strong>

Your video should walk through:
• The local HVACR company you researched
• The career role you're spotlighting
• The technology and its environmental impact
• The future outlook and demand for HVACR professionals

<strong>Format is flexible:</strong>
• Talking head, animation, documentary style, vlog — whatever works for you
• Vertical or horizontal — your choice
• Props, photos, or footage of your local HVACR company are encouraged
• You don't have to show your face if you prefer voice-over with visuals

<strong>Video length: 90-120 seconds (1.5-2 minutes)</strong>

Before submitting, review your video:

✓ Did you feature a real local HVACR company?
✓ Did you spotlight a specific career role with real detail?
✓ Did you explain an HVACR technology and its environmental connection?
✓ Did you address the future demand for HVACR professionals?
✓ Is your video between 90-120 seconds?

<strong>Make sure your video link has proper sharing settings</strong> — test it in an incognito browser window before submitting.`
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Content & Accuracy',
        weight: 25,
        description: 'Comprehensive coverage of all required elements with accurate, detailed information'
      },
      {
        category: 'Local Connection & Career Research',
        weight: 25,
        description: 'Real local company featured and specific career role explored with depth and detail'
      },
      {
        category: 'Engagement & Creativity',
        weight: 25,
        description: 'Compelling delivery that maintains viewer interest through creative presentation'
      },
      {
        category: 'Communication & Clarity',
        weight: 25,
        description: 'Clear audio/visuals with logical organization, smooth flow, and meets 90-120 second requirement'
      },
      {
        category: 'View Detailed Evaluation Rubric Here',
        weight: 0,
        description: '',
        isLink: true,
        url: '' // TODO: Replace with detailed rubric URL once created
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: '' // TODO: Replace with detailed rubric URL once created
  },

  submission: {
    url: '', // TODO: Replace with SimpleSurvey submission form URL
    deadline: new Date('2026-05-31T23:59:59-04:00'),
    instructions: 'Submit your HVACR Industry Challenge video for the May challenge. Make sure your video link is accessible (test in incognito mode) before submitting.'
  },

  faqs: [
    {
      question: 'How does this May Activity challenge work?',
      answer: 'Carefully read the Activity Details steps 1-5 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 90-120 second video highlighting the research you did from steps 1 through 4. Your video should cover: a local HVACR company, a specific career spotlight, an HVACR technology and its environmental impact, and the future demand for HVACR professionals. Make sure your video link has proper sharing settings — test it in an incognito browser window before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can complete the activity multiple times exploring different HVACR companies or careers, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.`
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: `No, it's whatever feels authentic and engaging to you. It can be a TikTok style video with lots of different cuts and background music or more documentary style — whatever you will enjoy making more, and clearly communicates the requested information from steps 1-4.`
    },
    {
      question: 'Does it matter what tool I use to make the video?',
      answer: `Nope, it doesn't matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to be able to create videos with.`
    },
    {
      question: 'What skills will I be developing by doing this activity?',
      answer: `Lots of skills like research, critical thinking, communication, content creation, and career exploration. You'll also learn about trades career pathways, environmental technology, and labour market trends. It would be a good idea to add the completed video to your myBlueprint portfolio and reflect on what skills you feel like you've developed.`
    },
    {
      question: 'Who is reviewing the submissions?',
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from HRAI.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `Yes, videos will be accepted in either English or French.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the May winners by mid-June.`
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
      answer: `The HVACR Industry Challenge has been designed as an individual activity.`
    },
    {
      question: 'Can I still submit the activity after the May 31st deadline?',
      answer: `Yes, you can still submit monthly activities after the deadline. However, any activity submitted after the deadline is not eligible for that month's pool of micro grants. It still makes sense to complete them even after the deadline so that you can potentially earn one of the Series Completion incentives. Those only require all activities to be completed, not necessarily completed within the month of the activity.`
    },
    {
      question: 'Will teachers be able to see who has submitted an entry?',
      answer: `Teachers won't be able to see through myBlueprint which students have submitted activities or not. However, we will create reports that will be shared with your myBlueprint lead at the school board level who can share specifics with you upon request.`
    },
    {
      question: 'What data is being collected and by who?',
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series. Meaning that only myBlueprint is collecting any information related to this Series. No personally identifiable information is being shared with any third parties. We will publish de-identified (anonymous summary data) information to provide updates on how the series is going. For example, the number of activity submissions received for each month, which province they're coming from, and communicate with our school board partners about school-specific participation. <a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Click here to see the questions students are being asked</a> to answer when they submit their completed activity.`
    }
  ],

  resources: [
    // TODO: Replace/update these resources once Andrew sends the final links
    {
      title: 'HRAI: HVACR Career Connections',
      description: 'Explore careers in heating, ventilation, air conditioning, and refrigeration across Canada.',
      url: 'https://www.hrai.ca/hvacr-career-connections', // TODO: Confirm exact URL
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'HVACR Career Quiz', // TODO: Replace with actual MS Forms quiz link from Andrew
      description: 'Take this interactive quiz to discover which HVACR career might be the right fit for you.',
      url: '', // TODO: Replace with MS Forms quiz URL from Andrew
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Job Bank: HVACR Technician Outlook',
      description: 'See job prospects, wages, and labour market trends for HVACR professionals across Canada.',
      url: 'https://www.jobbank.gc.ca/marketreport/outlook-occupation/17548/ca', // TODO: Confirm Job Bank URL
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    }
  ],
  resourcesTitle: 'HRAI & Career Resources',
  resourcesSubtitle: 'Use these resources to support your research on HVACR careers and companies',

  meta: {
    title: 'HVACR Industry Challenge - May 2026 | Industry Immersion Series',
    description: 'Research a local HVACR company, spotlight an in-demand career, and explore how HVACR technology is driving Canada\'s green future. Win up to $500 in micro grants with HRAI.',
    ogImage: '/hvacr-career-connections.png'
  }
};
