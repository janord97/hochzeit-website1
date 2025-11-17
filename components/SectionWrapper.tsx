import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-green">{title}</h2>
          {subtitle && <p className="mt-4 text-lg text-brand-dark/80 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
