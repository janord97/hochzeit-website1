import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EventType } from '../App';

interface IntroProps {
  eventType: EventType;
}

const Intro: React.FC<IntroProps> = ({ eventType }) => {
  const subtitle = eventType === 'civil'
    ? "Ein neues Kapitel beginnt..."
    : "Ein neues Kapitel beginnt in den Bergen, die wir lieben.";

  return (
    <SectionWrapper
      id="story"
      title="Jan-Niklas & Kea"
      subtitle={subtitle}
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg transform md:rotate-[-3deg] transition hover:scale-105 hover:rotate-0">
          <img src="https://i.postimg.cc/JnMDt3Jw/IMG-6345.jpg" alt="Jan-Niklas und Kea" className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-1 text-center text-lg leading-relaxed text-brand-dark/90 px-4">
            <p>
                Liebe Familie, liebe Freunde,
                <br/><br/>
                wir freuen uns riesig, euch auf unserer Hochzeitsseite begrüßen zu dürfen. Hier findet ihr alle wichtigen Informationen rund um unseren großen Tag. Wir können es kaum erwarten, dieses unvergessliche Ereignis mit euch zu teilen!
            </p>
        </div>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg transform md:rotate-[3deg] transition hover:scale-105 hover:rotate-0">
          <img src="https://i.postimg.cc/T2HMPdM4/IMG-7627.jpg" alt="Jan-Niklas und Kea" className="w-full h-full object-cover" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Intro;