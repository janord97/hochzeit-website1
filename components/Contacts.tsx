import React from 'react';
import SectionWrapper from './SectionWrapper';

const Contacts: React.FC = () => {
  return (
    <SectionWrapper
      id="contacts"
      title="Trauzeugen"
      subtitle="Unsere wunderbaren Helfer für alle Fälle."
      className="bg-brand-green/10"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-brand-green font-serif">Trauzeugin von Kea</h3>
          <p className="text-xl font-medium text-brand-dark mt-2">Angie Sperling</p>
          <p className="text-brand-dark/80 mt-2">
            E-Mail: (wird noch ergänzt)<br />
            Telefon: (wird noch ergänzt)
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-brand-green font-serif">Trauzeuge von Jan-Niklas</h3>
          <p className="text-xl font-medium text-brand-dark mt-2">Maurice Broeck</p>
          <p className="text-brand-dark/80 mt-2">
            E-Mail: maurice.broeck@web.de<br />
            Telefon: 0176 6417 06 52
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contacts;