import { ActivityPageData } from '../../activities';

export const decemberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '3',
  month: 'December',
  year: '2025',
  title: 'Défi d\'exploration de carrières<br>en agriculture',
  description: `Explore career opportunities in agriculture, food production, and sustainable food systems with thinkAG.`,
  sponsor: {
    name: 'thinkAG',
    logo: '/thinkag-logo.png',
    logoType: 'square'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'december',

  // Extended page content
  hero: {
    backgroundImage: '/december-hero.jpg',
    tagline: 'Découvrez votre avenir en agriculture',
    introText: `De la ferme à la table, le secteur de l'agriculture et des systèmes alimentaires offre une multitude de parcours professionnels qui nourrissent nos communautés et soutiennent notre planète. Explorez le secteur agricole du Canada dans ce défi tout en développant votre compréhension du domaine et en cultivant votre curiosité pour les carrières en agriculture et dans l'alimentation partout au pays.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/1tw7wHX1VLQ?list=PLv48Uir6JVgodGWN7aOGukL5C8Sn91fpi',
    title: 'Quelle que soit la carrière qui vous intéresse, vous pouvez la réaliser en agriculture.',
    description: `L'agriculture et les systèmes alimentaires sont essentiels à nos communautés et à notre économie. Avec des carrières en agriculture, en sciences alimentaires, en agroentreprise, en recherche, en technologie et en développement durable, il y a une place pour vous dans le secteur agricole.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/o_hTLLYSi1g',
    title: 'Regarder : Comment ça fonctionne'
  },

  explainer: {
    title: 'Aperçu du défi',
    rows: [
      {
        label: 'Période de soumission active',
        content: '1er au 31 décembre 2025'
      },
      {
        label: 'Admissibilité',
        content: 'Élèves de la 7e à la 12e année partout au Canada'
      },
      {
        label: 'Incitatifs totaux',
        content: '10 000 $ en microbourses'
      },
      {
        label: 'Récompenses individuelles',
        content: '20 gagnants × 500 $ chacun'
      },
      {
        label: 'Date limite de soumission',
        content: '31 décembre 2025 à 23 h 59 (HNE)'
      },
    ]
  },

  activityDetail: {
    description: 'Le secteur de l\'agriculture et des systèmes alimentaires est à l\'avant-garde de l\'innovation, de la durabilité et du développement communautaire.<br/><br/><strong>Ce défi invite les élèves à découvrir la diversité des parcours professionnels en agriculture</strong>, des pratiques agricoles traditionnelles aux technologies alimentaires modernes et aux initiatives de gestion environnementale.',
    steps: [
      {
        title: "Étape 1 – Coup d'œil sur une carrière",
        details: "Commencez par choisir un rôle précis dans le secteur de l'agriculture et des systèmes alimentaires, par exemple : scientifique agricole, technologue alimentaire, gestionnaire de ferme, coordonnateur en durabilité, etc. Il y en a beaucoup parmi lesquels choisir.\n\nVous pouvez utiliser les ressources thinkAG ci-dessous ou faire vos propres recherches, mais vous devez être en mesure de citer vos sources.\n\nImportant : Choisissez un rôle précis. Faites vos recherches.\n\n<strong>Cherchez ce que signifie réellement travailler dans ce rôle.</strong>\n\nPar exemple :\n• Que fait une personne dans cet emploi chaque jour?\n• Quelles sont ses principales tâches et responsabilités?\n• Travaille-t-elle de 9 h à 17 h ou selon des quarts, la fin de semaine, ou durant les saisons occupées?\n• Où travaille-t-elle? À l'intérieur, à l'extérieur, en laboratoire, sur le terrain ou une combinaison?\n• Sur quels types de projets ou défis travaille-t-elle?"
      },
      {
        title: "Étape 2 – Compétences ciblées",
        details: "<strong>Identifiez 2 ou 3 compétences nécessaires pour ce rôle.</strong>\n\nIl peut s'agir de compétences transférables ou durables comme la résolution de problèmes ou la communication, et/ou de compétences techniques propres au rôle.\n\n<strong>IMPORTANT: Ne vous contentez pas de les nommer. Donnez des exemples précis de la façon dont ces compétences sont utilisées dans le travail.</strong>\n\nPar exemple, si vous avez identifié la résolution de problèmes comme compétence clé, décrivez une tâche ou responsabilité concrète où cette compétence est appliquée. Quels types de problèmes la personne doit-elle résoudre? Comment les aborde-t-elle?\n\nExpliquez clairement comment chaque compétence se rattache aux tâches quotidiennes identifiées à l'Étape 1."
      },
      {
        title: "Étape 3 – Chemins vers l'emploi",
        details: "<strong>Faites des recherches sur la formation et l'éducation nécessaires pour accéder à ce rôle.</strong>\n\n• Comment entre-t-on dans cette carrière?\n• S'agit-il d'un apprentissage où l'on apprend en travaillant?\n• Quels programmes de collège ou d'université existent pour ce métier?\n• Combien de temps dure la formation?\n• Où peut-on suivre cette formation au Canada?\n• Y a-t-il des certifications ou permis particuliers?\n• Quels cours au secondaire peuvent aider à se préparer?\n\n<strong>Conseil : Soyez précis.</strong> Au lieu de simplement dire « un programme collégial », mentionnez un programme et un établissement précis."
      },
      {
        title: "Étape 4 – Innovation et durabilité",
        details: "<strong>Recherchez et décrivez des innovations ou des pratiques durables précises utilisées dans le secteur agricole, et leur importance pour la sécurité alimentaire et les objectifs environnementaux du Canada.</strong>\n\n• Nommez des technologies, méthodes ou initiatives réelles\n• Identifiez des organisations, fermes ou entreprises qui les utilisent\n• Expliquez le lien entre ces innovations et le rôle professionnel que vous avez étudié\n\nPar exemple, si vous recherchez des technologies d'agriculture de précision, nommez les outils ou plateformes utilisés. Si vous parlez de pratiques agricoles durables, identifiez les fermes ou régions du Canada qui les appliquent.\n\nCitez vos sources lorsque vous en parlez."
      },
      {
        title: "Étape 5 – Perspectives d'avenir",
        details: "<strong>Faites des recherches sur les perspectives d'emploi liées au rôle que vous avez étudié.</strong>\n\n• Cette carrière est-elle en demande?\n• Combien d'emplois de ce type sont prévus dans votre province ou territoire?\n• Qu'est-ce qui crée cette demande (retraite des travailleurs, croissance du secteur, nouvelles technologies qui créent des emplois)?\n\nOù se trouvent ces emplois au Canada? La demande est-elle plus forte dans certaines régions que dans d'autres?\n\n<strong>Citez vos sources lorsque vous en parlez.</strong> Vous n'avez rien d'autre à soumettre : il suffit de les mentionner dans votre vidéo.\n\nPar exemple, ce type de mention fonctionne très bien :\n\n• « selon le Guichet-Emplois… »\n• « le site d'Agriculture et Agroalimentaire Canada indique que… »\n• « Statistique Canada prévoit que… »\n• « ce rapport d'Indeed montre que… »\n• « le profil de carrière dans myBlueprint pour cette occupation mentionne que… »"
      },
      {
        title: "Étape 6 – Soumettre votre vidéo d'activité",
        details: "<strong>Créez une vidéo de 60 à 90 secondes montrant ce que vous avez fait dans l'activité et ce que vous avez appris à travers les étapes 1 à 5.</strong>\n\nLa façon de structurer votre vidéo vous appartient entièrement.\n\n• Format vertical ou horizontal? À vous de choisir.\n• Caméra face à vous ou animation? À vous de choisir.\n• Style documentaire ou style TikTok? À vous de choisir.\n\nLes seules exigences sont que votre vidéo couvre les cinq étapes ci-dessus, qu'elle présente une preuve que vous avez complété l'activité et que nous puissions cliquer sur un lien pour la regarder. Tout le reste est à votre discrétion.\n\n<strong>IMPORTANT : assurez-vous que les paramètres de partage de votre vidéo sont correctement configurés.</strong>\n\nPar exemple :\n• Si vous utilisez Google Drive, assurez-vous que la vidéo peut être regardée par quelqu'un à l'extérieur de votre organisation.\n• Si vous utilisez YouTube, elle ne doit pas être définie sur « Privée ». Le mode « Non répertoriée » fonctionne très bien.\n• Assurez-vous que le lien ne demande pas de connexion.\n\n<strong>Une bonne façon de vérifier est de coller votre lien dans une fenêtre Chrome en mode incognito.</strong> Si la vidéo fonctionne sans connexion, elle devrait fonctionner pour nous aussi.\n\nIl vous revient de vous assurer que nous pouvons voir votre travail."
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Contenu et exactitude',
        weight: 25,
        description: 'Couverture complète des 5 étapes requises, avec des renseignements précis et détaillés.'
      },
      {
        category: 'Recherche et citations',
        weight: 25,
        description: 'Sources de qualité correctement citées tout au long de la présentation vidéo.'
      },
      {
        category: 'Engagement et créativité',
        weight: 25,
        description: 'Présentation dynamique et captivante qui maintient l\'intérêt du spectateur grâce à une approche créative.'
      },
      {
        category: 'Communication et clarté',
        weight: 25,
        description: 'Qualité audio et visuelle claire, organisation logique, enchaînement fluide et respect du format de 60 à 90 secondes.'
      },
      {
        category: 'Consultez la grille d\'évaluation détaillée ici',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/8c960004-9c65-4eb5-bede-15e8a40b6b5b'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/8c960004-9c65-4eb5-bede-15e8a40b6b5b'
  },

  submission: {
    url: 'https://questionnaire.simplesurvey.com/f/s.aspx?s=081F9C05-6E4C-4C85-ADF1-7DCCEC1A2D84',
    deadline: new Date('2025-12-31T23:59:59-05:00'),
    instructions: 'Submit your completed video presentation through the form. Ensure your video link is properly shared with viewing permissions enabled.'
  },

  faqs: [
    {
      question: 'En quoi consiste le Défi d\'activité de décembre?',
      answer: 'Lisez attentivement les étapes des Détails du défi pour comprendre ce qui vous est demandé dans le cadre de cette activité. Vous pouvez visionner la vidéo <em>Visionner : Comment cela fonctionne</em> pour obtenir un aperçu détaillé du Défi d\'exploration de carrières en agriculture.'
    },
    {
      question: 'Qu\'est-ce que je dois soumettre exactement?',
      answer: `Il vous est demandé de soumettre une vidéo de 60 à 90 secondes qui montre ce que vous avez fait dans le cadre de l\'activité et ce que vous avez appris de votre recherche à travers les étapes 1 à 5. Assurez-vous que la vidéo est partagée en tant que lien cliquable avec les paramètres de partage appropriés afin que nous puissions la visionner. Testez-la dans une fenêtre de navigateur de navigation privée avant de la soumettre.`
    },
    {
      question: 'Puis-je soumettre plus d\'une vidéo?',
      answer: `Oui, vous pouvez faire plusieurs soumissions pour différents rôles dans le secteur agricole, mais les élèves ne peuvent gagner qu\'une seule micro-subvention par mois. Nous vous encourageons à privilégier la qualité, et non la quantité.`
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
      answer: `De nombreuses compétences, comme la recherche, la pensée critique, la communication, la création de contenu et bien d\'autres. Ce serait une bonne idée d\'ajouter la vidéo terminée à votre portfolio dans myBlueprint et de réfléchir aux compétences que vous avez le sentiment d\'avoir développées dans le cadre de cette activité.`
    },
    {
      question: 'Qui examine les soumissions?',
      answer: `Les soumissions seront examinées par une équipe de représentants de myBlueprint. Nous pourrions, si besoin, collaborer avec des représentants de thinkAG.`
    },
    {
      question: 'Les élèves peuvent-ils soumettre des vidéos en français?',
      answer: `Oui, les vidéos seront acceptées en anglais ou en français.`
    },
    {
      question: 'Comment (et quand) les vingt meilleures soumissions mensuelles sont-elles sélectionnées?',
      answer: `En fonction du volume de soumissions, nous prévoyons avoir sélectionné et être en mesure d\'annoncer les gagnants d\'ici le milieu du mois suivant. Par exemple, pour cette activité, nous espérons être en mesure d\'annoncer les gagnants de décembre d\'ici la mi-janvier.`
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
      answer: `Le Défi d\'exploration de carrières en agriculture a été conçu comme une activité individuelle.`
    },
    {
      question: 'Puis-je quand même soumettre l\'activité après la date limite du 31 décembre?',
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
      title: 'Explorateur de carrières thinkAG',
      description: 'Outil interactif d\'exploration de carrières comprenant plus de 100 métiers en agriculture, filtrables selon vos intérêts et votre province.',
      url: 'https://pensezagri.ca/fr-ca/explorez-les-carrieres',
      type: 'link',
      borderColor: '#F9862B'
    },
    {
      title: 'Kareero – Jeu d\'évaluation des intérêts',
      description: 'Évaluation interactive de vos intérêts qui suit vos choix dans un programme scolaire de jardinage pour révéler votre profil.',
      url: 'https://kareero.vrts.ca/webgl/',
      type: 'link',
      borderColor: '#FCDE3F'
    },
    {
      title: 'Rapport sur l\'information du marché du travail',
      description: 'Rapport complet de 2024 portant sur les tendances de la main-d\'œuvre en agriculture et les projections d\'emploi.',
      url: 'https://cahrc-ccrha.ca/sites/default/files/2024-02/CAHRC_LMI-Report_FEB_2024_FRv2_0.pdf',
      type: 'pdf',
      buttonText: 'Visit',
      borderColor: '#90BC32'
    },
    {
      title: 'Liste de vidéos de carrières en agriculture',
      description: 'Liste YouTube présentant divers profils de carrières agricoles et des témoignages de l\'industrie.',
      url: 'https://www.youtube.com/watch?v=mNvyfSGi1O4&list=PLsTAeu1pJ5ZwO4rJqjxIUTiHlE8--s0_j',
      type: 'video',
      borderColor: '#488E14'
    },
    {
      title: 'Matrice de ressources en éducation agricole',
      description: 'Base de données nationale comprenant plus de 743 ressources pédagogiques liées à l\'agriculture pour tous les niveaux scolaires.',
      url: 'https://fr.aitcdashboard.ca/resource_matrix/NATIONAL/',
      type: 'link',
      borderColor: '#3640B3'
    },
    {
      title: 'Bourses et opportunités thinkAG',
      description: 'Guide complet des bourses, programmes collégiaux et possibilités de carrières en agriculture à travers le Canada.',
      url: 'https://pensezagri.ca/fr-ca/bourses-detudes',
      type: 'link',
      borderColor: '#01A9AB'
    }
  ],
  resourcesTitle: 'Ressources thinkAG',
  resourcesSubtitle: 'Explorez ces ressources pour soutenir vos recherches dans l\'activité.',

  meta: {
    title: 'Agriculture & Food Systems Challenge - December 2025',
    description: 'Explore diverse career opportunities in Canada\'s agriculture and food systems sector with thinkAG. Research agricultural careers, learn about sustainability, and win micro grants.',
    ogImage: '/thinkag-logo.png'
  }
};
