'use client';

import { HeroPill } from '@/components/ui/hero-pill';

export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-white pt-20 pb-4 flex justify-center items-center">
      <HeroPill
        href="/october"
        label="Access it Here!"
        announcement="🎉 October Activity is Now Live"
      />
    </div>
  );
}
