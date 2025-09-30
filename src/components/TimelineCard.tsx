'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { validActivityMonths } from '@/data/activities';
import { useState } from 'react';
import Modal from '@/components/Modal';
import { X } from 'lucide-react';

interface TimelineItem {
  year: string;
  month: string;
  title: string;
  industry: string;
  description: string;
  status: string;
  sponsor?: {
    name: string;
    logo: string;
    logoType: 'tall' | 'wide' | 'square';
  };
  isPromotional?: boolean;
}

interface TimelineCardProps {
  item: TimelineItem;
  onComingSoonClick?: () => void;
}

export default function TimelineCard({ item, onComingSoonClick }: TimelineCardProps) {
  const router = useRouter();
  const [showVideoModal, setShowVideoModal] = useState(false);
  const isActive = item.status === 'confirmed';
  const isComingSoon = item.status === 'tba';
  const isEnabled = item.status === 'confirmed';

  // Check if this activity has a dedicated page
  const hasActivityPage = item.sponsor && validActivityMonths.includes(item.month.toLowerCase());

  // Check if this is the September promotional card that should show video
  const isSeptemberPromo = item.isPromotional && item.month === 'September' && item.year === '2025';

  // Consistent logo sizing for all logos
  const getLogoSize = () => {
    if (!item.sponsor) return '';
    return 'w-24 h-24 lg:w-28 lg:h-32'; // Consistent size for all logos with taller height on desktop
  };

  // Dynamic padding based on logoType (from ActivityCard)
  const getLogoPadding = () => {
    if (!item.sponsor) return '';
    switch (item.sponsor.logoType) {
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
    if (isComingSoon) {
      if (onComingSoonClick) {
        onComingSoonClick();
      } else {
        // Default behavior: scroll to stay-informed section with slower animation
        const stayInformedElement = document.getElementById('stay-informed');
        if (stayInformedElement) {
          const headerHeight = 64;
          const additionalOffset = 20;
          const elementPosition = stayInformedElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - additionalOffset;

          // Custom slower scroll implementation
          const startPosition = window.pageYOffset;
          const distance = offsetPosition - startPosition;
          const duration = 1500; // 1.5 seconds for slower scroll
          let start: number | null = null;
          
          const smoothScroll = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function for smoother animation (ease-in-out)
            const ease = percentage < 0.5 
              ? 2 * percentage * percentage 
              : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
            
            window.scrollTo(0, startPosition + (distance * ease));
            
            if (progress < duration) {
              requestAnimationFrame(smoothScroll);
            }
          };
          
          requestAnimationFrame(smoothScroll);
        }
      }
    } else if (hasActivityPage) {
      // Navigate to individual activity page
      router.push(`/${item.month.toLowerCase()}`);
    }
    // For confirmed promotional items without activity pages, no action
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Special handling for September promotional card - show video modal
    if (isSeptemberPromo) {
      setShowVideoModal(true);
      return;
    }

    handleCardClick();
  };

  // Button text based on status
  const getButtonText = () => {
    switch (item.status) {
      case 'confirmed':
        // Special case for September promotional month
        if (item.isPromotional && item.month === 'September' && item.year === '2025') {
          return 'Why We\'re Doing This';
        }
        // If it has an activity page, show "View Activity"
        if (hasActivityPage) {
          return 'View Activity';
        }
        return 'Learn More';
      case 'tba':
      default:
        return 'Coming Soon';
    }
  };

  // Button styles based on status
  const getButtonStyles = () => {
    switch (item.status) {
      case 'confirmed':
        return 'bg-[#0092ff] text-white hover:bg-[#0080e6] active:scale-95';
      case 'tba':
      default:
        return 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60';
    }
  };

  // September promotional video URL
  const videoEmbedUrl = 'https://www.youtube.com/embed/8LO2WRhsAOI';

  return (
    <>
      <div
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
        <div className={`${item.sponsor ? 'flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6' : 'flex flex-col gap-4'}`}>
          {/* Sponsor Logo - 1/3 width on desktop (only if sponsor exists) */}
          {item.sponsor && (
            <div className="flex justify-center lg:justify-start">
              <div className={`${getLogoSize()} relative rounded-lg overflow-hidden bg-gray-50`}>
                <Image
                  src={item.sponsor.logo}
                  alt={item.sponsor.name}
                  fill
                  className={`object-contain ${getLogoPadding()}`}
                  sizes="(max-width: 1024px) 112px, 128px"
                />
              </div>
            </div>
          )}

          {/* Content Section - 2/3 width on desktop when sponsor exists, full width otherwise */}
          <div className={`${item.sponsor ? 'lg:col-span-2' : ''} flex flex-col`}>
            {/* Year/Month */}
            <div className="text-[#0092ff] font-semibold mb-2">
              {item.year} {item.month}
            </div>
            
            {/* Activity Title - Always 2 lines */}
            <h4 className={`brand-h4 text-[#22224C] line-clamp-2 min-h-[3.5rem] leading-tight ${
              item.isPromotional && item.month === 'September' && item.year === '2025' 
                ? 'mb-1' 
                : 'mb-2'
            }`}>
              {item.title}
            </h4>
            
            {/* Industry Label */}
            {item.industry && (
              <p className="brand-body2 text-[#22224C] font-bold mb-3">
                {item.industry}
              </p>
            )}
          </div>
        </div>
        
        {/* Description - Full width below grid */}
        <div className="flex-1 mb-4">
          <p className={`brand-body2 text-neutral-500 leading-relaxed whitespace-pre-line ${
            item.isPromotional && item.month === 'September' && item.year === '2025' 
              ? '' 
              : 'line-clamp-4'
          }`}>
            {item.description}
          </p>
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

    {/* Video Modal */}
    {showVideoModal && isSeptemberPromo && (
      <Modal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        contentClassName="max-w-4xl"
      >
        <div className="bg-white rounded-2xl overflow-hidden relative">
          {/* Close button */}
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-200 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* YouTube embed */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={videoEmbedUrl}
              title="Why We're Doing This"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Modal>
    )}
    </>
  );
}