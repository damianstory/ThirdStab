import Link from 'next/link';
import Image from 'next/image';
import { GradeDistribution } from './GradeDistribution';

interface SubmissionStatsHeroProps {
  totalSubmissions: number;
  totalSchoolBoards: number;
  language: 'en' | 'fr';
}

const content = {
  en: {
    title: 'Submission Statistics',
    description: 'Explore student submissions from across Canada so far. Click on a pin to view school board and province activity submission statistics.',
    sponsoredActivities: 'Sponsored Activities',
    totalSubmissions: 'Total Submissions',
    uniqueSiteVisitors: 'Unique Site Visitors',
    microGrantRecipients: 'Micro Grant Recipients',
    schoolBoards: 'School Boards',
    thisMonthActivity: "This Month's Activity",
    remainingActivities: 'Remaining Activities',
    additionalIncentives: 'Additional Incentives',
    recipientVideos: 'Recipient Videos',
  },
  fr: {
    title: 'Statistiques de soumission',
    description: "Explorez les soumissions des étudiants à travers le Canada jusqu'à présent. Cliquez sur une épingle pour voir les statistiques de soumission des commissions scolaires et de la province.",
    sponsoredActivities: 'Activités commanditées',
    totalSubmissions: 'Total des soumissions',
    uniqueSiteVisitors: 'Visiteurs uniques',
    microGrantRecipients: 'Boursiers de microbourses',
    schoolBoards: 'Commissions scolaires',
    thisMonthActivity: 'Activité du mois',
    remainingActivities: 'Activités restantes',
    additionalIncentives: 'Incitatifs supplémentaires',
    recipientVideos: 'Vidéos des lauréats',
  },
};

export function SubmissionStatsHero({
  totalSubmissions,
  totalSchoolBoards,
  language,
}: SubmissionStatsHeroProps) {
  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-lightBlue/30 to-white pt-[105px] pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="brand-h1 text-navy mb-4">{t.title}</h1>
        <p className="brand-body1 text-neutral-600 max-w-3xl mb-6">
          {language === 'en' ? (
            <>
              Explore student submissions from across Canada so far.
              <br />
              <span className="font-bold">Click on a pin</span> to view school board and province activity submission statistics.
            </>
          ) : (
            <>
              Explorez les soumissions des étudiants à travers le Canada jusqu&apos;à présent.
              <br />
              <span className="font-bold">Cliquez sur une épingle</span> pour voir les statistiques de soumission des commissions scolaires et de la province.
            </>
          )}
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-4xl font-black text-brandBlue mb-1">3</div>
            <div className="text-sm text-neutral-500 font-medium">
              {t.sponsoredActivities}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-4xl font-black text-brandBlue mb-1">
              {totalSubmissions.toLocaleString()}
            </div>
            <div className="text-sm text-neutral-500 font-medium">
              {t.totalSubmissions}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-4xl font-black text-brandBlue mb-1">61K</div>
            <div className="text-sm text-neutral-500 font-medium">
              {t.uniqueSiteVisitors}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-4xl font-black text-brandBlue mb-1">60</div>
            <div className="text-sm text-neutral-500 font-medium">
              {t.microGrantRecipients}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
            <div className="text-4xl font-black text-brandBlue mb-1">
              {totalSchoolBoards}
            </div>
            <div className="text-sm text-neutral-500 font-medium">
              {t.schoolBoards}
            </div>
          </div>
        </div>

        {/* Grade Distribution & Quick Links */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Grade Distribution - Left Half */}
          <GradeDistribution language={language} />

          {/* Quick Links - Right Half (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-4 auto-rows-fr">
            {/* This Month's Activity */}
            <Link
              href="/january"
              className="bg-white rounded-xl p-5 shadow-sm border border-neutral-100 flex flex-col items-center justify-center text-center hover:border-brandBlue/30 hover:shadow-md transition-all"
            >
              <Image
                src="/logo4.png"
                alt="NAV CANADA"
                width={80}
                height={32}
                className="object-contain mb-1"
              />
              <div className="text-sm text-neutral-500 font-medium">
                {t.thisMonthActivity}
              </div>
            </Link>

            {/* Remaining Activities */}
            <Link
              href="/#timeline"
              className="bg-white rounded-xl p-5 shadow-sm border border-neutral-100 flex flex-col items-center justify-center text-center hover:border-brandBlue/30 hover:shadow-md transition-all"
            >
              <div className="text-4xl font-black text-brandBlue mb-1">6</div>
              <div className="text-sm text-neutral-500 font-medium">
                {t.remainingActivities}
              </div>
            </Link>

            {/* Additional Incentives */}
            <Link
              href="/sponsors"
              className="bg-white rounded-xl p-5 shadow-sm border border-neutral-100 flex flex-col items-center justify-center text-center hover:border-brandBlue/30 hover:shadow-md transition-all"
            >
              <div className="text-4xl font-black text-brandBlue mb-1">8</div>
              <div className="text-sm text-neutral-500 font-medium">
                {t.additionalIncentives}
              </div>
            </Link>

            {/* Recipient Videos */}
            <Link
              href="/grant-recipients"
              className="bg-white rounded-xl p-5 shadow-sm border border-neutral-100 flex flex-col items-center justify-center text-center hover:border-brandBlue/30 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-1">🎉</div>
              <div className="text-sm text-neutral-500 font-medium">
                {t.recipientVideos}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
