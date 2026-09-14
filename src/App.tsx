import { useState } from 'react';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { MusicPlayer } from './components/MusicPlayer';
import { HeaderSection } from './components/HeaderSection';
import { CeremonySection } from './components/CeremonySection';
import { ReceptionSection } from './components/ReceptionSection';
import { VenueMap } from './components/VenueMap';
import { DressCode } from './components/DressCode';
import { TimelineSection } from './components/TimelineSection';
import { Guestbook } from './components/Guestbook';
import { Footer } from './components/Footer';

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleOpenInvitation = () => {
    // Wait until the envelope fly-away animation finishes (~1100ms)
    // before hiding the intro and starting the romantic background music
    setTimeout(() => {
      setIsIntroActive(false);
      setMusicStarted(true);
    }, 1100);
  };

  return (
    <div className="min-h-screen w-full bg-[#eef3f8] flex justify-center selection:bg-[#215589] selection:text-white">
      {/* Background Music Controller */}
      <MusicPlayer playRequested={musicStarted} />

      {/* Intro Envelope Screen (before click) */}
      {isIntroActive && (
        <EnvelopeIntro onOpen={handleOpenInvitation} />
      )}

      {/* Main Wedding Invitation Page */}
      <main
        className={`w-full max-w-[480px] md:max-w-[680px] min-h-screen my-0 md:my-6 transition-all duration-1000 ${
          isIntroActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
        style={{
          backgroundColor: '#FBF8F3',
          color: '#2F3A45',
          boxShadow: '0 20px 50px rgba(33, 85, 137, 0.12)',
        }}
      >
        <div className="relative w-full overflow-hidden border border-[#215589]/15 md:rounded-2xl">
          {/* Subtle floral watermark in background */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-5" aria-hidden="true">
            <img
              src="./images/decor/floral-right.webp"
              alt=""
              className="absolute -top-10 -left-10 w-96 rotate-12"
            />
            <img
              src="./images/decor/floral-left.webp"
              alt=""
              className="absolute top-1/3 -right-10 w-96 -rotate-12 scale-x-[-1]"
            />
            <img
              src="./images/decor/floral-right.webp"
              alt=""
              className="absolute top-2/3 -left-10 w-96 rotate-45"
            />
          </div>

          {/* Invitation Sections */}
          <HeaderSection />
          <CeremonySection />
          <ReceptionSection />
          <VenueMap />
          <DressCode />
          <TimelineSection />
          <Guestbook />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
