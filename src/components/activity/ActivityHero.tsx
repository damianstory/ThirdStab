import { ActivityPageData } from '@/data/activities';

interface ActivityHeroProps {
  activity: ActivityPageData;
  contentClassName?: string;
  accentColor?: string;
}

export default function ActivityHero({ activity, contentClassName, accentColor }: ActivityHeroProps) {
  // Determine background image - use activity-specific or fallback to default
  const backgroundImage = activity.hero.backgroundImage || '/activity-hero-mining.webp';

  return (
    <section className="relative min-h-[560px] md:min-h-[660px] lg:min-h-[780px] overflow-hidden">
      {/* Background Image Layer - starts below fixed header */}
      <div
        className={`absolute inset-0 top-16 ${activity.hero.backgroundPosition ? '' : 'activity-hero-bg-mobile md:activity-hero-bg-desktop'} bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          ...(activity.hero.backgroundPosition ? { backgroundPosition: activity.hero.backgroundPosition } : {}),
        }}
      />

      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 top-16 activity-hero-gradient-mobile md:activity-hero-gradient-desktop" />
      
      {/* Content Layer */}
      <div className={`relative z-10 w-full flex min-h-[560px] md:min-h-[660px] lg:min-h-[780px] flex-col items-center justify-center pt-24 pb-12 px-6 lg:px-20 ${contentClassName || ''}`}>
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-2xl lg:text-left lg:mr-auto">
            {/* Month/Year Badge */}
            <div
              className="inline-block text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg"
              style={{ backgroundColor: accentColor || '#0092ff' }}
            >
              {activity.month} {activity.year}
            </div>

            {/* Educator anchor pill (renders only when the activity has an educatorPromo) */}
            {activity.educatorPromo?.heroPillLabel && (
              <div className="mb-6 lg:-mt-2">
                <a
                  href="#educator-promo"
                  className="inline-flex items-center rounded-full border border-amber-300 bg-warmSurface px-4 py-1.5 text-xs font-semibold text-navy shadow-sm transition-colors duration-200 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:text-sm"
                >
                  {activity.educatorPromo.heroPillLabel}
                </a>
              </div>
            )}

            {/* Activity Title */}
            <h1
              className="brand-h1 text-[#22224C] mb-4 lg:mb-6 drop-shadow-sm max-w-[600px]"
              dangerouslySetInnerHTML={{ __html: activity.title }}
            />
            
            {/* Tagline */}
            <h2 className="brand-h3 text-neutral-600 mb-6 lg:mb-8 drop-shadow-sm">
              {activity.hero.tagline}
            </h2>
            
            {/* Intro Text */}
            <p className="brand-body1 text-neutral-600 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              {activity.hero.introText}
            </p>
        </div>
      </div>
    </section>
  );
}