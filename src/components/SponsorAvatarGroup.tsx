"use client";

import React from 'react';
import AvatarGroup from './ui/avatar-group';
import { Sponsor } from '../data/sponsors';

interface SponsorAvatarGroupProps {
  sponsors: Sponsor[];
  maxVisible?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isStudentSponsors?: boolean;
  isCompletionSponsors?: boolean;
  isEducatorSponsors?: boolean;
  isSchoolSponsors?: boolean;
}

export default function SponsorAvatarGroup({ 
  sponsors, 
  maxVisible = 5, 
  size = 'sm',
  className,
  isStudentSponsors = false,
  isCompletionSponsors = false,
  isEducatorSponsors = false,
  isSchoolSponsors = false
}: SponsorAvatarGroupProps) {
  // Transform sponsor data to match the AvatarItem interface
  const avatarItems = sponsors.map((sponsor, index) => {
    let imageUrl = sponsor.logo || '/images/avatar-default.png';
    let name = sponsor.name;
    let designation = sponsor.contribution || 'Sponsor';
    
    // Replace specific images and text for student sponsors
    if (isStudentSponsors && index < 9) {
      const customImages = [
        '/images/avatar-1.png',    // Avatar 1
        '/images/skillscanada-hand.png',    // Avatar 2 - Skills Canada
        '/images/avatar-3.png',    // Avatar 3
        sponsor.logo || '/images/avatar-default.png', // Avatar 4 - keep original
        '/images/avatar-5.png',    // Avatar 5
        '/images/avatar-6.png',    // Avatar 6
        '/images/avatar-7.png',    // Avatar 7
        '/images/career-hrai-logo.jpg',     // Avatar 8
        '/images/jack-org-faviconV2.png'    // Avatar 9
      ];

      const customTitles = [
        'Mining Industry Human Resources Council',
        'Skills/Compétences Canada',
        'myBlueprint',
        sponsor.name, // Avatar 4 - keep original
        'Zurich Canada',
        'H&R Block Canada',
        'Tourism HR Canada',
        'Heating, Refrigeration and Air Conditioning Institute of Canada',
        'Jack.org'
      ];

      const customDesignations = [
        'Activity: October 2025',
        'Activity: November 2025',
        'Activity: December 2025',
        sponsor.contribution || 'Sponsor', // Avatar 4 - keep original
        'Activity: February 2026',
        'Activity: March 2026',
        'Activity: April 2026',
        'Activity: May-1 2026',
        'Activity: May-2 2026'
      ];
      
      imageUrl = customImages[index];
      name = customTitles[index];
      designation = customDesignations[index];
    }
    
    // Replace text for completion sponsors
    if (isCompletionSponsors && index < 4) {
      const completionTitles = [
        'Shad Canada',
        'JobSpark',
        'AdmissionPrep',
        'Straight Up Health'
      ];
      
      const completionDesignations = [
        '5x Entrance Scholarships',
        '30x Access Codes',
        '5x Program Sponsorships (full ride)',
        'Young Opportunity Leaders Organization (3 full rides available)'
      ];
      
      name = completionTitles[index];
      designation = completionDesignations[index];
    }
    
    // Replace text for educator sponsors
    if (isEducatorSponsors && index < 1) {
      const educatorTitles = [
        'SparkPath'
      ];
      
      const educatorDesignations = [
        'Monthly Physical Challenge Cards Giveaway'
      ];
      
      name = educatorTitles[index];
      designation = educatorDesignations[index];
    }
    
    // Replace text for school sponsors
    if (isSchoolSponsors && index < 4) {
      const schoolImages = [
        sponsor.logo || '/images/avatar-default.png', // Avatar 1 - keep original
        sponsor.logo || '/images/avatar-default.png', // Avatar 2 - keep original  
        sponsor.logo || '/images/avatar-default.png', // Avatar 3 - keep original
        '/images/avatar-question.png' // Avatar 4 - question mark
      ];
      
      const schoolTitles = [
        'Milwaukee Tools',
        'Trade-Finder',
        'SpacesEDU',
        'Your Company'
      ];
      
      const schoolDesignations = [
        '$10,000 worth of Milwaukee Tools',
        'Free Annual License (Ontario Only)',
        'Free SpacesEDU Pro school-wide license (2 available)',
        'Get in touch to get involved'
      ];
      
      imageUrl = schoolImages[index];
      name = schoolTitles[index];
      designation = schoolDesignations[index];
    }
    
    return {
      id: index + 1,
      name: name,
      designation: designation,
      image: imageUrl
    };
  });

  return (
    <AvatarGroup
      items={avatarItems}
      maxVisible={maxVisible}
      size={size}
      className={className}
    />
  );
}