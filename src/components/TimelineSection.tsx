import React from 'react';
import { invitationData } from '../data/invitationData';

export const TimelineSection: React.FC = () => {
  return (
    <section className="relative isolate px-4 py-8 z-10 max-w-[500px] mx-auto overflow-hidden font-baskerville">
      {/* Subtle side floral accents */}
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 -translate-x-1/2 h-full w-auto max-w-none object-contain opacity-30 select-none"
        src="./images/decor/floral-side.webp"
      />
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 translate-x-1/2 h-full w-auto max-w-none object-contain opacity-30 scale-x-[-1] select-none"
        src="./images/decor/floral-side.webp"
      />

      <div className="relative z-10 flex flex-col gap-6 items-center">
        <h2 className="font-baskerville font-bold text-xl md:text-2xl text-center tracking-widest uppercase text-[#215589]">
          Wedding Day Schedule
        </h2>

        {/* Timeline Grid */}
        <div className="relative w-full max-w-[420px] mx-auto mt-2">
          <ol className="relative grid grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] items-center gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8">
            {invitationData.timeline.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === invitationData.timeline.length - 1;

              return (
                <li key={index} className="contents">
                  {/* Time on left */}
                  <span className="text-right text-sm sm:text-base font-medium tracking-wide text-[#215589]">
                    {item.time}
                  </span>

                  {/* Vertical Line & Dot in center */}
                  <div className="relative flex items-center justify-center self-stretch">
                    {!isLast && (
                      <span className="absolute left-1/2 -translate-x-1/2 w-[1.5px] top-1/2 -bottom-8 bg-[#215589]/30" />
                    )}
                    {!isFirst && isLast && (
                      <span className="absolute left-1/2 -translate-x-1/2 w-[1.5px] -top-8 bottom-1/2 bg-[#215589]/30" />
                    )}
                    <span className="relative block h-3 w-3 rounded-full bg-[#215589] ring-4 ring-[#215589]/20" />
                  </div>

                  {/* Title on right */}
                  <span className="text-left text-sm sm:text-base font-semibold text-[#2F3A45]">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
