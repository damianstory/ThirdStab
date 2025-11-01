'use client'

import { useState } from 'react'
import SecretModal from './SecretModal'
import CircularSponsorCarousel from './ui/circular-sponsor-carousel'
import { carouselSponsors } from '@/data/carousel-sponsors'
import { trackButtonClick } from '@/lib/analytics'

// Localized text content
const text = {
  en: {
    heading: "Our Participating",
    headingAccent: "Sponsors",
    subheading: "Let's celebrate these industry leaders collaborating with students to help them develop real-world skills 🤝",
    viewAllButton: "View All Sponsors/Incentives"
  },
  fr: {
    heading: "Nos",
    headingAccent: "commanditaires participants",
    subheading: "Célébrons ces leaders de l'industrie qui collaborent avec les élèves pour les aider à développer des compétences concrètes 🤝",
    viewAllButton: "Voir tous les commanditaires et récompenses"
  }
};

interface SponsorsProps {
  language?: 'en' | 'fr';
}

export default function Sponsors({ language = 'en' }: SponsorsProps) {
  const t = text[language];
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle View All Sponsors button click
  const handleViewAllClick = () => {
    trackButtonClick(
      'View All Sponsors/Incentives',
      'Sponsors Section - CTA Button'
    );
  };

  return (
    <section id="sponsors" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-3">
          <h2 className="brand-h2 text-navy mb-4">
            {t.heading} <span className="text-[#0092ff]">{t.headingAccent}</span>
          </h2>
          <p className="text-xl text-neutral4 max-w-3xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Sponsor Carousel */}
        <div className="mb-2 sm:mb-3 md:mb-4">
          <CircularSponsorCarousel
            sponsors={carouselSponsors}
            autoplay={true}
            language={language}
            // Modal functionality disabled - cards now link directly to sponsor page
            // onCardClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* View All Sponsors CTA */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <a
            href="https://www.notion.so/Industry-Immersion-Series-Sponsors-23af4a4d79df801ba06eebcd7035537d?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleViewAllClick}
            className="bg-[#0092ff] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl hover:bg-[#0082e6] transition-colors text-center shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 text-sm sm:text-base"
          >
            {t.viewAllButton}
          </a>
        </div>
      </div>

      {/* Secret Modal */}
      <SecretModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
