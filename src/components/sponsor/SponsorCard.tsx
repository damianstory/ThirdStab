'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sponsor, generateSlug, hasFullProfile } from '@/data/sponsors';

interface SponsorCardProps {
  sponsor: Sponsor;
  language?: 'en' | 'fr';
}

export default function SponsorCard({ sponsor, language = 'en' }: SponsorCardProps) {
  const slug = generateSlug(sponsor.name);
  const hasProfile = hasFullProfile(slug);

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
    </>
  );

  // Base card styles
  const cardStyles = `
    block bg-lightBlue/40 rounded-xl p-6
    transition-all duration-300
    ${hasProfile ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : 'cursor-default'}
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
