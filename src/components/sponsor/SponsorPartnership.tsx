import Image from 'next/image';
import { SponsorPageData } from '@/data/sponsors';
import { Sprout, Trees } from 'lucide-react';

interface SponsorPartnershipProps {
  sponsor: SponsorPageData;
  language?: 'en' | 'fr';
}

const text = {
  en: {
    title: 'How This Incentive Works',
    introBlurb: 'Series Completion Incentives require students to complete all nine Industry Immersion Series activities. You don\'t have to complete each activity within its sponsored month, but you do need to complete all of them.\n\nFor Grade 10 & 11 students, because the SHAD application deadline is in January, you\'ll need to complete the October, November, and December activities before indicating your interest in earning an Entrance Scholarship to the 2026 SHAD program.\n\nIt\'s fine if you didn\'t complete the October and November activity within those months. You can still complete them now. You won\'t be eligible for one of those months\' micro-grants, but once an activity opens it stays open for the remainder of the school year. If you complete the December activity in December, you will be eligible for the pool of December micro-grants.\n\nIf selected for one of the 5 Entrance Scholarships, you\'ll be required to continue completing all Industry Immersion Series activities for the remainder of the year.\n\nFor Grade 7, 8 & 9 students, if you earn an Entrance Scholarship to a SHAD program, it won\'t be for 2026—it will be for an eligible summer when you\'re in Grade 10 or 11.',
    partnershipTitle: 'For Grade 10 & 11 Students',
    incentiveTitle: 'For Grade 7, 8, 9 Students'
  },
  fr: {
    title: 'Comment fonctionne cet incitatif',
    introBlurb: 'Les incitatifs de complétion de série exigent que les élèves complètent les neuf activités de la série d\'immersion industrielle. Vous n\'avez pas à compléter chaque activité dans son mois commandité, mais vous devez toutes les compléter.\n\nPour les élèves de 10e et 11e année, comme la date limite de candidature SHAD est en janvier, vous devrez compléter les activités d\'octobre, novembre et décembre avant d\'indiquer votre intérêt à gagner une bourse d\'entrée pour le programme SHAD 2026.\n\nCe n\'est pas grave si vous n\'avez pas complété les activités d\'octobre et novembre dans ces mois. Vous pouvez encore les compléter maintenant. Vous ne serez pas admissible aux micro-bourses de ces mois, mais une fois qu\'une activité est ouverte, elle reste ouverte pour le reste de l\'année scolaire. Si vous complétez l\'activité de décembre en décembre, vous serez admissible au tirage des micro-bourses de décembre.\n\nSi sélectionné pour l\'une des 5 bourses d\'entrée, vous devrez continuer à compléter toutes les activités de la série d\'immersion industrielle pour le reste de l\'année.\n\nPour les élèves de 7e, 8e et 9e année, si vous gagnez une bourse d\'entrée pour un programme SHAD, ce ne sera pas pour 2026—ce sera pour un été admissible lorsque vous serez en 10e ou 11e année.',
    partnershipTitle: 'Pour les élèves de 10e et 11e année',
    incentiveTitle: 'Pour les élèves de 7e, 8e et 9e année'
  }
};

// Helper function to render text with **bold** markdown syntax
function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function SponsorPartnership({ sponsor, language = 'en' }: SponsorPartnershipProps) {
  const t = text[language];

  return (
    <section className="py-16 bg-offWhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo and Title Row */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
            <Image
              src="/images/iis-logo.png"
              alt="Industry Immersion Series logo"
              width={80}
              height={80}
              className="object-contain max-w-[70px] max-h-[70px]"
            />
          </div>
          <h2 className="brand-h2 text-navy">
            {t.title}
          </h2>
        </div>

        {/* Intro Blurb */}
        <div className="mb-10">
          <p className="brand-body1 text-neutral-600 leading-relaxed whitespace-pre-line">
            {t.introBlurb}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Grade 10 & 11 Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-brandBlue/10 rounded-lg flex items-center justify-center">
                <Trees className="w-6 h-6 text-brandBlue" />
              </div>
              <h3 className="brand-h4 text-navy">
                {t.partnershipTitle}
              </h3>
            </div>
            <ul className="space-y-3">
              {sponsor.partnership.steps?.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="w-2 h-2 bg-brandBlue rounded-full flex-shrink-0 translate-y-3" />
                  <span className="brand-body1 text-neutral-600">{renderWithBold(step)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Grade 7, 8, 9 Card */}
          {sponsor.partnership.incentiveSteps && (
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brandBlue/10 rounded-lg flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-brandBlue" />
                </div>
                <h3 className="brand-h4 text-navy">
                  {t.incentiveTitle}
                </h3>
              </div>
              <ul className="space-y-3">
                {sponsor.partnership.incentiveSteps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="w-2 h-2 bg-brandBlue rounded-full flex-shrink-0 translate-y-3" />
                    <span className="brand-body1 text-neutral-600">{renderWithBold(step)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Activity Month Badge (if applicable) */}
        {sponsor.partnership.activityMonth && (
          <div className="mt-8 inline-flex items-center gap-2 bg-brandBlue/10 px-4 py-2 rounded-full">
            <span className="brand-body2 text-brandBlue font-medium">
              Activity Sponsor: {sponsor.partnership.activityMonth}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
