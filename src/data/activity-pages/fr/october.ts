import { ActivityPageData } from '../../activities';

// TODO: Replace English text content with French translations
// NOTE: Keep this file structure identical to en/october.ts for consistency

export const octoberActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '1',
  month: 'October',
  year: '2025',
  title: 'Défi de l\'industrie minière',
  description: `Avec des carrières souterraines et de surface, sur le terrain, dans les usines de traitement des minéraux et de métallurgie, les laboratoires et les bureaux, il y a une place pour vous dans le secteur minier.`,
  sponsor: {
    name: 'MiHR',
    logo: '/logo1.gif', // Sponsor logo stays the same
    logoType: 'square'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'october',

  // Extended page content
  hero: {
    tagline: 'Découvrez votre avenir dans le secteur minier',
    introText: `Des opérations souterraines aux technologies de pointe, l'industrie minière offre une multitude de parcours professionnels qui alimentent notre monde moderne. Joignez-vous au Conseil des ressources humaines de l'industrie minière (MiHR) pour découvrir les possibilités offertes dans l'un des secteurs les plus essentiels du Canada.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/9HwVWa1rnHQ',
    title: 'L\'industrie minière a besoin de vous',
    description: `Le secteur minier est essentiel à notre mode de vie d'aujourd'hui et au monde que nous voulons construire demain.
Avec des carrières souterraines et de surface, sur le terrain, dans les usines de traitement des minéraux et de métallurgie, les laboratoires et les bureaux, il y a une place pour vous dans le secteur minier.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/JYiO_gkFqWM',
    title: 'Regardez : Comment ça fonctionne'
  },

  explainer: {
    title: 'Aperçu du défi',
    rows: [
      {
        label: 'Période de soumission active',
        content: 'Du 1er au 31 octobre 2025'
      },
      {
        label: 'Admissibilité',
        content: 'Élèves de la 7e à la 12e année partout au Canada'
      },
      {
        label: 'Valeur totale des récompenses',
        content: '10 000 $ en microbourses'
      },
      {
        label: 'Prix individuels',
        content: '20 gagnants × 500 $ chacun'
      },
      {
        label: 'Date limite de soumission',
        content: '31 octobre 2025 à 23 h 59 (heure de l\'Est)'
      },
    ]
  },

  activityDetail: {
    description: 'L\'industrie minière se situe à l\'avant-garde de l\'innovation technologique, de la gestion environnementale et du développement durable des ressources.<br/><br/><strong>Ce défi invite les élèves à explorer les divers parcours de carrière dans le domaine minier</strong>, qu\'il s\'agisse des opérations souterraines traditionnelles ou des domaines modernes comme l\'analyse de données et les sciences de l\'environnement.',
    steps: [
      {
        title: "Étape 1 – Mise en lumière d'une carrière",
        details: "Commencez par identifier un poste précis au sein de l'industrie minière, par exemple : Scientifique de l'environnement, ingénieur minier, analyste de données, spécialiste des services techniques, etc. Il y en a plusieurs à découvrir!\n\nVous pouvez utiliser les ressources du MiHR ci-dessous et/ou faire vos propres recherches, mais vous devrez citer vos sources.\n\nImportant : Sélectionnez un seul rôle précis et effectuez vos recherches à son sujet.\n\n<strong>Expliquez ensuite les responsabilités quotidiennes d'une personne occupant ce poste.</strong>"
      },
      {
        title: "Étape 2 – Compétences essentielles",
        details: "<strong>Mettez en valeur 2 à 3 compétences requises pour ce poste.</strong>\n\nElles peuvent être transférables ou durables (ex. : pensée critique) ou techniques et propres au rôle."
      },
      {
        title: "Étape 3 – Parcours vers l'emploi",
        details: "<strong>Expliquez les chemins postsecondaires et les formations nécessaires pour occuper ce poste.</strong>\n\nPar exemple : ce rôle exige-t-il un apprentissage, un diplôme collégial ou universitaire? Y a-t-il des certifications particulières requises?"
      },
      {
        title: "Étape 4 – Accent sur la durabilité",
        details: "<strong>Décrivez les actions concrètes que le secteur minier entreprend dans le cadre de son engagement envers la durabilité et son rôle dans la réalisation des objectifs environnementaux du Canada.</strong>\n\nPar exemple, l'intégration d'énergies renouvelables et d'équipements écologiques, investissements stratégiques dans les infrastructures nordiques et collaboration avec les communautés autochtones pour une gestion responsable des terres et une approche positive pour la nature."
      },
      {
        title: "Étape 5 – Perspectives d'avenir",
        details: "Les recherches du MiHR montrent qu'environ 80 000 nouveaux travailleurs seront nécessaires dans l'industrie d'ici 2030.\n\n<strong>Expliquez les perspectives d'emploi pour le rôle que vous avez choisi : Où se trouvent les emplois au Canada? Y a-t-il une plus forte demande dans certaines régions que dans d'autres?</strong>"
      },
      {
        title: "Étape 6 – Soumission",
        details: "<strong>Utilisez les recherches effectuées dans les étapes 1 à 5 pour créer une vidéo de 60 à 90 secondes.</strong>\n\nLa façon de structurer votre vidéo vous appartient entièrement :\n\n• Verticale ou horizontale? À vous de choisir.\n• Face caméra ou animation complète? À vous de choisir.\n• Style documentaire ou type TikTok? À vous de choisir.\n\nLes seuls critères obligatoires :\n\n• La vidéo doit couvrir les 5 étapes ci-dessus.\n• Le lien fourni doit permettre de la visionner directement.\n\nTout le reste, c'est à vous de décider.\n\nVisez 75/100 ou plus à la grille d'évaluation, et vous serez automatiquement admissible au tirage au sort pour gagner l'une des vingt microbourses.\n\nQuelqu'un doit gagner. Pourquoi pas vous? Pourquoi pas maintenant?"
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Contenu et exactitude',
        weight: 40,
        description: 'Couverture complète des 5 étapes requises, avec des renseignements précis et détaillés.'
      },
      {
        category: 'Recherche et citations',
        weight: 20,
        description: 'Sources de qualité correctement citées tout au long de la présentation vidéo.'
      },
      {
        category: 'Engagement et créativité',
        weight: 20,
        description: 'Présentation dynamique et captivante qui maintient l\'intérêt du spectateur grâce à une approche créative.'
      },
      {
        category: 'Communication et clarté',
        weight: 20,
        description: 'Qualité audio et visuelle claire, organisation logique, enchaînement fluide et respect du format de 60 à 90 secondes.'
      },
      {
        category: 'Consultez la grille d\'évaluation détaillée ici',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/a00eb95e-7d81-4043-a3c5-781a040b4e05'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/a00eb95e-7d81-4043-a3c5-781a040b4e05'
  },

  submission: {
    // TODO: Update to French SurveyMonkey form URL when available
    url: 'https://www.surveymonkey.com/r/K2W32NQ',
    deadline: new Date('2025-10-31T23:59:59-05:00'),
    instructions: 'Submit your completed presentation or infographic along with your written reflection through the Google Form. Ensure all files are properly named with your name and school.' // TODO: Translate to French
  },

  faqs: [
    {
      question: 'Comment fonctionne le défi de l\'activité d\'octobre?',
      answer: 'Lisez attentivement les étapes 1 à 5 dans la section Détails de l\'activité pour bien comprendre ce qui est attendu. Vous pouvez aussi visionner la vidéo « Comment ça fonctionne » pour un aperçu détaillé.'
    },
    {
      question: 'Qu\'est-ce qu\'on me demande exactement de soumettre?',
      answer: `Vous devez soumettre une vidéo de 60 à 90 secondes qui met en valeur la recherche réalisée aux étapes 1 à 5 de cette activité. Assurez-vous que le lien vers la vidéo est cliquable, qu'aucun téléchargement ne soit requis et que les paramètres de partage nous permettent d'y accéder. Pensez à tester votre lien avant de soumettre.`
    },
    {
      question: 'Est-ce que je peux soumettre plus d\'une vidéo?',
      answer: `Oui! Vous pouvez faire l'activité plusieurs fois pour différents rôles dans l'industrie minière. Cependant, chaque élève ne peut gagner qu'une seule microbourse par activité. Nous vous encourageons à privilégier la qualité plutôt que la quantité.`
    },
    {
      question: 'Y a-t-il un style de vidéo préféré?',
      answer: `Non, le style dépend entièrement de ce qui vous semble authentique et engageant. Vous pouvez créer une vidéo de style TikTok avec plusieurs transitions et de la musique, ou opter pour un format plus documentaire. L'essentiel est de bien communiquer les informations demandées aux étapes 1 à 5.`
    },
    {
      question: 'Peu importe l\'outil utilisé pour créer la vidéo?',
      answer: `Peu importe l'outil que vous utilisez. Il existe plusieurs outils gratuits pour créer des vidéos. Vérifiez avec votre école ce qui est déjà disponible. Par exemple, Canva est un excellent outil pour créer des vidéos.`
    },
    {
      question: 'Quelles compétences vais-je développer grâce à cette activité?',
      answer: `Plusieurs! Entre autres, la recherche, la pensée critique, la communication, la création de contenu, et bien plus encore. Nous vous recommandons d'ajouter votre vidéo complétée à votre portfolio myBlueprint et de réfléchir aux compétences que vous avez développées durant l'activité.`
    },
    {
      question: 'Qui évalue les soumissions?',
      answer: `Les soumissions sont évaluées par une équipe de représentants de myBlueprint. Au besoin, nous pouvons collaborer avec des représentants du MiHR.`
    },
    {
      question: 'Les élèves peuvent-ils soumettre leur vidéo en français?',
      answer: `Toutes les vidéos doivent être évaluées en anglais. Ainsi, si un élève souhaite soumettre une vidéo en français, nous demandons qu'il y inclue des sous-titres en anglais.`
    },
    {
      question: 'Comment (et quand) les vingt gagnants mensuels sont-ils sélectionnés?',
      answer: `Selon le nombre de soumissions reçues, nous prévoyons annoncer les gagnants vers le milieu du mois suivant. Par exemple, pour cette activité d'octobre, les gagnants devraient être annoncés vers la mi-novembre.`
    },
    {
      question: 'Devrais-je ajouter cette soumission à mon portfolio myBlueprint?',
      answer: `Oui, excellente idée! Ajoutez-la avec une réflexion sur ce que vous avez appris et trouvé intéressant. À noter : si vous comptez postuler pour les récompenses de fin de Série, nous vous demanderons de soumettre toutes vos activités complétées à travers un portfolio myBlueprint.`
    },
    {
      question: 'Est-ce que je dois faire cette activité en classe ou seul?',
      answer: `Vous pouvez la faire seul, sans problème. Cela dit, nous vous encourageons à en parler avec vos enseignants (et vos parents) pour voir si vous pouvez obtenir des crédits ou une reconnaissance pour le travail accompli.`
    },
    {
      question: 'Est-ce que je peux faire cette activité en groupe?',
      answer: `Le défi d'octobre a été conçu comme une activité individuelle.`
    },
    {
      question: 'Est-ce que je peux soumettre mon activité après la date limite du 31 octobre?',
      answer: `Oui, vous pouvez soumettre les activités mensuelles même après la date limite. Cependant, toute activité soumise après la date limite ne sera pas admissible au tirage de microbourses pour ce mois-là. Il reste tout de même avantageux de les compléter après la date limite, puisque vous pourriez être admissible aux récompenses de fin de Série. Pour ces récompenses, il suffit d'avoir terminé toutes les activités, sans nécessairement respecter les dates mensuelles.`
    },
    {
      question: 'Est-ce que les enseignants pourront voir qui a soumis une activité?',
      answer: `Les enseignants ne pourront pas voir directement dans myBlueprint quels élèves ont soumis leurs activités. Mais nous produirons des rapports qui seront partagés avec la personne-ressource myBlueprint de votre conseil scolaire, et celle-ci pourra vous communiquer les renseignements précis sur demande.`
    },
    {
      question: 'Quelles données sont recueillies et par qui?',
      answer: `myBlueprint est le seul responsable de la gestion de la Série d'immersion dans l'industrie.

Cela signifie que les renseignements liés à cette Série sont uniquement recueillis par myBlueprint. Aucune information personnellement identifiable n'est partagée avec des tiers.

Nous publierons des données désidentifiées (sommaires et anonymisées) pour fournir des mises à jour sur la progression de la Série. Par exemple, le nombre de soumissions reçues chaque mois, les provinces d'origine des participants, et des rapports de participation par école seront partagés avec nos partenaires des conseils scolaires.

<a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Cliquez ici pour voir les questions posées aux élèves</a> lors de la soumission de leur activité.`
    }
  ],

  resources: [
    {
      title: 'Faites le quiz',
      description: 'Peu importe votre niveau de scolarité, découvrez une carrière qui vous convient.',
      url: 'https://miningneedsyou.ca/#take-a-quiz',
      type: 'link'
    },
    {
      title: 'Chercheur de carrière',
      description: 'Une plateforme centrale conçue pour vous aider à explorer, planifier et faire progresser votre avenir dans l\'industrie minière canadienne.',
      url: 'https://miningneedsyou.ca/mining-career-seeker-dashboard',
      type: 'link'
    },
    {
      title: 'Vidéos de carrière',
      description: 'Différentes vidéos sur les carrières dans le secteur minier, un peu comme Netflix pour les mines!',
      url: 'https://mihr.ca/resources/?resource-type=video&resource-category=careers',
      type: 'video'
    },
    {
      title: 'Carte de la main-d\'œuvre',
      description: 'Cet outil de visualisation de données vous offre un aperçu complet des besoins évolutifs en main-d\'œuvre.',
      url: 'https://analytics.mihr.ca/map/en/0/labour_force/total/Economic%20regions/total/1/Default',
      type: 'link'
    },
    {
      title: 'Ressources du MiHR',
      description: 'Toutes les ressources du MiHR.\nRéunies au même endroit.',
      url: 'https://mihr.ca/resources/?resource-category=national-outlook',
      type: 'link'
    },
    {
      title: 'Ressources de carrière de Mining Needs You',
      description: 'Découvrez où commencer selon vos compétences et vos intérêts.',
      url: 'https://miningneedsyou.ca/resources/',
      type: 'link'
    }
  ],
  resourcesTitle: 'Ressources du MiHR',
  resourcesSubtitle: 'Explorez ces ressources pour appuyer vos recherches d\'activité.',

  meta: {
    title: 'Mining Industry Challenge - October 2025', // TODO: Translate to French
    description: 'Explore diverse career opportunities in Canada\'s mining industry with MiHR. Research mining careers, learn about sustainability, and win micro grants.', // TODO: Translate to French
    ogImage: '/logo1.gif' // Sponsor logo stays the same
  }
};
