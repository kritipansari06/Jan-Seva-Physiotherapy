// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import heroBg from '../assets/images/physio.png'; 
// import featureIcon1 from '../assets/react.svg';
// import featureIcon2 from '../assets/vite.svg';
// import featureIcon3 from '../assets/vite.svg';

// const allTestimonials = [
//     {
//         id: 1,
//         quote: "After years of chronic back pain, the team at Jan Seva gave me my life back. The attention to detail and personalized care was unmatched.",
//         name: "Rakesh Sharma",
//         details: "Long-term Patient, Back Rehab",
//         image: featureIcon2 
//     },
//     {
//         id: 2,
//         quote: "The sports injury rehabilitation program here is fantastic. I was back on the field faster than I expected, feeling stronger and more confident.",
//         name: "Priya Verma",
//         details: "Athlete, Knee Ligament Repair",
//         image: featureIcon3 
//     },
//     {
//         id: 3,
//         quote: "The therapists are highly knowledgeable and genuinely care about your recovery. This clinic provides the best physiotherapy I have ever experienced.",
//         name: "Ajay Singh",
//         details: "Elderly Patient, Mobility Improvement",
//         image: featureIcon1 
//     },
//     {
//         id: 4,
//         quote: "My chronic shoulder pain has completely subsided thanks to their manual therapy sessions. Highly recommended for any joint issues!",
//         name: "Sunita Devi",
//         details: "Office Worker, Shoulder Pain",
//         image: featureIcon2
//     },
//     {
//         id: 5,
//         quote: "The post-operative care for my ankle surgery was exceptional. I felt supported every step of the way and regained full function quickly.",
//         name: "Vikram Patel",
//         details: "Post-Op Patient, Ankle Surgery",
//         image: featureIcon3 
//     },
//     {
//         id: 6,
//         quote: "Excellent advice on ergonomics and posture. My persistent neck stiffness is gone. True professionals who focus on prevention.",
//         name: "Geeta Nair",
//         details: "IT Professional, Neck Pain",
//         image: featureIcon1 
//     },
// ];

// const features = [
//     { 
//       title: "Manual Therapy Experts", 
//       description: "Hands-on techniques for immediate pain relief and mobility improvement.", 
//       icon: featureIcon1 
//     },
//     { 
//       title: "Personalized Programs", 
//       description: "Custom recovery plans tailored specifically to your body and goals.", 
//       icon: featureIcon2
//     },
//     { 
//       title: "Modern Equipment", 
//       description: "Utilizing the latest technology for effective and accelerated rehabilitation.", 
//       icon: featureIcon3
//     },
// ];


// const Home = () => {
//     const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
//     const mainBgClass = "bg-gray-900 text-white";
//     const accentColorClass = "text-teal-400";
//     const highlightColorClass = "bg-teal-600";
//     const buttonOutlineClass = "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900";
//     const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";
//     const baseButtonClasses = "px-8 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";

//     const nextTestimonial = () => {
//         setCurrentTestimonialIndex((prevIndex) => 
//             (prevIndex + 1) % allTestimonials.length
//         );
//     };

//     const prevTestimonial = () => {
//         setCurrentTestimonialIndex((prevIndex) => 
//             (prevIndex - 1 + allTestimonials.length) % allTestimonials.length
//         );
//     };

//     const activeTestimonial = allTestimonials[currentTestimonialIndex];


//     return (
//         <div className={mainBgClass}>

//             <section 
//                 className="relative h-screen flex items-center justify-center text-center p-4"
//                 style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//                 <div className="absolute inset-0 bg-black opacity-70"></div>
                
//                 <div className="relative z-10 max-w-4xl">
//                     <p className={`text-xl sm:text-2xl font-light mb-4 ${accentColorClass} uppercase tracking-widest`}>
//                         Rediscover Movement. Live Pain-Free.
//                     </p>
//                     <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
//                         Comprehensive <span className={accentColorClass}>Physiotherapy</span> and Rehabilitation Centre
//                     </h1>
//                     <p className="text-lg sm:text-xl text-gray-300 mb-10">
//                         We are dedicated to providing expert care and personalized treatment programs to help you achieve long-term health and wellness.
//                     </p>
                    
//                     <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//                         <Link 
//                             to="/contact" 
//                             className={`${baseButtonClasses} ${buttonSolidClass} shadow-teal-500/50`}>
//                             Connect with us
//                         </Link>
//                         <Link 
//                             to="/about" 
//                             className={`${baseButtonClasses} ${buttonOutlineClass} hover:text-white`}>
//                             Learn More
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             <hr className="border-t border-gray-800" />

//             <section className="py-16 sm:py-24 p-4">
//                 <div className="container mx-auto max-w-6xl">
//                     <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
//                         Our Specialized <span className={accentColorClass}>Services</span>
//                     </h2>
//                     <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
//                         From injury recovery to preventative care, our expert team offers a wide range of services.
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
//                             <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Orthopedic Rehab</h3>
//                             <p className="text-gray-300 mb-4">
//                                 Targeted therapy for joint and bone injuries, including post-surgical and chronic conditions.
//                             </p>
//                             <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
//                                 View Therapies &rarr;
//                             </Link>
//                         </div>

//                         <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
//                             <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Sports Injury</h3>
//                             <p className="text-gray-300 mb-4">
//                                 Accelerated recovery and performance enhancement for athletes of all levels.
//                             </p>
//                             <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
//                                 View Rehabs &rarr;
//                             </Link>
//                         </div>

//                         <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
//                             <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Pain Management</h3>
//                             <p className="text-gray-300 mb-4">
//                                 Non-pharmacological approaches to reduce pain and improve quality of life.
//                             </p>
//                             <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
//                                 View Equipment &rarr;
//                             </Link>
//                         </div>
//                     </div>
                    
//                     <div className="text-center mt-12">
//                         <Link to="/treatments" className={`${baseButtonClasses} ${buttonOutlineClass}`}>
//                             See All Treatments
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             <hr className="border-t border-gray-800" />

//             <section className="py-16 sm:py-24 bg-gray-800 p-4">
//                 <div className="container mx-auto max-w-6xl">
//                     <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
//                         Why Choose <span className={accentColorClass}>Jan Seva</span>?
//                     </h2>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//                         {features.map((feature, index) => (
//                             <div key={index} className="p-6 rounded-xl border border-gray-700">
//                                 <div className={`mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full ${highlightColorClass} text-white text-3xl font-bold`}>
//                                     <img src={feature.icon} alt={`${feature.title} icon`} className="w-8 h-8 filter invert" />
//                                 </div>
                                
//                                 <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//                                 <p className="text-gray-400">{feature.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <hr className="border-t border-gray-800" />

//             <section className="py-16 sm:py-24 p-4 text-center">
//                 <div className="container mx-auto max-w-4xl">
                    
//                     <h2 className="text-3xl sm:text-4xl font-bold mb-10">
//                         Hear From Our <span className={accentColorClass}>Clients</span>
//                     </h2>

//                     <div className="relative mx-auto max-w-lg">
                        
//                         <div key={activeTestimonial.id} className={`p-6 sm:p-8 mb-4 rounded-xl shadow-2xl bg-gray-800 border-2 border-gray-700 text-center transition-opacity duration-500 ease-in-out`}>
                            
//                             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
//                                 <div className="flex shrink-0">
//                                     <img src={activeTestimonial.image} alt={`${activeTestimonial.name} Photo`} 
//                                         className="w-20 h-20 object-cover rounded-md border-2 border-teal-400" />
//                                 </div>
                                
//                                 <div className="text-center sm:text-left">
//                                     <p className={`font-bold text-xl ${accentColorClass}`}>{activeTestimonial.name}</p>
//                                     <p className="text-sm text-gray-400">{activeTestimonial.details}</p>
//                                 </div>
//                             </div>

//                             <blockquote className="border-t border-gray-700 pt-4">
//                                 <p className="italic text-gray-200 text-base">
//                                     "{activeTestimonial.quote}"
//                                 </p>
//                             </blockquote>
//                         </div>

//                         <div className="flex justify-center space-x-6 mt-4">
//                             <button 
//                                 onClick={prevTestimonial}
//                                 className={`text-xl ${accentColorClass} hover:text-teal-300 transition-colors`}
//                                 aria-label="Previous testimonial">
//                                 &larr; Previous
//                             </button>
//                            <div className="flex items-center space-x-3">
//                                 {allTestimonials.map((_, index) => (
//                                     <span 
//                                         key={index}
//                                         className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
//                                             index === currentTestimonialIndex ? 'bg-teal-400' : 'bg-gray-600 hover:bg-gray-500'
//                                         }`}
//                                         onClick={() => setCurrentTestimonialIndex(index)}>
//                                     </span>
//                                 ))}
//                             </div>

//                             <button 
//                                 onClick={nextTestimonial}
//                                 className={`text-xl ${accentColorClass} hover:text-teal-300 transition-colors`}
//                                 aria-label="Next testimonial">
//                                 Next &rarr;
//                             </button>
//                         </div>

//                     </div>
//                     <br />

//                     <Link 
//                         to="/testimonials" 
//                         className={`${baseButtonClasses} ${buttonOutlineClass} text-lg mt-12 mb-16`}>
//                         View All Testimonials
//                     </Link>
                    
//                     <hr className="w-24 h-0.5 bg-gray-700 mx-auto mb-16" />

//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;









import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/physio2.png'; 
import featureIcon1 from '../assets/react.svg';
import featureIcon2 from '../assets/vite.svg';
import featureIcon3 from '../assets/vite.svg';

const allTestimonials = [
    {
        id: 1,
        quote: "After years of chronic back pain, the team at Jan Seva gave me my life back. The attention to detail and personalized care was unmatched.",
        name: "Rakesh Sharma",
        details: "Long-term Patient, Back Rehab",
        image: "https://via.placeholder.com/80" 
    },
    {
        id: 2,
        quote: "The sports injury rehabilitation program here is fantastic. I was back on the field faster than I expected, feeling stronger and more confident.",
        name: "Priya Verma",
        details: "Athlete, Knee Ligament Repair",
        image: "https://via.placeholder.com/80" 
    },
    {
        id: 3,
        quote: "The therapists are highly knowledgeable and genuinely care about your recovery. This clinic provides the best physiotherapy I have ever experienced.",
        name: "Ajay Singh",
        details: "Elderly Patient, Mobility Improvement",
        image: "https://via.placeholder.com/80" 
    },
    {
        id: 4,
        quote: "My chronic shoulder pain has completely subsided thanks to their manual therapy sessions. Highly recommended for any joint issues!",
        name: "Sunita Devi",
        details: "Office Worker, Shoulder Pain",
        image: "https://via.placeholder.com/80"
    },
    {
        id: 5,
        quote: "The post-operative care for my ankle surgery was exceptional. I felt supported every step of the way and regained full function quickly.",
        name: "Vikram Patel",
        details: "Post-Op Patient, Ankle Surgery",
        image: "https://via.placeholder.com/80" 
    },
    {
        id: 6,
        quote: "Excellent advice on ergonomics and posture. My persistent neck stiffness is gone. True professionals who focus on prevention.",
        name: "Geeta Nair",
        details: "IT Professional, Neck Pain",
        image: "https://via.placeholder.com/80" 
    },
];

const features = [
    { 
      title: "Manual Therapy Experts", 
      description: "Hands-on techniques for immediate pain relief and mobility improvement.", 
      icon: "🤲" 
    },
    { 
      title: "Personalized Programs", 
      description: "Custom recovery plans tailored specifically to your body and goals.", 
      icon: "📋"
    },
    { 
      title: "Modern Equipment", 
      description: "Utilizing the latest technology for effective and accelerated rehabilitation.", 
      icon: "⚡"
    },
];


const Home = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const mainBgClass = "bg-white text-gray-900";
    const accentColorClass = "text-teal-600";
    const highlightColorClass = "bg-teal-600";
    const buttonOutlineClass = "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white";
    const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";
    const baseButtonClasses = "px-8 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => 
            (prevIndex + 1) % allTestimonials.length
        );
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prevIndex) => 
            (prevIndex - 1 + allTestimonials.length) % allTestimonials.length
        );
    };

    const activeTestimonial = allTestimonials[currentTestimonialIndex];


    return (
        <div className={mainBgClass}>

            <section className="relative h-screen flex items-center justify-center text-center p-4"
                style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-gray-50 opacity-65"></div>
                
                <div className="relative z-10 max-w-4xl">
                    <p className={`text-xl sm:text-2xl font-light mb-4 ${accentColorClass} uppercase tracking-widest`}>
                        Rediscover Movement. Live Pain-Free.
                    </p>
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
                        Comprehensive <span className={accentColorClass}>Physiotherapy</span> and Rehabilitation Centre
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-10">
                        We are dedicated to providing expert care and personalized treatment programs to help you achieve long-term health and wellness.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link 
                            to="/contact" 
                            className={`${baseButtonClasses} ${buttonSolidClass} shadow-teal-500/50`}>
                            Connect with us
                        </Link>
                        <Link 
                            to="/about" 
                            className={`${baseButtonClasses} ${buttonOutlineClass}`}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            <hr className="border-t border-gray-300" />

            <section className="py-16 sm:py-24 p-4 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
                        Our Specialized <span className={accentColorClass}>Services</span>
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        From injury recovery to preventative care, our expert team offers a wide range of services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className={`p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Orthopedic Rehab</h3>
                            <p className="text-gray-700 mb-4">
                                Targeted therapy for joint and bone injuries, including post-surgical and chronic conditions.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-800`}>
                                View Therapies &rarr;
                            </Link>
                        </div>

                        <div className={`p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Sports Injury</h3>
                            <p className="text-gray-700 mb-4">
                                Accelerated recovery and performance enhancement for athletes of all levels.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-800`}>
                                View Rehabs &rarr;
                            </Link>
                        </div>

                        <div className={`p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Pain Management</h3>
                            <p className="text-gray-700 mb-4">
                                Non-pharmacological approaches to reduce pain and improve quality of life.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-800`}>
                                View Equipment &rarr;
                            </Link>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link to="/treatments" className={`${baseButtonClasses} ${buttonOutlineClass}`}>
                            See All Treatments
                        </Link>
                    </div>
                </div>
            </section>

            <hr className="border-t border-gray-300" />

            <section className="py-16 sm:py-24 bg-white p-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
                        Why Choose <span className={accentColorClass}>Jan Seva</span>?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 rounded-xl border border-gray-200 bg-gradient-to-br from-teal-50 to-blue-50 shadow-md hover:shadow-xl transition duration-300">
                                <div className={`mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full ${highlightColorClass} text-white text-3xl font-bold`}>
                                    {feature.icon}
                                </div>
                                
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="border-t border-gray-300" />

            <section className="py-16 sm:py-24 p-4 text-center bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">
                        Hear From Our <span className={accentColorClass}>Clients</span>
                    </h2>

                    <div className="relative mx-auto max-w-lg">
                        
                        <div key={activeTestimonial.id} className={`p-6 sm:p-8 mb-4 rounded-xl shadow-2xl bg-white border-2 border-gray-200 text-center transition-opacity duration-500 ease-in-out`}>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                                <div className="flex shrink-0">
                                    <img src={activeTestimonial.image} alt={`${activeTestimonial.name} Photo`} 
                                        className="w-20 h-20 object-cover rounded-md border-2 border-teal-600" />
                                </div>
                                
                                <div className="text-center sm:text-left">
                                    <p className={`font-bold text-xl ${accentColorClass}`}>{activeTestimonial.name}</p>
                                    <p className="text-sm text-gray-500">{activeTestimonial.details}</p>
                                </div>
                            </div>

                            <blockquote className="border-t border-gray-200 pt-4">
                                <p className="italic text-gray-700 text-base">
                                    "{activeTestimonial.quote}"
                                </p>
                            </blockquote>
                        </div>

                        <div className="flex justify-center space-x-6 mt-4">
                            <button 
                                onClick={prevTestimonial}
                                className={`text-xl ${accentColorClass} hover:text-teal-800 transition-colors font-semibold`}
                                aria-label="Previous testimonial">
                                &larr; Previous
                            </button>
                           <div className="flex items-center space-x-3">
                                {allTestimonials.map((_, index) => (
                                    <span 
                                        key={index}
                                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                            index === currentTestimonialIndex ? 'bg-teal-600' : 'bg-gray-400 hover:bg-gray-500'
                                        }`}
                                        onClick={() => setCurrentTestimonialIndex(index)}>
                                    </span>
                                ))}
                            </div>

                            <button 
                                onClick={nextTestimonial}
                                className={`text-xl ${accentColorClass} hover:text-teal-800 transition-colors font-semibold`}
                                aria-label="Next testimonial">
                                Next &rarr;
                            </button>
                        </div>

                    </div>
                    <br />

                    <Link 
                        to="/testimonials" 
                        className={`${baseButtonClasses} ${buttonOutlineClass} text-lg mt-12 mb-16`}>
                        View All Testimonials
                    </Link>
                    
                    <hr className="w-24 h-0.5 bg-gray-300 mx-auto mb-16" />

                </div>
            </section>
        </div>
    );
};

export default Home;