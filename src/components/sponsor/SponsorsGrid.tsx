'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { sponsors, categoryColors, categoryLabels, categoryOrder, Sponsor } from '@/data/sponsors';
import SponsorCard from './SponsorCard';

// Incentive type explainer content
const incentiveExplainers: Record<Sponsor['incentiveType'], { title: string; description: string }> = {
  completion: {
    title: 'What is a Series Completion incentive?',
    description: 'These are incentives students can apply for after completing all 9 monthly activities. Students don\'t have to complete all activities within their designated months to be able to apply for this, they just have to have all activities completed by the end of May.',
  },
  educator: {
    title: 'What is an Educator-Level incentive?',
    description: 'These are perks to encourage educators to join the Industry Immersion Series mailing list. Each month, we\'ll pick a random subscriber to win one of these prizes.',
  },
  school: {
    title: 'What is a School-Level incentive?',
    description: 'These are incentives that an entire school can win with enough participation. If your school has 100 or more students who have completed all 9 activities, you\'ll be eligible to apply for these incentives.',
  },
  activity: {
    title: 'What is an Activity incentive?',
    description: 'Each month, a new industry partner releases a skill-building challenge designed to introduce students to occupations and opportunities in their industry. Students individually work on the challenge, developing awareness of industry opportunities, relevant skills, post-secondary pathways, and more. Completed work is submitted and assessed against a rubric for review by the selection committee. Twenty submissions will be selected each month. Outstanding submissions receive micro grants and recognition from industry partners. $10,000 in micro grants (20 x $500) are awarded EACH month, with extra participation incentives available for students, educators, and schools.',
  },
};

// "Get involved" explainer shown at the bottom
const getInvolvedExplainer = {
  title: 'Want your company to get involved?',
  description: 'Want to support career awareness and student skill development within a program that will reach up to +1 million grade 7-12 students? Email Damian (damian.matheson@myblueprint.ca) to learn more.',
};

interface SponsorsGridProps {
  language?: 'en' | 'fr';
}

type FilterType = 'all' | Sponsor['incentiveType'];

const validFilters: FilterType[] = ['all', 'activity', 'completion', 'educator', 'school'];

export default function SponsorsGrid({ language = 'en' }: SponsorsGridProps) {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');

  // Validate filter param
  const getValidFilter = (param: string | null): FilterType => {
    if (param && validFilters.includes(param as FilterType)) {
      return param as FilterType;
    }
    return 'all';
  };

  const [activeFilter, setActiveFilter] = useState<FilterType>(() => getValidFilter(filterParam));

  // Update filter when URL param changes
  useEffect(() => {
    setActiveFilter(getValidFilter(filterParam));
  }, [filterParam]);

  // Sort sponsors: featured first, then by category order
  const sortedSponsors = [...sponsors].sort((a, b) => {
    // Featured first
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Then by category order
    return categoryOrder.indexOf(a.incentiveType) - categoryOrder.indexOf(b.incentiveType);
  });

  // Filter based on active pill
  const filteredSponsors = activeFilter === 'all'
    ? sortedSponsors
    : sortedSponsors.filter(s => s.incentiveType === activeFilter);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'completion', label: categoryLabels.completion },
    { key: 'educator', label: categoryLabels.educator },
    { key: 'school', label: categoryLabels.school },
    { key: 'activity', label: categoryLabels.activity },
  ];

  // Get filter pill colors - using myBlueprint brand palette
  // navy: #22224C, brandBlue: #0092ff, lightBlue: #C6E7FF
  const filterColorMap: Record<FilterType, { bg: string; text: string; activeBg: string; activeText: string }> = {
    all: { bg: '#E8E8F0', text: '#22224C', activeBg: '#22224C', activeText: '#ffffff' },
    completion: { bg: '#C6E7FF', text: '#22224C', activeBg: '#0092ff', activeText: '#ffffff' },
    educator: { bg: '#D4F0FF', text: '#006BB3', activeBg: '#006BB3', activeText: '#ffffff' },
    school: { bg: '#E0F4FF', text: '#0077CC', activeBg: '#0077CC', activeText: '#ffffff' },
    activity: { bg: '#F0F8FF', text: '#0092ff', activeBg: '#0092ff', activeText: '#ffffff' },
  };

  const getFilterStyles = (filter: FilterType) => {
    const isActive = activeFilter === filter;
    const colors = filterColorMap[filter];

    return {
      backgroundColor: isActive ? colors.activeBg : colors.bg,
      color: isActive ? colors.activeText : colors.text,
    };
  };

  return (
    <div className="space-y-8">
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            style={getFilterStyles(filter.key)}
            className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90"
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Unified Sponsor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSponsors.map((sponsor) => (
          <SponsorCard
            key={sponsor.id}
            sponsor={sponsor}
            language={language}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredSponsors.length === 0 && (
        <div className="text-center py-12 text-neutral-500">
          No sponsors found in this category.
        </div>
      )}

      {/* Incentive Type Explainer Section */}
      <div className="mt-12 space-y-4">
        {activeFilter === 'all' ? (
          // Show all explainers when "All" is selected
          categoryOrder.map((type) => {
            const colors = categoryColors[type];
            const explainer = incentiveExplainers[type];
            return (
              <div
                key={type}
                className={`rounded-xl p-6 border-l-4 ${colors.border}`}
                style={colors.gradientStyle}
              >
                <h3 className="brand-h4 text-navy font-bold mb-2">{explainer.title}</h3>
                <p className="brand-body2 text-neutral-600">{explainer.description}</p>
              </div>
            );
          })
        ) : (
          // Show only the selected filter's explainer
          (() => {
            const colors = categoryColors[activeFilter];
            const explainer = incentiveExplainers[activeFilter];
            return (
              <div
                className={`rounded-xl p-6 border-l-4 ${colors.border}`}
                style={colors.gradientStyle}
              >
                <h3 className="brand-h4 text-navy font-bold mb-2">{explainer.title}</h3>
                <p className="brand-body2 text-neutral-600">{explainer.description}</p>
              </div>
            );
          })()
        )}

        {/* Get Involved CTA - only shown when "All" filter is active */}
        {activeFilter === 'all' && (
          <div
            className="rounded-xl p-6 border-l-4 border-l-navy"
            style={{ background: 'linear-gradient(to bottom right, #E8E8F0, #F4F4F8)' }}
          >
            <h3 className="brand-h4 text-navy font-bold mb-2">{getInvolvedExplainer.title}</h3>
            <p className="brand-body2 text-neutral-600">{getInvolvedExplainer.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
