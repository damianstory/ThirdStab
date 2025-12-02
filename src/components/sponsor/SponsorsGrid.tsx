'use client';

import { sponsors, getSponsorsByType } from '@/data/sponsors';
import SponsorCard from './SponsorCard';

interface SponsorsGridProps {
  language?: 'en' | 'fr';
}

const categoryLabels = {
  en: {
    activity: 'Activity Sponsors',
    completion: 'Series Completion Partners',
    educator: 'Educator Prize Partners',
    school: 'School Recognition Partners'
  },
  fr: {
    activity: 'Commanditaires d\'activités',
    completion: 'Partenaires de la serie complete',
    educator: 'Partenaires de prix pour les enseignants',
    school: 'Partenaires de reconnaissance des ecoles'
  }
};

const categoryOrder: Array<'activity' | 'completion' | 'educator' | 'school'> = [
  'activity',
  'completion',
  'educator',
  'school'
];

export default function SponsorsGrid({ language = 'en' }: SponsorsGridProps) {
  const labels = categoryLabels[language];

  return (
    <div className="space-y-16">
      {categoryOrder.map((category) => {
        const categorySponsors = getSponsorsByType(category);

        if (categorySponsors.length === 0) return null;

        return (
          <section key={category}>
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="brand-h2 text-navy font-bold">
                {labels[category]}
              </h2>
              <div className="w-16 h-1 bg-brandBlue mt-2 rounded-full" />
            </div>

            {/* Sponsor Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categorySponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  language={language}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
