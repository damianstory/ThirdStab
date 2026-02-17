import { ActivityPageData } from '../../activities';

export const marchActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '6',
  month: 'March',
  year: '2026',
  title: 'Teach Me Taxes Challenge',
  description: `People love to complain that we should be learning life skills in school like how to do our taxes. Bet. In this challenge, you'll learn what taxes are, how they work, and why you should care.`,
  sponsor: {
    name: 'H&R Block Canada',
    logo: '/logo6.jpeg',
    logoType: 'wide'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'march',

  // H&R Block brand styling
  accentColor: '#14aa40',
  secondaryAccentColor: '#005d1f',
  sponsorFontClass: 'font-graphik',
  showSponsorInHeader: true,

  // Extended page content
  hero: {
    backgroundImage: '/march-hero.jpg',
    backgroundPosition: 'center top',
    tagline: 'Learn the life skill everyone wishes they\'d learned in school',
    introText: `A lot of us wish school had spent a little more time on real life skills – like, how to do your taxes. So, here's your chance to finally learn it… and get paid for it.\n\nIn this challenge, you'll pick a cluster of related tax concepts, explore them using H&R Block Canada's expert resources, and create a short video teaching what you learned. By the end, you'll have a clear, confident understanding of how Canadian taxes work – a valuable skill most adults wish they had.`
  },

  video: {
    embedUrl: 'https://hrblockca.sharepoint.com/sites/Marketing2/_layouts/15/embed.aspx?UniqueId=93881628-6b11-442a-9a71-bb65b42247db&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create',
    title: 'About H&R Block Canada',
    description: `Watch this video to learn what the Teach Me Taxes Challenge is all about and how H&R Block Canada is helping young people build real financial skills. You'll see how you can take part, learn the basics of income tax, and even earn micro grants while boosting your financial confidence.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/placeholder',
    title: 'How this Works - March Challenge'
  },

  explainer: {
    title: 'Challenge Overview',
    rows: [
      {
        label: 'Active Submission Period',
        content: 'March 1-31, 2026'
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
        content: 'March 31, 2026 at 11:59 PM EST'
      }
    ]
  },

  activityDetail: {
    description: `<strong>This challenge is about learning AND teaching.</strong> You'll pick one cluster of related tax concepts, dive deep into understanding them, and then create a video that teaches these concepts to someone who knows nothing about taxes.<br/><br/>Scroll down to the <strong>Topic Clusters</strong> section below to choose your cluster and see detailed guidance on what to cover.`,
    steps: [
      {
        title: "Step 1: Choose Your Tax Topic Cluster",
        details: "Look at the 6 topic clusters below and <strong>pick the one that interests you most</strong>.\n\nEach cluster contains 2-3 related tax concepts that connect to each other. Your job will be to understand all the concepts in your chosen cluster and explain how they relate.\n\nTip: Pick a topic that feels relevant to your life right now or your near future. If you have a part-time job, Cluster 1 might interest you. If you're planning for college, Cluster 6 could be perfect."
      },
      {
        title: "Step 2: Research Using H&R Block Canada Resources",
        details: "Use the <strong>H&R Block Canada articles in the Resources section below</strong> to learn about your chosen cluster's concepts.\n\nThese articles are written by Tax Experts and are specifically designed to help students and young adults understand taxes. Take notes as you read — you'll need to explain these concepts clearly in your video.\n\nPro tip: Don't just skim. Really try to understand WHY these concepts matter and HOW they connect to each other within your cluster."
      },
      {
        title: "Step 3: Plan Your Explanation",
        details: "Before you start recording, think about <strong>how you'd explain these concepts to a friend or family member</strong> who knows nothing about taxes.\n\nKey questions to answer in your video:\n• What are the main concepts in your cluster?\n• Why do they matter for young Canadians?\n• How do the concepts in your cluster connect to each other?\n\nRemember: The best teachers make complex things simple. Use examples, analogies, or visuals to make your explanation clear and memorable."
      },
      {
        title: "Step 4: Create Your Video",
        details: "<strong>Record a 90-120 second video</strong> teaching your cluster's concepts clearly.\n\nYour video should:\n• Introduce your topic cluster\n• Explain each concept in the cluster\n• Show how the concepts connect to each other\n• Help the viewer actually understand and remember the information\n\nFormat is flexible:\n• Talking head, animation, whiteboard explanation — whatever works for you\n• Vertical or horizontal — your choice\n• Props, diagrams, or screen recordings are encouraged\n• You don't have to show your face if you prefer voice-over with visuals\n\n<strong>Video length: 90-120 seconds (1.5-2 minutes)</strong>"
      },
      {
        title: "Step 5: Review & Submit",
        details: "Before submitting, review your video:\n\n✓ Is the information accurate? (Double-check against H&R Block Canada resources)\n✓ Did you cover all concepts in your cluster?\n✓ Did you explain how the concepts connect?\n✓ Would someone watching actually learn from this?\n✓ Is your video between 90-120 seconds?\n\n<strong>Make sure your video link has proper sharing settings</strong> — test it in an incognito browser window before submitting.\n\n<em>Note: Submissions are not yet open. Check back when the March challenge goes live!</em>"
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
        url: '#'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: '#'
  },

  submission: {
    url: '#', // Placeholder - submissions not open yet
    deadline: new Date('2026-03-31T23:59:59-04:00'),
    instructions: 'Submissions are not yet open for the March challenge. Check back when the challenge goes live to submit your tax education video. Make sure your video link is accessible (test in incognito mode) before submitting.'
  },

  faqs: [
    {
      question: 'How does this March Activity challenge work?',
      answer: 'Carefully read the Activity Details steps 1-5 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 60 to 90 second video highlighting the research you did from steps 1 through 5 in this specific activity. It's important that the video you create is shared as a clickable link, not something that we need to download, and that you've made sure that the sharing settings are set up in a way that we have access to view the video. It's a good idea to test this before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can complete the activity multiple times for different tax topics, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.`
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
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from H&R Block Canada.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `Yes, videos will be accepted in either English or French.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected, and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the March winners by mid-April.`
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
      answer: `The March challenge has been designed as an individual activity.`
    },
    {
      question: 'Can I still submit the activity after the March 31st deadline?',
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
      title: '5 Things You Should Know About Taxes That You Didn\'t Learn in School',
      description: 'Essential tax knowledge every student needs — from H&R Block experts',
      url: 'https://www.hrblock.ca/blog/5-things-you-should-know-about-taxes-that-you-didnt-learn-in-school',
      type: 'article',
      buttonText: 'Read Article'
    },
    {
      title: 'Life After High School Through a Tax Lens',
      description: 'How taxes change as you move into adulthood — work, school, and beyond',
      url: 'https://www.hrblock.ca/blog/life-after-high-school-through-a-tax-lens',
      type: 'article',
      buttonText: 'Read Article'
    },
    {
      title: 'Your Go-To Guide for Income Taxes in Canada for Students',
      description: 'Student-specific tax guide covering everything from T4s to credits',
      url: 'https://www.hrblock.ca/blog/your-go-to-guide-for-income-taxes-in-canada-for-students',
      type: 'article',
      buttonText: 'Read Article'
    },
    {
      title: 'A Beginner\'s Guide on Taxes for Teenagers and Young Adults',
      description: 'Perfect starting point for understanding Canadian taxes',
      url: 'https://www.hrblock.ca/blog/a-beginner-s-guide-on-taxes-for-teenagers-and-young-adults',
      type: 'article',
      buttonText: 'Read Article'
    },
    {
      title: 'Purpose of Taxes – Canada.ca',
      description: 'Official government resource on why we pay taxes and where the money goes',
      url: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/educational-programs/purpose-taxes.html',
      type: 'link',
      buttonText: 'Visit Site'
    },
    {
      title: 'Understanding Tax Deductions on Your Pay Stub',
      description: 'Learn what CPP, EI, and other deductions mean on your paycheck',
      url: 'https://www.getsmarteraboutmoney.ca/learning-path/understanding-tax/understanding-the-tax-deductions-on-your-pay-stub/',
      type: 'link',
      buttonText: 'Visit Site'
    }
  ],
  resourcesTitle: 'H&R Block Canada Learning Resources',
  resourcesSubtitle: 'Use these expert resources to research your chosen tax topic cluster',

  topicClusters: [
    {
      id: 'cluster-1',
      number: 1,
      title: '"Where Does My Paycheck Go?"',
      concepts: 'Pay stub basics, CPP deduction, EI deduction',
      detailedContent: `
        <h4>What to Cover in Your Video</h4>
        <p>This cluster is all about understanding the deductions that reduce your paycheck before you even see the money. Your video should help viewers understand why their take-home pay is less than their hourly rate suggests.</p>

        <h4>Pay Stub Basics</h4>
        <ul>
          <li>What a pay stub is and why it matters</li>
          <li>The difference between <strong>gross pay</strong> (what you earned) and <strong>net pay</strong> (what you actually receive)</li>
          <li>Why understanding your pay stub helps you budget and spot errors</li>
        </ul>

        <h4>CPP (Canada Pension Plan)</h4>
        <ul>
          <li>What CPP is: a mandatory retirement savings program</li>
          <li>How it works: you contribute now, receive payments when you retire</li>
          <li>Who pays: both you AND your employer contribute (so you're building retirement savings you might not even realize)</li>
          <li>Why it matters: helps ensure you have income in retirement</li>
        </ul>

        <h4>EI (Employment Insurance)</h4>
        <ul>
          <li>What EI is: insurance that provides income if you lose your job</li>
          <li>How it works: small deductions now = financial safety net later</li>
          <li>What it covers: job loss, parental leave, sickness benefits</li>
          <li>Why it matters: protects you during unexpected life changes</li>
        </ul>

        <h4>How These Connect</h4>
        <p>All three concepts are about understanding paycheck deductions — money that's taken out before you receive your pay. Help viewers see that these aren't just "lost" money, but are building their retirement security (CPP) and providing a safety net (EI).</p>
      `
    },
    {
      id: 'cluster-2',
      number: 2,
      title: '"Why We Pay Taxes"',
      concepts: 'Purpose of taxes, where the money goes, public services funded',
      detailedContent: `
        <h4>What to Cover in Your Video</h4>
        <p>This cluster is about the big picture — why taxation exists and what it funds.</p>

        <h4>Purpose of Taxes</h4>
        <ul>
          <li>Taxes fund the services and infrastructure we all use</li>
          <li>They're how we collectively pay for things that benefit everyone</li>
          <li>The "social contract" idea: we all contribute to things we all benefit from</li>
        </ul>

        <h4>Where the Money Goes</h4>
        <ul>
          <li><strong>Federal taxes:</strong> National defense, Indigenous services, foreign affairs, federal programs</li>
          <li><strong>Provincial taxes:</strong> Healthcare, education, highways, provincial programs</li>
          <li><strong>Municipal taxes:</strong> Local roads, garbage collection, police/fire services, parks</li>
          <li>Different levels of government fund different services</li>
        </ul>

        <h4>Public Services Funded by Taxes</h4>
        <ul>
          <li><strong>Healthcare:</strong> Hospital visits, doctor appointments (things that cost thousands in some countries)</li>
          <li><strong>Education:</strong> Public schools, universities receive subsidies</li>
          <li><strong>Infrastructure:</strong> Roads, bridges, public transit</li>
          <li><strong>Safety:</strong> Police, fire departments, emergency services</li>
          <li><strong>Social programs:</strong> EI benefits, disability support, old age security</li>
        </ul>

        <h4>How These Connect</h4>
        <p>Help viewers see taxes not as money disappearing, but as their contribution to services they use every day. The purpose → where it goes → what it funds tells a complete story of why we pay taxes.</p>
      `
    },
    {
      id: 'cluster-3',
      number: 3,
      title: '"Why file a tax return"',
      concepts: 'What a T4 is, why file even with low income, key deadlines',
      detailedContent: `
        <h4>What to Cover in Your Video</h4>
        <p>This cluster is practical — help viewers understand the basics of filing their tax return. Focus on demystifying the process for someone who's never done it.</p>

        <h4>What a T4 Is</h4>
        <ul>
          <li>A T4 is the official slip your employer gives you showing your income for the year</li>
          <li>It shows: total earnings, taxes already deducted, CPP/EI contributions</li>
          <li>You'll receive one from every employer you worked for that year</li>
          <li>Employers must send T4s by the end of February each year</li>
          <li>You need your T4(s) to file your tax return</li>
        </ul>

        <h4>Why File Even with Low Income</h4>
        <ul>
          <li><strong>Get a refund:</strong> If taxes were deducted from your pay but you earned under the basic personal amount ($16,129), you'll likely get that money back</li>
          <li><strong>Unlock benefits:</strong> You can't receive benefits or credits without filing</li>
          <li><strong>Build contribution room:</strong> Filing builds your RRSP contribution room for later</li>
          <li><strong>Establish a tax history:</strong> Some loans and applications ask for proof of income</li>
        </ul>

        <h4>Key Deadlines</h4>
        <ul>
          <li><strong>April 30:</strong> Deadline to file your return (for most people)</li>
          <li><strong>End of February:</strong> When you should receive your T4s</li>
          <li><strong>Refund timing:</strong> If you file early (Feb-March), you typically get refunds within 2-3 weeks</li>
          <li>Filing late = potential penalties and interest if you owe money</li>
        </ul>

        <h4>How These Connect</h4>
        <p>The T4 is your starting point, the reasons to file explain the "why," and the deadlines tell the "when." Together, they give someone everything they need to know to file their tax return.</p>
      `
    },
    {
      id: 'cluster-4',
      number: 4,
      title: '"Free Money You Might Be Missing"',
      concepts: 'Why filing unlocks benefits (i.e., Canada Groceries and Essentials Benefit)',
      detailedContent: `
        <h4>What to Cover in Your Video</h4>
        <p>This cluster is about benefits many young Canadians don't know they qualify for. Help viewers understand that filing their taxes can literally put money in their pocket.</p>

        <h4>Canada Groceries and Essentials Benefit (formerly the GST/HST credit)</h4>
        <ul>
          <li>A tax-free quarterly payment to help offset rising food and basic living costs.</li>
          <li><strong>Who qualifies:</strong> Depends on income and family situation.
            <ul>
              <li><strong>Single person:</strong> up to $950 this year.</li>
              <li><strong>Family of four:</strong> up to $1,890 this year.</li>
            </ul>
          </li>
          <li>Payments come automatically every 3 months (Jan, Apr, Jul, Oct)</li>
          <li>You MUST file a tax return to receive it — even if you had no income</li>
        </ul>

        <h4>Why Filing Unlocks Benefits</h4>
        <ul>
          <li>The government doesn't know your situation unless you tell them (by filing)</li>
          <li>Even zero income = still need to file to get credits</li>
          <li>Benefits are calculated from your tax return information</li>
          <li>Missing one year of filing = missing one year of payments</li>
          <li>It's literally free money you're leaving on the table if you don't file</li>
        </ul>

        <h4>How These Connect</h4>
        <p>The Canada Groceries & Essentials Benefit is an example of a benefit you can only receive by filing. The key message: filing your taxes isn't just about paying — it's often about getting money back that you're entitled to.</p>
      `
    },
    {
      id: 'cluster-5',
      number: 5,
      title: '"Saving Smart: Tax-Advantaged Accounts"',
      concepts: 'TFSA basics, RRSP basics, why starting young matters',
      detailedContent: `
        <h4>What to Cover in Your Video</h4>
        <p>This cluster introduces two powerful savings tools. Help viewers understand the basic difference between them and why starting to save early is so valuable.</p>

        <h4>TFSA (Tax-Free Savings Account) Basics</h4>
        <ul>
          <li>Money goes in after tax, but growth and withdrawals are completely tax-free</li>
          <li><strong>Contribution room:</strong> Starts building when you turn 18 (~$7,000/year currently)</li>
          <li><strong>Flexible:</strong> Withdraw anytime without penalty, room gets added back next year</li>
          <li><strong>Great for:</strong> Short-to-medium term savings, emergency fund, any goal</li>
          <li>Unused room carries forward — if you're 20, you might have $20,000+ in room already</li>
        </ul>

        <h4>RRSP (Registered Retirement Savings Plan) Basics</h4>
        <ul>
          <li>Contributions reduce your taxable income now (tax deduction)</li>
          <li>Growth is tax-deferred (no tax until you withdraw)</li>
          <li>Designed for retirement — withdrawals are taxed as income</li>
          <li><strong>Contribution room:</strong> 18% of previous year's income (up to a max)</li>
          <li><strong>Best for:</strong> Higher earners who want to lower their tax bill now</li>
        </ul>

        <h4>Why Starting Young Matters</h4>
        <ul>
          <li><strong>Compound growth:</strong> Money invested early has decades to grow</li>
          <li>Example: $1,000 invested at 18 vs 28 — huge difference by retirement</li>
          <li>Contribution room accumulates — you can use it later when you earn more</li>
          <li>Building the habit early makes saving automatic</li>
          <li>You don't need much to start — even $25/month adds up over time</li>
        </ul>

        <h4>How These Connect</h4>
        <p>TFSA and RRSP are two different approaches to tax-advantaged saving. The "starting young" piece explains why both matter even when you're not earning much. Help viewers see these as tools for their future self.</p>
      `
    },
    {
      id: 'cluster-6',
      number: 6,
      title: '"Taxes & Post-Secondary Education"',
      concepts: 'Tuition credits, how they work, carrying credits forward',
      detailedContent: `
        <h4>What to Cover in Your Video</h4>
        <p>This cluster is especially relevant for students heading to college or university. Help viewers understand how education costs can reduce their future taxes.</p>

        <h4>Tuition Tax Credits</h4>
        <ul>
          <li>Post-secondary tuition qualifies for a tax credit</li>
          <li><strong>What qualifies:</strong> Tuition at eligible colleges, universities, and some trade programs</li>
          <li>You'll receive a T2202 form from your school showing eligible amounts</li>
          <li>The credit is calculated as 15% (federal) of your tuition</li>
          <li>Textbooks and living expenses don't count — just tuition and mandatory fees</li>
        </ul>

        <h4>How Tuition Credits Work</h4>
        <ul>
          <li><strong>Non-refundable credit:</strong> Reduces tax you owe, but won't generate a refund on its own</li>
          <li>If you owe $500 in tax and have $500 in credits → you owe $0</li>
          <li>If you owe $0 and have $500 in credits → you still get $0 (but can save the credit)</li>
          <li>Can transfer up to $5,000 to a parent/grandparent each year</li>
          <li>Must claim current year's taxes first, then transfer or carry forward</li>
        </ul>

        <h4>Carrying Credits Forward</h4>
        <ul>
          <li>Unused tuition credits can be saved for future years</li>
          <li>When you graduate and start earning more, these credits reduce your taxes</li>
          <li>Credits don't expire — they stay until you use them</li>
          <li>Example: $20,000 in tuition = thousands in credits waiting for when you have income</li>
          <li>This is why filing during school years matters — to bank those credits</li>
        </ul>

        <h4>How These Connect</h4>
        <p>Tuition creates credits → those credits reduce tax you owe → if you don't owe enough now, you carry them forward to when you do. It's a reward for investing in education that pays off when you start working.</p>
      `
    }
  ],

  meta: {
    title: 'Teach Me Taxes Challenge - March 2026 | Industry Immersion Series',
    description: 'Learn Canadian tax fundamentals and teach others in this H&R Block-sponsored challenge. Create a 90-120 second video explaining tax concepts and win up to $500.',
    ogImage: '/logo6.jpeg'
  }
};
