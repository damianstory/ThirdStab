'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecipientsHero from '@/components/grant-recipients/RecipientsHero';
import MonthFilter from '@/components/grant-recipients/MonthFilter';
import MonthSection from '@/components/grant-recipients/MonthSection';
import VideoCard from '@/components/grant-recipients/VideoCard';
import { allMonths, getEnabledMonths, getMonthBySlug } from '@/data/grant-recipients';

export default function GrantRecipientsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const enabledMonths = getEnabledMonths();

  const handleFilterChange = (slug: string) => {
    setActiveFilter(slug);
  };

  // Get months to display based on filter
  const monthsToDisplay = activeFilter === 'all'
    ? enabledMonths
    : enabledMonths.filter(m => m.slug === activeFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-offWhite">
        <RecipientsHero language="en" />

        <MonthFilter
          months={allMonths}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          language="en"
        />

        {/* Month Sections with Video Grids */}
        {monthsToDisplay.map((month) => (
          <section key={month.slug}>
            <MonthSection month={month} language="en" />

            {/* Video Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {month.winners.map((winner) => (
                  <VideoCard key={winner.id} winner={winner} language="en" />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Empty State - if no enabled months yet */}
        {monthsToDisplay.length === 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <p className="text-neutral5 text-lg">
              No grant recipients to display yet. Check back soon!
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
