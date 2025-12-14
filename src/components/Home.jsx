import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import heroBg from '../assets/images/physio2.png'; 

import featureIcon1 from '../assets/react.svg';
import featureIcon2 from '../assets/vite.svg';
import featureIcon3 from '../assets/vite.svg';

import testimonial1 from '../assets/images/testimonial1.png';
import testimonial2 from '../assets/images/testimonial2.png';
import testimonial3 from '../assets/images/testimonial3.png';
import testimonial4 from '../assets/images/testimonial4.jpg';
import testimonial5 from '../assets/images/testimonial5.jpg';
import testimonial6 from '../assets/images/testimonial6.jpg';


const allTestimonials = [
    { id: 1, image: testimonial1 },
    { id: 2, image: testimonial2 },
    { id: 3, image: testimonial3 },
    { id: 4, image: testimonial4 },
    { id: 5, image: testimonial5 },
    { id: 6, image: testimonial6 },
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
    const { isDarkMode } = useTheme();
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const accentColorClass = isDarkMode ? "text-teal-400" : "text-teal-600";
    const highlightColorClass = isDarkMode ? "bg-teal-600" : "bg-teal-600";
    const buttonOutlineClass = isDarkMode 
      ? "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900" 
      : "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white";
    const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";
    const baseButtonClasses = "px-8 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";
    const mainBgClass = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";

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

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button 
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <img 
                        src={selectedImage} 
                        alt="Enlarged view" 
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <section className="relative h-screen flex items-center justify-center text-center p-4"
                style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-900 opacity-70' : 'bg-gray-50 opacity-65'}`}></div>
                
                <div className="relative z-10 max-w-4xl">
                    <p className={`text-xl sm:text-2xl font-light mb-4 ${accentColorClass} uppercase tracking-widest`}>
                        Rediscover Movement. Live Pain-Free.
                    </p>
                    <h1 className={`text-4xl sm:text-6xl font-extrabold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Comprehensive <span className={accentColorClass}>Physiotherapy</span> and Rehabilitation Centre
                    </h1>
                    <p className={`text-lg sm:text-xl mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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

            <hr className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} />

            <section className={`py-16 sm:py-24 p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="container mx-auto max-w-6xl">
                    <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Specialized <span className={accentColorClass}>Services</span>
                    </h2>
                    <p className={`text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        From injury recovery to preventative care, our expert team offers a wide range of services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className={`p-6 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} border rounded-xl shadow-lg hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Orthopedic Rehab</h3>
                            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                Targeted therapy for joint and bone injuries, including post-surgical and chronic conditions.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:opacity-80`}>
                                View Therapies &rarr;
                            </Link>
                        </div>

                        <div className={`p-6 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} border rounded-xl shadow-lg hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Sports Injury</h3>
                            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                Accelerated recovery and performance enhancement for athletes of all levels.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:opacity-80`}>
                                View Rehabs &rarr;
                            </Link>
                        </div>

                        <div className={`p-6 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} border rounded-xl shadow-lg hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Pain Management</h3>
                            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                                Non-pharmacological approaches to reduce pain and improve quality of life.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:opacity-80`}>
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

            <hr className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} />

            <section className={`py-16 sm:py-24 p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="container mx-auto max-w-6xl">
                    <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Why Choose <span className={accentColorClass}>Jan Seva</span>?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {features.map((feature, index) => (
                            <div key={index} className={`p-6 rounded-xl ${isDarkMode ? 'border border-gray-700 bg-gray-800' : 'border border-gray-200 bg-linear-to-br from-teal-50 to-blue-50'} shadow-md hover:shadow-xl transition duration-300`}>
                                <div className={`mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full ${highlightColorClass} text-white text-3xl font-bold`}>
                                    {feature.icon}
                                </div>
                                
                                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} />

            <section className={`py-16 sm:py-24 p-4 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="container mx-auto max-w-7xl">
                    
                    <h2 className={`text-3xl sm:text-4xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Hear From Our <span className={accentColorClass}>Clients</span>
                    </h2>

                    <div className="relative overflow-hidden">
                        <style>{`
                            @keyframes marquee {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                            }
                            .animate-marquee {
                                animation: marquee 30s linear infinite;
                            }
                            .animate-marquee:hover {
                                animation-play-state: paused;
                            }
                        `}</style>
                        
                        <div className="flex animate-marquee">
                            {[...allTestimonials, ...allTestimonials].map((testimonial, index) => (
                                <div 
                                    key={`${testimonial.id}-${index}`} 
                                    className="flex shrink-0 w-80 mx-4 cursor-pointer"
                                    onClick={() => setSelectedImage(testimonial.image)}
                                >
                                    <div className={`rounded-xl shadow-xl overflow-hidden h-full hover:shadow-2xl transition-shadow duration-300 ${isDarkMode ? 'border border-gray-700' : ''}`}>
                                        <img 
                                            src={testimonial.image} 
                                            alt={`Testimonial ${testimonial.id}`} 
                                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <Link 
                            to="/testimonials" 
                            className={`${baseButtonClasses} ${buttonOutlineClass} text-lg`}>
                            View All Testimonials
                        </Link>
                    </div>
                    
                    <hr className={`w-24 h-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} mx-auto mt-16`} />

                </div>
            </section>
        </div>
    );
};

export default Home;