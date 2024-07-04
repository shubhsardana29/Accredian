import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, active = false }) => {
  const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium';
  const activeClasses = 'text-blue-600';
  const inactiveClasses = 'text-gray-600 hover:text-gray-800';

  return (
    <li>
      <a href={href} className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
