"use client";

import { useState } from 'react';

export default function HowItWorks() {
  const [openSteps, setOpenSteps] = useState<number[]>([0]); // Step 1 open by default

  const steps = [
    {
      title: "Monthly Industry Challenges Released",
      brief: "Each month, a new industry sponsor releases a skill-building challenge",
      details: "Challenges are designed by industry professionals to teach real-world skills relevant to their field"
    },
    {
      title: "Students Complete Activities",
      brief: "Students work on challenges individually or in groups during the month",
      details: "Activities include research, creative projects, problem-solving tasks, and skill demonstrations"
    },
    {
      title: "Submit Your Work",
      brief: "Students submit completed work via Google Forms by the monthly deadline",
      details: "Submissions are reviewed by industry professionals and educators for quality and creativity"
    },
    {
      title: "Winners Receive Microgrants",
      brief: "Selected students receive $500 microgrants and recognition",
      details: "20 winners chosen monthly, with additional prizes for completion and participation milestones"
    }
  ];

  const toggleStep = (index: number) => {
    setOpenSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From monthly challenges to skill development, here's how students participate in our industry immersion program.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Image placeholder */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="bg-gray-200 rounded-lg aspect-[4/3] lg:aspect-square flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                [Illustration: Students working on various industry challenges]
              </p>
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full lg:w-3/5">
            {steps.map((step, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-expanded={openSteps.includes(index)}
                  aria-controls={`step-${index}-content`}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-600">{step.brief}</p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transform transition-transform duration-300 ${
                      openSteps.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  id={`step-${index}-content`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openSteps.includes(index) ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}