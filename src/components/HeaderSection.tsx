import React from 'react';
import { invitationData } from '../data/invitationData';

export const HeaderSection: React.FC = () => {
  return (
    <section className="relative isolate w-full pt-6 md:pt-14 overflow-hidden">
      {/* Top Garland / Flower Wreath */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[420px] md:max-w-[580px] overflow-hidden z-0"
        style={{ aspectRatio: '3935 / 1022' }}
        aria-hidden="true"
      >
        <img
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full max-w-none scale-x-[-1] scale-y-[-1] opacity-90"
          src="./images/decor/top-garland.webp"
        />
      </div>

      {/* Frame with Couple Names */}
      <header className="relative z-10 flex w-full flex-col items-center px-4 pt-16 md:pt-24 pb-6">
        <div className="relative w-[90%] max-w-[340px] md:max-w-[500px]">
          <img
            alt=""
            aria-hidden="true"
            className="relative block w-full h-auto object-contain z-10 drop-shadow-sm"
            src="./images/decor/wreath.webp"
          />

          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center leading-none"
            style={{ color: '#215589' }}
          >
            <div className="flex justify-center w-[65%]">
              <span className="font-viaoda tracking-wider uppercase text-2xl sm:text-3xl md:text-4xl">
                {invitationData.groom.name}
              </span>
            </div>

            <span className="font-alex text-2xl sm:text-3xl md:text-4xl my-2 md:my-3 opacity-90 lowercase">
              &
            </span>

            <div className="flex justify-center w-[65%]">
              <span className="font-viaoda tracking-wider uppercase text-2xl sm:text-3xl md:text-4xl">
                {invitationData.bride.name}
              </span>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};
