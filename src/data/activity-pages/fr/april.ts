import { ActivityPageData } from '../../activities';

export const aprilActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '7',
  month: 'avril',
  year: '2026',
  title: 'Défi d\'itinéraire touristique',
  description: 'Explorez l\'un des secteurs qui connaît la plus forte croissance au monde. Concevez une expérience touristique locale unique pour faire rayonner votre communauté et découvrez des possibilités de carrière dans le tourisme.',
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
    tagline: 'Concevez une expérience touristique qui fait rayonner votre communauté',
    introText: `Le tourisme est l'un des secteurs qui connaît la plus forte croissance au Canada. Il soutient plus de deux millions d'emplois et relie les communautés d'un océan à l'autre, d'un bout à l'autre du pays. Dans ce défi, vous concevrez un itinéraire local unique pour mettre en valeur les aspects distinctifs et moins connus de votre ville ou de votre région — des trésors cachés que les visiteurs ne découvriraient peut-être pas par eux-mêmes.`
  },

  video: {
    embedUrl: 'https://drive.google.com/file/d/1cHeffAI5X8HLdV6irDpV-6tVopkCeoEv/preview',
    title: 'À propos de Discover Tourism',
    description: `Regardez cette vidéo pour découvrir comment Discover Tourism aide les jeunes à explorer les possibilités de carrière dans l'un des secteurs qui connaît la plus forte croissance au monde. Poursuivez ensuite votre lecture pour découvrir comment participer au Défi d'itinéraire touristique, concevoir une expérience touristique unique et courir la chance d'obtenir des microbourses tout en développant des compétences concrètes.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/PLACEHOLDER',
    title: 'Fonctionnement du défi d\'avril'
  },

  explainer: {
    title: 'Aperçu du défi',
    rows: [
      {
        label: 'Période de soumission active',
        content: '1er au 30 avril 2026'
      },
      {
        label: 'Admissibilité',
        content: 'Élèves de la 7e à la 12e année partout au Canada'
      },
      {
        label: 'Montant total des incitatifs',
        content: '10 000 $ en microbourses'
      },
      {
        label: 'Récompenses individuelles',
        content: '20 gagnants × 500 $ chacun'
      },
      {
        label: 'Date limite de soumission',
        content: '30 avril 2026 à 23 h 59 (HE)'
      }
    ]
  },

  activityDetail: {
    description: `L'industrie du tourisme au Canada connaît une forte croissance, et chaque communauté a quelque chose d'unique à offrir. <strong>Dans ce défi, vous concevrez une expérience touristique locale unique</strong> qui met en valeur les trésors cachés de votre ville ou de votre région, préciserez à qui elle s'adresse, expliquerez ses retombées pour l'économie locale et ferez des liens avec des carrières concrètes dans le tourisme.`,
    steps: [
      {
        title: "Étape 1 : Concevez votre expérience",
        details: `<strong>Créez un itinéraire détaillé pour une fin de semaine mettant en valeur une expérience touristique unique dans votre ville ou votre région.</strong>

Votre expérience devrait :
• Mettre en valeur des éléments locaux moins connus ou distinctifs, plutôt que des attractions touristiques évidentes que tout le monde connaît déjà
• Inclure des arrêts, des activités ou des points forts précis qui rendent votre itinéraire unique
• Montrer que vous tenez compte de choix respectueux de l'environnement et de la communauté dans votre itinéraire

Pensez à des éléments comme :
• Soutenir les entreprises locales et les artisans plutôt que les grandes chaînes
• Réduire votre empreinte environnementale, par exemple en privilégiant des moyens de transport écologiques (visites à pied, itinéraires à vélo, transport en commun)
• Mettre en valeur la culture autochtone ou le patrimoine local (avec respect et authenticité)
• Préciser avec qui les touristes interagiront, leur rôle et comment ils contribuent à l'expérience

Réfléchissez à ce qui rend votre communauté unique : les lieux, les personnes, les histoires et les traditions que les visiteurs pourraient ne pas découvrir par eux-mêmes.`
      },
      {
        title: "Étape 2 : Connaissez votre public",
        details: `<strong>Déterminez le profil de visiteurs que vous souhaitez attirer.</strong>

Réfléchissez à ceux qui seraient les plus intéressés :
• Les familles avec de jeunes enfants?
• Les amateurs d'aventure?
• Les passionnés de gastronomie ou les touristes culinaires?
• Les touristes culturels intéressés par l'histoire ou les arts?
• Les écotouristes et les amoureux de la nature?
• Les jeunes voyageurs à la recherche d'expériences uniques?

<strong>Expliquez :</strong>
• Pourquoi votre expérience plairait à ce public
• Ce qui rend votre région particulièrement adaptée à ce groupe
• Ce qui inciterait les visiteurs à choisir votre communauté plutôt qu'une autre destination`
      },
      {
        title: "Étape 3 : Déclaration d'impact local",
        details: `<strong>Faites la liste des entreprises et des services avec lesquels les visiteurs interagiraient pendant votre expérience.</strong>

Réfléchissez à chaque étape de votre itinéraire :
• Où séjourneraient-ils? (hôtel, gîte touristique, terrain de camping)
• Où mangeraient-ils? (restaurants, cafés, camions de cuisine de rue)
• Quelles attractions visiteraient-ils? (musées, parcs, zoos)
• À quelles expériences participeraient-ils? (sports, concerts, festivals)
• Quels services utiliseraient-ils? (location de vélos, visites guidées, navettes)
• Où feraient-ils leurs achats? (artisans locaux, boutiques de souvenirs, marchés)

<strong>Expliquez comment votre expérience soutient ces entreprises</strong> et contribue aux <strong>emplois liés au tourisme ainsi qu'au développement de la communauté</strong> dans votre région.

<strong>Conseil :</strong> Réfléchissez à l'ensemble du parcours du visiteur, du moment où il arrive (aéroport, gare, autoroute) jusqu'à son départ. Chaque étape de ce parcours fait intervenir une entreprise ou un service local. Plus vous en identifiez, plus votre déclaration d'impact sera solide.`
      },
      {
        title: "Étape 4 : Créez votre vidéo",
        details: `<strong>Enregistrez une vidéo de 90 à 120 secondes couvrant les étapes 1 à 3.</strong>

Votre vidéo devrait présenter :
• Le concept de votre expérience et ce qui la rend unique
• Votre public cible et pourquoi cette expérience lui plairait
• L'impact local et les entreprises impliquées
• Les rôles liés au tourisme associés à votre expérience

<strong>Le format est flexible :</strong>
• Face caméra, animation, style documentaire, vlog, ou tout autre format qui vous convient
• Format vertical ou horizontal, à votre choix
• Accessoires, cartes ou photos de votre communauté sont encouragés
• Vous n'avez pas à montrer votre visage si vous préférez une narration audio accompagnée de visuels

<strong>Durée de la vidéo : 90 à 120 secondes (1,5 à 2 minutes)</strong>`
      },
      {
        title: "Étape 5 : Révisez et soumettez",
        details: `Avant de soumettre votre vidéo, vérifiez les points suivants :

✓ Votre expérience met-elle en valeur des éléments locaux moins connus et distinctifs?
✓ Avez-vous inclus des choix respectueux de l'environnement et de la communauté?
✓ Avez-vous identifié un public cible clair?
✓ Avez-vous indiqué les entreprises et les services que les visiteurs utiliseraient?
✓ Avez-vous mentionné des rôles ou des carrières liés à l'expérience, par exemple guide touristique, chef, personnel hôtelier, etc.?
✓ Votre vidéo dure-t-elle entre 90 et 120 secondes?

<strong>Assurez-vous que le lien de votre vidéo est accessible avec les bons paramètres de partage.</strong> Testez-le dans une fenêtre de navigation privée avant de soumettre votre projet.`
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Contenu et exactitude',
        weight: 25,
        description: 'Couverture complète de tous les éléments requis avec des informations précises et détaillées'
      },
      {
        category: 'Recherche et citations',
        weight: 25,
        description: 'Sources de qualité citées adéquatement tout au long de la présentation vidéo'
      },
      {
        category: 'Engagement et créativité',
        weight: 25,
        description: 'Présentation captivante qui maintient l\'intérêt du public grâce à une approche créative'
      },
      {
        category: 'Communication et clarté',
        weight: 25,
        description: 'Audio et visuels clairs, organisation logique, enchaînement fluide et respect de la durée de 90 à 120 secondes'
      },
      {
        category: 'Consulter la grille d\'évaluation détaillée',
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
    url: 'https://questionnaire.simplesurvey.com/f/s.aspx?s=e94f39ac-832c-4d94-ad30-bf27170b7e4c',
    deadline: new Date('2026-04-30T23:59:59-04:00'),
    instructions: 'Soumettez votre vidéo présentant votre expérience touristique locale pour le défi d\'avril. Assurez-vous que le lien de votre vidéo est accessible (testez-le en mode navigation privée) avant de soumettre votre projet.'
  },

  faqs: [
    {
      question: 'Comment fonctionne le défi d\'avril?',
      answer: 'Lisez attentivement les étapes 1 à 5 de la section Détails de l\'activité pour bien comprendre ce qui est demandé. Vous pouvez aussi regarder la vidéo « Comment ça fonctionne » pour un aperçu détaillé.'
    },
    {
      question: 'Qu\'est-ce que je dois soumettre exactement?',
      answer: `Vous devez soumettre une vidéo de 90 à 120 secondes mettant en valeur la recherche et la planification que vous avez réalisées aux étapes 1 à 3. Votre vidéo devrait couvrir : le concept de votre expérience touristique, votre public cible et les entreprises locales et l'impact économique. Assurez-vous que le lien de votre vidéo est accessible — testez-le dans une fenêtre de navigation privée avant de soumettre votre projet.`
    },
    {
      question: 'Puis-je soumettre plus d\'une vidéo?',
      answer: `Oui, vous pouvez réaliser l'activité plusieurs fois en explorant différentes expériences touristiques, mais chaque élève ne peut gagner qu'une seule microbourse par activité. Nous vous encourageons à privilégier la qualité plutôt que la quantité.`
    },
    {
      question: 'Y a-t-il un style de vidéo à privilégier?',
      answer: `Non, choisissez le style qui vous semble le plus authentique et engageant. Ça peut être une vidéo de type TikTok avec plusieurs coupes et de la musique en arrière-plan, ou un style plus documentaire — peu importe ce que vous préférez créer, tant que l'information demandée aux étapes 1 à 3 est clairement communiquée.`
    },
    {
      question: 'L\'outil utilisé pour créer la vidéo a-t-il de l\'importance?',
      answer: `Non, pas du tout. Il existe de nombreux outils gratuits pour créer des vidéos. Vérifiez auprès de votre école les outils auxquels vous avez déjà accès. Par exemple, Canva est un excellent outil pour créer des vidéos.`
    },
    {
      question: 'Quelles compétences vais-je développer en faisant cette activité?',
      answer: `De nombreuses compétences, comme la recherche, la pensée critique, la communication, la création de contenu et la pensée entrepreneuriale. Vous en apprendrez aussi sur la planification touristique, l'analyse des retombées économiques, la prise de décisions respectueuses de l'environnement et l'exploration de carrières. C'est une bonne idée d'ajouter votre vidéo complétée à votre portfolio myBlueprint et de réfléchir aux compétences que vous avez développées.`
    },
    {
      question: 'Qui évalue les soumissions?',
      answer: `Les soumissions seront évaluées par une équipe de représentants de myBlueprint. Au besoin, nous pourrons collaborer avec des représentants de Discover Tourism.`
    },
    {
      question: 'Les élèves peuvent-ils soumettre leur vidéo en français?',
      answer: `Oui, les vidéos sont acceptées en anglais ou en français.`
    },
    {
      question: 'Comment (et quand) les vingt soumissions gagnantes sont-elles sélectionnées?',
      answer: `Selon le volume de soumissions, nous prévoyons sélectionner et annoncer les gagnants vers le milieu du mois suivant. Par exemple, pour cette activité, nous espérons annoncer les gagnants d'avril vers la mi-mai.`
    },
    {
      question: 'Devrais-je ajouter ces soumissions à mon portfolio myBlueprint?',
      answer: `Oui, c'est une excellente idée, accompagnée d'une réflexion sur ce que vous avez appris en réalisant cette activité et ce que vous avez trouvé intéressant. À noter : nous demanderons aussi aux élèves de fournir des preuves de leurs activités complétées via un portfolio myBlueprint s'ils prévoient postuler pour l'un des incitatifs de fin de série.`
    },
    {
      question: 'Dois-je faire cette activité en classe ou puis-je la faire seul(e)?',
      answer: `Vous pouvez tout à fait réaliser cette activité de façon autonome. Cela dit, n'hésitez pas à en parler à vos enseignants (et à vos parents) et à vérifier si vous pourriez obtenir des crédits scolaires pour le travail accompli dans le cadre de cette activité.`
    },
    {
      question: 'Puis-je réaliser cette activité en équipe?',
      answer: `Le Défi d'itinéraire touristique a été conçu comme une activité individuelle.`
    },
    {
      question: 'Puis-je encore soumettre l\'activité après la date limite du 30 avril?',
      answer: `Oui, vous pouvez encore soumettre des activités mensuelles après la date limite. Cependant, toute soumission reçue après la date limite n'est pas admissible au tirage de microbourses du mois en question. Il est tout de même judicieux de les compléter, même après la date limite, pour pouvoir éventuellement obtenir l'un des incitatifs de fin de série. Ceux-ci exigent seulement que toutes les activités soient complétées, pas nécessairement dans le mois de l'activité.`
    },
    {
      question: 'Les enseignants pourront-ils voir qui a soumis une participation?',
      answer: `Les enseignants ne pourront pas voir via myBlueprint quels élèves ont soumis des activités ou non. Cependant, nous créerons des rapports qui seront partagés avec votre responsable myBlueprint au niveau du conseil scolaire, qui pourra partager les détails avec vous sur demande.`
    },
    {
      question: 'Quelles données sont collectées et par qui?',
      answer: `myBlueprint est le seul responsable de la gestion de la Série d'immersion industrielle. Cela signifie que seul myBlueprint collecte les informations liées à cette série. Aucune information permettant d'identifier les participants n'est partagée avec des tiers. Nous publierons des données anonymisées (résumées) pour fournir des mises à jour sur le déroulement de la série. Par exemple, le nombre de soumissions reçues pour chaque mois, les provinces d'origine, et nous communiquerons avec nos partenaires des conseils scolaires au sujet de la participation par école. <a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Cliquez ici pour voir les questions posées aux élèves</a> lorsqu'ils soumettent leur activité complétée.`
    }
  ],

  resources: [
    {
      title: 'Tourism HR Canada : Faits sur le tourisme',
      description: 'Données clés et information sur le marché du travail dans l\'industrie touristique au Canada.',
      url: 'https://tourismhr.ca/labour-market-information/tourism-facts/',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Discover Tourism : Parcours de carrière',
      description: 'Explorez les parcours de carrière et les possibilités dans le secteur du tourisme au Canada.',
      url: 'https://discovertourism.ca/guidebook/career-pathways/',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Discover Tourism : Carte des carrières',
      description: 'Carte interactive pour explorer les rôles dans le secteur du tourisme.',
      url: 'https://discovertourism.ca/tool/interactive-career-map/',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Destination Canada : La valeur du tourisme',
      description: 'Découvrez la valeur économique et l\'impact du tourisme au Canada.',
      url: 'https://www.destinationcanada.com/en-ca/value-of-tourism',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Destination Canada : Site pour les voyageurs',
      description: 'Découvrez des expériences et des destinations touristiques partout au Canada pour vous inspirer.',
      url: 'https://travel.destinationcanada.com/en-ca',
      type: 'link',
      borderColor: '#03333d',
      borderOnly: true
    },
    {
      title: 'Canadian Academy of Travel & Tourism : Ressources pour les élèves',
      description: 'Ressources pour les élèves de l\'Académie canadienne du voyage et du tourisme pour soutenir votre défi touristique.',
      url: 'https://discovertourism.ca/wp-content/uploads/2026/03/myBlueprint-Discover-Tourism-Student-Resources.pdf',
      type: 'pdf',
      borderColor: '#03333d',
      borderOnly: true
    }
  ],
  resourcesTitle: 'Ressources Discover Tourism',
  resourcesSubtitle: 'Explorez ces ressources pour soutenir votre recherche',

  fundingAttribution: {
    imageSrc: '/images/activities/april/funded-by-canada-wordmark.png',
    altText: 'Financé en partie par le Programme de solutions pour la main-d\'œuvre sectorielle du gouvernement du Canada'
  },
  meta: {
    title: 'Défi d\'itinéraire touristique – Avril 2026 | Série d\'immersion dans l\'industrie',
    description: 'Concevez un itinéraire touristique local unique, explorez les possibilités de carrière dans l\'industrie touristique canadienne et courez la chance de gagner jusqu\'à 500 $ en microbourses avec Discover Tourism.',
    ogImage: '/images/discover-tourism-logo.png'
  }
};
