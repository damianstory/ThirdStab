'use client';

import Image from 'next/image';
import { Activity } from '@/data/activities';

interface ActivityCardProps {
  activity: Activity;
  onComingSoonClick?: () => void;
}

export default function ActivityCard({ activity, onComingSoonClick }: ActivityCardProps) {
  const isActive = activity.status === 'active';
  const isComingSoon = activity.status === 'coming-soon';
  const isEnabled = activity.status === 'active' || activity.status === 'ongoing';

  // Dynamic logo sizing based on logoType
  const getLogoSize = () => {
    switch (activity.sponsor.logoType) {
      case 'tall':
        return 'w-20 h-20 lg:w-24 lg:h-24'; // Slightly smaller for tall logos
      case 'wide':
        return 'w-28 h-28 lg:w-32 lg:h-32'; // Larger for wide/compact logos
      case 'square':
      default:
        return 'w-24 h-24 lg:w-28 lg:h-28'; // Standard size for square logos
    }
  };

  // Dynamic padding based on logoType
  const getLogoPadding = () => {
    switch (activity.sponsor.logoType) {
      case 'tall':
        return 'p-2'; // Less padding for tall logos
      case 'wide':
        return 'p-4'; // More padding for wide logos to prevent cramping
      case 'square':
      default:
        return 'p-3'; // Standard padding
    }
  };

  const handleCardClick = () => {
    if (isComingSoon && onComingSoonClick) {
      onComingSoonClick();
    } else if (isEnabled) {
      // Navigate to activity page (will be implemented later)
      window.location.href = `/activities/${activity.slug}`;
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleCardClick();
  };

  // Button text based on status
  const getButtonText = () => {
    switch (activity.status) {
      case 'active':
        return 'View Activity';
      case 'ongoing':
        return 'Ongoing';
      case 'coming-soon':
      default:
        return 'Coming Soon';
    }
  };

  // Button styles based on status
  const getButtonStyles = () => {
    switch (activity.status) {
      case 'active':
        return 'bg-[#0092ff] text-white hover:bg-[#0080e6] active:scale-95';
      case 'ongoing':
        return 'bg-green-400 text-white hover:bg-green-500 active:scale-95';
      case 'coming-soon':
      default:
        return 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60';
    }
  };

  return (
    <div
      data-activity-id={activity.id}
      className={`
        relative bg-white rounded-2xl shadow-md p-6 transition-all duration-200 ease-in-out cursor-pointer
        h-full min-h-[260px] lg:min-h-[200px]
        hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
        ${isActive ? 'border-2 border-[#0092ff] scale-[1.02] shadow-lg' : 'border-2 border-transparent'}
        ${isComingSoon ? 'cursor-default' : ''}
      `}
      onClick={handleCardClick}
    >
      {/* Card Content */}
      <div className="flex flex-col h-full gap-4">
        {/* Top Section: Logo + Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
          {/* Sponsor Logo - 1/3 width on desktop */}
          <div className="flex justify-center lg:justify-start">
            <div className={`${getLogoSize()} relative rounded-lg overflow-hidden bg-gray-50`}>
              <Image
                src={activity.sponsor.logo}
                alt={activity.sponsor.name}
                fill
                className={`object-contain ${getLogoPadding()}`}
                sizes="(max-width: 1024px) 112px, 128px"
              />
            </div>
          </div>

          {/* Content Section - 2/3 width on desktop */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="brand-h4 text-[#22224C] mb-2 line-clamp-2">
              {activity.title}
            </h3>
            
            <p className="brand-body2 text-[#22224C] font-bold mb-3">
              {activity.month} {activity.year}
            </p>
            
            <p className="brand-body2 text-neutral-500 leading-relaxed line-clamp-3">
              {activity.description}
            </p>
          </div>
        </div>

        {/* Bottom Section: Button */}
        <div className="mt-auto">
          <button
            onClick={handleButtonClick}
            disabled={isComingSoon}
            className={`
              w-full px-8 py-3 rounded-lg font-medium transition-all duration-200
              min-h-[44px]
              ${getButtonStyles()}
            `}
          >
            {getButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
}