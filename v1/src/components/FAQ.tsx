'use client';

import { useState, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  initialOpenIndex?: number | null;
}

export default function FAQ({ initialOpenIndex = null }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  useEffect(() => {
    if (initialOpenIndex !== null) {
      setOpenIndex(initialOpenIndex);
    }
  }, [initialOpenIndex]);

  useEffect(() => {
    const handleOpenFAQ = (event: CustomEvent) => {
      setOpenIndex(event.detail.index);
    };

    window.addEventListener('openFAQ', handleOpenFAQ as EventListener);

    return () => {
      window.removeEventListener('openFAQ', handleOpenFAQ as EventListener);
    };
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "What grade levels can participate?",
      answer: "The program is available to all students across grades 7-12."
    },
    {
      question: "Does my school need to be licensing myBlueprint?",
      answer: "No. Any grade 7-12 student across North America can participate."
    },
    {
      question: "When does the program launch?",
      answer: "The first monthly activity is launching in October 2025. A landing page will be created for each month that explains the activity and how students can participate. Join the mailing list below to be the first to know."
    },
    {
      question: "What types of industries are participating?",
      answer: "We've tried to ensure there's a diverse group of industries available for students to learn about. We'll be announcing specifics soon. To be one of the first to know, join the mailing list below."
    },
    {
      question: "Are there incentives for educators as well?",
      answer: "Yes :) Monthly giveaways for educators who join the mailing list, and school prizes for schools with a lot of student participation."
    },
    {
      question: "What data is being collected?",
      answer: "myBlueprint will collect the names and emails of students when they submit their monthly activities. This information will not be shared with any third parties. Industry partners will receive anonymized data on the number of students who participated in their activity."
    },
    {
      question: "What is myBlueprint?",
      answer: "myBlueprint is a trusted partner to almost 300 school boards across Canada, helping to empower every student to thrive and succeed in education, career, and life."
    },
    {
      question: "How can my company get involved?",
      answer: "Email our Director, Special Projects at damian.matheson@myblueprint.ca"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#0092ff]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers! Here's everything you need to know about the Industry Immersion Series.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
              <div
                key={index}
                className="space-y-4"
              >
                {/* Question Bubble */}
                <div className="flex justify-start">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="relative max-w-[85%] sm:max-w-[75%] bg-gray-200 rounded-2xl rounded-br-sm px-5 py-3 text-left hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0092ff] focus:ring-offset-2"
                    aria-expanded={openIndex === index}
                  >
                    <span className="block text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                    {/* Chat bubble tail */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 transform translate-x-1/2 translate-y-full"
                         style={{
                           borderStyle: 'solid',
                           borderWidth: '8px 0 0 8px',
                           borderColor: 'transparent transparent transparent rgb(229 231 235)'
                         }}
                    />
                  </button>
                </div>
                
                {/* Answer Bubble */}
                <div
                  className={`flex justify-end transition-all duration-300 ${
                    openIndex === index 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform -translate-y-2 h-0 overflow-hidden'
                  }`}
                >
                  <div className="relative max-w-[85%] sm:max-w-[75%] bg-blue-50 rounded-2xl rounded-bl-sm px-5 py-4">
                    <p className="text-lg font-medium text-gray-900">
                      {faq.answer}
                    </p>
                    {/* Chat bubble tail */}
                    <div className="absolute bottom-0 left-0 w-0 h-0 transform -translate-x-1/2 translate-y-full"
                         style={{
                           borderStyle: 'solid',
                           borderWidth: '8px 8px 0 0',
                           borderColor: 'rgb(240 249 255) transparent transparent transparent'
                         }}
                    />
                  </div>
                </div>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
}