'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { sponsors, categoryColors, categoryLabels, categoryOrder, Sponsor } from '@/data/sponsors';
import SponsorCard from './SponsorCard';

interface SponsorsGridProps {
  language?: 'en' | 'fr';
}

type FilterType = 'all' | Sponsor['incentiveType'];

const validFilters: FilterType[] = ['all', 'activity', 'completion', 'educator', 'school'];

export default function SponsorsGrid({ language = 'en' }: SponsorsGridProps) {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');

  // Validate and set initial filter from URL param
  const getInitialFilter = (): FilterType => {
    if (filterParam && validFilters.includes(filterParam as FilterType)) {
      return filterParam as FilterType;
    }
    return 'all';
  };

  const [activeFilter, setActiveFilter] = useState<FilterType>(getInitialFilter());

  // Update filter when URL param changes
  useEffect(() => {
    const newFilter = getInitialFilter();
    setActiveFilter(newFilter);
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
    </div>
  );
}
