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
        
        {/* Kea */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-brand-green font-serif">Trauzeugin von Kea</h3>
          <p className="text-xl font-medium text-brand-dark mt-2">Angie Sperling</p>
          <p className="text-brand-dark/80 mt-2 mb-6">
            E-Mail: <a href="mailto:angie.sperling@gmx.net" className="hover:text-brand-green transition-colors">angie.sperling@gmx.net</a><br />
            Telefon: <a href="tel:+491726003621" className="hover:text-brand-green transition-colors">0172 600 36 21</a>
          </p>
          
          {/* Dezent eingefügte Brautjungfern */}
          <div className="w-12 h-px bg-brand-dark/10 mb-4"></div>
          <div>
             <p className="text-xs font-medium text-brand-dark/50 uppercase tracking-widest mb-1">Brautjungfern</p>
             <p className="text-brand-dark/80">Marie Strauch &amp; Sina Düppen</p>
          </div>
        </div>

        {/* Jan-Niklas */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-brand-green font-serif">Trauzeuge von Jan-Niklas</h3>
          <p className="text-xl font-medium text-brand-dark mt-2">Maurice Broeck</p>
          <p className="text-brand-dark/80 mt-2 mb-6">
            E-Mail: <a href="mailto:maurice.broeck@web.de" className="hover:text-brand-green transition-colors">maurice.broeck@web.de</a><br />
            Telefon: <a href="tel:+4917664170652" className="hover:text-brand-green transition-colors">0176 6417 06 52</a>
          </p>
          
          {/* Dezent eingefügte Groomsmen */}
          <div className="w-12 h-px bg-brand-dark/10 mb-4"></div>
          <div>
             <p className="text-xs font-medium text-brand-dark/50 uppercase tracking-widest mb-1">Groomsmen</p>
             <p className="text-brand-dark/80">Carlos Fleischer &amp; Nico Hennemann</p>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Contacts;