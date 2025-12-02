import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SponsorsGrid from '@/components/sponsor/SponsorsGrid';

export const metadata: Metadata = {
  title: 'Nos commanditaires | Serie d\'immersion industrielle',
  description: 'Decouvrez les organisations qui rendent possible la serie d\'immersion industrielle. Nos commanditaires offrent des micro-subventions, des ressources de carriere et des perspectives industrielles reelles aux etudiants canadiens.',
  openGraph: {
    title: 'Nos commanditaires | Serie d\'immersion industrielle',
    description: 'Decouvrez les organisations qui soutiennent les etudiants canadiens par des micro-subventions et l\'exploration de carrieres.',
    type: 'website',
    images: [
      {
        url: '/images/meta-preview.png',
        width: 1200,
        height: 630,
        alt: 'Commanditaires de la serie d\'immersion industrielle',
      },
    ],
  },
};

export default function SponsorsPageFr() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-lightBlue/30 to-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="brand-h1 text-navy mb-4">
              Nos commanditaires
            </h1>
            <p className="brand-body1 text-neutral-600 max-w-3xl">
              La serie d&apos;immersion industrielle est rendue possible grace au soutien genereux d&apos;organisations
              engagees a aider les etudiants canadiens a decouvrir leur potentiel de carriere.
            </p>
          </div>
        </section>

        {/* Sponsors Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SponsorsGrid language="fr" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
