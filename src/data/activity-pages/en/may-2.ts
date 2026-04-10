import { ActivityPageData } from '../../activities';

// Export uses camelCase (may2Activity) since 'may-2Activity' isn't a valid identifier
export const may2Activity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '9',
  month: 'May-2',
  year: '2026',
  title: 'Be There Certificate Challenge',
  description: 'Learn to support someone struggling with their mental health through this online course created by Jack.org in partnership with Born This Way Foundation.',
  sponsor: {
    name: 'Jack.org',
    logo: '/jack-logo.png',
    logoType: 'wide'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'may-2',

  // Extended page content
  hero: {
    backgroundImage: '/images/may-hero.jpg', // TODO: Replace with Be There / Jack.org hero image
    backgroundPosition: 'center top',
    tagline: 'Support a Friend. Build a Life Skill.',
    introText: `Complete the free Be There Certificate and submit a short reflection video for your chance to win one of twenty $500 micro grants this May.\n\nThe Be There Certificate is a free, self-paced online course (about 2 hours) created by Jack.org in partnership with the Born This Way Foundation. It teaches the 5 Golden Rules — practical, research-backed ways to safely support a peer who's struggling with their mental health.\n\nKnowing how to show up for the people around you is a life skill, a leadership skill, and a skill every career needs. This month, we're rewarding the students who build it.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/A8ZcIgS3NS8',
    title: 'About the Be There Certificate',
    description: `Watch this video to learn how the Be There Certificate helps young people build the confidence and skills to support a peer facing a mental health struggle.\n\nThese skills matter in school, at work, and in every future career.`
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
    description: `This is a two-part challenge: complete the free <a href="https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Be There Certificate</a> from Jack.org and Born This Way Foundation, then submit a 90–120 second reflection video showing what you learned and how you'd apply it.\n\n<strong>In this challenge, you will:</strong>\n<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem;"><li>Complete the Be There Certificate (approximately 2 hours, self-paced, online)</li><li>Reflect on the 5 Golden Rules and what resonated most with you</li><li>Share how you'd use these skills to support a peer</li><li>Connect mental wellness to your future education and career journey</li></ul><p style="margin-top: 1rem;">Mental wellness is a career and life skill. This challenge recognizes students who are willing to build it and encourage others to do the same.</p>`,
    steps: [
      {
        title: "Step 1: Complete the Be There Certificate",
        details: `<strong>Complete the free Be There Certificate from Jack.org and Born This Way Foundation.</strong>

<a href="https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Start the Be There Certificate here →</a>

What to expect:
• <strong>Free</strong> — no cost, no subscription
• <strong>Self-paced</strong> — complete it in one sitting or across multiple sessions
• <strong>About 2 hours</strong> of online learning
• <strong>Created by Jack.org</strong> in partnership with the Born This Way Foundation

<strong>What you'll learn:</strong>
The certificate teaches the 5 Golden Rules — practical, research-backed ways to safely support a peer who is struggling with their mental health. You'll learn how to recognize signs of struggle, listen actively, set healthy boundaries, and know when to connect someone with further help.

You'll need to complete the certificate before you can record your reflection video in Step 2.`
      },
      {
        title: "Step 2: Record Your Reflection Video (90–120 seconds)",
        details: `<strong>Your video must include all 5 of the following elements:</strong>

<strong>1. Certificate Completion:</strong> Successfully complete the Be There Certificate (approximately 2 hours of self-paced online learning).

<strong>2. Personal Reflection:</strong> Share 2–3 key takeaways from the certificate that resonated most with you.

<strong>3. Peer Support Example:</strong> Describe one specific way you could use the 5 Golden Rules to support a friend, classmate, or future colleague.

<strong>4. Future Application:</strong> Explain how the skills learned (like active listening, setting boundaries, and recognizing signs of struggle) will help you in your future education or career/life journey.

<strong>5. Call to Action:</strong> Encourage other students to prioritize mental wellness as part of their career and life planning journey.

<strong>Format options:</strong>
• Talking head, documentary, animation, or voice-over
• Vertical or horizontal
• Use photos, graphics, or examples where helpful
• You do not need to appear on camera

<strong>Video length: 90–120 seconds</strong>

Make sure your video link is accessible. Test it in an incognito browser before submitting.`
      },
      {
        title: "Step 3: Submit Your Video",
        details: `<strong>Before submitting, check:</strong>

✓ Did you complete the Be There Certificate?
✓ Did you cover all 5 required elements in your video?
✓ Is your video between 90 and 120 seconds?
✓ Is your video link public and accessible in an incognito browser?
✓ Did you include a clear call to action at the end?

When you're ready, use the submission button below to share your video link and a few short details about your entry.`
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Certificate Completion & Reflection Depth',
        weight: 25,
        description: 'Be There Certificate completed and 2–3 personal takeaways shared with thoughtful, specific detail'
      },
      {
        category: 'Peer Support Application (5 Golden Rules)',
        weight: 25,
        description: 'Concrete, realistic example of using the 5 Golden Rules to support a friend, classmate, or future colleague'
      },
      {
        category: 'Engagement & Creativity',
        weight: 25,
        description: 'Compelling delivery that maintains viewer interest through creative presentation and a clear call to action'
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
    instructions: 'Submit your Be There Certificate Challenge video for the May challenge. Make sure your video link is accessible (test in incognito mode) before submitting.'
  },

  faqs: [
    {
      question: 'How does this May Activity challenge work?',
      answer: 'Carefully read the Activity Details steps 1-3 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 90–120 second reflection video after completing the free Be There Certificate from Jack.org. Your video must include all 5 required elements: certificate completion, a personal reflection (2–3 key takeaways), a peer support example using the 5 Golden Rules, how you'll apply the skills in your future education or career, and a call to action for other students. Make sure your video link has proper sharing settings — test it in an incognito browser window before submitting.`
    },
    {
      question: 'Is proof of certificate completion required in the video?',
      // CLIENT CONFIRM: Jack.org to confirm whether on-camera proof is required
      answer: `Yes — clearly mention that you've completed the Be There Certificate in your video. We may request proof of completion (e.g., a screenshot of your certificate) from winning submissions, so hold onto it.`
    },
    {
      question: 'How much does the Be There Certificate cost?',
      answer: `Nothing. The Be There Certificate is completely free and self-paced. It was created by Jack.org in partnership with the Born This Way Foundation and takes about 2 hours to complete.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `You only need to complete the Be There Certificate once, so a single well-crafted reflection video is the expectation. Students can only win one micro grant per activity — focus on quality, not quantity.`
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: `No, it's whatever feels authentic and engaging to you. It can be a TikTok style video with lots of different cuts and background music or more documentary style — whatever you will enjoy making more, and clearly communicates all 5 required elements.`
    },
    {
      question: 'Does it matter what tool I use to make the video?',
      answer: `Nope, it doesn't matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to be able to create videos with.`
    },
    {
      question: 'What skills will I be developing by doing this activity?',
      answer: `Lots of skills like active listening, empathy, communication, critical thinking, content creation, and peer support — all of which matter in every future career. You'll also build confidence in knowing how to show up for the people around you. It would be a good idea to add the completed video to your myBlueprint portfolio and reflect on what skills you feel like you've developed.`
    },
    {
      question: 'Who is reviewing the submissions?',
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from Jack.org.`
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
      answer: `The Be There Certificate Challenge has been designed as an individual activity. Each student must complete their own Be There Certificate and submit their own reflection video.`
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
      title: 'Be There Certificate',
      description: 'Start the free, self-paced Be There Certificate from Jack.org and Born This Way Foundation (~2 hours).',
      url: 'https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Jack.org',
      description: 'Learn about Jack.org, Canada\'s only charity training and empowering young leaders to revolutionize mental health.',
      url: 'https://jack.org/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Born This Way Foundation',
      description: 'Learn about the Born This Way Foundation, co-founded by Lady Gaga and Cynthia Germanotta to support youth mental wellness.',
      url: 'https://bornthisway.foundation/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Kids Help Phone',
      description: 'Canada\'s 24/7 e-mental health service offering free, confidential support to young people in English and French.',
      url: 'https://kidshelpphone.ca/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    }
    // TODO: Add additional Jack.org resources (5 Golden Rules page, talks, articles) once client confirms list
  ],
  resourcesTitle: 'Be There & Mental Wellness Resources',
  resourcesSubtitle: 'Complete the certificate and explore more mental wellness support',

  meta: {
    title: 'Be There Certificate Challenge - May 2026 | Industry Immersion Series',
    description: 'Complete the free Be There Certificate from Jack.org and share a reflection video on how you\'d support a peer. Win up to $500 in micro grants.',
    ogImage: '/jack-logo.png'
  }
};
