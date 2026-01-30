import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityPageData } from '@/data/activity-pages';
import ActivityHeader from '@/components/ActivityHeader';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import SpotlightCallouts from '@/components/activity/SpotlightCallouts';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import SponsorResources from '@/components/activity/SponsorResources';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export async function generateMetadata(): Promise<Metadata> {
  const februaryActivity = await getActivityPageData('february', 'fr');

  if (!februaryActivity) {
    return {
      title: 'Activity Not Found',
    };
  }

  return {
    title: `${februaryActivity.title} - Série d'immersion industrielle`,
    description: februaryActivity.description,
    openGraph: {
      title: `${februaryActivity.title} - Série d'immersion industrielle`,
      description: februaryActivity.description,
      images: [februaryActivity.meta.ogImage],
    },
  };
}

export default async function FebruaryActivityFrenchPage() {
  const februaryActivity = await getActivityPageData('february', 'fr');

  if (!februaryActivity) {
    notFound();
  }

  return (
    <>
      <ActivityHeader />
      <main className="pt-16">
        <ActivityHero activity={februaryActivity} contentClassName="pt-6" />
        <VideoAndExplainer activity={februaryActivity} />
        {februaryActivity.spotlightCallouts && februaryActivity.spotlightCallouts.length > 0 && (
          <SpotlightCallouts callouts={februaryActivity.spotlightCallouts} language="fr" />
        )}
        <div id="activity-details">
          <ActivityDetailAndRubric activity={februaryActivity} language="fr" />
        </div>
        <div id="sponsor-resources">
          <SponsorResources
            activity={februaryActivity}
            language="fr"
            resourcesTitle={februaryActivity.resourcesTitle}
            resourcesSubtitle={februaryActivity.resourcesSubtitle}
          />
        </div>
        <div id="activity-faq">
          <ActivityFAQ activity={februaryActivity} language="fr" />
        </div>
        <IncentivesAndNavigation currentActivity={februaryActivity} language="fr" />
      </main>
      <Footer />
    </>
  );
}
