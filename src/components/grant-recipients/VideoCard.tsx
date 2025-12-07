'use client';

import { VideoWinner } from '@/data/grant-recipients';

interface VideoCardProps {
  winner: VideoWinner;
  language?: 'en' | 'fr';
}

export default function VideoCard({ winner, language = 'en' }: VideoCardProps) {
  const gradeLabel = language === 'fr' ? 'Année' : 'Grade';

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 146, 255, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* YouTube Embed */}
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${winner.youtubeId}`}
          title={`${winner.schoolName} - ${gradeLabel} ${winner.grade}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Card Info */}
      <div className="p-4">
        {/* Grade Badge */}
        <div
          className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-2"
          style={{
            background: 'linear-gradient(135deg, #0092ff 0%, #006dd9 100%)',
          }}
        >
          {gradeLabel} {winner.grade}
        </div>

        {/* School Board */}
        <p className="text-navy font-medium text-sm mb-1 line-clamp-1">
          {winner.schoolBoard}
        </p>

        {/* School Name */}
        <p className="text-neutral5 text-sm mb-1 line-clamp-1">
          {winner.schoolName}
        </p>

        {/* Province */}
        <p className="text-neutral4 text-xs">
          {winner.province}
        </p>
      </div>
    </div>
  );
}
