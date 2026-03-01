'use client';

import TimelineCard from './TimelineCard';
import { getActivities } from '@/data/activities';

// Localized text content
const text = {
  en: {
    heading: "Monthly ",
    headingAccent: "Challenges",
    subheading: "Each month will have a different activity sponsored by a different industry partner. Click the card to view and complete the activity.",
    incentive: "Incentive: $10,000 in micro grants",
    juneMonth: "June",
    juneTitle: "Final Incentive Distribution",
    juneDescription: "We'll use this time to distribute any final school-level and series completion incentives. Celebrate your achievements and get recognized for participating in the Industry Immersion Series throughout the year."
  },
  fr: {
    heading: "Défis ",
    headingAccent: "mensuels",
    subheading: "Chaque mois, une nouvelle activité est proposée par un partenaire de l'industrie différent. Cliquez sur la carte pour voir et réaliser l'activité.",
    incentive: "Récompense : 10 000 $ en microbourses",
    juneMonth: "juin",
    juneTitle: "Distribution finale des récompenses",
    juneDescription: "Cette période sera consacrée à la distribution des récompenses finales, tant au niveau des écoles que pour la participation à l'ensemble de la série. Célébrez vos réalisations et soyez reconnus pour votre participation à la Série d'immersion dans l'industrie tout au long de l'année."
  }
};

interface TimelineProps {
  language?: 'en' | 'fr';
}

export default function Timeline({ language = 'en' }: TimelineProps) {
  const t = text[language];
  const localizedActivities = getActivities(language);

  // Create enhanced timeline data with sponsor information from activities
  const timelineData = [
    // Activities with sponsors (mapped from localized activities)
    ...localizedActivities.map(activity => ({
      year: activity.year,
      month: activity.month,
      title: activity.title,
      industry: t.incentive,
      description: activity.description,
      status: activity.month === "October" || activity.month === "octobre" || activity.month === "November" || activity.month === "novembre" || activity.month === "December" || activity.month === "décembre" || activity.month === "January" || activity.month === "janvier" || activity.month === "February" || activity.month === "février" || activity.month === "March" || activity.month === "mars" ? "confirmed" : "tba",
      sponsor: activity.sponsor,
      slug: activity.slug, // Pass through the slug for navigation
      strikethroughIndustry: activity.month === "October" || activity.month === "octobre" || activity.month === "November" || activity.month === "novembre" || activity.month === "December" || activity.month === "décembre" || activity.month === "January" || activity.month === "janvier" || activity.month === "February" || activity.month === "février" // Cross out micro grants for October through February
    })),
    // Incentive distribution month (no sponsor)
    {
      year: "2026",
      month: t.juneMonth,
      title: t.juneTitle,
      industry: "",
      description: t.juneDescription,
      status: "tba" as const,
      isPromotional: true
    }
  ];

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
              id={(item.month === "March" || item.month === "mars") && item.year === "2026" ? "march-activity-card" : undefined}
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