import { ActivityPageData } from '../../activities';

export const novemberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '2',
  month: 'Novembre',
  year: '2025',
  title: 'Défi&nbsp;d\'exploration<br/>des carrières<br/>spécialisées',
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
    tagline: 'À toi de bâtir ton avenir!',
    introText: `De la charpenterie à la cuisine en passant par l'infographie, les carrières des métiers spécialisés et des technologies offrent des possibilités passionnantes à tous. Joignez-vous à Skills/Compétences Canada pour explorer ces carrières et découvrir comment les Compétences pour réussir peuvent vous aider à prospérer dans ces domaines professionnels.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/MkBwR2LC6Mo',
    title: 'Lancez-vous!',
    description: `Les carrières spécialisées sont plus demandées que jamais. Étant donné que plus de 700 000 travailleurs qualifiés vont prendre leur retraite d'ici 2030, le Canada a besoin de vous! Ces carrières sont bien rémunérées et ont beaucoup à offrir. Découvrez comment les Compétences pour réussir sont au centre de ces carrières.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/MkBwR2LC6Mo',
    title: 'How this Works - November Challenge'
  },

  explainer: {
    title: 'Aperçu du défi',
    rows: [
      {
        label: 'Période de soumission active',
        content: 'Du 1er au 30 novembre 2025'
      },
      {
        label: 'Admissibilité',
        content: 'Élèves de la 7e à la 12e année partout au Canada'
      },
      {
        label: 'Total des avantages incitatifs',
        content: '10 000 $ en micro-subventions'
      },
      {
        label: 'Récompenses individuelles',
        content: '20 lauréats × 500 $ chacun'
      },
      {
        label: 'Date limite de soumission',
        content: 'Le 30 novembre 2025, à 23 h 59 (HNE)'
      },
    ]
  },

  activityDetail: {
    description: 'Les métiers spécialisés et les technologies sont les fondements du Canada. Ces carrières gratifiantes sont très demandées et bien rémunérées. L\'une d\'entre elles pourrait vous convenir! Découvrez comment les neuf Compétences pour réussir, telles que la créativité et l\'innovation, la résolution de problèmes et l\'adaptabilité, peuvent vous aider à réussir dans ces carrières.<br/><br/><strong>Le défi invite les élèves à explorer l\'</strong>univers des métiers spécialisés et des technologies et à montrer comment les Compétences pour réussir s\'appliquent à ces parcours professionnels.',
    steps: [
      {
        title: "Étape 1 : Choisissez votre activité",
        details: "Explorez les activités dans la section <em>Choisissez votre activité</em> (ci-dessous). \n\n Lisez-les attentivement pour bien comprendre ce qui vous est demandé.\n\n <strong>Choisissez l\'activité qui vous intéresse le plus, puis réalisez-la.</strong>\n\nVous pouvez réaliser l\'activité individuellement, c\'est-à-dire seul(e), ou en classe avec votre enseignant."
      },
      {
        title: "Étape 2 : Faites une recherche sur votre carrière du domaine des métiers ou des technologies",
        details: "<strong>Renseignez-vous sur les types de travaux qui sont demandés dans le métier ou la technologie lié(e) à votre activité.</strong>\n\nPar exemple :\n• Quelles tâches accomplit une personne qui occupe ce poste toute la journée?\n• Quelles sont ses principales tâches et responsabilités?\n• Travaille-t-elle régulièrement de 9 h à 17 h, dans le cadre d\'une période de travail, la fin de semaine ou selon un horaire saisonnier?\n• Où travaille-t-elle? À l\'intérieur, à l\'extérieur ou les deux?\n• Quels types de projets réalise-t-elle?"
      },
      {
        title: "Étape 3 : Choisissez trois Compétences pour réussir.",
        details: "Examinez les 9 Compétences pour réussir officielles afin de comprendre leur signification. Vous pouvez en apprendre davantage sur chacune d\'elles dans la section <em>Découvrez les Compétences pour réussir</em> (ci-dessous). \n\n <strong>Choisissez les TROIS compétences qui sont les plus importantes dans le métier que vous avez choisi.</strong>\n\n IMPORTANT : Ne vous contentez pas de les nommer. <strong>Donnez des exemples précis de la manière dont est utilisée concrètement chacune des compétences par les travailleurs dans le cadre de leurs responsabilités et travaux quotidiens.</strong>"
      },
      {
        title: "Étape 4 : Tracez votre parcours d\'éducation et de formation",
        details: "<strong>Renseignez-vous sur l\'éducation et la formation requises pour occuper ce poste.</strong>\n\n• Comment vous lancez-vous vraiment dans cette carrière?\n• S\'agit-il d\'un apprentissage où l\'on apprend tout en travaillant?\n• S\'agit-il d\'un métier comportant la mention Sceau rouge qui est reconnu partout au Canada?\n• Quels sont les programmes collégiaux ou de formation offerts?\n• Combien de temps dure la formation?\n• Où peut-on suivre cette formation au Canada?\n• Quels cours faut-il suivre au niveau secondaire pour se préparer?\n\n<strong>Conseil de pro :</strong> Soyez précis(e). Par exemple, au lieu de dire simplement « un programme collégial », mentionnez un programme et une école en particulier."
      },
      {
        title: "Étape 5 : Explorez les possibilités de carrière qui existent au Canada.",
        details: "<strong>Renseignez-vous sur les perspectives d\'emploi pour ces types de postes.</strong>\n\n• Cette carrière est-elle en demande?\n• Combien de postes de ce type sont disponibles dans votre province ou territoire?\n• Qu\'est-ce qui motive la demande (p. ex., les départs à la retraite ou les nouvelles technologies qui créent des emplois)?\n\n<strong>Citez vos sources lorsque vous abordez ce sujet.</strong> Vous n\'avez pas à soumettre des éléments supplémentaires : il vous suffit de les mentionner dans votre soumission.\n\nPar exemple, vous pouvez employer des expressions comme celles ci-dessous :\n\n• « selon Guichet-Emplois... »\n• « le site Web de l\'association industrielle indique que... »\n• « Statistique Canada prévoit... »\n• « ce rapport d\'Indeed indique que... »\n• « le profil de profession de myBlueprint pour ce poste indique que... »"
      },
      {
        title: "Étape 6 : Soumettez votre vidéo d\'activité.",
        details: "<strong>Réalisez une vidéo de 60 à 90 secondes qui montre ce que vous avez accompli dans le cadre de l\'activité et ce que vous avez appris grâce à la recherche effectuée aux étapes 1 à 5.</strong>\n\nVous êtes libre de choisir le type de structure de votre vidéo.\n\n• Verticale ou horizontale? À vous de décider.\n• Tête parlante ou animations? À vous de choisir.\n• Style : documentaire ou TikTok? À vous de choisir.\n\nLes seules exigences sont les suivantes : la vidéo doit aborder chacune des 5 étapes ci-dessus (y compris la preuve que vous avez terminé l\'activité), et nous devons pouvoir cliquer sur un lien pour la visionner. Tout le reste dépend de vous.\n\n<strong>IMPORTANT : Assurez-vous que le lien de la vidéo comprend les paramètres de partage appropriés.</strong>\n\nPar exemple :\n• Si vous utilisez Google Drive, assurez-vous que des personnes extérieures à votre organisation puissent la visionner;\n• Si vous utilisez Youtube, assurez-vous qu\'elle n\'est pas répertoriée comme privée. Les vidéos non répertoriées fonctionnent très bien;\n• Assurez-vous qu\'elle ne nécessite pas une ouverture de session.\n\n<strong>Pour vérifier cela, collez votre lien dans une fenêtre de navigation privée Chrome.</strong> Si la vidéo fonctionne sans devoir ouvrir une session, cela signifie que nous pourrons nous aussi la visionner.\n\nIl est de votre responsabilité de vous assurer que nous pouvons voir votre travail."
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Activity Completion & Evidence',
        weight: 25,
        description: 'Activity clearly completed with strong visual/verbal evidence. Shows enthusiasm and genuine engagement with hands-on task. Process and/or results clearly demonstrated.'
      },
      {
        category: 'Career Research Depth',
        weight: 25,
        description: 'Full and specific coverage: Daily tasks, work environment, schedule specifics. Detailed education/training pathway. Clear job outlook with provincial data. Strong connection made between activity and career(s).'
      },
      {
        category: 'Skills for Success Application',
        weight: 25,
        description: 'Three Skills for Success clearly identified from official framework. Specific, realistic job examples for each skill. Examples directly connect to actual daily tasks and responsibilities.'
      },
      {
        category: 'Sources & Citations',
        weight: 25,
        description: '2+ credible sources clearly cited for job outlook data. Uses authoritative sources (Job Bank, StatsCan, industry associations). Clear attribution (e.g., "According to Job Bank...").'
      },
      {
        category: 'View Detailed Evaluation Rubric Here',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/c2bdfafa-8329-4ada-be93-ab0b98caa98d'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/c2bdfafa-8329-4ada-be93-ab0b98caa98d'
  },

  submission: {
    url: 'https://www.surveymonkey.com/r/PLACEHOLDER-NOVEMBER',
    deadline: new Date('2025-11-30T23:59:59-05:00'),
    instructions: 'Submit your completed presentation or infographic along with your written reflection through the Google Form. Ensure all files are properly named with your name and school.'
  },

  faqs: [
    {
      question: 'How does this November Activity challenge work?',
      answer: 'Carefully read the Challenge Details steps to understand what is being asked of you in this activity. You can watch the How it Works video for a detailed overview of the Skilled Career Exploration Challenge.'
    },
    {
      question: 'What am I actually being asked to submit?',
      answer: `You're being asked to submit a 60 to 90 second video that shows what you did in your chosen activity and what you learned from your research. Your video should cover: (1) evidence of your completed hands-on activity, (2) what it's like to work in the related trade/career, (3) three Skills for Success with specific job examples, (4) the education/training pathway, and (5) career opportunities across Canada. Make sure the video is shared as a clickable link with proper sharing settings so we can view it. Test it in an incognito browser window before submitting.`
    },
    {
      question: 'Can I submit more than one video?',
      answer: `Yes, you can submit multiple times, but it must be a different activity completed each time, though students can only win one micro grant per month. We'd encourage you to focus on quality, not quantity.`
    },
    {
      question: 'Is there a preferred style for the video?',
      answer: `No, it's whatever feels authentic and engaging to you. It can be a Tik Tok style video with lots of different cuts and background music or more documentary style - whatever you will enjoy making more. Just make sure to meet the requirements listed in each of the steps.`
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
      answer: `Submissions will be reviewed by a team of representatives from myBlueprint. We may, if needed, collaborate with representatives from Skills/Compétences Canada.`
    },
    {
      question: 'Can students submit their videos in French?',
      answer: `Yes, videos will be accepted in either English or French.`
    },
    {
      question: 'How (and when) are the twenty monthly successful submissions selected?',
      answer: `Depending on the volume of submissions, we plan to have selected and be able to announce winners by the midpoint of the following month. For example, with this activity, we hope to be able to announce the November winners by mid-December.`
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
      answer: `The Skilled Career Exploration Challenge has been designed as an individual activity.`
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
      answer: `myBlueprint is solely responsible for running the Industry Immersion Series. Meaning that only myBlueprint is collecting any information related to this Series. No personally identifiable information is being shared with any third parties. We will publish de-identified (anonymous summary data) information to provide updates on how the series is going. For example, the number of activity submissions received for each month, which province they're coming from, and communicate with our school board partners about school-specific participation. <a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">[Click here to see the questions students are being asked]</a> to answer when they submit their completed activity.`
    }
  ],

  resources: [
    {
      title: 'Peinture de voiture',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_CarPainting FR_web.pdf',
      type: 'pdf',
      image: '/november-activities/car-painting.jpg'
    },
    {
      title: 'Menuiserie',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_Carpentry FR_web.pdf',
      type: 'pdf',
      image: '/november-activities/carpentry.jpg'
    },
    {
      title: 'Usinage CNC',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_CNCMachining FR_web.pdf',
      type: 'pdf',
      image: '/november-activities/cnc-machining.jpg'
    },
    {
      title: 'Cuisine',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_Cooking FR_web.pdf',
      type: 'pdf',
      image: '/november-activities/cooking.jpg'
    },
    {
      title: 'Conception graphique',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_GraphicDesign FR_web.pdf',
      type: 'pdf',
      image: '/november-activities/graphic-design.jpg'
    }
  ],

  promotionalBanner: {
    imageEn: '/promotional-banners/nsttw-2025-en-new.png',
    imageFr: '/promotional-banners/nsttw-2025-fr-new.png',
    altTextEn: 'National Skilled Trades and Technology Week - November 2 to 8, 2025',
    altTextFr: 'Semaine nationale des métiers spécialisés et des technologies - 2 au 8 novembre 2025',
    link: 'https://www.skillscompetencescanada.com/en/program/national-skilled-trade-and-technology-week/',
    displayDates: {
      start: new Date('2025-10-01T00:00:00-05:00'),
      end: new Date('2025-11-30T23:59:59-05:00')
    }
  },

  meta: {
    title: 'Skilled Career Exploration Challenge - November 2025',
    description: 'Explore Canada\'s nine Skills for Success with Skills Competences Canada. Research essential workplace skills, create engaging presentations, and win micro grants.',
    ogImage: '/logo2.png'
  }
};
