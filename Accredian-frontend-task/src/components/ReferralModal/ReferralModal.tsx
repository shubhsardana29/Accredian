import React from 'react';
import ReferralForm from './ReferralForm';

interface ReferralModalProps {
  onClose: () => void;
  onSubmitSuccess: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ onClose, onSubmitSuccess }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
    <div className="bg-gray-100 rounded-lg p-6 sm:p-8 lg:p-10 max-w-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Refer a Friend</h2>
      <ReferralForm onClose={onClose} onSubmitSuccess={onSubmitSuccess} />
    </div>
  </div>
);

export default ReferralModal;
