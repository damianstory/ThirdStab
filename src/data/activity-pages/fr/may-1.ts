import { ActivityPageData } from '../../activities';

// Export uses camelCase (may1Activity) since 'may-1Activity' isn't a valid identifier
export const may1Activity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '8',
  month: 'mai-1',
  year: '2026',
  title: 'Défi de l\'industrie CVAC-R (chauffage, ventilation, climatisation et réfrigération)',
  description: 'Le CVAC-R, ce n\'est pas seulement des outils et des conduits : c\'est un domaine bien rémunéré et en forte demande, qui offre des possibilités en conception, en ingénierie, en vente, en technologies vertes et même la possibilité de lancer votre propre entreprise.',
  sponsor: {
    name: 'HRAI',
    logo: '/hvacr-career-connections.png',
    logoType: 'wide'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'may-1',

  // Extended page content
  hero: {
    backgroundImage: '/images/may-1-hero.jpg',
    backgroundPosition: 'center top',
    tagline: 'Découvrez de vraies carrières au cœur des bâtiments confortables et écoénergétiques',
    introText: `Le chauffage, la ventilation, la climatisation et la réfrigération (CVAC-R) permettent aux maisons, aux écoles, aux hôpitaux et aux entreprises de fonctionner de façon sécuritaire et efficace. Il s'agit d'un secteur en pleine croissance et à l'épreuve de l'IA, où la demande de main-d'œuvre qualifiée est forte partout au Canada pour une vaste gamme de métiers.\n\nDans ce défi, vous explorerez une entreprise réelle de CVAC-R dans votre communauté, vous en apprendrez davantage sur un métier précis du secteur et vous verrez comment les technologies du CVAC-R améliorent l'efficacité énergétique et réduisent l'impact environnemental.\n\nAu fil du défi, vous découvrirez des parcours professionnels concrets et en forte demande auxquels vous n'aviez peut-être pas pensé.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/IBeLJ33OCoc',
    title: 'À propos des carrières en CVCA',
    description: `Regardez cette vidéo pour découvrir comment les carrières en CVAC-R combinent le travail pratique, la résolution de problèmes et des technologies en constante évolution. Des métiers spécialisés, comme mécanicien en chauffage au gaz, en climatisation ou en réfrigération, à la conception de systèmes, à la vente ou même au démarrage de votre propre entreprise, le secteur du CVAC-R offre une grande variété de parcours professionnels.\n\nDe nombreux parcours reposent sur l'apprentissage, ce qui vous permet de gagner un revenu tout en apprenant et de développer des compétences recherchées partout au Canada.`
  },

  howThisWorksVideo: {
    embedUrl: '', // TODO: Replace with How This Works video once created
    title: 'Fonctionnement du défi de mai'
  },

  explainer: {
    title: 'Aperçu du défi',
    rows: [
      {
        label: 'Période de soumission active',
        content: '1er au 31 mai 2026'
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
        content: '31 mai 2026 à 23 h 59 (HE)'
      }
    ]
  },

  activityDetail: {
    description: `Le Canada a besoin de plus de professionnels qualifiés en CVAC-R pour répondre à la croissance des besoins en construction, en entretien et en efficacité énergétique. Par exemple, on estime que la demande pour les mécaniciens en climatisation et en réfrigération augmentera de 400 % au cours des 10 prochaines années.\n\n<strong>Dans ce défi, vous devrez :</strong>\n<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem;"><li>effectuer des recherches sur une entreprise réelle de CVAC-R dans votre communauté</li><li>explorer un métier précis dans cette entreprise ou dans l'industrie</li><li>découvrir comment les technologies du CVAC-R contribuent à l'efficacité énergétique et à la performance des bâtiments</li><li>comprendre les perspectives d'emploi et la demande future dans ce domaine</li></ul><p style="margin-top: 1rem;">Concentrez-vous sur des informations claires et fiables provenant de sources crédibles. Évitez de copier des définitions générales — montrez ce que vous avez appris avec vos propres mots.</p>`,
    steps: [
      {
        title: "Étape 1 : Recherchez une entreprise locale de CVAC-R",
        details: `<strong>Trouvez et présentez au moins une entreprise locale de CVAC-R.</strong>

Votre recherche doit inclure :
• les activités de l'entreprise (installation, entretien, réparation, conception, fabrication, etc.)
• les types de systèmes utilisés (chauffage, climatisation, thermopompes, réfrigération, résidentiel, commercial, industriel)
• depuis combien de temps elle est en activité dans votre région
• les types de postes qu'elle propose

<strong>Où chercher :</strong>
• faites une recherche en ligne sur des entreprises de CVAC-R dans votre région
• demandez à votre entourage
• utilisez les ressources de HRAI ci-dessous

<strong>Objectif :</strong>
Montrer que le CVAC-R est une industrie bien présente localement, offrant de véritables possibilités d'emploi partout au Canada, y compris dans votre communauté.`
      },
      {
        title: "Étape 2 : Découvrez un métier du CVAC-R",
        details: `<strong>Choisissez un métier du CVAC-R et découvrez à quoi il ressemble concrètement.</strong>

Votre présentation devrait inclure :
• <strong>les tâches quotidiennes</strong> (à quoi ressemble une journée typique)
• <strong>les compétences requises</strong> (techniques et interpersonnelles)
• <strong>la formation et le parcours</strong> (apprentissage, collège, certifications)
• <strong>le potentiel de revenus</strong> (et son évolution avec l'expérience)

<strong>Bonus :</strong>
Si vous avez la chance de discuter avec une personne du milieu, même brièvement, incluez ce que vous avez appris. Un témoignage direct donnera beaucoup plus de poids à votre projet.

<strong>Exemples de métiers à explorer :</strong>
Technicien en installation ou en entretien de CVAC-R (résidentiel ou commercial), ferblantier, estimateur, gestionnaire de service, concepteur de systèmes ou spécialiste des ventes.`
      },
      {
        title: "Étape 3 : Technologie et impact environnemental",
        details: `<strong>Expliquez une technologie du CVAC-R et son importance.</strong>

Choisissez une technologie, par exemple :
• les thermopompes
• les systèmes du CVAC-R intelligents ou automatisés
• les systèmes de réfrigération et les réfrigérants modernes
• les systèmes de ventilation pour la qualité de l'air intérieur

Puis expliquez :
• comment elle fonctionne (en termes simples)
• comment elle améliore le confort, l'efficacité et la performance des bâtiments
• son lien avec la consommation d'énergie et les objectifs environnementaux

<strong>Vision globale :</strong>
Comment la transition vers les thermopompes rend-elle les bâtiments plus efficaces?
Pourquoi cette transition augmente-t-elle la demande de main-d'œuvre qualifiée?`
      },
      {
        title: "Étape 4 : Perspectives d'avenir",
        details: `<strong>Explorez la demande d'emploi et les possibilités de carrière dans le secteur du CVAC-R.</strong>

Utilisez des ressources comme Job Bank et HRAI pour déterminer :
• s'il existe une demande dans votre région
• les types d'emplois disponibles dans votre région ou votre province
• les facteurs qui influencent cette demande

<strong>Objectif :</strong>
Montrer que le secteur du CVAC-R offre des perspectives de carrière concrètes, maintenant et à l'avenir.`
      },
      {
        title: "Étape 5 : Créez votre vidéo et soumettez-la",
        details: `<strong>Enregistrez une vidéo de 90 à 120 secondes couvrant les étapes 1 à 4.</strong>

Votre vidéo doit inclure :
• l'entreprise de CVAC-R que vous avez étudiée
• le métier que vous avez exploré
• une technologie et son impact
• la demande future pour les carrières en CVAC-R

<strong>Options de format :</strong>
• présentation face caméra, style documentaire, animation ou narration audio
• format vertical ou horizontal
• utilisez des photos, des schémas ou des exemples au besoin
• vous n'avez pas besoin d'apparaître à l'écran

<strong>Durée de la vidéo : 90 à 120 secondes</strong>

<strong>Avant de soumettre :</strong>

✓ avez-vous présenté une entreprise locale réelle?
✓ avez-vous expliqué un métier clairement?
✓ avez-vous décrit une technologie et son impact?
✓ avez-vous démontré la demande future pour ce métier?
✓ votre vidéo respecte-t-elle la durée de 90 à 120 secondes?

Assurez-vous que votre lien est accessible (testez-le en mode navigation privée) avant de le soumettre.`
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
        category: 'Lien local et recherche de carrière',
        weight: 25,
        description: 'Entreprise locale réelle et métier exploré en profondeur'
      },
      {
        category: 'Engagement et créativité',
        weight: 25,
        description: 'Présentation engageante qui maintient l\'intérêt du public'
      },
      {
        category: 'Communication et clarté',
        weight: 25,
        description: 'Éléments audiovisuels clairs, organisation logique, enchaînement fluide et respect de la durée requise (90 à 120 secondes)'
      },
      {
        category: 'Consulter la grille d\'évaluation détaillée',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/ab084eb2-c475-418a-9d01-50b1974a8ac2'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/ab084eb2-c475-418a-9d01-50b1974a8ac2'
  },

  submission: {
    url: '', // TODO: Replace with SimpleSurvey submission form URL
    deadline: new Date('2026-05-31T23:59:59-04:00'),
    instructions: 'Soumettez votre vidéo pour le défi de mai sur le CVAC-R. Assurez-vous que votre lien est accessible (testez-le en mode navigation privée) avant de l\'envoyer.'
  },

  faqs: [
    {
      question: 'Comment fonctionne le défi de mai?',
      answer: 'Lisez attentivement les étapes 1 à 5 de la section Détails de l\'activité pour bien comprendre ce qui est demandé. Vous pouvez aussi regarder la vidéo « Comment ça fonctionne » pour un aperçu détaillé.'
    },
    {
      question: 'Qu\'est-ce que je dois soumettre exactement?',
      answer: `Vous devez soumettre une vidéo de 90 à 120 secondes mettant en valeur la recherche que vous avez réalisée aux étapes 1 à 4. Votre vidéo devrait couvrir : une entreprise locale de CVAC-R, un métier précis, une technologie du CVAC-R et son impact environnemental, ainsi que la demande future de professionnels en CVAC-R. Assurez-vous que le lien de votre vidéo est accessible — testez-le dans une fenêtre de navigation privée avant de soumettre votre projet.`
    },
    {
      question: 'Puis-je soumettre plus d\'une vidéo?',
      answer: `Oui, vous pouvez réaliser l'activité plusieurs fois en explorant différentes entreprises ou différents métiers du CVAC-R, mais chaque élève ne peut gagner qu'une seule microbourse par activité. Nous vous encourageons à privilégier la qualité plutôt que la quantité.`
    },
    {
      question: 'Y a-t-il un style de vidéo à privilégier?',
      answer: `Non, choisissez le style qui vous semble le plus authentique et engageant. Ça peut être une vidéo de type TikTok avec plusieurs coupes et de la musique en arrière-plan, ou un style plus documentaire — peu importe ce que vous préférez créer, tant que l'information demandée aux étapes 1 à 4 est clairement communiquée.`
    },
    {
      question: 'L\'outil utilisé pour créer la vidéo a-t-il de l\'importance?',
      answer: `Non, pas du tout. Il existe de nombreux outils gratuits pour créer des vidéos. Vérifiez auprès de votre école les outils auxquels vous avez déjà accès. Par exemple, Canva est un excellent outil pour créer des vidéos.`
    },
    {
      question: 'Quelles compétences vais-je développer en faisant cette activité?',
      answer: `De nombreuses compétences, comme la recherche, la pensée critique, la communication, la création de contenu et l'exploration de carrières. Vous en apprendrez aussi sur les parcours dans les métiers spécialisés, les technologies environnementales et les tendances du marché du travail. C'est une bonne idée d'ajouter votre vidéo complétée à votre portfolio myBlueprint et de réfléchir aux compétences que vous avez développées.`
    },
    {
      question: 'Qui évalue les soumissions?',
      answer: `Les soumissions seront évaluées par une équipe de représentants de myBlueprint. Au besoin, nous pourrons collaborer avec des représentants de HRAI.`
    },
    {
      question: 'Les élèves peuvent-ils soumettre leur vidéo en français?',
      answer: `Oui, les vidéos sont acceptées en anglais ou en français.`
    },
    {
      question: 'Comment (et quand) les vingt soumissions gagnantes sont-elles sélectionnées?',
      answer: `Selon le volume de soumissions, nous prévoyons sélectionner et annoncer les gagnants vers le milieu du mois suivant. Par exemple, pour cette activité, nous espérons annoncer les gagnants de mai vers la mi-juin.`
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
      answer: `Le Défi de l'industrie CVAC-R a été conçu comme une activité individuelle.`
    },
    {
      question: 'Puis-je encore soumettre l\'activité après la date limite du 31 mai?',
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
      title: 'Quiz de découverte des carrières en CVAC-R',
      description: 'Faites ce quiz pour découvrir quel parcours de carrière en CVAC-R pourrait vous convenir.',
      url: 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=6XlFeONDEkClCYLi98eIhNySyCQfGVlLgERmUl35JghURVBES0NMTExMWktBSkhSQlFYWEZLMVNSQS4u&route=shorturl',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Carrières en CVAC-R',
      description: 'Explorez les parcours, les rôles et les possibilités de carrière dans l\'industrie du CVAC-R partout au Canada.',
      url: 'https://www.hvacrcareers.ca/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Outil de recherche d\'entrepreneurs HRAI',
      description: 'Trouvez les entrepreneurs et les entreprises CVAC-R de votre région grâce au répertoire de HRAI.',
      url: 'https://portal.hrai.ca/contractorlocator',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Inscriptions et certifications d\'apprentis au Canada',
      description: 'Données de Statistique Canada sur les inscriptions et les certifications d\'apprentis partout au pays.',
      url: 'https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2020016-eng.htm',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'RNCan – Chauffer et climatiser avec une thermopompe',
      description: 'Guide de Ressources naturelles Canada sur le fonctionnement des thermopompes pour le chauffage et la climatisation.',
      url: 'https://natural-resources.canada.ca/energy-efficiency/energy-star/heating-cooling-heat-pump',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Comment fonctionnent les thermopompes?',
      description: 'Vidéo explicative sur le fonctionnement des thermopompes et leur importance pour l\'efficacité énergétique.',
      url: 'https://www.youtube.com/watch?v=iQaycSD5GWE',
      type: 'video',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Une journée dans la vie d\'un technicien CVAC-R',
      description: 'Une courte vidéo qui montre à quoi ressemble une journée typique pour un technicien CVAC-R.',
      url: 'https://www.youtube.com/shorts/c8CrrC0YbBo',
      type: 'video',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'HVACJess – The HVAC Diaries',
      description: 'Suivez HVACJess pour découvrir la réalité du métier de professionnel CVAC-R.',
      url: 'https://www.youtube.com/@hvacjess',
      type: 'video',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'HRAI',
      description: 'Apprenez-en davantage sur l\'Institut canadien du chauffage, de la climatisation et de la réfrigération et sur l\'industrie du CVAC-R.',
      url: 'https://www.hrai.ca/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Énoncé climatique de HRAI',
      description: 'Découvrez les engagements climatiques de HRAI et le rôle de l\'industrie du CVAC-R dans les objectifs environnementaux du Canada.',
      url: 'https://www.hrai.ca/Climate%20Statement',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Bases des thermopompes – Ressources naturelles Canada',
      description: 'Comprenez le fonctionnement des thermopompes, leurs avantages et leur rôle clé pour des bâtiments écoénergétiques.',
      url: 'https://natural-resources.canada.ca/energy-efficiency/electric-heat-pumps/heat-pump-basics',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Guichet-Emplois : perspectives pour les mécaniciens CVAC-R',
      description: 'Consultez les perspectives d\'emploi, les salaires et les tendances du marché du travail pour les mécaniciens CVAC-R partout au Canada.',
      url: 'https://www.jobbank.gc.ca/outlookreport/occupation/7516',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    }
  ],
  resourcesTitle: 'Ressources HRAI et carrières',
  resourcesSubtitle: 'Utilisez ces ressources pour appuyer vos recherches sur les carrières et les entreprises du CVAC-R.',

  meta: {
    title: 'Défi de l\'industrie CVAC-R – mai 2026 | Série d\'immersion dans l\'industrie',
    description: 'Faites des recherches sur une entreprise locale de CVAC-R, découvrez un métier en demande et explorez comment les technologies du CVAC-R contribuent à un avenir plus écologique au Canada. Courez la chance de gagner jusqu\'à 500 $ en microbourses avec HRAI.',
    ogImage: '/hvacr-career-connections.png'
  }
};
