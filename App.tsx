import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Intro from './components/Intro';
import Schedule from './components/Schedule';
import Locations from './components/Locations';
import RsvpForm from './components/RsvpForm';
import Faq from './components/Faq';
import CivilCeremony from './components/CivilCeremony';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export type EventType = 'alm' | 'all' | 'civil';

const App: React.FC = () => {
  const [eventType, setEventType] = useState<EventType>('alm');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const eventParam = params.get('event') as EventType;
    if (eventParam && ['alm', 'all', 'civil'].includes(eventParam)) {
      setEventType(eventParam);
    }
  }, []);

  const getNavItems = () => {
    const baseItems = [
      { href: '#story', label: 'Unsere Geschichte' },
      { href: '#rsvp', label: 'Rückmeldung' },
      { href: '#faq', label: 'FAQ' },
    ];

    if (eventType === 'alm' || eventType === 'all') {
      return [
        { href: '#story', label: 'Unsere Geschichte' },
        { href: '#details', label: 'Details' },
        { href: '#ablauf', label: 'Ablauf' },
        { href: '#rsvp', label: 'Rückmeldung' },
        { href: '#faq', label: 'FAQ' },
      ];
    }
    // 'civil' only
    return baseItems;
  };
  
  const navItems = getNavItems();
  const targetDate = eventType === 'civil' ? "2026-05-08T12:00:00" : "2026-05-15T14:00:00";
  const showAlmDetails = eventType === 'alm' || eventType === 'all';
  const showCivilDetails = eventType === 'civil' || eventType === 'all';

  // Manuelle Scroll-Logik für sanfteres und genaueres Verhalten
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // URL Hash aktualisieren, ohne zu springen
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div className="bg-brand-beige text-brand-dark font-sans antialiased">
      <nav className="sticky top-0 z-50 bg-brand-beige/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="hidden sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-brand-dark hover:text-brand-green px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
             <div className="sm:hidden text-brand-dark font-serif text-xl">J & K</div>
          </div>
        </div>
      </nav>

      <main>
        <Header eventType={eventType} />
        <Countdown targetDate={targetDate} />
        <div className="space-y-16 md:space-y-24 pb-16 md:pb-24">
          <Intro eventType={eventType} />
          {showAlmDetails && <Locations />}
          {showAlmDetails && <Schedule />}
          {showCivilDetails && <CivilCeremony eventType={eventType} />}
          <RsvpForm eventType={eventType} />
          <Faq eventType={eventType} />
          <Contacts />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;