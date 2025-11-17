import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    // Fix: Explicitly type timeLeft to ensure values are treated as numbers.
    let timeLeft: Record<string, number> = {};

    if (difference > 0) {
      timeLeft = {
        Tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Stunden: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minuten: Math.floor((difference / 1000 / 60) % 60),
        Sekunden: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="bg-white/50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-2">Die Zeit bis zu unserem großen Tag</h2>
        <p className="max-w-2xl mx-auto text-brand-dark/80 mb-8">Wir können es kaum erwarten, mit euch zu feiern!</p>
        <div className="flex justify-center space-x-4 md:space-x-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center bg-brand-beige p-4 rounded-lg shadow-md w-20 md:w-28">
              <span className="text-3xl md:text-5xl font-bold text-brand-green font-serif">{value}</span>
              <span className="block text-xs md:text-sm text-brand-dark uppercase tracking-wider mt-1">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;