import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import WhyMicroGrants from '@/components/WhyMicroGrants';
import Timeline from '@/components/Timeline';
import Incentives from '@/components/Incentives';
import IncentivePartners from '@/components/IncentivePartners';
import Sponsors from '@/components/Sponsors';
import FAQ from '@/components/FAQ';
import StayInformed from '@/components/StayInformed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <WhyMicroGrants />
        <Timeline />
        <Incentives />
        <IncentivePartners />
        <Sponsors />
        <FAQ />
        <StayInformed />
      </main>
      <Footer />
    </>
  );
}