'use client';

import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { getActivityBySlug } from '@/data/activities';

interface ReportPlaceholderProps {
  month: string;
}

export default function ReportPlaceholder({ month }: ReportPlaceholderProps) {
  const monthLower = month.toLowerCase();
  const activity = getActivityBySlug(monthLower);
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F6FF] to-[#C6E7FF] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-xl w-full text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-[#C6E7FF] rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 text-[#22224C]" />
        </div>

        {/* Month Badge */}
        <span className="inline-block bg-[#C6E7FF] text-[#22224C] px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          {capitalizedMonth} {activity?.year || '2025'}
        </span>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-[#22224C] mb-4">
          Report Coming Soon
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {activity ? (
            <>
              The sponsor report for <strong>{activity.title}</strong> with{' '}
              <strong>{activity.sponsor.name}</strong> is currently being prepared.
            </>
          ) : (
            <>
              The sponsor report for {capitalizedMonth} is currently being prepared.
              Check back soon for detailed insights and results.
            </>
          )}
        </p>

        {/* Sponsor Logo */}
        {activity && (
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-gray-50 rounded-lg flex items-center justify-center p-3">
              <img
                src={activity.sponsor.logo}
                alt={activity.sponsor.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}

        {/* Back Link */}
        <Link
          href={`/${monthLower}`}
          className="inline-flex items-center gap-2 text-[#0092ff] hover:text-[#0077cc] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {capitalizedMonth} Activity
        </Link>
      </div>
    </div>
  );
}
