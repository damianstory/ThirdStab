import { notFound } from 'next/navigation';
import { validSponsorSlugs } from '@/data/sponsors';
import { getSponsorPageData } from '@/data/sponsor-pages';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SponsorHero from '@/components/sponsor/SponsorHero';
import SponsorAbout from '@/components/sponsor/SponsorAbout';
import SponsorPartnership from '@/components/sponsor/SponsorPartnership';
import SponsorFAQ from '@/components/sponsor/SponsorFAQ';
import SponsorCTA from '@/components/sponsor/SponsorCTA';

interface SponsorPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all valid sponsor slugs
export async function generateStaticParams() {
  return validSponsorSlugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each sponsor page
export async function generateMetadata({ params }: SponsorPageProps) {
  const { slug } = params;

  // Validate slug parameter
  if (!validSponsorSlugs.includes(slug.toLowerCase())) {
    return {
      title: 'Sponsor Not Found',
    };
  }

  // Get full page data if available
  const sponsorPageData = await getSponsorPageData(slug, 'en');

  if (!sponsorPageData) {
    return {
      title: 'Sponsor Not Found',
    };
  }

  return {
    title: sponsorPageData.meta.title,
    description: sponsorPageData.meta.description,
    openGraph: {
      title: sponsorPageData.meta.title,
      description: sponsorPageData.meta.description,
      type: 'website',
      images: [
        {
          url: sponsorPageData.meta.ogImage,
          width: 1200,
          height: 630,
          alt: sponsorPageData.name,
        },
      ],
    },
  };
}

export default async function SponsorProfilePage({ params }: SponsorPageProps) {
  const { slug } = params;

  // Validate slug parameter
  if (!validSponsorSlugs.includes(slug.toLowerCase())) {
    notFound();
  }

  // Get full page data
  const sponsorPageData = await getSponsorPageData(slug, 'en');

  if (!sponsorPageData) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        <SponsorHero sponsor={sponsorPageData} language="en" />
        <SponsorAbout sponsor={sponsorPageData} language="en" />
        <SponsorPartnership sponsor={sponsorPageData} language="en" />
        <SponsorFAQ sponsor={sponsorPageData} language="en" />
        <SponsorCTA sponsor={sponsorPageData} language="en" />
      </main>
      <Footer />
    </>
  );
}
