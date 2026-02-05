'use client';

interface GradeDistributionProps {
  language: 'en' | 'fr';
}

const content = {
  en: {
    title: 'Submissions by Grade',
    grade: 'Grade',
  },
  fr: {
    title: 'Soumissions par niveau',
    grade: 'Année',
  },
};

// Grade distribution data (original 386 + January 153 = 539 total)
const gradeData = [
  { grade: 7, count: 55 },   // 45 + 10
  { grade: 8, count: 111 },  // 95 + 16
  { grade: 9, count: 35 },   // 20 + 15
  { grade: 10, count: 135 }, // 89 + 46
  { grade: 11, count: 115 }, // 85 + 30
  { grade: 12, count: 132 }, // 96 + 36
];

export function GradeDistribution({ language }: GradeDistributionProps) {
  const t = content[language];
  const maxCount = Math.max(...gradeData.map(d => d.count));

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
      <h3 className="text-sm font-semibold text-navy mb-4">{t.title}</h3>
      <div className="space-y-3">
        {gradeData.map(({ grade, count }) => {
          const percentage = (count / maxCount) * 100;
          return (
            <div key={grade} className="flex items-center gap-3">
              <div className="w-16 text-sm font-medium text-neutral-600">
                {t.grade} {grade}
              </div>
              <div className="flex-1 h-6 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brandBlue to-brandBlue/70 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="w-10 text-sm font-semibold text-brandBlue text-right">
                {count}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
