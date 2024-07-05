import React from 'react';
import BenefitsTable from './BenefitsTable';

interface ReferralBenefitsProps {
  onReferClick: () => void;
}

const ReferralBenefits: React.FC<ReferralBenefitsProps> = ({ onReferClick }) => (
  <section className="py-12 md:py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
        What Are The Referral Benefits?
      </h2>
      <BenefitsTable />
      <div className="text-center mt-8">
        <button
          onClick={onReferClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium w-full md:w-auto"
        >
          Refer Now
        </button>
      </div>
    </div>
  </section>
);

export default ReferralBenefits;
