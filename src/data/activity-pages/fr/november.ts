import { ActivityPageData } from '../../activities';

export const novemberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '2',
  month: 'Novembre',
  year: '2025',
  title: 'Défi&nbsp;d&apos;exploration<br/>des carrières<br/>spécialisées',
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
    embedUrl: 'https://www.youtube.com/embed/4Dgqjh-nGX4',
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
        category: 'Réalisation de l\'activité et preuves',
        weight: 25,
        description: 'Une activité clairement accomplie avec des preuves visuelles/verbales solides. Elle montre de l\'enthousiasme et un engagement sincère dans la tâche pratique. Le processus et/ou les résultats sont clairement démontrés.'
      },
      {
        category: 'Profondeur de la recherche sur les carrières',
        weight: 25,
        description: 'Résultats d\'un examen complet et spécifique : tâches quotidiennes, milieu de travail et détails relatifs à l\'horaire. Un parcours d\'éducation ou de formation détaillé. Des possibilités d\'emploi claires sous-tendues par des données provinciales. Un lien solide établi entre l\'activité et la ou les carrières.'
      },
      {
        category: 'Application des Compétences pour réussir',
        weight: 25,
        description: 'Trois Compétences pour réussir ont été clairement déterminées dans le cadre officiel. Des exemples spécifiques propre à l\'emploi choisi et réalistes pour chaque compétence. Les exemples sont directement liés à de réelles tâches et responsabilités quotidiennes.'
      },
      {
        category: 'Sources et citations',
        weight: 25,
        description: 'Au moins deux sources fiables sont clairement mentionnées pour les données sur les possibilités d\'emploi. Utilisation de sources dignes de foi (Guichet-Emplois, Statistique Canada, associations industrielles). Provenance des données clairement mentionnée (par exemple, « Selon Guichet-Emplois... »).'
      },
      {
        category: 'Consultez la grille d\'évaluation détaillée ici',
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
    url: 'https://questionnaire.simplesurvey.com/f/s.aspx?s=7E9DD73A-F738-4261-8DC3-8661373130D7',
    deadline: new Date('2025-11-30T23:59:59-05:00'),
    instructions: 'Submit your completed presentation or infographic along with your written reflection through the Google Form. Ensure all files are properly named with your name and school.'
  },

  faqs: [
    {
      question: 'En quoi consiste le Défi d\'activité de novembre?',
      answer: 'Lisez attentivement les étapes des Détails du défi pour comprendre ce qui vous est demandé dans le cadre de cette activité. Vous pouvez visionner la vidéo <em>Visionner : Comment cela fonctionne</em> pour obtenir un aperçu détaillé du Défi d\'exploration des carrières spécialisées.'
    },
    {
      question: 'Qu\'est-ce que je dois soumettre exactement?',
      answer: `Il vous est demandé de soumettre une vidéo de 60 à 90 secondes qui montre ce que vous avez fait dans le cadre de l\'activité que vous avez choisie et ce que vous avez appris de votre recherche. Votre vidéo devrait couvrir les points suivants : (1) une preuve de votre activité pratique terminée, (2) comment c\'est de travailler dans le métier ou la carrière associé(e), (3) trois Compétences pour réussir avec des exemples concrets liés au travail, (4) le parcours d\'éducation ou de formation et (5) les possibilités de carrière partout au Canada. Assurez-vous que la vidéo est partagée en tant que lien cliquable avec les paramètres de partage appropriés afin que nous puissions la visionner. Testez-la dans une fenêtre de navigateur de navigation privée avant de la soumettre.`
    },
    {
      question: 'Puis-je soumettre plus d\'une vidéo?',
      answer: `Oui, vous pouvez faire plusieurs soumissions, mais il doit s\'agir d\'une activité différente terminée chaque fois, bien que les élèves ne puissent gagner qu\'une seule micro-subvention par mois. Nous vous encourageons à privilégier la qualité, et non la quantité.`
    },
    {
      question: 'Y a-t-il un style de vidéo privilégié?',
      answer: `Non, peu importe tant que c\'est authentique et captivant pour vous. La vidéo peut adopter le style de TikTok, avec beaucoup de montages différents et de la musique de fond, ou adopter un style plus documentaire. Peu importe ce que vous préférez faire. Assurez-vous simplement de respecter les exigences énumérées dans chacune des étapes.`
    },
    {
      question: 'L\'outil utilisé pour réaliser la vidéo a-t-il de l\'importance?',
      answer: `Non, l\'outil que vous utilisez n\'a aucune importance. De nombreux outils gratuits permettent de faire des vidéos aujourd\'hui. Vérifiez auprès de votre école à quels outils vous avez déjà accès. Par exemple, Canva est un excellent outil pour créer des vidéos.`
    },
    {
      question: 'Quelles compétences vais-je développer en réalisant cette activité?',
      answer: `De nombreuses compétences, comme la recherche, la pensée critique, la communication, la création de contenu et bien d\'autres, y compris la pratique des Compétences pour réussir elles-mêmes! Ce serait une bonne idée d\'ajouter la vidéo terminée à votre portfolio dans myBlueprint et de réfléchir aux compétences que vous avez le sentiment d\'avoir développées dans le cadre de cette activité.`
    },
    {
      question: 'Qui examine les soumissions?',
      answer: `Les soumissions seront examinées par une équipe de représentants de myBlueprint. Nous pourrions, si besoin, collaborer avec des représentants de Skills/Compétences Canada.`
    },
    {
      question: 'Les élèves peuvent-ils soumettre des vidéos en français?',
      answer: `Oui, les vidéos seront acceptées en anglais ou en français.`
    },
    {
      question: 'Comment (et quand) les vingt meilleures soumissions mensuelles sont-elles sélectionnées?',
      answer: `En fonction du volume de soumissions, nous prévoyons avoir sélectionné et être en mesure d\'annoncer les gagnants d\'ici le milieu du mois suivant. Par exemple, pour cette activité, nous espérons être en mesure d\'annoncer les gagnants de novembre d\'ici la mi-décembre.`
    },
    {
      question: 'Devrais-je ajouter ces soumissions à mon portfolio dans myBlueprint?',
      answer: `Oui, c\'est une excellente idée, accompagnée d\'une réflexion sur ce que vous avez appris en faisant cette activité et ce que vous avez trouvé intéressant. À titre indicatif, nous demanderons également aux élèves de soumettre une preuve de leurs activités terminées dans un portfolio de myBlueprint s\'ils prévoient postuler pour l\'un des avantages incitatifs liés à la Réalisation de la série à la fin de l\'année.`
    },
    {
      question: 'Dois-je faire cette activité en classe, ou puis-je la faire par moi-même?',
      answer: `Vous pouvez tout à fait réaliser cette activité par vous-même. Cela étant dit, vous devriez absolument informer vos enseignants (et vos parents) que vous faites cela et voir s\'il est possible d\'obtenir des crédits pour le travail que vous faites pour cette activité.`
    },
    {
      question: 'Puis-je faire cette activité en tant que projet de groupe?',
      answer: `Le Défi d\'exploration des carrières spécialisées a été conçu comme une activité individuelle.`
    },
    {
      question: 'Puis-je quand même soumettre l\'activité après la date limite du 30 novembre?',
      answer: `Oui, vous pouvez quand même soumettre des activités mensuelles après la date limite. Toutefois, toute activité soumise après la date limite n\'est pas admissible à la réserve de micro-subventions de ce mois-là. Il est tout de même logique de les réaliser, même après la date limite, afin de pouvoir obtenir l\'un des avantages incitatifs liés à la Réalisation de la série. Ceux-ci requièrent uniquement que toutes les activités soient terminées, pas nécessairement qu\'elles soient terminées dans le mois de l\'activité.`
    },
    {
      question: 'Les enseignants pourront-ils voir qui a soumis une inscription?',
      answer: `Les enseignants ne pourront pas voir dans myBlueprint quels élèves ont soumis des activités ou pas. Cependant, nous créerons des rapports qui seront partagés avec votre responsable de myBlueprint au niveau du conseil scolaire qui pourra partager des détails précis avec vous sur demande.`
    },
    {
      question: 'Quelles données sont collectées et par qui?',
      answer: `myBlueprint est l\'unique responsable de la réalisation de la Série d\'immersion industrielle, ce qui signifie que seul myBlueprint collecte toute information relative à cette série. Aucune information personnelle identifiable n\'est partagée avec des tiers. Nous publierons des informations sous forme de données synthétiques anonymisées pour fournir des mises à jour sur la façon dont la série se déroule. Par exemple, le nombre de soumissions d\'activités reçues pour chaque mois, leur province d\'origine, et nous communiquerons avec nos partenaires des conseils scolaires sur la participation spécifique à l\'école. <a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">[Cliquez ici pour voir les questions auxquelles les élèves doivent répondre]</a> lorsqu\'ils soumettent leur activité terminée.`
    }
  ],

  resources: [
    {
      title: 'Peinture automobile',
      description: '',
      url: '/pdfs/november/SFS_MyBlueprint_CarPainting FR_web.pdf',
      type: 'pdf',
      image: '/november-activities/car-painting.jpg'
    },
    {
      title: 'Charpenterie',
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
      title: 'Infographie',
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
    link: 'https://www.skillscompetencescanada.com/fr/program/semaine-nationale-des-metiers-specialises-et-des-technologies/#',
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
