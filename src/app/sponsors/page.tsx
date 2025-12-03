import { Suspense } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SponsorsGrid from '@/components/sponsor/SponsorsGrid';

export const metadata: Metadata = {
  title: 'Our Sponsors | Industry Immersion Series',
  description: 'Meet the organizations making the Industry Immersion Series possible. Our sponsors provide micro grants, career resources, and real-world industry insights for Canadian students.',
  openGraph: {
    title: 'Our Sponsors | Industry Immersion Series',
    description: 'Meet the organizations supporting Canadian students through micro grants and career exploration.',
    type: 'website',
    images: [
      {
        url: '/images/meta-preview.png',
        width: 1200,
        height: 630,
        alt: 'Industry Immersion Series Sponsors',
      },
    ],
  },
};

export default function SponsorsPage() {
  return (
    <>
      <Header />
      <main className="pb-16">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-lightBlue/30 to-white pt-40 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="brand-h1 text-navy mb-4">
              Our Sponsors
            </h1>
            <p className="brand-body1 text-neutral-600 max-w-3xl">
              The Industry Immersion Series is made possible by the generous support of organizations
              committed to helping Canadian students discover their career potential.
            </p>
          </div>
        </section>

        {/* Sponsors Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Suspense fallback={<div className="text-center py-12">Loading sponsors...</div>}>
              <SponsorsGrid language="en" />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
