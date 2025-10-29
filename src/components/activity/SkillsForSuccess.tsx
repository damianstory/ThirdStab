'use client';

import { useState } from 'react';
import { ActivityPageData } from '@/data/activities';
import { trackButtonClick } from '@/lib/analytics';
import Modal from '@/components/Modal';

interface SkillsForSuccessProps {
  activity: ActivityPageData;
  language?: 'en' | 'fr';
}

// Helper function to get language-specific skill name
function getSkillName(skillKey: string, language: 'en' | 'fr' = 'en'): string {
  const skillNames: { [key: string]: { en: string; fr: string } } = {
    'numeracy': { en: 'Numeracy', fr: 'Calcul' },
    'communication': { en: 'Communication', fr: 'Communication' },
    'collaboration': { en: 'Collaboration', fr: 'Collaboration' },
    'problemSolving': { en: 'Problem Solving', fr: 'Résolution de problèmes' },
    'writing': { en: 'Writing', fr: 'Rédaction' },
    'adaptability': { en: 'Adaptability', fr: 'Adaptabilité' },
    'reading': { en: 'Reading', fr: 'Lecture' },
    'creativityInnovation': { en: 'Creativity & Innovation', fr: 'Créativité et innovation' },
    'digitalSkills': { en: 'Digital Skills', fr: 'Compétences numériques' },
  };

  return skillNames[skillKey]?.[language] || skillNames[skillKey]?.en || skillKey;
}

// Helper function to get language-specific video URL
function getSkillVideoUrl(skillKey: string, language: 'en' | 'fr' = 'en'): string {
  const videoUrls: { [key: string]: { en: string; fr: string } } = {
    'numeracy': {
      en: 'https://www.youtube.com/embed/5vCKnP4YrVA',
      fr: 'https://www.youtube.com/embed/8fDPj2u6lk8'
    },
    'communication': {
      en: 'https://www.youtube.com/embed/v7jnZ_6z_ng',
      fr: 'https://www.youtube.com/embed/tNIcVusEEfc'
    },
    'collaboration': {
      en: 'https://www.youtube.com/embed/ptoDay-y-fI',
      fr: 'https://www.youtube.com/embed/cMD7alXd-B0'
    },
    'problemSolving': {
      en: 'https://www.youtube.com/embed/2B0q_QaPh3E',
      fr: 'https://www.youtube.com/embed/huQC2s-8y84'
    },
    'writing': {
      en: 'https://www.youtube.com/embed/CB5E_zXLNqo',
      fr: 'https://www.youtube.com/embed/U5VBJQzOKz4'
    },
    'adaptability': {
      en: 'https://www.youtube.com/embed/9X0QCkBoC1Y',
      fr: 'https://www.youtube.com/embed/Mes63h60Z9Q'
    },
    'reading': {
      en: 'https://www.youtube.com/embed/9Un60sYjtio',
      fr: 'https://www.youtube.com/embed/q_2gYVVQc0Y'
    },
    'creativityInnovation': {
      en: 'https://www.youtube.com/embed/kdvjgfqYc10',
      fr: 'https://www.youtube.com/embed/WiGZ4Waz0mQ'
    },
    'digitalSkills': {
      en: 'https://www.youtube.com/embed/XO4o2pL4PWk',
      fr: 'https://www.youtube.com/embed/I5SiGtsuVc8'
    },
  };

  return videoUrls[skillKey]?.[language] || videoUrls[skillKey]?.en || '#';
}

// Helper function to get language-specific image path
function getSkillImage(baseName: string, language: 'en' | 'fr' = 'en'): string {
  const suffix = language === 'fr' ? '_FR' : '_EN';
  // Handle different file extensions for different skills
  const extensionMap: { [key: string]: string } = {
    'numeracy': language === 'fr' ? '.jpg' : '.jpg',
    'Communication': language === 'fr' ? '.png' : '.jpg',
    'Collaboration': language === 'fr' ? '.jpg' : '.jpg',
    'ProblemSolving': language === 'fr' ? '.jpg' : '.jpg',
    'Writing': language === 'fr' ? '.png' : '.jpg',
    'Adaptability': language === 'fr' ? '.jpg' : '.jpg',
    'Reading': language === 'fr' ? '.jpeg' : '.jpg',
    'CreativityInnovation': language === 'fr' ? '.jpg' : '.jpg',
    'DigitalSkills': language === 'fr' ? '.jpg' : '.jpg',
  };

  const extension = extensionMap[baseName] || '.jpg';
  return `/november-skills/${baseName}${suffix}${extension}`;
}

export default function SkillsForSuccess({ activity, language = 'en' }: SkillsForSuccessProps) {
  // Skills for Success data - ordered as requested, with language-aware images, names, and videos
  const skills = [
    { id: 1, name: getSkillName('numeracy', language), videoUrl: getSkillVideoUrl('numeracy', language), image: getSkillImage('numeracy', language) },
    { id: 2, name: getSkillName('communication', language), videoUrl: getSkillVideoUrl('communication', language), image: getSkillImage('Communication', language) },
    { id: 3, name: getSkillName('collaboration', language), videoUrl: getSkillVideoUrl('collaboration', language), image: getSkillImage('Collaboration', language) },
    { id: 4, name: getSkillName('problemSolving', language), videoUrl: getSkillVideoUrl('problemSolving', language), image: getSkillImage('ProblemSolving', language) },
    { id: 5, name: getSkillName('writing', language), videoUrl: getSkillVideoUrl('writing', language), image: getSkillImage('Writing', language) },
    { id: 6, name: getSkillName('adaptability', language), videoUrl: getSkillVideoUrl('adaptability', language), image: getSkillImage('Adaptability', language) },
    { id: 7, name: getSkillName('reading', language), videoUrl: getSkillVideoUrl('reading', language), image: getSkillImage('Reading', language) },
    { id: 8, name: getSkillName('creativityInnovation', language), videoUrl: getSkillVideoUrl('creativityInnovation', language), image: getSkillImage('CreativityInnovation', language) },
    { id: 9, name: getSkillName('digitalSkills', language), videoUrl: getSkillVideoUrl('digitalSkills', language), image: getSkillImage('DigitalSkills', language) },
  ];
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);

  const handleSkillClick = (skill: typeof skills[0]) => {
    // Track the skill click
    trackButtonClick(
      `Skill - ${skill.name}`,
      `${activity.month} Activity - Skills for Success`
    );

    // Open video popup modal if video URL exists
    if (skill.videoUrl && skill.videoUrl !== '#') {
      setSelectedSkill(skill);
      setShowVideoModal(true);
    }
  };

  return (
    <section className="py-16 lg:py-20 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="brand-h2 text-[#22224C] mb-4">
            Learn about the Skills for Success
          </h2>
          <p className="brand-body1 text-neutral-500">
            Explore the nine Skills for Success that help Canadians thrive in work, learning, and life.
          </p>
        </div>

        {/* Skills Grid - 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => handleSkillClick(skill)}
              className="bg-white border border-neutral2 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-[#0092ff] group flex flex-col aspect-[4/3]"
            >
              {/* Image Container */}
              <div className="flex-1 relative bg-gradient-to-br from-[#0092ff]/10 to-[#0092ff]/5 overflow-hidden">
                {skill.image ? (
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#0092ff]/20"></div>
                  </div>
                )}
              </div>

              {/* Skill Name */}
              <div className="px-4 py-3 bg-white border-t border-neutral2/50">
                <h3 className="brand-body2 font-bold text-[#22224C] text-center">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && selectedSkill && (
        <Modal
          isOpen={showVideoModal}
          onClose={() => setShowVideoModal(false)}
          contentClassName="max-w-4xl"
        >
          <div className="bg-white rounded-2xl overflow-hidden relative">
            {/* YouTube embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedSkill.videoUrl}
                title={`${selectedSkill.name} - Skills for Success`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
