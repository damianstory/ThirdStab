import { ActivityPageData } from '../../activities';

// Export uses camelCase (may2Activity) since 'may-2Activity' isn't a valid identifier
export const may2Activity: ActivityPageData = {
  // Base activity information (from activities.ts)
  id: '9',
  month: 'mai-2',
  year: '2026',
  title: 'Défi du certificat Être là™',
  description: 'Apprenez à soutenir une personne en difficulté sur le plan de la santé mentale grâce à ce cours en ligne créé par Jack.org en partenariat avec la Born This Way Foundation.',
  sponsor: {
    name: 'Jack.org',
    logo: '/jack-logo.png',
    logoType: 'wide'
  },
  incentive: {
    total: 10000,
    individual: 500,
    count: 20
  },
  status: 'coming-soon',
  slug: 'may-2',

  // Extended page content
  hero: {
    backgroundImage: '/images/phac-btc-graphics-01.png',
    backgroundPosition: 'center top',
    tagline: 'Des compétences concrètes pour la vie de tous les jours.',
    introText: `Élèves : complétez gratuitement le certificat Être là™ de Jack.org et soumettez une courte vidéo de réflexion pour avoir la chance de remporter l'une des vingt microbourses de 500 $ en mai.\n\nVous êtes-vous déjà demandé quoi dire lorsqu'un ami se confie à vous sur une situation difficile? Le certificat Être là™ peut vous guider. Cette formation en ligne gratuite, d'environ deux heures et offerte à votre rythme, vous présente cinq « règles d'or » simples mais efficaces pour soutenir une personne en difficulté sur le plan de la santé mentale.`
  },

  video: {
    embedUrl: 'https://www.youtube.com/embed/A8ZcIgS3NS8',
    title: 'À propos du certificat Être là™',
    description: `Le certificat Être là™ aide les jeunes à développer la confiance et les compétences nécessaires pour soutenir une personne en difficulté sur le plan de la santé mentale.\n\nDes compétences que vous pourrez utiliser au quotidien, tout au long de votre vie, pour être présent pour les autres — et pour vous-même.`
  },

  howThisWorksVideo: {
    embedUrl: '', // TODO: Replace with How This Works video once created
    title: 'Fonctionnement du défi de mai'
  },

  explainer: {
    title: 'Aperçu de l\'activité pour les élèves',
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
        content: '31 mai 2026 à 23 h 59 HE'
      }
    ]
  },

  activityDetail: {
    titleEn: 'Détails de l\'activité pour les élèves',
    description: `Ce défi comporte deux étapes :\n<ul style="list-style-type: disc; padding-left: 1.5rem; margin-top: 0.5rem;"><li>Compléter gratuitement le <a href="https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">certificat Être là™</a></li><li>Soumettre une courte vidéo de réflexion (30 à 60 secondes) présentant un apprentissage marquant</li></ul><p style="margin-top: 1rem;">Le bien-être mental est une compétence essentielle qui demande un apprentissage continu. Ce défi vise à reconnaître l'engagement des élèves à créer des milieux inclusifs et sécuritaires sur le plan de la santé mentale, tout en encourageant les autres à faire de même.</p>`,
    steps: [
      {
        title: "Étape 1 : Obtenir le certificat Être là™",
        details: `<strong>Complétez gratuitement le certificat Être là™ offert par Jack.org et la Born This Way Foundation.</strong>

<a href="https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Commencez le certificat ici →</a>

À quoi vous attendre :
• <strong>Gratuit</strong> — aucun coût, aucun abonnement
• <strong>À votre rythme</strong> — complétez-le en une seule séance ou en plusieurs
• <strong>Environ 2 heures</strong> d'apprentissage en ligne
• <strong>Créé par Jack.org</strong> en partenariat avec la Born This Way Foundation

<strong>Ce que vous apprendrez :</strong>
Le certificat présente les 5 règles d'or — des stratégies concrètes, fondées sur la recherche, pour soutenir de façon sécuritaire un pair en difficulté. Vous apprendrez à reconnaître les signes de détresse, à écouter activement, à établir des limites saines et à orienter une personne vers de l'aide au besoin.

<strong>Vous devez avoir terminé le certificat avant d'enregistrer votre vidéo de réflexion à l'étape 2.</strong>`
      },
      {
        title: "Étape 2 : Enregistrer votre vidéo de réflexion (30 à 60 secondes)",
        details: `Une fois votre certificat Être là™ obtenu, prenez un moment pour réfléchir à vos apprentissages, puis enregistrez une <strong>courte vidéo</strong> pour partager ce que vous en retenez. En soumettant votre vidéo, vous serez inscrit pour courir la chance de remporter l'une des 20 microbourses de 500 $.

<strong>Conseils pour votre vidéo :</strong>
• Filmez dans un endroit bien éclairé avec un son clair
• Filmez à l'horizontale pour faciliter le partage sur les réseaux sociaux
• Gardez votre vidéo courte – entre 30 et 60 secondes

<strong>Pistes de réflexion :</strong>

Vous n'avez pas besoin de répondre à toutes ces questions, mais elles peuvent vous aider à structurer votre réflexion :
• Quelle règle d'or vous a le plus marqué, et pourquoi?
• Comment ce certificat influencera-t-il votre façon d'être présent pour vos amis, votre famille ou votre communauté?
• Quelle est une chose que vous avez apprise et que tout le monde devrait connaître?
• Comment décririez-vous le certificat Être là™ en une phrase?

<strong>Durée de la vidéo : 30 à 60 secondes</strong>

Assurez-vous que votre lien vidéo est accessible (testez-le en mode navigation privée) avant de le soumettre.`
      },
      {
        title: "Étape 3 : Soumettre votre vidéo",
        details: `<strong>Hébergement de votre vidéo :</strong>

Vous devez soumettre un <strong>lien partageable</strong> — pas un fichier <code>.mp4</code>. Téléversez votre vidéo sur l'une des plateformes ci-dessous, puis partagez le lien :

• <strong>Google Drive</strong> — téléversez le fichier → Partager → « Toute personne ayant le lien »
• <strong>OneDrive</strong> — téléversez le fichier → Partager → copier un lien accessible à toute personne disposant du lien
• <strong>YouTube (non répertorié)</strong> — téléversez la vidéo et sélectionnez « Non répertorié »

<strong>Important :</strong> avant de soumettre, ouvrez votre lien en mode navigation privée pour vérifier qu'il fonctionne sans connexion. Si nous ne pouvons pas y accéder, nous ne pourrons pas l'évaluer.

<strong>Avant de soumettre :</strong>

✓ Avez-vous complété le certificat Être là™?
✓ Avez-vous partagé un apprentissage clair et authentique?
✓ Votre vidéo dure-t-elle entre 30 et 60 secondes?
✓ Votre vidéo est-elle hébergée sur Google Drive, OneDrive ou YouTube (non répertorié)?
✓ Votre lien est-il accessible publiquement?

Lorsque vous êtes prêt, utilisez le bouton ci-dessous pour soumettre votre lien et quelques informations sur votre soumission.`
      }
    ]
  },

  rubric: {
    criteria: [
      {
        category: 'Profondeur de la réflexion',
        weight: 40,
        description: 'Apprentissage personnel clair et précis tiré du certificat Être là™, faisant référence à une règle d\'or, un moment du cours ou une idée marquante'
      },
      {
        category: 'Application personnelle',
        weight: 20,
        description: 'Exemple authentique de la façon dont l\'élève utilisera ces apprentissages dans sa vie quotidienne, à l\'école ou dans une future carrière'
      },
      {
        category: 'Engagement et créativité',
        weight: 20,
        description: 'Présentation engageante et authentique qui capte l\'attention du public'
      },
      {
        category: 'Communication et clarté',
        weight: 20,
        description: 'Qualité audio et visuelle claires, structure logique et respect de la durée'
      },
      {
        category: 'Voir la grille d\'évaluation détaillée',
        weight: 0,
        description: '',
        isLink: true,
        url: '#' // TODO: Replace with detailed rubric URL once created
      }
    ],
    totalPoints: 100,
    detailedRubricUrl: '#' // TODO: Replace with detailed rubric URL once created
  },

  submission: {
    url: '', // TODO: Replace with SimpleSurvey submission form URL
    deadline: new Date('2026-05-31T23:59:59-04:00'),
    instructions: 'Soumettez votre vidéo pour le défi du certificat Être là™ du mois de mai. Assurez-vous que votre lien est accessible avant de l\'envoyer.'
  },

  faqs: [
    {
      question: 'Comment fonctionne le défi de mai?',
      answer: 'Lisez attentivement les étapes 1 à 3 de la section Détails de l\'activité pour bien comprendre ce qui est demandé. Vous pouvez aussi regarder la vidéo « Comment ça fonctionne » pour un aperçu détaillé.'
    },
    {
      question: 'Qu\'est-ce que je dois soumettre exactement?',
      answer: `Vous devez soumettre une courte vidéo de réflexion de 30 à 60 secondes après avoir complété gratuitement le certificat Être là™ de Jack.org. La seule exigence est de partager un apprentissage clair et authentique tiré du cours. Vous pouvez aussi parler d'une règle d'or qui vous a marqué, de la façon dont vous mettrez en pratique ce que vous avez appris ou d'un moment précis du cours qui vous a touché. Assurez-vous que le lien de votre vidéo est accessible — testez-le dans une fenêtre de navigation privée avant de soumettre votre projet.`
    },
    {
      question: 'Faut-il prouver dans la vidéo qu\'on a complété le certificat?',
      answer: `Oui — mentionnez clairement dans votre vidéo que vous avez complété le certificat Être là™. Nous pourrions demander une preuve de réussite (par exemple une saisie d'écran de votre certificat) aux soumissions gagnantes, alors conservez-la.`
    },
    {
      question: 'Combien coûte le certificat Être là™?',
      answer: `Rien. Le certificat Être là™ est entièrement gratuit et offert à votre rythme. Il a été créé par Jack.org en partenariat avec la Born This Way Foundation et prend environ 2 heures à compléter.`
    },
    {
      question: 'Puis-je soumettre plus d\'une vidéo?',
      answer: `Vous n'avez besoin de compléter le certificat Être là™ qu'une seule fois, alors une seule vidéo de réflexion bien réalisée est attendue. Chaque élève ne peut gagner qu'une seule microbourse par activité — privilégiez la qualité plutôt que la quantité.`
    },
    {
      question: 'Y a-t-il un style de vidéo à privilégier?',
      answer: `Non, choisissez le style qui vous semble le plus authentique et engageant. Ça peut être une vidéo de type TikTok avec plusieurs coupes et de la musique en arrière-plan, ou un style plus documentaire — peu importe ce que vous préférez créer, tant que votre apprentissage est clairement communiqué.`
    },
    {
      question: 'L\'outil utilisé pour créer la vidéo a-t-il de l\'importance?',
      answer: `Non, pas du tout. Il existe de nombreux outils gratuits pour créer des vidéos. Vérifiez auprès de votre école les outils auxquels vous avez déjà accès. Par exemple, Canva est un excellent outil pour créer des vidéos.`
    },
    {
      question: 'Quelles compétences vais-je développer en faisant cette activité?',
      answer: `De nombreuses compétences, comme l'écoute active, l'empathie, la communication, la pensée critique, la création de contenu et le soutien par les pairs — toutes utiles dans n'importe quelle carrière future. Vous gagnerez aussi en confiance pour être présent pour les gens qui vous entourent. C'est une bonne idée d'ajouter votre vidéo complétée à votre portfolio myBlueprint et de réfléchir aux compétences que vous avez développées.`
    },
    {
      question: 'Qui évalue les soumissions?',
      answer: `Les soumissions seront évaluées par une équipe de représentants de myBlueprint. Au besoin, nous pourrons collaborer avec des représentants de Jack.org.`
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
      answer: `Le Défi du certificat Être là™ a été conçu comme une activité individuelle. Chaque élève doit compléter son propre certificat Être là™ et soumettre sa propre vidéo de réflexion.`
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
      title: 'Certificat Être là™',
      description: 'Commencez le certificat Être là™ gratuit (∼2 heures)',
      url: 'https://www.betherecertificate.org/?referral=myblueprintcareerlaunch&utm_source=myblueprint&utm_medium=contest&utm_campaign=immersion',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Jack.org',
      description: 'Découvrez Jack.org, le seul organisme de bienfaisance au Canada qui forme et mobilise des jeunes leaders pour transformer la santé mentale',
      url: 'https://jack.org/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Plateforme edHUB',
      description: 'Explorez la plateforme edHUB de Jack.org pour des leçons prêtes à utiliser en classe et des ressources pour éducateurs',
      url: 'https://edhub.jack.org/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Born This Way Foundation',
      description: 'Découvrez la fondation cofondée par Lady Gaga et Cynthia Germanotta pour soutenir le bien-être mental des jeunes',
      url: 'https://bornthisway.foundation/',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Jack Talks',
      description: 'Présentations entre pairs animées par des jeunes leaders formés pour sensibiliser et inspirer les jeunes en matière de santé mentale',
      url: 'https://jack.org/talks',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    },
    {
      title: 'Communautés Jack',
      description: 'Joignez-vous à un réseau de jeunes leaders engagés à améliorer la santé mentale dans leurs communautés partout au Canada',
      url: 'https://jack.org/communities',
      type: 'link',
      borderColor: '#003366',
      borderOnly: true
    }
  ],
  resourcesTitle: 'Ressources du certificat Être là™ et le bien-être mental',
  resourcesSubtitle: 'Complétez le certificat et découvrez d\'autres ressources en santé mentale',

  // edHUB Jack Intersections educator promo banner.
  promotionalBanner: {
    imageEn: '/promotional-banners/phac-btc-graphics-02.png',
    imageFr: '/promotional-banners/phac-btc-graphics-02.png',
    altTextEn: 'Together in Change Series educator incentive for Jack Intersection resources',
    altTextFr: 'Incitatif pour les éducateurs de la série Together in Change pour les ressources Jack Intersections',
    link: 'https://edhub.jack.org/intersections',
    attributionTextEn: 'Educators: we didn\'t forget about you! You could win a $100 gift card of your choosing courtesy of Jack.org when you download any <a href="https://edhub.jack.org/intersections" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">Jack Intersections resource</a> by May 31st. Simply download one of the 6 resources with your school email and you\'ll be automatically entered.',
    attributionTextFr: 'Éducateurs : nous ne vous avons pas oubliés! Vous pourriez gagner une carte-cadeau de 100 $ de votre choix, offerte par Jack.org, en téléchargeant une <a href="https://edhub.jack.org/intersections" target="_blank" rel="noopener noreferrer" style="color: #0092ff; text-decoration: underline;">ressource Jack Intersections</a> d\'ici le 31 mai. Téléchargez simplement l\'une des six ressources avec votre courriel scolaire pour être automatiquement inscrit.'
  },

  meta: {
    title: 'Défi du certificat Être là™ – mai 2026 | Série d\'immersion dans l\'industrie',
    description: 'Complétez gratuitement le certificat Être là™ de Jack.org et partagez une vidéo de réflexion sur la façon dont vous soutiendriez un pair. Ayez la chance de remporter une microbourse pouvant atteindre 500 $.',
    ogImage: '/jack-logo.png'
  }
};
