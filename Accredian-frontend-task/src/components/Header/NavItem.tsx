import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, active = false }) => {
  const baseClasses = 'block py-2 md:inline-block md:py-0';
  const activeClasses = 'text-blue-600 font-semibold';
  const inactiveClasses = 'text-gray-600 hover:text-blue-600';

  return (
    <a href={href} className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}>
      {children}
    </a>
  );
};

export default NavItem;
