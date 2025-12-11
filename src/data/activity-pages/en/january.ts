import { ActivityPageData } from '../../activities';

export const januaryActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '4',
  month: 'January',
  year: '2026',
  title: 'Beyond the Skies Challenge',
  description: `At NAV CANADA, we're transforming the way our skies operate. Explore how air traffic control and flight service professionals are keeping air travel safe, efficient, and enjoyable for millions.`,
  sponsor: {
    name: 'NAV CANADA',
    logo: '/logo4.png',
    logoType: 'tall'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'january',

  // Extended page content
  hero: {
    backgroundImage: '/january-hero.jpg',
    tagline: 'Discover Your Future in Aviation',
    introText: `At NAV CANADA, we're transforming the way our skies operate. Explore how air traffic control and flight service professionals are keeping air travel safe, efficient, and enjoyable for millions. From tower controllers guiding aircraft through busy airports to technical services technologists maintaining critical systems — discover your path to a career that keeps Canada's skies safe.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/ffyv6de2uoM',
    title: 'Working at NAV CANADA',
    description: `Discover what it's like to work at NAV CANADA, Canada's air navigation service provider. Meet the people who keep our skies safe and learn about the diverse career opportunities available.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/PLACEHOLDER',
    title: 'January Industry Immersion Series Activity | How this Works'
  },

  explainer: {
    title: 'Challenge Overview',
    rows: [
      {
        label: 'Active Submission Period',
        content: 'January 1-31, 2026'
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
        content: 'January 31, 2026 at 11:59 PM EST'
      },
    ]
  },

  activityDetail: {
    description: 'NAV CANADA keeps Canada\'s skies safe, guiding over 18 million flights per year across 18 million square kilometers of airspace.<br/><br/><strong>This challenge invites students to explore aviation careers at NAV CANADA</strong>, from air traffic controllers who guide aircrafts, to technologists who maintain critical navigation systems — all united by a culture where safety is everyone\'s job.',
    steps: [
      {
        title: "Step 1 - Choose Your Career Path",
        details: `Start by selecting ONE of the four NAV CANADA occupations below:

• <strong>Tower Controller / Area Controller</strong> – Guide aircraft safely through takeoff, flight, and landing using advanced radar and communication systems
• <strong>Flight Service Specialist</strong> – Provide critical weather briefings, flight information, and airport advisory services
• <strong>Technical Services Technologist</strong> – Maintain and service the sophisticated systems that keep Canada's skies safe
• <strong>Business and Operational Support</strong> – Support aviation operations through roles in finance, HR, technology, safety, and more

Click on the occupation card in the Resources section below to visit the official NAV CANADA career page and learn more about that role.

<strong>IMPORTANT: Choose ONE occupation to focus on for the rest of this challenge.</strong>`
      },
      {
        title: "Step 2 - Research the Occupation",
        details: `Now that you've selected your occupation, research what it's really like to work in this role.

Use the NAV CANADA career page you visited in Step 1, plus myBlueprint's occupation profiles, and other reliable sources.

<strong>Address these questions in your research:</strong>

• What does someone in this role do day-to-day?
• What are their main tasks and responsibilities?
• What are their working hours? (Regular shifts? 24/7 operations? Shift work?)
• Where do they work? (Control tower? Office? Flight service station? Remote locations?)
• What types of projects or situations do they handle?
• What makes this role unique at NAV CANADA?

<strong>Cite your sources.</strong> Mention where you found this information (NAV CANADA website, myBlueprint, Job Bank, etc.)`
      },
      {
        title: "Step 3 - Identify Skills & Pathway",
        details: `<strong>Part A: Key Skills and Qualities</strong>

Identify 2-3 skills or qualities that are essential for this role. Look at what NAV CANADA emphasizes in their career descriptions.

These could include:
• Communication and teamwork
• Problem-solving and decision-making
• Attention to detail and situational awareness
• Technical aptitude and systems thinking
• Stress management and composure
• Spatial reasoning and visualization

<strong>IMPORTANT: Don't just list them. Give specific examples of how someone in your chosen occupation uses each skill in their daily work.</strong>

<strong>Part B: Training Pathway</strong>

Research and describe the pathway to this career at NAV CANADA:

• What are the basic requirements? (age, education, citizenship, etc.)
• What is NAV CANADA's in-house training program like for this role?
• How long does training take?
• Where does training happen?
• What is the selection process?
• What can students do NOW in high school to prepare?

NAV CANADA provides specialized training for most operational roles — describe what that training involves for your chosen occupation.`
      },
      {
        title: "Step 4 - Address Safety Culture",
        details: `Safety is at the core of everything NAV CANADA does. Their philosophy is: <strong>"Safety is a part of everyone's job."</strong>

<strong>Read about NAV CANADA's safety culture:</strong>
Visit: <a href="https://www.navcanada.ca/en/air-traffic/safety.aspx" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">https://www.navcanada.ca/en/air-traffic/safety.aspx</a>

<strong>In your research, address:</strong>

• Why is safety so critical in aviation and air traffic management?
• How does NAV CANADA's safety culture work? (Just Culture, Safety Management System, etc.)
• How does safety culture specifically apply to the occupation you're researching?
• What does "Just Culture" mean and why is it important?
• How do employees at NAV CANADA report safety concerns?

NAV CANADA was one of the first air navigation service providers in the world to implement a comprehensive Safety Management System (SMS) in 1997. Their "Just Culture" encourages employees to openly report safety concerns without fear of reprisal.

<strong>Connect this back to your chosen occupation</strong> — how does this role contribute to keeping Canada's skies safe?`
      },
      {
        title: "Step 5 - Future Outlook",
        details: `<strong>Research the career outlook for your chosen occupation.</strong>

Use resources like:
• Job Bank (jobbank.gc.ca)
• Statistics Canada
• NAV CANADA's career information
• myBlueprint occupation profiles
• Industry reports and labour market information

<strong>Address these questions:</strong>

• Is this career in-demand in Canada?
• How many of these jobs exist across Canada?
• Where are most of these jobs located? (Which provinces/cities?)
• What's driving demand? (Retirements? Growth in air traffic? Technology?)
• What is the salary range for this occupation?
• What are the career advancement opportunities?

<strong>Cite your sources when speaking to this.</strong> For example:
• "according to Job Bank..."
• "NAV CANADA operates X control towers across Canada..."
• "Statistics Canada reports..."
• "the myBlueprint occupation profile shows..."`
      },
      {
        title: "Step 6: Submit Your Activity Video",
        details: `<strong>Create a 60-90 second video showing what you did in the activity and what you learned from the research across Steps 1-5.</strong>

How you choose to structure your video is up to you.

• Vertical vs. horizontal? Up to you.
• Talking head vs. all animations? Up to you.
• Documentary style vs. tiktok style? Up to you.

The only requirements are that it addresses each of the 5 steps above (including evidence of your completed activity), and we're able to click a link to watch it. Everything else is up to you.

<strong>IMPORTANT: Make sure the video link has the proper sharing settings in place.</strong>

For example:
• If you're using Google Drive, make sure someone outside of your organization can watch it.
• If you're using Youtube, make sure it's not listed as Private. Unlisted works great though.
• Make sure it's not something that requires us to log in.

<strong>A great way to test this is by pasting your link into a Chrome Incognito window.</strong> If it works in there without requiring login, it should work for us too.

It's your responsibility to make sure we can view your work.`
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Content & Accuracy',
        weight: 25,
        description: 'Comprehensive coverage of all 5 required steps with accurate, detailed information'
      },
      {
        category: 'Research & Citations',
        weight: 25,
        description: 'Quality sources properly cited throughout the video presentation'
      },
      {
        category: 'Engagement & Creativity',
        weight: 25,
        description: 'Compelling delivery that maintains viewer interest through creative presentation'
      },
      {
        category: 'Communication & Clarity',
        weight: 25,
        description: 'Clear audio/visuals with logical organization, smooth flow, and meets 60-90 second requirement'
      },
      {
        category: 'View Detailed Evaluation Rubric Here',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://PLACEHOLDER-RUBRIC-URL'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://PLACEHOLDER-RUBRIC-URL'
  },

  submission: {
    url: 'https://PLACEHOLDER-SUBMISSION-FORM-URL',
    deadline: new Date('2026-01-31T23:59:59-05:00'),
    instructions: 'Submit your completed video presentation through the form. Ensure your video link is properly shared with viewing permissions enabled.'
  },

  faqs: [
    {
      question: 'How does this January Activity challenge work?',
      answer: 'Carefully read the Activity Details steps 1-5 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 60 to 90 second video highlighting the research you did from steps 1 through 5 in this specific activity. It's important that the video you create is shared as a clickable link, not something that we need to download, and that you've made sure that the sharing settings are set up in a way that we have access to view the video. It's a good idea to test this before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can complete the activity multiple times for different NAV CANADA occupations, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.`
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
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from NAV CANADA.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `Yes, videos will be accepted in either English or French.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected, and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the January winners by mid-February.`
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
      answer: `The January challenge has been designed as an individual activity.`
    },
    {
      question: 'Can I still submit the activity after the January 31st deadline?',
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

  // NAV Canada occupation resources with custom styling flag
  resources: [
    {
      title: 'Air Traffic Controller',
      description: 'Guide aircraft safely through takeoff, flight, and landing using advanced radar and communication systems.',
      url: 'https://www.navcanada.ca/en/careers/air-traffic-controller.aspx#tower',
      type: 'link',
      image: '/january-occupations/tower-controller.jpg',
      borderColor: '#0047BB'
    },
    {
      title: 'Flight Service Specialist',
      description: 'Provide critical weather briefings, flight information, and airport advisory services to pilots.',
      url: 'https://www.navcanada.ca/en/careers/flight-service-specialist.aspx',
      type: 'link',
      image: '/january-occupations/flight-service.jpg',
      borderColor: '#0047BB'
    },
    {
      title: 'Technical Services Technologist',
      description: 'Maintain and service the sophisticated navigation and communication systems that keep our skies safe.',
      url: 'https://www.navcanada.ca/en/careers/technical-services-technologist.aspx',
      type: 'link',
      image: '/january-occupations/tech-services.jpg',
      borderColor: '#0047BB'
    },
    {
      title: 'Business and Operational Support',
      description: 'Support aviation operations through roles in finance, HR, technology, safety, and corporate functions.',
      url: 'https://www.navcanada.ca/en/careers/business-and-operational-support.aspx',
      type: 'link',
      image: '/january-occupations/business-support.jpg',
      borderColor: '#0047BB'
    }
  ],
  resourcesTitle: 'Choose Your NAV CANADA Career Path',
  resourcesSubtitle: 'Select one occupation to research for this challenge',

  meta: {
    title: 'Beyond the Skies Challenge | myBlueprint Industry Immersion Series | January 2026',
    description: 'Explore aviation careers with NAV CANADA. Research air traffic control, flight service, and technical careers while learning about aviation safety culture. Win micro grants.',
    ogImage: '/images/meta-preview.png'
  }
};
