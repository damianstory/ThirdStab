'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { trackButtonClick } from '@/lib/analytics';

interface ActivityBadgeProps {
  expandedText: string;
  emoji?: string;
  onClick: () => void;
  collapseDelay?: number;
  className?: string;
}

export function ActivityBadge({
  expandedText,
  emoji = '🎉',
  onClick,
  collapseDelay = 3000,
  className,
}: ActivityBadgeProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Auto-collapse after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, collapseDelay);

    return () => clearTimeout(timer);
  }, [collapseDelay]);

  // Handle click: toggle state + track + scroll
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    trackButtonClick('Activity Badge', isExpanded ? 'Collapsed Click' : 'Expanded Click');
    onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={{
        expanded: {
          width: 'auto',
          height: 'auto',
          borderRadius: '24px',
        },
        collapsed: {
          width: '48px',
          height: '48px',
          borderRadius: '50%',
        }
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] // Material Design easing
      }}
      className={cn(
        'relative flex items-center justify-center',
        'transition-all duration-300',
        // Mobile-first touch targets
        'min-h-[48px]',
        // Expanded state styling
        isExpanded && 'px-5 py-3 gap-2',
        // Collapsed state styling
        !isExpanded && 'p-0',
        // Brand colors
        isExpanded ? 'bg-lightBlue/60 border border-brandBlue/30' : 'bg-brandBlue',
        // Hover effects
        'hover:shadow-lg',
        isExpanded ? 'hover:bg-lightBlue/80 hover:border-brandBlue/50' : 'hover:bg-brandBlue/90',
        // Focus states for accessibility
        'focus:outline-none focus:ring-2 focus:ring-brandBlue focus:ring-offset-2',
        // Cursor
        'cursor-pointer',
        className
      )}
      // Accessibility
      aria-label={isExpanded ? expandedText : 'New activity available - Click to learn more'}
      aria-expanded={isExpanded}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-base sm:text-lg font-medium text-navy">
              {emoji} {expandedText}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M5.33312 8.78141L1.75712 5.20541L0.814453 6.14808L5.99979 11.3334L11.1851 6.14808L10.2425 5.20541L6.66645 8.78141V0.666748H5.33312V8.78141Z"
                fill="currentColor"
                className="text-navy"
              />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <span className="text-xl text-white" aria-hidden="true">
              {emoji}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse ring animation on collapsed state */}
      {!isExpanded && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-brandBlue"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />
      )}
    </motion.button>
  );
}
