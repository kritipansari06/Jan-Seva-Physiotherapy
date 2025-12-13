import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';

const LINKS = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/treatments', name: 'Treatments' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const active = (path) => pathname === path;
  const dark = isDarkMode;

  return (
    <nav className={`${dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} shadow-lg sticky top-0 z-50 border-b transition`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)} className={`flex items-center gap-2 sm:gap-3 shrink-0 p-1 rounded-lg ${dark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
            <img src={logo} alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-md object-cover" />
            <div className="leading-tight hidden sm:block">
              <div className="text-lg sm:text-xl font-bold text-teal-600">Jan Seva Physio</div>
              <div className={`text-xs font-semibold ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Therapy Center</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {LINKS.map(({ path, name }) => (
              <Link key={path} to={path} className={`font-medium px-4 py-2 rounded-lg transition ${active(path) ? 'bg-teal-600 text-white shadow-md' : dark ? 'text-gray-300 hover:text-teal-400 hover:bg-gray-800' : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'}`}>
                {name}
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className={`p-2 rounded-lg transition ${dark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-700'}`} aria-label="Toggle theme">
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg transition ${dark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`} aria-expanded={open}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`lg:hidden ${dark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t px-2 py-3 space-y-1`}>
          {LINKS.map(({ path, name }) => (
            <Link key={path} to={path} onClick={() => setOpen(false)} className={`block font-medium px-4 py-2 rounded-lg transition ${active(path) ? 'bg-teal-600 text-white' : dark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
export default Navbar