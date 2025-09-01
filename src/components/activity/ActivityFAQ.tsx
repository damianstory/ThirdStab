'use client';

import { useState } from 'react';
import { ActivityPageData } from '@/data/activities';

interface ActivityFAQProps {
  activity: ActivityPageData;
}

export default function ActivityFAQ({ activity }: ActivityFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-[#22224C] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="brand-body1 text-neutral-500">
            Get answers to common questions about this activity
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {activity.faqs.map((faq, index) => (
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
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="brand-body2 text-neutral-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}