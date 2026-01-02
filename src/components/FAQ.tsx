'use client';

import { useState, useEffect } from 'react';
import { trackFAQ } from '@/lib/analytics';

interface FAQItem {
  question: string;
  answer: string;
  link?: {
    text: string;
    url: string;
  };
}

interface FAQProps {
  initialOpenIndex?: number | null;
  language?: 'en' | 'fr';
}

// Localized text content
const text = {
  en: {
    heading: "Frequently Asked",
    headingAccent: "Questions",
    subheading: "Got questions? We've got answers! Here's everything you need to know about the Industry Immersion Series.",
    faqs: [
      {
        question: "How does this program work?",
        answer: "Excluding September and June, each month of this school year is being sponsored by a different company or industry association. And by sponsoring that month, we're creating an opt-in activity that will allow students to develop a skill and or learn about careers in that industry for them to complete on their own, or as part of a class activity. Each month's activity is a little bit different, but the idea is that students will complete the activity, submit the evidence of completion, and be assessed against an individual rubric for that activity, with 20 students earning a microgrant of $500."
      },
      {
        question: "Is this only open to myBlueprint users?",
        answer: "No. Any student across Canada is welcome, and encouraged to participate."
      },
      {
        question: "What grade levels can participate?",
        answer: "These activities have been designed for students across grades 7-12."
      },
      {
        question: "What if a student misses a month? Can they still complete the activity?",
        answer: "Students can still submit the activity after that month's deadline has passed. They won't be eligible for that month's pool of micro grants, but can still complete activities so that they are eligible for the Series Completion incentives."
      },
      {
        question: "How will students access these challenges?",
        answer: "There will be a banner at the top of a student's myBlueprint account once logged in where they can click to access the Industry Immersion Series website and access all open challenges. You can also bookmark this page you're on for easy reference."
      },
      {
        question: "When do the monthly challenges go live?",
        answer: "On the 1st of every month."
      },
      {
        question: "What is meant by May-1 and May-2?",
        answer: "There are two separate activities to complete in May! Students can complete both. All 9 activities will need to be completed to apply for the Series Completion incentives."
      },
      {
        question: "As a student, can I get credit from my teacher for completing these?",
        answer: "Maybe. You should definitely ask your teachers. Be specific about the activity, what you're being asked to complete, and why you think you should get credit for it."
      },
      {
        question: "Why micro grants as an incentive?",
        answer: "The majority of education related money available to young people today is reserved for scholarships. Scholarships are great, but not every student is going to post-secondary and not every role requires it. This money can help students build skills today that will put them in a better position to accomplish their goals, regardless of which direction they're interested in pursuing, including post-secondary."
      },
      {
        question: "How (and when) are the twenty monthly successful submissions selected?",
        answer: "Individual monthly activities are assessed against a rubric specific to that month's challenge. Our goal is to be able to announce the successful submissions by the midpoint of the following month."
      },
      {
        question: "Can students win more than one micro grant?",
        answer: "You can't earn more than one micro grant within the same month; however, you can earn multiple micro grants across different months. For example, you could earn a micro grant in November and again in March. There's no maximum amount of micro grants you can earn."
      },
      {
        question: "How will students receive the funds?",
        answer: "The easiest method is by e-transfer, whether to a student's account or their parent/guardian. However, other methods may be needed and can be explored on a case-by-case basis."
      },
      {
        question: "What can students use the funds for?",
        answer: "We will encourage students to use the money to put toward skill development and career exploration related activities. For example, buying parts or equipment for a project they want to build, or attending an industry conference. However, it will be up to the students' own discretion as to how they use their funds."
      },
      {
        question: "Will teachers be able to see who has submitted an entry?",
        answer: "Teachers won't be able to see through their myBlueprint account which students have submitted activities or not. However, we will create reports that will be shared with your myBlueprint lead at the school board level who can share specifics with you upon request."
      },
      {
        question: "Are there incentives for educators as well, or just students?",
        answer: "There are definitely incentives for educators as well, both the Educator Level incentive and School Level incentive."
      },
      {
        question: "What data is being collected and by who?",
        answer: "myBlueprint is solely responsible for running the Industry Immersion Series. Meaning that only myBlueprint collects any information related to this Series. No personally identifiable information is being shared with any 3rd parties.",
        link: {
          text: "Click here to see more.",
          url: "https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.3u8jw6o1fsyf"
        }
      }
    ]
  },
  fr: {
    heading: "Foire aux",
    headingAccent: "questions",
    subheading: "Vous avez des questions? Nous avons les réponses! Voici tout ce qu'il faut savoir sur la Série d'immersion dans l'industrie.",
    faqs: [
      {
        question: "Comment fonctionne ce programme?",
        answer: "À l'exception de septembre et de juin, chaque mois de l'année scolaire est commandité par une entreprise ou une association sectorielle différente. Grâce à ce partenariat, nous créons une activité facultative qui permet aux élèves de développer une compétence ou d'en apprendre davantage sur les carrières liées à ce secteur, à réaliser individuellement ou en classe. Chaque activité mensuelle est un peu différente, mais le principe reste le même : les élèves réalisent l'activité, soumettent une preuve de leur participation et sont évalués selon une grille spécifique à cette activité. Vingt élèves recevront une microbourse de 500 $ chaque mois."
      },
      {
        question: "Est-ce seulement pour les utilisateurs de myBlueprint?",
        answer: "Non. Tous les élèves du Canada peuvent y participer et sont encouragés à le faire."
      },
      {
        question: "Quelles sont les années scolaires admissibles?",
        answer: "Ces activités ont été conçues pour les élèves de la 7ᵉ à la 12ᵉ année."
      },
      {
        question: "Et si un élève manque un mois? Peut-il quand même faire l'activité?",
        answer: "Oui. Les élèves peuvent soumettre une activité même après la date limite du mois en question. Ils ne seront pas admissibles à la microbourse de ce mois-là, mais pourront quand même compléter les activités pour être admissibles aux récompenses de complétion de la série."
      },
      {
        question: "Comment les élèves peuvent-ils accéder à ces défis?",
        answer: "Une bannière apparaîtra en haut du compte myBlueprint de l'élève une fois connecté. En cliquant dessus, ils pourront accéder au site web de la Série d'immersion dans l'industrie et consulter toutes les activités en cours.\nAjoutez cette page à vos favoris pour y accéder plus facilement plus tard."
      },
      {
        question: "Quand les défis mensuels sont-ils publiés?",
        answer: "Le 1er jour de chaque mois."
      },
      {
        question: "Que signifient « mai-1 » et « mai-2 »?",
        answer: "Cela signifie qu'il y a deux activités distinctes à réaliser en mai! Les élèves peuvent faire les deux.\nLes 9 activités devront être complétées pour être admissibles aux récompenses de complétion de la série."
      },
      {
        question: "En tant qu'élève, puis-je obtenir des crédits de mon enseignant pour ces activités?",
        answer: "Peut-être. Vous devriez certainement poser la question à vos enseignants.\nSoyez précis lorsque vous en parlez. Indiquez de quelle activité il s'agit, ce qu'on vous demande de faire et pourquoi vous croyez qu'elle devrait être reconnue dans votre apprentissage."
      },
      {
        question: "Pourquoi offrir des microbourses comme récompense?",
        answer: "La majorité des fonds destinés à l'éducation et accessibles aux jeunes aujourd'hui sont réservés aux bourses d'études.\nLes bourses sont excellentes, mais tous les élèves ne poursuivent pas des études postsecondaires, et tous les emplois ne l'exigent pas. Ces microbourses visent à aider les élèves à développer des compétences concrètes dès maintenant, afin qu'ils soient mieux préparés à atteindre leurs objectifs, peu importe la voie qu'ils choisissent."
      },
      {
        question: "Comment (et quand) les vingt meilleures soumissions mensuelles sont-elles sélectionnées?",
        answer: "Chaque activité mensuelle est évaluée selon une grille de critères propre au défi du mois.\nNotre objectif est d'annoncer les soumissions retenues vers le milieu du mois suivant."
      },
      {
        question: "Les élèves peuvent-ils gagner plus d'une microbourse?",
        answer: "Vous ne pouvez pas recevoir plus d'une microbourse au cours du même mois; cependant, vous pouvez en recevoir plusieurs au fil des différents mois. Par exemple, vous pourriez gagner une microbourse en novembre et une autre en mars. Il n'y a pas de limite au nombre de microbourses que vous pouvez recevoir."
      },
      {
        question: "Comment les élèves recevront-ils les fonds?",
        answer: "Le moyen le plus simple est par virement Interac, soit directement au compte de l'élève, soit à celui de son parent ou tuteur.\nD'autres méthodes peuvent être envisagées au cas par cas, selon la situation."
      },
      {
        question: "Comment les élèves peuvent-ils utiliser ces fonds?",
        answer: "Nous encourageons les élèves à utiliser cet argent pour développer leurs compétences et explorer des carrières. Par exemple : acheter du matériel ou des pièces pour un projet qu'ils souhaitent réaliser, ou participer à une conférence dans un secteur d'activité. Toutefois, l'utilisation des fonds demeure à la discrétion des élèves."
      },
      {
        question: "Les enseignants pourront-ils voir qui a soumis une participation?",
        answer: "Les enseignants ne pourront pas voir, dans leur compte myBlueprint, quels élèves ont soumis leurs activités.\nToutefois, des rapports seront créés et partagés avec la personne-ressource myBlueprint à l'échelle du conseil scolaire, qui pourra ensuite transmettre ces renseignements sur demande."
      },
      {
        question: "Y a-t-il aussi des récompenses pour les enseignants, ou seulement pour les élèves?",
        answer: "Absolument! Des récompenses sont également offertes aux enseignants, à l'échelle de l'école et du personnel enseignant."
      },
      {
        question: "Quelles données sont recueillies et par qui?",
        answer: "myBlueprint est le seul responsable de la gestion de la Série d'immersion dans l'industrie.\nCela signifie que seulement myBlueprint recueille les renseignements liés à cette série.\nAucune information personnelle identifiable n'est partagée avec des tiers.",
        link: {
          text: "Cliquez ici pour en savoir plus.",
          url: "https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.3u8jw6o1fsyf"
        }
      }
    ]
  }
};

export default function FAQ({ initialOpenIndex = null, language = 'en' }: FAQProps) {
  const t = text[language];
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  useEffect(() => {
    if (initialOpenIndex !== null) {
      setOpenIndex(initialOpenIndex);
    }
  }, [initialOpenIndex]);

  useEffect(() => {
    const handleOpenFAQ = (event: CustomEvent) => {
      setOpenIndex(event.detail.index);
    };

    window.addEventListener('openFAQ', handleOpenFAQ as EventListener);

    return () => {
      window.removeEventListener('openFAQ', handleOpenFAQ as EventListener);
    };
  }, []);

  const toggleAccordion = (index: number) => {
    const isCurrentlyOpen = openIndex === index;
    const newState = isCurrentlyOpen ? null : index;

    // Track the FAQ interaction
    trackFAQ(
      t.faqs[index].question,
      isCurrentlyOpen ? 'collapse' : 'expand'
    );

    setOpenIndex(newState);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-navy mb-4">
            {t.heading} <span className="text-[#0092ff]">{t.headingAccent}</span>
          </h2>
          <p className="text-xl text-neutral4 max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {t.faqs.map((faq, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                {/* Question Bubble */}
                <div className="flex justify-start">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="relative max-w-[85%] sm:max-w-[75%] bg-[#0092ff] rounded-2xl rounded-br-sm px-5 py-3 text-left hover:bg-[#0082e6] transition-colors duration-200 focus:outline-none shadow-sm"
                    aria-expanded={openIndex === index}
                  >
                    <span className="block text-lg font-medium text-white">
                      {faq.question}
                    </span>
                    {/* Chat bubble tail */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 transform translate-x-1/2 translate-y-full"
                         style={{
                           borderStyle: 'solid',
                           borderWidth: '8px 0 0 8px',
                           borderColor: 'transparent transparent transparent #0092ff'
                         }}
                    />
                  </button>
                </div>

                {/* Answer Bubble */}
                <div
                  className={`flex justify-end transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'opacity-100 max-h-96 transform translate-y-0'
                      : 'opacity-0 max-h-0 transform -translate-y-2 overflow-hidden'
                  }`}
                >
                  <div className="relative max-w-[85%] sm:max-w-[75%] bg-gray-200 rounded-2xl rounded-bl-sm px-5 py-4">
                    <div className="brand-body1 font-medium text-navy whitespace-pre-line">
                      {faq.answer}
                      {faq.link && (
                        <>
                          {'\n\n'}
                          <a
                            href={faq.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0092ff] hover:underline"
                          >
                            {faq.link.text}
                          </a>
                        </>
                      )}
                    </div>
                    {/* Chat bubble tail */}
                    <div className="absolute bottom-0 left-0 w-0 h-0 transform -translate-x-1/2 translate-y-full"
                         style={{
                           borderStyle: 'solid',
                           borderWidth: '8px 8px 0 0',
                           borderColor: 'rgb(229 231 235) transparent transparent transparent'
                         }}
                    />
                  </div>
                </div>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
}
