import React from 'react';
import { EventType } from '../App';

interface HeaderProps {
  eventType: EventType;
}

const Header: React.FC<HeaderProps> = ({ eventType }) => {
  return (
    <header className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        {/* HIER KÖNNT IHR EUER BILD EINSETZEN */}
        {/* Um das Bild zu ändern, ersetzt die URL in der `src` Eigenschaft unten. */}
        <img
          src="https://i.postimg.cc/KjmH9WMV/A6406143.jpg"
          alt="Jan-Niklas und Kea in den Bergen"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-brand-dark/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center p-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tight">
          Jan-Niklas &amp; Kea
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-light">
          Wir heiraten!
        </p>
        {eventType === 'civil' ? (
          <p className="mt-2 text-lg md:text-xl font-light">
            8. Mai 2026
          </p>
        ) : eventType === 'all' ? (
          <>
            <p className="mt-2 text-lg md:text-xl font-light">
              15. Mai 2026
            </p>
            <p className="mt-1 text-base md:text-lg font-light text-white/80">
              Standesamt: 8. Mai 2026
            </p>
          </>
        ) : ( // 'alm'
          <p className="mt-2 text-lg md:text-xl font-light">
            15. Mai 2026
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
