'use client';

import Image from 'next/image';
import { ReactNode, useId, useState } from 'react';
import { ActivityPageData } from '@/data/activities';

interface PromotionalBannerProps {
  banner: ActivityPageData['promotionalBanner'];
  language: 'en' | 'fr';
  collapsible?: boolean;
  collapsibleLabel?: ReactNode;
}

export default function PromotionalBanner({
  banner,
  language,
  collapsible = false,
  collapsibleLabel = 'Educator Incentive',
}: PromotionalBannerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  if (!banner) return null;

  if (banner.displayDates) {
    const now = new Date();
    if (now < banner.displayDates.start || now > banner.displayDates.end) {
      return null;
    }
  }

  const image = language === 'en' ? banner.imageEn : banner.imageFr;
  const altText = language === 'en' ? banner.altTextEn : banner.altTextFr;
  const attributionText = language === 'en' ? banner.attributionTextEn : banner.attributionTextFr;

  const bannerCard = (
    <div className="relative w-full mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      {banner.link ? (
        <a
          href={banner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src={image}
            alt={altText}
            width={2560}
            height={800}
            quality={100}
            priority
            className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-300"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </a>
      ) : (
        <Image
          src={image}
          alt={altText}
          width={2560}
          height={800}
          quality={100}
          priority
          className="w-full h-auto object-contain"
          style={{ imageRendering: '-webkit-optimize-contrast' }}
        />
      )}

      {attributionText && (
        <>
          <div className="border-t border-neutral1" />
          <div className="bg-[#F8FAFB] px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
            <p
              className="text-center text-neutral4 text-sm md:text-base leading-relaxed font-bold"
              dangerouslySetInnerHTML={{ __html: attributionText }}
            />
          </div>
        </>
      )}
    </div>
  );

  return (
    <section className="py-8 px-8 md:py-12 md:px-12">
      <div className="container mx-auto max-w-7xl">
        {collapsible ? (
          <>
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between bg-white border border-neutral2 rounded-lg px-6 py-5 md:px-8 md:py-6 hover:shadow-md transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue"
            >
              <span className="text-navy brand-subheader font-bold">
                {collapsibleLabel}
              </span>
              <svg
                className={`w-6 h-6 text-navy transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity,margin-top] duration-300 ease-out ${
                isOpen
                  ? 'grid-rows-[1fr] opacity-100 mt-4'
                  : 'grid-rows-[0fr] opacity-0 mt-0'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                {bannerCard}
              </div>
            </div>
          </>
        ) : (
          bannerCard
        )}
      </div>
    </section>
  );
}
