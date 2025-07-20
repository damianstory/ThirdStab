"use client";

import { getSponsorsByType } from '../data/sponsors';
import { DollarSign, Trophy, User, GraduationCap } from 'lucide-react';

export default function IncentivePartners() {
  const studentSponsors = getSponsorsByType('student');
  const completionSponsors = getSponsorsByType('completion');
  const educatorSponsors = getSponsorsByType('educator');
  const schoolSponsors = getSponsorsByType('school');

  const partnerCategories = [
    {
      title: 'Student Microgrant Partners',
      icon: DollarSign,
      sponsors: studentSponsors,
      bgColor: 'bg-blue-50',
      iconBgColor: 'bg-[#0092ff]',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Series Completion Partners',
      icon: Trophy,
      sponsors: completionSponsors,
      bgColor: 'bg-purple-50',
      iconBgColor: 'bg-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Educator Prize Partners',
      icon: User,
      sponsors: educatorSponsors,
      bgColor: 'bg-green-50',
      iconBgColor: 'bg-green-600',
      borderColor: 'border-green-200'
    },
    {
      title: 'School Recognition Partners',
      icon: GraduationCap,
      sponsors: schoolSponsors,
      bgColor: 'bg-amber-50',
      iconBgColor: 'bg-amber-600',
      borderColor: 'border-amber-200'
    }
  ];

  return (
    <section id="incentive-partners" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-[#0092ff]">Incentive Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working together with industry leaders to provide meaningful rewards and recognition for students, educators, and schools
          </p>
        </div>

        {/* Partner Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerCategories.map((category, index) => (
            <div key={index} className={`${category.bgColor} rounded-xl p-6`}>
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${category.iconBgColor} rounded-full flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Sponsors List */}
              <div className="space-y-4">
                {category.sponsors.map((sponsor) => (
                  <div 
                    key={sponsor.id} 
                    className={`bg-white p-4 rounded-lg border ${category.borderColor} shadow-sm`}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Sponsor Logo */}
                      <div className="flex-shrink-0">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      
                      {/* Sponsor Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 mb-1">{sponsor.name}</h4>
                        <p className="text-sm text-gray-600">{sponsor.contribution}</p>
                        {sponsor.amount && (
                          <p className="text-sm font-medium text-gray-700 mt-1">{sponsor.amount}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}