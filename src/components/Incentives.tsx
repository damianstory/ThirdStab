"use client";

import { DollarSign, Trophy, User, GraduationCap } from 'lucide-react';
import { getLimitedSponsorsByType } from '../data/sponsors';
import SponsorAvatarGroup from './SponsorAvatarGroup';

export default function Incentives() {
  const studentSponsors = getLimitedSponsorsByType('student', 9);
  const completionSponsors = getLimitedSponsorsByType('completion', 4);
  const educatorSponsors = getLimitedSponsorsByType('educator', 2);
  const schoolSponsors = getLimitedSponsorsByType('school', 4);
  return (
    <section id="incentives" className="pt-24 pb-16 px-4 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-navy mb-4">
            Incentives
          </h2>
          <p className="text-xl text-neutral4 max-w-3xl mx-auto">
            Not just for students. Educators and schools are eligible for incentives too 👏
          </p>
        </div>

        {/* Incentive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 01: Monthly Student Microgrants */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-[#0092ff] font-semibold mb-2 block">01</span>
            <h3 className="brand-h4 mb-3 text-navy">Monthly Student Microgrants</h3>
            <p className="brand-body2 text-neutral4 mb-6">
              We award microgrants of $500 each to 20 students who submit outstanding work for that month&apos;s industry challenge.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0092ff] rounded-full flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Monthly Distribution</p>
                  <p className="text-xl font-bold text-navy">$10,000 Every Month</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0092ff] mr-2">•</span>
                  <span className="text-neutral5">20 microgrants awarded each month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0092ff] mr-2">•</span>
                  <span className="text-neutral5">$500 per student recipient</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0092ff] mr-2">•</span>
                  <span className="text-neutral5">Assessed against activity specific rubric</span>
                </li>
              </ul>
            </div>
            
            {/* Sponsor Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Sponsored by</p>
              <div className="flex justify-start">
                <SponsorAvatarGroup
                  sponsors={studentSponsors.sponsors}
                  maxVisible={9}
                  size="sm"
                  isStudentSponsors={true}
                />
              </div>
            </div>
          </div>

          {/* Card 02: Series Completion Incentive */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-[#0092ff] font-semibold mb-2 block">02</span>
            <h3 className="brand-h4 mb-3 text-navy">Series Completion Incentive</h3>
            <p className="brand-body2 text-neutral4 mb-6">
              Students who complete all 9 monthly activities are eligible for separate series completion incentives.
            </p>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Effort Rewarded</p>
                  <p className="text-xl font-bold text-navy">More Chances to Win</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-neutral5">Must complete all 9 monthly activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-neutral5">Winners will be randomly chosen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="text-neutral5">Multiple different incentives available</span>
                </li>
              </ul>
            </div>
            
            {/* Sponsor Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Sponsored by</p>
              <div className="flex justify-start">
                <SponsorAvatarGroup 
                  sponsors={completionSponsors.sponsors}
                  maxVisible={4}
                  size="sm"
                  isCompletionSponsors={true}
                />
              </div>
            </div>
          </div>

          {/* Card 03: Educator-Level Incentives */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-[#0092ff] font-semibold mb-2 block">03</span>
            <h3 className="brand-h4 mb-3 text-navy">Educator-Level Incentives</h3>
            <p className="brand-body2 text-neutral4 mb-6">
              Educators on the Industry Immersion Series mailing list can win prizes designed to support your classroom, and make you smile!
            </p>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Why Should Students Have All The Fun?</p>
                  <p className="text-xl font-bold text-navy">Educator Incentive</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-neutral5">Monthly prizes for educators on the mailing list</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-neutral5">Winners will be randomly chosen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-neutral5">Sign up with your school email to be eligible.</span>
                </li>
              </ul>
            </div>
            
            {/* Sponsor Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Sponsored by</p>
              <div className="flex justify-start">
                <SponsorAvatarGroup 
                  sponsors={educatorSponsors.sponsors}
                  maxVisible={2}
                  size="sm"
                  isEducatorSponsors={true}
                />
              </div>
            </div>
          </div>

          {/* Card 04: School-Level Incentive */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <span className="text-[#0092ff] font-semibold mb-2 block">04</span>
            <h3 className="brand-h4 mb-3 text-navy">School-Level Incentive</h3>
            <p className="brand-body2 text-neutral4 mb-6">
              Schools with 100+ students who complete all monthly activities are entered to win some legit school-level prizes.
            </p>
            
            <div className="bg-amber-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Building Incentive</p>
                  <p className="text-xl font-bold text-navy">Recognition Award</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-neutral5">Requires 100+ student participants from your school</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-neutral5">Who must each complete all 8 monthly activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span className="text-neutral5">More students participating = more chances to win</span>
                </li>
              </ul>
            </div>
            
            {/* Sponsor Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Sponsored by</p>
              <div className="flex justify-start">
                <SponsorAvatarGroup 
                  sponsors={schoolSponsors.sponsors}
                  maxVisible={4}
                  size="sm"
                  isSchoolSponsors={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}