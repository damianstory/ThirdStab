import { BookOpen } from 'lucide-react';
import { EducatorPromo } from '@/data/activities';

type EducatorPromoProps = {
  promo: EducatorPromo;
};

export default function EducatorPromoSection({ promo }: EducatorPromoProps) {
  const { eyebrow, title, body, cta, incentive, visual } = promo;
  const isExternal = cta.external === true;

  return (
    <section
      id="educator-promo"
      aria-labelledby="educator-promo-heading"
      className="scroll-mt-24 bg-warmSurface border-y border-neutral1"
    >
      <div className="container mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy column */}
          <div className="order-1 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 mb-3">
              {eyebrow}
            </p>

            <h2
              id="educator-promo-heading"
              className="brand-h2 text-navy mb-5"
            >
              {title}
            </h2>

            <div className="space-y-4 text-neutral5 brand-body1 leading-relaxed max-w-2xl">
              {body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {incentive && (
              <div className="mt-7 max-w-2xl rounded-lg border border-amber-300 bg-amber-50/80 p-5 md:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-800 mb-2">
                  {incentive.label}
                </p>
                <p className="text-navy text-sm md:text-base leading-relaxed">
                  {incentive.copy}
                </p>
                {incentive.rulesNote && (
                  <p className="mt-3 text-xs text-neutral4 leading-relaxed">
                    {incentive.rulesNote}
                  </p>
                )}
              </div>
            )}

            <div className="mt-7 lg:mt-8">
              <a
                href={cta.href}
                {...(isExternal
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-warmSurface md:text-base"
              >
                {cta.label}
              </a>
            </div>
          </div>

          {/* Visual column */}
          <div className="order-2 lg:order-last lg:col-span-5">
            {visual.kind === 'panel' ? (
              <div className="h-full rounded-2xl border border-neutral1 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
                    aria-hidden="true"
                  >
                    <BookOpen className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <p className="text-navy font-semibold text-base md:text-lg">
                    {visual.label}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2 mb-5 list-none p-0">
                  {visual.topics.map((topic) => (
                    <li key={topic}>
                      <span className="inline-block rounded-full border border-neutral1 bg-neutral1/40 px-3 py-1 text-xs font-medium text-neutral5">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>

                {visual.meta && (
                  <p className="text-xs text-neutral4 leading-relaxed">
                    {visual.meta}
                  </p>
                )}
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-neutral1 bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={visual.src}
                  alt={visual.alt}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
