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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Ceremony */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-brand-green font-serif mb-6">Standesamtliche Trauung</h3>
                <div className="space-y-6 mb-8">
                  <div>
                      <p className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-1">Wann?</p>
                      <p className="text-lg text-brand-dark/90">8. Mai 2026, 12:00 Uhr</p>
                  </div>
                  <div>
                      <p className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-1">Wo?</p>
                      <p className="text-lg font-medium text-brand-dark/90">Wassermühle (Klosterschänke)</p>
                      <p className="text-brand-dark/80">
                        An der Wassermühle 1<br />
                        27798 Hude (Oldenburg)
                      </p>
                  </div>
                </div>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md border-4 border-white shrink-0">
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
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-brand-green font-serif mb-6">Feier im Anschluss</h3>
                <div className="space-y-6 mb-8">
                  <div>
                      <p className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-1">Wo?</p>
                      <p className="text-lg text-brand-dark/90">
                        Vollersweg 5<br />
                        27777 Ganderkesee
                      </p>
                  </div>
                  <div className="text-brand-dark/80 space-y-2">
                      <p>
                        Im Anschluss an die Trauung möchten wir den Tag gerne mit euch ausklingen lassen.
                      </p>
                      <p className="text-brand-green font-medium">
                        Hinweis: Die Feier findet draußen im Garten statt.
                      </p>
                  </div>
                </div>
            </div>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md border-4 border-white shrink-0">
              <iframe
                src="https://maps.google.com/maps?q=Vollersweg%205,%2027777%20Ganderkesee&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karte zum Vollersweg, Ganderkesee"
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
             <p className="mt-4 text-sm text-brand-dark/80 italic">
                Ihr seid herzlich eingeladen, nach der Zeremonie kurz zum Anstoßen und Gratulieren vorbeizukommen! Bitte habt jedoch Verständnis, dass die Trauung selbst (innen) und die anschließende Feier im privaten Kreis stattfinden.
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