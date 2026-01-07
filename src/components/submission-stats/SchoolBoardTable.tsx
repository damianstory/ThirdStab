'use client';

import { Fragment } from 'react';
import { type SchoolBoardStats } from '@/data/submission-stats';

interface SchoolBoardTableProps {
  schoolBoards: SchoolBoardStats[];
  pinnedCount?: number;
  language: 'en' | 'fr';
}

const content = {
  en: {
    schoolBoard: 'School Board / School',
    city: 'City',
    submissions: 'Submissions',
  },
  fr: {
    schoolBoard: 'Commission scolaire / École',
    city: 'Ville',
    submissions: 'Soumissions',
  },
};

export function SchoolBoardTable({ schoolBoards, pinnedCount = 0, language }: SchoolBoardTableProps) {
  const t = content[language];

  if (schoolBoards.length === 0) {
    return (
      <p className="text-neutral-500 text-center py-8">
        {language === 'fr' ? 'Aucune donnée disponible' : 'No data available'}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-200">
            <th className="text-left py-3 px-2 font-semibold text-navy">
              {t.schoolBoard}
            </th>
            <th className="text-right py-3 px-2 font-semibold text-navy">
              {t.submissions}
            </th>
          </tr>
        </thead>
        <tbody>
          {schoolBoards.map((board, index) => (
            <Fragment key={`${board.schoolBoard}-${board.city}-${index}`}>
              <tr
                className={`
                  border-b border-neutral-100 last:border-0
                  ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}
                `}
              >
                <td className="py-3 px-2 text-neutral-700 font-medium">
                  {board.schoolBoard}
                </td>
                <td className="py-3 px-2 text-right">
                  <span className="inline-flex items-center justify-center min-w-[2rem] px-2 py-1 bg-brandBlue/10 text-brandBlue font-semibold rounded-full text-xs">
                    {board.submissionCount}
                  </span>
                </td>
              </tr>
              {pinnedCount > 0 && index === pinnedCount - 1 && schoolBoards.length > pinnedCount && (
                <tr>
                  <td colSpan={2} className="py-2">
                    <div className="border-t-2 border-brandBlue/20" />
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
