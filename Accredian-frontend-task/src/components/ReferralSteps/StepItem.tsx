import React from 'react';

interface StepItemProps {
  icon: string;
  title: string;
}

const StepItem: React.FC<StepItemProps> = ({ icon, title }) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <i className={`fas fa-${icon} text-blue-600 text-2xl`}></i>
    </div>
    <p>{title}</p>
  </div>
);

export default StepItem;
