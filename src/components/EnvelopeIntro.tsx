import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { invitationData } from '../data/invitationData';

interface EnvelopeIntroProps {
  onOpen: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOpening) return;
    setIsOpening(true);

    // Delicate floral petal confetti burst upon opening
    try {
      confetti({
        particleCount: 40,
        spread: 75,
        origin: { y: 0.55 },
        colors: ['#215589', '#6E9FD0', '#A8C6E8', '#DE9998', '#FBF8F3'],
        ticks: 200,
        gravity: 0.7,
        scalar: 1.1,
        shapes: ['circle'],
      });
    } catch {
      // safe fallback
    }

    // Trigger audio playback immediately from user action
    onOpen();
  };

  // Ambient falling petals matching original
  const ambientParticles = [
    { left: '81.4%', top: '-30px', color: '#ffffff', size: '12px', sway: '-12.8px', delay: '-8.9s', duration: '18s' },
    { left: '46.8%', top: '-30px', color: '#6f8cbf', size: '17.6px', sway: '-24.3px', delay: '-15.9s', duration: '23.9s' },
    { left: '30.2%', top: '-30px', color: '#6f8cbf', size: '12.8px', sway: '-29.9px', delay: '-12.7s', duration: '18.9s' },
    { left: '89.5%', top: '-30px', color: '#ffffff', size: '23.2px', sway: '-9.7px', delay: '-13.1s', duration: '25.6s' },
    { left: '16.1%', top: '-30px', color: '#cfdcec', size: '20px', sway: '-18.4px', delay: '-7.6s', duration: '20.5s' },
    { left: '36.9%', top: '-30px', color: '#215589', size: '20.5px', sway: '25.1px', delay: '-16.2s', duration: '19.5s' },
    { left: '35.6%', top: '-30px', color: '#a8bcd4', size: '16.5px', sway: '-14.4px', delay: '-1.5s', duration: '21.7s' },
    { left: '66.0%', top: '-30px', color: '#3a6ba0', size: '14.9px', sway: '17.7px', delay: '-9.2s', duration: '23.5s' },
    { left: '90.2%', top: '-30px', color: '#a8bcd4', size: '23.2px', sway: '15.6px', delay: '-19.6s', duration: '22.5s' },
    { left: '27.8%', top: '-30px', color: '#215589', size: '21.5px', sway: '26.4px', delay: '-9.7s', duration: '18s' },
    { left: '20.8%', top: '-30px', color: '#e6eef7', size: '15.8px', sway: '15px', delay: '-16.2s', duration: '18s' },
    { left: '60.0%', top: '-30px', color: '#215589', size: '17.8px', sway: '-13.5px', delay: '-7.1s', duration: '19.8s' },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isOpening ? 'pointer-events-none' : ''
      }`}
      style={{
        background: 'linear-gradient(to bottom right, #163a5e, #215589, #2f6aa6)',
      }}
    >
      {/* Ambient Falling Floral Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {ambientParticles.map((p, idx) => (
          <div
            key={idx}
            className="absolute animate-ambient-fall"
            style={{
              left: p.left,
              top: p.top,
              color: p.color,
              fontSize: p.size,
              // @ts-expect-error custom property
              '--sway': p.sway,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
              <g>
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(120 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(180 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(240 12 12)" />
                <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(300 12 12)" />
              </g>
              <circle cx="12" cy="12" r="1.8" fillOpacity="0.45" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main Envelope Container */}
      <div className="relative z-10">
        <div
          className={`relative w-[310px] sm:w-[340px] md:w-[520px] lg:w-[600px] transition-transform ${
            isOpening ? 'animate-envelope-away' : ''
          }`}
        >
          {/* Heart Wax Seal Badge */}
          <div
            className={`absolute left-1/2 rounded-full flex items-center justify-center cursor-pointer ${
              isOpening ? 'animate-seal-break' : 'animate-seal-pulse'
            }`}
            style={{
              top: '50px',
              width: '56px',
              height: '56px',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle at 30% 30%, #215589, rgb(3, 55, 107))',
              // @ts-expect-error custom property
              '--shadow-color': 'rgba(33, 85, 137, 0.5)',
              boxShadow: '0 4px 20px rgba(33, 85, 137, 0.5), inset 0 2px 4px rgba(255,255,255,0.3)',
              zIndex: 30,
            }}
            onClick={handleOpenClick}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" style={{ fill: '#fbf8f3' }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Envelope Card Outer */}
          <div
            className="relative rounded-lg"
            style={{
              boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 40px rgba(33, 85, 137, 0.15)',
            }}
          >
            {/* Background & Floral Corners Layer */}
            <div
              className="absolute inset-0 rounded-lg overflow-hidden"
              style={{
                background: '#fbf8f3',
                border: '1px solid rgba(33, 85, 137, 0.15)',
                clipPath: 'inset(0 round 8px)',
              }}
            >
              {/* Top-Left Floral with bloom animation upon click */}
              <img
                src="./images/decor/floral-left.webp"
                alt=""
                aria-hidden="true"
                className={`absolute pointer-events-none h-36 md:h-64 lg:h-72 w-auto max-w-none top-[-5%] md:top-[2%] left-[-14px] md:left-[-6%] -translate-x-[6%] md:-translate-x-[8%] opacity-100 md:opacity-40 rotate-[25deg] transition-all duration-700 ${
                  isOpening ? 'animate-flower-left' : ''
                }`}
              />

              {/* Bottom-Right Floral with bloom animation upon click */}
              <img
                src="./images/decor/floral-right.webp"
                alt=""
                aria-hidden="true"
                className={`absolute pointer-events-none h-36 md:h-64 lg:h-72 w-auto max-w-none bottom-[-5%] md:bottom-[-2%] right-[-14px] md:right-[-6%] translate-x-[6%] md:translate-x-[8%] opacity-100 md:opacity-40 -rotate-[25deg] transition-all duration-700 ${
                  isOpening ? 'animate-flower-right' : ''
                }`}
              />
            </div>

            {/* Foreground Content with exact original padding */}
            <div className="relative z-10 text-center px-6 pt-28 pb-14 md:pt-24 md:pb-10">
              {/* Couple Names */}
              <h1
                className="mb-2 flex flex-col items-center leading-tight text-3xl sm:text-4xl"
                style={{
                  color: '#215589',
                  fontFamily: '"Viaoda Libre", "EB Garamond", cursive',
                }}
              >
                <span
                  className="block w-full text-center"
                  style={{ fontFamily: '"Viaoda Libre", "EB Garamond", cursive' }}
                >
                  {invitationData.groom.name}
                </span>
                <span
                  className="block w-full text-center text-lg leading-none sm:text-xl my-1"
                  style={{ fontFamily: '"Alex Brush", cursive' }}
                >
                  &amp;
                </span>
                <span
                  className="block w-full text-center"
                  style={{ fontFamily: '"Viaoda Libre", "EB Garamond", cursive' }}
                >
                  {invitationData.bride.name}
                </span>
              </h1>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <div
                  className="w-10 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, #215589)' }}
                />
                <span style={{ color: '#215589', opacity: 0.7 }} className="text-sm">
                  ❦
                </span>
                <div
                  className="w-10 h-px"
                  style={{ background: 'linear-gradient(to left, transparent, #215589)' }}
                />
              </div>

              {/* Date & Time */}
              <div
                className="text-[17px] sm:text-[18px] mb-6 flex flex-col items-center"
                style={{
                  color: 'rgba(33, 85, 137, 0.85)',
                  fontFamily: '"Lora", "Times New Roman", serif',
                }}
              >
                <span dir="auto">
                  {invitationData.weddingDateFormatted} • {invitationData.eventTime}
                </span>
              </div>

              {/* Open Button with Shimmer Sweep */}
              <button
                type="button"
                onClick={handleOpenClick}
                disabled={isOpening}
                className="relative px-8 py-2.5 text-lg font-semibold sm:font-medium rounded-full shadow-lg no-underline cursor-pointer flex w-fit items-center justify-center mx-auto overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: '#215589',
                  color: '#fbf8f3',
                  boxShadow: '0 4px 14px rgba(33, 85, 137, 0.35)',
                  fontFamily: '"Lora", "Times New Roman", serif',
                }}
              >
                <span dir="auto">Open</span>
                {/* Shimmer sweep animation */}
                <div
                  className="absolute top-0 h-full w-8 pointer-events-none animate-shine"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
