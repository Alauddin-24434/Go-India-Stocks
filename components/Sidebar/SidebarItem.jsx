// SidebarItem.js
import React from 'react';
import Link from 'next/link';

const SidebarItem = ({ label, href }) => {
  return (
    <li className="py-2">
      <Link href={href}>
        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:text-gray-900">
          {label}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;
