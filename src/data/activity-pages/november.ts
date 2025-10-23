import { ActivityPageData } from '../activities';

export const novemberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '2',
  month: 'November',
  year: '2025',
  title: 'Skills for Success Challenge',
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
    tagline: 'Build Your Skills for Success',
    introText: `Canada's Skills for Success framework identifies nine essential skills that help you thrive in work, learning, and life. Join Skills/Compétences Canada to explore these foundational competencies and discover how they can unlock opportunities in any career path you choose.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/MkBwR2LC6Mo',
    title: 'Skills for Success Overview',
    description: `Explore Canada's Skills for Success: nine skills that can set workers up for success with work, learning, and life – no matter where they live or what job they pursue. Learn about adaptability, collaboration, communication, creativity and innovation, digital skills, numeracy, problem solving, reading, and writing.`
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
    description: 'Skills for Success are the foundation for building a successful career and life. These nine essential skills help Canadians adapt to change, solve problems, and thrive in any workplace.<br/><br/><strong>This challenge invites students to explore the Skills for Success framework</strong> and demonstrate how these skills apply to real-world scenarios in their chosen career paths.',
    steps: [
      {
        title: "Step 1: Choose Your Activity",
        details: "Explore the Activities in the section below. Read through them carefully to know what is being asked of you. Then pick the one that you're most excited about. Complete the activity. You can do this individually on your own, or as an activity you do in class with your teacher." 
      },
      {
        title: "Step 2: Research Your Trade or Career",
        details: "Find out what it's really like to work in the trade or career connected to your activity. What does someone in this job do all day? What are their main tasks? Do they work regular 9 to 5 hours, or do they work shifts, weekends, or seasonal schedules? Where do they work? Is it indoors, outdoors, or both? Include any special requirements like physical strength, technical skills, or safety gear."
      },
      {
        title: "Step 3: Identify Three Essential Skills for Success",
        details: "Look at the official 9 Skills for Success (Reading, Writing, Numeracy, Digital Skills, Thinking, Oral Communication, Working with Others, Adaptability, and Creativity & Innovation). Pick THREE that are most important for your chosen trade. Don't just name them. Give specific examples of how workers actually use each skill on the job. Make it real and practical!"
      },
      {
        title: "Step 4: Map Your Education and Training Pathway",
        details: "How do you actually get into this career? Research the education and training required. Is it an apprenticeship where you learn while working? Is it a Red Seal trade recognized across Canada? What college or training programs exist? How long does training take? Where can you get this training in Canada? What courses should you take in high school to prepare?"
      },
      {
        title: "Step 5: Explore Career Opportunities Across Canada",
        details: "Where are the jobs? Research which provinces or cities have the most opportunities in your chosen field. Is this career growing or shrinking? What's causing the demand (like baby boomers retiring or new technology creating jobs)? Use real data to show why someone should consider this career path and where they might need to move to find work."
      },
      {
        title: "Step 6: Submit Your Activity Video",
        details: "Make a 60 to 90 second video showing you doing your chosen activity while sharing what you learned. Actually demonstrate the hands-on skill, then connect it to the Skills for Success you researched. Explain why this trade matters and what surprised you about this career path. Be creative with your format but make sure we can watch it through a shareable link. Show us your skills in action!"
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Content & Accuracy',
        weight: 40,
        description: 'Comprehensive coverage of the chosen skill with accurate, detailed information about its real-world applications'
      },
      {
        category: 'Research & Citations',
        weight: 20,
        description: 'Quality sources properly cited throughout the presentation with credible references'
      },
      {
        category: 'Engagement & Creativity',
        weight: 20,
        description: 'Compelling delivery that maintains viewer interest through creative presentation and clear examples'
      },
      {
        category: 'Communication & Clarity',
        weight: 20,
        description: 'Clear audio/visuals with logical organization, smooth flow, and effective communication of key concepts'
      },
      {
        category: 'View Detailed Evaluation Rubric Here',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/placeholder-november-rubric'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/placeholder-november-rubric'
  },

  submission: {
    url: 'https://www.surveymonkey.com/r/PLACEHOLDER-NOVEMBER',
    deadline: new Date('2025-11-30T23:59:59-05:00'),
    instructions: 'Submit your completed presentation or infographic along with your written reflection through the Google Form. Ensure all files are properly named with your name and school.'
  },

  faqs: [
    {
      question: 'How does this November Activity challenge work?',
      answer: 'Carefully read the Activity Details steps to understand what is being asked of you in this activity. You can also watch the Challenge Overview video for a detailed explanation of the Skills for Success framework.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 60 to 90 second video highlighting your research on one of the nine Skills for Success and how it applies to a career or industry. It's important that the video you create is shared as a clickable link, not something that we need to download, and that you've made sure that the sharing settings are set up in a way that we have access to view the video. It's a good idea to test this before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can complete the activity multiple times focusing on different Skills for Success, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.`
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: `No, it's whatever feels authentic and engaging to you. It can be a Tik Tok style video with lots of different cuts and background music or more documentary style - whatever you will enjoy making more, and clearly communicates the requested information about your chosen skill.`
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
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from Skills Competences Canada.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `All videos for this activity will need to be reviewed in English, so if a student wants to submit in French, we ask they include English subtitles in the video.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected, and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the November winners by mid-December.`
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
      answer: `The November challenge has been designed as an individual activity.`
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
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series.

Meaning that only myBlueprint is collecting any information related to this Series. No personally identifiable information is being shared with any 3rd parties.

We will publish de-identified (anonymous summary data) information to provide updates on how the Series is going. For example, the number of activity submissions received for each month, which province they're coming from, and communicate with our school board partners about school-specific participation.

<a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Click here to see the questions students are being asked</a> to answer when they submit their completed activity.`
    }
  ],

  resources: [
    {
      title: 'Activity 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: '#',
      type: 'link'
    },
    {
      title: 'Activity 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: '#',
      type: 'link'
    },
    {
      title: 'Activity 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: '#',
      type: 'link'
    },
    {
      title: 'Activity 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: '#',
      type: 'link'
    },
    {
      title: 'Activity 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: '#',
      type: 'link'
    },
    {
      title: 'Activity 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      url: '#',
      type: 'link'
    }
  ],

  meta: {
    title: 'Skills for Success Challenge - November 2025',
    description: 'Explore Canada\'s nine Skills for Success with Skills Competences Canada. Research essential workplace skills, create engaging presentations, and win micro grants.',
    ogImage: '/logo2.png'
  }
};
