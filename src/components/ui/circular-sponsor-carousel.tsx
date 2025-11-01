"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { trackButtonClick } from "@/lib/analytics";

interface SponsorCard {
  id: string;
  name: string;
  logo: string;
  type: 'activity' | 'incentive';
  month?: string;
}

interface CircularSponsorCarouselProps {
  sponsors: SponsorCard[];
  autoplay?: boolean;
  onCardClick?: (sponsor: SponsorCard) => void;
  language?: 'en' | 'fr';
}

// Localized pill labels
const pillLabels = {
  en: {
    activity: 'Activity Sponsor',
    incentive: 'Incentive Sponsor'
  },
  fr: {
    activity: "Commanditaire d'activité",
    incentive: 'Commanditaire de récompense'
  }
};

function calculateGap(width: number) {
  const minWidth = 768;
  const maxWidth = 1456;
  const minGap = 80;
  const maxGap = 200;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularSponsorCarousel = ({
  sponsors,
  autoplay = true,
  onCardClick,
  language = 'en',
}: CircularSponsorCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});
  const [isMounted, setIsMounted] = useState(false);

  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const sponsorsLength = useMemo(() => sponsors?.length || 0, [sponsors]);

  // Client-side mounting guard
  useEffect(() => {
    console.log('[CircularSponsorCarousel] Mounting component...');
    setIsMounted(true);
    console.log('[CircularSponsorCarousel] Component mounted, sponsors:', sponsors?.length);
  }, [sponsors]);

  // Responsive gap calculation - moved BEFORE early returns
  useEffect(() => {
    if (!isMounted) return;

    function handleResize() {
      if (carouselContainerRef.current) {
        const width = carouselContainerRef.current.offsetWidth;
        setContainerWidth(width);
      }
    }
    handleResize();
    // Small delay to ensure proper measurement
    setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMounted]);

  // Autoplay - moved BEFORE early returns
  useEffect(() => {
    if (!isMounted || !autoplay) return;

    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sponsorsLength);
    }, 2000);

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [isMounted, autoplay, sponsorsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % sponsorsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [sponsorsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + sponsorsLength) % sponsorsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [sponsorsLength]);

  // Keyboard navigation - moved BEFORE early returns
  useEffect(() => {
    if (!isMounted) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [isMounted, activeIndex, sponsorsLength, handlePrev, handleNext]);

  // ALL HOOKS ARE NOW ABOVE - Early returns below

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className="w-full max-w-[1456px] mx-auto py-8">
        <div className="relative">
          <div className="relative h-[340px] sm:h-[380px] md:h-[420px] lg:h-[460px] w-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0092ff]"></div>
              <div className="text-neutral4 text-sm">Loading sponsors...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Early return if no sponsors (after mount check)
  if (!sponsors || sponsors.length === 0) {
    return (
      <div className="w-full max-w-[1456px] mx-auto py-8">
        <div className="relative">
          <div className="relative h-[340px] sm:h-[380px] md:h-[420px] lg:h-[460px] w-full flex items-center justify-center">
            <div className="text-neutral4 text-sm">No sponsors available</div>
          </div>
        </div>
      </div>
    );
  }

  // Compute transforms for each card
  function getCardStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.5;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + sponsorsLength) % sponsorsLength === index;
    const isRight = (activeIndex + 1) % sponsorsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto" as const,
        transform: `translate(-50%, -50%) translate3d(0px, 0px, 0px) scale(1) rotateY(0deg)`,
        transformOrigin: 'center center',
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.8,
        pointerEvents: "auto" as const,
        transform: `translate(-50%, -50%) translate3d(-${gap}px, -${maxStickUp}px, -100px) scale(0.75) rotateY(25deg)`,
        transformOrigin: 'center center',
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.8,
        pointerEvents: "auto" as const,
        transform: `translate(-50%, -50%) translate3d(${gap}px, -${maxStickUp}px, -100px) scale(0.75) rotateY(-25deg)`,
        transformOrigin: 'center center',
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other cards
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none" as const,
      transform: `translate(-50%, -50%) translate3d(0px, 0px, -200px) scale(0.5)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  const typeStyles = {
    activity: {
      pill: 'bg-[#0092ff] text-white',
      border: 'border-[#0092ff]',
      label: pillLabels[language].activity
    },
    incentive: {
      pill: 'bg-green-500 text-white',
      border: 'border-green-500',
      label: pillLabels[language].incentive
    }
  };

  // Handle sponsor card click with tracking
  const handleSponsorClick = (sponsor: SponsorCard) => {
    // Track the sponsor card click
    trackButtonClick(
      `Sponsor Card - ${sponsor.name}`,
      `Carousel - ${sponsor.type} - ${sponsor.month || 'No Month'}`
    );

    // Navigate to the Notion page
    window.open('https://www.notion.so/Industry-Immersion-Series-Sponsors-23af4a4d79df801ba06eebcd7035537d?source=copy_link', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-[1456px] mx-auto py-8">
      <div className="relative">
        {/* Cards Container */}
        <div
          ref={carouselContainerRef}
          className="relative h-[340px] sm:h-[380px] md:h-[420px] lg:h-[460px] w-full"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d'
          }}
        >
          {sponsors.map((sponsor, index) => {
            const currentStyle = typeStyles[sponsor.type];
            return (
              <div
                key={sponsor.id}
                className={`
                  absolute bg-white rounded-2xl shadow-2xl cursor-pointer
                  w-[260px] h-[300px] sm:w-[280px] sm:h-[320px] md:w-[300px] md:h-[340px] lg:w-[320px] lg:h-[360px]
                  border-t-4 ${currentStyle.border} flex flex-col p-5
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                `}
                style={{
                  ...getCardStyle(index),
                  top: '50%',
                  left: '50%',
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => handleSponsorClick(sponsor)}
              >
                {/* Type Pill */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium leading-none whitespace-nowrap ${currentStyle.pill}`}>
                    {currentStyle.label}
                  </span>
                </div>

                {/* Logo Container */}
                <div className="flex-1 flex items-center justify-center px-4 py-8">
                  {!imageError[sponsor.id] ? (
                    <div className={`relative w-full ${
                      sponsor.type === 'activity' ? (() => {
                        switch (sponsor.logo) {
                          case '/logo1.gif': return 'h-[131px]'; // 25% bigger
                          case '/logo2.jpeg': return 'h-[131px]'; // 25% bigger
                          case '/logo2.png': return 'h-[84px]'; // Skills Competences Canada - 20% smaller
                          case '/logo3.png': return 'h-[79px]'; // 25% smaller
                          case '/logo5.png': return 'h-[115px]'; // 10% bigger
                          case '/logo7.png': return 'h-[58px]'; // 45% smaller (was 50% smaller, made 10% bigger)
                          case '/logo8.png': return 'h-[79px]'; // 25% smaller
                          default: return 'h-[105px]'; // default size
                        }
                      })() : 'h-[105px]' // default for incentive sponsors
                    }`}>
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        fill
                        className="object-contain"
                        onError={() => setImageError({...imageError, [sponsor.id]: true})}
                      />
                    </div>
                  ) : (
                    <div className="text-gray-400 text-center">
                      <div className="text-5xl mb-2">🏢</div>
                      <div className="text-sm">{sponsor.name}</div>
                    </div>
                  )}
                </div>

                {/* Sponsor Info */}
                <div className="border-t pt-4 mt-auto text-center">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {sponsor.type === 'activity' ? sponsor.month : sponsor.name}
                  </h3>
                  {sponsor.type === 'incentive' && sponsor.month && (
                    <p className="text-sm text-gray-600">{sponsor.month}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-gray-300"
            onClick={handlePrev}
            style={{
              backgroundColor: hoverPrev ? '#0092ff' : '#ffffff',
              borderColor: hoverPrev ? '#0092ff' : '#e5e7eb'
            }}
            onMouseEnter={() => setHoverPrev(true)}
            onMouseLeave={() => setHoverPrev(false)}
            aria-label="Previous sponsor"
          >
            <ArrowLeft size={20} className={hoverPrev ? "text-white" : "text-gray-700"} />
          </button>
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-gray-300"
            onClick={handleNext}
            style={{
              backgroundColor: hoverNext ? '#0092ff' : '#ffffff',
              borderColor: hoverNext ? '#0092ff' : '#e5e7eb'
            }}
            onMouseEnter={() => setHoverNext(true)}
            onMouseLeave={() => setHoverNext(false)}
            aria-label="Next sponsor"
          >
            <ArrowRight size={20} className={hoverNext ? "text-white" : "text-gray-700"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CircularSponsorCarousel;
