import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com/janservaphysio", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com/janservaphysio", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/janservaphysio", label: "Instagram" },
  { icon: FaLinkedin, href: "https://linkedin.com/company/janservaphysio", label: "LinkedIn" },
];

const Footer = ({ brandName }) => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-gray-300 border-gray-800' : 'bg-teal-50 text-gray-800 border-teal-500'} pt-16 pb-8 mt-20 border-t-4 transition duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 mb-8 border-b-2 ${isDarkMode ? 'border-gray-800' : 'border-teal-200'}`}>
          
          <div className="footer-section space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative group">
                <div className={`${isDarkMode ? 'bg-teal-900/30' : 'bg-teal-400'} rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <img src={logoImage} alt="Jan Seva Physio Therapy Centre Logo" 
                  className={`w-25 h-20 rounded-full object-cover border-3 ${isDarkMode ? 'border-teal-700' : 'border-teal-400'} shadow-lg relative`} />
              </div>
              <div>
                <h4 className={`text-lg font-bold leading-tight ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>{brandName}</h4>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Dedicated to physical wellness under the motto:
            </p>
            <p className={`font-semibold text-base italic ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>
              सेवा परमो धर्म:।
            </p>
            <p className={`text-xs italic ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              "Service is the highest duty"
            </p>
          </div>

          <div className="footer-section">
            <h4 className={`text-lg font-bold mb-5 flex items-center ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>
              <span className={`w-1 h-6 ${isDarkMode ? 'bg-teal-600' : 'bg-teal-500'} mr-2 rounded-full`}></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/treatments", label: "Treatments" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className={`hover:transition-all duration-300 text-sm flex items-center group ${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'}`}>
                    <span className={`w-0 h-0.5 ${isDarkMode ? 'bg-teal-600' : 'bg-teal-500'} group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2`}></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className={`text-lg font-bold mb-5 flex items-center ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>
              <span className={`w-1 h-6 ${isDarkMode ? 'bg-teal-600' : 'bg-teal-500'} mr-2 rounded-full`}></span>
              Focus Areas
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/treatments/therapies", label: "Therapies" },
                { to: "/treatments/equipments", label: "Equipment" },
                { to: "/treatments/rehabs", label: "Rehabilitation" },
                { to: "/treatments/wellness-prevention", label: "Wellness" }
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className={`hover:transition-all duration-300 text-sm flex items-center group ${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'}`}>
                    <span className={`w-0 h-0.5 ${isDarkMode ? 'bg-teal-600' : 'bg-teal-500'} group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2`}></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className={`text-lg font-bold mb-5 flex items-center ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>
              <span className={`w-1 h-6 ${isDarkMode ? 'bg-teal-600' : 'bg-teal-500'} mr-2 rounded-full`}></span>
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Mail className={`w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform ${isDarkMode ? 'text-teal-600' : 'text-teal-500'}`} />
                <a href="mailto:info@janservatrust.org" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors break-all`}>
                  info@janservatrust.org
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className={`w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform ${isDarkMode ? 'text-teal-600' : 'text-teal-500'}`} />
                <a href="tel:+919876543210" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}>
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className={`w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform ${isDarkMode ? 'text-teal-600' : 'text-teal-500'}`} />
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Sikar, Rajasthan, India
                </span>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition duration-200 ${isDarkMode ? 'text-gray-500 hover:text-teal-600' : 'text-gray-500 hover:text-teal-600'}`}
                  aria-label={social.label}>
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
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
          <p className={`text-xs italic ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            R.P. Pansari Jan Seva Trust - Committed to Community Health & Wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;