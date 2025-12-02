import { SponsorPageData } from '../../sponsors';

export const shadCanadaSponsor: SponsorPageData = {
  // Base sponsor information
  id: '24',
  name: 'Shad Canada',
  logo: '/images/sponsor-profiles/shad-canada.png',
  incentiveType: 'completion',
  contribution: 'Donner aux jeunes Canadiens les moyens de devenir des agents de changement grâce aux STIAM',
  slug: 'shad-canada',

  // Extended page content
  hero: {
    tagline: 'Où Les Grandes Idées Prennent Vie',
    introText: 'Shad Canada est un organisme de bienfaisance enregistré qui permet aux élèves exceptionnels du secondaire de reconnaître leurs propres capacités et d\'envisager leur potentiel en tant que leaders et agents de changement de demain.'
  },

  about: {
    description: 'Shad Canada est un organisme de bienfaisance national qui offre des programmes transformateurs en STIAM et en entrepreneuriat aux élèves du secondaire. Grâce à des expériences estivales immersives sur des campus universitaires à travers le Canada, Shad aide les jeunes à développer leur pensée critique, leur créativité et leurs compétences en leadership tout en construisant un réseau de pairs et de mentors partageant les mêmes idées.\n\nFondé en 1981, Shad a diplômé plus de 20 000 étudiants qui sont devenus des leaders dans les affaires, les sciences, la technologie, les arts et la fonction publique.',
    industry: 'Éducation et développement des jeunes',
    website: 'https://www.shad.ca/fr/'
  },

  partnership: {
    description: 'En tant que partenaire de complétion de la série, Shad Canada reconnaît les étudiants qui démontrent un engagement exceptionnel envers l\'exploration de carrière tout au long de la série d\'immersion industrielle. Compléter la série entière démontre le type d\'initiative et de curiosité que Shad recherche chez ses candidats.',
    incentiveDescription: 'Shad Canada peut offrir une considération prioritaire ou une reconnaissance spéciale aux participants ayant complété la série d\'immersion industrielle qui postulent à leurs programmes d\'été.',
    steps: [
      'Soumettez les activités d\'octobre, novembre et décembre **avant le 5 janvier 2026**',
      'Indiquez votre intérêt à postuler pour l\'une des bourses d\'entrée au programme Shad Canada 2026',
      '7 janvier | Annonce des gagnants',
      '23 janvier | Date limite pour les récipiendaires de compléter la portion contenu de la candidature SHAD',
      'Si sélectionné, continuez à compléter toutes les activités restantes de la série d\'immersion industrielle d\'ici la fin de l\'année scolaire'
    ],
    incentiveSteps: [
      'Soumettez les 9 activités d\'immersion industrielle **avant le 30 mai 2026**',
      'Votre participation est suivie automatiquement. Si vous êtes en 7e, 8e ou 9e année et que vous complétez les 9 activités mensuelles, vous serez automatiquement inscrit pour gagner une future bourse d\'entrée',
      'En juin 2026, un gagnant par niveau sera sélectionné',
      'Votre bourse couvre un futur programme SHAD, pas 2026.'
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
    label: 'Incitatif de complétion de série',
    value: '5x bourses d\'entrée'
  },

  deadlines: [
    {
      label: 'Date limite 1: 10e, 11e année',
      date: '7 janvier 2026'
    },
    {
      label: 'Date limite 2: 7e, 8e, 9e année',
      date: '30 mai 2026'
    }
  ],

  faqs: [
    {
      question: 'Qu\'est-ce que le programme d\'été Shad?',
      answer: 'Le programme d\'été Shad est une expérience d\'enrichissement d\'un mois qui se déroule sur des campus universitaires à travers le Canada. Les étudiants participent à des ateliers STIAM, des défis entrepreneuriaux et des activités de développement personnel tout en construisant des liens durables avec des pairs et des mentors.'
    },
    {
      question: 'Qu\'est-ce qu\'une bourse d\'entrée à Shad?',
      answer: 'Une bourse d\'entrée équivaut à une bourse complète. Ainsi, avec une bourse d\'entrée, vous pourrez participer à un programme d\'été en personne ou virtuel sans frais pour vous.'
    },
    {
      question: 'À quoi ressemble une journée à Shad?',
      answer: 'https://www.youtube.com/embed/gjzTnm9QgU4'
    },
    {
      question: 'Qui peut postuler à Shad?',
      answer: 'Shad accepte les candidatures d\'élèves de 10e et 11e année de partout au Canada. Le programme recherche des étudiants curieux et engagés qui veulent faire une différence dans leurs communautés et au-delà.'
    },
    {
      question: 'Puis-je postuler maintenant?',
      answer: 'Oui, les candidatures sont ouvertes maintenant. Vous pouvez postuler dès maintenant à: https://www.shad.ca/fr/postuler/\n\nVous pouvez indiquer dans votre candidature que vous participez également à l\'opportunité d\'incitatif de la série d\'immersion industrielle.\n\nPostulez avant le 15 déc. pour courir la chance de gagner un dîner avec le PDG de Shad, Tim Jackson.'
    },
    {
      question: 'Est-ce que compléter la série d\'immersion industrielle aide pour les candidatures Shad?',
      answer: 'Bien que Shad évalue chaque candidature de manière holistique, compléter la série d\'immersion industrielle démontre de l\'initiative, de la curiosité envers les parcours professionnels et un engagement envers la croissance personnelle - toutes des qualités qui correspondent à ce que Shad recherche chez ses candidats.'
    },
    {
      question: 'Qu\'est-ce que la série d\'immersion industrielle?',
      answer: '• Chaque mois, un nouveau partenaire industriel lance un défi de développement de compétences conçu pour présenter aux étudiants les métiers et opportunités de leur industrie.\n\n• Les étudiants travaillent individuellement sur le défi, développant une sensibilisation aux opportunités de l\'industrie, des compétences pertinentes, des parcours postsecondaires, et plus encore.\n\n• Le travail complété est soumis et évalué selon une grille d\'évaluation pour examen par le comité de sélection. Vingt soumissions seront sélectionnées chaque mois.\n\n• Les soumissions exceptionnelles reçoivent des micro-bourses et une reconnaissance des partenaires industriels. 10 000 $ en micro-bourses sont attribués CHAQUE mois, avec des incitatifs de participation supplémentaires disponibles pour les étudiants, les éducateurs et les écoles.\n\nCliquez sur le logo myBlueprint en haut à gauche de cette page pour en savoir plus.'
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
