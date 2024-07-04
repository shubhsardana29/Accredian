import React from 'react';

interface HeroSectionProps {
  onReferClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onReferClick }) => (
  <section className="bg-blue-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="w-1/2">
        <h1 className="text-5xl font-bold mb-4">Let's Learn & Earn</h1>
        <p className="text-xl mb-8">Get a chance to win up-to Rs. 15,000</p>
        <button
          onClick={onReferClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium"
        >
          Refer Now
        </button>
      </div>
      <div className="w-1/2">
        <img src="/assets/learn-and-earn.png" alt="Learn and Earn" className="w-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
