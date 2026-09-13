import React from 'react';
import { invitationData } from '../data/invitationData';

export const DressCode: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center gap-3 px-4 py-8 max-w-[500px] mx-auto text-center font-baskerville">
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-baskerville font-bold text-xl md:text-2xl tracking-widest uppercase text-[#215589]">
          {invitationData.dressCode.title}
        </h2>
        <p className="text-sm sm:text-base text-[#215589]/75 italic font-medium">
          {invitationData.dressCode.subtitle}
        </p>
      </div>

      {/* 5 Color Palette Swatches matching user reference image */}
      <div className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-5 mt-2">
        {invitationData.dressCode.colors.map((c, i) => (
          <div key={i} className="flex flex-col items-center gap-1 group">
            <div
              className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full transition-transform duration-300 group-hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.12)] ${
                c.border ? 'border border-gray-200' : ''
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
