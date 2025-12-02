import { SponsorPageData } from '@/data/sponsors';

interface SponsorHeroProps {
  sponsor: SponsorPageData;
  language?: 'en' | 'fr';
}

export default function SponsorHero({ sponsor, language = 'en' }: SponsorHeroProps) {
  return (
    <section className="bg-navy py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Sponsor Name */}
        <h1 className="brand-h1 text-white mb-4">
          {sponsor.name}
        </h1>

        {/* Tagline */}
        <p className="brand-body1 text-white/80 max-w-2xl mx-auto">
          {sponsor.hero.tagline}
        </p>
      </div>
    </section>
  );
}
