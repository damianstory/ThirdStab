import Link from 'next/link';
import Image from 'next/image';
import { getActivitiesWithStatus, getCurrentStatus, ActivityPageData } from '@/data/activities';

interface IncentivesAndNavigationProps {
  currentActivity: ActivityPageData;
}

export default function IncentivesAndNavigation({ currentActivity }: IncentivesAndNavigationProps) {
  const activitiesWithStatus = getActivitiesWithStatus();
  

  return (
    <section className="py-16 lg:py-20 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Activity Navigation Section */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-[#22224C] mb-6">
            Explore Other Activities
          </h2>
          <p className="brand-body1 text-neutral-500">
            Navigate to other monthly challenges
          </p>
        </div>
        {/* Activity Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {activitiesWithStatus.map((activity) => {
                const isCurrent = activity.slug === currentActivity.slug;
                const status = getCurrentStatus(activity.month, activity.year);
                
                return (
                  <Link
                    key={activity.id}
                    href={`/${activity.slug}`}
                    className={`
                      block p-4 rounded-lg border transition-all duration-200 hover:shadow-md
                      ${isCurrent 
                        ? 'border-2 border-[#0092ff] bg-[#E6F4FF]' 
                        : 'border border-neutral2 bg-white hover:border-[#0092ff]'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {/* Activity Logo */}
                      <div className="w-12 h-12 relative bg-gray-50 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={activity.sponsor.logo}
                          alt={activity.sponsor.name}
                          fill
                          className={`object-contain ${
                            activity.sponsor.logoType === 'tall' ? 'p-1' :
                            activity.sponsor.logoType === 'wide' ? 'p-2' : 'p-1.5'
                          }`}
                          sizes="48px"
                        />
                      </div>
                      
                      {/* Activity Info */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-neutral-500 uppercase tracking-wide">
                          {activity.month}
                        </div>
                        <div className={`text-sm font-medium truncate ${
                          isCurrent ? 'text-[#0092ff]' : 'text-[#22224C]'
                        }`}>
                          {activity.title.split(' ').slice(0, 2).join(' ')}
                        </div>
                        
                        {/* Status Badge */}
                        <div className={`
                          inline-block text-xs px-2 py-1 rounded-full mt-1
                          ${status === 'active' ? 'bg-green-100 text-green-700' :
                            status === 'ongoing' ? 'bg-gray-100 text-gray-600' :
                            'bg-orange-100 text-orange-700'
                          }
                        `}>
                          {status === 'active' ? 'Active' :
                           status === 'ongoing' ? 'Ended' : 'Coming Soon'}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
    </section>
  );
}