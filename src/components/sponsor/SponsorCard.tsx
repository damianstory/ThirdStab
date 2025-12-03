'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sponsor, hasFullProfile, categoryColors } from '@/data/sponsors';

interface SponsorCardProps {
  sponsor: Sponsor;
  language?: 'en' | 'fr';
}

// Sponsors that should have larger logos filling the container
const largeLogoSlugs = ['milwaukee', 'hrblock-canada', 'jack-org'];
// Sponsors with slightly smaller full-container logos (90% size)
const mediumLogoSlugs = ['job-spark', 'trade-finder'];
// Sponsors with 25% larger logos (70px instead of 56px default)
const slightlyLargerLogoSlugs = ['thinkag'];
// Sponsors with ~56% larger logos (fills container)
const largerLogoSlugs = ['mihr', 'zurich-canada', 'hrai'];
// Sponsors with 80% container size
const eightyPercentLogoSlugs = ['nav-canada'];

export default function SponsorCard({ sponsor, language = 'en' }: SponsorCardProps) {
  const slug = sponsor.slug;
  const hasProfile = hasFullProfile(slug);
  const colors = categoryColors[sponsor.incentiveType];
  const hasLargeLogo = largeLogoSlugs.includes(slug);
  const hasMediumLogo = mediumLogoSlugs.includes(slug);
  const hasSlightlyLargerLogo = slightlyLargerLogoSlugs.includes(slug);
  const hasLargerLogo = largerLogoSlugs.includes(slug);
  const hasEightyPercentLogo = eightyPercentLogoSlugs.includes(slug);

  // Build the link path based on language, profile availability, or activity page
  const linkPath = hasProfile
    ? language === 'fr'
      ? `/sponsors/${slug}/fr`
      : `/sponsors/${slug}`
    : sponsor.activityPage
    ? sponsor.activityPage
    : null;

  const hasActivityPage = !!sponsor.activityPage;

  const cardContent = (
    <>
      {/* Logo Container */}
      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm overflow-hidden">
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          width={hasLargeLogo || hasLargerLogo ? 80 : hasMediumLogo ? 72 : hasSlightlyLargerLogo ? 70 : hasEightyPercentLogo ? 64 : 64}
          height={hasLargeLogo || hasLargerLogo ? 80 : hasMediumLogo ? 72 : hasSlightlyLargerLogo ? 70 : hasEightyPercentLogo ? 64 : 64}
          className={hasLargeLogo ? "object-cover w-full h-full" : hasLargerLogo ? "object-contain w-full h-full" : hasMediumLogo ? "object-contain w-[90%] h-[90%]" : hasEightyPercentLogo ? "object-contain w-[80%] h-[80%]" : hasSlightlyLargerLogo ? "object-contain max-w-[70px] max-h-[70px]" : "object-contain max-w-[56px] max-h-[56px]"}
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
        ) : hasActivityPage ? (
          <span className="block w-full text-center bg-brandBlue text-white py-3 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
            View Activity →
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
    rounded-xl p-8
    border-2 border-transparent border-l-4 ${colors.border}
    hover:border-brandBlue hover:border-l-4 hover:${colors.border}
    hover:shadow-lg
    transition-all duration-300
    min-h-[280px]
    ${hasProfile || hasActivityPage ? 'cursor-pointer' : 'cursor-default'}
  `;

  if (linkPath) {
    return (
      <Link href={linkPath} className={cardStyles} style={colors.gradientStyle}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardStyles} style={colors.gradientStyle}>
      {cardContent}
    </div>
  );
}
