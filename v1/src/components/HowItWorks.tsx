"use client";

import { useState } from 'react';

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState<number | null>(null); // Only one step can be open at a time

  const steps = [
    {
      title: "Monthly Challenges Released",
      details: "Each month, a new industry partner releases a skill-building challenge designed to introduce students to occupations and opportunities in their industry."
    },
    {
      title: "Students Complete Activities",
      details: "Students individually work on the challenge, developing awareness of industry opportunities, relevant skills, post-secondary pathways, and more."
    },
    {
      title: "Submission Process",
      details: "Completed work is submitted and assessed against a rubric for review by the selection committee. Twenty submissions will selected each month."
    },
    {
      title: "Winners Selected & Rewarded",
      details: "Outstanding submissions receive micro grants and recognition from industry partners. $10,000 in micro grants are awarded EACH month, with extra particpation incentives available in June."
    }
  ];

  const toggleStep = (index: number) => {
    setOpenStep(prev => 
      prev === index ? null : index
    );
  };

  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-[#0092ff]">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting students to careers through self-directed, incentive driven skill building and industry awareness activities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-stretch">
          {/* Image placeholder */}
          <div className="w-full lg:w-2/5 flex-shrink-0">
            <div className="bg-gray-100 rounded-lg h-full min-h-[300px] overflow-hidden">
              <img 
                src="https://i.imgur.com/uha29PZ.png"
                alt="Students working on various industry challenges"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Accordion */}
          <div className="w-full lg:w-3/5">
            {steps.map((step, index) => (
              <div key={index} className={`${index < steps.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                  aria-expanded={openStep === index}
                  aria-controls={`step-${index}-content`}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transform transition-transform duration-300 ${
                      openStep === index ? 'rotate-180' : ''
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
                    openStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6">
                    <p className="text-base text-[#374151]">{step.details}</p>
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