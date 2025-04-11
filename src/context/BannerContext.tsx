"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type TextField = 'name' | 'role' | 'email' | 'github' | 'skills';

export interface Position {
  x: number;
  y: number;
}

interface BannerState {
  name: string;
  role: string;
  email: string;
  github: string;
  skills: string[];
  theme: string;
  fontFamily: string;
  gradient: {
    from: string;
    to: string;
  };
  textColor: string;
  textPositions: Record<TextField, Position>;
  textSizes: Record<TextField, number>;
}

interface BannerContextType extends BannerState {
  setBannerData: (data: Partial<BannerState>) => void;
}

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export const BannerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bannerData, setBannerData] = useState<BannerState>({
    name: '',
    role: '',
    email: '',
    github: '',
    skills: [],
    theme: 'default',
    fontFamily: 'sans-serif',
    gradient: {
      from: '#000000',
      to: '#4a044e'
    },
    textColor: '#ffffff',
    textPositions: {
      name: { x: 50, y: 50 },
      role: { x: 50, y: 60 },
      email: { x: 50, y: 70 },
      github: { x: 50, y: 80 },
      skills: { x: 50, y: 90 }
    },
    textSizes: {
      name: 24,
      role: 20,
      email: 16,
      github: 16,
      skills: 16
    }
  });

  const updateBannerData = (data: Partial<BannerState>) => {
    setBannerData(prev => ({
      ...prev,
      ...data
    }));
  };

  return (
    <BannerContext.Provider value={{ ...bannerData, setBannerData: updateBannerData }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBanner = () => {
  const context = useContext(BannerContext);
  if (context === undefined) {
    throw new Error('useBanner must be used within a BannerProvider');
  }
  return context;
}; 