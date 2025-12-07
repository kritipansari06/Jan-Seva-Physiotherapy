import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com/janservaphysio", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com/janservaphysio", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/janservaphysio", label: "Instagram" },
  { icon: FaLinkedin, href: "https://linkedin.com/company/janservaphysio", label: "LinkedIn" },
];

const Footer = ({ brandName }) => {
  return (
    <footer className="bg-linear-to-br from-teal-50 via-white to-cyan-50 text-gray-800 pt-16 pb-8 mt-20 border-t-4 border-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 mb-8 border-b-2 border-teal-200">
          
          <div className="footer-section space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative group">
                <div className="bg-teal-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img src={logoImage} alt="Jan Seva Physio Therapy Centre Logo" 
                  className="w-25 h-20 rounded-full object-cover border-3 border-teal-400 shadow-lg relative" />
              </div>
              <div>
                <h4 className="text-teal-700 text-lg font-bold leading-tight">{brandName}</h4>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Dedicated to physical wellness under the motto:
            </p>
            <p className="text-teal-600 font-semibold text-base italic">
              सेवा परमो धर्म:।
            </p>
            <p className="text-xs text-gray-500 italic">
              "Service is the highest duty"
            </p>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-bold mb-5 text-teal-700 flex items-center">
              <span className="w-1 h-6 bg-teal-500 mr-2 rounded-full"></span>
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
                    className="text-gray-600 hover:text-teal-600 transition-all duration-300 text-sm flex items-center group">
                    <span className="w-0 h-0.5 bg-teal-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-bold mb-5 text-teal-700 flex items-center">
              <span className="w-1 h-6 bg-teal-500 mr-2 rounded-full"></span>
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
                    className="text-gray-600 hover:text-teal-600 transition-all duration-300 text-sm flex items-center group">
                    <span className="w-0 h-0.5 bg-teal-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-bold mb-5 text-teal-700 flex items-center">
              <span className="w-1 h-6 bg-teal-500 mr-2 rounded-full"></span>
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Mail className="w-5 h-5 text-teal-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@janservatrust.org" className="text-sm text-gray-600 hover:text-teal-600 transition-colors break-all">
                  info@janservatrust.org
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-teal-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-teal-500 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">
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
                  className="text-gray-500 hover:text-teal-600 transition duration-200"
                  aria-label={social.label}>
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-6">
          <div className="text-sm text-gray-600 flex items-center">
            <span>&copy; {new Date().getFullYear()} {brandName}.</span>
            <span className="mx-2">•</span>
            <span>All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>for your wellness</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-teal-100 text-center">
          <p className="text-xs text-gray-500 italic">
            R.P. Pansari Jan Seva Trust - Committed to Community Health & Wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;