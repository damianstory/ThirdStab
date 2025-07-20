'use client'

import { useState } from 'react'
import SecretModal from './SecretModal'
import CircularSponsorCarousel from './ui/circular-sponsor-carousel'
import { carouselSponsors } from '@/data/carousel-sponsors'

export default function Sponsors() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="sponsors" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Participating <span className="text-[#0092ff]">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's celebrate these industry leaders collaborating with students to help them develop real-world skills 🤝
          </p>
        </div>

        {/* Sponsor Carousel */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <CircularSponsorCarousel 
            sponsors={carouselSponsors}
            autoplay={true}
            onCardClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Become a Sponsor CTA */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('openFAQ', { detail: { index: 7 } }));
              setTimeout(() => {
                const faqSection = document.getElementById('faq');
                if (faqSection) {
                  const rect = faqSection.getBoundingClientRect();
                  const offset = window.pageYOffset + rect.bottom - window.innerHeight + 50;
                  window.scrollTo({ top: offset, behavior: 'smooth' });
                }
              }, 100);
            }}
            className="bg-[#0092ff] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl hover:bg-[#0082e6] transition-colors text-center shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200 text-sm sm:text-base"
          >
            Become a Sponsor
          </button>
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