import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getActivityPageData } from '@/data/activity-pages';
import ActivityHeader from '@/components/ActivityHeader';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import PromotionalBanner from '@/components/activity/PromotionalBanner';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import SponsorResources from '@/components/activity/SponsorResources';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export async function generateMetadata(): Promise<Metadata> {
  const may2Activity = await getActivityPageData('may-2', 'fr');

  if (!may2Activity) {
    return {
      title: 'Activity Not Found',
    };
  }

  return {
    title: `${may2Activity.title} - Série d'immersion industrielle`,
    description: may2Activity.description,
    openGraph: {
      title: `${may2Activity.title} - Série d'immersion industrielle`,
      description: may2Activity.description,
      images: [may2Activity.meta.ogImage],
    },
  };
}

export default async function May2ActivityFrenchPage() {
  const may2Activity = await getActivityPageData('may-2', 'fr');

  if (!may2Activity) {
    notFound();
  }

  return (
    <div>
      <ActivityHeader />
      <main>
        <ActivityHero activity={may2Activity} />
        {may2Activity.promotionalBanner && (
          <PromotionalBanner
            banner={may2Activity.promotionalBanner}
            language="fr"
            collapsible
            collapsibleLabel={
              <>
                <span className="md:hidden">Éducateurs : comment mieux soutenir la santé mentale en classe</span>
                <span className="hidden md:inline">
                  Éducateurs : comment mieux soutenir la santé mentale en classe
                </span>
              </>
            }
          />
        )}
        <VideoAndExplainer activity={may2Activity} />
        <div id="activity-details">
          <ActivityDetailAndRubric activity={may2Activity} language="fr" />
        </div>
        <div id="sponsor-resources">
          <SponsorResources
            activity={may2Activity}
            language="fr"
            resourcesTitle={may2Activity.resourcesTitle}
            resourcesSubtitle={may2Activity.resourcesSubtitle}
          />
        </div>
        <div id="activity-faq">
          <ActivityFAQ activity={may2Activity} language="fr" />
        </div>
        <IncentivesAndNavigation currentActivity={may2Activity} language="fr" />
      </main>
      <Footer />
    </div>
  );
}
