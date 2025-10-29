import { ActivityPageData } from '../../activities';

// TODO: Replace English text content with French translations
// NOTE: Keep this file structure identical to en/november.ts for consistency

export const novemberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '2',
  month: 'November',
  year: '2025',
  title: 'Skilled Career Exploration Challenge', // TODO: Translate to French
  description: `Explore Canada's Skills for Success: nine skills that can set workers up for success with work, learning, and life – no matter where they live or what job they pursue.`, // TODO: Translate to French
  sponsor: {
    name: 'Skills Competences Canada',
    logo: '/logo2.png', // Sponsor logo stays the same
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
    // Hero image is the same for both English and French
    backgroundImage: '/november-hero.jpg',
    tagline: 'Build Your Skills for Success', // TODO: Translate to French
    introText: `Canada's Skills for Success framework identifies nine essential skills that help you thrive in work, learning, and life. Join Skills/Compétences Canada to explore these foundational competencies and discover how they can unlock opportunities in any career path you choose.` // TODO: Translate to French
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/MkBwR2LC6Mo', // Same video for EN/FR
    title: 'Skills for Success Overview', // TODO: Translate to French
    description: `Explore Canada's Skills for Success: nine skills that can set workers up for success with work, learning, and life – no matter where they live or what job they pursue. Scroll down to learn how they're being used across careers in skilled trades and technology.` // TODO: Translate to French
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/MkBwR2LC6Mo', // Same video for EN/FR
    title: 'How this Works - November Challenge' // TODO: Translate to French
  },

  explainer: {
    title: 'Challenge Overview', // TODO: Translate to French
    rows: [
      {
        label: 'Active Submission Period', // TODO: Translate to French
        content: 'November 1-30, 2025' // TODO: Translate month name if needed
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
        content: 'November 30, 2025 at 11:59 PM EST' // TODO: Translate to French
      },
    ]
  },

  activityDetail: {
    description: 'Skills for Success are the foundation for building a successful career and life. These nine essential skills help Canadians adapt to change, solve problems, and thrive in any workplace.<br/><br/><strong>This challenge invites students to explore the Skills for Success framework</strong> and demonstrate how these skills apply to real-world scenarios across career paths of interest.', // TODO: Translate to French (includes HTML)
    steps: [
      {
        title: "Step 1: Choose Your Activity", // TODO: Translate to French
        details: "Explore the Activities in the <em>Choose Your Activity</em> section below 👇 \n\n Read through them carefully to know what is being asked of you.\n\n <strong>Pick the one that you're most excited about. Complete the activity.</strong>\n\nYou can do this individually on your own, or as an activity you do in class with your teacher.\n\nAfter you complete the activity, you're ready to move on to Step 2." // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 2: Research Your Trade or Career", // TODO: Translate to French
        details: "<strong>Research what it's really like to work in the trade or career connected to your activity.</strong>\n\nFor example:\n• What does someone in this job do all day?\n• What are their main tasks and responsibilities?\n• Do they work regular 9 to 5 hours, or do they work shifts, weekends, or seasonal schedules?\n• Where do they work? Is it indoors, outdoors, or both?\n• What types of projects do they work on?" // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 3: Identify Three Essential Skills for Success", // TODO: Translate to French
        details: "Understand what the official 9 Skills for Success are and what they mean. You can learn more about them in the <em>Learn about the Skills for Success</em> section below 👇 \n\n <strong>Pick THREE that are most important for your chosen trade</strong>\n\n IMPORTANT: Don't just name them. <strong>Give specific examples</strong> of how workers actually use each skill on the job as part of what they do every day, and their work tasks & responsibilities." // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 4: Map Your Education and Training Pathway", // TODO: Translate to French
        details: "<strong>Research the education and training required for this role.</strong>\n\n• How do you actually get into this career?\n• Is it an apprenticeship where you learn while working?\n• Is it a Red Seal trade recognized across Canada?\n• What college or training programs exist?\n• How long does training take?\n• Where can you get this training in Canada?\n• What courses should you take in high school to prepare?\n\n<strong>Pro tip:</strong> Be specific. For example, instead of just saying 'a college program', mention a specific program and school." // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 5: Explore Career Opportunities Across Canada", // TODO: Translate to French
        details: "<strong>Research where the job outlook for these types of roles. </strong>\n\n• Is this career in-demand?\n• How many types of these jobs are projected to be needed in your province/territory?\n• What's causing the demand (like people retiring or new technology creating jobs)?\n\n<strong>Cite your sources when speaking to this.</strong> You don't need to submit anything extra - just mention them in your submission.\n\nFor example, saying/showing something like any of the below would work great:\n\n• \"according to Job Bank...\"\n• \"the industry association website says...\"\n• \"StatsCan projects...\"\n• \"this report from Indeed says...\"\n• \"the myBlueprint occupation profile for this occupation mentions...\"" // TODO: Translate to French (includes HTML)
      },
      {
        title: "Step 6: Submit Your Activity Video", // TODO: Translate to French
        details: "<strong>Create a 60-90 second video showing what you did in the activity and what you learned from the research across Steps 1-5.</strong>\n\nHow you choose to structure your video is up to you.\n\n• Vertical vs. horizontal? Up to you.\n• Talking head vs. all animations? Up to you.\n• Documentary style vs. tiktok style? Up to you.\n\nThe only requirements are that it addresses each of the 5 steps above (including evidence of your completed activity), and we're able to click a link to watch it. Everything else is up to you.\n\n<strong>IMPORTANT: Make sure the video link has the proper sharing settings in place.</strong>\n\nFor example:\n• If you're using Google Drive, make sure someone outside of your organization can watch it.\n• If you're using Youtube, make sure it's not listed as Private. Unlisted works great though.\n• Make sure it's not something that requires us to log in.\n\n<strong>A great way to test this is by pasting your link into a Chrome Incognito window.</strong> If it works in there without requiring login, it should work for us too.\n\nIt's your responsibility to make sure we can view your work." // TODO: Translate to French (includes HTML)
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Activity Completion & Evidence', // TODO: Translate to French
        weight: 25,
        description: 'Activity clearly completed with strong visual/verbal evidence. Shows enthusiasm and genuine engagement with hands-on task. Process and/or results clearly demonstrated.' // TODO: Translate to French
      },
      {
        category: 'Career Research Depth', // TODO: Translate to French
        weight: 25,
        description: 'Full and specific coverage: Daily tasks, work environment, schedule specifics. Detailed education/training pathway. Clear job outlook with provincial data. Strong connection made between activity and career(s).' // TODO: Translate to French
      },
      {
        category: 'Skills for Success Application', // TODO: Translate to French
        weight: 25,
        description: 'Three Skills for Success clearly identified from official framework. Specific, realistic job examples for each skill. Examples directly connect to actual daily tasks and responsibilities.' // TODO: Translate to French
      },
      {
        category: 'Sources & Citations', // TODO: Translate to French
        weight: 25,
        description: '2+ credible sources clearly cited for job outlook data. Uses authoritative sources (Job Bank, StatsCan, industry associations). Clear attribution (e.g., "According to Job Bank...").' // TODO: Translate to French
      },
      {
        category: 'View Detailed Evaluation Rubric Here', // TODO: Translate to French
        weight: 0,
        description: '',
        isLink: true,
        // TODO: Update to French rubric URL when available
        url: 'https://claude.ai/public/artifacts/c2bdfafa-8329-4ada-be93-ab0b98caa98d'
      }
    ],
    totalPoints: 100,
    // TODO: Update to French rubric URL when available
    detailedRubricUrl: 'https://claude.ai/public/artifacts/c2bdfafa-8329-4ada-be93-ab0b98caa98d'
  },

  submission: {
    // TODO: Update to French SurveyMonkey form URL when available
    url: 'https://www.surveymonkey.com/r/PLACEHOLDER-NOVEMBER-FR',
    deadline: new Date('2025-11-30T23:59:59-05:00'),
    instructions: 'Submit your completed presentation or infographic along with your written reflection through the Google Form. Ensure all files are properly named with your name and school.' // TODO: Translate to French
  },

  faqs: [
    {
      question: 'How does this November Activity challenge work?', // TODO: Translate to French
      answer: 'Carefully read the Challenge Details steps to understand what is being asked of you in this activity. You can watch the How it Works video for a detailed overview of the the Skilled Career Exploration Challenge.' // TODO: Translate to French
    },
    {
      question: 'What am I actually being asked to submit?', // TODO: Translate to French
      answer: `You're being asked to submit a 60 to 90 second video that shows what you did in your chosen activity and what you learned from your research. Your video should cover: (1) evidence of your completed hands-on activity, (2) what it's like to work in the related trade/career, (3) three Skills for Success with specific job examples, (4) the education/training pathway, and (5) career opportunities across Canada. Make sure the video is shared as a clickable link with proper sharing settings so we can view it. Test it in an incognito browser window before submitting.` // TODO: Translate to French
    },
    {
      question: 'Can I submit more than one video?', // TODO: Translate to French
      answer: `Yes, you can submit multiple times, but it must be a different activity completed each time, though students can only win one micro grant per month. We'd encourage you to focus on quality, not quantity.` // TODO: Translate to French
    },
    {
      question: 'Is there a preferred style for the video?', // TODO: Translate to French
      answer: `No, it's whatever feels authentic and engaging to you. It can be a Tik Tok style video with lots of different cuts and background music or more documentary style - whatever you will enjoy making more. Just make sure to meet the requirements listed in each of the steps.` // TODO: Translate to French
    },
    {
      question: 'Does it matter what tool I use to make the video?', // TODO: Translate to French
      answer: `Nope, it doesn't matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to be able to create videos with.` // TODO: Translate to French
    },
    {
      question: 'What skills will I be developing by doing this activity?', // TODO: Translate to French
      answer: `Lots of skills like research, critical thinking, communication, content creation, and many others - including practicing the Skills for Success themselves! It would be a good idea to add the completed video to your myBlueprint portfolio and reflect on what skills you feel like you've developed as part of completing this activity.` // TODO: Translate to French
    },
    {
      question: 'Who is reviewing the submissions?', // TODO: Translate to French
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from Skills/Compétences Canada.` // TODO: Translate to French
    },
    {
      question: 'Can students submit their videos in French?', // TODO: Translate to French
      answer: `Yes, videos will be accepted in either English or French.` // TODO: Translate to French
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?', // TODO: Translate to French
      answer: `Depending on the volume of submissions, we plan to have selected, and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the November winners by mid-December.` // TODO: Translate to French
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
      answer: `The Skilled Career Exploration Challenge has been designed as an individual activity.` // TODO: Translate to French
    },
    {
      question: 'Can I still submit the activity after the November 30th deadline?', // TODO: Translate to French
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
    {
      title: 'Peinture de voiture',
      description: '',
      url: '#',
      type: 'pdf',
      image: '/november-activities/car-painting.jpg'
    },
    {
      title: 'Menuiserie',
      description: '',
      url: '#',
      type: 'pdf',
      image: '/november-activities/carpentry.jpg'
    },
    {
      title: 'Usinage CNC',
      description: '',
      url: '#',
      type: 'pdf',
      image: '/november-activities/cnc-machining.jpg'
    },
    {
      title: 'Cuisine',
      description: '',
      url: '#',
      type: 'pdf',
      image: '/november-activities/cooking.jpg'
    },
    {
      title: 'Conception graphique',
      description: '',
      url: '#',
      type: 'pdf',
      image: '/november-activities/graphic-design.jpg'
    }
  ],

  meta: {
    title: 'Skilled Career Exploration Challenge - November 2025', // TODO: Translate to French
    description: 'Explore Canada\'s nine Skills for Success with Skills Competences Canada. Research essential workplace skills, create engaging presentations, and win micro grants.', // TODO: Translate to French
    ogImage: '/logo2.png' // Sponsor logo stays the same
  }
};
