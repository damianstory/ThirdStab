import { ActivityPageData } from '../../activities';

export const februaryActivity: ActivityPageData = {
  // Base activity information
  id: '5',
  month: 'février',
  year: '2026',
  title: 'Défi sur l\'assurance climatique',
  description: 'Apprenez comment les professionnels de l\'assurance sont des résolveurs de problèmes qui s\'attaquent à de grands défis tels que les changements climatiques, les conditions météorologiques extrêmes et la sécurité des communautés pour protéger nos gens et nos communautés.',
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
    tagline: 'Découvrez comment l\'assurance protège nos communautés face aux changements climatiques',
    introText: `Les changements climatiques posent de nouveaux défis aux communautés partout au Canada — feux de forêt, inondations, vagues de chaleur extrême et tempêtes violentes. Les professionnels de l'assurance sont en première ligne : ils aident les gens à se préparer, à réagir et à se remettre de ces événements. Joignez-vous à Zurich Canada pour découvrir comment les carrières en assurance allient résolution de problèmes, analyse de données et impact concret au sein des communautés.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/KBXC29O-3Tw',
    title: 'Protéger ce qui compte',
    description: `D'un océan à l'autre, les Canadiennes et les Canadiens ressentent les effets des changements climatiques. Les professionnels de l'assurance jouent un rôle essentiel pour aider les communautés à demeurer résilientes. Découvrez comment ce secteur s'adapte à de nouveaux défis et pourquoi il a besoin de jeunes passionnés comme vous.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/C8vCl6AaGCs',
    title: 'Activité de la Série d\'immersion industrielle de février | Comment ça fonctionne'
  },

  explainer: {
    title: 'Aperçu du défi',
    rows: [
      {
        label: 'Période active de soumission',
        content: '1er au 28 février 2026'
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
        content: '28 février 2026 à 23 h 59 (HNE)'
      },
    ]
  },

  activityDetail: {
    description: `Les risques climatiques, comme les inondations, les feux de forêt et les phénomènes météorologiques extrêmes, deviennent de plus en plus fréquents partout au Canada. Les professionnels de l'assurance aident les communautés à se préparer à ces événements et à se rétablir lorsque des catastrophes surviennent.<br/><br/><strong>Ce défi vous invite à explorer</strong> la façon dont les risques climatiques touchent les Canadiennes et les Canadiens, comment l'assurance protège les communautés, et à découvrir des carrières où vous pouvez avoir un impact concret.`,
    steps: [
      {
        title: "Étape 1 : Choisissez un risque climatique",
        details: `<strong>Choisissez UN type de risque climatique à explorer :</strong>

• <strong>Inondations</strong> — inondations urbaines, refoulements d'égouts, débordements de rivières
• <strong>Feux de forêt</strong> — journées de fumée, évacuations, dommages matériels
• <strong>Conditions météorologiques extrêmes</strong> — grêle, tornades, tempêtes de verglas
• <strong>Chaleur extrême</strong> — dômes de chaleur, pannes de courant, impacts sur la santé

<strong>Expliquez brièvement pourquoi vous avez choisi ce risque</strong> et comment il pourrait toucher votre vie ou votre communauté.`
      },
      {
        title: "Étape 2 : Recherchez un exemple canadien réel",
        details: `<strong>Trouvez un événement climatique documenté survenu au Canada et lié au risque climatique que vous avez choisi à l'étape 1.</strong>

Faites des recherches et expliquez :
• Quand et où l'événement s'est-il produit?
• Quelles ont été les conséquences sur les personnes et les communautés?
• Quelles données pouvez-vous trouver? (coûts des dommages, nombre de personnes touchées, etc.)

<strong>Utilisez les outils de recherche dans la section Ressources ci-dessous</strong> et assurez-vous de citer vos sources.

<strong>Quelques exemples pour vous aider à démarrer :</strong>
• Tempête de grêle à Calgary (2024) — près de 3 milliards de dollars en dommages
• Inondations à Toronto (2024) — inondation de la gare Union et de la Don Valley Parkway
• Feu de forêt à Jasper (2024) — ville évacuée et partiellement détruite
• Dôme de chaleur en Colombie-Britannique (2021) — plus de 600 décès
• Inondations en Nouvelle-Écosse (2023) — dommages majeurs aux infrastructures`
      },
      {
        title: "Étape 3 : Comment l'assurance protège les communautés",
        details: `<strong>Décrivez comment l'assurance aide les communautés à se préparer, réagir et se rétablir face aux risques climatiques</strong> — et pourquoi les compagnies d'assurance doivent comprendre les changements climatiques.

<strong>Expliquez comment les compagnies d'assurance interviennent dans chacun de ces quatre volets :</strong>

1. <strong>Se préparer :</strong> Comment l'assurance aide-t-elle les gens à se préparer avant qu'une catastrophe survienne? (p. ex., rabais pour des maisons plus sécuritaires, aide pour repérer les risques dans votre secteur)
2. <strong>Réagir :</strong> Que se passe-t-il lorsqu'une catastrophe survient? (processus de réclamation, obtenir de l'aide rapidement)
3. <strong>Se rétablir :</strong> Comment l'assurance aide-t-elle les gens à reconstruire leur vie après un événement climatique?
4. <strong>Pourquoi c'est important :</strong> Pourquoi les compagnies d'assurance doivent-elles étudier et comprendre les changements climatiques?`
      },
      {
        title: "Étape 4 : Mettre en lumière une carrière en assurance",
        details: `<strong>Faites des recherches sur UN rôle spécifique en assurance lié aux risques climatiques :</strong>

• <strong>Analyste des risques climatiques</strong> — analyse des données climatiques pour prévoir les risques futurs
• <strong>Souscripteur / souscriptrice</strong> — détermine quels risques assurer et à quel prix
• <strong>Expert / experte en sinistres</strong> — examine les réclamations et détermine les indemnisations après une catastrophe
• <strong>Actuaire</strong> — utilise les mathématiques et les statistiques pour calculer les risques et établir les prix
• <strong>Spécialiste en prévention des pertes</strong> — aide les entreprises et les propriétaires à prévenir les pertes

Expliquez en quoi consiste le travail de cette personne. <strong>Comment ce rôle contribue-t-il aux volets se préparer, réagir et se rétablir</strong> que vous avez décrits à l'étape précédente? Donnez au moins un exemple concret.`
      },
      {
        title: "Étape 5 : Perspectives d'avenir",
        details: `<strong>Réfléchissez aux perspectives du marché du travail dans le secteur de l'assurance :</strong>

• Quel est le niveau de demande pour les emplois en assurance?
• Où se trouvent les emplois, et qui embauche?
• Donnez un exemple d'un poste pour lequel Zurich Canada recrute en ce moment.

<strong>Ressources utiles pour vos recherches sur le marché du travail :</strong>
• Guichet-Emplois (jobbank.gc.ca)
• Statistique Canada
• Carrières chez Zurich Canada
• Profils de professions myBlueprint
• Institut d'assurance du Canada

<strong>Citez vos sources.</strong> Par exemple : « selon Guichet-Emplois… » ou « Statistique Canada indique que… ».`
      },
      {
        title: "Étape 6 : Soumettez votre vidéo",
        details: `<strong>Créez une vidéo de deux minutes ou moins qui couvre les étapes 1 à 5.</strong>

Votre vidéo devrait inclure :
• Le risque climatique que vous avez choisi et pourquoi
• Votre exemple canadien réel, appuyé par des données
• La façon dont l'assurance aide les communautés (se préparer, réagir, se rétablir)
• La carrière en assurance que vous avez mise en lumière
• Vos réflexions sur les perspectives d'avenir

<strong>Format :</strong>
• Vidéo verticale ou horizontale : à vous de choisir
• Présentation face caméra ou animations : à vous de choisir
• Style documentaire ou style TikTok : à vous de choisir

Les seules exigences sont que la vidéo aborde chacun des cinq éléments ci-dessus et qu'un lien permettant de la visionner soit fourni.

<strong>IMPORTANT : Assurez-vous que le lien de la vidéo dispose des paramètres de partage appropriés.</strong>
Testez votre lien dans une fenêtre de navigation privée avant de le soumettre. S'il fonctionne sans connexion, il devrait aussi fonctionner pour nous.`
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
        description: 'Qualité audio et visuelle claire, organisation logique, enchaînement fluide et respect du format de deux minutes maximum.'
      },
      {
        category: 'Consultez la grille d\'évaluation détaillée ici',
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
    instructions: 'Soumettez votre présentation vidéo complétée via le formulaire. Assurez-vous que le lien de votre vidéo est correctement partagé avec les autorisations de visionnage activées.'
  },

  faqs: [
    {
      question: 'Qu\'est-ce que l\'assurance climatique?',
      answer: `L'assurance climatique désigne les produits d'assurance qui aident à protéger les personnes, les entreprises et les communautés contre les impacts financiers d'événements liés au climat, comme les inondations, les feux de forêt, les tempêtes et la chaleur extrême. Elle permet de se préparer financièrement aux catastrophes climatiques et de s'en remettre.`
    },
    {
      question: 'Dois-je bien connaître l\'assurance pour réaliser cette activité?',
      answer: `Aucune connaissance préalable n'est requise. Cette activité est conçue pour vous permettre d'en apprendre davantage sur l'assurance au fil du processus. La section Ressources propose des outils pour vous aider à comprendre les risques climatiques et le fonctionnement de l'assurance.`
    },
    {
      question: 'Que faire s\'il n\'y a pas eu d\'événement climatique majeur dans ma région?',
      answer: `Vous pouvez faire des recherches sur n'importe quel événement climatique survenu au Canada — il n'a pas besoin d'avoir eu lieu dans votre communauté. Les exemples fournis (tempête de grêle à Calgary, inondations à Toronto, feu de forêt à Jasper, etc.) constituent d'excellents points de départ.`
    },
    {
      question: 'Quelles carrières existent en assurance?',
      answer: `Il en existe de nombreuses. Pour cette activité, concentrez-vous sur les rôles liés aux risques climatiques : analyste des risques climatiques, souscripteur ou souscriptrice, expert ou experte en sinistres, actuaire, ou spécialiste en prévention des pertes. Chacun de ces rôles contribue, à sa manière, à aider les communautés à se préparer aux événements climatiques et à s'en rétablir.`
    },
    {
      question: 'En quoi consiste le Défi d\'activité de février?',
      answer: 'Lisez attentivement les étapes des Détails du défi pour comprendre ce qui vous est demandé dans le cadre de cette activité. Vous pouvez visionner la vidéo <em>Comment ça fonctionne</em> pour obtenir un aperçu détaillé du Défi sur l\'assurance climatique.'
    },
    {
      question: 'Qu\'est-ce que je dois soumettre exactement?',
      answer: `Il vous est demandé de soumettre une vidéo de deux minutes ou moins qui met en valeur vos recherches des étapes 1 à 5. Votre vidéo devrait couvrir : le risque climatique que vous avez choisi, un exemple canadien réel appuyé par des données, la façon dont l'assurance protège les communautés, une carrière en assurance mise en lumière et vos réflexions sur les perspectives d'avenir. Assurez-vous que le lien de votre vidéo dispose des paramètres de partage appropriés.`
    },
    {
      question: 'Puis-je soumettre plus d\'une vidéo?',
      answer: `Oui, vous pouvez faire l'activité plusieurs fois en explorant différents risques climatiques ou carrières en assurance, mais les élèves ne peuvent gagner qu'une seule microbourse par activité. Nous vous encourageons à privilégier la qualité, et non la quantité.`
    },
    {
      question: 'Y a-t-il un style de vidéo privilégié?',
      answer: `Non, peu importe tant que c'est authentique et captivant pour vous. La vidéo peut adopter le style de TikTok, avec beaucoup de montages différents et de la musique de fond, ou adopter un style plus documentaire. Peu importe ce que vous préférez faire. Assurez-vous simplement de respecter les exigences énumérées dans chacune des étapes.`
    },
    {
      question: 'L\'outil utilisé pour réaliser la vidéo a-t-il de l\'importance?',
      answer: `Non, l'outil que vous utilisez n'a aucune importance. De nombreux outils gratuits permettent de faire des vidéos aujourd'hui. Vérifiez auprès de votre école à quels outils vous avez déjà accès. Par exemple, Canva est un excellent outil pour créer des vidéos.`
    },
    {
      question: 'Quelles compétences vais-je développer en réalisant cette activité?',
      answer: `De nombreuses compétences, comme la recherche, la pensée critique, la communication, la création de contenu et la littératie des données. Vous en apprendrez également sur les sciences du climat, l'évaluation des risques et un secteur que vous n'aviez peut-être pas envisagé auparavant. Ce serait une bonne idée d'ajouter la vidéo terminée à votre portfolio dans myBlueprint et de réfléchir aux compétences que vous avez le sentiment d'avoir développées.`
    },
    {
      question: 'Qui examine les soumissions?',
      answer: `Les soumissions seront examinées par une équipe de représentants de myBlueprint. Nous pourrions, si besoin, collaborer avec des représentants de Zurich Canada.`
    },
    {
      question: 'Les élèves peuvent-ils soumettre des vidéos en français?',
      answer: `Oui, les vidéos seront acceptées en anglais ou en français.`
    },
    {
      question: 'Comment (et quand) les vingt meilleures soumissions mensuelles sont-elles sélectionnées?',
      answer: `En fonction du volume de soumissions, nous prévoyons avoir sélectionné et être en mesure d'annoncer les gagnants d'ici le milieu du mois suivant. Par exemple, pour cette activité, nous espérons être en mesure d'annoncer les gagnants de février d'ici la mi-mars.`
    },
    {
      question: 'Devrais-je ajouter ces soumissions à mon portfolio dans myBlueprint?',
      answer: `Oui, c'est une excellente idée, accompagnée d'une réflexion sur ce que vous avez appris en faisant cette activité et ce que vous avez trouvé intéressant. À titre indicatif, nous demanderons également aux élèves de soumettre une preuve de leurs activités terminées dans un portfolio de myBlueprint s'ils prévoient postuler pour l'un des avantages incitatifs liés à la Réalisation de la série à la fin de l'année.`
    },
    {
      question: 'Dois-je faire cette activité en classe, ou puis-je la faire par moi-même?',
      answer: `Vous pouvez tout à fait réaliser cette activité par vous-même. Cela étant dit, vous devriez absolument informer vos enseignants (et vos parents) que vous faites cela et voir s'il est possible d'obtenir des crédits pour le travail que vous faites pour cette activité.`
    },
    {
      question: 'Puis-je faire cette activité en tant que projet de groupe?',
      answer: `Le Défi sur l'assurance climatique a été conçu comme une activité individuelle.`
    },
    {
      question: 'Puis-je quand même soumettre l\'activité après la date limite du 28 février?',
      answer: `Oui, vous pouvez quand même soumettre des activités mensuelles après la date limite. Toutefois, toute activité soumise après la date limite n'est pas admissible à la réserve de microbourses de ce mois-là. Il est tout de même logique de les réaliser, même après la date limite, afin de pouvoir obtenir l'un des avantages incitatifs liés à la Réalisation de la série. Ceux-ci requièrent uniquement que toutes les activités soient terminées, pas nécessairement qu'elles soient terminées dans le mois de l'activité.`
    },
    {
      question: 'Les enseignants pourront-ils voir qui a soumis une inscription?',
      answer: `Les enseignants ne pourront pas voir dans myBlueprint quels élèves ont soumis des activités ou pas. Cependant, nous créerons des rapports qui seront partagés avec votre responsable de myBlueprint au niveau du conseil scolaire qui pourra partager des détails précis avec vous sur demande.`
    },
    {
      question: 'Quelles données sont collectées et par qui?',
      answer: `myBlueprint est l'unique responsable de la réalisation de la Série d'immersion industrielle, ce qui signifie que seul myBlueprint collecte toute information relative à cette série. Aucune information personnelle identifiable n'est partagée avec des tiers. Nous publierons des informations sous forme de données synthétiques anonymisées pour fournir des mises à jour sur la façon dont la série se déroule. Par exemple, le nombre de soumissions d'activités reçues pour chaque mois, leur province d'origine, et nous communiquerons avec nos partenaires des conseils scolaires sur la participation spécifique à l'école. <a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">[Cliquez ici pour voir les questions auxquelles les élèves doivent répondre]</a> lorsqu'ils soumettent leur activité terminée.`
    }
  ],

  resources: [
    {
      title: 'Bureau d\'assurance du Canada',
      description: 'Découvrez comment l\'assurance soutient les communautés à travers le Canada.',
      url: 'https://www.ibc.ca/',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Zurich et durabilité',
      description: 'Découvrez comment Zurich aborde les risques climatiques et la résilience.',
      url: 'https://www.zurich.com/sustainability',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Données climatiques du gouvernement du Canada',
      description: 'Explorez les tendances et les projections climatiques.',
      url: 'https://climatedata.ca/',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Institut d\'assurance du Canada – Introduction à l\'assurance IARD',
      description: 'Cette ressource en ligne, courte et adaptée aux débutants, explique comment fonctionne l\'assurance de dommages (IARD), pourquoi elle est importante et les types de carrières disponibles.',
      url: 'https://www.insuranceinstitute.ca/',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Carrières chez\nZurich Canada',
      description: 'Explorez les parcours professionnels en assurance et en gestion des risques chez l\'un des plus grands assureurs au monde.',
      url: 'https://www.zurichcanada.com/en-ca/careers',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    },
    {
      title: 'Stages chez Zurich Canada',
      description: 'Explorez les possibilités de stage chez Zurich Canada et lancez votre carrière en assurance et en gestion des risques.',
      url: 'https://www.zurichcanada.com/en-ca/careers/internships',
      type: 'link',
      borderColor: '#8BB8D9',
      borderOnly: true
    }
  ],
  resourcesTitle: 'Ressources de Zurich Canada',
  resourcesSubtitle: 'Explorez ces ressources pour appuyer vos recherches',

  spotlightCallouts: [
    {
      id: 'internship',
      eyebrow: 'OCCASION EXCLUSIVE',
      headline: 'Gagnez un stage d\'été rémunéré',
      subhead: 'Zurich Canada • Été 2026',
      body: 'Un élève exceptionnel de 12e année sera sélectionné pour un stage rémunéré chez Zurich Canada dans leur <strong>bureau de Toronto</strong>. Il s\'agit d\'une occasion unique d\'acquérir une expérience concrète dans les domaines de l\'assurance et de la gestion des risques.',
      badge: '1 PLACE DISPONIBLE',
      icon: 'briefcase',
      gradient: 'blue',
      expandableContent: `
        <p style="background-color:#FFF3CD;border:1px solid #FFECB5;border-radius:8px;padding:12px 16px;margin-bottom:1.25rem;font-weight:600;color:#664D03;">
          To be eligible for this internship, you will need to be able to communicate fluently in English.
        </p>

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
        <p style="margin-bottom:0.75rem;">Whether or not your video is selected to receive one of the monthly micro grants has nothing to do with who receives the internship.</p>
        <p>If you submit your Industry Immersion Series video by February 28th and you're in grade 12, myBlueprint will email you in March and ask for your resume, cover letter, and why you're interested specifically in this role. That information will be shared with the Zurich Canada team, and they will be making a decision shortly afterwards about who they want to interview and potentially bring on for the summer internship.</p>
      `,
    },
    {
      id: 'indigenous',
      eyebrow: 'SOUTIEN DÉDIÉ',
      headline: 'Microbourses pour élèves autochtones',
      subhead: '5 bourses sur 20 réservées • 500 $ chacune',
      body: 'Zurich Canada s\'engage à soutenir les jeunes autochtones dans leur parcours d\'exploration de carrière. Cinq microbourses ont été réservées aux élèves qui s\'identifient comme Autochtones.',
      badge: '5 BOURSES RÉSERVÉES',
      icon: 'sparkles',
      gradient: 'warm',
    },
  ],

  meta: {
    title: 'Défi sur l\'assurance climatique | Série d\'immersion industrielle myBlueprint | Février 2026',
    description: 'Explorez les risques climatiques au Canada et découvrez comment les professionnels de l\'assurance protègent les communautés. Faites des recherches sur les carrières en assurance et gagnez des microbourses avec Zurich Canada.',
    ogImage: '/logo5.png'
  }
};
