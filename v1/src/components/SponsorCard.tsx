'use client'

interface SponsorCardProps {
  text: string
  onClick: () => void
  className?: string
}

export default function SponsorCard({ text, onClick, className = '' }: SponsorCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-100
        hover:translate-y-[-2px] cursor-pointer group min-h-[100px] p-6
        border-t-4 border-[#0092ff] ${className}
      `}
      aria-label={`View sponsor information for ${text}`}
    >
      <div className="flex items-center justify-center h-full">
        <span className="text-gray-700 text-center font-medium text-base sm:text-lg">
          {text}
        </span>
      </div>
    </button>
  )
}