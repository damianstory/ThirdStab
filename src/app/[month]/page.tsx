import { notFound } from 'next/navigation';
import { activities, validActivityMonths, getActivityBySlug, type ActivityPageData } from '@/data/activities';
import { getActivityPageData } from '@/data/activity-pages';
import ActivityHeader from '@/components/ActivityHeader';
import Footer from '@/components/Footer';
import StayInformed from '@/components/StayInformed';
import ActivityHero from '@/components/activity/ActivityHero';
import PromotionalBanner from '@/components/activity/PromotionalBanner';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import SponsorResources from '@/components/activity/SponsorResources';
import SkillsForSuccess from '@/components/activity/SkillsForSuccess';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';
import SpotlightCallouts from '@/components/activity/SpotlightCallouts';

interface ActivityPageProps {
  params: {
    month: string;
  };
}

// Generate static params for all valid months
export async function generateStaticParams() {
  return validActivityMonths.map((month) => ({
    month: month,
  }));
}

// Generate metadata for each activity page
export async function generateMetadata({ params }: ActivityPageProps) {
  const { month } = params;

  // Validate month parameter
  if (!validActivityMonths.includes(month.toLowerCase())) {
    return {
      title: 'Activity Not Found',
    };
  }

  // Get full page data if available (English version for metadata), otherwise use basic activity data
  const activityPageData = await getActivityPageData(month, 'en');
  const activity = activityPageData || getActivityBySlug(month);

  if (!activity) {
    return {
      title: 'Activity Not Found',
    };
  }

  // Use meta data if available, otherwise use basic activity info
  const title = activityPageData?.meta.title || `${activity.title} - Industry Immersion Series`;
  const description = activityPageData?.meta.description || activity.description;
  const ogImage = activityPageData?.meta.ogImage || activity.sponsor.logo;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { month } = params;

  // Validate month parameter
  if (!validActivityMonths.includes(month.toLowerCase())) {
    notFound();
  }

  // Get full page data if available (English version), otherwise use basic activity data
  const activityPageData = await getActivityPageData(month, 'en');
  const activity = activityPageData || getActivityBySlug(month);

  if (!activity) {
    notFound();
  }
  
  // If we have full page data, render the complete template
  if (activityPageData) {
    return (
      <>
        <ActivityHeader />
        <main className="pt-16">
          <ActivityHero activity={activityPageData} />
          {activityPageData.promotionalBanner && (
            <PromotionalBanner banner={activityPageData.promotionalBanner} language="en" />
          )}
          <VideoAndExplainer activity={activityPageData} />
          {activityPageData.spotlightCallouts && activityPageData.spotlightCallouts.length > 0 && (
            <SpotlightCallouts callouts={activityPageData.spotlightCallouts} />
          )}
          <div id="activity-details">
            <ActivityDetailAndRubric activity={activityPageData} />
          </div>
          <div id="sponsor-resources">
            <SponsorResources
              activity={activityPageData}
              resourcesTitle={activityPageData.resourcesTitle}
              resourcesSubtitle={activityPageData.resourcesSubtitle}
            />
          </div>
          {activityPageData.month === 'November' && <SkillsForSuccess activity={activityPageData} language="en" />}
          <div id="activity-faq">
            <ActivityFAQ activity={activityPageData} />
          </div>
          <IncentivesAndNavigation currentActivity={activityPageData} />
        </main>
        <Footer />
      </>
    );
  }
  
  // Fallback for activities without full page data
  return (
    <>
      <ActivityHeader />
      <main className="pt-16">
        <section className="py-24 px-4 md:px-12 bg-white">
          <div className="container mx-auto max-w-6xl text-center">
            <div className="mb-8">
              <span className="inline-block bg-[#0092ff] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {activity.month} {activity.year}
              </span>
              <h1 className="brand-h1 text-[#22224C] mb-6">
                {activity.title}
              </h1>
              <p className="brand-body1 text-neutral-500 max-w-3xl mx-auto">
                {activity.description}
              </p>
            </div>

            {/* Sponsor Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 relative bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={activity.sponsor.logo}
                  alt={activity.sponsor.name}
                  className="object-contain w-full h-full p-4"
                />
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-[#0092ff] font-semibold">
                Coming Soon: Full Activity Details
              </p>
            </div>
          </div>
        </section>
        <StayInformed />
      </main>
      <Footer />
    </>
  );
}