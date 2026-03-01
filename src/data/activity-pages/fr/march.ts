import { ActivityPageData } from '../../activities';

export const marchActivity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '6',
  month: 'mars',
  year: '2026',
  title: 'Défi Comprendre l\'impôt',
  description: `On entend souvent dire qu'on devrait apprendre des compétences de vie à l'école, comme faire ses impôts. Pari tenu. Dans ce défi, vous apprendrez ce que sont les impôts, comment ils fonctionnent et pourquoi ils vous concernent.`,
  sponsor: {
    name: 'H&R Block Canada',
    logo: '/logo6.jpeg',
    logoType: 'wide'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'march',

  // H&R Block brand styling
  accentColor: '#14aa40',
  secondaryAccentColor: '#005d1f',
  sponsorFontClass: 'font-graphik',
  showSponsorInHeader: true,

  // Extended page content
  hero: {
    backgroundImage: '/march-hero.jpg',
    backgroundPosition: 'center top',
    tagline: 'Apprenez la compétence essentielle que tout le monde aurait aimé apprendre à l\'école.',
    introText: `Beaucoup d'entre nous auraient aimé que l'école consacre plus de temps aux compétences de la vie courante, comme apprendre à faire ses impôts. Voici enfin l'occasion de les comprendre… et d'être rémunéré pour le faire.\n\nDans ce défi, vous choisirez une section de concepts liés aux impôts, les explorerez à l'aide des ressources d'experts de H&R Block Canada, puis créerez une courte vidéo pour expliquer ce que vous avez appris. À la fin, vous aurez une compréhension claire et solide du fonctionnement du régime fiscal canadien, une compétence précieuse que bien des adultes auraient aimé acquérir plus tôt.`
  },

  video: {
    embedUrl: 'https://play.gumlet.io/embed/699c368626981d8913997731?background=false&autoplay=false&loop=false&disable_player_controls=false',
    title: 'À propos de H&R Block Canada',
    description: `Regardez cette vidéo pour découvrir le Défi Comprendre l'impôt et voir comment H&R Block Canada aide les jeunes à développer de véritables compétences financières. Vous découvrirez comment participer, apprendre les bases de l'impôt sur le revenu et même obtenir des microbourses tout en renforçant votre confiance financière.`
  },

  howThisWorksVideo: {
    embedUrl: 'https://www.youtube.com/embed/6O6TPwLm5Gg',
    title: 'Activité de la Série d\'immersion industrielle de mars | Comment ça fonctionne'
  },

  explainer: {
    title: 'Aperçu du défi',
    rows: [
      {
        label: 'Période active de soumission',
        content: '1er au 31 mars 2026'
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
        content: '31 mars 2026 à 23 h 59 (HNE)'
      }
    ]
  },

  activityDetail: {
    description: `<strong>Ce défi consiste à apprendre ET à enseigner.</strong> Vous choisirez une section de concepts liés à l'impôt, les étudierez en profondeur, puis créerez une vidéo pour expliquer ces notions à une personne qui ne connaît rien aux impôts.<br/><br/>Faites défiler la page jusqu'à la section des <strong>sujets</strong> ci-dessous pour choisir votre thème et consulter les consignes détaillées.`,
    steps: [
      {
        title: "Étape 1 : Choisissez votre section de concepts fiscaux",
        details: "Examinez les six sections ci-dessous et <strong>choisissez celle qui vous intéresse le plus</strong>.\n\nChaque section comprend deux ou trois concepts fiscaux liés entre eux. Votre objectif sera de bien comprendre tous les concepts de votre section et d'expliquer comment ils se rattachent les uns aux autres.\n\nAstuce : choisissez un sujet qui correspond à votre réalité actuelle ou à vos projets à court terme. Si vous avez un emploi à temps partiel, la section 1 pourrait vous intéresser. Si vous planifiez vos études postsecondaires, la section 6 pourrait être un excellent choix."
      },
      {
        title: "Étape 2 : Faites vos recherches à l'aide des ressources de H&R Block Canada",
        details: "Utilisez les <strong>articles de H&R Block Canada dans la section « Ressources » ci-dessous</strong> pour approfondir les concepts de votre section.\n\nCes articles sont rédigés par des experts en fiscalité et conçus spécialement pour aider les élèves et les jeunes adultes à mieux comprendre les impôts. Prenez des notes pendant votre lecture — vous devrez expliquer ces notions clairement dans votre vidéo.\n\nAstuce : ne vous contentez pas de survoler le contenu. Assurez-vous de bien comprendre POURQUOI ces concepts sont importants et COMMENT ils s'articulent entre eux dans votre section."
      },
      {
        title: "Étape 3 : Planifiez votre explication",
        details: "Avant de commencer l'enregistrement, réfléchissez à <strong>la façon dont vous expliqueriez ces concepts à un ami ou à un membre de votre famille</strong> qui ne connaît rien à l'impôt.\n\nQuestions essentielles auxquelles répondre dans votre vidéo :\n• Quels sont les principaux concepts de votre section?\n• Pourquoi sont-ils importants pour les jeunes au Canada?\n• Comment les concepts de votre section sont-ils liés entre eux?\n\nRappelez-vous : les meilleurs enseignants savent rendre les notions complexes simples et accessibles. Utilisez des exemples, des analogies ou des éléments visuels pour rendre votre explication claire et facile à retenir."
      },
      {
        title: "Étape 4 : Créez votre vidéo",
        details: "<strong>Enregistrez une vidéo de 90 à 120 secondes</strong> dans laquelle vous expliquez clairement les concepts de votre section.\n\nVotre vidéo devrait :\n• Présenter votre section de sujets\n• Expliquer chaque concept\n• Montrer comment les concepts sont liés\n• Aider le public à bien comprendre et retenir l'information\n\nLe format est flexible :\n• Face caméra, animation, tableau blanc — choisissez ce qui vous convient\n• Format vertical ou horizontal — à vous de décider\n• Accessoires, schémas ou enregistrements d'écran sont encouragés\n• Vous pouvez opter pour une narration vocale avec visuels si vous préférez ne pas apparaître à l'écran\n\n<strong>Durée de la vidéo : 90 à 120 secondes (1 min 30 s à 2 min)</strong>"
      },
      {
        title: "Étape 5 : Révisez et soumettez",
        details: "Avant de soumettre votre vidéo, vérifiez les points suivants :\n\n✓ L'information est-elle exacte? (Vérifiez à nouveau les ressources de H&R Block Canada.)\n✓ Avez-vous couvert tous les concepts de votre section?\n✓ Avez-vous expliqué comment ils sont liés entre eux?\n✓ Une personne qui regarde la vidéo apprend-elle réellement quelque chose?\n✓ La durée est-elle entre 90 et 120 secondes?\n\n<strong>Assurez-vous que le lien de votre vidéo est correctement partagé.</strong> Testez-le dans une fenêtre de navigation privée avant de le soumettre."
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Contenu et exactitude',
        weight: 25,
        description: 'Couverture complète de tous les éléments requis avec des informations exactes et détaillées'
      },
      {
        category: 'Recherche et citations',
        weight: 25,
        description: 'Sources de qualité citées adéquatement tout au long de la présentation'
      },
      {
        category: 'Engagement et créativité',
        weight: 25,
        description: 'Présentation dynamique et engageante qui maintient l\'intérêt du public'
      },
      {
        category: 'Communication et clarté',
        weight: 25,
        description: 'Audio et visuels clairs, organisation logique, fluidité de la présentation et respect de la durée de 90 à 120 secondes'
      },
      {
        category: 'Consultez la grille d\'évaluation détaillée ici',
        weight: 0,
        description: '',
        isLink: true,
        url: 'https://claude.ai/public/artifacts/3d9a4e4f-8d0e-4e96-9158-97f70533274e'
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: 'https://claude.ai/public/artifacts/3d9a4e4f-8d0e-4e96-9158-97f70533274e'
  },

  submission: {
    url: 'https://questionnaire.simplesurvey.com/f/s.aspx?s=9ed368f1-b05e-44b4-a7b2-2f7ea044f088',
    deadline: new Date('2026-03-31T23:59:59-04:00'),
    instructions: 'Soumettez votre vidéo sur les concepts fiscaux pour le défi de mars. Assurez-vous que le lien de votre vidéo est accessible (testez-le en mode navigation privée) avant de le soumettre.'
  },

  faqs: [
    {
      question: 'En quoi consiste le défi de mars?',
      answer: 'Lisez attentivement les étapes 1 à 5 des Détails du défi pour comprendre ce qui vous est demandé dans le cadre de cette activité. Vous pouvez visionner la vidéo <em>Comment ça fonctionne</em> pour obtenir un aperçu détaillé du Défi Comprendre l\'impôt.'
    },
    {
      question: 'Qu\'est-ce que je dois soumettre exactement?',
      answer: `Il vous est demandé de soumettre une vidéo de 90 à 120 secondes mettant en valeur vos recherches des étapes 1 à 5 dans cette activité. Il est important que la vidéo que vous créez soit partagée sous forme de lien cliquable, et non quelque chose que nous devons télécharger, et que les paramètres de partage soient configurés de manière à nous permettre de visionner la vidéo. C'est une bonne idée de tester cela avant de soumettre.`
    },
    {
      question: 'Puis-je soumettre plus d\'une vidéo?',
      answer: `Oui, vous pouvez faire l'activité plusieurs fois en explorant différentes sections de concepts fiscaux, mais les élèves ne peuvent gagner qu'une seule microbourse par activité. Nous vous encourageons à privilégier la qualité, et non la quantité.`
    },
    {
      question: 'Y a-t-il un style de vidéo privilégié?',
      answer: `Non, peu importe tant que c'est authentique et captivant pour vous. La vidéo peut adopter le style de TikTok, avec beaucoup de montages différents et de la musique de fond, ou adopter un style plus documentaire — peu importe ce que vous préférez faire, tant que l'information demandée dans les étapes 1 à 5 est clairement communiquée.`
    },
    {
      question: 'L\'outil utilisé pour réaliser la vidéo a-t-il de l\'importance?',
      answer: `Non, l'outil que vous utilisez n'a aucune importance. De nombreux outils gratuits permettent de faire des vidéos aujourd'hui. Vérifiez auprès de votre école à quels outils vous avez déjà accès. Par exemple, Canva est un excellent outil pour créer des vidéos.`
    },
    {
      question: 'Quelles compétences vais-je développer en réalisant cette activité?',
      answer: `De nombreuses compétences, comme la recherche, la pensée critique, la communication, la création de contenu et bien d'autres. Ce serait une bonne idée d'ajouter la vidéo terminée à votre portfolio dans myBlueprint et de réfléchir aux compétences que vous avez le sentiment d'avoir développées en réalisant cette activité.`
    },
    {
      question: 'Qui examine les soumissions?',
      answer: `Les soumissions seront examinées par une équipe de représentants de myBlueprint. Nous pourrions, si besoin, collaborer avec des représentants de H&R Block Canada.`
    },
    {
      question: 'Les élèves peuvent-ils soumettre des vidéos en français?',
      answer: `Oui, les vidéos seront acceptées en anglais ou en français.`
    },
    {
      question: 'Comment (et quand) les vingt meilleures soumissions mensuelles sont-elles sélectionnées?',
      answer: `En fonction du volume de soumissions, nous prévoyons avoir sélectionné et être en mesure d'annoncer les gagnants d'ici le milieu du mois suivant. Par exemple, pour cette activité, nous espérons être en mesure d'annoncer les gagnants de mars d'ici la mi-avril.`
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
      answer: `Le Défi Comprendre l'impôt a été conçu comme une activité individuelle.`
    },
    {
      question: 'Puis-je quand même soumettre l\'activité après la date limite du 31 mars?',
      answer: `Oui, vous pouvez quand même soumettre des activités mensuelles après la date limite. Toutefois, toute activité soumise après la date limite n'est pas admissible à la réserve de microbourses de ce mois-là. Il est tout de même logique de les réaliser, même après la date limite, afin de pouvoir obtenir l'un des avantages incitatifs liés à la Réalisation de la série. Ceux-ci requièrent uniquement que toutes les activités soient terminées, pas nécessairement qu'elles soient terminées dans le mois de l'activité.`
    },
    {
      question: 'Les enseignants pourront-ils voir qui a soumis une inscription?',
      answer: `Les enseignants ne pourront pas voir dans myBlueprint quels élèves ont soumis des activités ou pas. Cependant, nous créerons des rapports qui seront partagés avec votre responsable de myBlueprint au niveau du conseil scolaire qui pourra partager des détails précis avec vous sur demande.`
    },
    {
      question: 'Quelles données sont collectées et par qui?',
      answer: `myBlueprint est l'unique responsable de la réalisation de la Série d'immersion industrielle, ce qui signifie que seul myBlueprint collecte toute information relative à cette série. Aucune information personnelle identifiable n'est partagée avec des tiers.\n\nNous publierons des informations sous forme de données synthétiques anonymisées pour fournir des mises à jour sur la façon dont la série se déroule. Par exemple, le nombre de soumissions d'activités reçues pour chaque mois, leur province d'origine, et nous communiquerons avec nos partenaires des conseils scolaires sur la participation spécifique à l'école.\n\n<a href="https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Cliquez ici pour voir les questions auxquelles les élèves doivent répondre</a> lorsqu'ils soumettent leur activité terminée.`
    }
  ],

  resources: [
    {
      title: '5 choses à savoir sur les impôts que vous n\'avez pas apprises à l\'école',
      description: 'Notions fiscales essentielles pour chaque élève — par les experts de H&R Block',
      url: 'https://www.hrblock.ca/blog/5-things-you-should-know-about-taxes-that-you-didnt-learn-in-school',
      type: 'article',
      buttonText: 'Lire l\'article'
    },
    {
      title: 'La vie après le secondaire sous l\'angle fiscal',
      description: 'Comment les impôts évoluent lorsque vous entrez dans l\'âge adulte — travail, études et plus encore',
      url: 'https://www.hrblock.ca/blog/life-after-high-school-through-a-tax-lens',
      type: 'article',
      buttonText: 'Lire l\'article'
    },
    {
      title: 'Guide incontournable de l\'impôt sur le revenu au Canada pour les élèves',
      description: 'Guide fiscal conçu pour les élèves, couvrant tout, des feuillets T4 aux crédits d\'impôt',
      url: 'https://www.hrblock.ca/blog/your-go-to-guide-for-income-taxes-in-canada-for-students',
      type: 'article',
      buttonText: 'Lire l\'article'
    },
    {
      title: 'Guide d\'introduction aux impôts pour les adolescents et jeunes adultes',
      description: 'Point de départ idéal pour comprendre le régime fiscal canadien',
      url: 'https://www.hrblock.ca/blog/a-beginner-s-guide-on-taxes-for-teenagers-and-young-adults',
      type: 'article',
      buttonText: 'Lire l\'article'
    },
    {
      title: 'Quand puis-je produire mes déclarations de revenus de 2025 en 2026?',
      description: 'Dates clés et échéances pour la production de vos impôts de 2025 au Canada',
      url: 'https://www.hrblock.ca/blog/when-can-i-file-my-taxes-your-complete-guide',
      type: 'article',
      buttonText: 'Lire l\'article'
    },
    {
      title: 'Allocation canadienne pour l\'épicerie et les besoins essentiels : Mises à jour et paiements 2026',
      description: 'Fonctionnement de l\'Allocation canadienne pour l\'épicerie et les besoins essentiels, admissibilité et dates de paiement',
      url: 'https://www.hrblock.ca/blog/introducing-the-canada-groceries-and-essentials-benefit-formerly-the-gst-hst-credit',
      type: 'article',
      buttonText: 'Lire l\'article'
    },
    {
      title: 'Date limite du REER 2026 : plafonds de cotisation, règles et explication des 60 premiers jours',
      description: 'Plafonds de cotisation au REER, règles et les 60 premiers jours pour les cotisations déductibles d\'impôt',
      url: 'https://www.hrblock.ca/fr/blog/date-limite-du-reer-plafonds-de-cotisation-regles-et-explication-des-60-premiers-jours',
      type: 'article',
      buttonText: 'Lire l\'article'
    },
    {
      title: 'Comprendre les retenues d\'impôt sur votre relevé de paie',
      description: 'Découvrez la signification des cotisations au RPC, à l\'AE et des autres retenues sur votre paie',
      url: 'https://www.hrblock.ca/blog/student-guide-explaining-tax-deductions-on-your-pay-stub',
      type: 'article',
      buttonText: 'Lire l\'article'
    },
    {
      title: '30 000 $ en bourses d\'études',
      description: 'Faites une demande de bourse d\'études H&R Block de 3 000 $ pour vous aider à poursuivre vos études postsecondaires',
      url: 'https://education.myblueprint.ca/hrblock-fr',
      type: 'link',
      buttonText: 'En savoir plus'
    }
  ],
  resourcesTitle: 'Ressources d\'apprentissage de H&R Block Canada',
  resourcesSubtitle: 'Utilisez ces ressources d\'experts pour approfondir la section de concepts fiscaux que vous avez choisie',

  topicClusters: [
    {
      id: 'cluster-1',
      number: 1,
      title: '« Où va ma paie? »',
      concepts: 'Notions de base du relevé de paie, cotisation au RPC, cotisation à l\'AE',
      detailedContent: `
        <h4>Ce que votre vidéo doit couvrir</h4>
        <p>Cette section porte sur les retenues qui réduisent votre paie avant même que vous ne receviez l'argent. Votre vidéo devrait aider le public à comprendre pourquoi le montant net est inférieur à ce que laisse croire votre taux horaire.</p>

        <h4>Notions de base du relevé de paie</h4>
        <ul>
          <li>Ce qu'est un relevé de paie et pourquoi il est important</li>
          <li>La différence entre le <strong>salaire brut</strong> (ce que vous avez gagné) et le <strong>salaire net</strong> (ce que vous recevez réellement)</li>
          <li>Pourquoi comprendre son relevé de paie aide à établir un budget et à repérer des erreurs</li>
        </ul>

        <h4>RPC (Régime de pensions du Canada)</h4>
        <ul>
          <li>Ce qu'est le RPC : un programme obligatoire d'épargne-retraite</li>
          <li>Comment il fonctionne : vous cotisez maintenant et recevez des prestations à la retraite</li>
          <li>Qui cotise : vous ET votre employeur contribuez (vous accumulez donc une épargne-retraite, parfois sans même vous en rendre compte)</li>
          <li>Pourquoi c'est important : il contribue à assurer un revenu à la retraite</li>
        </ul>

        <h4>AE (Assurance-emploi)</h4>
        <ul>
          <li>Ce qu'est l'AE : une assurance qui offre un revenu si vous perdez votre emploi</li>
          <li>Comment elle fonctionne : de petites retenues maintenant = un filet de sécurité financière plus tard</li>
          <li>Ce qu'elle couvre : perte d'emploi, congé parental, prestations de maladie</li>
          <li>Pourquoi c'est important : elle vous protège lors de changements imprévus</li>
        </ul>

        <h4>Comment ces concepts sont liés</h4>
        <p>Ces trois concepts portent sur les retenues salariales — des montants prélevés avant que vous ne receviez votre paie. Aidez le public à comprendre qu'il ne s'agit pas d'argent « perdu », mais de contributions qui soutiennent votre sécurité financière à la retraite (RPC) et vous offrent une protection en cas d'imprévu (AE).</p>
      `
    },
    {
      id: 'cluster-2',
      number: 2,
      title: '« Pourquoi payons-nous des impôts? »',
      concepts: 'Rôle des impôts, utilisation des fonds, services publics financés',
      detailedContent: `
        <h4>Ce que votre vidéo doit couvrir</h4>
        <p>Cette section porte sur la vue d'ensemble : pourquoi le système fiscal existe et ce qu'il finance.</p>

        <h4>Rôle des impôts</h4>
        <ul>
          <li>Les impôts financent les services et les infrastructures que nous utilisons tous</li>
          <li>Ils permettent de financer collectivement des services qui profitent à l'ensemble de la population</li>
          <li>L'idée du « contrat social » : chacun contribue à des services dont tous bénéficient</li>
        </ul>

        <h4>Où va l'argent</h4>
        <ul>
          <li><strong>Impôts fédéraux :</strong> défense nationale, services aux peuples autochtones, affaires étrangères, programmes fédéraux</li>
          <li><strong>Impôts provinciaux :</strong> soins de santé, éducation, autoroutes, programmes provinciaux</li>
          <li><strong>Impôts municipaux :</strong> routes locales, collecte des déchets, services policiers et incendie, parcs</li>
          <li>Chaque ordre de gouvernement finance des services différents</li>
        </ul>

        <h4>Services publics financés par les impôts</h4>
        <ul>
          <li><strong>Soins de santé :</strong> visites à l'hôpital, rendez-vous chez le médecin (des services qui coûtent des milliers de dollars dans certains pays)</li>
          <li><strong>Éducation :</strong> écoles publiques, universités subventionnées</li>
          <li><strong>Infrastructures :</strong> routes, ponts, transport en commun</li>
          <li><strong>Sécurité :</strong> services policiers, services d'incendie, services d'urgence</li>
          <li><strong>Programmes sociaux :</strong> prestations d'AE, soutien aux personnes en situation de handicap, Sécurité de la vieillesse</li>
        </ul>

        <h4>Comment ces concepts sont liés</h4>
        <p>Aidez le public à voir les impôts non pas comme de l'argent qui disparaît, mais comme une contribution aux services qu'il utilise chaque jour. Le pourquoi → où va l'argent → ce qu'il finance raconte l'histoire complète des raisons pour lesquelles nous payons des impôts.</p>
      `
    },
    {
      id: 'cluster-3',
      number: 3,
      title: '« Pourquoi produire une déclaration de revenus? »',
      concepts: 'Qu\'est-ce qu\'un feuillet T4, pourquoi produire une déclaration même avec un faible revenu, les dates limites importantes',
      detailedContent: `
        <h4>Ce que votre vidéo doit couvrir</h4>
        <p>Cette section est axée sur la pratique : aidez le public à comprendre les bases de la production d'une déclaration de revenus. L'objectif est de démystifier le processus pour une personne qui ne l'a jamais fait.</p>

        <h4>Qu'est-ce qu'un feuillet T4</h4>
        <ul>
          <li>Le T4 est le feuillet officiel remis par votre employeur indiquant votre revenu annuel</li>
          <li>Il indique : vos revenus totaux, les impôts déjà retenus, les cotisations au RPC et à l'AE</li>
          <li>Vous recevrez un T4 pour chaque employeur chez qui vous avez travaillé durant l'année</li>
          <li>Les employeurs doivent envoyer les T4 au plus tard à la fin février</li>
          <li>Vous avez besoin de vos T4 pour produire votre déclaration</li>
        </ul>

        <h4>Pourquoi produire même avec un faible revenu</h4>
        <ul>
          <li><strong>Obtenir un remboursement :</strong> si des impôts ont été retenus alors que vous avez gagné moins que le montant personnel de base (16 129 $), vous pourriez récupérer cet argent</li>
          <li><strong>Accéder à des prestations :</strong> il faut produire une déclaration pour recevoir certains crédits ou prestations</li>
          <li><strong>Accumuler des droits de cotisation :</strong> produire une déclaration augmente vos droits de cotisation au REER</li>
          <li><strong>Établir un historique fiscal :</strong> certains prêts ou demandes exigent une preuve de revenu</li>
        </ul>

        <h4>Dates limites importantes</h4>
        <ul>
          <li><strong>30 avril :</strong> date limite pour produire votre déclaration (pour la plupart des gens)</li>
          <li><strong>Fin février :</strong> moment où vous devriez recevoir vos T4</li>
          <li><strong>Délai de remboursement :</strong> si vous produisez tôt (février-mars), vous recevez généralement votre remboursement en 2 à 3 semaines</li>
          <li>Retard = pénalités et intérêts possibles si vous devez de l'argent</li>
        </ul>

        <h4>Comment ces concepts sont liés</h4>
        <p>Le T4 est votre point de départ, les raisons de produire expliquent le « pourquoi », et les dates importantes précisent le « quand ». Ensemble, ces éléments donnent toutes les informations nécessaires pour produire une déclaration de revenus.</p>
      `
    },
    {
      id: 'cluster-4',
      number: 4,
      title: '« De l\'argent gratuit que vous pourriez manquer »',
      concepts: 'Pourquoi produire une déclaration donne accès à des prestations (ex. : Allocation canadienne pour l\'épicerie et les produits essentiels)',
      detailedContent: `
        <h4>Ce que votre vidéo doit couvrir</h4>
        <p>Cette section porte sur des prestations que de nombreux jeunes au Canada ignorent. Aidez le public à comprendre que produire une déclaration peut littéralement lui mettre de l'argent dans les poches.</p>

        <h4>Prestation canadienne pour l'épicerie et les produits essentiels (anciennement le crédit pour la TPS/TVH)</h4>
        <ul>
          <li>Paiement trimestriel non imposable visant à compenser la hausse du coût de la vie</li>
          <li><strong>Admissibilité :</strong> dépend du revenu et de la situation familiale
            <ul>
              <li><strong>Personne seule :</strong> jusqu'à 950 $ cette année</li>
              <li><strong>Famille de quatre :</strong> jusqu'à 1 890 $ cette année</li>
            </ul>
          </li>
          <li>Paiements versés automatiquement tous les trois mois (janvier, avril, juillet, octobre)</li>
          <li>Vous DEVEZ produire une déclaration pour y avoir droit — même si vous n'avez eu aucun revenu</li>
        </ul>

        <h4>Pourquoi produire une déclaration permet d'accéder à des prestations</h4>
        <ul>
          <li>Le gouvernement ne connaît pas votre situation si vous ne la déclarez pas</li>
          <li>Même avec un revenu nul, vous devez produire une déclaration pour recevoir des crédits</li>
          <li>Les prestations sont calculées à partir des renseignements de votre déclaration</li>
          <li>Ne pas produire une année = perdre une année de paiements</li>
          <li>C'est littéralement de l'argent auquel vous avez droit et que vous laissez de côté si vous ne produisez pas</li>
        </ul>

        <h4>Comment ces concepts sont liés</h4>
        <p>L'Allocation canadienne pour l'épicerie et les produits essentiels est un exemple de prestation accessible uniquement si vous produisez une déclaration. Message clé : produire une déclaration ne sert pas seulement à payer des impôts — cela permet souvent de récupérer de l'argent qui vous revient.</p>
      `
    },
    {
      id: 'cluster-5',
      number: 5,
      title: '« Épargner intelligemment : comptes fiscalement avantageux »',
      concepts: 'Notions de base du CELI, notions de base du REER, pourquoi commencer jeune est important',
      detailedContent: `
        <h4>Ce que votre vidéo doit couvrir</h4>
        <p>Ce module présente deux puissants outils d'épargne. Aidez les participants à comprendre la différence fondamentale entre les deux et pourquoi il est si avantageux de commencer à épargner tôt.</p>

        <h4>Les bases du CELI (Compte d'épargne libre d'impôt)</h4>
        <ul>
          <li>Les cotisations sont faites après impôt, mais la croissance et les retraits sont entièrement libres d'impôt</li>
          <li><strong>Droits de cotisation :</strong> commencent à s'accumuler à 18 ans (environ 7 000 $ par année actuellement)</li>
          <li><strong>Flexible :</strong> retraits possibles en tout temps sans pénalité, les droits retirés s'ajoutent de nouveau l'année suivante</li>
          <li><strong>Idéal pour :</strong> épargne à court ou moyen terme, fonds d'urgence, projets personnels</li>
          <li>Les droits inutilisés s'accumulent — à 20 ans, vous pourriez déjà avoir plus de 20 000 $ de droits disponibles</li>
        </ul>

        <h4>Les bases du REER (Régime enregistré d'épargne-retraite)</h4>
        <ul>
          <li>Les cotisations réduisent votre revenu imposable maintenant (déduction fiscale)</li>
          <li>La croissance est à imposition différée (aucun impôt tant que l'argent n'est pas retiré)</li>
          <li>Conçu pour la retraite — les retraits sont imposés comme un revenu</li>
          <li><strong>Droits de cotisation :</strong> 18 % du revenu de l'année précédente (jusqu'à un maximum établi)</li>
          <li><strong>Idéal pour :</strong> les personnes ayant un revenu plus élevé qui souhaitent réduire leur facture fiscale actuelle</li>
        </ul>

        <h4>Pourquoi commencer jeune est important</h4>
        <ul>
          <li><strong>Croissance composée :</strong> l'argent investi tôt a des décennies pour croître</li>
          <li>Exemple : 1 000 $ investis à 18 ans vs à 28 ans — énorme différence à la retraite</li>
          <li>Les droits de cotisation s'accumulent — vous pouvez les utiliser plus tard lorsque vous gagnez davantage</li>
          <li>Développer l'habitude tôt rend l'épargne plus naturelle</li>
          <li>Pas besoin de gros montants — même 25 $ par mois s'accumulent avec le temps</li>
        </ul>

        <h4>Comment ces concepts sont liés</h4>
        <p>Le CELI et le REER sont deux approches différentes d'épargne fiscalement avantageuse. L'importance de commencer jeune montre pourquoi ces outils sont pertinents même avec un revenu modeste. Aidez le public à les voir comme des outils pour son avenir.</p>
      `
    },
    {
      id: 'cluster-6',
      number: 6,
      title: '« Impôts et études postsecondaires »',
      concepts: 'Crédits pour frais de scolarité, fonctionnement, report des crédits',
      detailedContent: `
        <h4>Ce que votre vidéo doit couvrir</h4>
        <p>Cette section est particulièrement pertinente pour les élèves qui envisagent des études collégiales ou universitaires. Aidez le public à comprendre comment les coûts liés aux études peuvent réduire les impôts futurs.</p>

        <h4>Crédits d'impôt pour frais de scolarité</h4>
        <ul>
          <li>Les frais de scolarité postsecondaires donnent droit à un crédit d'impôt</li>
          <li><strong>Admissibilité :</strong> frais payés à des établissements reconnus (collèges, universités, certains programmes spécialisés)</li>
          <li>Vous recevrez un formulaire T2202 de votre établissement indiquant les montants admissibles</li>
          <li>Le crédit fédéral correspond à 15 % des frais de scolarité admissibles</li>
          <li>Les manuels et les frais de subsistance ne sont pas admissibles — seulement les frais de scolarité et frais obligatoires</li>
        </ul>

        <h4>Fonctionnement des crédits</h4>
        <ul>
          <li><strong>Crédit non remboursable :</strong> réduit l'impôt à payer, mais ne génère pas de remboursement à lui seul</li>
          <li>Si vous devez 500 $ d'impôt et avez 500 $ en crédits → vous devez 0 $</li>
          <li>Si vous devez 0 $ et avez 500 $ en crédits → vous recevez 0 $ (mais pouvez conserver le crédit)</li>
          <li>Possibilité de transférer jusqu'à 5 000 $ par année à un parent ou grand-parent</li>
          <li>Vous devez d'abord demander le crédit pour l'année en cours avant de le transférer ou de le reporter</li>
        </ul>

        <h4>Report de crédits d'impôt</h4>
        <ul>
          <li>Les crédits inutilisés peuvent être reportés aux années futures</li>
          <li>Une fois diplômé et avec un revenu plus élevé, ces crédits réduiront vos impôts</li>
          <li>Les crédits n'expirent pas — ils demeurent disponibles jusqu'à leur utilisation</li>
          <li>Exemple : 20 000 $ de frais de scolarité peuvent représenter des milliers de dollars en crédits utilisables plus tard</li>
          <li>Voilà pourquoi il est important de produire une déclaration pendant vos années d'études — pour accumuler ces crédits</li>
        </ul>

        <h4>Comment ces concepts sont liés</h4>
        <p>Les frais de scolarité donnent droit à des crédits → ces crédits réduisent l'impôt à payer → si vous n'en avez pas besoin maintenant, vous les reportez pour plus tard. C'est une forme de reconnaissance fiscale pour l'investissement en éducation, qui porte fruit lorsque vous commencez à travailler.</p>
      `
    }
  ],

  meta: {
    title: 'Défi Comprendre l\'impôt — Mars 2026 | Série d\'immersion industrielle',
    description: 'Apprenez les bases du régime fiscal canadien et enseignez-les aux autres dans ce défi commandité par H&R Block. Créez une vidéo de 90 à 120 secondes expliquant des concepts fiscaux et gagnez jusqu\'à 500 $.',
    ogImage: '/logo6.jpeg'
  }
};
