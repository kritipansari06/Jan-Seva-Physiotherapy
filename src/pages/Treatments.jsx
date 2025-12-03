import React from 'react';
import { Link } from 'react-router-dom';
// Ensure this path is correct for your placeholder/default image
import placeholderImage from '../assets/images/1.JPG';

const treatmentData = [
  { 
    id: 'therapies', 
    title: 'Therapies', 
    points: [
      'Comprehensive assessment and diagnosis.',
      'Personalized manual therapy techniques.',
      'Pain management strategies.',
      'Post-surgical rehabilitation.',
    ] 
  },
  { 
    id: 'equipments', 
    title: 'Equipments', 
    points: [
      'Access to advanced electrotherapy machines.',
      'State-of-the-art exercise machines.',
      'Specialized diagnostic tools.',
      'Non-invasive pain relief devices.',
    ] 
  },
  { 
    id: 'rehabs', 
    title: 'Rehabs', 
    points: [
      'Injury recovery and strengthening programs.',
      'Functional movement retraining.',
      'Sport-specific rehabilitation.',
      'Chronic condition management.',
    ] 
  },
  { 
    id: 'wellness-prevention', 
    title: 'Wellness & Prevention', 
    points: [
      'Ergonomics and posture consultation.',
      'Injury prevention workshops.',
      'General physical conditioning.',
      'Customized home exercise plans.',
    ] 
  },
];

const Treatments = () => {
  // Theme classes
  const cardBgClass = "bg-gray-800"; // Inner card background
  const borderClass = "border-2 border-white"; // Card and image border
  const titleClass = "text-teal-400"; // Accent color for card titles
  const buttonClasses = "text-sm uppercase font-semibold mt-4 transition duration-300";
  const buttonOutlineClass = "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-6 py-2 rounded-md";

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-2 pb-4 text-white uppercase tracking-wider">
        Treatments
      </h1>
      
      {/* 👇 NEW SUBHEADING TEXT ADDED HERE */}
      <p className="text-center text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
        Explore our specialized areas of physiotherapy, designed to restore your mobility, manage pain, and accelerate recovery.
      </p>
      
      <hr className="w-16 h-1 bg-teal-400 mx-auto mb-10" />

      {/* Treatments Grid Container */}
      <div className="max-w-4xl mx-auto space-y-8">
        {treatmentData.map((treatment) => (
          
          <div 
            key={treatment.id} 
            className={`flex flex-col md:flex-row items-stretch ${cardBgClass} ${borderClass} rounded-lg shadow-2xl overflow-hidden`}
          >
            
            {/* Image Section */}
            <div 
              className="w-full md:w-1/4 h-48 md:h-auto shrink-0 p-4 bg-gray-900 flex items-center justify-center"
            >
              <img 
                src={placeholderImage} 
                alt={`${treatment.title} image`} 
                className={`w-full h-full object-cover ${borderClass} rounded-lg`} 
              />
            </div>

            {/* Content Area */}
            <div className="flex grow p-6 flex-col justify-between">
              
              {/* Title and Bullet Points */}
              <div>
                <h2 className={`text-3xl font-bold mb-4 ${titleClass}`}>{treatment.title}</h2>
                <ul className="space-y-2 list-disc list-inside text-gray-300">
                  {treatment.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Read More Button */}
              <div className="mt-6">
                <Link 
                  to={`/treatments/${treatment.id}`}
                  className={`${buttonClasses} ${buttonOutlineClass}`}
                >
                  Read More
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;