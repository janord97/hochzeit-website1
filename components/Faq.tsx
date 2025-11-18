import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { EventType } from '../App';

const faqData = [
  {
    question: "Gibt es einen Dresscode?",
    answer: "Wir wünschen uns festliche Kleidung. Das Wichtigste ist aber, dass ihr euch wohlfühlt und mit uns feiert!",
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
  },
  {
    question: "Findet die Feier drinnen oder draußen statt?",
    answer: "Unsere freie Trauung findet draußen am See statt – bei Regen sind wir durch große Schirme geschützt. Auch den Sektempfang genießen wir bei gutem Wetter an der frischen Luft. Zum Abendessen und für die anschließende Party ziehen wir dann gemeinsam in die gemütliche Alm um.",
    tags: ['alm', 'all']
  },
  {
    question: "Sind kleine Partygäste auch eingeladen?",
    answer: "Ja, natürlich! Wir freuen uns über jeden Mini-Gast.",
    tags: ['alm', 'all', 'civil']
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isLast: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick, isLast }) => {
  return (
    <div className={`border-brand-gold/30 ${isLast ? '' : 'border-b'}`}>
      <button
        onClick={onClick}
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none select-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-brand-dark">{question}</span>
        <span className="text-brand-green transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
      subtitle="Hier beantworten wir alles, was euch wahrscheinlich unter den Nägeln brennt."
    >
      <div className="max-w-3xl mx-auto bg-white/50 p-6 rounded-lg shadow-lg">
        {filteredFaqs.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
            isLast={index === filteredFaqs.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Faq;