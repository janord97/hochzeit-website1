import React from 'react';
import SectionWrapper from './SectionWrapper';

const Locations: React.FC = () => {
  return (
    <SectionWrapper
      id="details"
      title="Location & Anfahrt"
      subtitle="Hier feiern wir unseren großen Tag."
      className="bg-white/50"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Column 1: Meeting Point & Map */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold text-brand-green font-serif mb-4">Treffpunkt & Parken</h3>
          <div className="mb-4">
            <p className="font-semibold text-brand-dark">Greenvieh Parkplatz</p>
            <p className="text-brand-dark/80">
              Lehnsteig 1a<br />
              6414 Mieming, Österreich
            </p>
            <p className="mt-2 text-sm text-brand-dark/70">
              Bitte parkt hier euer Auto. Ab 14:00 Uhr stehen Shuttle-Busse bereit, die euch bequem zur Stöttlalm bringen.
            </p>
          </div>
          <div className="flex-grow h-80 md:h-96 rounded-lg overflow-hidden shadow-md border-4 border-white">
            <iframe
              src="https://maps.google.com/maps?q=47.308665,10.987472&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karte zum Greenvieh Parkplatz"
            ></iframe>
          </div>
        </div>

        {/* Column 2: Celebration Location */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold text-brand-green font-serif mb-4">Trauung & Feier</h3>
          <div className="mb-4">
            <p className="font-semibold text-brand-dark">Stöttlalm</p>
            <p className="text-brand-dark/80">Stöttlweg 1, 6414 Mieming</p>
            <p className="mt-2 text-sm text-brand-dark/70">
              Die Trauung und die anschließende Feier finden auf der Stöttlalm statt, mit einem atemberaubenden Blick auf die Mieminger Kette.
            </p>
          </div>
          <div className="flex-grow w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
            <img src="https://i.postimg.cc/zB0qx9yd/447-09-07-21-HZ-Mirja-und-Justin-Print-scaled.jpg" alt="Stöttlalm Location" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Locations;