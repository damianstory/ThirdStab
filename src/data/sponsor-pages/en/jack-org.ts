import { SponsorPageData } from '../../sponsors';

export const jackOrgSponsor: SponsorPageData = {
  // Base sponsor information
  id: '9',
  name: 'Jack.org',
  logo: '/images/jack-org-logo.png',
  incentiveType: 'activity',
  contribution: 'Activity: May 2026',
  slug: 'jack-org',

  // Extended page content
  hero: {
    tagline: 'Learn to Be There for the People You Care About',
    introText: 'Jack.org and the Industry Immersion Series have partnered to bring students the Be There Certificate Challenge. Complete the free online course, reflect on what you learned, and you could earn a $500 micro grant.'
  },

  about: {
    title: 'About the Be There Certificate',
    description: `Ever wish you knew exactly what to say when a friend opens up about something tough?

You're not alone. Most young people want to support others but don't always feel prepared. The Be There Certificate changes that.

Created by Jack.org and Born This Way Foundation, this self-paced 2-hour online course teaches you five simple, but powerful "Rules" to effectively Be There for someone. These are skills you can use every day for the rest of your life, to show up for the people you care about - and yourself!

It's quick, interactive, and available in English, French, and Spanish. If you want to be the friend who makes someone feel seen, safe, and supported, this is where you start.`,
    industry: 'Mental Health & Youth Support',
    website: 'https://www.jack.org'
  },

  partnership: {
    description: `This activity is all about learning skills that matter—skills you can use to support your friends, family, and yourself.

Starting **May 1st, 2026**, complete the free Be There Certificate course and create a short video reflection sharing what you learned and how you plan to use these skills. Twenty students will be selected to receive $500 micro grants.

The Be There Certificate teaches you five simple rules to safely support someone who's struggling with their mental health. It's available in English, French, and Spanish, and takes about 2 hours to complete at your own pace.`,
    hideIcon: true,
    steps: [
      'Complete the free **Be There Certificate** course at <a href="https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion" target="_blank" rel="noopener noreferrer" class="text-brandBlue hover:underline">betherecertificate.org</a> (approximately 2 hours, self-paced)',
      'Create a **60-90 second video reflection** sharing what you learned from the course and how you plan to use these skills to support others',
      'Submit your video link and proof of certificate completion through the submission form **between May 1st and May 31st, 2026**',
      '20 students will be selected to receive **$500 micro grants** for outstanding reflections'
    ]
  },

  // Single info card about Jack.org (instead of incentive + deadline cards)
  infoCard: {
    title: 'About Jack.org',
    description: `Jack.org is Canada's largest network of young people supporting young people's mental health. Founded in 2010 to honor Jack Windeler, they empower youth to learn about mental health, support their peers, and advocate for change.

Don't want to wait? Complete the <a href="https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Be There Certificate</a> today and record your video reflection when the activity opens in May 2026!`
  },

  faqs: [
    {
      question: 'How does this May Activity challenge work?',
      answer: 'First, complete the free Be There Certificate course at bethere.org. The course takes about 2 hours and teaches you five rules to support someone struggling with their mental health. Once you\'ve completed the course, create a 60-90 second video reflection sharing what you learned and how you plan to use these skills. Submit your video and certificate proof through the submission form.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: 'You\'re being asked to submit two things: (1) proof that you completed the Be There Certificate (a screenshot of your certificate or completion page), and (2) a 60-90 second video reflection about what you learned. Make sure your video link is shareable—test it in an incognito browser window before submitting.'
    },
    {
      question: 'Can I submit more than one video?',
      answer: 'Since the Be There Certificate is a one-time course, you would only complete it once. If you\'ve already completed the certificate before this activity launched, you can still participate by creating a fresh video reflection. Students can only win one micro grant per activity.'
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: 'No, it\'s whatever feels authentic and engaging to you. It can be a TikTok style video with lots of different cuts and background music or more documentary style—whatever you enjoy making more and clearly communicates your reflection on the Be There Certificate.'
    },
    {
      question: 'Does it matter what tool I use to make the video?',
      answer: 'Nope, it doesn\'t matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to create videos with.'
    },
    {
      question: 'What skills will I be developing by doing this activity?',
      answer: 'Beyond the video creation skills (communication, content creation, digital literacy), you\'ll be developing crucial mental health support skills. The Be There Certificate teaches you how to recognize when someone needs support, how to listen without judgment, and how to connect people with professional help when needed. These are life skills you\'ll use forever.'
    },
    {
      question: 'Who is reviewing the submissions?',
      answer: 'Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from Jack.org.'
    },
    {
      question: 'Can students submit their videos in French?',
      answer: 'Yes, videos will be accepted in either English or French. The Be There Certificate itself is also available in French and Spanish.'
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: 'Depending on the volume of submissions, we plan to have selected, and be able to announce winners by the midpoint of the following month. So for this activity, we hope to announce the May winners by mid-June.'
    },
    {
      question: 'Should I add these submissions to my portfolio in myBlueprint?',
      answer: 'Yeah, that\'s a great idea, along with a reflection of what you learned from doing this activity and what you found meaningful about the Be There Certificate. As a heads up, we\'ll also be asking students to submit evidence of their completed activities through a myBlueprint portfolio if you plan on applying for one of the Series Completion incentives at the end of the year.'
    },
    {
      question: 'Do I need to do this in class, or can I just do this on my own?',
      answer: 'You can absolutely complete this activity on your own. That being said, you should communicate with your teachers (and parents) that you\'re doing this and see if you can potentially earn credit for the work that you\'re doing for this activity.'
    },
    {
      question: 'Can I do this as a group project?',
      answer: 'The May challenge has been designed as an individual activity. Each person needs to complete their own Be There Certificate and create their own video reflection.'
    },
    {
      question: 'Can I still submit the activity after the May 31st deadline?',
      answer: 'Yes, you can still submit monthly activities after the deadline. However, any activity submitted after the deadline is not eligible for that month\'s pool of micro grants. It still makes sense to complete them even after the deadline so that you can potentially earn one of the Series Completion incentives. Those only require all activities to be completed, not necessarily completed within the month of the activity.'
    },
    {
      question: 'Will teachers be able to see who has submitted an entry?',
      answer: 'Teachers won\'t be able to see through myBlueprint which students have submitted activities or not. However, we will create reports that will be shared with your myBlueprint lead at the school board level who can share specifics with you upon request.'
    },
    {
      question: 'What data is being collected and by who?',
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series.

Meaning that only myBlueprint is collecting any information related to this Series. No personally identifiable information is being shared with any 3rd parties.

We will publish de-identified (anonymous summary data) information to provide updates on how the Series is going. For example, the number of activity submissions received for each month, which province they're coming from, and communicate with our school board partners about school-specific participation.

<a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Click here to see the questions students are being asked</a> to answer when they submit their completed activity.`
    }
  ],

  cta: {
    primaryLabel: 'Get the Be There Certificate',
    primaryUrl: 'https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion',
    secondaryLabel: 'Learn About Jack.org',
    secondaryUrl: 'https://www.jack.org/'
  },

  meta: {
    title: 'Jack.org | Industry Immersion Series Sponsor',
    description: 'Complete the Be There Certificate and reflect on your learning. Jack.org partners with the Industry Immersion Series to help students develop mental health support skills.',
    ogImage: '/images/sponsors/jack-org-og.png'
  }
};
