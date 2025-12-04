import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Footer = ({ brandName }) => {
  return (
    <footer className="bg-neutral-800 text-white pt-10 pb-6 mt-10 shadow-inner">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-8 mb-6">
          
          <div className="footer-section">
            <img 
                src={logoImage} 
                alt="Jan Seva Physio Therapy Centre Logo" 
                className="w-24 h-24 rounded-full object-cover grid  place-content-center " 
              />
            <h4 className="text-[--color-accent] text-xl font-bold mb-4">{brandName}</h4>
            <p className="text-sm opacity-80">
              Dedicated to physical wellness under the motto:  <br />
              **सेवा परमो धर्म:।**
            </p>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/treatments" className="footer-link">Treatments</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/treatments/therapies" className="footer-link">Therapies</Link></li>
                <li><Link to="/treatments/equipments" className="footer-link">Equipments</Link></li>
                <li><Link to="/treatments/rehabs" className="footer-link">Rehabs</Link></li>
                <li><Link to="/treatments/wellness-prevention" className="footer-link">Wellness</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm">Email: info@janservatrust.org</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
            <p className="text-sm">Address: Sikar, Rajasthan, India</p>
          </div>
        </div>

        <div className="text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;