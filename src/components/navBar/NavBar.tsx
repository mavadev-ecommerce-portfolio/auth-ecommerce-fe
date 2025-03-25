'use client'

import React, { useState } from 'react';
import NavBarMobile from "@/components/navBar/NavBarMobile";
import NavBarWeb from "@/components/navBar/NavBarWeb";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const routes = [

    { name: 'Productos', href: '/products' },
    { name: 'Contacto', href: '/contact' },
    { name: 'Carrito', href: '/cart' },
  ]

  return (
    <nav className="bg-gray-800">
      {/* Contenedor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">Ecommerce</h1>
          </div>

          {/* Menú para pantallas grandes */}
          <NavBarWeb />

          {/* Botón para pantallas pequeñas */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú para pantallas pequeñas */}
      <NavBarMobile isOpen={isOpen} />
    </nav>
  );
}