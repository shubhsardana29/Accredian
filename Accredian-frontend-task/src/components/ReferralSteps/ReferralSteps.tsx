import React from 'react';

const steps = [
  { title: 'Submit referrals easily via our website referral program' },
  { title: 'Earn rewards once your referral joins a course program' },
  { title: 'Your referral receives a discount on their program enrollment' },
];

const ReferralSteps: React.FC = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-12 text-center">How Do I Refer?</h2>
      <div className="flex justify-between items-start">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center w-1/3 px-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl font-bold">{index + 1}</span>
            </div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium">
          Refer Now
        </button>
      </div>
    </div>
  </section>
);

export default ReferralSteps;
