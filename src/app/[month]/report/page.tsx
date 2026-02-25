import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { validActivityMonths, getActivityBySlug } from '@/data/activities';
import ReportPlaceholder from '@/components/report/ReportPlaceholder';

interface ReportPageProps {
  params: {
    month: string;
  };
  searchParams: {
    lang?: string;
  };
}

// Reports available for these months
const availableReports = ['january', 'december', 'november', 'october'];

// Generate static params for all valid months
export async function generateStaticParams() {
  return validActivityMonths.map((month) => ({
    month: month,
  }));
}

// Generate metadata for each report page
export async function generateMetadata({ params }: ReportPageProps): Promise<Metadata> {
  const { month } = params;
  const monthLower = month.toLowerCase();

  if (!validActivityMonths.includes(monthLower)) {
    return {
      title: 'Report Not Found',
    };
  }

  const activity = getActivityBySlug(monthLower);
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

  return {
    title: `${capitalizedMonth} Sponsor Report | Industry Immersion Series`,
    description: activity
      ? `Sponsor report for ${activity.title} - ${activity.sponsor.name} partnership with Industry Immersion Series.`
      : `${capitalizedMonth} sponsor report for Industry Immersion Series.`,
  };
}

export default async function ReportPage({ params, searchParams }: ReportPageProps) {
  const { month } = params;
  const monthLower = month.toLowerCase();
  const lang = searchParams.lang === 'fr' ? 'fr' : 'en';

  // Validate month parameter
  if (!validActivityMonths.includes(monthLower)) {
    notFound();
  }

  // Check if we have a report available for this month
  if (availableReports.includes(monthLower)) {
    // Full-page iframe embed for available reports
    return (
      <iframe
        src={`/reports/${lang}/${monthLower}-report.html`}
        className="w-full h-screen border-0"
        title={`${month} Sponsor Report`}
      />
    );
  }

  // Placeholder for months without reports
  return <ReportPlaceholder month={month} />;
}
