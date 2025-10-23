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
    introText: `Canada's Skills for Success framework identifies nine essential skills that help you thrive in work, learning, and life. Join Skills Competences Canada to explore these foundational competencies and discover how they can unlock opportunities in any career path you choose.`
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
        title: "Step 1 - Choose Your Skill",
        details: "Select one of Canada's nine Skills for Success to focus on:\n\n• Adaptability\n• Collaboration\n• Communication\n• Creativity & Innovation\n• Digital\n• Numeracy\n• Problem Solving\n• Reading\n• Writing\n\n<strong>Pick the skill that interests you most or that you want to develop further.</strong>"
      },
      {
        title: "Step 2 - Research the Skill",
        details: "<strong>Research your chosen skill and explain what it means in a professional context.</strong>\n\nUse the Skills for Success resources provided below to understand:\n• What this skill involves\n• Why it's important in the workplace\n• How it's used across different careers"
      },
      {
        title: "Step 3 - Career Connection",
        details: "<strong>Identify a specific career or industry where this skill is essential.</strong>\n\nExplain:\n• How professionals in this field use the skill daily\n• Real-world examples or scenarios\n• What happens when this skill is missing or underdeveloped"
      },
      {
        title: "Step 4 - Personal Development",
        details: "<strong>Reflect on your own skill level and create a development plan.</strong>\n\n• How would you rate yourself on this skill currently?\n• What opportunities do you have to practice it (school, work, hobbies)?\n• What specific actions can you take to improve?"
      },
      {
        title: "Step 5 - Future Impact",
        details: "<strong>Explain how developing this skill will benefit your future career and life goals.</strong>\n\nConsider:\n• How this skill connects to your career interests\n• The transferability of this skill across different jobs\n• Its importance in Canada's evolving workforce"
      },
      {
        title: "Step 6 - Submit",
        details: "<strong>Take the research and reflection you completed in steps 1-5 and create a 60-90 second video.</strong>\n\nHow you structure your video is up to you:\n\n• Vertical vs. horizontal? Up to you.\n• Talking head vs. animations? Up to you.\n• Formal vs. creative style? Up to you.\n\nThe only requirements are that it addresses each of the 5 steps above, and we're able to click a link to watch it.\n\nScore 75/100 or higher on the rubric, and you'll be entered into the pool for one of twenty micro grants.\n\nSomebody has to win. Why not you?"
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
      title: 'Skills for Success Framework',
      description: 'Learn about all nine Skills for Success and how they support career development.',
      url: 'https://www.canada.ca/en/services/jobs/training/initiatives/skills-success.html',
      type: 'link'
    },
    {
      title: 'Explore Career Paths',
      description: 'Discover how Skills for Success apply to different careers and industries.',
      url: 'https://www.skillscompetencescanada.com/',
      type: 'link'
    },
    {
      title: 'Skills Assessment Tools',
      description: 'Self-assessment resources to help you identify your current skill levels.',
      url: 'https://www.canada.ca/en/services/jobs/training.html',
      type: 'link'
    },
    {
      title: 'Video Library',
      description: 'Watch videos showcasing Skills for Success in action across various careers.',
      url: 'https://www.skillscompetencescanada.com/resources',
      type: 'video'
    },
    {
      title: 'Skill Development Resources',
      description: 'Find tools and activities to help you build your Skills for Success.',
      url: 'https://www.canada.ca/en/services/jobs/training/initiatives/skills-success/tools.html',
      type: 'link'
    },
    {
      title: 'Educator Resources',
      description: 'Resources for teachers and educators to integrate Skills for Success into curriculum.',
      url: 'https://www.skillscompetencescanada.com/educators',
      type: 'link'
    }
  ],

  meta: {
    title: 'Skills for Success Challenge - November 2025',
    description: 'Explore Canada\'s nine Skills for Success with Skills Competences Canada. Research essential workplace skills, create engaging presentations, and win micro grants.',
    ogImage: '/logo2.png'
  }
};
