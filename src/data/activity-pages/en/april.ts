import { ActivityPageData } from '../../activities';

export const aprilActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '7',
  month: 'April',
  year: '2026',
  title: 'Tourism Itinerary Challenge',
  description: 'Explore one of the world\'s fastest-growing industries. Design a unique local tourism experience that puts your community on the map and discover career opportunities in tourism.',
  sponsor: {
    name: 'Discover Tourism',
    logo: '/images/discover-tourism-logo.png',
    logoType: 'wide'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'april',

  // Extended page content
  hero: {
    backgroundImage: '/images/april-hero.png',
    backgroundPosition: 'top center',
    tagline: 'Design a Tourism Experience That Puts Your Community on the Map',
    introText: `Tourism is one of the fastest-growing industries in Canada, supporting over two million jobs and connecting communities from coast to coast to coast. In this challenge, you'll design a unique local itinerary showcasing the less-explored, distinctive features of your hometown or region — the hidden gems that visitors may not find on their own.`
  },

  video: {
    embedUrl: 'https://drive.google.com/file/d/1cHeffAI5X8HLdV6irDpV-6tVopkCeoEv/preview',
    title: 'About Discover Tourism',
    description: `Watch this video to explore how Discover Tourism is helping young people explore career opportunities in one of the world's fastest-growing industries. Then read on to see how you can take part in the Tourism Itinerary Challenge, design a unique tourism experience, and earn micro grants while building real-world skills.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/PLACEHOLDER',
    title: 'How this Works - April Challenge'
  },

  explainer: {
    title: 'Challenge Overview',
    rows: [
      {
        label: 'Active Submission Period',
        content: 'April 1-30, 2026'
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
        content: 'April 30, 2026 at 11:59 PM EDT'
      }
    ]
  },

  activityDetail: {
    description: `Canada's tourism industry is booming — and every community has something unique to offer. <strong>In this challenge, you'll design a one-of-a-kind local tourism experience</strong> that highlights the hidden gems of your hometown or region, explains who it's for, shows how it benefits the local economy, and connects it all to real careers in tourism.`,
    steps: [
      {
        title: "Step 1: Design Your Experience Concept",
        details: `<strong>Create a detailed weekend itinerary for a unique tourism experience in your hometown or region.</strong>

Your experience should:
• Showcase less-explored or distinctive local features — not the obvious tourist spots everyone already knows about
• Include specific stops, activities, or highlights that make your itinerary stand out
• Show that you're thinking about environmentally and community-conscious choices in your itinerary

Think about details like:
• Supporting local businesses and artisans instead of big chains
• Keeping your environmental footprint low, such as eco-friendly ways to get around (walking tours, bike routes, public transit)
• Highlighting Indigenous culture or local heritage (with respect and authenticity)
• Who the tourist will interact with, what their role is, and how they contribute to the experience

Think about what makes your community special — the places, people, stories, and traditions that visitors may not discover on their own.`
      },
      {
        title: "Step 2: Know Your Audience",
        details: `<strong>Identify the target visitor demographic for your experience.</strong>

Consider who would be most interested:
• Families with young kids?
• Adventure seekers?
• Foodies and culinary tourists?
• Cultural tourists interested in history or the arts?
• Eco-tourists and nature lovers?
• Young travellers looking for unique experiences?

<strong>Explain:</strong>
• Why your experience would appeal to this audience
• What makes your region uniquely suited for this demographic
• What would draw them to your community over other destinations`
      },
      {
        title: "Step 3: Local Impact Statement",
        details: `<strong>List the actual businesses and services a visitor would interact with during your experience.</strong>

Think about every stop on your itinerary:
• Where would they stay? (hotel, B&B, campground)
• Where would they eat? (restaurants, cafés, food trucks)
• What attractions would they visit? (museums, parks, zoos)
• What experiences would they take part in? (sports, concerts, festivals)
• What services would they use? (bike rental, guided tour, shuttle)
• Where would they shop? (local artisans, gift shops, markets)

<strong>Explain how your experience supports these businesses</strong> and contributes to <strong>tourism jobs and community development</strong> in your area.

<strong>Pro tip:</strong> Think about the full end-to-end journey of a visitor — from the moment they arrive (airport, train station, highway) to the moment they leave. Every step of that journey involves a local business or service. The more of these you can identify, the stronger your impact statement will be.`
      },
      {
        title: "Step 4: Create Your Video",
        details: `<strong>Record a 90-120 second video covering Steps 1-3.</strong>

Your video should walk through:
• Your experience concept and what makes it unique
• Your target audience and why they'd love it
• The local impact and businesses involved
• The tourism roles connected to your experience

<strong>Format is flexible:</strong>
• Talking head, animation, documentary style, vlog — whatever works for you
• Vertical or horizontal — your choice
• Props, maps, photos of your community are encouraged
• You don't have to show your face if you prefer voice-over with visuals

<strong>Video length: 90-120 seconds (1.5-2 minutes)</strong>`
      },
      {
        title: "Step 5: Review & Submit",
        details: `Before submitting, review your video:

✓ Does your experience showcase less-explored, distinctive local features?
✓ Did you include environmentally and community-conscious choices?
✓ Did you identify a clear target audience?
✓ Did you list the actual businesses and services a visitor would use?
✓ Did you list some actual roles/careers people might interact with, e.g. tour guide, chef, hotel staff, etc.?
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
        description: 'Clear audio/visuals with logical organization, smooth flow, and meets 90-120 second requirement'
      },
      {
        category: 'View Detailed Evaluation Rubric Here',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/165da92c-9757-4b52-98ae-c31ab5a9e3f1'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/165da92c-9757-4b52-98ae-c31ab5a9e3f1'
  },

  submission: {
    url: '#',
    deadline: new Date('2026-04-30T23:59:59-04:00'),
    instructions: 'Submit your local tourism experience video for the April challenge. Make sure your video link is accessible (test in incognito mode) before submitting.'
  },

  faqs: [
    {
      question: 'How does this April Activity challenge work?',
      answer: 'Carefully read the Activity Details steps 1-5 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 90-120 second video highlighting the research and planning you did from steps 1 through 3. Your video should cover: your tourism experience concept, your target audience, and the local businesses and economic impact. Make sure your video link has proper sharing settings — test it in an incognito browser window before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can complete the activity multiple times exploring different tourism experiences, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.`
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: `No, it's whatever feels authentic and engaging to you. It can be a TikTok style video with lots of different cuts and background music or more documentary style — whatever you will enjoy making more, and clearly communicates the requested information from steps 1-3.`
    },
    {
      question: 'Does it matter what tool I use to make the video?',
      answer: `Nope, it doesn't matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to be able to create videos with.`
    },
    {
      question: 'What skills will I be developing by doing this activity?',
      answer: `Lots of skills like research, critical thinking, communication, content creation, and entrepreneurial thinking. You'll also learn about tourism planning, economic impact analysis, environmentally conscious decision-making, and career exploration. It would be a good idea to add the completed video to your myBlueprint portfolio and reflect on what skills you feel like you've developed.`
    },
    {
      question: 'Who is reviewing the submissions?',
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from Discover Tourism.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `Yes, videos will be accepted in either English or French.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the April winners by mid-May.`
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
      answer: `The Local Tourism Challenge has been designed as an individual activity.`
    },
    {
      question: 'Can I still submit the activity after the April 30th deadline?',
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
      title: 'Tourism HR Canada: Tourism Facts',
      description: 'Key facts and labour market data about Canada\'s tourism industry.',
      url: 'https://tourismhr.ca/labour-market-information/tourism-facts/',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Discover Tourism: Career Pathways',
      description: 'Explore career pathways and opportunities in Canada\'s tourism sector.',
      url: 'https://discovertourism.ca/guidebook/career-pathways/',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Discover Tourism: Career Map',
      description: 'Interactive career map to explore roles across the tourism industry.',
      url: 'https://discovertourism.ca/tool/interactive-career-map/',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Destination Canada: Value of Tourism',
      description: 'Learn about the economic value and impact of tourism across Canada.',
      url: 'https://www.destinationcanada.com/en-ca/value-of-tourism',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Destination Canada: Traveller Website',
      description: 'Discover tourism experiences and destinations across Canada for inspiration.',
      url: 'https://travel.destinationcanada.com/en-ca',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Canadian Academy of Travel & Tourism: Student Resources',
      description: 'Student resources from the Canadian Academy of Travel & Tourism to support your tourism challenge.',
      url: 'https://discovertourism.ca/wp-content/uploads/2026/03/myBlueprint-Discover-Tourism-Student-Resources.pdf',
      type: 'pdf',
      borderColor: '#03333d',
      borderOnly: true
    }
  ],
  resourcesTitle: 'Discover Tourism Resources',
  resourcesSubtitle: 'Explore these resources to support your research',

  meta: {
    title: 'Tourism Itinerary Challenge - April 2026 | Industry Immersion Series',
    description: 'Design a unique local tourism itinerary, explore career opportunities in Canada\'s tourism industry, and win up to $500 in micro grants with Discover Tourism.',
    ogImage: '/images/discover-tourism-logo.png'
  }
};
