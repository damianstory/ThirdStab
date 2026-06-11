import Image from 'next/image';
import { SponsorPageData } from '@/data/sponsors';
import { Sprout, Trees } from 'lucide-react';

interface SponsorPartnershipProps {
  sponsor: SponsorPageData;
  language?: 'en' | 'fr';
}

const text = {
  en: {
    title: 'How This Activity Works',
    defaultIntroBlurb: 'Each monthly activity introduces students to careers, skills, and pathways connected to an industry partner. Students complete the activity, submit their work, and are assessed against that activity\'s rubric for the monthly micro grant opportunity.',
    partnershipTitle: 'Activity Details',
    incentiveTitle: 'Additional Details',
    activityTitle: 'How to Participate'
  },
  fr: {
    title: 'Comment fonctionne cette activité',
    defaultIntroBlurb: 'Chaque activité mensuelle présente aux élèves des carrières, des compétences et des parcours liés à un partenaire de l\'industrie. Les élèves réalisent l\'activité, soumettent leur travail et sont évalués selon la grille de cette activité pour l\'occasion de microbourse mensuelle.',
    partnershipTitle: 'Détails de l\'activité',
    incentiveTitle: 'Détails supplémentaires',
    activityTitle: 'Comment participer'
  }
};

// Helper function to render text with **bold** markdown syntax and <a> tags
function renderWithBold(text: string) {
  // First split by anchor tags, then by bold markers
  const anchorRegex = /(<a[^>]+>.*?<\/a>)/g;
  const anchorParts = text.split(anchorRegex);

  return anchorParts.map((part, i) => {
    // Check if this part is an anchor tag
    const anchorMatch = part.match(/<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/);
    if (anchorMatch) {
      return (
        <a
          key={`a-${i}`}
          href={anchorMatch[1]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brandBlue hover:underline"
        >
          {anchorMatch[2]}
        </a>
      );
    }

    // Handle bold markdown within non-anchor parts
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((boldPart, j) => {
      if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
        return <strong key={`b-${i}-${j}`} className="font-semibold">{boldPart.slice(2, -2)}</strong>;
      }
      return boldPart;
    });
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

        {/* Intro Blurb - Use sponsor description if provided, otherwise default */}
        <div className="mb-10">
          <p className="brand-body1 text-neutral-600 leading-relaxed whitespace-pre-line">
            {renderWithBold(sponsor.partnership.description || t.defaultIntroBlurb)}
          </p>
        </div>

        {/* Cards Grid - Full width single card when no incentiveSteps, two columns otherwise */}
        <div className={`grid grid-cols-1 ${sponsor.partnership.incentiveSteps ? 'md:grid-cols-2' : ''} gap-8`}>
          {/* Main Steps Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              {!sponsor.partnership.hideIcon && (
                <div className="w-12 h-12 bg-brandBlue/10 rounded-lg flex items-center justify-center">
                  <Trees className="w-6 h-6 text-brandBlue" />
                </div>
              )}
              <h3 className="brand-h4 text-navy">
                {sponsor.partnership.incentiveSteps ? t.partnershipTitle : t.activityTitle}
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

          {/* Grade 7, 8, 9 Card - Only shown when incentiveSteps exists */}
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
