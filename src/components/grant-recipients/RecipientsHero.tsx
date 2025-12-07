'use client';

interface RecipientsHeroProps {
  language?: 'en' | 'fr';
}

export default function RecipientsHero({ language = 'en' }: RecipientsHeroProps) {
  const subtitle = language === 'fr'
    ? "Célébrons les élèves qui ont donné vie à leur exploration de carrière par la vidéo"
    : 'Celebrating the students who brought their career exploration to life through video';

  return (
    <section
      className="relative pt-24 pb-12 md:pt-28 md:pb-16"
      style={{
        background: 'linear-gradient(180deg, #F6F6FF 0%, #E8F4FF 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="brand-h1 text-navy mb-4">
          {language === 'fr' ? (
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #0092ff 0%, #006dd9 100%)',
              }}
            >
              Boursiers
            </span>
          ) : (
            <>
              <span>Grant </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #0092ff 0%, #006dd9 100%)',
                }}
              >
                Recipients
              </span>
            </>
          )}
        </h1>
        <p className="brand-body1 text-neutral5 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
