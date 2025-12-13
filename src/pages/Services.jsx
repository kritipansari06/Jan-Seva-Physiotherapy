import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const CAMPS = [
  { title: 'Blood Donation Drives', icon: '🩸', desc: 'Partner with blood banks for regular donation events emphasizing emergency preparedness.' },
  { title: 'BP & Sugar Screening', icon: '🩺', desc: 'Free health checks with consultations on lifestyle changes and exercise management.' },
  { title: 'Community Yoga & Wellness', icon: '🧘', desc: 'Accessible yoga and mindfulness for all ages focusing on flexibility and stress reduction.' },
];

const FACILITIES = [
  { title: 'State-of-the-Art Electrotherapy', detail: 'HILT, Ultrasound, TENS, IFT for cellular healing and pain management.' },
  { title: 'Functional & Rehab Gym', detail: 'Specialized equipment for safe progression from injury to full capacity.' },
  { title: 'Exclusive Manual Therapy Suites', detail: 'Private sessions for Myofascial Release, Joint Mobilization, and Trigger Point Therapy.' },
  { title: 'Advanced Biomechanical Analysis', detail: 'High-speed video and pressure plates for precise gait and posture diagnosis.' },
];

const AMENITIES = [
  { title: 'Calming Waiting Sanctuary', detail: 'Spacious, clean with aromatherapy and complimentary filtered water.', icon: '🛋️' },
  { title: 'Complete Accessibility', detail: 'Ramps, elevators, disability-friendly facilities.', icon: '♿' },
  { title: 'Flexible & Transparent Pricing', detail: 'Tailored packages with no hidden costs.', icon: '💰' },
  { title: 'Convenient Parking', detail: 'Dedicated, secure, ample parking at clinic.', icon: '🅿️' },
  { title: 'Hygiene and Safety', detail: 'Stringent protocols with sanitization between sessions.', icon: '🧼' },
  { title: 'Extended Hours', detail: 'Early morning (7 AM) and late evening (8 PM) slots.', icon: '⏰' },
];

const Card = ({ children, className = '' }) => (
  <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition ${className}`}>
    {children}
  </div>
);

const CampCard = ({ icon, title, desc, isDarkMode }) => (
  <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200'} border-2`}>
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className={`text-2xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{desc}</p>
    <Link to="/contact" className={`text-sm font-medium mt-4 inline-block ${isDarkMode ? 'text-teal-400 hover:opacity-80' : 'text-teal-600 hover:opacity-80'}`}>
      Check Schedule →
    </Link>
  </Card>
);

const FacilityCard = ({ title, detail, index, isDarkMode }) => (
  <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-xl hover:shadow-2xl transition border-2 overflow-hidden`}>
    <div className={`w-full md:w-1/2 h-64 md:h-auto shrink-0 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center p-6`}>
      <div className={isDarkMode ? 'text-gray-500' : 'text-gray-500'}>[High-quality image]</div>
    </div>
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h3 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>{title}</h3>
      <hr className={`w-12 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mb-4`} />
      <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{detail}</p>
    </div>
  </div>
);

const AmenityCard = ({ icon, title, detail, isDarkMode }) => (
  <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-2 transform hover:scale-105`}>
    <div className="flex items-center mb-3 gap-3">
      <div className="text-3xl">{icon}</div>
      <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
    </div>
    <hr className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mb-3`} />
    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{detail}</p>
  </Card>
);

const Services = () => {
  const { isDarkMode } = useTheme();
  const dark = isDarkMode;

  const accent = dark ? 'text-teal-400' : 'text-teal-600';
  const cardBg = dark ? 'bg-gray-800' : 'bg-white';
  const textSecondary = dark ? 'text-gray-300' : 'text-gray-700';
  const divider = dark ? 'border-gray-700' : 'border-teal-200';

  return (
    <div className={`min-h-screen ${dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className={`text-5xl sm:text-6xl font-extrabold pb-4 uppercase tracking-tighter ${accent}`}>
            Our <span className={accent}>Services</span> & Commitment
          </h1>
          <p className={`text-xl max-w-3xl mx-auto mt-4 ${textSecondary}`}>
            At Jan Seva, we deliver more than just treatment—we offer advanced facilities, meaningful community engagement, and complete well-being.
          </p>
        </header>

        <hr className={`border-t ${divider} mb-16`} />

        {/* Camps */}
        <section className="mb-20">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accent}`}>Community <span className={accent}>Camps</span> & Initiatives</h2>
          <p className={`text-center ${textSecondary} max-w-3xl mx-auto mb-12`}>
            Serving the community is at the heart of our mission. Regular health and wellness initiatives open to everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAMPS.map((camp, i) => (
              <CampCard key={i} {...camp} isDarkMode={dark} />
            ))}
          </div>
        </section>

        <hr className={`border-t ${divider} mb-16`} />

        {/* Facilities */}
        <section className="mb-20">
          <h2 className={`text-4xl font-bold text-center mb-12 ${accent}`}>Advanced Clinical <span className={accent}>Facilities</span> & Technology</h2>

          <div className="space-y-12">
            {FACILITIES.map((facility, i) => (
              <FacilityCard key={i} {...facility} index={i} isDarkMode={dark} />
            ))}
          </div>
        </section>

        <hr className={`border-t ${divider} mb-16`} />

        {/* Amenities */}
        <section className="mb-20">
          <h2 className={`text-4xl font-bold text-center mb-12 ${accent}`}>Your Visit: <span className={accent}>Comfort</span> & Premium Amenities</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.map((amenity, i) => (
              <AmenityCard key={i} {...amenity} isDarkMode={dark} />
            ))}
          </div>
        </section>

        <hr className={`border-t ${divider} mb-16`} />

        {/* CTA */}
        <section className="text-center py-10">
          <h2 className={`text-4xl font-bold mb-6 ${accent}`}>Ready to Experience Our <span className={accent}>Exceptional Care</span>?</h2>
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${textSecondary}`}>
            Partner with us on your recovery journey. Contact us today to schedule your first assessment.
          </p>
          <Link to="/contact"
            className="inline-block px-12 py-4 rounded-lg bg-teal-600 text-white font-bold uppercase tracking-wider shadow-lg hover:bg-teal-700 transition text-lg"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
export default Services;