'use client';

import { useState, useCallback } from 'react';
import { type ProvinceStats, type CityPin } from '@/data/submission-stats';
import { CanadaMap } from './CanadaMap';
import { ProvincePanel } from './ProvincePanel';

interface CanadaMapSectionProps {
  provinceStats: ProvinceStats[];
  language: 'en' | 'fr';
}

export function CanadaMapSection({ provinceStats, language }: CanadaMapSectionProps) {
  const [selectedCity, setSelectedCity] = useState<CityPin | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Get province data by code
  const getProvinceData = useCallback(
    (code: string): ProvinceStats | null => {
      return provinceStats.find((p) => p.code === code) || null;
    },
    [provinceStats]
  );

  // Handle city click
  const handleCityClick = useCallback((city: CityPin) => {
    setSelectedCity(city);
    setIsPanelOpen(true);
  }, []);

  // Handle panel close
  const handleClosePanel = useCallback(() => {
    setIsPanelOpen(false);
    // Delay clearing selection for smoother animation
    setTimeout(() => {
      setSelectedCity(null);
    }, 200);
  }, []);

  const selectedProvinceData = selectedCity ? getProvinceData(selectedCity.province) : null;

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-offWhite">
          {/* Map container */}
          <div className="relative">
            <CanadaMap
              provinceStats={provinceStats}
              onCityClick={handleCityClick}
              selectedCity={selectedCity}
              language={language}
            />

            {/* Province Panel (overlays the map) */}
            <ProvincePanel
              isOpen={isPanelOpen}
              onClose={handleClosePanel}
              province={selectedProvinceData}
              selectedCity={selectedCity}
              language={language}
            />
          </div>
        </div>

        {/* Legend / Instructions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-brandBlue border-2 border-white shadow" />
            <span>{language === 'fr' ? 'Cliquez sur une \u00E9pingle' : 'Click a pin'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4">
              <div className="w-4 h-4 rounded-full bg-brandBlue border-2 border-white shadow" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-navy text-[6px] text-white flex items-center justify-center font-bold">3</div>
            </div>
            <span>{language === 'fr' ? 'Plusieurs commissions' : 'Multiple boards'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
