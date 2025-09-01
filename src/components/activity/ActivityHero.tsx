import { ActivityPageData } from '@/data/activities';

interface ActivityHeroProps {
  activity: ActivityPageData;
}

export default function ActivityHero({ activity }: ActivityHeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 activity-hero-bg activity-hero-bg-mobile md:activity-hero-bg-desktop" />
      
      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 activity-hero-gradient-mobile md:activity-hero-gradient-desktop" />
      
      {/* Content Layer */}
      <div className="relative z-10 w-full flex min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex-col items-center justify-center px-6 lg:px-20">
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:max-w-xl lg:text-left lg:mr-auto">
            {/* Month/Year Badge */}
            <div className="inline-block bg-[#0092ff] text-white px-6 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              {activity.month} {activity.year}
            </div>
            
            {/* Activity Title */}
            <h1 className="brand-h1 text-[#22224C] mb-4 lg:mb-6 drop-shadow-sm">
              {activity.title}
            </h1>
            
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