import React from 'react';

const MountainIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l6-10 4 6 5-8 4 6v4H3z" />
    </svg>
)

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif text-2xl">Jan-Niklas & Kea</p>
        <div className="flex items-center justify-center my-2 text-brand-beige">
            <div className="h-px w-16 bg-brand-gold"></div>
            <MountainIcon />
            <div className="h-px w-16 bg-brand-gold"></div>
        </div>
        <p className="text-sm text-brand-beige/80">Mit Liebe gestaltet</p>
      </div>
    </footer>
  );
};

export default Footer;
