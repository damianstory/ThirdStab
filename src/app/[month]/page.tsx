import { notFound } from 'next/navigation';
import { activities, validActivityMonths, getActivityBySlug, type ActivityPageData } from '@/data/activities';
import { octoberActivity } from '@/data/activity-pages/october';
import { novemberActivity } from '@/data/activity-pages/november';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StayInformed from '@/components/StayInformed';
import ActivityHero from '@/components/activity/ActivityHero';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import SponsorResources from '@/components/activity/SponsorResources';
import SkillsForSuccess from '@/components/activity/SkillsForSuccess';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

interface ActivityPageProps {
  params: {
    month: string;
  };
}

// Get activity page data by slug
function getActivityPageData(slug: string): ActivityPageData | null {
  const slugLower = slug.toLowerCase();

  // Return full page data for months that have it
  if (slugLower === 'october') {
    return octoberActivity;
  }

  if (slugLower === 'november') {
    return novemberActivity;
  }

  // For other months, return null (will show basic activity info)
  return null;
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
  
  // Get full page data if available, otherwise use basic activity data
  const activityPageData = getActivityPageData(month);
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
      images: [ogImage],
    },
  };
}

export default function ActivityPage({ params }: ActivityPageProps) {
  const { month } = params;
  
  // Validate month parameter
  if (!validActivityMonths.includes(month.toLowerCase())) {
    notFound();
  }
  
  // Get full page data if available, otherwise use basic activity data
  const activityPageData = getActivityPageData(month);
  const activity = activityPageData || getActivityBySlug(month);
  
  if (!activity) {
    notFound();
  }
  
  // If we have full page data, render the complete template
  if (activityPageData) {
    return (
      <>
        <Header />
        <main className="pt-16">
          <ActivityHero activity={activityPageData} />
          <VideoAndExplainer activity={activityPageData} />
          <ActivityDetailAndRubric activity={activityPageData} />
          <SponsorResources activity={activityPageData} />
          {activityPageData.month === 'November' && <SkillsForSuccess activity={activityPageData} />}
          <ActivityFAQ activity={activityPageData} />
          <IncentivesAndNavigation currentActivity={activityPageData} />
        </main>
        <Footer />
      </>
    );
  }
  
  // Fallback for activities without full page data
  return (
    <>
      <Header />
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