import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { EventType } from '../App';

const faqData = [
  {
    question: "Gibt es einen Dresscode?",
    answer: "Wir wünschen uns festliche Kleidung. Das Wichtigste ist aber, dass ihr euch wohlfühlt und mit uns feiert! (Kleiner Tipp für die Alm: Es ist eine Berg-Location, also vielleicht keine Stilettos.)",
    tags: ['alm', 'all', 'civil']
  },
  {
    question: "Was wünschen wir uns zur Hochzeit?",
    answer: "Geld ist nicht alles - aber es beruhigt. Ihr dürft uns also gerne ein bisschen beruhigen...",
    tags: ['alm', 'all', 'civil']
  },
  {
    question: "Wo können wir übernachten?",
    answer: "In Mieming und Umgebung gibt es zahlreiche Hotels, Pensionen und Ferienwohnungen für jeden Geschmack. Da unsere Hochzeit in einer beliebten Urlaubsregion stattfindet, empfehlen wir, eure Unterkunft möglichst frühzeitig zu buchen.",
    tags: ['alm', 'all']
  },
  {
    question: "An wen wende ich mich bei Fragen oder für Beiträge zur Feier?",
    answer: "Bei allen organisatorischen Fragen oder wenn ihr eine Überraschung plant, wendet euch bitte an unsere Trauzeugen. Die Kontaktdaten findet ihr weiter unten.",
    tags: ['alm', 'all', 'civil']
  },
  {
    question: "Gibt es Parkmöglichkeiten vor Ort (Stöttlalm)?",
    answer: "Bitte beachtet: Direkt bei der Stöttlalm gibt es keine Parkmöglichkeiten. Wir treffen uns daher alle am Greenvieh Parkplatz (Lehnsteig 1a, 6414 Mieming). Von dort aus organisieren wir einen bequemen Shuttle-Service, der euch zur Alm und später wieder zurück bringt.",
    tags: ['alm', 'all']
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-gold/30">
      <button
        onClick={onClick}
        className="w-full text-left py-4 flex justify-between items-center"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-brand-dark">{question}</span>
        <span className="text-brand-green transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="pb-4 pr-6 text-brand-dark/80">{answer}</p>
      </div>
    </div>
  );
};

interface FaqProps {
    eventType: EventType;
}

const Faq: React.FC<FaqProps> = ({ eventType }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const filteredFaqs = faqData
    .filter(item => item.tags.includes(eventType))
    .map(item => {
        if (eventType === 'civil' && item.question === "Gibt es einen Dresscode?") {
            return { ...item, answer: "Kommt einfach so, wie ihr euch wohlfühlt. Das Wichtigste ist, dass wir gemeinsam eine schöne Zeit haben!" };
        }
        return item;
    });

  return (
    <SectionWrapper
      id="faq"
      title="Fragen & Antworten"
      subtitle="Hier haben wir einige häufig gestellte Fragen für euch beantwortet."
    >
      <div className="max-w-3xl mx-auto bg-white/50 p-6 rounded-lg shadow-lg">
        {filteredFaqs.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Faq;