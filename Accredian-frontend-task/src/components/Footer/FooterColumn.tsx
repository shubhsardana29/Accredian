import React from 'react';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div>
    <h3 className="font-semibold text-lg mb-4 text-white">{title}</h3>
    <div className="space-y-2 text-sm md:text-base text-gray-300">{children}</div>
  </div>
);

export default FooterColumn;
