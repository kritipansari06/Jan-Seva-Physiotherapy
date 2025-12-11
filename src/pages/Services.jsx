import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const IconBox = ({ children, colorClass, size = '3xl' }) => (
    <div className={`p-3 w-16 h-16 rounded-full flex items-center justify-center text-${size} mb-4 ${colorClass}`}>
        {children}
    </div>
);

const serviceData = {
    camps: [
        {
            title: "Blood Donation Drives",
            description: "A vital community service, we partner with leading blood banks to host regular donation events. This initiative emphasizes our commitment beyond rehabilitation, fostering a culture of giving and emergency preparedness in the local area. Every donation saves multiple lives.",
            icon: "🩸",
            bg: "bg-red-100 dark:bg-red-900/20",
            iconColor: "text-red-600 dark:text-red-400"
        },
        {
            title: "BP & Sugar Screening Camp",
            description: "Offering free, proactive health checks to identify risks associated with hypertension and diabetes. Our physiotherapists provide immediate consultations on how lifestyle changes, specific exercises, and physical activity can effectively manage or prevent these chronic conditions.",
            icon: "🩺",
            bg: "bg-teal-100 dark:bg-teal-900/20",
            iconColor: "text-teal-600 dark:text-teal-400"
        },
        {
            title: "Community Yoga & Wellness Camps",
            description: "Promoting mental and physical harmony, these camps introduce accessible yoga and mindfulness techniques. They are tailored for all age groups and physical abilities, focusing on flexibility, balance, posture correction, and stress reduction through movement.",
            icon: "🧘",
            bg: "bg-indigo-100 dark:bg-indigo-900/20",
            iconColor: "text-indigo-600 dark:text-indigo-400"
        },
    ],
    
    facilities: [
        {
            title: "State-of-the-Art Electrotherapy Unit",
            details: "We utilize advanced modalities like **High-Intensity Laser Therapy (HILT)**, **Ultrasound**, **TENS**, and **Interferential Therapy (IFT)**. These non-invasive tools accelerate healing at a cellular level, reduce chronic pain, minimize inflammation, and improve nerve conduction speed, offering faster recovery times.",
            benefit: "Accelerated tissue repair and non-pharmacological pain management.",
            imagePlaceholder: "Electrotherapy Devices"
        },
        {
            title: "Functional & Rehabilitation Gym",
            details: "More than just exercise equipment, our gym is a dedicated space for supervised, progressive rehabilitation. It features specialized resistance machines, balance trainers, and functional movement areas, ensuring a safe transition from injury to full physical capacity.",
            benefit: "Safe progression from injury to peak functional performance.",
            imagePlaceholder: "Rehab Gym"
        },
        {
            title: "Exclusive Manual Therapy Suites",
            details: "Our expert therapists deliver focused, personalized manual techniques, including **Myofascial Release**, **Joint Mobilization**, **Soft Tissue Massage**, and **Trigger Point Therapy**. These private sessions ensure maximum comfort and efficacy in restoring joint mechanics and muscle flexibility.",
            benefit: "Immediate pain reduction and superior joint mobility restoration.",
            imagePlaceholder: "Manual Therapy Session"
        },
        {
            title: "Advanced Biomechanical Analysis Lab",
            details: "Using high-speed video capture and pressure plates, we analyze your gait, posture, and movement patterns. This data-driven approach allows for precise diagnosis of underlying movement faults that cause pain, leading to highly targeted and effective treatment plans.",
            benefit: "Precise, data-backed diagnosis of chronic and complex movement issues.",
            imagePlaceholder: "Gait Analysis Equipment"
        },
    ],

    amenities: [
        { title: "Calming Waiting Sanctuary", detail: "Spacious, clean, and infused with calming aromatherapy. We prioritize minimizing wait times, but provide comfortable seating and complimentary filtered water for a peaceful experience.", icon: "🛋️", color: "bg-blue-100 dark:bg-blue-900/20" },
        { title: "Complete Accessibility", detail: "Our clinic is fully compliant with accessibility standards, including wide ramps, elevator access, and disability-friendly restrooms, ensuring a barrier-free experience for all mobility levels.", icon: "♿", color: "bg-green-100 dark:bg-green-900/20" },
        { title: "Flexible & Transparent Pricing", detail: "We offer tailored treatment packages to fit various budgets. All pricing is discussed upfront, ensuring no hidden costs so you can focus purely on your recovery.", icon: "💰", color: "bg-yellow-100 dark:bg-yellow-900/20" },
        { title: "Convenient Parking", detail: "Dedicated, secure, and ample parking space is available directly at the clinic premises, saving you the stress of finding a spot before your appointment.", icon: "🅿️", color: "bg-orange-100 dark:bg-orange-900/20" },
        { title: "Hygiene and Safety", detail: "We maintain stringent hygiene protocols. All equipment and therapy rooms are thoroughly sanitized between every patient session for your safety and confidence.", icon: "🧼", color: "bg-purple-100 dark:bg-purple-900/20" },
        { title: "Extended Appointment Hours", detail: "To accommodate busy professional schedules, we offer flexible booking, including early morning (7 AM) and late evening (8 PM) slots.", icon: "⏰", color: "bg-pink-100 dark:bg-pink-900/20" },
    ]
};

const Services = () => {
    const { isDarkMode } = useTheme();

    const mainBgClass = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";
    const secondaryBgClass = isDarkMode ? "bg-gray-800" : "bg-gray-50";
    const accentColorClass = "text-teal-600 dark:text-teal-400";
    const cardBgClass = isDarkMode ? "bg-gray-800 dark:border-gray-700" : "bg-white";
    const imagePlaceholderBg = isDarkMode ? "bg-gray-700" : "bg-gray-100";
    const textColorClass = isDarkMode ? "text-gray-300" : "text-gray-700";
    const baseButtonClasses = "px-6 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";
    const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";
    const borderColorClass = isDarkMode ? "border-gray-700" : "border-teal-200";
    const dividerClass = isDarkMode ? "border-gray-700" : "border-teal-200";

    return (
        <div className={`min-h-screen ${mainBgClass} py-12 px-4 sm:px-6 lg:px-8 ${secondaryBgClass} transition duration-300`}>
            
            <div className="container mx-auto max-w-7xl">
                
                <header className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl font-extrabold pb-4 uppercase tracking-tighter">
                        Our <span className={accentColorClass}>Services</span> & Commitment
                    </h1>
                    <p className={`text-xl max-w-3xl mx-auto mt-4 ${textColorClass}`}>
                        At Jan Seva, we deliver more than just treatment—we offer advanced facilities, meaningful community engagement, and a focus on your complete well-being.
                    </p>
                </header>

                <hr className={`border-t ${dividerClass} mb-16`} />

                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Community <span className={accentColorClass}>Camps</span> & Initiatives
                    </h2>
                    <p className={`text-center ${textColorClass} max-w-3xl mx-auto mb-12`}>
                        Serving the community is at the heart of our mission. We regularly host vital health and wellness initiatives open to everyone.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceData.camps.map((camp, index) => (
                            <div key={index} className={`p-8 ${cardBgClass} rounded-xl shadow-lg hover:shadow-xl transition duration-500 border-2 ${borderColorClass}`}>
                                <IconBox colorClass={camp.bg}>
                                    <span className={camp.iconColor}>{camp.icon}</span>
                                </IconBox>
                                <h3 className="text-2xl font-semibold mb-3">{camp.title}</h3>
                                <p className={textColorClass}>{camp.description}</p>
                                <Link to="/contact" className={`mt-4 inline-block text-sm font-medium ${accentColorClass} hover:opacity-80`}>
                                    Check Schedule &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className={`border-t ${dividerClass} mb-16`} />
                
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Advanced Clinical <span className={accentColorClass}>Facilities</span> & Technology
                    </h2>
                    
                    <div className="space-y-12">
                        {serviceData.facilities.map((facility, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${cardBgClass} rounded-lg shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border-2 ${borderColorClass}`}>
                                
                                <div className={`w-full md:w-1/2 h-64 md:h-auto shrink-0 ${imagePlaceholderBg} flex items-center justify-center p-6`}>
                                    <div className={isDarkMode ? "text-gray-500" : "text-gray-500"}>
                                        [Large, high-quality image of {facility.imagePlaceholder}]
                                    </div>
                                </div>
                                
                                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                    <h3 className={`text-3xl font-bold mb-3 ${accentColorClass}`}>{facility.title}</h3>
                                    <hr className={`w-12 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mb-4`} />
                                    <p className={`text-lg mb-4 ${textColorClass}`}>{facility.details}</p>
                                    <p className={`text-sm italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        **Our Goal:** {facility.benefit}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <hr className={`border-t ${dividerClass} mb-16`} />

                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Your Visit: <span className={accentColorClass}>Comfort</span> & Premium Amenities
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceData.amenities.map((amenity, index) => (
                            <div key={index} 
                                className={`p-6 ${cardBgClass} rounded-lg shadow-lg border-2 ${borderColorClass} transform hover:scale-105 hover:shadow-xl transition duration-300`}>
                                <div className="flex items-center mb-3">
                                    <div className={`text-4xl mr-4 ${amenity.color} rounded-md p-2`}>{amenity.icon}</div>
                                    <h3 className="text-xl font-semibold">{amenity.title}</h3>
                                </div>
                                <hr className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mb-3`} />
                                <p className={textColorClass}>{amenity.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <hr className={`border-t ${dividerClass} mb-16`} />

                <section className="text-center py-10">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Experience Our <span className={accentColorClass}>Exceptional Care</span>?
                    </h2>
                    <p className={`text-lg mb-8 max-w-3xl mx-auto ${textColorClass}`}>
                        We are ready to partner with you on your recovery journey. Contact us today to schedule your first comprehensive assessment.
                    </p>
                    <Link 
                        to="/contact" 
                        className={`${baseButtonClasses} ${buttonSolidClass} text-lg`}>
                        Schedule a Consultation
                    </Link>
                </section>

            </div>
        </div>
    );
};

export default Services;