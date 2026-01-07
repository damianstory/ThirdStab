import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SubmissionStatsHero } from '@/components/submission-stats/SubmissionStatsHero';
import { CanadaMapSection } from '@/components/submission-stats/CanadaMapSection';
import {
  getAllProvinceStats,
  getTotalSubmissions,
  getTotalSchoolBoards,
} from '@/data/submission-stats';

export const metadata: Metadata = {
  title: 'Submission Stats | Industry Immersion Series',
  description: 'View submission statistics across Canada for the Industry Immersion Series. Explore where students are participating from coast to coast.',
  openGraph: {
    title: 'Submission Stats | Industry Immersion Series',
    description: 'View submission statistics across Canada for the Industry Immersion Series.',
    type: 'website',
    images: [
      {
        url: '/images/meta-preview.png',
        width: 1200,
        height: 630,
        alt: 'Industry Immersion Series Submission Stats',
      },
    ],
  },
};

export default function SubmissionStatsPage() {
  const provinceStats = getAllProvinceStats();
  const totalSubmissions = getTotalSubmissions();
  const totalSchoolBoards = getTotalSchoolBoards();

  return (
    <>
      <Header />
      <main className="pb-16">
        <SubmissionStatsHero
          totalSubmissions={totalSubmissions}
          totalSchoolBoards={totalSchoolBoards}
          language="en"
        />
        <CanadaMapSection
          provinceStats={provinceStats}
          language="en"
        />
      </main>
      <Footer />
    </>
  );
}
