import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { novemberActivity } from '@/data/activity-pages/november';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import SponsorResources from '@/components/activity/SponsorResources';
import SkillsForSuccess from '@/components/activity/SkillsForSuccess';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export const metadata: Metadata = {
  title: `${novemberActivity.title} - Série d'immersion industrielle`,
  description: novemberActivity.description,
  openGraph: {
    title: `${novemberActivity.title} - Série d'immersion industrielle`,
    description: novemberActivity.description,
    images: [novemberActivity.meta.ogImage],
  },
};

export default function NovemberActivityFrenchPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ActivityHero activity={novemberActivity} />
        <VideoAndExplainer activity={novemberActivity} />
        <ActivityDetailAndRubric activity={novemberActivity} />
        <SponsorResources activity={novemberActivity} />
        <SkillsForSuccess activity={novemberActivity} />
        <ActivityFAQ activity={novemberActivity} />
        <IncentivesAndNavigation currentActivity={novemberActivity} />
      </main>
      <Footer />
    </>
  );
}
