import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityPageData } from '@/data/activity-pages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import SponsorResources from '@/components/activity/SponsorResources';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export async function generateMetadata(): Promise<Metadata> {
  const decemberActivity = await getActivityPageData('december', 'fr');

  if (!decemberActivity) {
    return {
      title: 'Activity Not Found',
    };
  }

  return {
    title: `${decemberActivity.title} - Série d'immersion industrielle`,
    description: decemberActivity.description,
    openGraph: {
      title: `${decemberActivity.title} - Série d'immersion industrielle`,
      description: decemberActivity.description,
      images: [decemberActivity.meta.ogImage],
    },
  };
}

export default async function DecemberActivityFrenchPage() {
  const decemberActivity = await getActivityPageData('december', 'fr');

  if (!decemberActivity) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        <ActivityHero activity={decemberActivity} />
        <VideoAndExplainer activity={decemberActivity} />
        <ActivityDetailAndRubric activity={decemberActivity} />
        <SponsorResources activity={decemberActivity} />
        <ActivityFAQ activity={decemberActivity} />
        <IncentivesAndNavigation currentActivity={decemberActivity} />
      </main>
      <Footer />
    </>
  );
}
