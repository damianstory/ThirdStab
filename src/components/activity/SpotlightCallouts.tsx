'use client';

import { useState } from 'react';
import { Briefcase, Sparkles, ChevronDown } from 'lucide-react';

export interface SpotlightCallout {
  id: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  body: string;
  badge: string;
  icon: 'briefcase' | 'sparkles';
  gradient: 'blue' | 'warm';
  expandableContent?: string;
}

interface SpotlightCalloutsProps {
  callouts: SpotlightCallout[];
  language?: 'en' | 'fr';
}

const i18n = {
  en: {
    sectionTitle: 'Activity-Specific Incentives',
    sectionSubtitle: 'Special opportunities available for this activity',
    internshipDetails: 'INTERNSHIP DETAILS',
  },
  fr: {
    sectionTitle: 'Incitatifs propres à l\'activité',
    sectionSubtitle: 'Occasions spéciales offertes dans le cadre de cette activité',
    internshipDetails: 'DÉTAILS DU STAGE',
  },
};

export default function SpotlightCallouts({ callouts, language = 'en' }: SpotlightCalloutsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const t = i18n[language];

  const icons = {
    briefcase: Briefcase,
    sparkles: Sparkles,
  };

  const gradients = {
    blue: {
      bar: 'bg-gradient-to-r from-brandBlue to-navy',
      icon: 'bg-gradient-to-br from-brandBlue to-[#0073CC]',
      badge: 'bg-brandBlue/10 text-brandBlue',
    },
    warm: {
      bar: 'bg-gradient-to-r from-orange-500 to-amber-400',
      icon: 'bg-gradient-to-br from-orange-500 to-amber-400',
      badge: 'bg-orange-100 text-orange-700',
    },
  };

  if (!callouts || callouts.length === 0) {
    return null;
  }

  const expandableCallout = callouts.find(c => c.expandableContent);
  const isExpanded = expandableCallout ? expandedId === expandableCallout.id : false;

  return (
    <section
      aria-label={t.sectionTitle}
      className="py-8 px-4 md:py-12 md:px-8 bg-lightBlue/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-[#22224C] mb-4">
            {t.sectionTitle}
          </h2>
          <p className="brand-body1 text-neutral-500">
            {t.sectionSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {callouts.map((callout, index) => {
            const Icon = icons[callout.icon];
            const colors = gradients[callout.gradient];

            return (
              <article
                key={callout.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl
                           transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top gradient accent bar */}
                <div className={`h-1.5 ${colors.bar}`} />

                <div className="p-6 md:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center
                                  mb-5 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Eyebrow */}
                  <p className="text-xs font-semibold tracking-widest text-neutral4 uppercase mb-2">
                    {callout.eyebrow}
                  </p>

                  {/* Headline */}
                  <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">
                    {callout.headline}
                  </h3>

                  {/* Subhead */}
                  <p className="text-sm font-semibold text-brandBlue mb-3">
                    {callout.subhead}
                  </p>

                  {/* Body */}
                  <p className="text-neutral5 text-sm leading-relaxed mb-5"
                     dangerouslySetInnerHTML={{ __html: callout.body }}
                  />

                  {/* Badge + Expandable Pill */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full
                                     text-xs font-bold tracking-wide ${colors.badge}`}>
                      {callout.badge}
                    </span>

                    {callout.expandableContent && (
                      <button
                        onClick={() => setExpandedId(expandedId === callout.id ? null : callout.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full
                                   text-xs font-bold tracking-wide border border-brandBlue/30
                                   text-brandBlue bg-white hover:bg-brandBlue/5
                                   cursor-pointer transition-colors duration-200"
                      >
                        {t.internshipDetails}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            expandedId === callout.id ? 'rotate-180' : ''
                          }`}
                          strokeWidth={2.5}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Expandable Panel — full width below both cards */}
        {expandableCallout && (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded
                ? 'max-h-[4000px] opacity-100 mt-6'
                : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-brandBlue to-navy" />
              <div className="p-6 md:p-8">
                <div
                  className="text-sm text-neutral5 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: expandableCallout.expandableContent! }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
