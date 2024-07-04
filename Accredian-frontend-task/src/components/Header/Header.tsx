import React from 'react';
import NavItem from './NavItem';

const Header: React.FC = () => (
  <header className="bg-white py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <img src="/assets/accredian-logo.png" alt="Accredian" className="h-8" />
      <nav>
        <ul className="flex space-x-6">
          <NavItem href="#" active>
            Refer & Earn
          </NavItem>
          <NavItem href="#">Resources</NavItem>
          <NavItem href="#">About Us</NavItem>
          <NavItem href="#">Login</NavItem>
        </ul>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">
        Try for free
      </button>
    </div>
  </header>
);

export default Header;
