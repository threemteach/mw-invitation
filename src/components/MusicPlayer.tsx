import React, { useEffect, useRef, useState } from 'react';
import { VolumeX, Music } from 'lucide-react';
import { invitationData } from '../data/invitationData';

interface MusicPlayerProps {
  playRequested: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ playRequested }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (playRequested && audioRef.current && !hasInteracted) {
      setHasInteracted(true);
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log('Audio autoplay prevented, user click required:', err);
        });
    }
  }, [playRequested, hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Playback error:', err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={invitationData.musicUrl}
        loop
        preload="auto"
      />

      {/* Floating Music Control Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
            isPlaying
              ? 'bg-[#215589] text-white ring-4 ring-[#215589]/20'
              : 'bg-white/90 text-[#215589] border border-[#215589]/30 backdrop-blur-md'
          }`}
          title={isPlaying ? 'Pause romantic music' : 'Play romantic music'}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Music className="w-5 h-5 animate-spin-slow" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
              </span>
            </div>
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
};
