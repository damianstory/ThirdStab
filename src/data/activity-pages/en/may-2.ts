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
    backgroundImage: '/images/be-there-certificate-hero.png',
    backgroundPosition: 'center top',
    tagline: 'Support a Friend. Build a Life Skill.',
    introText: `Students: complete the free Be There Certificate and submit a short reflection video for your chance to win one of twenty $500 micro grants this May.\n\nThe Be There Certificate is a free, self-paced online course (about 2 hours) created by Jack.org in partnership with the Born This Way Foundation. It teaches the 5 Golden Rules — practical, research-backed ways to safely support a peer who's struggling with their mental health.`
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
    title: 'Student Activity Overview',
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
    titleEn: 'Student Activity Details',
    description: `This is a two-part challenge: complete the free <a href="https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Be There Certificate</a> from Jack.org and Born This Way Foundation, then submit a short 30–60 second reflection video sharing your biggest takeaway.\n\n<strong>In this challenge, you will:</strong>\n<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem;"><li>Complete the Be There Certificate (approximately 2 hours, self-paced, online)</li><li>Reflect on what resonated most with you from the course</li><li>Share one authentic takeaway in a short video</li></ul><p style="margin-top: 1rem;">Mental wellness is a career and life skill. This challenge recognizes students who are willing to build it and encourage others to do the same.</p>`,
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
        title: "Step 2: Record Your Reflection Video (30–60 seconds)",
        details: `<strong>What your video needs to cover:</strong>

Share one clear, authentic takeaway from completing the Be There Certificate and how you can see yourself applying something you learned from the course in your day-to-day life.

<strong>Optional prompts</strong> — pick any that resonate (you don't need to cover all of them):
• Was there a <strong>golden rule</strong> that stuck out to you? Why?
• How could you see yourself using what you learned in day-to-day life or a future career?
• Was there a specific moment, story, or lesson from the course that really landed for you?

If you want to, you can also end the video with a call to action encouraging other young people to complete the course.

<strong>Format options:</strong>
• Talking head, documentary, animation, or voice-over
• Vertical or horizontal
• Use photos, graphics, or examples where helpful
• You do not need to appear on camera

<strong>Video length: 30–60 seconds</strong>

Make sure your video link is accessible. Test it in an incognito browser before submitting.`
      },
      {
        title: "Step 3: Submit Your Video",
        details: `<strong>How to host your video:</strong>

You need to submit a <strong>shareable link</strong> we can click on — <strong>not</strong> an uploaded <code>.mp4</code> file. Upload your finished video to one of these free options and then share the link:

• <strong>Google Drive</strong> — upload the file, right-click → Share → set access to "Anyone with the link"
• <strong>OneDrive</strong> — upload the file, click Share → copy a link with "Anyone with the link can view"
• <strong>YouTube (Unlisted)</strong> — upload the video and set visibility to "Unlisted" so only people with the link can see it

<strong>Important:</strong> before you submit, open your link in an incognito/private browser window to make sure it actually plays without requiring sign-in. If we can't open it, we can't review it.

<strong>Before submitting, check:</strong>

✓ Did you complete the Be There Certificate?
✓ Did you share a clear, authentic takeaway from the course?
✓ Is your video between 30 and 60 seconds?
✓ Is your video hosted on Google Drive, OneDrive, or YouTube (Unlisted) — not an <code>.mp4</code> file?
✓ Is your video link public and accessible in an incognito browser?

When you're ready, use the submission button below to share your video link and a few short details about your entry.`
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Reflection Depth',
        weight: 40,
        description: 'Clear, specific personal takeaway from the Be There Certificate, referencing a golden rule, course moment, or idea that genuinely landed'
      },
      {
        category: 'Personal Application',
        weight: 20,
        description: 'Authentic example of how the student sees themselves using what they learned in everyday life, school, or a future career'
      },
      {
        category: 'Engagement & Creativity',
        weight: 20,
        description: 'Compelling, authentic delivery that holds viewer interest'
      },
      {
        category: 'Communication & Clarity',
        weight: 20,
        description: 'Clear audio/visuals with logical flow, and meets the 30–60 second length'
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
      answer: `You're being asked to submit a short 30–60 second reflection video after completing the free Be There Certificate from Jack.org. The only requirement is that you share one clear, authentic takeaway from the course. You can optionally talk about a golden rule that stuck out to you, how you see yourself using what you learned, or a specific moment from the course that landed for you. Make sure your video link has proper sharing settings — test it in an incognito browser window before submitting.`
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
      answer: `No, it's whatever feels authentic and engaging to you. It can be a TikTok style video with lots of different cuts and background music or more documentary style — whatever you will enjoy making more, as long as your takeaway comes through clearly.`
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

  // edHUB Jack Intersections educator promo banner. Attribution text is still placeholder —
  // swap once Jack.org confirms final copy.
  promotionalBanner: {
    imageEn: '/promotional-banners/jack-intersections-may-2026-en.png',
    imageFr: '/promotional-banners/jack-intersections-may-2026-en.png',
    altTextEn: 'Jack Intersections on edHUB — six classroom-ready lessons for educators',
    altTextFr: 'Jack Intersections sur edHUB — six leçons prêtes à enseigner pour les éducateurs',
    link: 'https://edhub.jack.org/intersections',
    attributionTextEn: 'Educators: we didn\'t forget about you! The activity below and micro-grants are for students, but if you download any of these <a href="https://edhub.jack.org/intersections" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Jack Intersection resources</a> before May 31st, you\'ll be entered for a chance to win a $100 gift card of your choice courtesy of Jack.org',
    attributionTextFr: 'Éducateurs : découvrez Jack Intersections sur edHUB — six leçons gratuites, éclairées par les traumatismes, prêtes à enseigner. Téléchargez une ressource en mai 2026 pour courir la chance de gagner une carte-cadeau de 100 $ de votre choix offerte par Jack.org.'
  },

  meta: {
    title: 'Be There Certificate Challenge - May 2026 | Industry Immersion Series',
    description: 'Complete the free Be There Certificate from Jack.org and share a reflection video on how you\'d support a peer. Win up to $500 in micro grants.',
    ogImage: '/jack-logo.png'
  }
};
