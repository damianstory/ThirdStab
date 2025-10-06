'use client';

import { useState } from 'react';
import { ActivityPageData, getCurrentStatus } from '@/data/activities';
import Modal from '@/components/Modal';
import { X } from 'lucide-react';
import { trackExternalLink } from '@/lib/analytics';

interface ActivityDetailAndRubricProps {
  activity: ActivityPageData;
}

export default function ActivityDetailAndRubric({ activity }: ActivityDetailAndRubricProps) {
  const currentStatus = getCurrentStatus(activity.month, activity.year);
  const isActive = currentStatus === 'active';
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Track rubric link clicks
  const handleRubricClick = (location: string, e: React.MouseEvent) => {
    e.preventDefault();
    trackExternalLink(
      'https://claude.ai/public/artifacts/a00eb95e-7d81-4043-a3c5-781a040b4e05',
      `View Detailed Rubric - ${location} - ${activity.month}`
    );
    window.open('https://claude.ai/public/artifacts/a00eb95e-7d81-4043-a3c5-781a040b4e05', '_blank', 'noopener,noreferrer');
  };

  // Track submission link clicks
  const handleSubmissionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackExternalLink(
      'https://www.surveymonkey.com/r/K2W32NQ',
      `Submit Activity - Step 6 - ${activity.month}`
    );
    window.open('https://www.surveymonkey.com/r/K2W32NQ', '_blank', 'noopener,noreferrer');
  };

  const steps = [
    {
      title: "Step 1 - Career Spotlight",
      details: "Start by identifying a specific role within the mining industry, for example: Environmental Scientist, Mining Engineer, Data Analyst, Technical Services Specialist, etc. There are MANY to choose from.\n\nYou can use the MiHR Resources below, and/or do your own research, but you need to be able to cite your sources.\n\nImportant: Select one specific role. Research it.\n\n<strong>Then explain what someone in that role is generally responsible for on a day to day basis.</strong>"
    },
    {
      title: "Step 2 - Skills Focus",
      details: "<strong>Highlight 2-3 skills or competencies that are required in that role.</strong>\n\nThese could be transferable or durable skills like critical thinking, and/or more specific technical skills that are unique to the role."
    },
    {
      title: "Step 3 - Pathways to Work",
      details: "<strong>Explain the potential post-secondary pathways and training options required to work in that position.</strong>\n\nFor example, does that role require an apprenticeship, college or university level education? Are there specific certifications that are required?"
    },
    {
      title: "Step 4 - Sustainability Focus",
      details: "<strong>Describe specific actions the mining industry is taking as part of their commitment to sustainability and its importance to reaching Canada's environmental goals.</strong>\n\nFor example, integration of renewable energy and eco-friendly equipment, strategic investments in northern infrastructure, and strong collaboration with Indigenous communities to advance responsible land management and nature-positive goals, etc."
    },
    {
      title: "Step 5 - Future Outlook",
      details: "MiHR's research shows 80,000 new workers are needed in the industry by 2030.\n\n<strong>Explain the outlook for the role you have identified. Where are the jobs in Canada? Is there a higher demand for it in one part of the country than another?</strong>"
    },
    {
      title: "Step 6 - Submit",
      details: "<strong>Take the research you have just completed in steps 1-5 and use it to create a 60-90 second video.</strong>\n\nHow you choose to structure your video is up to you.\n\n• Vertical vs. horizontal? Up to you.\n• Talking head vs. all animations? Up to you.\n• Documentary style vs. tiktok style? Up to you.\n\nThe only requirements are that it addresses each of the 5 steps above, and we're able to click a link to watch it - everything else is - up to you.\n\nScore 75 or higher on the rubric, and you'll be entered into the pool of students who will then be randomly selected to earn one of twenty micro grants.\n\nSomebody has to win. Why not you? Why not now?",
      hasLinks: true // Flag to render custom links
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
              <p
                className="brand-body1 text-neutral-500 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: activity.activityDetail.description }}
              />
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
                      openStep === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-6">
                      {/* Special rendering for Step 6 with tracked links */}
                      {(step as any).hasLinks ? (
                        <div className="brand-body2 text-neutral-500 whitespace-pre-line">
                          <p dangerouslySetInnerHTML={{ __html: step.details }} />

                          <p className="mt-4">
                            📝 <a
                              href="https://claude.ai/public/artifacts/a00eb95e-7d81-4043-a3c5-781a040b4e05"
                              onClick={(e) => handleRubricClick('Step 6', e)}
                              className="text-[#0092ff] hover:text-blue-700 underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Detailed Evaluation Rubric Here
                            </a>
                          </p>

                          <div className="mt-12 flex justify-center">
                            <button
                              onClick={handleSubmissionClick}
                              className="gradient-submit-button"
                            >
                              🚀 Submit Your Video
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p
                          className="brand-body2 text-neutral-500 whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: step.details }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How this Works and Rubric - Right Column (1/3 width) */}
          <div className="lg:col-span-1">
            {/* How this Works */}
            <div className="bg-gradient-to-b from-[#F8FAFB] to-white border-2 border-[#0092ff] rounded-2xl p-6 lg:p-8 mb-8 lg:mt-20">
              <button
                onClick={() => setShowVideoModal(true)}
                className="w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg active:scale-95 whitespace-nowrap"
              >
                Watch: How this Works
              </button>
            </div>

            {/* Rubric */}
            <div className="bg-white border border-neutral2 rounded-xl overflow-hidden mt-8 lg:mt-32">
              <div className="bg-[#0092ff] text-white px-4 py-3">
                <h3 className="font-semibold text-lg">Evaluation Rubric Summary</h3>
                <p className="text-sm opacity-90">Total: {activity.rubric.totalPoints} points</p>
              </div>

              <div className="divide-y divide-neutral2">
                {activity.rubric.criteria.map((criterion, index) => (
                  <div key={index} className="p-4">
                    {(criterion as any).isLink ? (
                      <div className="text-center">
                        <a
                          href="https://claude.ai/public/artifacts/a00eb95e-7d81-4043-a3c5-781a040b4e05"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => handleRubricClick('Rubric Card', e)}
                          className="text-[#0092ff] hover:text-blue-700 font-medium text-sm underline"
                        >
                          {criterion.category}
                        </a>
                      </div>
                    ) : (
                      <>
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
                      </>
                    )}
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
