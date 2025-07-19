'use client'

import { useState } from 'react'
import SponsorCard from './SponsorCard'
import SecretModal from './SecretModal'

export default function Sponsors() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const monthlySponsors = [
    'October 2025',
    'November 2025',
    'December 2025',
    'January 2026',
    'February 2026',
    'March 2026',
    'April 2026',
    'May 2026'
  ]

  const incentiveSponsors = [
    'Sign up',
    'to be',
    'the first',
    'to find out 👀'
  ]

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

        {/* Monthly Activity Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
            Monthly Activity Sponsors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {monthlySponsors.map((month, index) => (
              <SponsorCard
                key={index}
                text={month}
                onClick={() => setIsModalOpen(true)}
              />
            ))}
          </div>
        </div>

        {/* Incentive Sponsors */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
            Incentive Sponsors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {incentiveSponsors.map((text, index) => (
              <SponsorCard
                key={index}
                text={text}
                onClick={() => setIsModalOpen(true)}
                className={index === incentiveSponsors.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}
              />
            ))}
            {/* Become a Sponsor CTA */}
            <div className="sm:col-span-2 lg:col-span-1 flex items-center">
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
                className="w-full bg-[#0092ff] text-white font-medium py-4 px-6 rounded-xl hover:bg-[#0082e6] transition-colors text-center shadow-md hover:shadow-lg"
              >
                Become<br />a Sponsor
              </button>
            </div>
          </div>
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