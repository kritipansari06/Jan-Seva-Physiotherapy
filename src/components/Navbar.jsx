import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu after a link is clicked
  const closeMenu = () => setIsOpen(false);

  // Base Tailwind classes for links
  // Retains the original simple link style, but with new colors
  const linkClasses = "block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-teal-400 transition duration-300";

  // Navigation Items data - Capitalized names for a more formal look
  const navItems = [
    { path: "/", name: "HOME" },
    { path: "/about", name: "ABOUT US" },
    { path: "/gallery", name: "GALLERY" },
    { path: "/treatments", name: "TREATMENTS" },
    { path: "/services", name: "SERVICES" },
    { path: "/contact", name: "CONTACT US" },
  ];

  return (
    // 1. Updated: Background to darker gray/black for medical theme
    <nav className="bg-gray-900 text-white p-4 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          
          {/* Logo/Brand - Updated to the two-part, two-line design */}
          <div className="flex items-center space-x-4">
            
            {/* 👇 CHANGES START HERE: Replacing the bordered text LOGO with the image */}
            <Link to="/" className="shrink-0 hover:opacity-75 transition duration-300" onClick={closeMenu}>
              {/* Added image tag for the logo */}
              <img 
                src={logoImage} 
                alt="Jan Seva Physio Therapy Centre Logo" 
                className="w-12 h-12 border  rounded-full object-cover" 
              />
            </Link>
            
            {/* Title - Uses teal accent for the main name, and responsive font sizing */}
            <div className="flex flex-col leading-none text-left text-xl sm:text-2xl font-semibold text-teal-400">
              JAN SEVA PHYSIO
              <span className="text-sm sm:text-base font-normal text-white mt-0.5">THERAPY CENTRE</span>
            </div>
          </div>

          {/* 1. Desktop/Tablet Menu (Visible md and up) */}
          {/* Links revert to simple text style with teal hover */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="hover:text-teal-400 transition duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* 2. Mobile Menu Button (Visible below md) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              // Updated: Mobile button colors for new theme
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Conditional rendering for Hamburger vs. Close Icon */}
              {isOpen ? (
                // Close Icon (X)
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Menu Panel (Hidden md and up) */}
      {/* Conditionally rendered based on the 'isOpen' state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={linkClasses}
              onClick={closeMenu} // Close menu when a link is clicked
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;