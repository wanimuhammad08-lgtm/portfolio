import React from 'react';

export const FrontPortrait: React.FC = () => {
  return (
    <div
      className="anim-rise-in absolute inset-0 z-20 pointer-events-none overflow-hidden"
      style={{ animationDelay: '300ms' }}
    >
      <img
        src="/portrait-cutout.png"
        alt="Portrait"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
      />
    </div>
  );
};
