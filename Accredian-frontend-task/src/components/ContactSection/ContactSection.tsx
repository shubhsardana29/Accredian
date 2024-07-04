import React from 'react';

const ContactSection: React.FC = () => (
  <section className="bg-blue-600 py-12 md:py-16 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Want to delve deeper into the program?
      </h2>
      <p className="mb-8 text-sm md:text-base">
        Book a free career counseling session for yourself now!
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-medium w-full md:w-auto">
        Get in touch
      </button>
    </div>
  </section>
);

export default ContactSection;
