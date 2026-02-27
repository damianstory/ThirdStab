import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityPageData } from '@/data/activity-pages';
import ActivityHeader from '@/components/ActivityHeader';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import TopicClusters from '@/components/activity/TopicClusters';
import SponsorResources from '@/components/activity/SponsorResources';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export async function generateMetadata(): Promise<Metadata> {
  const marchActivity = await getActivityPageData('march', 'fr');

  if (!marchActivity) {
    return {
      title: 'Activity Not Found',
    };
  }

  return {
    title: `${marchActivity.title} - Série d'immersion industrielle`,
    description: marchActivity.description,
    openGraph: {
      title: `${marchActivity.title} - Série d'immersion industrielle`,
      description: marchActivity.description,
      images: [marchActivity.meta.ogImage],
    },
  };
}

export default async function MarchActivityFrenchPage() {
  const marchActivity = await getActivityPageData('march', 'fr');

  if (!marchActivity) {
    notFound();
  }

  return (
    <div className={marchActivity.sponsorFontClass || ''}>
      <ActivityHeader sponsor={marchActivity.showSponsorInHeader ? marchActivity.sponsor : undefined} />
      <main className="pt-16">
        <ActivityHero activity={marchActivity} accentColor={marchActivity.accentColor} />
        <VideoAndExplainer activity={marchActivity} secondaryAccentColor={marchActivity.secondaryAccentColor} />
        <div id="activity-details">
          <ActivityDetailAndRubric activity={marchActivity} accentColor={marchActivity.accentColor} language="fr" />
        </div>
        {marchActivity.topicClusters && marchActivity.topicClusters.length > 0 && (
          <TopicClusters clusters={marchActivity.topicClusters} accentColor={marchActivity.accentColor} secondaryAccentColor={marchActivity.secondaryAccentColor} />
        )}
        <div id="sponsor-resources">
          <SponsorResources
            activity={marchActivity}
            language="fr"
            resourcesTitle={marchActivity.resourcesTitle}
            resourcesSubtitle={marchActivity.resourcesSubtitle}
            accentColor={marchActivity.accentColor}
          />
        </div>
        <div id="activity-faq">
          <ActivityFAQ activity={marchActivity} accentColor={marchActivity.accentColor} language="fr" />
        </div>
        <IncentivesAndNavigation currentActivity={marchActivity} language="fr" />
      </main>
      <Footer />
    </div>
  );
}
