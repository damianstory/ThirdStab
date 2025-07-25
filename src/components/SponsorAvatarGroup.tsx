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
    let imageUrl = sponsor.logo || 'https://i.imgur.com/H8aWe1S.png';
    let name = sponsor.name;
    let designation = sponsor.contribution || 'Sponsor';
    
    // Replace specific images and text for student sponsors
    if (isStudentSponsors && index < 8) {
      const customImages = [
        'https://i.imgur.com/drvople.png',    // Avatar 1
        'https://i.imgur.com/d0woLhT.png',    // Avatar 2
        'https://i.imgur.com/5LyeXPx.png',    // Avatar 3
        sponsor.logo || 'https://i.imgur.com/H8aWe1S.png', // Avatar 4 - keep original
        'https://i.imgur.com/ACZNXKu.png',    // Avatar 5
        'https://i.imgur.com/xNtPmLx.png',    // Avatar 6
        'https://i.imgur.com/JiyD4VO.png',    // Avatar 7
        'https://i.imgur.com/qGJAjd0.png'     // Avatar 8
      ];
      
      const customTitles = [
        'Mining Industry Human Resources Council',
        'Mydoh',
        'myBlueprint',
        sponsor.name, // Avatar 4 - keep original
        'Zurich Canada',
        'H&R Block Canada',
        'Tourism HR Canada',
        'Heating, Refrigeration and Air Conditioning Institute of Canada'
      ];
      
      const customDesignations = [
        'Activity: October 2025',
        'Activity: November 2025',
        'Activity: December 2025',
        sponsor.contribution || 'Sponsor', // Avatar 4 - keep original
        'Activity: February 2026',
        'Activity: March 2026',
        'Activity: April 2026',
        'Activity: May 2026'
      ];
      
      imageUrl = customImages[index];
      name = customTitles[index];
      designation = customDesignations[index];
    }
    
    // Replace text for completion sponsors
    if (isCompletionSponsors && index < 2) {
      const completionTitles = [
        'SHAD Canada',
        'JobSpark'
      ];
      
      const completionDesignations = [
        '5x Entrance Scholarships',
        '30x Access Codes'
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
    if (isSchoolSponsors && index < 2) {
      const schoolTitles = [
        'Milwaukee Tools',
        'Trade-Finder'
      ];
      
      const schoolDesignations = [
        '$10,000 worth of Milwaukee Tools',
        'Free Annual License (Ontario Only)'
      ];
      
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