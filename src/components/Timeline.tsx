'use client';

import TimelineCard from './TimelineCard';
import { getActivities, getCurrentStatus, getActiveActivity } from '@/data/activities';

// Localized text content
const text = {
  en: {
    heading: "Monthly ",
    headingAccent: "Challenges",
    subheading: "Each month will have a different activity sponsored by a different industry partner. Click the card to view and complete the activity.",
    microGrants: "Micro grants: $10,000"
  },
  fr: {
    heading: "Défis ",
    headingAccent: "mensuels",
    subheading: "Chaque mois, une nouvelle activité est proposée par un partenaire de l'industrie différent. Cliquez sur la carte pour voir et réaliser l'activité.",
    microGrants: "Microbourses : 10 000 $"
  }
};

interface TimelineProps {
  language?: 'en' | 'fr';
}

export default function Timeline({ language = 'en' }: TimelineProps) {
  const t = text[language];
  const localizedActivities = getActivities(language);
  // Status comes from the English month names (FR labels won't match getMonthNumber).
  // We pair localized activities to EN by id to derive status.
  const enById = new Map(getActivities('en').map(a => [a.id, a]));
  const activeSlug = getActiveActivity()?.slug ?? null;

  // Create enhanced timeline data with sponsor information from activities
  const timelineData = localizedActivities.map(activity => {
      const en = enById.get(activity.id) ?? activity;
      const status = getCurrentStatus(en.month, en.year);
      const isPast = status === 'ongoing'; // month already over → confirmed + struck through
      return {
        year: activity.year,
        month: activity.month,
        title: activity.title,
        industry: t.microGrants,
        description: activity.description,
        status: (isPast || status === 'active') ? 'confirmed' : 'tba',
        sponsor: activity.sponsor,
        slug: activity.slug,
        strikethroughIndustry: isPast,
      };
    });

  return (
    <section id="timeline" className="pt-24 pb-16 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="brand-h2 mb-4">
            <span className="text-[#22224C]">{t.heading}</span>
            <span className="bg-gradient-to-r from-[#0070cc] via-[#00b4ff] to-[#0070cc] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              {t.headingAccent}
            </span>
          </h2>
          <p className="text-xl text-neutral4 max-w-3xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
          {timelineData.map((item, index) => (
            <div
              key={index}
              id={'slug' in item && item.slug === activeSlug && activeSlug ? `${item.slug}-activity-card` : undefined}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <TimelineCard
                item={item}
                language={language}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
