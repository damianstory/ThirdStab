'use client';

import { ExternalLink, FileText, Video, File, Globe } from 'lucide-react';
import { ActivityPageData } from '@/data/activities';
import { trackButtonClick } from '@/lib/analytics';

interface SponsorResourcesProps {
  activity: ActivityPageData;
  resourcesTitle?: string;
  resourcesSubtitle?: string;
  language?: 'en' | 'fr';
}

// Resource type icons and colors
const resourceTypeConfig = {
  pdf: {
    icon: <File size={24} />,
    color: 'text-red-500 bg-red-50'
  },
  video: {
    icon: <Video size={24} />,
    color: 'text-purple-500 bg-purple-50'
  },
  article: {
    icon: <FileText size={24} />,
    color: 'text-green-500 bg-green-50'
  },
  link: {
    icon: <ExternalLink size={24} />,
    color: 'text-blue-500 bg-blue-50'
  }
};

export default function SponsorResources({
  activity,
  resourcesTitle,
  resourcesSubtitle,
  language = 'en'
}: SponsorResourcesProps) {
  const defaultTitle = language === 'en' ? "Choose Your Activity" : "Choisissez votre activité";
  const defaultSubtitle = language === 'en'
    ? "You can complete multiple activities if you want. But one per submission."
    : "Si vous le souhaitez, vous pouvez réaliser plusieurs activités. Mais une seule par soumission.";

  const title = resourcesTitle || defaultTitle;
  const subtitle = resourcesSubtitle || defaultSubtitle;
  const handleResourceClick = (url: string, title: string, type: string) => {
    // Track the resource click
    trackButtonClick(
      `Resource - ${title}`,
      `${activity.month} Activity - ${type}`
    );

    // Open the resource
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Check if resources have images (image-based design for November)
  const hasImages = activity.resources.some(resource => resource.image);

  return (
    <section className="py-16 lg:py-20 px-4 md:px-12 bg-[#F8FAFB]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-[#22224C] mb-4">
            {title}
          </h2>
          <p className="brand-body1 text-neutral-500">
            {subtitle}
          </p>
        </div>

        {/* Image-based Grid (November activities) */}
        {hasImages ? (
          <div className="flex flex-col gap-6">
            {/* First Row - 2 items centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
              {activity.resources.slice(0, 2).map((resource, index) => (
                <div
                  key={index}
                  onClick={() => handleResourceClick(resource.url, resource.title, resource.type)}
                  className="bg-white border border-neutral2 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#0092ff] group flex flex-col aspect-[9/8]"
                >
                  {/* Image Container */}
                  <div className="flex-1 relative bg-gradient-to-br from-[#0092ff]/10 to-[#0092ff]/5 overflow-hidden">
                    {resource.image ? (
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className={`w-full h-full object-cover ${
                          resource.title === 'Cooking' || resource.title === 'Cuisine'
                            ? 'object-[center_35%]'
                            : 'object-[center_30%]'
                        } group-hover:scale-105 transition-transform duration-300`}
                        style={
                          resource.title === 'Cooking' || resource.title === 'Cuisine'
                            ? { filter: 'contrast(0.85) saturate(0.88) brightness(0.96)' }
                            : undefined
                        }
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[#0092ff]/20"></div>
                      </div>
                    )}
                  </div>

                  {/* Activity Name */}
                  <div className="px-4 py-3 bg-white border-t border-neutral2/50">
                    <h3 className="brand-body2 font-bold text-[#22224C] text-center">
                      {resource.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activity.resources.slice(2).map((resource, index) => (
                <div
                  key={index + 2}
                  onClick={() => handleResourceClick(resource.url, resource.title, resource.type)}
                  className="bg-white border border-neutral2 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#0092ff] group flex flex-col aspect-[9/8]"
                >
                  {/* Image Container */}
                  <div className="flex-1 relative bg-gradient-to-br from-[#0092ff]/10 to-[#0092ff]/5 overflow-hidden">
                    {resource.image ? (
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className={`w-full h-full object-cover ${
                          resource.title === 'Cooking' || resource.title === 'Cuisine'
                            ? 'object-[center_35%]'
                            : 'object-[center_30%]'
                        } group-hover:scale-105 transition-transform duration-300`}
                        style={
                          resource.title === 'Cooking' || resource.title === 'Cuisine'
                            ? { filter: 'contrast(0.85) saturate(0.88) brightness(0.96)' }
                            : undefined
                        }
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-[#0092ff]/20"></div>
                      </div>
                    )}
                  </div>

                  {/* Activity Name */}
                  <div className="px-4 py-3 bg-white border-t border-neutral2/50">
                    <h3 className="brand-body2 font-bold text-[#22224C] text-center">
                      {resource.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Text-based Grid (other activities) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-[1fr] auto-rows-fr">
            {activity.resources.map((resource, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleResourceClick(resource.url, resource.title, resource.type)}
                  className="bg-white border border-neutral2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#0092ff] group h-full flex flex-col"
                >
                  {/* Resource Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-500 bg-blue-50 group-hover:scale-110 transition-transform duration-200">
                    <ExternalLink size={24} />
                  </div>

                  {/* Resource Title */}
                  <h3 className="brand-h4 text-[#22224C] mb-3 leading-tight">
                    {resource.title}
                  </h3>

                  {/* Resource Description */}
                  <p className="brand-body2 text-neutral-500 leading-relaxed mb-4 flex-1 line-clamp-3 whitespace-pre-line">
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
        )}
      </div>
    </section>
  );
}
