import React from 'react';
import { invitationData } from '../data/invitationData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative flex flex-col items-center pt-6 pb-2 text-center z-10 font-baskerville">
      <div className="px-6 max-w-[500px] mx-auto">
        <p className="text-sm sm:text-base text-[#215589] font-medium italic">
          "Your presence would be the greatest honor and joy on our special day!"
        </p>
        <p className="text-xs text-[#2F3A45]/60 mt-3 font-sans">
          {invitationData.groom.name} & {invitationData.bride.name} • {invitationData.year}
        </p>
      </div>

      {/* Bottom Floral Garland */}
      <div className="relative w-full overflow-hidden mt-6 pointer-events-none">
        <img
          alt=""
          aria-hidden="true"
          className="w-full max-w-[650px] mx-auto h-auto object-contain opacity-90"
          src="./images/decor/bottom-garland.webp"
        />
      </div>

      {/* Copyright */}
      <div className="py-4 text-[11px] text-[#2F3A45]/50 tracking-wider font-sans">
        Crafted with 🤍 by{' '}
        <span className="font-semibold text-[#215589] hover:underline cursor-pointer">
          3mtechs
        </span>{' '}
        • All Rights Reserved © {invitationData.year}
      </div>
    </footer>
  );
};
