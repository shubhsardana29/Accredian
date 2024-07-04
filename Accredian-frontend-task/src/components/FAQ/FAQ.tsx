import React from 'react';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: 'How long does it take for a referral to join the course?',
    answer:
      "The process typically takes 1-2 weeks, depending on the program and the referral's readiness.",
  },
  {
    question: 'What is the minimum system configuration required?',
    answer:
      'Most programs require a computer with at least 4GB RAM, a modern web browser, and a stable internet connection.',
  },
  // Add more FAQs as needed
];

const FAQ: React.FC = () => (
  <section className="py-16 md:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
