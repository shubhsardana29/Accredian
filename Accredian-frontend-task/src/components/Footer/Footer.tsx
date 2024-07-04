import React from 'react';
import FooterColumn from './FooterColumn';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterColumn title="Programs">
          <a href="#" className="block">
            Data Science & AI
          </a>
          <a href="#" className="block">
            Product Management
          </a>
          <a href="#" className="block">
            Business Analytics
          </a>
          <a href="#" className="block">
            Digital Transformation
          </a>
        </FooterColumn>
        <FooterColumn title="Contact Us">
          <p>Email: info@accredian.com</p>
          <p>Phone: +1 234 567 8900</p>
          <p>Address: 123 Tech Street, Silicon Valley, CA 94000</p>
        </FooterColumn>
        <FooterColumn title="Accredian">
          <a href="#" className="block">
            About
          </a>
          <a href="#" className="block">
            Careers
          </a>
          <a href="#" className="block">
            Privacy Policy
          </a>
          <a href="#" className="block">
            Terms of Service
          </a>
        </FooterColumn>
        <FooterColumn title="Follow Us">
          <div className="flex space-x-4">
            <a href="#" className="text-2xl">
              F
            </a>
            <a href="#" className="text-2xl">
              T
            </a>
            <a href="#" className="text-2xl">
              L
            </a>
            <a href="#" className="text-2xl">
              I
            </a>
          </div>
        </FooterColumn>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p>© 2023 Accredian. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
