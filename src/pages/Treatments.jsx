import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const treatmentData = [
  {
    id: 'HotColdTherapy',
    title: 'Hot & Cold Therapy',
    image: '/images/Treatments/HotColdTherapy.png',
    points: [
      'Heat therapy to relax muscles and improve circulation.',
      'Cold therapy to reduce swelling and inflammation.',
      'Effective for acute and chronic pain conditions.',
      'Commonly used for muscle spasms and sports injuries.',
    ],
  },
  {
    id: 'ElectroTherapy',
    title: 'Electro Therapy',
    image: '/images/Treatments/Electrotherapy.png',
    points: [
      'Electrical stimulation for pain relief and healing.',
      'Improves muscle activation and nerve function.',
      'Reduces stiffness and muscle tightness.',
      'Helpful in post-operative rehabilitation.',
    ],
  },
  {
    id: 'ExerciseTherapy',
    title: 'Exercise Therapy',
    image: '/images/Treatments/ExerciseTherapy.png',
    points: [
      'Personalized exercise programs for recovery.',
      'Improves strength, flexibility, and endurance.',
      'Restores normal movement patterns.',
      'Prevents future injuries effectively.',
    ],
  },
  {
    id: 'ManualTherapy',
    title: 'Manual Therapy',
    image: '/images/Treatments/ManualTherapy.png',
    points: [
      'Hands-on techniques by trained physiotherapists.',
      'Improves joint mobility and soft tissue function.',
      'Relieves pain and muscle tightness.',
      'Effective for spine and joint conditions.',
    ],
  },
  {
    id: 'AdvancedTherapy',
    title: 'Advanced Exercises & Therapies',
    image: '/images/Treatments/OtherTherapies.png',
    points: [
      'Improves balance, coordination, and reduces risk of falls.',
      'Enhances gait pattern, posture, and functional mobility.',
      'Provides advanced non-invasive pain management for chronic conditions.',
      'Boosts confidence, independence, and overall quality of daily life.',
    ],
}
];

const Treatments = () => {
  const { isDarkMode } = useTheme();

  const mainBgClass = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gray-50 text-gray-900';

  const cardBgClass = isDarkMode
    ? 'bg-gray-800 border-gray-700'
    : 'bg-white border-gray-200';

  const titleClass = isDarkMode ? 'text-teal-400' : 'text-teal-600';
  const textColorClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  const buttonClass = isDarkMode
    ? 'border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900'
    : 'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white';

  return (
    <div className={`min-h-screen ${mainBgClass} py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wider mb-4">Treatments</h1>
        <p className={`max-w-2xl mx-auto text-lg ${textColorClass}`}>
          Specialized physiotherapy treatments designed to restore mobility, reduce pain, and improve quality of life.
        </p>
        <div className={`w-16 h-1 mx-auto mt-4 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'}`} />
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {treatmentData.map((treatment) => (
          <div key={treatment.id} className={`flex flex-col sm:flex-row rounded-2xl border shadow-md hover:shadow-xl transition overflow-hidden ${cardBgClass}`}>

            {/* Image */}
            <div className="w-full sm:w-1/3 max-w-[220px] aspect-[4/5] sm:aspect-[3/4] mx-auto sm:mx-0 overflow-hidden bg-gray-100 group">
              <img src={treatment.image} alt={treatment.title}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer" loading="lazy" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-5 flex-1">
              <div>
                <h2 className={`text-2xl font-bold mb-3 ${titleClass}`}>{treatment.title}</h2>
                <ul className={`list-disc list-inside space-y-2 text-sm ${textColorClass}`}>
                  {treatment.points.map((point, index) => (
                  <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <Link to={`/treatments/${treatment.id}`} className={`inline-block px-5 py-2 rounded-md text-sm font-semibold uppercase transition ${buttonClass}`}>
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
