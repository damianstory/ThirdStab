"use client";

import React from 'react';
import AvatarGroup from './ui/avatar-group';
import { Sponsor } from '../data/sponsors';

interface SponsorAvatarGroupProps {
  sponsors: Sponsor[];
  maxVisible?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SponsorAvatarGroup({ 
  sponsors, 
  maxVisible = 5, 
  size = 'sm',
  className 
}: SponsorAvatarGroupProps) {
  // Transform sponsor data to match the AvatarItem interface
  const avatarItems = sponsors.map((sponsor, index) => ({
    id: index + 1,
    name: sponsor.name,
    designation: sponsor.contribution || 'Sponsor',
    image: sponsor.logo || 'https://i.imgur.com/H8aWe1S.png'
  }));

  return (
    <AvatarGroup
      items={avatarItems}
      maxVisible={maxVisible}
      size={size}
      className={className}
    />
  );
}