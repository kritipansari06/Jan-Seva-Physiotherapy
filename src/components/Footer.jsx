import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const socials = [
  { icon: FaFacebook, href: 'https://facebook.com/janservaphysio', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/janservaphysio', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://instagram.com/janservaphysio', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/janservaphysio', label: 'LinkedIn' },
];

export default function Footer({ brandName = 'Jan Seva Physiotherapy' }) {
  const { isDarkMode } = useTheme();
  const sectionBorder = isDarkMode ? 'border-gray-800' : 'border-teal-200';

  const quickLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/treatments', label: 'Treatments' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
  ];

  const focus = [
    { to: '/treatments/therapies', label: 'Therapies' },
    { to: '/treatments/equipments', label: 'Equipment' },
    { to: '/treatments/rehabs', label: 'Rehabilitation' },
    { to: '/treatments/wellness-prevention', label: 'Wellness' },
  ];

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-teal-50 text-gray-800 border-teal-500'} pt-16 pb-8 mt-20 border-t-4 transition duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 mb-8 border-b-2 ${sectionBorder}`}>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="logo" className="w-24 h-20 rounded-full object-cover shadow-lg" />
              <div>
                <h4 className={`${isDarkMode ? 'text-teal-400' : 'text-teal-700'} text-lg font-bold`}>{brandName}</h4>
              </div>
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Dedicated to physical wellness under the motto:</p>
            <p className={`${isDarkMode ? 'text-teal-400' : 'text-teal-600'} font-semibold text-base italic`}>सेवा परमो धर्म:।</p>
            <p className="text-xs italic text-gray-500">"Service is the highest duty"</p>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-5 ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={`${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} text-sm`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-5 ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>Focus Areas</h4>
            <ul className="space-y-3">
              {focus.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={`${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} text-sm`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`text-lg font-bold mb-5 ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className={`${isDarkMode ? 'text-teal-600' : 'text-teal-500'} w-5 h-5`} />
                <a href="mailto:info@janservatrust.org" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>info@janservatrust.org</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className={`${isDarkMode ? 'text-teal-600' : 'text-teal-500'} w-5 h-5`} />
                <a href="tel:+919876543210" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>+91 98765 43210</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className={`${isDarkMode ? 'text-teal-600' : 'text-teal-500'} w-5 h-5`} />
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Sikar, Rajasthan, India</span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-gray-500 hover:text-teal-600 transition">
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="text-sm flex items-center">
            <span>&copy; {new Date().getFullYear()} {brandName}.</span>
            <span className="mx-2">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>for your wellness</span>
          </div>
        </div>

        <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-teal-100'} text-center`}>
          <p className="text-xs italic text-gray-500">R.P. Pansari Jan Seva Trust - Committed to Community Health & Wellness</p>
        </div>
      </div>
    </footer>
  );
}