import React from 'react';
import { useBanner } from '../context/BannerContext';

interface BannerPreviewProps {}

export const BannerPreview: React.FC<BannerPreviewProps> = () => {
  const { name, role, email, github, skills, theme, fontFamily, gradient, textColor } = useBanner();

  return (
    <div 
      className="w-[1400px] h-[350px] rounded-lg p-8 flex flex-col justify-between"
      style={{
        background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
        color: textColor
      }}
    >
      <div>
        <h2 className={`text-5xl font-bold mb-2 ${fontFamily === 'serif' ? 'font-serif' : fontFamily === 'monospace' ? 'font-mono' : 'font-sans'}`}>
          {name || 'Nome do Usuário'}
        </h2>
        <p className={`text-2xl ${fontFamily === 'serif' ? 'font-serif' : fontFamily === 'monospace' ? 'font-mono' : 'font-sans'}`}>
          {role || 'Cargo do Usuário'}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <img 
            key={index}
            src={`/skills/${skill.toLowerCase()}.png`}
            alt={skill}
            className="w-12 h-12 object-contain"
          />
        ))}
      </div>

      <div className="flex gap-6">
        {github && (
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>github.com/{github}</span>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
            <span>{email}</span>
          </div>
        )}
      </div>
    </div>
  );
}; 