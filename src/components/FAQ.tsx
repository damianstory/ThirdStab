'use client';

import { useState, useEffect } from 'react';
import { trackFAQ } from '@/lib/analytics';

interface FAQItem {
  question: string;
  answer: string;
  link?: {
    text: string;
    url: string;
  };
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
      question: "How does this program work?",
      answer: "Excluding September and June, each month of this school year is being sponsored by a different company or industry association. And by sponsoring that month, we're creating an opt-in activity that will allow students to develop a skill and or learn about careers in that industry for them to complete on their own, or as part of a class activity. Each month's activity is a little bit different, but the idea is that students will complete the activity, submit the evidence of completion, and be assessed against an individual rubric for that activity, with 20 students earning a microgrant of $500."
    },
    {
      question: "Is this only open to myBlueprint users?",
      answer: "No. Any student across Canada is welcome, and encouraged to participate."
    },
    {
      question: "What grade levels can participate?",
      answer: "These activities have been designed for students across grades 7-12."
    },
    {
      question: "What if a student misses a month? Can they still complete the activity?",
      answer: "Students can still submit the activity after that month's deadline has passed. They won't be eligible for that month's pool of micro grants, but can still complete activities so that they are eligible for the Series Completion incentives."
    },
    {
      question: "How will students access these challenges?",
      answer: "There will be a banner at the top of a student's myBlueprint account once logged in where they can click to access the Industry Immersion Series website and access all open challenges. You can also bookmark this page you're on for easy reference."
    },
    {
      question: "When do the monthly challenges go live?",
      answer: "On the 1st of every month."
    },
    {
      question: "As a student, can I get credit from my teacher for completing these?",
      answer: "Maybe. You should definitely ask your teachers. Be specific about the activity, what you're being asked to complete, and why you think you should get credit for it."
    },
    {
      question: "Why micro grants as an incentive?",
      answer: "The majority of education related money available to young people today is reserved for scholarships. Scholarships are great, but not every student is going to post-secondary and not every role requires it. This money can help students build skills today that will put them in a better position to accomplish their goals, regardless of which direction they're interested in pursuing, including post-secondary."
    },
    {
      question: "How (and when) are the twenty monthly successful submissions selected?",
      answer: "Individual monthly activities are assessed against a rubric specific to that month's challenge. Our goal is to be able to announce the successful submissions by the midpoint of the following month."
    },
    {
      question: "How will students receive the funds?",
      answer: "The easiest method is by e-transfer, whether to a student's account or their parent/guardian. However, other methods may be needed and can be explored on a case-by-case basis."
    },
    {
      question: "What can students use the funds for?",
      answer: "We will encourage students to use the money to put toward skill development and career exploration related activities. For example, buying parts or equipment for a project they want to build, or attending an industry conference. However, it will be up to the students' own discretion as to how they use their funds."
    },
    {
      question: "Will teachers be able to see who has submitted an entry?",
      answer: "Teachers won't be able to see through their myBlueprint account which students have submitted activities or not. However, we will create reports that will be shared with your myBlueprint lead at the school board level who can share specifics with you upon request."
    },
    {
      question: "Are there incentives for educators as well, or just students?",
      answer: "There are definitely incentives for educators as well, both the Educator Level incentive and School Level incentive."
    },
    {
      question: "What data is being collected and by who?",
      answer: "myBlueprint is solely responsible for running the Industry Immersion Series. Meaning that only myBlueprint collects any information related to this Series. No personally identifiable information is being shared with any 3rd parties.",
      link: {
        text: "Click here to see more.",
        url: "https://docs.google.com/document/d/1rHxZ4QntHN0fo7rqi7uKeDQakupNtE3KtT8p3lFPur4/edit?tab=t.3u8jw6o1fsyf"
      }
    }
  ];

  const toggleAccordion = (index: number) => {
    const isCurrentlyOpen = openIndex === index;
    const newState = isCurrentlyOpen ? null : index;

    // Track the FAQ interaction
    trackFAQ(
      faqs[index].question,
      isCurrentlyOpen ? 'collapse' : 'expand'
    );

    setOpenIndex(newState);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-navy mb-4">
            Frequently Asked <span className="text-[#0092ff]">Questions</span>
          </h2>
          <p className="text-xl text-neutral4 max-w-2xl mx-auto">
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
                    className="relative max-w-[85%] sm:max-w-[75%] bg-[#0092ff] rounded-2xl rounded-br-sm px-5 py-3 text-left hover:bg-[#0082e6] transition-colors duration-200 focus:outline-none shadow-sm"
                    aria-expanded={openIndex === index}
                  >
                    <span className="block text-lg font-medium text-white">
                      {faq.question}
                    </span>
                    {/* Chat bubble tail */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 transform translate-x-1/2 translate-y-full"
                         style={{
                           borderStyle: 'solid',
                           borderWidth: '8px 0 0 8px',
                           borderColor: 'transparent transparent transparent #0092ff'
                         }}
                    />
                  </button>
                </div>

                {/* Answer Bubble */}
                <div
                  className={`flex justify-end transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'opacity-100 max-h-96 transform translate-y-0'
                      : 'opacity-0 max-h-0 transform -translate-y-2 overflow-hidden'
                  }`}
                >
                  <div className="relative max-w-[85%] sm:max-w-[75%] bg-gray-200 rounded-2xl rounded-bl-sm px-5 py-4">
                    <div className="brand-body1 font-medium text-navy whitespace-pre-line">
                      {faq.answer}
                      {faq.link && (
                        <>
                          {'\n\n'}
                          <a
                            href={faq.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0092ff] hover:underline"
                          >
                            {faq.link.text}
                          </a>
                        </>
                      )}
                    </div>
                    {/* Chat bubble tail */}
                    <div className="absolute bottom-0 left-0 w-0 h-0 transform -translate-x-1/2 translate-y-full"
                         style={{
                           borderStyle: 'solid',
                           borderWidth: '8px 8px 0 0',
                           borderColor: 'rgb(229 231 235) transparent transparent transparent'
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
