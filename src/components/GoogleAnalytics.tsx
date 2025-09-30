'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ReactGA from 'react-ga4';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (!measurementId) {
      console.warn('GA4 Measurement ID not found in environment variables');
      return;
    }

    // Initialize GA4
    ReactGA.initialize(measurementId);
    console.log('GA4 initialized with measurement ID:', measurementId);
  }, []);

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

      // Track page view
      ReactGA.send({ hitType: 'pageview', page: url });
      console.log('GA4 page view tracked:', url);
    }
  }, [pathname, searchParams]);

  return null;
}
