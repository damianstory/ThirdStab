import { ActivityPageData } from '../../activities';

export const novemberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '2',
  month: 'November',
  year: '2025',
  title: 'Skilled Career Exploration Challenge',
  description: `Explore Canada's Skills for Success: nine skills that can set workers up for success with work, learning, and life – no matter where they live or what job they pursue.`,
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
  slug: 'november',

  // Extended page content
  hero: {
    backgroundImage: '/november-hero.jpg',
    tagline: 'Build Your Foundation for Success',
    introText: `From carpentry to hairstyling to graphic design, skilled trades and technology careers offer exciting opportunities for all. Join Skills/Compétences Canada to explore these careers and how the Skills for Success can help you thrive in these career paths.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/MkBwR2LC6Mo',
    title: 'Get hands on',
    description: `Skilled careers are more in demand than ever. With over 700 000 skilled trade workers set to retire by 2030, Canada needs you! These careers are well-paying and have so much to offer. See how the Skills for Success are at the core of these careers.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/MkBwR2LC6Mo',
    title: 'How this Works - November Challenge'
  },

  explainer: {
    title: 'Challenge Overview',
    rows: [
      {
        label: 'Active Submission Period',
        content: 'November 1-30, 2025'
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
        content: 'November 30, 2025 at 11:59 PM EST'
      },
    ]
  },

  activityDetail: {
    description: 'Skilled trades and technologies are Canada\'s foundation. These rewarding careers are in-demand and well-paying and could be right for you! See how the nine Skills for Success, like creativity and innovation, problem-solving and adaptability can help you succeed in these careers.<br/><br/><strong>This challenge invites students to explore the</strong> world of skilled trades and technologies and demonstrate how the Skills for Success apply to these career paths.',
    steps: [
      {
        title: "Step 1: Choose Your Activity",
        details: "Explore the Activities in the <em>Choose Your Activity</em> section below 👇 \n\n Read through them carefully to know what is being asked of you.\n\n <strong>Pick the one that you're most excited about. Complete the activity.</strong>\n\nYou can do this individually on your own, or as an activity you do in class with your teacher.\n\nAfter you complete the activity, you're ready to move on to Step 2."
      },
      {
        title: "Step 2: Research Your Trade or Technology Career",
        details: "<strong>Research what it's really like to work in the trade or technology connected to your activity.</strong>\n\nFor example:\n• What does someone in this job do all day?\n• What are their main tasks and responsibilities?\n• Do they work regular 9 to 5 hours, or do they work shifts, weekends, or seasonal schedules?\n• Where do they work? Is it indoors, outdoors, or both?\n• What types of projects do they work on?"
      },
      {
        title: "Step 3: Identify Three Skills for Success",
        details: "Understand what the official 9 Skills for Success are and what they mean. You can learn more about them in the <em>Learn about the Skills for Success</em> section below 👇 \n\n <strong>Pick THREE that are most important for your chosen trade</strong>\n\n IMPORTANT: Don't just name them. <strong>Give specific examples</strong> of how workers actually use each skill on the job as part of what they do every day, and their work tasks & responsibilities."
      },
      {
        title: "Step 4: Map Your Education and Training Pathway",
        details: "<strong>Research the education and training required for this role.</strong>\n\n• How do you actually get into this career?\n• Is it an apprenticeship where you learn while working?\n• Is it a Red Seal trade recognized across Canada?\n• What college or training programs exist?\n• How long does training take?\n• Where can you get this training in Canada?\n• What courses should you take in high school to prepare?\n\n<strong>Pro tip:</strong> Be specific. For example, instead of just saying 'a college program', mention a specific program and school."
      },
      {
        title: "Step 5: Explore Career Opportunities Across Canada",
        details: "<strong>Research the job outlook for these types of roles. </strong>\n\n• Is this career in-demand?\n• How many types of these jobs are projected to be needed in your province/territory?\n• What's causing the demand (like people retiring or new technology creating jobs)?\n\n<strong>Cite your sources when speaking to this.</strong> You don't need to submit anything extra - just mention them in your submission.\n\nFor example, saying/showing something like any of the below would work great:\n\n• \"according to Job Bank...\"\n• \"the industry association website says...\"\n• \"StatsCan projects...\"\n• \"this report from Indeed says...\"\n• \"the myBlueprint occupation profile for this occupation mentions...\""
      },
      {
        title: "Step 6: Submit Your Activity Video",
        details: "<strong>Create a 60-90 second video showing what you did in the activity and what you learned from the research across Steps 1-5.</strong>\n\nHow you choose to structure your video is up to you.\n\n• Vertical vs. horizontal? Up to you.\n• Talking head vs. all animations? Up to you.\n• Documentary style vs. tiktok style? Up to you.\n\nThe only requirements are that it addresses each of the 5 steps above (including evidence of your completed activity), and we're able to click a link to watch it. Everything else is up to you.\n\n<strong>IMPORTANT: Make sure the video link has the proper sharing settings in place.</strong>\n\nFor example:\n• If you're using Google Drive, make sure someone outside of your organization can watch it.\n• If you're using Youtube, make sure it's not listed as Private. Unlisted works great though.\n• Make sure it's not something that requires us to log in.\n\n<strong>A great way to test this is by pasting your link into a Chrome Incognito window.</strong> If it works in there without requiring login, it should work for us too.\n\nIt's your responsibility to make sure we can view your work."
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Activity Completion & Evidence',
        weight: 25,
        description: 'Activity clearly completed with strong visual/verbal evidence. Shows enthusiasm and genuine engagement with hands-on task. Process and/or results clearly demonstrated.'
      },
      {
        category: 'Career Research Depth',
        weight: 25,
        description: 'Full and specific coverage: Daily tasks, work environment, schedule specifics. Detailed education/training pathway. Clear job outlook with provincial data. Strong connection made between activity and career(s).'
      },
      {
        category: 'Skills for Success Application',
        weight: 25,
        description: 'Three Skills for Success clearly identified from official framework. Specific, realistic job examples for each skill. Examples directly connect to actual daily tasks and responsibilities.'
      },
      {
        category: 'Sources & Citations',
        weight: 25,
        description: '2+ credible sources clearly cited for job outlook data. Uses authoritative sources (Job Bank, StatsCan, industry associations). Clear attribution (e.g., "According to Job Bank...").'
      },
      {
        category: 'View Detailed Evaluation Rubric Here',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/c2bdfafa-8329-4ada-be93-ab0b98caa98d'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/c2bdfafa-8329-4ada-be93-ab0b98caa98d'
  },

  submission: {
    url: 'https://www.surveymonkey.com/r/PLACEHOLDER-NOVEMBER',
    deadline: new Date('2025-11-30T23:59:59-05:00'),
    instructions: 'Submit your completed presentation or infographic along with your written reflection through the Google Form. Ensure all files are properly named with your name and school.'
  },

  faqs: [
    {
      question: 'How does this November Activity challenge work?',
      answer: 'Carefully read the Challenge Details steps to understand what is being asked of you in this activity. You can watch the How it Works video for a detailed overview of the Skilled Career Exploration Challenge.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 60 to 90 second video that shows what you did in your chosen activity and what you learned from your research. Your video should cover: (1) evidence of your completed hands-on activity, (2) what it's like to work in the related trade/career, (3) three Skills for Success with specific job examples, (4) the education/training pathway, and (5) career opportunities across Canada. Make sure the video is shared as a clickable link with proper sharing settings so we can view it. Test it in an incognito browser window before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can submit multiple times, but it must be a different activity completed each time, though students can only win one micro grant per month. We'd encourage you to focus on quality, not quantity.`
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: `No, it's whatever feels authentic and engaging to you. It can be a Tik Tok style video with lots of different cuts and background music or more documentary style - whatever you will enjoy making more. Just make sure to meet the requirements listed in each of the steps.`
    },
    {
      question: 'Does it matter what tool I use to make the video?',
      answer: `Nope, it doesn't matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to be able to create videos with.`
    },
    {
      question: 'What skills will I be developing by doing this activity?',
      answer: `Lots of skills like research, critical thinking, communication, content creation, and many others - including practicing the Skills for Success themselves! It would be a good idea to add the completed video to your myBlueprint portfolio and reflect on what skills you feel like you've developed as part of completing this activity.`
    },
    {
      question: 'Who is reviewing the submissions?',
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from Skills/Compétences Canada.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `Yes, videos will be accepted in either English or French.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected and be able to announce winners by the midpoint of the following month. For example, with this activity, we hope to be able to announce the November winners by mid-December.`
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
      answer: `The Skilled Career Exploration Challenge has been designed as an individual activity.`
    },
    {
      question: 'Can I still submit the activity after the November 30th deadline?',
      answer: `Yes, you can still submit monthly activities after the deadline. However, any activity submitted after the deadline is not eligible for that month's pool of micro grants. It still makes sense to complete them even after the deadline so that you can potentially earn one of the Series Completion incentives. Those only require all activities to be completed, not necessarily completed within the month of the activity.`
    },
    {
      question: 'Will teachers be able to see who has submitted an entry?',
      answer: `Teachers won't be able to see through myBlueprint which students have submitted activities or not. However, we will create reports that will be shared with your myBlueprint lead at the school board level who can share specifics with you upon request.`
    },
    {
      question: 'What data is being collected and by who?',
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series. Meaning that only myBlueprint is collecting any information related to this Series. No personally identifiable information is being shared with any third parties. We will publish de-identified (anonymous summary data) information to provide updates on how the series is going. For example, the number of activity submissions received for each month, which province they're coming from, and communicate with our school board partners about school-specific participation. <a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">[Click here to see the questions students are being asked]</a> to answer when they submit their completed activity.`
    }
  ],

  resources: [
    {
      title: 'Car Painting',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_CarPainting EN_web.pdf',
      type: 'pdf',
      image: '/november-activities/car-painting.jpg'
    },
    {
      title: 'Carpentry',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_Carpentry EN_web.pdf',
      type: 'pdf',
      image: '/november-activities/carpentry.jpg'
    },
    {
      title: 'CNC Machining',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_CNCMachining EN_web.pdf',
      type: 'pdf',
      image: '/november-activities/cnc-machining.jpg'
    },
    {
      title: 'Cooking',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_Cooking EN_web.pdf',
      type: 'pdf',
      image: '/november-activities/cooking.jpg'
    },
    {
      title: 'Graphic Design',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_GraphicDesign EN_web.pdf',
      type: 'pdf',
      image: '/november-activities/graphic-design.jpg'
    }
  ],

  promotionalBanner: {
    imageEn: '/promotional-banners/nsttw-2025-en-upscaled.png',
    imageFr: '/promotional-banners/nsttw-2025-fr.png',
    altTextEn: 'National Skilled Trades and Technology Week - November 2 to 8, 2025',
    altTextFr: 'Semaine nationale des métiers spécialisés et des technologies - 2 au 8 novembre 2025',
    link: 'https://www.skillscompetencescanada.com/en/program/national-skilled-trade-and-technology-week/',
    displayDates: {
      start: new Date('2025-10-01T00:00:00-05:00'),
      end: new Date('2025-11-30T23:59:59-05:00')
    }
  },

  meta: {
    title: 'Skilled Career Exploration Challenge - November 2025',
    description: 'Explore Canada\'s nine Skills for Success with Skills Competences Canada. Research essential workplace skills, create engaging presentations, and win micro grants.',
    ogImage: '/logo2.png'
  }
};
