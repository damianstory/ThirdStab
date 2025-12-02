'use client';

import { useState } from 'react';
import { SponsorPageData } from '@/data/sponsors';

interface SponsorFAQProps {
  sponsor: SponsorPageData;
  language?: 'en' | 'fr';
}

// Helper function to render text with URLs as clickable links
function renderAnswerWithLinks(text: string) {
  // Replace URLs with anchor tags for dangerouslySetInnerHTML
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-brandBlue hover:underline">$1</a>');
}

// Extract YouTube video ID from various YouTube URL formats or answer text
function getYouTubeVideoId(text: string): string | null {
  const patterns = [
    /youtube\.com\/embed\/([^?"&\s]+)/,
    /youtube\.com\/watch\?v=([^&\s]+)/,
    /youtu\.be\/([^?"&\s]+)/,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function SponsorFAQ({ sponsor, language = 'en' }: SponsorFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!sponsor.faqs || sponsor.faqs.length === 0) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    const isCurrentlyOpen = openIndex === index;
    setOpenIndex(isCurrentlyOpen ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 px-4 md:px-12 bg-[#F8FAFB]">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-[#22224C] mb-4">
            {language === 'en' ? 'Frequently Asked Questions' : 'Foire aux questions'}
          </h2>
          <p className="brand-body1 text-neutral-500">
            {language === 'en'
              ? 'Get answers to common questions about this incentive'
              : 'Obtenez des réponses à des questions courantes sur cet incitatif'}
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {sponsor.faqs.map((faq, index) => {
            const videoId = getYouTubeVideoId(faq.answer);
            const isVideo = !!videoId;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-neutral2 transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none rounded-xl"
                  aria-expanded={openIndex === index}
                >
                  <span className="brand-body1 font-medium text-[#22224C] pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-[#0092ff] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? isVideo ? 'max-h-[500px] opacity-100' : 'max-h-[600px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    {isVideo ? (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title={faq.question}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div
                        className="brand-body2 text-neutral-500 leading-relaxed whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: renderAnswerWithLinks(faq.answer) }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
