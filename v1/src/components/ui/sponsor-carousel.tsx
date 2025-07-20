'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

interface SponsorCarouselProps {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  circular?: boolean;
}

export function SponsorCarousel({
  children,
  gap = 24,
  duration = 30,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
  circular = true,
}: SponsorCarouselProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    
    // Don't start animation until we have size measurements
    if (!size) return;
    
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  const containerClasses = circular
    ? cn(
        'relative overflow-hidden',
        direction === 'horizontal' 
          ? 'h-[340px] sm:h-[360px] md:h-[380px] lg:h-[400px]' 
          : 'w-[340px] sm:w-[360px] md:w-[380px] lg:w-[400px]',
        className
      )
    : cn('overflow-hidden', className);

  const motionClasses = circular
    ? cn(
        'absolute inset-0 flex items-center justify-center',
        direction === 'horizontal' ? 'w-full' : 'h-full'
      )
    : 'flex w-max';

  return (
    <div className={containerClasses}>
      <motion.div
        className={motionClasses}
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {circular && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className={cn(
                "absolute",
                direction === 'horizontal' 
                  ? "left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10"
                  : "top-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-b from-white to-transparent z-10"
              )} 
            />
            <div 
              className={cn(
                "absolute",
                direction === 'horizontal'
                  ? "right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10"
                  : "bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-white to-transparent z-10"
              )} 
            />
          </div>
        )}
        {children}
        {children}
      </motion.div>
    </div>
  );
}