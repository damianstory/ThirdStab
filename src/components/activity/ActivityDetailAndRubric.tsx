'use client';

import { ActivityPageData, getCurrentStatus } from '@/data/activities';
import CountdownTimer from './CountdownTimer';

interface ActivityDetailAndRubricProps {
  activity: ActivityPageData;
}

export default function ActivityDetailAndRubric({ activity }: ActivityDetailAndRubricProps) {
  const currentStatus = getCurrentStatus(activity.month, activity.year);
  const isActive = currentStatus === 'active';
  
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
            
            {/* Requirements */}
            <div className="mb-8">
              <h3 className="brand-h4 text-[#22224C] mb-4">Requirements</h3>
              <ul className="space-y-3">
                {activity.activityDetail.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#0092ff] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="brand-body2 text-neutral-500">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Deliverables */}
            <div>
              <h3 className="brand-h4 text-[#22224C] mb-4">Deliverables</h3>
              <ul className="space-y-3">
                {activity.activityDetail.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#0092ff] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="brand-body2 text-neutral-500">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Rubric and Submission - Right Column (1/3 width) */}
          <div className="lg:col-span-1">
            {/* Submission Area */}
            <div className="bg-gradient-to-b from-[#F8FAFB] to-white border-2 border-[#0092ff] rounded-2xl p-6 lg:p-8 mb-8 lg:sticky lg:top-20">
              {/* Countdown Timer (Active months only) */}
              {isActive && (
                <div className="mb-6">
                  <CountdownTimer deadline={activity.submission.deadline} />
                </div>
              )}
              
              {/* Submit Button */}
              <button
                onClick={() => window.open(activity.submission.googleFormUrl, '_blank')}
                disabled={!isActive}
                className={`
                  w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 mb-4
                  ${isActive 
                    ? 'bg-[#0092ff] text-white hover:bg-[#0080e6] hover:-translate-y-1 hover:shadow-lg active:scale-95' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                  }
                `}
              >
                {isActive ? 'Submit Your Activity' : 'Submissions Not Open'}
              </button>
              
              {/* Submission Instructions */}
              <p className="text-sm text-neutral-500 text-center">
                {activity.submission.instructions}
              </p>
            </div>
            
            {/* Rubric */}
            <div className="bg-white border border-neutral2 rounded-xl overflow-hidden">
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
    </section>
  );
}