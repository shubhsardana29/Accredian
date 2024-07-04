import React from 'react';
import ReferralForm from './ReferralForm';

interface ReferralModalProps {
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Refer a Friend</h2>
      <ReferralForm onClose={onClose} />
    </div>
  </div>
);

export default ReferralModal;
