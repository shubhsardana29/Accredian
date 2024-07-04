import React from 'react';

const benefits = [
  {
    program: 'Professional Certificate Program in Product Management',
    referrerBonus: 5000,
    refereeBonus: 13000,
  },
  {
    program: 'PG Certificate Program in Strategic Digital Marketing',
    referrerBonus: 5000,
    refereeBonus: 11000,
  },
  { program: 'Advanced Certificate in Cloud Computing', referrerBonus: 5000, refereeBonus: 11000 },
  { program: 'Executive Program in Product Management', referrerBonus: 5000, refereeBonus: 7000 },
  {
    program: 'Advanced Certification in Product Management',
    referrerBonus: 5000,
    refereeBonus: 11000,
  },
  {
    program: 'Executive Program in Business Management and Project Management',
    referrerBonus: 5000,
    refereeBonus: 11000,
  },
];

const BenefitsTable: React.FC = () => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Programs
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Referrer Bonus
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Referee Bonus
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {benefits.map((benefit, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{benefit.program}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
              ₹{benefit.referrerBonus}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
              ₹{benefit.refereeBonus}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BenefitsTable;
