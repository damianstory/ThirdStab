'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { type ProvinceStats, type CityPin, type SchoolBoardStats } from '@/data/submission-stats';
import { SchoolBoardTable } from './SchoolBoardTable';

interface ProvincePanelProps {
  isOpen: boolean;
  onClose: () => void;
  province: ProvinceStats | null;
  selectedCity: CityPin | null;
  language: 'en' | 'fr';
}

const content = {
  en: {
    close: 'Close',
    schoolBoards: 'school boards',
    submissions: 'submissions',
    allCities: 'All cities',
  },
  fr: {
    close: 'Fermer',
    schoolBoards: 'commissions scolaires',
    submissions: 'soumissions',
    allCities: 'Toutes les villes',
  },
};

export function ProvincePanel({
  isOpen,
  onClose,
  province,
  selectedCity,
  language,
}: ProvincePanelProps) {
  const t = content[language];

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Get school boards to display - all province boards with clicked city pinned at top
  const getSchoolBoards = (): SchoolBoardStats[] => {
    if (!province) return [];

    // Get all boards in the province
    const allBoards = province.cities.flatMap((c) => c.schoolBoards);

    if (selectedCity) {
      // Separate clicked city's boards from others
      const clickedCityBoards = selectedCity.schoolBoards;
      const otherBoards = allBoards
        .filter(b => b.city !== selectedCity.city)
        .sort((a, b) => {
          // Sort by submission count (descending), then alphabetically when tied
          if (b.submissionCount !== a.submissionCount) {
            return b.submissionCount - a.submissionCount;
          }
          return a.schoolBoard.localeCompare(b.schoolBoard);
        });

      // Pinned boards at top, then alphabetical rest
      return [...clickedCityBoards, ...otherBoards];
    }

    // No city selected - all boards by submission count
    return allBoards.sort((a, b) => b.submissionCount - a.submissionCount);
  };

  const schoolBoards = getSchoolBoards();

  // Get title - always show province name
  const getTitle = (): string => {
    if (province) {
      return language === 'fr' ? province.nameFr : province.name;
    }
    return '';
  };

  // Get subtitle
  const getSubtitle = (): string => {
    const boardCount = schoolBoards.length;
    const submissionCount = schoolBoards.reduce((sum, b) => sum + b.submissionCount, 0);

    if (selectedCity) {
      return `${boardCount} ${t.schoolBoards} \u2022 ${submissionCount} ${t.submissions}`;
    }
    if (province) {
      return `${province.cities.length} ${language === 'fr' ? 'villes' : 'cities'} \u2022 ${boardCount} ${t.schoolBoards}`;
    }
    return '';
  };

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <AnimatePresence>
      {isOpen && province && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="absolute inset-0 bg-navy z-10"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: prefersReducedMotion ? 0 : '-100%', opacity: prefersReducedMotion ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: prefersReducedMotion ? 0 : '-100%', opacity: prefersReducedMotion ? 0 : 1 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.1 }
                : { type: 'spring', damping: 25, stiffness: 200 }
            }
            className="absolute left-0 top-0 bottom-0 w-full max-w-md bg-white z-20 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-neutral-200 flex-shrink-0">
              <div>
                <h2 className="brand-h3 text-navy">{getTitle()}</h2>
                <p className="brand-body2 text-neutral-500 mt-1">{getSubtitle()}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-2 -mt-1 rounded-full hover:bg-neutral-100 transition-colors flex-shrink-0"
                aria-label={t.close}
              >
                <X className="w-6 h-6 text-neutral-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <SchoolBoardTable
                schoolBoards={schoolBoards}
                pinnedCount={selectedCity ? selectedCity.schoolBoards.length : 0}
                language={language}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
