'use client';

import { useState } from 'react';
import { ActivityPageData, getCurrentStatus } from '@/data/activities';
import Modal from '@/components/Modal';
import { X } from 'lucide-react';

interface ActivityDetailAndRubricProps {
  activity: ActivityPageData;
}

export default function ActivityDetailAndRubric({ activity }: ActivityDetailAndRubricProps) {
  const currentStatus = getCurrentStatus(activity.month, activity.year);
  const isActive = currentStatus === 'active';
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const steps = [
    {
      title: "Step 1 - Career Spotlight",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      title: "Step 2 - Skills Focus", 
      details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
    },
    {
      title: "Step 3 - Pathways to Work",
      details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
    },
    {
      title: "Step 4 - Sustainability Focus",
      details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
    },
    {
      title: "Step 5 - Future Outlook",
      details: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
    },
    {
      title: "Step 6 - Submit",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    }
  ];

  const toggleStep = (index: number) => {
    setOpenStep(prev => 
      prev === index ? null : index
    );
  };
  
  return (
    <section className="py-16 lg:py-20 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Activity Detail - Left Column (2/3 width) */}
          <div className="lg:col-span-2">
            <h2 className="brand-h2 text-[#22224C] mb-6">
              Activity Details
            </h2>
            
            {/* Description */}
            <div className="mb-8">
              <p className="brand-body1 text-neutral-500 leading-relaxed mb-6">
                {activity.activityDetail.description}
              </p>
            </div>
            
            {/* Accordion Steps */}
            <div>
              {steps.map((step, index) => (
                <div key={index} className={`${index < steps.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <button
                    onClick={() => toggleStep(index)}
                    className="w-full py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                    aria-expanded={openStep === index}
                    aria-controls={`step-${index}-content`}
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="brand-h4 text-[#22224C] mb-4">
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
                      <p className="brand-body2 text-neutral-500">{step.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* How this Works and Rubric - Right Column (1/3 width) */}
          <div className="lg:col-span-1">
            {/* How this Works */}
            <div className="bg-gradient-to-b from-[#F8FAFB] to-white border-2 border-[#0092ff] rounded-2xl p-6 lg:p-8 mb-8 lg:mt-16">
              <button
                onClick={() => setShowVideoModal(true)}
                className="w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg active:scale-95"
              >
                How this Works
              </button>
            </div>
            
            {/* Rubric */}
            <div className="bg-white border border-neutral2 rounded-xl overflow-hidden mt-8 lg:mt-36">
              <div className="bg-[#0092ff] text-white px-4 py-3">
                <h3 className="font-semibold text-lg">Evaluation Rubric</h3>
                <p className="text-sm opacity-90">Total: {activity.rubric.totalPoints} points</p>
              </div>
              
              <div className="divide-y divide-neutral2">
                {activity.rubric.criteria.map((criterion, index) => (
                  <div key={index} className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-[#22224C] text-sm">
                        {criterion.category}
                      </h4>
                      <span className="text-[#0092ff] font-semibold text-sm ml-2">
                        {criterion.weight}%
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <Modal
          isOpen={showVideoModal}
          onClose={() => setShowVideoModal(false)}
          contentClassName="max-w-4xl"
        >
          <div className="bg-white rounded-2xl overflow-hidden relative">
            {/* YouTube embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={activity.video.embedUrl}
                title={activity.video.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}