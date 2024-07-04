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
      {isModalOpen && <ReferralModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
