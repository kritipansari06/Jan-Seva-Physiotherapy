import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  // Get the current path for active link styling
  const location = useLocation(); 

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/gallery", name: "Gallery" },
    { path: "/treatments", name: "Treatments" },
    { path: "/services", name: "Services" },
    { path: "/contact", name: "Contact" },
  ];

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    
    const baseClasses = "font-medium rounded-lg transition duration-200";

    const desktopClasses = `px-4 py-2 text-sm ${isActive 
      ? 'text-white bg-teal-600 shadow-md' 
      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
    }`;

    const mobileClasses = `block px-4 py-2 ${isActive 
      ? 'text-teal-600 bg-teal-100 font-bold' 
      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
    }`;

    return { desktop: `${baseClasses} ${desktopClasses}`, mobile: `${baseClasses} ${mobileClasses}` };
  };

  return (
    <nav 
      className="bg-white text-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-100" 
      role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" 
            className="flex items-center gap-3 p-1 rounded-lg hover:bg-gray-50 transition duration-300"
            onClick={closeMenu}
            aria-label="Home - Jan Seva Physio Therapy Centre">
            <img src={logoImage} alt="Logo" 
              className="w-14 h-14 rounded-full object-cover shadow-md" 
              aria-hidden="true" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold text-teal-700">Jan Seva Physio</span>
              <span className="text-xs text-gray-600 font-semibold tracking-wide">Therapy Center</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={getLinkClasses(item.path).desktop}
                aria-current={location.pathname === item.path ? "page" : undefined}>
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Close menu icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Open menu icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 border-t border-gray-200`}
        id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={getLinkClasses(item.path).mobile}
              onClick={closeMenu}
              aria-current={location.pathname === item.path ? "page" : undefined}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;