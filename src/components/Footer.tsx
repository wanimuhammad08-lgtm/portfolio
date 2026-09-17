import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream pointer-events-none select-none">
      {/* Left Column */}
      <div
        className="anim-fade-up flex flex-col text-left text-cream/90"
        style={{ animationDelay: '1400ms' }}
      >
        {portfolioData.taglines.map((line, idx) => (
          <span key={idx}>{line}</span>
        ))}
      </div>

      {/* Right Column (Right-aligned) */}
      <div
        className="anim-fade-up flex flex-col text-right text-cream/90"
        style={{ animationDelay: '1550ms' }}
      >
        {portfolioData.homage.map((line, idx) => (
          <span key={idx}>{line}</span>
        ))}
      </div>
    </footer>
  );
};
