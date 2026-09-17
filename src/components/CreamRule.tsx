import React from 'react';

export const CreamRule: React.FC = () => {
  return (
    <div
      className="anim-line absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream pointer-events-none"
      style={{ animationDelay: '1200ms' }}
      aria-hidden="true"
    />
  );
};
