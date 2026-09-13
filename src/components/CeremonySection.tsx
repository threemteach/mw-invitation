import React from 'react';
import { invitationData } from '../data/invitationData';

export const CeremonySection: React.FC = () => {
  return (
    <section className="relative isolate px-4 sm:px-6 pt-4 pb-8 z-10">
      {/* Background floral accents */}
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-8 w-44 md:w-60 h-auto object-contain opacity-20 rotate-[-20deg] select-none"
        src="./images/decor/floral-left.webp"
      />
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-2/3 -left-8 w-44 md:w-60 h-auto object-contain opacity-20 rotate-[20deg] select-none"
        src="./images/decor/floral-right.webp"
      />

      <div className="relative z-10 flex flex-col gap-6 md:gap-8 max-w-[620px] mx-auto text-center font-baskerville">
        {/* Quranic Verse / Blessing Card (Replacing Family Info) */}
        <div className="rounded-2xl border border-[#215589]/20 bg-white/50 backdrop-blur-sm p-6 shadow-sm mx-2">
          <p
            className="text-base sm:text-lg md:text-xl text-[#215589] font-semibold leading-loose mb-3 tracking-wide"
            dir="rtl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            "{invitationData.blessing.quranicVerse}"
          </p>
          <div className="w-16 h-px bg-[#215589]/30 mx-auto my-3" />
          <p className="text-xs sm:text-sm text-[#2F3A45]/85 italic leading-relaxed">
            {invitationData.blessing.message}
          </p>
          <p className="text-xs sm:text-sm text-[#215589] font-medium mt-2" dir="rtl">
            {invitationData.blessing.arabicMessage}
          </p>
        </div>

        {/* Joyful Announcement */}
        <div className="text-center my-1">
          <h2 className="font-baskerville font-bold text-lg sm:text-xl md:text-2xl tracking-widest uppercase text-[#215589]">
            {invitationData.blessing.title}
          </h2>
        </div>

        {/* Couple Names */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-[#215589] font-semibold">
            {invitationData.groom.name}
          </h3>

          <div className="font-alex text-3xl sm:text-4xl text-[#215589] my-0.5 opacity-90">
            &
          </div>

          <h3 className="font-garamond text-3xl sm:text-4xl md:text-5xl text-[#215589] font-semibold">
            {invitationData.bride.name}
          </h3>
        </div>

        {/* Wedding Date & Time Details */}
        <div className="flex flex-col items-center gap-3 pt-2 font-baskerville">
          <span className="text-xs sm:text-sm tracking-wider uppercase text-[#2F3A45] font-medium">
            WEDDING CELEBRATION
          </span>

          <div className="text-2xl sm:text-3xl text-[#215589] font-bold tracking-wide">
            {invitationData.eventTime}
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[#215589]">
            <span className="text-xs sm:text-sm font-semibold tracking-wider">
              {invitationData.dayOfWeek}
            </span>
            <span className="text-[#2F3A45]/40 text-lg">|</span>
            <span className="text-3xl sm:text-4xl font-bold font-garamond">
              {invitationData.dayOfMonth}
            </span>
            <span className="text-[#2F3A45]/40 text-lg">|</span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider">
              {invitationData.monthName}
            </span>
          </div>

          <div className="text-lg sm:text-xl text-[#215589] font-semibold">
            {invitationData.year}
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center my-2">
          <img
            alt=""
            aria-hidden="true"
            className="h-auto w-48 sm:w-60 object-contain opacity-80"
            src="./images/decor/divider.webp"
          />
        </div>
      </div>
    </section>
  );
};
