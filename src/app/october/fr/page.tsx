import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { octoberActivity } from '@/data/activity-pages/october';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ActivityHero from '@/components/activity/ActivityHero';
import VideoAndExplainer from '@/components/activity/VideoAndExplainer';
import ActivityDetailAndRubric from '@/components/activity/ActivityDetailAndRubric';
import ActivityFAQ from '@/components/activity/ActivityFAQ';
import SponsorResources from '@/components/activity/SponsorResources';
import IncentivesAndNavigation from '@/components/activity/IncentivesAndNavigation';

export const metadata: Metadata = {
  title: `${octoberActivity.title} - Série d'immersion industrielle`,
  description: octoberActivity.description,
  openGraph: {
    title: `${octoberActivity.title} - Série d'immersion industrielle`,
    description: octoberActivity.description,
    images: [octoberActivity.meta.ogImage],
  },
};

export default function OctoberActivityFrenchPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ActivityHero activity={octoberActivity} />
        <VideoAndExplainer activity={octoberActivity} />
        <ActivityDetailAndRubric activity={octoberActivity} />
        <SponsorResources activity={octoberActivity} />
        <ActivityFAQ activity={octoberActivity} />
        <IncentivesAndNavigation currentActivity={octoberActivity} />
      </main>
      <Footer />
    </>
  );
}
