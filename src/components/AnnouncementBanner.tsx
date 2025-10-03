'use client';

import { HeroPill } from '@/components/ui/hero-pill';

export default function AnnouncementBanner() {
  const handleScrollToOctober = () => {
    const octoberCard = document.getElementById('october-activity-card');
    if (octoberCard) {
      const headerHeight = 64; // Height of fixed header
      const extraOffset = 250; // Extra offset to show cards below
      const elementPosition = octoberCard.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - extraOffset;

      // Custom smooth scroll with easing
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1800; // 1.8 seconds
      let start: number | null = null;

      const smoothScroll = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        // Ease-in-out cubic function for smooth animation
        const ease = percentage < 0.5
          ? 4 * percentage * percentage * percentage
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  };

  return (
    <div className="w-full bg-white pt-20 pb-4 flex justify-center items-center">
      <HeroPill
        onClick={handleScrollToOctober}
        label="Access it Here!"
        announcement="🎉 October Activity is Now Live"
      />
    </div>
  );
}
