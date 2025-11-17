import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EventType } from '../App';

interface CivilCeremonyProps {
  eventType: EventType;
}

const CivilCeremony: React.FC<CivilCeremonyProps> = ({ eventType }) => {
  
  // Version for guests invited to the civil ceremony party
  if (eventType === 'civil' || eventType === 'all') {
    return (
      <SectionWrapper
        id="civil"
        title="Standesamt & Feier"
        subtitle="Alle Informationen zu unserer standesamtlichen Trauung und der anschließenden Feier."
        className="bg-white/50"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Ceremony */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold text-brand-green font-serif mb-4">Standesamtliche Trauung</h3>
            <div className="mb-4">
              <p><span className="font-semibold text-brand-dark">Datum:</span> 8. Mai 2026, 12:00 Uhr</p>
              <p><span className="font-semibold text-brand-dark">Ort:</span> Wassermühle (Klosterschänke)</p>
              <p className="text-brand-dark/80 text-sm">
                An der Wassermühle 1<br />
                27798 Hude (Oldenburg), Deutschland
              </p>
            </div>
            <div className="flex-grow h-64 md:h-80 rounded-lg overflow-hidden shadow-md border-4 border-white">
              <iframe
                src="https://maps.google.com/maps?q=Wasserm%C3%BChle%20Hude,%20An%20der%20Wasserm%C3%BChle%201,%2027798%20Hude&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karte zur Wassermühle Hude"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Celebration */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold text-brand-green font-serif mb-4">Feier im Anschluss</h3>
            <div className="mb-4">
              <p className="font-semibold text-brand-dark">Private Feier</p>
              <p className="text-brand-dark/80">
                Forellenweg 1<br />
                27777 Ganderkesee, Deutschland
              </p>
              <p className="mt-2 text-sm text-brand-dark/70">
                Im Anschluss an die Trauung möchten wir den Tag gerne mit euch ausklingen lassen.
              </p>
            </div>
            <div className="flex-grow h-64 md:h-80 rounded-lg overflow-hidden shadow-md border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2410.596000002146!2d8.473528677028884!3d52.99368997217348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b7274070a248f1%3A0xb35a9f242502604!2sForellenweg%201%2C%2027777%20Ganderkesee!5e0!3m2!1sde!2sde!4v1716301389808!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karte zum Forellenweg, Ganderkesee"
              ></iframe>
            </div>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  // Original version for 'alm' guests
  return (
    <SectionWrapper
      id="civil"
      title="Standesamtliche Trauung"
      subtitle="Für alle, die es interessiert: Unsere standesamtliche Trauung findet im kleinen Kreis statt."
      className="bg-white/50"
    >
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Info Column */}
          <div>
            <h3 className="text-2xl font-semibold text-brand-green font-serif mb-4">Details zur Zeremonie</h3>
            <div className="space-y-2 text-brand-dark/90">
              <p><span className="font-semibold">Datum:</span> 8. Mai 2026</p>
              <p><span className="font-semibold">Uhrzeit:</span> 12:00 Uhr</p>
              <p><span className="font-semibold">Ort:</span> Wassermühle (Klosterschänke)</p>
              <p className="text-sm">
                An der Wassermühle 1<br />
                27798 Hude (Oldenburg), Deutschland
              </p>
            </div>
             <p className="mt-4 text-xs text-brand-dark/70">
                Bitte beachtet, dass diese Zeremonie nur im engsten Familienkreis stattfindet. Wir freuen uns riesig darauf, mit euch allen am 15. Mai in den Bergen zu feiern!
            </p>
          </div>

          {/* Map Column */}
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md border-4 border-white">
            <iframe
              src="https://maps.google.com/maps?q=Wasserm%C3%BChle%20Hude,%20An%20der%20Wasserm%C3%BChle%201,%2027798%20Hude&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karte zur Wassermühle Hude"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CivilCeremony;