import React from 'react';
import SectionWrapper from './SectionWrapper';

const scheduleItems = [
  { time: '14:00', title: 'Treffpunkt & Shuttle', description: 'Wir treffen uns am Greenvieh-Parkplatz. Von dort bringen euch Shuttle-Busse zur Alm.' },
  { time: '15:00', title: 'Freie Trauung', description: 'Mit Blick auf die Berge geben wir uns das Ja-Wort.' },
  { time: '16:00 - 18:00', title: 'Get-Together & Fotos', description: 'Zeit für Gespräche, Gratulationen und das Genießen der Aussicht.' },
  { time: '18:30', title: 'Abendessen', description: 'Freut euch auf ein alpines Menü, das wir mit euch teilen möchten.' },
  { time: '21:00', title: 'Tanz & Party', description: 'Zeit, die Tanzfläche zu erobern und mit uns zu feiern!' },
  { time: '00:00', title: 'Mitternachtssnack', description: 'Eine kleine Stärkung für alle, die noch weiterfeiern wollen.' },
  { time: '02:00', title: 'Ausklang & Shuttle', description: 'Die Feier neigt sich dem Ende zu. Shuttles bringen euch sicher nach Hause (innerhalb von Mieming).' }
];

const Schedule: React.FC = () => {
  return (
    <SectionWrapper
      id="ablauf"
      title="Unser Tag"
      subtitle="Ein kleiner Einblick, was wir für euch geplant haben."
    >
      <div className="max-w-sm md:max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/30 transform md:-translate-x-1/2"></div>
          {scheduleItems.map((item, index) => (
            <div key={item.title} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
              <div className={`w-full pl-10 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8 md:pl-0' : 'md:text-left md:pl-8 order-2'}`}>
                <p className="text-xl font-bold text-brand-green font-serif">{item.time} Uhr</p>
                <h3 className="text-2xl font-semibold text-brand-dark font-serif mt-1">{item.title}</h3>
                <p className="text-brand-dark/80 mt-2">{item.description}</p>
              </div>
              <div className="absolute left-2 top-1/2 w-4 h-4 bg-brand-gold rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-brand-beige ring-1 ring-brand-gold/50 md:left-1/2">
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Schedule;