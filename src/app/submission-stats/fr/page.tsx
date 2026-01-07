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
  title: 'Statistiques de soumission | S\u00E9rie d\'immersion dans l\'industrie',
  description: 'Consultez les statistiques de soumission \u00E0 travers le Canada pour la S\u00E9rie d\'immersion dans l\'industrie.',
  openGraph: {
    title: 'Statistiques de soumission | S\u00E9rie d\'immersion dans l\'industrie',
    description: 'Consultez les statistiques de soumission \u00E0 travers le Canada.',
    type: 'website',
    images: [
      {
        url: '/images/meta-preview.png',
        width: 1200,
        height: 630,
        alt: 'Statistiques de soumission de la S\u00E9rie d\'immersion',
      },
    ],
  },
};

export default function SubmissionStatsPageFr() {
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
          language="fr"
        />
        <CanadaMapSection
          provinceStats={provinceStats}
          language="fr"
        />
      </main>
      <Footer />
    </>
  );
}
