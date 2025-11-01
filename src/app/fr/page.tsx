import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyMicroGrants from '@/components/WhyMicroGrants';
import Timeline from '@/components/Timeline';
import Incentives from '@/components/Incentives';
import Sponsors from '@/components/Sponsors';
import FAQ from '@/components/FAQ';
import StayInformed from '@/components/StayInformed';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Série d'immersion industrielle par myBlueprint",
  description: "Découvrez des opportunités de carrière grâce à des partenariats industriels. Micro-subventions, mentorat et expérience du monde réel pour les étudiants canadiens de la 7e à la 12e année.",
  keywords: "immersion industrielle, étudiants canadiens, micro-subventions, exploration de carrière, mentorat",
  openGraph: {
    title: "Série d'immersion industrielle",
    description: "Amener l'industrie en classe, une activité à la fois",
    type: "website",
    images: [
      {
        url: "/images/meta-preview.png",
        width: 1200,
        height: 630,
        alt: "Série d'immersion industrielle",
      },
    ],
  },
};

export default function FrenchHome() {
  return (
    <>
      <Header />
      <main className="pt-0">
        <Hero language="fr" />
        <HowItWorks language="fr" />
        <WhyMicroGrants language="fr" />
        <Timeline language="fr" />
        <Incentives language="fr" />
        <Sponsors />
        <FAQ language="fr" />
        <StayInformed language="fr" />
      </main>
      <Footer />
    </>
  );
}
