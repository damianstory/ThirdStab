import { ActivityPageData } from '@/data/activities';

interface VideoAndExplainerProps {
  activity: ActivityPageData;
}

export default function VideoAndExplainer({ activity }: VideoAndExplainerProps) {
  return (
    <section className="py-16 lg:py-20 px-4 md:px-12 bg-[#F8FAFB]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Video Section - Left Column */}
          <div className="order-1">
            <h3 className="brand-h3 text-[#22224C] mb-4">
              {activity.video.title}
            </h3>
            <p className="brand-body2 text-neutral-500 mb-6">
              {activity.video.description}
            </p>
            
            {/* Video Embed Container */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/WevQbV6TLv8"
                title="Mining Needs You"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Explainer Table - Right Column */}
          <div className="order-2">
            <h3 className="brand-h3 text-[#22224C] mb-6">
              {activity.explainer.title}
            </h3>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral2">
              {activity.explainer.rows.map((row, index) => (
                <div
                  key={index}
                  className={`px-6 py-4 ${
                    index !== activity.explainer.rows.length - 1 ? 'border-b border-neutral2' : ''
                  }`}
                >
                  <div className="font-semibold text-[#22224C] text-sm uppercase tracking-wide mb-1">
                    {row.label}
                  </div>
                  <div className="text-neutral-500 brand-body2">
                    {row.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}