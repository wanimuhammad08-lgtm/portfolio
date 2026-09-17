import React from 'react';

export const CreamRule: React.FC = () => {
  return (
    <div
      className="anim-line absolute inset-x-10 bottom-28 z-10 h-0.5 bg-cream pointer-events-none hidden lg:block"
      style={{ animationDelay: '1200ms' }}
      aria-hidden="true"
    />
  );
};
