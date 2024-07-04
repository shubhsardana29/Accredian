import React, { useState } from 'react';
import NavItem from './NavItem';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <img src="/assets/accredian-logo.png" alt="accredian" className="h-8" />
        <nav className="hidden md:flex space-x-6">
          <NavItem href="#" active>
            Refer & Earn
          </NavItem>
          <NavItem href="#">Resources</NavItem>
          <NavItem href="#">About Us</NavItem>
          <NavItem href="#">Login</NavItem>
        </nav>
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
          Try for free
        </button>
        <button
          className="md:hidden text-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 pt-4 pb-2 space-y-2">
            <NavItem href="#" active>
              Refer & Earn
            </NavItem>
            <NavItem href="#">Resources</NavItem>
            <NavItem href="#">About Us</NavItem>
            <NavItem href="#">Login</NavItem>
            <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
              Try for free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
