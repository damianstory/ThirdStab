'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface TopicCluster {
  id: string;
  number: number;
  title: string;
  concepts: string;
  detailedContent: string;
}

interface TopicClustersProps {
  clusters: TopicCluster[];
}

export default function TopicClusters({ clusters }: TopicClustersProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!clusters || clusters.length === 0) {
    return null;
  }

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      aria-label="Topic Clusters"
      className="py-12 px-4 md:py-16 md:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="brand-h2 text-[#22224C] mb-3">
            Topic Clusters
          </h2>
          <p className="brand-body1 text-neutral-500">
            Choose one of these — click to learn more
          </p>
        </div>

        {/* Cluster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clusters.map((cluster) => {
            const isExpanded = expandedId === cluster.id;

            return (
              <div key={cluster.id} className="flex flex-col">
                {/* Clickable Card */}
                <button
                  onClick={() => handleToggle(cluster.id)}
                  className={`group relative bg-gradient-to-br from-slate-50 to-slate-100
                             rounded-xl border-l-4 border-brandBlue p-5 text-left
                             transition-all duration-200 hover:shadow-md hover:from-slate-100 hover:to-slate-150
                             min-h-[100px]
                             ${isExpanded ? 'shadow-md ring-2 ring-brandBlue/20' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Cluster Number Badge */}
                    <div className="flex-shrink-0 w-8 h-8 bg-brandBlue text-white rounded-lg
                                  flex items-center justify-center font-bold text-sm">
                      {cluster.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-navy text-base mb-1 group-hover:text-brandBlue transition-colors">
                        {cluster.title}
                      </h3>
                      <p className="text-neutral-500 text-sm">
                        {cluster.concepts}
                      </p>
                    </div>

                    {/* Chevron */}
                    <div className="flex-shrink-0 ml-2">
                      <ChevronDown
                        className={`w-5 h-5 text-neutral-400 group-hover:text-brandBlue
                                   transition-all duration-300 ${isExpanded ? 'rotate-180 text-brandBlue' : ''}`}
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="mt-2 bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                    <div
                      className="prose prose-sm max-w-none text-neutral-600
                                [&_h4]:text-navy [&_h4]:font-bold [&_h4]:text-sm [&_h4]:mb-2 [&_h4]:mt-4 first:[&_h4]:mt-0
                                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2
                                [&_li]:text-sm [&_li]:mb-1
                                [&_p]:text-sm [&_p]:mb-3 [&_p]:leading-relaxed
                                [&_strong]:text-navy"
                      dangerouslySetInnerHTML={{ __html: cluster.detailedContent }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
