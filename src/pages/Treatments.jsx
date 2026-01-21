// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useTheme } from '../context/ThemeContext';

// const treatmentData = [
//   { 
//     id: 'therapies', 
//     title: 'Therapies', 
//     image: '/images/TT.Therapies.png',
//     points: [
//       'Comprehensive assessment and diagnosis.',
//       'Personalized manual therapy techniques.',
//       'Pain management strategies.',
//       'Post-surgical rehabilitation.',
//     ] 
//   },
//   { 
//     id: 'equipments', 
//     title: 'Equipments', 
//     image: '/images/TT.Equipment.png',
//     points: [
//       'Access to advanced electrotherapy machines.',
//       'State-of-the-art exercise machines.',
//       'Specialized diagnostic tools.',
//       'Non-invasive pain relief devices.',
//     ] 
//   },
//   { 
//     id: 'rehabs', 
//     title: 'Rehabs', 
//     image: '/images/TT.Rehab.png',
//     points: [
//       'Injury recovery and strengthening programs.',
//       'Functional movement retraining.',
//       'Sport-specific rehabilitation.',
//       'Chronic condition management.',
//     ] 
//   },
//   { 
//     id: 'wellness-prevention', 
//     title: 'Wellness & Prevention', 
//     image: '/images/TT.Wellness.png',
//     points: [
//       'Ergonomics and posture consultation.',
//       'Injury prevention workshops.',
//       'General physical conditioning.',
//       'Customized home exercise plans.',
//     ] 
//   },
// ];

// const Treatments = () => {
//   const { isDarkMode } = useTheme();

//   const cardBgClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"; 
//   const titleClass = isDarkMode ? "text-teal-400" : "text-teal-600"; 
//   const buttonClasses = "text-sm uppercase font-semibold mt-4 transition duration-300";
//   const buttonOutlineClass = isDarkMode
//     ? "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 px-6 py-2 rounded-md"
//     : "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-2 rounded-md";
//   const mainBgClass = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900";
//   const textColorClass = isDarkMode ? "text-gray-300" : "text-gray-700";

//   return (
//     <div className={`min-h-screen ${mainBgClass} py-12 px-4 sm:px-6 lg:px-8`}>
      
//       <h1 className={`text-4xl sm:text-5xl font-extrabold text-center mb-2 pb-4 uppercase tracking-wider ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//         Treatments
//       </h1>
      
//       <p className={`text-center text-lg mb-8 max-w-2xl mx-auto ${textColorClass}`}>
//         Explore our specialized areas of physiotherapy, designed to restore your mobility, manage pain, and accelerate recovery.
//       </p>
      
//       <hr className={`w-16 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-10`} />
//       <div className="max-w-4xl mx-auto space-y-8">
//         {treatmentData.map((treatment) => (
//   <div 
//     key={treatment.id} 
//     /* Mobile par flex-col aur items-center taki portrait image center mein rahe */
//     className={`flex flex-col min-[568px]:flex-row items-center min-[568px]:items-stretch ${cardBgClass} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 h-auto`}
//   >
    
    
//     <div className={`w-[200px] h-[260px] min-[568px]:w-1/3 min-[568px]:h-auto md:w-1/4 shrink-0 my-4 min-[568px]:my-0 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
//       <img 
//         src={treatment.image} 
//         alt={`${treatment.title} image`} 
//         /* object-cover aur rounded-lg for clean look */
//         className="w-full h-full object-cover rounded-lg min-[568px]:rounded-none" 
//       />
//     </div>

//     {/* Content Area */}
//     <div className="flex w-full min-[568px]:w-2/3 md:grow p-4 sm:p-6 flex-col justify-between">
//       <div>
//         <h2 className={`text-xl sm:text-3xl font-bold mb-2 sm:mb-4 ${titleClass} text-center min-[568px]:text-left`}>
//           {treatment.title}
//         </h2>
//         <ul className={`space-y-1 sm:space-y-2 list-disc list-inside ${textColorClass} text-xs sm:text-base`}>
//           {treatment.points.map((point, index) => (
//             <li key={index} className="leading-tight sm:leading-normal">{point}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="mt-4 sm:mt-6 flex justify-center min-[568px]:justify-start">
//         <Link 
//           to={`/treatments/${treatment.id}`}
//           className={`inline-block ${buttonClasses} ${buttonOutlineClass} text-[10px] sm:text-sm px-3 py-1 sm:px-6 sm:py-2`}>
//           Read More
//         </Link>
//       </div>
//     </div>
//   </div>
// ))}
//       </div>
//     </div>
//   );
// };

// export default Treatments;



import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

// Data moved outside component to prevent re-renders
const treatmentData = [
  { 
    id: 'therapies', 
    title: 'Therapies', 
    image: '/images/TT.Therapies.png', // Ensure this file is in public/images/
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
    image: '/images/TT.Equipment.png',
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
    image: '/images/TT.Rehab.png',
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
    image: '/images/TT.Wellness.png',
    points: [
      'Ergonomics and posture consultation.',
      'Injury prevention workshops.',
      'General physical conditioning.',
      'Customized home exercise plans.',
    ] 
  },
];

const Treatments = () => {
  const { isDarkMode } = useTheme();

  // Dynamic class definitions for cleaner JSX
  const cardBgClass = isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"; 
  const titleClass = isDarkMode ? "text-teal-400" : "text-teal-600"; 
  const mainBgClass = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900";
  const textColorClass = isDarkMode ? "text-gray-300" : "text-gray-700";
  const buttonOutlineClass = isDarkMode
    ? "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
    : "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white";

  return (
    <div className={`min-h-screen ${mainBgClass} py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300`}>
      
      <header className="text-center mb-10">
        <h1 className={`text-4xl sm:text-5xl font-extrabold mb-4 uppercase tracking-wider ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Treatments
        </h1>
        <p className={`text-lg mb-6 max-w-2xl mx-auto ${textColorClass}`}>
          Explore our specialized areas of physiotherapy, designed to restore your mobility, manage pain, and accelerate recovery.
        </p>
        <hr className={`w-16 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto`} />
      </header>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {treatmentData.map((treatment) => (
          <div 
            key={treatment.id} 
            className={`flex flex-col min-[568px]:flex-row items-center min-[568px]:items-stretch ${cardBgClass} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 h-auto`}
          >
            {/* Image Section */}
            <div className={`w-[200px] h-[260px] min-[568px]:w-1/3 min-[568px]:h-auto md:w-1/4 shrink-0 my-4 min-[568px]:my-0 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center`}>
              <img 
                src={treatment.image} 
                alt={treatment.title} 
                className="w-full h-full object-cover rounded-lg min-[568px]:rounded-none" 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found'; }}
              />
            </div>

            {/* Content Section */}
            <div className="flex w-full min-[568px]:w-2/3 md:grow p-4 sm:p-6 flex-col justify-between">
              <div>
                <h2 className={`text-xl sm:text-3xl font-bold mb-2 sm:mb-4 ${titleClass} text-center min-[568px]:text-left`}>
                  {treatment.title}
                </h2>
                <ul className={`space-y-1 sm:space-y-2 list-disc list-inside ${textColorClass} text-xs sm:text-base`}>
                  {treatment.points.map((point, index) => (
                    <li key={index} className="leading-tight sm:leading-normal">{point}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 sm:mt-6 flex justify-center min-[568px]:justify-start">
                <Link 
                  to={`/treatments/${treatment.id}`}
                  className={`inline-block text-sm uppercase font-semibold transition duration-300 ${buttonOutlineClass} px-6 py-2 rounded-md`}>
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