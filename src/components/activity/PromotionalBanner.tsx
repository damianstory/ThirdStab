'use client';

import Image from 'next/image';
import { ActivityPageData } from '@/data/activities';

interface PromotionalBannerProps {
  banner: ActivityPageData['promotionalBanner'];
  language: 'en' | 'fr';
}

export default function PromotionalBanner({ banner, language }: PromotionalBannerProps) {
  if (!banner) return null;

  // Check if banner should be displayed based on date range
  if (banner.displayDates) {
    const now = new Date();
    if (now < banner.displayDates.start || now > banner.displayDates.end) {
      return null; // Automatically hide outside of campaign period
    }
  }

  const image = language === 'en' ? banner.imageEn : banner.imageFr;
  const altText = language === 'en' ? banner.altTextEn : banner.altTextFr;

  return (
    <section className="py-8 px-8 md:py-12 md:px-12">
      <div className="container mx-auto max-w-7xl">
        {/* Unified White Card Container */}
        <div className="relative w-full mx-auto rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">

          {/* Banner Image Section */}
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

          {/* Subtle Divider */}
          <div className="border-t border-neutral1" />

          {/* Attribution Section */}
          <div className="bg-[#F8FAFB] px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
            <p className="text-center text-neutral4 text-sm md:text-base leading-relaxed font-bold">
              {language === 'en'
                ? 'Complete November\'s Industry Immersion Series Activity as part of National Skilled Trade and Technology Week presented by Skills/Compétences Canada'
                : 'Participez à l\'activité de novembre de la série Immersion dans l\'industrie dans le cadre de la Semaine nationale des métiers spécialisés et des technologies présentée par Skills/Compétences Canada'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
