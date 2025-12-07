'use client';

import { MonthRecipients } from '@/data/grant-recipients';

interface MonthFilterProps {
  months: MonthRecipients[];
  activeFilter: string;
  onFilterChange: (slug: string) => void;
  language?: 'en' | 'fr';
}

// Filter pill colors using inline styles to avoid Tailwind purge issues
const filterColors = {
  active: { bg: '#22224C', text: '#ffffff' },
  enabled: { bg: '#C6E7FF', text: '#22224C' },
  disabled: { bg: '#E8E8E8', text: '#999999' },
};

export default function MonthFilter({
  months,
  activeFilter,
  onFilterChange,
  language = 'en',
}: MonthFilterProps) {
  const allLabel = language === 'fr' ? 'Tous' : 'All';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-wrap gap-2 justify-center">
        {/* All filter */}
        <button
          onClick={() => onFilterChange('all')}
          className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 min-w-[100px] lg:min-w-[110px]"
          style={{
            backgroundColor: activeFilter === 'all' ? filterColors.active.bg : filterColors.enabled.bg,
            color: activeFilter === 'all' ? filterColors.active.text : filterColors.enabled.text,
          }}
        >
          {allLabel}
        </button>

        {/* Month filters */}
        {months.map((month) => {
          const isActive = activeFilter === month.slug;
          const isEnabled = month.enabled;
          const label = language === 'fr' ? month.monthFr : month.month;

          return (
            <button
              key={month.slug}
              onClick={() => isEnabled && onFilterChange(month.slug)}
              disabled={!isEnabled}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 min-w-[100px] lg:min-w-[110px] ${
                isEnabled ? 'hover:opacity-90 cursor-pointer' : 'cursor-not-allowed'
              }`}
              style={{
                backgroundColor: isActive
                  ? filterColors.active.bg
                  : isEnabled
                  ? filterColors.enabled.bg
                  : filterColors.disabled.bg,
                color: isActive
                  ? filterColors.active.text
                  : isEnabled
                  ? filterColors.enabled.text
                  : filterColors.disabled.text,
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
