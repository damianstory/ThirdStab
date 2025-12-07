'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MonthRecipients } from '@/data/grant-recipients';

interface MonthSectionProps {
  month: MonthRecipients;
  language?: 'en' | 'fr';
}

export default function MonthSection({ month, language = 'en' }: MonthSectionProps) {
  const monthName = language === 'fr' ? month.monthFr : month.month;
  const activityTitle = language === 'fr' ? month.activityTitleFr : month.activityTitle;
  const description = language === 'fr' ? month.descriptionFr : month.description;
  const viewActivityLabel = language === 'fr' ? "Voir l'activité" : 'View Activity';
  const winnersLabel = language === 'fr' ? 'gagnants' : 'winners';
  const activityPath = language === 'fr' ? `/${month.activitySlug}/fr` : `/${month.activitySlug}`;

  return (
    <div className="w-full bg-gradient-to-r from-offWhite to-lightBlue/30 border-y border-lightBlue/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Sponsor Logo */}
          <div className="flex-shrink-0 w-20 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-3">
            <Image
              src={month.sponsorLogo}
              alt={month.sponsorName}
              width={60}
              height={60}
              className="object-contain max-h-14"
            />
          </div>

          {/* Text Content */}
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h2 className="text-navy font-bold text-xl md:text-2xl">
                {monthName} {month.year} &mdash; {activityTitle}
              </h2>
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white"
                style={{
                  background: 'linear-gradient(135deg, #0092ff 0%, #006dd9 100%)',
                }}
              >
                {month.winners.length} {winnersLabel}
              </span>
            </div>
            <p className="text-neutral5 text-sm mb-1">
              {month.sponsorName}
            </p>
            <p className="text-neutral4 text-sm mb-3 max-w-3xl">
              {description}
            </p>
            <Link
              href={activityPath}
              className="inline-flex items-center text-brandBlue hover:text-navy text-sm font-medium transition-colors duration-200"
            >
              {viewActivityLabel}
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
