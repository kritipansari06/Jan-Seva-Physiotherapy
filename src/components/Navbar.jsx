import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoImage from '../assets/logo.png';

const navItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/treatments', name: 'Treatments' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const linkClass = (p) => {
    const active = location.pathname === p;
    const base = 'font-medium rounded-lg transition duration-200';
    if (active) return `${base} px-4 py-2 text-white bg-teal-600 shadow-md`;
    return isDarkMode
      ? `${base} px-4 py-2 text-gray-300 hover:text-teal-400 hover:bg-gray-800`
      : `${base} px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50`;
  };

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900 text-white border-gray-800' : 'bg-white text-gray-800 border-gray-100'} shadow-lg sticky top-0 z-50 border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className={`flex items-center gap-3 p-1 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`} onClick={() => setOpen(false)}>
            <img src={logoImage} alt="Logo" className="w-14 h-14 rounded-full object-cover shadow-md" />
            <div className="leading-tight">
              <div className="text-xl font-extrabold text-teal-600">Jan Seva Physio</div>
              <div className={`text-xs font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Therapy Center</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={linkClass(item.path)} aria-current={location.pathname === item.path ? 'page' : undefined}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className={`inline-flex items-center justify-center p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`} aria-label="Toggle theme">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button onClick={() => setOpen((s) => !s)} className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`} aria-controls="mobile-menu" aria-expanded={open}>
              {open ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`${open ? 'block' : 'hidden'} md:hidden ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setOpen(false)} className={`${linkClass(item.path)} block px-4 py-2`}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}