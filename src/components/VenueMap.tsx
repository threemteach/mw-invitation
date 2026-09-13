import React from 'react';
import { Navigation, MapPin } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export const VenueMap: React.FC = () => {
  return (
    <section className="relative isolate px-4 sm:px-6 py-6 z-10 max-w-[620px] mx-auto text-center font-baskerville">
      {/* Background floral accents */}
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -left-10 w-44 md:w-60 h-auto object-contain opacity-20 rotate-[20deg] select-none"
        src="./images/decor/floral-left.webp"
      />

      <div className="relative z-10 flex flex-col gap-5 items-center">
        {/* Title */}
        <div>
          <h3 className="font-baskerville font-bold text-xl md:text-2xl tracking-widest uppercase text-[#215589]">
            Wedding Venue
          </h3>
          <div className="flex items-center justify-center gap-1.5 mt-2 text-base sm:text-lg font-bold text-[#215589]">
            <MapPin className="w-5 h-5 text-[#215589] shrink-0" />
            <span>{invitationData.venue.name}</span>
          </div>
          <div className="mt-1 text-xs sm:text-sm text-[#2F3A45] tracking-wide max-w-md mx-auto" dir="rtl">
            {invitationData.venue.addressAr}
          </div>
          <div className="mt-0.5 text-xs text-[#2F3A45]/75 tracking-wide max-w-md mx-auto">
            {invitationData.venue.address}
          </div>
        </div>

        {/* Embedded Map */}
        <div className="w-full max-w-[520px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-[#215589]/25 shadow-md bg-white">
          <iframe
            title="Wedding Venue Map"
            className="w-full h-full border-0"
            src={invitationData.venue.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Directions CTA */}
        <a
          href={invitationData.venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white bg-[#215589] hover:bg-[#194067] transition-all duration-300 shadow-md hover:scale-105"
        >
          <Navigation className="w-4 h-4 shrink-0" />
          <span>Open in Google Maps / الاتجاهات</span>
        </a>
      </div>
    </section>
  );
};
