import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const linkClasses ="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-teal-400 transition duration-300";

  const navItems = [
    { path: "/", name: "HOME" },
    { path: "/about", name: "ABOUT US" },
    { path: "/gallery", name: "GALLERY" },
    { path: "/treatments", name: "TREATMENTS" },
    { path: "/services", name: "SERVICES" },
    { path: "/contact", name: "CONTACT US" },
  ];

  return (
    <nav className="bg-white text-black p-4 shadow-xl sticky top-0 z-50 border-3 rounded-md border-cyan-400">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="shrink-0 hover:opacity-75 transition duration-300" onClick={closeMenu}>
              <img src={logoImage} alt="Jan Seva Physio Therapy Centre Logo" 
                className="w-12 h-12 border-2 border-black rounded-full object-cover" />
            </Link>

            <div className="flex flex-col leading-none text-left text-xl sm:text-2xl font-semibold text-teal-400">
              JAN SEVA PHYSIO
              <span className="text-sm sm:text-base font-normal text-black mt-0.5">THERAPY CENTRE</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-3">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="border-2 border-black hover:text-teal-400  text-black hover:bg-gray-300 hover:border rounded-4xl transition duration-300 font-medium  w-28 text-center py-1">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-teal-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={linkClasses}
              onClick={closeMenu}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;