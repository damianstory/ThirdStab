import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityPageData } from '@/data/activity-pages';
import ActivityHeader from '@/components/ActivityHeader';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import SponsorResources from '@/components/activity/SponsorResources';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export async function generateMetadata(): Promise<Metadata> {
  const januaryActivity = await getActivityPageData('january', 'fr');

  if (!januaryActivity) {
    return {
      title: 'Activity Not Found',
    };
  }

  return {
    title: `${januaryActivity.title} - Série d'immersion industrielle`,
    description: januaryActivity.description,
    openGraph: {
      title: `${januaryActivity.title} - Série d'immersion industrielle`,
      description: januaryActivity.description,
      images: [januaryActivity.meta.ogImage],
    },
  };
}

export default async function JanuaryActivityFrenchPage() {
  const januaryActivity = await getActivityPageData('january', 'fr');

  if (!januaryActivity) {
    notFound();
  }

  return (
    <>
      <ActivityHeader />
      <main className="pt-16">
        <ActivityHero activity={januaryActivity} />
        <VideoAndExplainer activity={januaryActivity} />
        <div id="activity-details">
          <ActivityDetailAndRubric activity={januaryActivity} language="fr" />
        </div>
        <div id="sponsor-resources">
          <SponsorResources activity={januaryActivity} language="fr" />
        </div>
        <div id="activity-faq">
          <ActivityFAQ activity={januaryActivity} language="fr" />
        </div>
        <IncentivesAndNavigation currentActivity={januaryActivity} language="fr" />
      </main>
      <Footer />
    </>
  );
}
