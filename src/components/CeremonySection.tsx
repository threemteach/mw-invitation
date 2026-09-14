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

      <div className="relative z-10 flex flex-col gap-8 max-w-[580px] mx-auto text-center font-baskerville">
        {/* Luxury Invitation Editorial Card - High Readability on Mobile */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-[#215589]/20 bg-white/95 px-6 py-8 sm:px-10 sm:py-10 shadow-sm mx-1">
          {/* Subtle Top Accent */}
          <div className="flex items-center justify-center gap-3 mb-5 opacity-50">
            <span className="h-px w-10 bg-[#215589]" />
            <span className="text-[#215589] text-xs">◆</span>
            <span className="h-px w-10 bg-[#215589]" />
          </div>

          <h2 className="font-garamond text-2xl sm:text-3xl md:text-4xl text-[#215589] font-semibold tracking-wide leading-snug mb-4">
            We Are Getting Married
          </h2>

          {/* Bilingual Warm Invitation Words */}
          <div className="space-y-4 max-w-[480px] mx-auto">
            {/* Arabic - Aref Ruqaa: authentic, artistic Arabic Ruqaa calligraphy */}
            <p
              className="text-xl sm:text-2xl md:text-3xl text-[#215589] font-bold leading-loose"
              dir="rtl"
              style={{ fontFamily: '"Aref Ruqaa", serif' }}
            >
              يسعدنا ويشرفنا حضوركم لمشاركتنا فرحتنا و ليلة من أجمل ليالي العمر
            </p>

            {/* Clean Divider */}
            <div className="w-16 h-px bg-[#215589]/25 mx-auto my-3" />

            {/* English - Caveat handwriting font: natural, charming, large and legible */}
            <p
              className="text-xl sm:text-2xl md:text-[26px] text-[#2F3A45] leading-relaxed font-semibold"
              style={{ fontFamily: '"Caveat", cursive' }}
            >
              "Together with our beloved families, we invite you to share in our celebration of love, laughter, and happily ever after."
            </p>
          </div>

          {/* Signature */}
          <div className="mt-6 pt-4 border-t border-[#215589]/15">
            <div className="font-alex text-3xl sm:text-4xl text-[#215589]">
              Mohamed &amp; Menna
            </div>
          </div>
        </div>

        {/* Wedding Date & Time Highlight */}
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
