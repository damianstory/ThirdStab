"use client";

import { useState } from 'react';

// Localized text content
const text = {
  en: {
    heading: "How It",
    headingAccent: "Works",
    subheading: "Connecting students to careers through self-directed, incentive driven skill building and industry awareness activities.",
    steps: [
      {
        title: "Monthly Challenges Released",
        details: "Each month, a new industry partner releases a skill-building challenge designed to introduce students to occupations and opportunities in their industry."
      },
      {
        title: "Students Complete Activities",
        details: "Students individually work on the challenge, developing awareness of industry opportunities, relevant skills, post-secondary pathways, and more."
      },
      {
        title: "Submission Process",
        details: "Completed work is submitted and assessed against a rubric for review by the selection committee. Twenty submissions will be selected each month."
      },
      {
        title: "Winners Selected & Rewarded",
        details: "Outstanding submissions receive micro grants and recognition from industry partners. $10,000 in micro grants are awarded EACH month, with extra particpation incentives available for students, educators, and schools."
      }
    ]
  },
  fr: {
    heading: "Comment ça",
    headingAccent: "fonctionne",
    subheading: "Relier les élèves au monde des carrières grâce à des activités autonomes axées sur le développement de compétences, la sensibilisation aux secteurs d'activité et des incitatifs motivants.",
    steps: [
      {
        title: "Défis mensuels publiés",
        details: "Chaque mois, un partenaire de l'industrie propose un défi axé sur le développement de compétences, conçu pour faire découvrir aux élèves les professions et les occasions dans son secteur."
      },
      {
        title: "Les élèves réalisent les activités",
        details: "Les élèves relèvent le défi individuellement, en développant leur connaissance des possibilités offertes par l'industrie, des compétences pertinentes, des parcours postsecondaires et bien plus encore."
      },
      {
        title: "Processus de soumission",
        details: "Les travaux complétés sont soumis et évalués selon une grille de critères par le comité de sélection. Chaque mois, 20 soumissions sont retenues."
      },
      {
        title: "Gagnants sélectionnés et récompensés",
        details: "Les soumissions exceptionnelles reçoivent des microbourses et une reconnaissance de la part des partenaires de l'industrie. CHAQUE mois, 10 000 $ en microbourses sont attribués, avec des récompenses supplémentaires offertes aux élèves, enseignants et écoles pour encourager la participation."
      }
    ]
  }
};

interface HowItWorksProps {
  language?: 'en' | 'fr';
}

export default function HowItWorks({ language = 'en' }: HowItWorksProps) {
  const [openStep, setOpenStep] = useState<number | null>(null); // Only one step can be open at a time
  const t = text[language];

  const toggleStep = (index: number) => {
    setOpenStep(prev => 
      prev === index ? null : index
    );
  };

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-navy mb-4">
            {t.heading} <span className="text-[#0092ff]">{t.headingAccent}</span>
          </h2>
          <p className="text-xl text-neutral4 max-w-3xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-stretch">
          {/* Image placeholder */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="bg-gray-100 rounded-lg h-[400px] lg:h-[500px] overflow-hidden">
              <img
                src="/how-it-works-image.jpeg"
                alt="Students working on various industry challenges"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            {t.steps.map((step, index) => (
              <div key={index} className={`${index < t.steps.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                  aria-expanded={openStep === index}
                  aria-controls={`step-${index}-content`}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="brand-h4 text-navy mb-4">
                      {step.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transform transition-transform duration-300 ${
                      openStep === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  id={`step-${index}-content`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6">
                    <p className="brand-body2 text-neutral5">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}