import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import img from '../assets/images/1.JPG';

const TREATMENTS = [
  {
    id: 'therapies',
    title: 'Therapies',
    points: [
      'Comprehensive assessment and diagnosis.',
      'Personalized manual therapy techniques.',
      'Pain management strategies.',
      'Post-surgical rehabilitation.',
    ],
    href: '/treatments/therapies',
  },
  {
    id: 'equipments',
    title: 'Equipments',
    points: [
      'Access to advanced electrotherapy machines.',
      'State-of-the-art exercise machines.',
      'Specialized diagnostic tools.',
      'Non-invasive pain relief devices.',
    ],
    href: '/treatments/equipments',
  },
  {
    id: 'rehabs',
    title: 'Rehabs',
    points: [
      'Injury recovery and strengthening programs.',
      'Functional movement retraining.',
      'Sport-specific rehabilitation.',
      'Chronic condition management.',
    ],
    href: '/treatments/rehabs',
  },
  {
    id: 'wellness-prevention',
    title: 'Wellness & Prevention',
    points: [
      'Ergonomics and posture consultation.',
      'Injury prevention workshops.',
      'General physical conditioning.',
      'Customized home exercise plans.',
    ],
    href: '/treatments/wellness-prevention',
  },
];

const TreatmentCard = ({ id, title, points, href, isDarkMode }) => (
  <div className={`flex flex-col md:flex-row items-stretch ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 overflow-hidden`}>
    <div className={`w-full md:w-1/4 h-48 md:h-auto shrink-0 p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
      <img src={img} alt={title} className={`w-full h-full object-cover rounded-lg border-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`} />
    </div>

    <div className="flex grow p-6 flex-col justify-between">
      <div>
        <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>{title}</h2>
        <ul className={`space-y-2 list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      <Link
        to={href}
        className={`text-sm uppercase font-semibold mt-6 inline-block transition px-6 py-2 rounded-md border-2 ${
          isDarkMode
            ? 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900'
            : 'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'
        }`}>
        Read More
      </Link>
    </div>
  </div>
);

const Treatments = () => {
  const { isDarkMode } = useTheme();
  const dark = isDarkMode;

  return (
    <div className={`min-h-screen ${dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl sm:text-5xl font-extrabold text-center mb-2 pb-4 uppercase tracking-wider ${dark ? 'text-white' : 'text-gray-900'}`}>
          Treatments
        </h1>

        <p className={`text-center text-lg mb-8 max-w-2xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
          Explore our specialized areas of physiotherapy, designed to restore your mobility, manage pain, and accelerate recovery.
        </p>

        <hr className={`w-16 h-1 ${dark ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-10`} />

        <div className="space-y-8">
          {TREATMENTS.map((treatment) => (
            <TreatmentCard key={treatment.id} {...treatment} isDarkMode={dark} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Treatments;