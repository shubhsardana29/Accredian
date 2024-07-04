import React from 'react';
import BenefitsTable from './BenefitsTable';

const ReferralBenefits: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-8">What Are The Referral Benefits?</h2>
      <BenefitsTable />
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium">
          Refer Now
        </button>
      </div>
    </div>
  </section>
);

export default ReferralBenefits;
