'use client';

import { ActivityPageData } from '@/data/activities';

interface SponsorResourcesProps {
  activity: ActivityPageData;
}

// Resource type icons and colors
const resourceTypeConfig = {
  pdf: {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      </svg>
    ),
    color: 'text-red-500 bg-red-50'
  },
  video: {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
      </svg>
    ),
    color: 'text-purple-500 bg-purple-50'
  },
  article: {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>
    ),
    color: 'text-green-500 bg-green-50'
  },
  link: {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.59,13.41C11,13.8 11,14.4 10.59,14.81C10.2,15.2 9.6,15.2 9.19,14.81L7.77,13.39C7,12.61 7,11.35 7.77,10.58L10.58,7.77C11.35,7 12.61,7 13.39,7.77L14.8,9.19C15.2,9.6 15.2,10.2 14.8,10.61C14.4,11 13.8,11 13.39,10.61L12,9.19C11.61,8.8 10.99,8.8 10.61,9.19L8.81,11C8.4,11.39 8.4,12 8.81,12.39L10.59,13.41M13.41,9.19C13.8,8.8 14.4,8.8 14.81,9.19C15.2,9.6 15.2,10.2 14.81,10.61L13.39,12C13,12.39 13,12.99 13.39,13.39L14.8,14.8C15.2,15.2 15.8,15.2 16.2,14.8C16.6,14.4 16.6,13.8 16.2,13.39L15.8,13C16.57,12.2 16.57,10.94 15.8,10.17L13.39,7.77C12.61,7 11.35,7 10.58,7.77L9.19,9.19C8.8,9.6 8.8,10.2 9.19,10.61C9.6,11 10.2,11 10.61,10.61L12,9.19C12.39,8.8 13,8.8 13.41,9.19Z" />
      </svg>
    ),
    color: 'text-blue-500 bg-blue-50'
  }
};

export default function SponsorResources({ activity }: SponsorResourcesProps) {
  const handleResourceClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 lg:py-20 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-[#22224C] mb-4">
            {activity.sponsor.name} Resources
          </h2>
          <p className="brand-body1 text-neutral-500">
            Resources to help you succeed in this challenge
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activity.resources.map((resource, index) => {
            const typeConfig = resourceTypeConfig[resource.type];
            
            return (
              <div
                key={index}
                onClick={() => handleResourceClick(resource.url)}
                className="bg-white border border-neutral2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#0092ff] group"
              >
                {/* Resource Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${typeConfig.color} group-hover:scale-110 transition-transform duration-200`}>
                  {typeConfig.icon}
                </div>
                
                {/* Resource Title */}
                <h3 className="brand-h4 text-[#22224C] mb-3 leading-tight">
                  {resource.title}
                </h3>
                
                {/* Resource Description */}
                <p className="brand-body2 text-neutral-500 leading-relaxed mb-4">
                  {resource.description}
                </p>
                
                {/* Resource Link */}
                <div className="flex items-center text-[#0092ff] font-medium text-sm group-hover:underline">
                  <span className="mr-2">
                    {resource.type === 'pdf' ? 'Download' :
                     resource.type === 'video' ? 'Watch' :
                     resource.type === 'article' ? 'Read' : 'Visit'}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}