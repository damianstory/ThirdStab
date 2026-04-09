import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getActivityBySlug } from '@/data/activities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'May Activities — Choose Your Challenge | Industry Immersion Series',
  description: 'Two industry challenges available in May. Explore HVACR careers with HRAI or earn your Be There Certificate with Jack.org.',
};

export default function MayChooserPage() {
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
          <h1 className="brand-h2 text-[#22224C]">May Activities</h1>
          <p className="brand-body1 text-neutral-500 mt-2">
            In May, you can complete one or two activities. There is no rule that says you can&apos;t earn a micro grant for each 👀
          </p>
          <p className="brand-body1 text-neutral-500 mt-3">
            Both have a deadline of May 31st; use your time wisely.
          </p>
          <p className="brand-body1 text-neutral-500 mt-3">
            These will be the last available activities for the 25-26 Industry Immersion Series program.
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
              <h2 className="brand-h2 text-white">{may1.title}</h2>
              <p className="brand-body1 text-white/80 mt-2">
                Explore real careers in heating, ventilation, air conditioning &amp; refrigeration.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/may-1"
                className="border-2 border-white text-white py-3 px-6 rounded-lg min-h-[44px] inline-flex items-center text-base font-semibold transition-colors duration-200 hover:bg-white hover:text-[#0092ff] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0092ff]"
              >
                Explore HVACR →
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
              <h2 className="brand-h2 text-white">{may2.title}</h2>
              <p className="brand-body1 text-white/80 mt-2">
                Learn to support someone struggling with their mental health.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/may-2"
                className="border-2 border-white text-white py-3 px-6 rounded-lg min-h-[44px] inline-flex items-center text-base font-semibold transition-colors duration-200 hover:bg-white hover:text-[#22224C] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#22224C]"
              >
                Start Be There →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
