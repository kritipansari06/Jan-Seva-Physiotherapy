import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SOCIALS = [
  { Icon: FaFacebook, href: 'https://facebook.com/janservaphysio', label: 'Facebook' },
  { Icon: FaTwitter, href: 'https://twitter.com/janservaphysio', label: 'Twitter' },
  { Icon: FaInstagram, href: 'https://instagram.com/janservaphysio', label: 'Instagram' },
  { Icon: FaLinkedin, href: 'https://linkedin.com/company/janservaphysio', label: 'LinkedIn' },
];

const QUICK = [
  { to: '/about', label: 'About Us' },
  { to: '/treatments', label: 'Treatments' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
];

const FOCUS = [
  { to: '/treatments/therapies', label: 'Therapies' },
  { to: '/treatments/equipments', label: 'Equipment' },
  { to: '/treatments/rehabs', label: 'Rehabilitation' },
  { to: '/treatments/wellness-prevention', label: 'Wellness' },
];

const Col = ({ title, items, isDarkMode }) => (
  <div>
    <h4 className={`text-lg font-bold mb-5 ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>{title}</h4>
    <ul className="space-y-3">
      {items.map(({ to, label }) => (
        <li key={to}>
          <Link to={to} className={`text-sm transition ${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'}`}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = ({ brandName = 'Jan Seva Physiotherapy' }) => {
  const { isDarkMode } = useTheme();
  const dark = isDarkMode;
  const border = dark ? 'border-gray-800' : 'border-teal-200';

  return (
    <footer className={`${dark ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-teal-50 text-gray-800 border-teal-500'} pt-16 pb-8 mt-20 border-t-4 transition`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 mb-8 border-b-2 ${border}`}>
          {/* Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="w-24 h-20 rounded-full shadow-lg object-cover" />
              <h4 className={`${dark ? 'text-teal-400' : 'text-teal-700'} text-lg font-bold`}>{brandName}</h4>
            </div>
            <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Dedicated to physical wellness</p>
            <p className={`${dark ? 'text-teal-400' : 'text-teal-600'} font-semibold text-sm italic`}>सेवा परमो धर्म:।</p>
            <p className="text-xs text-gray-500">"Service is the highest duty"</p>
          </div>

          <Col title="Quick Links" items={QUICK} isDarkMode={dark} />
          <Col title="Focus Areas" items={FOCUS} isDarkMode={dark} />

          {/* Contact */}
          <div>
            <h4 className={`text-lg font-bold mb-5 ${dark ? 'text-teal-400' : 'text-teal-700'}`}>Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className={dark ? 'text-teal-600' : 'text-teal-500'} />
                <a href="mailto:info@janservatrust.org" className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>info@janservatrust.org</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className={dark ? 'text-teal-600' : 'text-teal-500'} />
                <a href="tel:+919876543210" className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className={dark ? 'text-teal-600' : 'text-teal-500'} />
                <span className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>Sikar, Rajasthan, India</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-500 hover:text-teal-600 transition">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={`flex flex-col md:flex-row justify-between items-center gap-4 pt-6 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          <p className="text-sm">&copy; {new Date().getFullYear()} {brandName} • All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>for your wellness</span>
          </div>
        </div>

        <p className={`mt-6 pt-6 border-t ${border} text-center text-xs text-gray-500`}>
          R.P. Pansari Jan Seva Trust - Committed to Community Health & Wellness
        </p>
      </div>
    </footer>
  );
}
export default Footer