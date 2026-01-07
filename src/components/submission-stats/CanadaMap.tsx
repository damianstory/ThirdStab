'use client';

import { useEffect, useId } from 'react';
import { Map, MapMarker, MarkerContent, MarkerTooltip, MapControls, useMap } from '@/components/ui/map';
import { type ProvinceStats, type CityPin } from '@/data/submission-stats';

interface CanadaMapProps {
  provinceStats: ProvinceStats[];
  onCityClick: (city: CityPin) => void;
  selectedCity: CityPin | null;
  language: 'en' | 'fr';
}

// Canada center coordinates [lng, lat]
const CANADA_CENTER: [number, number] = [-96.0, 56.0];
const CANADA_ZOOM = 3;

// Canada provinces GeoJSON URL (simplified boundaries)
const CANADA_PROVINCES_GEOJSON = 'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/canada.geojson';

// Component to add province boundary lines
function ProvinceBoundaries() {
  const { map, isLoaded } = useMap();
  const id = useId();
  const sourceId = `provinces-source-${id}`;
  const layerId = `provinces-layer-${id}`;

  useEffect(() => {
    if (!isLoaded || !map) return;

    // Add the province boundaries source and layer
    const addLayer = async () => {
      try {
        // Check if source already exists
        if (map.getSource(sourceId)) return;

        // Fetch the GeoJSON
        const response = await fetch(CANADA_PROVINCES_GEOJSON);
        const geojson = await response.json();

        // Add source
        map.addSource(sourceId, {
          type: 'geojson',
          data: geojson,
        });

        // Add line layer for borders
        map.addLayer({
          id: layerId,
          type: 'line',
          source: sourceId,
          paint: {
            'line-color': '#22224C',
            'line-width': 1.5,
            'line-opacity': 0.4,
          },
        });
      } catch (error) {
        console.error('Failed to load province boundaries:', error);
      }
    };

    addLayer();

    return () => {
      try {
        if (map.getLayer(layerId)) map.removeLayer(layerId);
        if (map.getSource(sourceId)) map.removeSource(sourceId);
      } catch {
        // ignore cleanup errors
      }
    };
  }, [isLoaded, map, sourceId, layerId]);

  return null;
}

export function CanadaMap({
  provinceStats,
  onCityClick,
  selectedCity,
}: CanadaMapProps) {
  // Get all city pins from province stats
  const allCityPins = provinceStats.flatMap(p => p.cities);

  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-navy/10">
      <Map
        center={CANADA_CENTER}
        zoom={CANADA_ZOOM}
        minZoom={2}
        maxZoom={12}
      >
        <MapControls position="bottom-right" showZoom={true} />
        <ProvinceBoundaries />

        {allCityPins.map((city) => {
          const isSelected = selectedCity?.city === city.city &&
                            selectedCity?.province === city.province;

          return (
            <MapMarker
              key={`${city.province}-${city.city}`}
              longitude={city.coordinates.lng}
              latitude={city.coordinates.lat}
              onClick={() => onCityClick(city)}
            >
              <MarkerContent>
                <div
                  className={`
                    relative cursor-pointer transition-transform duration-200
                    ${isSelected ? 'scale-110' : 'hover:scale-105'}
                  `}
                  style={{ marginBottom: '-36px' }}
                >
                  {/* Teardrop pin marker */}
                  <svg
                    width="28"
                    height="36"
                    viewBox="0 0 28 36"
                    className="drop-shadow-lg"
                  >
                    {/* Teardrop body */}
                    <path
                      d="M14 0C6.268 0 0 6.268 0 14c0 7.732 14 22 14 22s14-14.268 14-22C28 6.268 21.732 0 14 0z"
                      className={isSelected ? 'fill-navy' : 'fill-brandBlue'}
                    />
                    {/* Inner circle - light center */}
                    <circle cx="14" cy="12" r="6" className="fill-lightBlue" />
                    {/* Inner ring */}
                    <circle cx="14" cy="12" r="4" className="fill-white/80" />
                  </svg>

                  {/* Count badge for multiple boards */}
                  {city.boardCount > 1 && (
                    <div className="absolute -top-1 right-0 w-5 h-5 rounded-full bg-navy border-2 border-white flex items-center justify-center shadow-md">
                      <span className="text-[10px] font-bold text-white">
                        {city.boardCount}
                      </span>
                    </div>
                  )}
                </div>
              </MarkerContent>

              <MarkerTooltip>
                <div className="text-center max-w-[220px]">
                  {city.schoolBoards.slice(0, 3).map((board, i) => (
                    <p key={i} className="text-xs font-medium truncate">
                      {board.schoolBoard}
                    </p>
                  ))}
                  {city.schoolBoards.length > 3 && (
                    <p className="text-xs opacity-70 mt-1">
                      +{city.schoolBoards.length - 3} more
                    </p>
                  )}
                </div>
              </MarkerTooltip>
            </MapMarker>
          );
        })}
      </Map>
    </div>
  );
}
