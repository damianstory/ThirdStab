'use client'

import { useState } from 'react'

interface SponsorCarouselCardProps {
  name: string
  logo: string
  type: 'activity' | 'incentive'
  month?: string
  onClick?: () => void
}

export default function SponsorCarouselCard({ 
  name, 
  logo, 
  type, 
  month,
  onClick 
}: SponsorCarouselCardProps) {
  const [imageError, setImageError] = useState(false)
  
  const typeStyles = {
    activity: {
      pill: 'bg-[#0092ff] text-white',
      border: 'border-[#0092ff]',
      label: 'Activity Sponsor'
    },
    incentive: {
      pill: 'bg-green-500 text-white',
      border: 'border-green-500',
      label: 'Incentive Sponsor'
    }
  }

  const currentStyle = typeStyles[type]

  return (
    <button
      onClick={onClick}
      className={`
        relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
        hover:scale-105 cursor-pointer group 
        w-[240px] h-[280px] sm:w-[260px] sm:h-[300px] md:w-[280px] md:h-[320px] 
        p-4 sm:p-5 md:p-6
        border-t-4 ${currentStyle.border} flex flex-col
      `}
      aria-label={`View sponsor information for ${name}`}
    >
      {/* Type Pill */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
        <span className={`inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${currentStyle.pill}`}>
          {currentStyle.label}
        </span>
      </div>

      {/* Logo Container */}
      <div className={`flex-1 flex items-center justify-center ${
        logo === 'https://i.imgur.com/nCuNSzS.png' 
          ? 'px-1 py-2 sm:px-2 sm:py-4 md:px-2 md:py-6' 
          : 'px-2 py-4 sm:px-3 sm:py-6 md:px-4 md:py-8'
      }`}>
        {!imageError ? (
          <img
            src={logo}
            alt={`${name} logo`}
            className={`${
              logo === 'https://i.imgur.com/nCuNSzS.png' 
                ? 'w-[200px] h-[200px] object-contain scale-150' 
                : logo === 'https://i.imgur.com/Cr2B9G6.png'
                  ? 'max-w-full max-h-[100px] sm:max-h-[125px] md:max-h-[150px] object-contain scale-[1.875]'
                  : 'max-w-full max-h-[80px] sm:max-h-[100px] md:max-h-[120px] object-contain'
            }`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-gray-400 text-center">
            <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">🏢</div>
            <div className="text-xs sm:text-sm">{name}</div>
          </div>
        )}
      </div>

      {/* Sponsor Info */}
      <div className="border-t pt-3 sm:pt-4 mt-auto">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 line-clamp-2">{name}</h3>
        {month && (
          <p className="text-xs sm:text-sm text-gray-600">{month}</p>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-xl bg-[#0092ff] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
    </button>
  )
}