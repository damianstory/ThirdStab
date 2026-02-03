import { ActivityPageData } from '../../activities';

export const februaryActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '5',
  month: 'February',
  year: '2026',
  title: 'Climate Insurance Challenge',
  description: 'Learn how insurance professionals are problem-solvers who tackle big challenges like climate change, extreme weather, and community safety to protect our people and our communities.',
  sponsor: {
    name: 'Zurich Canada',
    logo: '/logo5.png',
    logoType: 'wide'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'february',

  // Extended page content
  hero: {
    backgroundImage: '/february-hero.jpg',
    backgroundPosition: 'right top',
    tagline: 'Discover How Insurance Protects Our Communities from Climate Change',
    introText: `Climate change is creating new challenges for communities across Canada — from wildfires and floods to extreme heat and violent storms. Insurance professionals are on the front lines, helping people prepare for, respond to, and recover from these events. Join Zurich Canada to explore how insurance careers combine problem-solving, data analysis, and community impact.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/KBXC29O-3Tw',
    title: 'Protecting What Matters',
    description: `From coast to coast, Canadians are experiencing the effects of climate change. Insurance professionals play a critical role in helping communities stay resilient. Discover how this industry is adapting to new challenges and why it needs passionate young people like you.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/C8vCl6AaGCs',
    title: 'How this Works - February Challenge'
  },

  explainer: {
    title: 'Challenge Overview',
    rows: [
      {
        label: 'Active Submission Period',
        content: 'February 1-28, 2026'
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
        content: 'February 28, 2026 at 11:59 PM EST'
      },
    ]
  },

  activityDetail: {
    description: `Climate risks like flooding, wildfires, and extreme weather are becoming more frequent across Canada. Insurance professionals help communities prepare for these events and recover when disaster strikes.<br/><br/><strong>This challenge invites you to explore</strong> how climate risks affect Canadians, how insurance protects communities, and discover careers where you can make a real difference.`,
    steps: [
      {
        title: "Step 1: Choose Your Climate Risk",
        details: `<strong>Pick ONE climate risk category to investigate:</strong>

• <strong>Flooding</strong> — Urban flooding, sewer backup, river overflow
• <strong>Wildfire</strong> — Smoke days, evacuations, property damage
• <strong>Extreme Weather</strong> — Hail, tornadoes, ice storms
• <strong>Extreme Heat</strong> — Heat domes, power outages, health impacts

<strong>Briefly explain why you chose this risk</strong> and how it might affect your life or community.`
      },
      {
        title: "Step 2: Research a Real Canadian Example",
        details: `<strong>Find a documented climate event that happened in Canada connected to the climate risk that you chose in Step 1.</strong>

Research and explain:
• When and where did it happen?
• What was the impact on people and communities?
• What data can you find? (damage costs, people affected, etc.)

<strong>Use the research tools in the Resources section below.</strong> Make sure to cite your sources.

<strong>Some examples to get you started:</strong>
• Calgary hailstorm (2024) — Nearly $3 billion in damage
• Toronto floods (2024) — Union Station and Don Valley Parkway flooded
• Jasper wildfire (2024) — Town evacuated and partially destroyed
• B.C. heat dome (2021) — Over 600 deaths
• Nova Scotia floods (2023) — Major infrastructure damage`
      },
      {
        title: "Step 3: How Insurance Protects Communities",
        details: `<strong>Describe how insurance helps communities prepare for, respond to, and recover from climate risks</strong> — and why insurance companies need to understand climate change.

<strong>Explain how insurance companies interact with each of these four components:</strong>

1. <strong>Prepare:</strong> How does insurance help people get ready before a disaster happens? (e.g., giving discounts for safer homes, helping identify risks in your area)
2. <strong>Respond:</strong> What happens when disaster strikes? (claims process, getting help quickly)
3. <strong>Recover:</strong> How does insurance help people rebuild their lives after a climate event?
4. <strong>Why it matters:</strong> Why do insurance companies need to study and understand climate change?`
      },
      {
        title: "Step 4: Spotlight an Insurance Career",
        details: `<strong>Research ONE specific insurance role involved in climate risk:</strong>

• <strong>Climate Risk Analyst</strong> — Studies climate data to predict future risks
• <strong>Underwriter</strong> — Decides what risks to insure and at what price
• <strong>Claims Adjuster</strong> — Investigates claims and determines payouts after disasters
• <strong>Actuary</strong> — Uses math and statistics to calculate risk and pricing
• <strong>Loss Control Specialist</strong> — Helps businesses and homeowners prevent losses

Research what someone in this role does for work. <strong>How does their work contribute to the prepare, respond, recover pieces</strong> that you addressed in the previous step? Give at least one specific example.`
      },
      {
        title: "Step 5: Future Outlook",
        details: `<strong>Reflect on the labour market outlook in the insurance industry:</strong>

• What kind of demand is there for jobs in the insurance industry?
• Where are the jobs, and who is hiring?
• What's an example of a role that Zurich Canada is hiring for right now?

<strong>Helpful resources for labour market research:</strong>
• Job Bank (jobbank.gc.ca)
• Statistics Canada
• Zurich Canada Careers
• myBlueprint occupation profiles
• Insurance Institute of Canada

<strong>Cite your sources.</strong> For example: "according to Job Bank..." or "Statistics Canada reports..."`
      },
      {
        title: "Step 6: Submit Your Video",
        details: `<strong>Create a video that is two minutes or less, covering Steps 1-5.</strong>

Your video should include:
• Your chosen climate risk and why you picked it
• Your real Canadian example with data
• How insurance helps communities (prepare, respond, recover)
• Your insurance career spotlight
• Your thoughts on the future outlook

<strong>Format:</strong>
• Vertical vs. horizontal? Up to you.
• Talking head vs. animations? Up to you.
• Documentary style vs. TikTok style? Up to you.

The only requirements are that it addresses each of the 5 steps above, and we're able to click a link to watch it.

<strong>IMPORTANT: Make sure the video link has proper sharing settings.</strong>
Test your link in an incognito browser window before submitting. If it works there without login, it should work for us too.`
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
        description: 'Clear audio/visuals with logical organization, smooth flow, and meets two-minute maximum requirement'
      },
      {
        category: 'View Detailed Evaluation Rubric Here',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/c075b26b-8b1e-49b0-8094-9639a06e7ee7'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/c075b26b-8b1e-49b0-8094-9639a06e7ee7'
  },

  submission: {
    url: 'https://questionnaire.simplesurvey.com/f/s.aspx?s=fda0d251-d3fc-4452-bdb1-5567ca5101a4',
    deadline: new Date('2026-02-28T23:59:59-05:00'),
    instructions: 'Submit your completed video through the submission form. Ensure your video link has proper sharing settings so we can view it.'
  },

  faqs: [
    {
      question: 'What is climate insurance?',
      answer: `Climate insurance refers to insurance products that help protect people, businesses, and communities from the financial impacts of climate-related events like floods, wildfires, storms, and extreme heat. It's how we financially prepare for and recover from climate disasters.`
    },
    {
      question: 'Do I need to understand insurance to do this activity?',
      answer: `No prior knowledge needed! This activity is designed to help you learn about insurance as you go. The resources section has tools to help you understand both climate risks and how insurance works.`
    },
    {
      question: 'What if there hasn\'t been a major climate event in my area?',
      answer: `You can research any Canadian climate event — it doesn't have to be in your specific community. The examples we provided (Calgary hailstorm, Toronto floods, Jasper wildfire, etc.) are great starting points.`
    },
    {
      question: 'What insurance careers are there?',
      answer: `There are many! For this activity, focus on roles related to climate risk: Climate Risk Analyst, Underwriter, Claims Adjuster, Actuary, or Loss Control Specialist. Each plays a different role in helping communities prepare for and recover from climate events.`
    },
    {
      question: 'How does this February Activity challenge work?',
      answer: 'Carefully read the Activity Details steps 1-6 to understand what is being asked of you in this activity. You can also watch the How this Works video for a detailed overview.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a video that is two minutes or less highlighting your research from steps 1 through 5. Your video should cover: your chosen climate risk, a real Canadian example with data, how insurance protects communities, an insurance career spotlight, and your thoughts on the future. Make sure your video link has proper sharing settings.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can complete the activity multiple times exploring different climate risks or insurance careers, though students can only win one micro grant per activity. We'd encourage you to focus on quality, not quantity.`
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: `No, it's whatever feels authentic and engaging to you. It can be a TikTok style video with lots of different cuts and background music or more documentary style — whatever you will enjoy making more, and clearly communicates the requested information from steps 1-5.`
    },
    {
      question: 'Does it matter what tool I use to make the video?',
      answer: `Nope, it doesn't matter at all what tool you use. There are lots of free tools available to make videos today. Check with your school to see what they already have access to. For example, Canva is a great tool to be able to create videos with.`
    },
    {
      question: 'What skills will I be developing by doing this activity?',
      answer: `Lots of skills like research, critical thinking, communication, content creation, and data literacy. You'll also learn about climate science, risk assessment, and an industry you may not have considered before. It would be a good idea to add the completed video to your myBlueprint portfolio and reflect on what skills you feel like you've developed.`
    },
    {
      question: 'Who is reviewing the submissions?',
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from Zurich Canada.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `Yes, videos will be accepted in either English or French.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected and be able to announce winners by the midpoint of the following month. So for example, with this activity, we hope to be able to announce the February winners by mid-March.`
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
      answer: `The Climate Insurance Challenge has been designed as an individual activity.`
    },
    {
      question: 'Can I still submit the activity after the February 28th deadline?',
      answer: `Yes, you can still submit monthly activities after the deadline. However, any activity submitted after the deadline is not eligible for that month's pool of micro grants. It still makes sense to complete them even after the deadline so that you can potentially earn one of the Series Completion incentives. Those only require all activities to be completed, not necessarily completed within the month of the activity.`
    },
    {
      question: 'Will teachers be able to see who has submitted an entry?',
      answer: `Teachers won't be able to see through myBlueprint which students have submitted activities or not. However, we will create reports that will be shared with your myBlueprint lead at the school board level who can share specifics with you upon request.`
    },
    {
      question: 'What data is being collected and by who?',
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series. Meaning that only myBlueprint is collecting any information related to this Series. No personally identifiable information is being shared with any third parties. We will publish de-identified (anonymous summary data) information to provide updates on how the series is going. For example, the number of activity submissions received for each month, which province they're coming from, and communicate with our school board partners about school-specific participation. <a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">[Click here to see the questions students are being asked]</a> to answer when they submit their completed activity.`
    }
  ],

  resources: [
    {
      title: 'Insurance Bureau of Canada',
      description: 'Learn how insurance supports communities across Canada.',
      url: 'https://www.ibc.ca/',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Zurich & Sustainability',
      description: 'Discover how Zurich is addressing climate risk and resilience.',
      url: 'https://www.zurich.com/sustainability',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Government of Canada Climate Data',
      description: 'Explore climate trends and projections.',
      url: 'https://climatedata.ca/',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Insurance Institute of Canada – P&C Onboarding',
      description: 'This short, beginner-friendly online resource explains how property and casualty (P&C) insurance works, why it matters, and the types of careers available.',
      url: 'https://www.insuranceinstitute.ca/',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Zurich Canada\nCareers',
      description: 'Explore career paths in insurance and risk management at one of the world\'s leading insurers.',
      url: 'https://www.zurichcanada.com/en-ca/careers',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Zurich Canada Internships',
      description: 'Explore internship opportunities at Zurich Canada and kickstart your career in insurance and risk management.',
      url: 'https://www.zurichcanada.com/en-ca/careers/internships',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    }
  ],
  resourcesTitle: 'Zurich Canada Resources',
  resourcesSubtitle: 'Explore these resources to support your research',

  spotlightCallouts: [
    {
      id: 'internship',
      eyebrow: 'EXCLUSIVE OPPORTUNITY',
      headline: 'Earn a Paid Summer Internship',
      subhead: 'Zurich Canada • Summer 2026',
      body: 'One exceptional Grade 12 student will be selected for a paid internship at Zurich Canada in their <strong>Toronto office</strong>. This is your chance to get real-world experience in insurance and risk management.',
      badge: '1 SPOT AVAILABLE',
      icon: 'briefcase',
      gradient: 'blue',
      expandableContent: `
        <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:0.75rem;color:#22224C;">Claims Intern</h3>

        <h4 style="font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:#22224C;">The Opportunity</h4>
        <p style="margin-bottom:0.75rem;">Are you looking for a caring, collaborative, values-driven workplace with inspiring teammates and leaders? Do you have the ambition and desire to be the best and thrive at the most impactful global insurance provider in the world? Look no further than Zurich Canada.</p>
        <p style="margin-bottom:0.75rem;">Zurich Canada is currently looking for a grade 12 student to assist our Claims team. Reporting to the Senior Claims Administration Manager, you will gain valuable exposure to claims practices and insurance industry standards, while developing workplace skills in a collaborative environment.</p>
        <p style="margin-bottom:0.75rem;">This is a unique opportunity to build your knowledge and experience for the future in a supportive environment where your voice matters. This posting is for an existing vacancy.</p>
        <p style="margin-bottom:1rem;">Zurich follows a hybrid work model requiring three days per week of in-person presence, which may include time in the office or market-facing engagements.</p>

        <h4 style="font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:#22224C;">What You Will Do</h4>
        <ul style="list-style:disc;padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.25rem;">Provide general project support</li>
          <li style="margin-bottom:0.25rem;">Support the daily activities of the department</li>
          <li style="margin-bottom:0.25rem;">Work individually or in a team, and follow directions from your manager/mentor</li>
          <li style="margin-bottom:0.25rem;">In some cases, field work and interacting with customers or clients will be required</li>
          <li style="margin-bottom:0.25rem;">Some interns may need to help the company with in-depth research and filing of records</li>
        </ul>

        <h4 style="font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:#22224C;">Qualifications</h4>
        <ul style="list-style:disc;padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.25rem;">Currently a grade 12 high school student</li>
          <li style="margin-bottom:0.25rem;">Legally eligible to work in Canada</li>
          <li style="margin-bottom:0.25rem;"><strong>Available to work in person at the Toronto office (100 King Street West) in July and August 2026</strong></li>
        </ul>

        <h4 style="font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:#22224C;">Preferred Qualifications</h4>
        <ul style="list-style:disc;padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.25rem;">Demonstrated problem solving skills in a customer focused environment</li>
          <li style="margin-bottom:0.25rem;">Excellent communication skills</li>
          <li style="margin-bottom:0.25rem;">Analytical skills</li>
          <li style="margin-bottom:0.25rem;">Excel and PowerPoint experience</li>
          <li style="margin-bottom:0.25rem;">Strong written and verbal communication skills</li>
          <li style="margin-bottom:0.25rem;">Self-motivated, punctual, professional and able to work independently</li>
        </ul>
        <p style="margin-bottom:1rem;">At Zurich Canada, we are committed to pay equity. We determine compensation based on objective criteria such as skills, experience, and internal equity. The salary for this position is $18.50 per hour, for a 37.5-hour work week.</p>

        <h4 style="font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:#22224C;">Our Culture</h4>
        <ul style="list-style:disc;padding-left:1.25rem;margin-bottom:1rem;">
          <li style="margin-bottom:0.25rem;">At Zurich, we are proud of our culture. We are passionate about Diversity, Inclusion, Equity and Belonging (DIEB). We want you to bring your whole self to work, and we want our employees to be reflective of the communities in which we live and work. Our DIEB initiatives are creating an environment where everyone feels welcome.</li>
          <li style="margin-bottom:0.25rem;">We have a collaborative culture where diversity of thought is valued. We value your input and strive to give our employees the tools they need to make an impact.</li>
          <li style="margin-bottom:0.25rem;">We are committed to continuous improvement and offer access to a comprehensive range of training and development opportunities.</li>
          <li style="margin-bottom:0.25rem;">We care about our communities. Our communities are where our customers, people, and shareholders live and work. While we can be proud of the contribution to society Zurich makes through our core business of insurance, we must also give back to our communities through our talent, time and resources.</li>
          <li style="margin-bottom:0.25rem;">We have won numerous awards for our workplace culture. We are proud to be one of Greater Toronto's Top Employers and to have received Insurance Business Canada's 5-Star Diversity, Equity and Inclusion Award.</li>
        </ul>

        <h4 style="font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:#22224C;">About Us</h4>
        <p style="margin-bottom:1rem;">Zurich Canada is part of the Zurich Insurance Group, a multi-line insurer with approximately 55,000 employees worldwide serving customers in global and local markets. Zurich Canada has been a leading insurance provider serving mid-sized and large companies, including multinational corporations, in the Canadian commercial market for 100 years. With over 650 employees in offices across the country, Zurich offers the global strength of a top insurance provider combined with in-depth knowledge of industries and local markets.</p>

        <h4 style="font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:#22224C;">How to Apply</h4>
        <p style="margin-bottom:0.75rem;">If you're in grade 12, able to work in Toronto this summer, and have read and understood the internship overview above and want to apply, you will need to submit the February Industry Immersion Series activity before February 28th, 2026.</p>
        <p style="margin-bottom:0.75rem;">Whether or not your video is selected to receive one of the monthly micro grants has nothing to do with who receives the internship. However, if you don't submit the February activity in February, you will not be eligible to apply for the internship.</p>
        <p>If you submit your Industry Immersion Series video by February 28th and you're in grade 12, myBlueprint will email you in March and ask for your resume, cover letter, and why you're interested specifically in this role. That information will be shared with the Zurich Canada team, and they will be making a decision shortly afterwards about who they want to interview and potentially bring on for the summer internship.</p>
      `,
    },
    {
      id: 'indigenous',
      eyebrow: 'DEDICATED SUPPORT',
      headline: 'Indigenous Student Micro Grants',
      subhead: '5 of 20 Grants Reserved • $500 Each',
      body: 'Zurich Canada is committed to supporting Indigenous youth in their career exploration journey. Five micro grants have been earmarked for students who identify as Indigenous.',
      badge: '5 GRANTS RESERVED',
      icon: 'sparkles',
      gradient: 'warm',
    },
  ],

  meta: {
    title: 'Climate Insurance Challenge - February 2026',
    description: 'Explore climate risks in Canada and discover how insurance professionals protect communities. Research insurance careers and win micro grants with Zurich Canada.',
    ogImage: '/logo5.png'
  }
};
