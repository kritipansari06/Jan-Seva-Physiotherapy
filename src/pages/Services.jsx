// import React from 'react';
// import { Link } from 'react-router-dom';

// // Placeholder Icon components (These would typically be actual SVG imports, 
// // but we'll use simple divs/emojis for ease of use.)
// const IconBox = ({ children, colorClass }) => (
//     <div className={`p-3 w-14 h-14 rounded-full flex items-center justify-center text-3xl mb-4 ${colorClass}`}>
//         {children}
//     </div>
// );

// const serviceData = {
//     // 1. Community Outreach Camps
//     camps: [
//         {
//             title: "Blood Donation Drive",
//             description: "Partnering with local hospitals, we host regular blood donation camps. Your contribution saves lives, strengthening the health of our entire community.",
//             icon: "🩸",
//             bg: "bg-red-600/20",
//             iconColor: "text-red-400"
//         },
//         {
//             title: "BP & Sugar Screening Camp",
//             description: "Free check-ups and consultations for managing common lifestyle diseases. Early detection and advice on preventative physical activity are key.",
//             icon: "🩺",
//             bg: "bg-teal-600/20",
//             iconColor: "text-teal-400"
//         },
//         {
//             title: "Community Yoga & Wellness",
//             description: "Organizing accessible yoga and fitness camps to promote overall wellness, flexibility, and stress reduction for all age groups.",
//             icon: "🧘",
//             bg: "bg-indigo-600/20",
//             iconColor: "text-indigo-400"
//         },
//     ],
    
//     // 2. Core Physiotherapy Facilities
//     facilities: [
//         {
//             title: "Advanced Electrotherapy Unit",
//             details: "Featuring the latest equipment including Ultrasound, TENS, IFT, and Laser Therapy for targeted pain relief and tissue healing.",
//             imagePlaceholder: "Electrotherapy"
//         },
//         {
//             title: "Dedicated Rehabilitation Gym",
//             details: "A fully-equipped space with specialized machines for strengthening, conditioning, and functional movement training under supervision.",
//             imagePlaceholder: "Rehab Gym"
//         },
//         {
//             title: "Private Manual Therapy Suites",
//             details: "Comfortable, private rooms designed for focused one-on-one sessions for manual therapy, dry needling, and sports massage.",
//             imagePlaceholder: "Manual Therapy"
//         },
//         {
//             title: "Posture & Gait Analysis Lab",
//             details: "High-tech tools to accurately assess biomechanics, diagnose issues, and create corrective exercise programs.",
//             imagePlaceholder: "Gait Analysis"
//         },
//     ],

//     // 3. Other Amenities
//     amenities: [
//         { title: "Comfortable Waiting Area", detail: "Spacious, clean, and calming environment with modern seating and complimentary refreshments.", icon: "🛋️" },
//         { title: "Wheelchair Accessible", detail: "Ramps, wide doorways, and accessible facilities ensure ease of access for all patients.", icon: "♿" },
//         { title: "In-Budget Treatment Plans", detail: "Transparent and affordable pricing with flexible plans tailored to suit your financial needs.", icon: "💰" },
//         { title: "Ample Parking Area", detail: "Dedicated, secure, and easily accessible parking space available right outside the clinic premises.", icon: "🅿️" },
//         { title: "Hydration Station", detail: "Access to filtered drinking water and herbal teas before and after your sessions.", icon: "💧" },
//         { title: "Extended Hours", detail: "Flexible scheduling, including early morning and evening appointments, to fit your busy life.", icon: "⏰" },
//     ]
// };

// const Services = () => {
//     // Theme Classes
//     const mainBgClass = "bg-gray-900 text-white";
//     const accentColorClass = "text-teal-400";
//     const cardBgClass = "bg-gray-800";
//     const imagePlaceholderBg = "bg-gray-700";

//     // Reusable Button Styles
//     const baseButtonClasses = "px-6 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";
//     const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";

//     return (
//         <div className={`min-h-screen ${mainBgClass} py-12 px-4 sm:px-6 lg:px-8`}>
            
//             <div className="container mx-auto max-w-7xl">
                
//                 {/* Global Heading */}
//                 <header className="text-center mb-16">
//                     <h1 className="text-5xl sm:text-6xl font-extrabold pb-4 text-white uppercase tracking-tighter">
//                         Our <span className={accentColorClass}>Services</span> & Commitment
//                     </h1>
//                     <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
//                         At Jan Seva, we believe in holistic care—from advanced clinical facilities to deep community engagement. Discover how we serve you.
//                     </p>
//                 </header>

//                 <hr className="border-t border-teal-400/30 mb-16" />

//                 {/* -------------------- 1. COMMUNITY OUTREACH & CAMPS -------------------- */}
//                 <section className="mb-20">
//                     <h2 className="text-4xl font-bold text-center mb-12">
//                         Community <span className={accentColorClass}>Camps</span> & Initiatives
//                     </h2>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {serviceData.camps.map((camp, index) => (
//                             <div key={index} className={`p-8 ${cardBgClass} rounded-xl shadow-xl hover:shadow-teal-400/40 transition duration-500 border border-gray-700`}>
//                                 <IconBox colorClass={camp.bg}>
//                                     <span className={camp.iconColor}>{camp.icon}</span>
//                                 </IconBox>
//                                 <h3 className="text-2xl font-semibold mb-3">{camp.title}</h3>
//                                 <p className="text-gray-400">{camp.description}</p>
//                                 {/* Button Placeholder for Camp details */}
//                                 <Link to="/contact" className={`mt-4 inline-block text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
//                                     Get Involved &rarr;
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 <hr className="border-t border-teal-400/30 mb-16" />
                
//                 {/* -------------------- 2. CORE PHYSIOTHERAPY FACILITIES -------------------- */}
//                 <section className="mb-20">
//                     <h2 className="text-4xl font-bold text-center mb-12">
//                         Advanced Patient <span className={accentColorClass}>Facilities</span>
//                     </h2>
                    
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//                         {serviceData.facilities.map((facility, index) => (
//                             <div key={index} className={`flex flex-col md:flex-row ${cardBgClass} rounded-lg shadow-2xl overflow-hidden border border-gray-700`}>
                                
//                                 {/* Image Placeholder (Simulated Image) */}
//                                 <div className={`w-full md:w-1/3 h-48 md:h-auto shrink-0 ${imagePlaceholderBg} flex items-center justify-center text-center p-4 border-r border-gray-700`}>
//                                     <div className="text-gray-400 text-lg font-bold">
                                        
//                                     </div>
//                                 </div>
                                
//                                 {/* Details */}
//                                 <div className="p-6 flex grow">
//                                     <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>{facility.title}</h3>
//                                     <p className="text-gray-300">{facility.details}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
                    
//                 </section>
                
//                 <hr className="border-t border-teal-400/30 mb-16" />

//                 {/* -------------------- 3. PATIENT EXPERIENCE & AMENITIES -------------------- */}
//                 <section className="mb-20">
//                     <h2 className="text-4xl font-bold text-center mb-12">
//                         Your Visit: <span className={accentColorClass}>Comfort</span> & Accessibility
//                     </h2>
                    
//                     {/* Amenity Grid */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {serviceData.amenities.map((amenity, index) => (
//                             <div key={index} className={`p-6 ${cardBgClass} rounded-lg shadow-lg border border-gray-700 hover:shadow-2xl transition duration-300`}>
//                                 <div className={`text-4xl mb-3 ${accentColorClass}`}>{amenity.icon}</div>
//                                 <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
//                                 <p className="text-gray-400 text-sm">{amenity.detail}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
                
//                 <hr className="border-t border-teal-400/30 mb-16" />

//                 {/* Final Call to Action */}
//                 <section className="text-center py-10">
//                     <h2 className="text-3xl font-bold mb-6">
//                         Ready to Experience Our <span className={accentColorClass}>Exceptional Care</span>?
//                     </h2>
//                     <p className="text-lg text-gray-300 mb-8">
//                         Book your appointment today and take the first step toward a healthier, pain-free life.
//                     </p>
//                     <Link 
//                         to="/contact" 
//                         className={`${baseButtonClasses} ${buttonSolidClass} text-lg`}
//                     >
//                         Schedule a Consultation
//                     </Link>
//                 </section>

//             </div>
//         </div>
//     );
// };

// export default Services;





















import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder Icon components
const IconBox = ({ children, colorClass, size = '3xl' }) => (
    <div className={`p-3 w-16 h-16 rounded-full flex items-center justify-center text-${size} mb-4 ${colorClass}`}>
        {children}
    </div>
);

const serviceData = {
    // 1. Community Outreach Camps - Expanded Details
    camps: [
        {
            title: "Blood Donation Drives",
            description: "A vital community service, we partner with leading blood banks to host regular donation events. This initiative emphasizes our commitment beyond rehabilitation, fostering a culture of giving and emergency preparedness in the local area. Every donation saves multiple lives.",
            icon: "🩸",
            bg: "bg-red-600/20",
            iconColor: "text-red-400"
        },
        {
            title: "BP & Sugar Screening Camp",
            description: "Offering free, proactive health checks to identify risks associated with hypertension and diabetes. Our physiotherapists provide immediate consultations on how lifestyle changes, specific exercises, and physical activity can effectively manage or prevent these chronic conditions.",
            icon: "🩺",
            bg: "bg-teal-600/20",
            iconColor: "text-teal-400"
        },
        {
            title: "Community Yoga & Wellness Camps",
            description: "Promoting mental and physical harmony, these camps introduce accessible yoga and mindfulness techniques. They are tailored for all age groups and physical abilities, focusing on flexibility, balance, posture correction, and stress reduction through movement.",
            icon: "🧘",
            bg: "bg-indigo-600/20",
            iconColor: "text-indigo-400"
        },
    ],
    
    // 2. Core Physiotherapy Facilities - Rich, detailed content
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

    // 3. Other Amenities - Enhanced titles and descriptions
    amenities: [
        { title: "Calming Waiting Sanctuary", detail: "Spacious, clean, and infused with calming aromatherapy. We prioritize minimizing wait times, but provide comfortable seating and complimentary filtered water for a peaceful experience.", icon: "🛋️", color: "bg-blue-600/20" },
        { title: "Complete Accessibility", detail: "Our clinic is fully compliant with accessibility standards, including wide ramps, elevator access, and disability-friendly restrooms, ensuring a barrier-free experience for all mobility levels.", icon: "♿", color: "bg-green-600/20" },
        { title: "Flexible & Transparent Pricing", detail: "We offer tailored treatment packages to fit various budgets. All pricing is discussed upfront, ensuring no hidden costs so you can focus purely on your recovery.", icon: "💰", color: "bg-yellow-600/20" },
        { title: "Convenient Parking", detail: "Dedicated, secure, and ample parking space is available directly at the clinic premises, saving you the stress of finding a spot before your appointment.", icon: "🅿️", color: "bg-orange-600/20" },
        { title: "Hygiene and Safety", detail: "We maintain stringent hygiene protocols. All equipment and therapy rooms are thoroughly sanitized between every patient session for your safety and confidence.", icon: "🧼", color: "bg-purple-600/20" },
        { title: "Extended Appointment Hours", detail: "To accommodate busy professional schedules, we offer flexible booking, including early morning (7 AM) and late evening (8 PM) slots.", icon: "⏰", color: "bg-pink-600/20" },
    ]
};

const Services = () => {
    // Theme Classes
    const mainBgClass = "bg-gray-900 text-white";
    const accentColorClass = "text-teal-400";
    const cardBgClass = "bg-gray-800";
    const imagePlaceholderBg = "bg-gray-700";

    // Reusable Button Styles
    const baseButtonClasses = "px-6 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";
    const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";

    return (
        <div className={`min-h-screen ${mainBgClass} py-12 px-4 sm:px-6 lg:px-8`}>
            
            <div className="container mx-auto max-w-7xl">
                
                {/* Global Heading */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl font-extrabold pb-4 text-white uppercase tracking-tighter">
                        Our <span className={accentColorClass}>Services</span> & Commitment
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
                        At Jan Seva, we deliver more than just treatment—we offer advanced facilities, meaningful community engagement, and a focus on your complete well-being.
                    </p>
                </header>

                <hr className="border-t border-teal-400/30 mb-16" />

                {/* -------------------- 1. COMMUNITY OUTREACH & CAMPS -------------------- */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Community <span className={accentColorClass}>Camps</span> & Initiatives
                    </h2>
                    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
                        Serving the community is at the heart of our mission. We regularly host vital health and wellness initiatives open to everyone.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceData.camps.map((camp, index) => (
                            <div key={index} className={`p-8 ${cardBgClass} rounded-xl shadow-xl hover:shadow-teal-400/40 transition duration-500 border border-gray-700`}>
                                <IconBox colorClass={camp.bg}>
                                    <span className={camp.iconColor}>{camp.icon}</span>
                                </IconBox>
                                <h3 className="text-2xl font-semibold mb-3">{camp.title}</h3>
                                <p className="text-gray-400">{camp.description}</p>
                                <Link to="/contact" className={`mt-4 inline-block text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
                                    Check Schedule &rarr;
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-t border-teal-400/30 mb-16" />
                
                {/* -------------------- 2. CORE PHYSIOTHERAPY FACILITIES (Enhanced Alternating Layout) -------------------- */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Advanced Clinical <span className={accentColorClass}>Facilities</span> & Technology
                    </h2>
                    
                    <div className="space-y-12">
                        {serviceData.facilities.map((facility, index) => (
                            <div 
                                key={index} 
                                // Alternating layout based on index
                                className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${cardBgClass} rounded-lg shadow-2xl overflow-hidden border border-teal-400/50`}
                            >
                                
                                {/* Image Placeholder (Left/Right) */}
                                <div className={`w-full md:w-1/2 h-64 md:h-auto shrink-0 ${imagePlaceholderBg} flex items-center justify-center p-6`}>
                                    <div className="text-gray-400 text-center">
                                        [Large, high-quality image of {facility.imagePlaceholder}]
                                    </div>
                                </div>
                                
                                {/* Details (Right/Left) */}
                                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                    <h3 className={`text-3xl font-bold mb-3 ${accentColorClass}`}>{facility.title}</h3>
                                    <hr className={`w-12 h-1 ${index % 2 === 1 ? 'bg-white' : 'bg-teal-400'} mb-4`} />
                                    <p className="text-gray-300 text-lg mb-4">{facility.details}</p>
                                    <p className="text-sm italic text-gray-400">
                                        **Our Goal:** {facility.benefit}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <hr className="border-t border-teal-400/30 mb-16" />

                {/* -------------------- 3. PATIENT EXPERIENCE & AMENITIES (Enhanced Grid) -------------------- */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Your Visit: <span className={accentColorClass}>Comfort</span> & Premium Amenities
                    </h2>
                    
                    {/* Amenity Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviceData.amenities.map((amenity, index) => (
                            <div 
                                key={index} 
                                className={`p-6 ${cardBgClass} rounded-lg shadow-xl border border-gray-700 transform hover:scale-[1.02] transition duration-300`}
                            >
                                <div className="flex items-center mb-3">
                                    <div className={`text-4xl mr-4 ${amenity.color} rounded-md p-2`}>{amenity.icon}</div>
                                    <h3 className="text-xl font-semibold">{amenity.title}</h3>
                                </div>
                                <hr className="border-t border-gray-700/50 mb-3" />
                                <p className="text-gray-400 text-base">{amenity.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <hr className="border-t border-teal-400/30 mb-16" />

                {/* Final Call to Action */}
                <section className="text-center py-10">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Experience Our <span className={accentColorClass}>Exceptional Care</span>?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                        We are ready to partner with you on your recovery journey. Contact us today to schedule your first comprehensive assessment.
                    </p>
                    <Link 
                        to="/contact" 
                        className={`${baseButtonClasses} ${buttonSolidClass} text-lg`}
                    >
                        Schedule a Consultation
                    </Link>
                </section>

            </div>
        </div>
    );
};

export default Services;