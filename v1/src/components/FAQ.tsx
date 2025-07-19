'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What exactly is the Industry Immersion Series?",
      answer: "Think of it as a monthly challenge where real companies give you cool projects to work on! Each month, a different industry partner creates a skill-building activity that helps you learn what it's actually like to work in their field. Plus, you can win money for participating! 💰"
    },
    {
      question: "How much money can I actually win?",
      answer: "Each month, 20 students win $500 microgrants - that's $10,000 given away every month! If you complete all 8 monthly activities, you're eligible for even more prizes. And the best part? It's completely free to participate."
    },
    {
      question: "Do I need any special skills or experience?",
      answer: "Nope! These activities are designed for students in grades 7-12, regardless of your experience level. The whole point is to LEARN new skills, not to already have them. Companies want to see your creativity and effort, not perfection."
    },
    {
      question: "How much time do I need to spend on each activity?",
      answer: "Most activities are designed to take a few hours spread over the month. You can work on them in your spare time, on weekends, or even as part of a school project if your teacher is cool with it. No all-nighters required! 😴"
    },
    {
      question: "Is this program safe for students?",
      answer: "Absolutely! All industry partners are vetted companies, and student submissions are handled through secure Google Forms. We never share personal student information with sponsors - only the work they choose to submit."
    },
    {
      question: "Are there any costs for schools or students?",
      answer: "Zero costs! This program is completely free for students, educators, and schools. Our industry sponsors cover all program costs because they believe in investing in student development."
    },
    {
      question: "How do I submit my completed work?",
      answer: "Each activity comes with a Google Form link for submission. Just follow the instructions provided with each month's challenge - it's super straightforward!"
    },
    {
      question: "When will I find out if I won a microgrant?",
      answer: "Winners are typically announced within 2-3 weeks after each month's submission deadline. All participants will be notified via email whether they won or not."
    },
    {
      question: "Can students from any province participate?",
      answer: "Yes! This program is open to all Canadian students in grades 7-12, regardless of which province or territory they're in."
    },
    {
      question: "Who are the industry sponsors?",
      answer: "We're working with amazing companies across different industries! The first people to find out which companies are participating will be those on our mailing list. Sign up to be in the know! 👀"
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