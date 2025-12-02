import { SponsorPageData } from '@/data/sponsors';
import { FileText, Video, Link as LinkIcon, Newspaper, ExternalLink } from 'lucide-react';

interface SponsorResourcesProps {
  sponsor: SponsorPageData;
  language?: 'en' | 'fr';
}

const text = {
  en: {
    title: 'Resources',
    subtitle: 'Explore more from'
  },
  fr: {
    title: 'Ressources',
    subtitle: 'Explorez plus de'
  }
};

const typeIcons = {
  pdf: FileText,
  video: Video,
  link: LinkIcon,
  article: Newspaper
};

const typeLabels = {
  en: {
    pdf: 'PDF',
    video: 'Video',
    link: 'Link',
    article: 'Article'
  },
  fr: {
    pdf: 'PDF',
    video: 'Video',
    link: 'Lien',
    article: 'Article'
  }
};

export default function SponsorResources({ sponsor, language = 'en' }: SponsorResourcesProps) {
  if (!sponsor.careerResources || sponsor.careerResources.length === 0) {
    return null;
  }

  const t = text[language];
  const labels = typeLabels[language];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="brand-h2 text-navy mb-2">
          {t.title}
        </h2>
        <p className="brand-body1 text-neutral-500 mb-8">
          {t.subtitle} {sponsor.name}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsor.careerResources.map((resource, index) => {
            const Icon = typeIcons[resource.type];

            return (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-lightBlue/30 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-brandBlue/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brandBlue" />
                  </div>
                  <span className="text-xs font-medium text-brandBlue uppercase tracking-wide">
                    {labels[resource.type]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="brand-h4 text-navy mb-2 group-hover:text-brandBlue transition-colors">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="brand-body2 text-neutral-500 mb-4 line-clamp-2">
                  {resource.description}
                </p>

                {/* Link indicator */}
                <div className="flex items-center gap-1 text-brandBlue text-sm font-medium">
                  <span>{language === 'fr' ? 'Visiter' : 'Visit'}</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
