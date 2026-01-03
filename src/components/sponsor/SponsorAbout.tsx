import Image from 'next/image';
import { SponsorPageData } from '@/data/sponsors';
import { Gift, Calendar, Info } from 'lucide-react';

interface SponsorAboutProps {
  sponsor: SponsorPageData;
  language?: 'en' | 'fr';
}

const text = {
  en: {
    title: 'About'
  },
  fr: {
    title: 'À propos'
  }
};

export default function SponsorAbout({ sponsor, language = 'en' }: SponsorAboutProps) {
  const t = text[language];

  // Check if there's any sidebar content
  const hasSidebar = sponsor.incentiveCard || sponsor.infoCard || (sponsor.deadlines && sponsor.deadlines.length > 0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Logo and Title Row */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={80}
              height={80}
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <h2 className="brand-h2 text-navy">
            {sponsor.about.title || `${t.title} ${sponsor.name}`}
          </h2>
        </div>

        <div className={hasSidebar ? "grid grid-cols-1 lg:grid-cols-3 gap-8" : ""}>
          {/* Main Description */}
          <div className={hasSidebar ? "lg:col-span-2" : ""}>
            <div
              className="brand-body1 text-neutral-600 whitespace-pre-line leading-relaxed"
            >
              {sponsor.about.description}
            </div>
          </div>

          {/* Quick Info Sidebar - only render if there's content */}
          {hasSidebar && <div className="space-y-6">
            {/* Incentive Card - Featured Style */}
            {sponsor.incentiveCard && (
              <div className="bg-white border-2 border-brandBlue rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="w-5 h-5 text-brandBlue" />
                  <span className="brand-body2 text-neutral-500 font-medium">
                    {sponsor.incentiveCard.label}
                  </span>
                </div>
                <p className="brand-body1 text-navy font-semibold">
                  {sponsor.incentiveCard.value}
                </p>
              </div>
            )}

            {/* Info Card - For longer paragraph descriptions */}
            {sponsor.infoCard && (
              <div className="bg-white border-2 border-brandBlue rounded-xl p-6 lg:py-8">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-5 h-5 text-brandBlue flex-shrink-0" />
                  <span className="brand-body1 text-navy font-semibold">
                    {sponsor.infoCard.title}
                  </span>
                </div>
                <p
                  className="brand-body2 text-neutral-600 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: sponsor.infoCard.description }}
                />
              </div>
            )}

            {/* Deadline Cards */}
            {sponsor.deadlines?.map((deadline, index) => (
              <div key={index} className="bg-lightBlue/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-brandBlue" />
                  <span className="brand-body2 text-neutral-500 font-medium">
                    {deadline.label}
                  </span>
                </div>
                <p className="brand-body1 text-navy font-semibold">
                  {deadline.date}
                </p>
              </div>
            ))}
          </div>}
        </div>
      </div>
    </section>
  );
}
