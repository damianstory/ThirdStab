import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getActivityBySlug } from '@/data/activities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Activités de mai — Choisissez votre défi | Série d\'immersion dans l\'industrie',
  description: 'Deux défis industriels offerts en mai. Explorez les carrières en CVCA avec HRAI ou obtenez votre certificat Être là™ avec Jack.org.',
};

export default function MayChooserFrenchPage() {
  const may1 = getActivityBySlug('may-1');
  const may2 = getActivityBySlug('may-2');

  if (!may1 || !may2) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="bg-white pt-20 pb-12">
        {/* Heading */}
        <section className="max-w-3xl mx-auto text-center pt-4 pb-6 md:pt-8 md:pb-10 px-4">
          <h1 className="brand-h2 text-[#22224C]">Activités de mai</h1>
          <p className="brand-body1 text-neutral-500 mt-2">
            En mai, vous pouvez compléter une ou deux activités. Rien ne vous empêche de remporter une microbourse pour chacune 👀
          </p>
          <p className="brand-body1 text-neutral-500 mt-3">
            Les deux ont une date limite au 31 mai; utilisez votre temps judicieusement.
          </p>
          <p className="brand-body1 text-neutral-500 mt-3">
            Ce sont les dernières activités offertes dans le cadre de la Série d&apos;immersion dans l&apos;industrie 25-26.
          </p>
        </section>

        {/* Two-panel chooser */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-4">
          {/* Left panel — HVACR */}
          <div className="bg-[#0092ff] rounded-2xl overflow-hidden flex flex-col gap-4 md:gap-6 p-8 md:p-10">
            <div className="bg-white rounded-lg p-2.5 self-start">
              <Image
                src={may1.sponsor.logo}
                alt={may1.sponsor.name}
                width={160}
                height={40}
                className="h-10 w-auto max-w-[160px] object-contain"
              />
            </div>

            <div>
              <h2 className="brand-h2 text-white">Défi de l&apos;industrie CVCA</h2>
              <p className="brand-body1 text-white/80 mt-2">
                Découvrez de vraies carrières en chauffage, ventilation, climatisation et réfrigération.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/may-1/fr"
                className="border-2 border-white text-white py-3 px-6 rounded-lg min-h-[44px] inline-flex items-center text-base font-semibold transition-colors duration-200 hover:bg-white hover:text-[#0092ff] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0092ff]"
              >
                Explorer le CVCA →
              </Link>
            </div>
          </div>

          {/* Right panel — Be There */}
          <div className="bg-[#22224C] rounded-2xl overflow-hidden flex flex-col gap-4 md:gap-6 p-8 md:p-10">
            <div className="bg-white rounded-lg p-2.5 self-start">
              <Image
                src={may2.sponsor.logo}
                alt={may2.sponsor.name}
                width={160}
                height={40}
                className="h-10 w-auto max-w-[160px] object-contain"
              />
            </div>

            <div>
              <h2 className="brand-h2 text-white">Défi du certificat Être là™</h2>
              <p className="brand-body1 text-white/80 mt-2">
                Apprenez à soutenir une personne en difficulté sur le plan de la santé mentale.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/may-2/fr"
                className="border-2 border-white text-white py-3 px-6 rounded-lg min-h-[44px] inline-flex items-center text-base font-semibold transition-colors duration-200 hover:bg-white hover:text-[#22224C] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#22224C]"
              >
                Commencer Être là™ →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
