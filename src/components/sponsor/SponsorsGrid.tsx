'use client';

import { sponsors } from '@/data/sponsors';
import SponsorCard from './SponsorCard';

// "Get involved" explainer shown at the bottom
const getInvolvedExplainer = {
  title: 'Want your company to get involved?',
  description: 'Want to support career awareness and student skill development within a program that will reach up to +1 million grade 7-12 students? Email Damian (damian.matheson@myblueprint.ca) to learn more.',
};

interface SponsorsGridProps {
  language?: 'en' | 'fr';
}

export default function SponsorsGrid({ language = 'en' }: SponsorsGridProps) {
  return (
    <div className="space-y-8">
      {/* Sponsor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor.id}
            sponsor={sponsor}
            language={language}
          />
        ))}
      </div>

      {/* Empty state */}
      {sponsors.length === 0 && (
        <div className="text-center py-12 text-neutral-500">
          No sponsors found.
        </div>
      )}

      <div
        className="rounded-xl p-6 border-l-4 border-l-navy"
        style={{ background: 'linear-gradient(to bottom right, #E8E8F0, #F4F4F8)' }}
      >
        <h3 className="brand-h4 text-navy font-bold mb-2">{getInvolvedExplainer.title}</h3>
        <p className="brand-body2 text-neutral-600">{getInvolvedExplainer.description}</p>
      </div>
    </div>
  );
}
