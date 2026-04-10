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
    tagline: 'Explore Real Careers Behind Comfortable, Efficient Buildings',
    introText: `Heating, ventilation, air conditioning, and refrigeration (HVACR) keeps homes, schools, hospitals, and businesses running safely and efficiently. It's a growing and AI resistant field, with strong demand across Canada for skilled workers over a wide range of roles.\n\nIn this challenge, you'll explore a real HVACR company in your community, learn about a specific career in the field, and examine how HVACR technologies are improving energy efficiency and reducing environmental impact.\n\nAlong the way, you'll discover practical, in-demand career pathways you may not have considered.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/IBeLJ33OCoc',
    title: 'About HVACR Careers',
    description: `Watch this video to learn how HVACR careers combine hands-on work, problem-solving, and evolving technology. From skilled trades like gas heating, refrigeration and air conditioning mechanics to system design, sales, and business ownership, HVACR offers a wide range of career paths.\n\nMany roles involve apprenticeship training, allowing you to earn while you learn and build in-demand skills that are needed in every community.`
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
    description: `Canada needs more skilled HVACR professionals to support growing construction, maintenance, and energy efficiency needs. For example, it is estimated that the need for air conditioning & refrigeration mechanics will grow by 400% over the next 10 years.\n\n<strong>In this challenge, you will:</strong>\n<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem;"><li>Research a real HVACR company in your community</li><li>Explore a specific career role within that company or the industry</li><li>Learn how HVACR technologies contribute to energy efficiency and building performance</li><li>Understand future career opportunities and demand in the field</li></ul><p style="margin-top: 1rem;">Focus on clear, accurate information from trusted sources. Avoid copying general definitions—show what you've learned in your own words.</p>`,
    steps: [
      {
        title: "Step 1: Research a Local HVACR Company",
        details: `<strong>Find and feature at least one HVACR company in your community.</strong>

Your research should cover:
• What does the company do? (installation, service, maintenance, design, manufacturing, etc.)
• What types of systems do they work with? (heating, cooling, heat pumps, refrigeration, residential, commercial, industrial)
• How long have they been operating in your area?
• What kinds of roles do they hire for?

<strong>Where to look:</strong>
• Search online for HVACR, heating, cooling, or refrigeration companies in your city or town
• Ask family, friends, or neighbours if they know a local company
• Use the HRAI resources below to find companies and learn more about the industry

<strong>Goal:</strong>
Show that HVACR is a local industry with real businesses and job opportunities in communities across Canada, including your own.`
      },
      {
        title: "Step 2: Spotlight an HVACR Career",
        details: `<strong>Choose one HVACR role and explore what it's really like.</strong>

Your career spotlight should include:
• <strong>Day-to-day work</strong> — What does a typical day look like in this role?
• <strong>Skills required</strong> — What technical and interpersonal skills are important?
• <strong>Training & education</strong> — What pathway is required (apprenticeship, college, certifications)?
• <strong>Earning potential</strong> — What can someone expect to earn as they gain experience?

<strong>Bonus:</strong>
If you can speak with someone in the industry, even briefly, include what you learned. First-hand insight makes your project stronger.

<strong>Example roles to explore:</strong>
Residential or commercial HVACR install/service technician, sheet metal worker, estimator, service manager, systems designer, or sales specialist.`
      },
      {
        title: "Step 3: Technology & Environmental Impact",
        details: `<strong>Explain one HVACR technology and why it matters.</strong>

Choose a technology such as:
• Heat pumps
• Smart or automated HVAC systems
• Refrigeration systems and modern refrigerants
• Ventilation systems for indoor air quality

Then explain:
• How the technology works (in simple terms)
• How it improves comfort, efficiency, or building performance
• How it connects to energy use or environmental goals

<strong>Big picture:</strong>
How does the transition to heat pumps in HVACR make buildings more efficient?
Why does this transition increase the need for skilled workers?`
      },
      {
        title: "Step 4: Future Outlook",
        details: `<strong>Explore job demand and career opportunities in HVACR.</strong>

Use resources like Job Bank and HRAI to find out:
• Is there demand for HVACR workers in your region?
• What types of jobs are available locally or provincially?
• What's driving demand? (new construction, maintenance needs, retiring workers, energy upgrades)

<strong>Goal:</strong>
Show that HVACR offers real, in-demand career opportunities now and in the future.`
      },
      {
        title: "Step 5: Create Your Video & Submit",
        details: `<strong>Record a 90–120 second video covering Steps 1–4.</strong>

Your video should include:
• The HVACR company you researched
• The career role you explored
• One technology and its impact
• Future demand for HVACR careers

<strong>Format options:</strong>
• Talking head, documentary, animation, or voice-over
• Vertical or horizontal
• Use photos, diagrams, or examples where helpful
• You do not need to appear on camera

<strong>Video length: 90–120 seconds</strong>

Before submitting, check:

✓ Did you feature a real local company?
✓ Did you clearly explain a specific career?
✓ Did you describe a technology and its impact?
✓ Did you show future demand for the role?
✓ Is your video within the time limit?

Make sure your video link is accessible. Test it in an incognito browser before submitting.`
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
        url: '#' // TODO: Replace with detailed rubric URL once created
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: '#' // TODO: Replace with detailed rubric URL once created
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
    {
      title: 'HVACR Career Discovery Quiz',
      description: 'Take this quiz to discover which HVACR career path might be right for you.',
      url: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=6XlFeONDEkClCYLi98eIhNySyCQfGVlLgERmUl35JghURVBES0NMTExMWktBSkhSQlFYWEZLMVNSQS4u&route=shorturl',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Canadian Apprenticeship Registrations and Certifications',
      description: 'Statistics Canada data on apprenticeship registrations and certifications across Canada.',
      url: 'https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2020016-eng.htm',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'NRCan - Heating and Cooling with a Heat Pump',
      description: 'Natural Resources Canada guide on how heat pumps work for heating and cooling.',
      url: 'https://natural-resources.canada.ca/energy-efficiency/energy-star/heating-cooling-heat-pump',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'How Do Heat Pumps Work?',
      description: 'Video explainer on how heat pumps work and why they matter for energy efficiency.',
      url: 'https://www.youtube.com/watch?v=iQaycSD5GWE',
      type: 'video',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Day in the Life of an HVAC Technician',
      description: 'A short video showing what a typical day looks like for an HVAC technician.',
      url: 'https://www.youtube.com/shorts/c8CrrC0YbBo',
      type: 'video',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'HVACJess – The HVAC Diaries',
      description: 'Follow HVACJess for real-world insights into life as an HVAC professional.',
      url: 'https://www.youtube.com/@hvacjess',
      type: 'video',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'HVACR Careers',
      description: 'Explore career paths, job roles, and opportunities in the HVACR industry across Canada.',
      url: 'https://www.hvacrcareers.ca/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'HRAI',
      description: 'Learn about the Heating, Refrigeration and Air Conditioning Institute of Canada and the HVACR industry.',
      url: 'https://www.hrai.ca/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'HRAI Contractor Locator',
      description: 'Find HVACR contractors and companies in your local area using HRAI\'s directory.',
      url: 'https://portal.hrai.ca/contractorlocator',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'HRAI Climate Statement',
      description: 'Read about HRAI\'s climate commitments and the HVACR industry\'s role in Canada\'s environmental goals.',
      url: 'https://www.hrai.ca/Climate%20Statement',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Heat Pump Basics — Natural Resources Canada',
      description: 'Understand how heat pumps work, their benefits, and why they\'re key to energy-efficient buildings.',
      url: 'https://natural-resources.canada.ca/energy-efficiency/electric-heat-pumps/heat-pump-basics',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Job Bank: HVACR Mechanic Outlook',
      description: 'See job prospects, wages, and labour market trends for HVACR mechanics across Canada.',
      url: 'https://www.jobbank.gc.ca/outlookreport/occupation/7516',
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
