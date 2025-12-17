import { SponsorPageData } from '../../sponsors';

export const shadSponsor: SponsorPageData = {
  // Base sponsor information
  id: '24',
  name: 'Shad Canada',
  logo: '/images/sponsor-profiles/shad-canada.png',
  incentiveType: 'completion',
  contribution: 'Donner aux jeunes Canadiens les moyens de devenir des agents de changement grâce aux STIAM',
  slug: 'shad',

  // Extended page content
  hero: {
    tagline: 'Là où les grandes idées prennent vie',
    introText: 'Shad Canada est un organisme de bienfaisance enregistré qui permet aux élèves exceptionnels du secondaire de reconnaître leurs propres capacités et d\'envisager leur potentiel en tant que leaders et agents de changement de demain.'
  },

  about: {
    description: 'Shad offre un ensemble de programmes immersifs conçus pour susciter la curiosité, renforcer la confiance et préparer les élèves de 10e et 11e année à s\'épanouir dans un monde qui évolue rapidement.\n\nChaque programme Shad suit une approche équilibrée combinant des projets pratiques en STIAM et en entrepreneuriat, des expériences dynamiques de construction de communauté et de véritables défis de conception. En plus des projets réalisés en classe, les participants prennent part à des excursions inoubliables qui stimulent la découverte et mettent en valeur la nature et le patrimoine du Canada.\n\nCe qui commence par un mois d\'été immersif (en résidence ou virtuel) devient un réseau à vie et un appel à l\'engagement, en révélant le potentiel des jeunes et en créant un impact durable pour le Canada et le monde.',
    industry: 'Éducation et développement des jeunes',
    website: 'https://www.shad.ca/fr/'
  },

  partnership: {
    description: 'Les incitatifs de complétion de la Série exigent que les élèves complètent les neuf activités de la Série d\'immersion dans l\'industrie. Il n\'est pas nécessaire de compléter chaque activité dans son mois commandité, mais vous devez toutes les compléter.',
    incentiveDescription: 'Pour les élèves de 10e et 11e année, puisque la date limite de candidature à Shad est en janvier, vous devrez compléter les activités d\'octobre, de novembre et de décembre ET indiquer votre intérêt à obtenir une bourse d\'entrée pour le programme Shad 2026 avant le 5 janvier 2026.\n\nCe n\'est pas grave si vous n\'avez pas complété les activités d\'octobre et de novembre dans ces mois-là. Vous pouvez encore les compléter. Vous ne serez pas admissible aux microbourses associées à ces mois, mais une fois qu\'une activité est ouverte, elle demeure accessible pour le reste de l\'année scolaire. Si vous complétez l\'activité de décembre en décembre, vous serez admissible au tirage des microbourses de décembre.\n\nSi vous êtes sélectionné pour l\'une des cinq bourses d\'entrée Shad Canada, vous devrez continuer de compléter toutes les activités restantes de la Série d\'immersion dans l\'industrie jusqu\'à la fin de l\'année scolaire.\n\nPour les élèves de 7e, 8e et 9e année, si vous obtenez une bourse d\'entrée à un programme Shad, ce ne sera pas pour 2026, mais pour un été admissible lorsque vous serez en 10e ou 11e année.',
    steps: [
      'Soumettez les activités d\'octobre, novembre et décembre de la Série d\'immersion dans l\'industrie ET indiquez votre intérêt à poser votre candidature pour l\'une des bourses d\'entrée du programme Shad Canada 2026 avant le 5 janvier 2026.',
      '5 janvier | Annonce des gagnants',
      '23 janvier | Date limite pour que les élèves sélectionnés complètent la portion « contenu » de la demande Shad',
      'Si vous êtes sélectionné, continuez de compléter toutes les activités restantes de la Série d\'ici la fin de l\'année scolaire.'
    ],
    incentiveSteps: [
      'Soumettez les 9 activités d\'immersion dans l\'industrie avant le 30 mai 2026.',
      'Votre participation est suivie automatiquement. Si vous êtes en 7e, 8e ou 9e année et que vous complétez les 9 activités mensuelles de la Série d\'immersion dans l\'industrie, vous serez automatiquement admissible au tirage d\'une bourse d\'entrée pour un futur programme Shad.',
      'En juin 2026, un gagnant par niveau scolaire sera sélectionné.',
      'Votre bourse couvrira un futur programme Shad, et non celui de 2026.'
    ]
  },

  careerResources: [
    {
      title: 'Programme d\'été Shad',
      description: 'Découvrez le programme d\'été transformateur d\'un mois pour les élèves de la 10e à la 12e année.',
      url: 'https://www.shad.ca/fr/programme-ete-shad/',
      type: 'link'
    },
    {
      title: 'Information sur les candidatures',
      description: 'Découvrez comment postuler et ce que Shad recherche chez les candidats.',
      url: 'https://www.shad.ca/fr/postuler/',
      type: 'link'
    },
    {
      title: 'Histoires d\'anciens',
      description: 'Découvrez où les anciens de Shad sont allés et ce qu\'ils ont accompli.',
      url: 'https://www.shad.ca/fr/anciens/',
      type: 'article'
    }
  ],

  incentiveCard: {
    label: 'Incitatif pour la complétion de la série',
    value: '5 bourses d\'entrée'
  },

  deadlines: [
    {
      label: 'Date limite 1 : 10e, 11e année',
      date: '5 janvier 2026'
    },
    {
      label: 'Date limite 2 : 7e, 8e, 9e année',
      date: '30 mai 2026'
    }
  ],

  faqs: [
    {
      question: 'Qu\'est-ce que le programme d\'été Shad?',
      answer: 'Le programme d\'été Shad est une expérience d\'enrichissement d\'un mois offerte sur des campus universitaires partout au Canada. Les élèves participent à des ateliers STIAM, à des défis en entrepreneuriat et à des activités de développement personnel tout en créant des liens durables avec leurs pairs et leurs mentors.'
    },
    {
      question: 'Qu\'est-ce qu\'une bourse d\'entrée Shad?',
      answer: 'Une bourse d\'entrée équivaut à une bourse couvrant la totalité des frais. Avec une bourse d\'entrée, vous pourrez participer à un programme d\'été en personne ou virtuel sans frais.\n\nVeuillez noter que les frais de déplacement nécessaires pour vous rendre à un campus en résidence et en revenir ne sont pas inclus dans la bourse.'
    },
    {
      question: 'À quoi ressemble une journée à Shad?',
      answer: 'https://www.youtube.com/embed/gjzTnm9QgU4'
    },
    {
      question: 'Qui peut poser sa candidature à Shad?',
      answer: 'Shad accepte les candidatures d\'élèves de 10e et 11e année partout au Canada. Le programme recherche des élèves curieux, engagés et motivés à créer un impact dans leur communauté et ailleurs.\n\nComme le nombre de places est limité chaque année, un processus de sélection est en place. Ce processus dépasse les résultats scolaires. Nous recherchons le potentiel : une étincelle de leadership, une volonté de collaborer et le courage de penser différemment.'
    },
    {
      question: 'Est-ce que je peux poser ma candidature maintenant?',
      answer: 'Oui, les candidatures sont maintenant ouvertes. Vous pouvez poser votre candidature ici : https://www.shad.ca/apply/\n\nVous pouvez indiquer dans votre candidature que vous participez également à l\'incitatif de la Série d\'immersion dans l\'industrie.\n\nPosez votre candidature avant le 15 décembre pour avoir la chance de gagner un dîner avec le directeur général de Shad, Tim Jackson.'
    },
    {
      question: 'Quelle est la différence entre le programme en résidence et le programme virtuel?',
      answer: 'En résidence :\n• Format : en personne, en résidence sur un campus postsecondaire, avec supervision 24/7.\n• Durée : 27 jours, du 5 juillet au 31 juillet 2026\n• Comprend : hébergement sur un campus postsecondaire, ateliers pratiques, projets d\'équipe, vie de campus authentique, excursions hors campus\n• Idéal pour : les élèves qui souhaitent vivre une expérience immersive complète.\n\nVirtuel :\n• Format : en ligne\n• Accès : de partout au Canada (ou même de l\'étranger), du 6 juillet au 31 juillet 2025, du lundi au vendredi, de 11 h à 17 h (HE)\n• Comprend : ateliers virtuels, conférences, projets de groupe, invités spéciaux, excursions virtuelles\n• Idéal pour : les élèves qui ont besoin de flexibilité pour rester dans leur communauté, que ce soit pour concilier un emploi à temps partiel, soutenir leur famille ou pratiquer un sport de haut niveau. Une expérience immersive complète, directement à la maison.\n\nVous pouvez en savoir plus sur les frais, le soutien financier et ce qui est inclus ici : https://www.shad.ca/participate/'
    },
    {
      question: 'Laissez votre nom et votre courriel scolaire ici.',
      answer: 'Nous ajouterons également ce lien aux pages individuelles des activités de la Série d\'immersion dans l\'industrie.\n\nVeuillez noter que nous communiquerons avec vous par courriel. Il est donc de votre responsabilité de suivre vos messages pour ne manquer aucun renseignement important.'
    },
    {
      question: 'Est-ce que le fait de compléter la Série d\'immersion dans l\'industrie peut renforcer votre demande à Shad?',
      answer: 'Même si Shad évalue chaque candidature de manière globale, compléter la Série d\'immersion dans l\'industrie démontre de l\'initiative, de la curiosité envers les parcours professionnels et un engagement envers votre développement personnel. Ce sont toutes des qualités recherchées chez les candidats.'
    },
    {
      question: 'Et si je n\'ai pas complété les activités d\'octobre ou de novembre durant ces mois?',
      answer: 'Ce n\'est pas grave. Une fois qu\'une activité est ouverte, elle reste accessible pour le reste de l\'année scolaire. Donc, même si un élève n\'a pas complété l\'activité durant son mois commandité (par exemple, compléter l\'activité d\'octobre en octobre), vous pouvez toujours la compléter pour être admissible aux incitatifs de complétion de la Série, dont les bourses d\'entrée Shad Canada font partie.\n\nIl est important de noter qu\'une fois le mois terminé, les microbourses de ce mois ne sont plus disponibles, mais l\'activité reste ouverte pour que quiconque puisse la compléter.\n\nVous pouvez en savoir plus sur les autres incitatifs de complétion de la Série ici : <a href="https://industryimmersionseries.myblueprint.ca/sponsors" target="_blank" rel="noopener noreferrer" class="text-brandBlue hover:underline">https://industryimmersionseries.myblueprint.ca/sponsors</a>'
    },
    {
      question: 'Qu\'est-ce que la Série d\'immersion dans l\'industrie?',
      answer: '• Chaque mois, un nouveau partenaire de l\'industrie propose un défi axé sur le développement de compétences pour présenter des carrières et des possibilités dans son secteur.\n\n• Les élèves travaillent individuellement sur le défi, développant une meilleure compréhension des possibilités dans l\'industrie, des compétences pertinentes, des parcours postsecondaires et plus encore.\n\n• Le travail complété est soumis et évalué à l\'aide d\'une grille d\'évaluation par le comité de sélection. Vingt soumissions sont choisies chaque mois.\n\n• Les meilleures soumissions reçoivent des microbourses et une reconnaissance de la part des partenaires de l\'industrie. Des microbourses totalisant 10 000 $ sont offertes chaque mois, avec des incitatifs supplémentaires pour les élèves, les enseignants et les écoles.'
    }
  ],

  cta: {
    primaryLabel: 'Visiter Shad Canada',
    primaryUrl: 'https://www.shad.ca/fr/',
    secondaryLabel: 'Postuler à Shad',
    secondaryUrl: 'https://www.shad.ca/fr/postuler/'
  },

  meta: {
    title: 'Shad Canada | Commanditaire de la série d\'immersion industrielle',
    description: 'Découvrez Shad Canada, un partenaire de complétion de la série d\'immersion industrielle, qui donne aux jeunes Canadiens les moyens de réussir grâce aux STIAM et à l\'entrepreneuriat.',
    ogImage: '/images/sponsors/shad-canada-og.png'
  }
};
