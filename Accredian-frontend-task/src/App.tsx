import React, { useState } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ReferralSteps from './components/ReferralSteps/ReferralSteps';
import ReferralBenefits from './components/ReferralBenefits/ReferralBenefits';
import FAQ from './components/FAQ/FAQ';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import ReferralModal from './components/ReferralModal/ReferralModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referralSuccess, setReferralSuccess] = useState(false);

  const handleReferralSubmit = () => {
    setIsModalOpen(false);
    setReferralSuccess(true);
    setTimeout(() => setReferralSuccess(false), 5000); // Hide success message after 5 seconds
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection onReferClick={() => setIsModalOpen(true)} />
        <ReferralSteps />
        <ReferralBenefits />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      {isModalOpen && (
        <ReferralModal
          onClose={() => setIsModalOpen(false)}
          onSubmitSuccess={handleReferralSubmit}
        />
      )}
      {referralSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Referral submitted successfully!
        </div>
      )}
    </div>
  );
};

export default App;
