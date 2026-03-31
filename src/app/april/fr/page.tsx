import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityPageData } from '@/data/activity-pages';
import ActivityHeader from '@/components/ActivityHeader';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import SponsorResources from '@/components/activity/SponsorResources';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export async function generateMetadata(): Promise<Metadata> {
  const aprilActivity = await getActivityPageData('april', 'fr');

  if (!aprilActivity) {
    return {
      title: 'Activity Not Found',
    };
  }

  return {
    title: `${aprilActivity.title} - Série d'immersion industrielle`,
    description: aprilActivity.description,
    openGraph: {
      title: `${aprilActivity.title} - Série d'immersion industrielle`,
      description: aprilActivity.description,
      images: [aprilActivity.meta.ogImage],
    },
  };
}

export default async function AprilActivityFrenchPage() {
  const aprilActivity = await getActivityPageData('april', 'fr');

  if (!aprilActivity) {
    notFound();
  }

  return (
    <div>
      <ActivityHeader />
      <main className="pt-16">
        <ActivityHero activity={aprilActivity} />
        <VideoAndExplainer activity={aprilActivity} />
        <div id="activity-details">
          <ActivityDetailAndRubric activity={aprilActivity} language="fr" />
        </div>
        <div id="sponsor-resources">
          <SponsorResources
            activity={aprilActivity}
            language="fr"
            resourcesTitle={aprilActivity.resourcesTitle}
            resourcesSubtitle={aprilActivity.resourcesSubtitle}
          />
        </div>
        <div id="activity-faq">
          <ActivityFAQ activity={aprilActivity} language="fr" />
        </div>
        <IncentivesAndNavigation currentActivity={aprilActivity} language="fr" />
      </main>
      <Footer />
    </div>
  );
}
