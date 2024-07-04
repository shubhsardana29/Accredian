import React from 'react';

interface HeroSectionProps {
  onReferClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onReferClick }) => (
  <section className="bg-blue-50 py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Let's Learn & Earn
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Get a chance to win up-to Rs. 15,000
        </p>
        <button
          onClick={onReferClick}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium w-full md:w-auto"
        >
          Refer Now
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/assets/hero-image.png" alt="Learn and Earn" className="w-3/4 md:w-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
