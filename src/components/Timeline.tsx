'use client';

import TimelineCard from './TimelineCard';
import { activities } from '@/data/activities';

export default function Timeline() {
  // Create enhanced timeline data with sponsor information from activities
  const timelineData = [
    // Activities with sponsors (mapped from activities.ts)
    ...activities.map(activity => ({
      year: activity.year,
      month: activity.month,
      title: activity.title,
      industry: "Incentive: $10,000 in micro grants",
      description: activity.description,
      status: activity.month === "October" ? "confirmed" : "tba",
      sponsor: activity.sponsor
    })),
    // Incentive distribution month (no sponsor)
    {
      year: "2026",
      month: "June",
      title: "Final Incentive Distribution",
      industry: "",
      description: "We'll use this time to distribute any final school-level and series completion incentives. Celebrate your achievements and get recognized for participating in the Industry Immersion Series throughout the year.",
      status: "tba",
      isPromotional: true
    }
  ];

  return (
    <section id="timeline" className="pt-24 pb-16 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="brand-h2 mb-4">
            <span className="text-[#22224C]">Monthly </span>
            <span className="bg-gradient-to-r from-[#0070cc] via-[#00b4ff] to-[#0070cc] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Challenges
            </span>
          </h2>
          <p className="text-xl text-neutral4 max-w-3xl mx-auto">
            Each month will have a different activity sponsored by a different industry partner. 
            Click the card to view and complete the activity.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
          {timelineData.map((item, index) => (
            <div
              key={index}
              id={item.month === "October" && item.year === "2025" ? "october-activity-card" : undefined}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <TimelineCard
                item={item}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}