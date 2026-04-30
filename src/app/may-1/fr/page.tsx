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
  const may1Activity = await getActivityPageData('may-1', 'fr');

  if (!may1Activity) {
    return {
      title: 'Activity Not Found',
    };
  }

  return {
    title: `${may1Activity.title} - Série d'immersion industrielle`,
    description: may1Activity.description,
    openGraph: {
      title: `${may1Activity.title} - Série d'immersion industrielle`,
      description: may1Activity.description,
      images: [may1Activity.meta.ogImage],
    },
  };
}

export default async function May1ActivityFrenchPage() {
  const may1Activity = await getActivityPageData('may-1', 'fr');

  if (!may1Activity) {
    notFound();
  }

  return (
    <div>
      <ActivityHeader />
      <main>
        <ActivityHero activity={may1Activity} />
        <VideoAndExplainer activity={may1Activity} />
        <div id="activity-details">
          <ActivityDetailAndRubric activity={may1Activity} language="fr" />
        </div>
        <div id="sponsor-resources">
          <SponsorResources
            activity={may1Activity}
            language="fr"
            resourcesTitle={may1Activity.resourcesTitle}
            resourcesSubtitle={may1Activity.resourcesSubtitle}
          />
        </div>
        <div id="activity-faq">
          <ActivityFAQ activity={may1Activity} language="fr" />
        </div>
        <IncentivesAndNavigation currentActivity={may1Activity} language="fr" />
      </main>
      <Footer />
    </div>
  );
}
