import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityPageData } from '@/data/activity-pages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import PromotionalBanner from '@/components/activity/PromotionalBanner';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import SponsorResources from '@/components/activity/SponsorResources';
import SkillsForSuccess from '@/components/activity/SkillsForSuccess';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export async function generateMetadata(): Promise<Metadata> {
  const novemberActivity = await getActivityPageData('november', 'fr');

  if (!novemberActivity) {
    return {
      title: 'Activity Not Found',
    };
  }

  return {
    title: `${novemberActivity.title} - Série d'immersion industrielle`,
    description: novemberActivity.description,
    openGraph: {
      title: `${novemberActivity.title} - Série d'immersion industrielle`,
      description: novemberActivity.description,
      images: [novemberActivity.meta.ogImage],
    },
  };
}

export default async function NovemberActivityFrenchPage() {
  const novemberActivity = await getActivityPageData('november', 'fr');

  if (!novemberActivity) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        <ActivityHero activity={novemberActivity} />
        {novemberActivity.promotionalBanner && (
          <PromotionalBanner banner={novemberActivity.promotionalBanner} language="fr" />
        )}
        <VideoAndExplainer activity={novemberActivity} />
        <ActivityDetailAndRubric activity={novemberActivity} language="fr" />
        <SponsorResources activity={novemberActivity} />
        <SkillsForSuccess activity={novemberActivity} language="fr" />
        <ActivityFAQ activity={novemberActivity} />
        <IncentivesAndNavigation currentActivity={novemberActivity} />
      </main>
      <Footer />
    </>
  );
}
