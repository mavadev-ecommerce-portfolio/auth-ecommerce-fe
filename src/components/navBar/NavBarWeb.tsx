import React from 'react';
import Link from 'next/link';

export default function NavBarWeb() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        <Link href="/">
          <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Inicio
          </span>
        </Link>
        <Link href="/about">
          <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Acerca de
          </span>
        </Link>
        <Link href="/contact">
          <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Contacto
          </span>
        </Link>
      </div>
    </div>
  );
}