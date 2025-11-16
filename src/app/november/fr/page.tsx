import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityPageData } from '@/data/activity-pages';
import ActivityHeader from '@/components/ActivityHeader';
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

  // Use plain text title for metadata (no HTML entities)
  const plainTitle = "Défi d'exploration des carrières spécialisées";

  return {
    title: `${plainTitle} - Série d'immersion industrielle`,
    description: novemberActivity.description,
    openGraph: {
      title: `${plainTitle} - Série d'immersion industrielle`,
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
      <ActivityHeader />
      <main className="pt-16">
        <ActivityHero activity={novemberActivity} />
        {novemberActivity.promotionalBanner && (
          <PromotionalBanner banner={novemberActivity.promotionalBanner} language="fr" />
        )}
        <VideoAndExplainer activity={novemberActivity} />
        <div id="activity-details">
          <ActivityDetailAndRubric activity={novemberActivity} language="fr" />
        </div>
        <div id="sponsor-resources">
          <SponsorResources activity={novemberActivity} language="fr" />
        </div>
        <SkillsForSuccess activity={novemberActivity} language="fr" />
        <div id="activity-faq">
          <ActivityFAQ activity={novemberActivity} language="fr" />
        </div>
        <IncentivesAndNavigation currentActivity={novemberActivity} language="fr" />
      </main>
      <Footer />
    </>
  );
}
