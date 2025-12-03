'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sponsor, hasFullProfile, categoryColors } from '@/data/sponsors';

interface SponsorCardProps {
  sponsor: Sponsor;
  language?: 'en' | 'fr';
}

export default function SponsorCard({ sponsor, language = 'en' }: SponsorCardProps) {
  const slug = sponsor.slug;
  const hasProfile = hasFullProfile(slug);
  const colors = categoryColors[sponsor.incentiveType];

  // Build the link path based on language and profile availability
  const linkPath = hasProfile
    ? language === 'fr'
      ? `/sponsors/${slug}/fr`
      : `/sponsors/${slug}`
    : null;

  const cardContent = (
    <>
      {/* Logo Container */}
      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          width={64}
          height={64}
          className="object-contain max-w-[56px] max-h-[56px]"
        />
      </div>

      {/* Sponsor Name */}
      <h3 className="brand-h4 text-navy font-bold mb-2 line-clamp-2">
        {sponsor.name}
      </h3>

      {/* Contribution/Description */}
      <p className="brand-body2 text-neutral-500 line-clamp-3">
        {sponsor.contribution}
      </p>

      {/* Button - appears on hover */}
      <div className="mt-auto pt-4">
        {hasProfile ? (
          <span className="block w-full text-center bg-brandBlue text-white py-3 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
            Learn more →
          </span>
        ) : (
          <span className="block w-full text-center bg-neutral-300 text-neutral-500 py-3 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold cursor-not-allowed">
            Coming soon
          </span>
        )}
      </div>
    </>
  );

  // Base card styles with group for hover coordination and colored left border
  const cardStyles = `
    group flex flex-col
    bg-lightBlue/40 rounded-xl p-8
    border-2 border-transparent border-l-4 ${colors.border}
    hover:border-brandBlue hover:border-l-4 hover:${colors.border}
    hover:shadow-lg
    transition-all duration-300
    min-h-[280px]
    ${hasProfile ? 'cursor-pointer' : 'cursor-default'}
  `;

  if (linkPath) {
    return (
      <Link href={linkPath} className={cardStyles}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardStyles}>
      {cardContent}
    </div>
  );
}
