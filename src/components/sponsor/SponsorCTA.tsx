import { SponsorPageData } from '@/data/sponsors';
import { ExternalLink } from 'lucide-react';

interface SponsorCTAProps {
  sponsor: SponsorPageData;
  language?: 'en' | 'fr';
}

export default function SponsorCTA({ sponsor, language = 'en' }: SponsorCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-navy to-[#1a1a3a]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="brand-h2 text-white mb-8">
          {language === 'fr' ? 'En savoir plus' : 'Learn More'}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA */}
          <a
            href={sponsor.cta.primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brandBlue text-white font-semibold py-4 px-8 rounded-full hover:bg-brandBlue/90 transition-colors"
          >
            {sponsor.cta.primaryLabel}
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Secondary CTA (if available) */}
          {sponsor.cta.secondaryLabel && sponsor.cta.secondaryUrl && (
            <a
              href={sponsor.cta.secondaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-4 px-8 rounded-full hover:bg-white/20 transition-colors border border-white/30"
            >
              {sponsor.cta.secondaryLabel}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
