import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    textColor: '#ffffff'
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