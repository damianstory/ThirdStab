"use client";

import { DollarSign, Trophy, User, GraduationCap } from 'lucide-react';
import { getLimitedSponsorsByType } from '../data/sponsors';
import SponsorAvatarGroup from './SponsorAvatarGroup';

// Localized text content
const text = {
  en: {
    heading: "Incentives",
    subheading: "Not just for students. Educators and schools are eligible for incentives too 👏",
    sponsoredBy: "Sponsored by",
    cards: {
      student: {
        title: "Monthly Student Microgrants",
        description: "We award microgrants of $500 each to 20 students who submit outstanding work for that month's industry challenge.",
        boxLabel: "Total Monthly Distribution",
        boxTitle: "$10,000 Every Month",
        bullets: [
          "20 microgrants awarded each month",
          "$500 per student recipient",
          "Assessed against activity specific rubric"
        ]
      },
      completion: {
        title: "Series Completion Incentive",
        description: "Students who complete all 9 monthly activities are eligible for separate series completion incentives.",
        boxLabel: "Effort Rewarded",
        boxTitle: "More Chances to Win",
        bullets: [
          "Must complete all 9 monthly activities",
          "Winners will be randomly chosen",
          "Multiple different incentives available"
        ]
      },
      educator: {
        title: "Educator-Level Incentives",
        description: "Educators on the Industry Immersion Series mailing list can win prizes designed to support your classroom, and make you smile!",
        boxLabel: "Why Should Students Have All The Fun?",
        boxTitle: "Educator Incentive",
        bullets: [
          "Monthly prizes for educators on the mailing list",
          "Winners will be randomly chosen",
          "Sign up with your school email to be eligible."
        ]
      },
      school: {
        title: "School-Level Incentive",
        description: "Schools with 100+ students who complete all monthly activities are entered to win some legit school-level prizes.",
        boxLabel: "Building Incentive",
        boxTitle: "Recognition Award",
        bullets: [
          "Requires 100+ student participants from your school",
          "Who must each complete all 8 monthly activities",
          "More students participating = more chances to win"
        ]
      }
    }
  },
  fr: {
    heading: "Récompenses",
    subheading: "Pas seulement pour les élèves. Les enseignants et les écoles peuvent aussi recevoir des récompenses 👏",
    sponsoredBy: "Commandité par",
    cards: {
      student: {
        title: "Microbourses mensuelles pour les élèves",
        description: "Nous remettons des microbourses de 500 $ chacune à 20 élèves qui soumettent un travail exceptionnel dans le cadre du défi industriel du mois.",
        boxLabel: "Distribution mensuelle totale",
        boxTitle: "10 000 $ chaque mois",
        bullets: [
          "20 microbourses remises chaque mois",
          "500 $ par élève récipiendaire",
          "Évalué selon une grille propre à chaque activité"
        ]
      },
      completion: {
        title: "Récompense de fin de série",
        description: "Les élèves qui complètent les 9 activités mensuelles sont admissibles à des récompenses supplémentaires de fin de série.",
        boxLabel: "Effort récompensé",
        boxTitle: "Encore plus de chances de gagner!",
        bullets: [
          "Doit terminer les 9 activités mensuelles",
          "Les gagnants seront choisis au hasard",
          "Plusieurs récompenses différentes à gagner"
        ]
      },
      educator: {
        title: "Récompenses pour les enseignants",
        description: "Les enseignants inscrits à la liste d'envoi de la Série d'immersion dans l'industrie peuvent remporter des prix conçus pour soutenir votre enseignement et vous faire sourire !",
        boxLabel: "Pourquoi les élèves seraient-ils les seuls à s'amuser?",
        boxTitle: "Récompense pour les enseignants",
        bullets: [
          "Prix mensuels réservés aux enseignants inscrits à la liste d'envoi",
          "Les gagnants seront choisis au hasard",
          "Inscrivez-vous avec votre adresse courriel scolaire pour être admissible"
        ]
      },
      school: {
        title: "Récompenses pour les écoles",
        description: "Les écoles comptant 100 élèves ou plus qui ont complété toutes les activités mensuelles seront admissibles à un tirage pour remporter d'excellents prix au niveau de l'école!",
        boxLabel: "Récompense collective",
        boxTitle: "Prix de reconnaissance",
        bullets: [
          "Nécessite la participation de 100 élèves ou plus de votre école",
          "Chaque élève doit avoir complété les 8 activités mensuelles.",
          "Plus il y a d'élèves qui participent, plus vous avez de chances de gagner."
        ]
      }
    }
  }
};

interface IncentivesProps {
  language?: 'en' | 'fr';
}

export default function Incentives({ language = 'en' }: IncentivesProps) {
  const t = text[language];
  const studentSponsors = getLimitedSponsorsByType('student', 9);
  const completionSponsors = getLimitedSponsorsByType('completion', 4);
  const educatorSponsors = getLimitedSponsorsByType('educator', 2);
  const schoolSponsors = getLimitedSponsorsByType('school', 4);

  return (
    <section id="incentives" className="pt-24 pb-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-navy mb-4">
            {t.heading}
          </h2>
          <p className="text-xl text-neutral4 max-w-3xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Incentive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 01: Monthly Student Microgrants */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-[#0092ff] font-semibold mb-2 block">01</span>
            <h3 className="brand-h4 mb-3 text-navy">{t.cards.student.title}</h3>
            <p className="brand-body2 text-neutral4 mb-6">
              {t.cards.student.description}
            </p>

            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0092ff] rounded-full flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.cards.student.boxLabel}</p>
                  <p className="text-xl font-bold text-navy">{t.cards.student.boxTitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {t.cards.student.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0092ff] mr-2">•</span>
                    <span className="text-neutral5">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sponsor Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">{t.sponsoredBy}</p>
              <div className="flex justify-start">
                <SponsorAvatarGroup
                  sponsors={studentSponsors.sponsors}
                  maxVisible={9}
                  size="sm"
                  isStudentSponsors={true}
                />
              </div>
            </div>
          </div>

          {/* Card 02: Series Completion Incentive */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-[#0092ff] font-semibold mb-2 block">02</span>
            <h3 className="brand-h4 mb-3 text-navy">{t.cards.completion.title}</h3>
            <p className="brand-body2 text-neutral4 mb-6">
              {t.cards.completion.description}
            </p>

            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.cards.completion.boxLabel}</p>
                  <p className="text-xl font-bold text-navy">{t.cards.completion.boxTitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {t.cards.completion.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-neutral5">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sponsor Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">{t.sponsoredBy}</p>
              <div className="flex justify-start">
                <SponsorAvatarGroup
                  sponsors={completionSponsors.sponsors}
                  maxVisible={4}
                  size="sm"
                  isCompletionSponsors={true}
                />
              </div>
            </div>
          </div>

          {/* Card 03: Educator-Level Incentives */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-[#0092ff] font-semibold mb-2 block">03</span>
            <h3 className="brand-h4 mb-3 text-navy">{t.cards.educator.title}</h3>
            <p className="brand-body2 text-neutral4 mb-6">
              {t.cards.educator.description}
            </p>

            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.cards.educator.boxLabel}</p>
                  <p className="text-xl font-bold text-navy">{t.cards.educator.boxTitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {t.cards.educator.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-neutral5">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sponsor Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">{t.sponsoredBy}</p>
              <div className="flex justify-start">
                <SponsorAvatarGroup
                  sponsors={educatorSponsors.sponsors}
                  maxVisible={2}
                  size="sm"
                  isEducatorSponsors={true}
                />
              </div>
            </div>
          </div>

          {/* Card 04: School-Level Incentive */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-[#0092ff] font-semibold mb-2 block">04</span>
            <h3 className="brand-h4 mb-3 text-navy">{t.cards.school.title}</h3>
            <p className="brand-body2 text-neutral4 mb-6">
              {t.cards.school.description}
            </p>

            <div className="bg-amber-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.cards.school.boxLabel}</p>
                  <p className="text-xl font-bold text-navy">{t.cards.school.boxTitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {t.cards.school.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-neutral5">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sponsor Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">{t.sponsoredBy}</p>
              <div className="flex justify-start">
                <SponsorAvatarGroup
                  sponsors={schoolSponsors.sponsors}
                  maxVisible={4}
                  size="sm"
                  isSchoolSponsors={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}