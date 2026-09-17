import React from 'react';

export const Marquee: React.FC = () => {
  return (
    <div
      className="anim-fade-up absolute inset-x-0 top-[15vh] z-10 overflow-hidden select-none pointer-events-none"
      style={{ animationDelay: '500ms' }}
    >
      {/* Font size in vw so crop is proportional at every window width */}
      <h1
        className="marquee flex w-max whitespace-nowrap font-hn leading-none text-cream font-medium tracking-tight"
        style={{ fontSize: 'clamp(80px, 22vw, 340px)' }}
      >
        {/* Track Half 1 */}
        <span className="inline-block pr-[5vw] flex-shrink-0">
          &mdash;&nbsp;Muhammad Ahmad&nbsp;
        </span>

        {/* Track Half 2 (Exact duplicate for seamless loop) */}
        <span className="inline-block pr-[5vw] flex-shrink-0" aria-hidden="true">
          &mdash;&nbsp;Muhammad Ahmad&nbsp;
        </span>
      </h1>
    </div>
  );
};
