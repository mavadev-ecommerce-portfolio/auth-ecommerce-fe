import React from 'react';
import Link from 'next/link';

interface NavBarMobileProps {
  isOpen: boolean; // Define si el menú está abierto
}

export default function NavBarMobile({ isOpen }: NavBarMobileProps) {
  if (!isOpen) return null; // Si no está abierto, no renderizamos el menú

  return (
    <div className="absolute left-0 w-full bg-gray-800 z-50"
         id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link href="/">
          <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Inicio
          </span>
        </Link>
        <Link href="/about">
          <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Acerca de
          </span>
        </Link>
        <Link href="/contact">
          <span className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contacto
          </span>
        </Link>
      </div>
    </div>
  );
}