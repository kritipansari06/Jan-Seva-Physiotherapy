import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const socials = [
  { icon: FaFacebook, href: 'https://facebook.com/janseva.physiocentre', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://twitter.com/janservaphysio', label: 'Twitter' },
  { icon: FaInstagram, href: 'https://www.instagram.com/jansevaphysiolosal', label: 'Instagram' },
  { icon: FaLinkedin, href: 'https://linkedin.com/company/janservaphysio', label: 'LinkedIn' },
];

export default function Footer({ brandName = 'Jan Seva Physiotherapy' }) {
  const { isDarkMode } = useTheme();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [alertData, setAlertData] = useState({ show: false, title: '', message: '' });
  const sectionBorder = isDarkMode ? 'border-gray-800' : 'border-teal-200';

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const showAlert = (title, message) => {
    setAlertData({ show: true, title, message });
    setTimeout(() => setAlertData({ show: false, title: '', message: '' }), 3000);
  };

  const quickLinks = [
    { to: '/our-story', label: 'Our Story' },
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

  const handleExternalLinkClick = (e, label) => {
    if (!isOnline) {
      e.preventDefault();
      showAlert('⚠️ You are offline', `${label} requires an internet connection.`);
    }
  };

  const handleContactLinkClick = (e, type) => {
    if (!isOnline) {
      e.preventDefault();
      const messages = {
        email: 'Email requires an internet connection.',
        phone: 'Phone calls require an internet connection.',
      };
      showAlert('⚠️ You are offline', messages[type]);
    }
  };

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-teal-50 text-gray-800 border-teal-500'} pt-16 pb-8 mt-20 border-t-4 transition duration-300`}>
      
      {/* Alert Modal */}
      {alertData.show && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className={`px-6 py-4 rounded-xl shadow-2xl border-2 ${isDarkMode ? 'bg-yellow-900/30 border-yellow-600 text-yellow-300' : 'bg-yellow-100 border-yellow-500 text-yellow-800'}`}>
            <p className="font-bold text-lg">{alertData.title}</p>
            <p className="text-sm">{alertData.message}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 mb-8 border-b-2 ${sectionBorder}`}>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/public/images/Logo.png" alt="logo" className="w-30 h-30 object-contain bg-transparent" />
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
                  <Link to={l.to} 
                    className={`${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} text-sm transition hover:underline`}>
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
                  <Link 
                    to={l.to} 
                    className={`${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} text-sm transition hover:underline`}
                  >
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
                <Mail className={`${isDarkMode ? 'text-teal-600' : 'text-teal-500'} w-5 h-5 flex shrink-0 mt-0.5`} />
                <a href="mailto:jansevalosal@gmail.com" onClick={(e) => handleContactLinkClick(e, 'email')}
                  className={`${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} text-sm transition hover:underline cursor-pointer`}>
                   jansevalosal@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className={`${isDarkMode ? 'text-teal-600' : 'text-teal-500'} w-5 h-5 flex shrink-0 mt-0.5`} />
                <a href="tel:+919876543210" onClick={(e) => handleContactLinkClick(e, 'phone')}
                  className={`${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} text-sm transition hover:underline cursor-pointer`}>
                  +91 8769220073
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className={`${isDarkMode ? 'text-teal-600' : 'text-teal-500'} w-5 h-5 flex shrink-0 mt-0.5`} />
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  Near Government Sodhani Hospital,
                  Main Market, Losal (Sikar - Rajasthan),</span>
              </li>
            </ul>

            <div className="flex space-x-4 mt-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a 
                    key={s.label} 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={s.label}
                    onClick={(e) => handleExternalLinkClick(e, s.label)}
                    className={`${isDarkMode ? 'text-gray-500 hover:text-teal-400' : 'text-gray-500 hover:text-teal-600'} transition hover:scale-110`}
                  >
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