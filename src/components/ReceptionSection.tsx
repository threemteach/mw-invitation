import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export const ReceptionSection: React.FC = () => {
  // Live Countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-24T20:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calendar for September 2026 (Sep 1 is Tuesday -> 1 blank for Monday)
  // Mo=0, Tu=1, We=2, Th=3, Fr=4, Sa=5, Su=6
  const blanks = [0]; 
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section className="relative isolate px-4 sm:px-6 py-6 z-10 max-w-[620px] mx-auto text-center font-baskerville">
      {/* Title */}
      <h2 className="font-baskerville font-bold text-xl md:text-2xl tracking-widest uppercase text-[#215589] mb-4">
        Save The Date
      </h2>

      {/* Date Details */}
      <div className="flex flex-col items-center gap-3 text-[#2F3A45]">
        <h3 className="text-sm sm:text-base uppercase tracking-wider text-[#215589] font-semibold">
          {invitationData.weddingDateFormatted}
        </h3>

        <div className="text-2xl sm:text-3xl font-semibold text-[#215589]">
          {invitationData.eventTime}
        </div>

        {/* Live Countdown */}
        <div className="flex flex-col items-center mt-3">
          <h4 className="text-xs uppercase tracking-widest text-[#215589] font-semibold mb-2">
            Countdown to the big day
          </h4>
          <div className="bg-[#215589]/5 border border-[#215589]/15 rounded-full px-6 py-2.5 text-sm sm:text-base font-semibold text-[#2F3A45] tracking-wide shadow-sm">
            <span>
              {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} min {timeLeft.seconds} sec
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Calendar Frame Widget */}
      <div className="relative mx-auto mt-7 w-full max-w-[350px] sm:max-w-[390px] aspect-[358/304]">
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-fill z-10"
          src="./images/decor/calendar-frame.webp"
        />

        <div className="relative h-full w-full px-8 py-7 flex items-center justify-center z-20">
          <div className="w-full text-[#215589]">
            <div className="text-center py-2 text-sm font-semibold tracking-wider border-b border-[#215589]/25">
              September 2026
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 border-b border-[#215589]/40 py-1 text-[11px] font-semibold opacity-75">
              <div>Mo</div>
              <div>Tu</div>
              <div>We</div>
              <div>Th</div>
              <div>Fr</div>
              <div>Sa</div>
              <div>Su</div>
            </div>

            {/* Dates Grid */}
            <div className="grid grid-cols-7 gap-y-0.5 py-1.5 text-xs">
              {/* Empty leading day */}
              {blanks.map((b) => (
                <div key={b} className="h-6 sm:h-7" />
              ))}

              {daysInMonth.map((day) => {
                const isSpecial = day === 24;
                return (
                  <div
                    key={day}
                    className="flex items-center justify-center h-6 sm:h-7"
                  >
                    {isSpecial ? (
                      <div className="relative w-7 h-6 sm:w-8 sm:h-7 flex items-center justify-center">
                        {/* Heart icon background */}
                        <svg
                          viewBox="0 0 24 22"
                          className="absolute inset-0 w-full h-full drop-shadow-sm"
                          fill="#215589"
                        >
                          <path d="M12 21C12 21 1.5 13.5 1.5 7.5C1.5 4.46 3.96 2 7 2C8.76 2 10.35 2.81 11.4 4.09L12 4.8L12.6 4.09C13.65 2.81 15.24 2 17 2C20.04 2 22.5 4.46 22.5 7.5C22.5 13.5 12 21 12 21Z" />
                        </svg>
                        <span className="relative z-10 text-[11px] font-bold text-white">
                          24
                        </span>
                      </div>
                    ) : (
                      <span className="text-[12px] opacity-85">{day}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Add to Calendar Link */}
      <div className="mt-4 flex justify-center">
        <a
          href={invitationData.venue.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#2F3A45] hover:text-[#215589] tracking-wider underline underline-offset-4 decoration-1 transition-colors"
        >
          <CalendarIcon className="w-3.5 h-3.5" />
          <span>Add to Calendar</span>
        </a>
      </div>

      {/* Decorative Divider */}
      <div className="flex justify-center my-6">
        <img
          alt=""
          aria-hidden="true"
          className="h-auto w-48 sm:w-60 object-contain opacity-80"
          src="./images/decor/divider.webp"
        />
      </div>
    </section>
  );
};
