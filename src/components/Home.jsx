// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // // Placeholder imports (replace with your actual asset paths)
// // import heroBg from '../assets/images/2.JPG'; 
// // import featureIcon1 from '../assets/react.svg';
// // import featureIcon2 from '../assets/vite.svg';
// // import featureIcon3 from '../assets/vite.svg';

// // const Home = () => {
// //   // Theme Classes
// //   const mainBgClass = "bg-gray-900 text-white";
// //   const accentColorClass = "text-teal-400";
// //   const highlightColorClass = "bg-teal-600";
  
// //   // Button Classes (Outlined style matching the Navbar's aesthetic)
// //   const buttonOutlineClass = "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900";
// //   // Button Classes (Solid/Primary fill)
// //   const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";
// //   const baseButtonClasses = "px-8 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";

// //   // Data for the Features Section
// //   const features = [
// //     { 
// //       title: "Manual Therapy Experts", 
// //       description: "Hands-on techniques for immediate pain relief and mobility improvement.", 
// //       icon: featureIcon1 
// //     },
// //     { 
// //       title: "Personalized Programs", 
// //       description: "Custom recovery plans tailored specifically to your body and goals.", 
// //       icon: featureIcon2
// //     },
// //     { 
// //       title: "Modern Equipment", 
// //       description: "Utilizing the latest technology for effective and accelerated rehabilitation.", 
// //       icon: featureIcon3
// //     },
// //   ];

// //   return (
// //     <div className={mainBgClass}>

// //       {/* -------------------- 1. HERO SECTION -------------------- */}
// //       <section 
// //         className="relative h-screen flex items-center justify-center text-center p-4"
// //         style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
// //       >
// //         {/* Overlay for contrast */}
// //         <div className="absolute inset-0 bg-black opacity-70"></div>
        
// //         {/* Hero Content */}
// //         <div className="relative z-10 max-w-4xl">
// //           <p className={`text-xl sm:text-2xl font-light mb-4 ${accentColorClass} uppercase tracking-widest`}>
// //             Rediscover Movement. Live Pain-Free.
// //           </p>
// //           <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
// //             Comprehensive <span className={accentColorClass}>Physiotherapy</span> and Rehabilitation Centre
// //           </h1>
// //           <p className="text-lg sm:text-xl text-gray-300 mb-10">
// //             We are dedicated to providing expert care and personalized treatment programs to help you achieve long-term health and wellness.
// //           </p>
          
// //           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
// //             <Link 
// //               to="/contact" 
// //               className={`${baseButtonClasses} ${buttonSolidClass} shadow-teal-500/50`}
// //             >
// //               Book Appointment
// //             </Link>
// //             <Link 
// //               to="/about" 
// //               className={`${baseButtonClasses} ${buttonOutlineClass} hover:text-white`}
// //             >
// //               Learn More
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       <hr className="border-t border-gray-800" />

// //       {/* -------------------- 2. SERVICES PREVIEW SECTION -------------------- */}
// //       <section className="py-16 sm:py-24 p-4">
// //         <div className="container mx-auto max-w-6xl">
// //           <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
// //             Our Specialized <span className={accentColorClass}>Services</span>
// //           </h2>
// //           <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
// //             From injury recovery to preventative care, our expert team offers a wide range of services.
// //           </p>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {/* Service Card 1 */}
// //             <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
// //               <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Orthopedic Rehab</h3>
// //               <p className="text-gray-300 mb-4">
// //                 Targeted therapy for joint and bone injuries, including post-surgical and chronic conditions.
// //               </p>
// //               <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
// //                 View Therapies &rarr;
// //               </Link>
// //             </div>

// //             {/* Service Card 2 */}
// //             <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
// //               <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Sports Injury</h3>
// //               <p className="text-gray-300 mb-4">
// //                 Accelerated recovery and performance enhancement for athletes of all levels.
// //               </p>
// //               <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
// //                 View Rehabs &rarr;
// //               </Link>
// //             </div>

// //             {/* Service Card 3 */}
// //             <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
// //               <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Pain Management</h3>
// //               <p className="text-gray-300 mb-4">
// //                 Non-pharmacological approaches to reduce pain and improve quality of life.
// //               </p>
// //               <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
// //                 View Equipment &rarr;
// //               </Link>
// //             </div>
// //           </div>
          
// //           <div className="text-center mt-12">
// //             <Link 
// //               to="/treatments" 
// //               className={`${baseButtonClasses} ${buttonOutlineClass}`}
// //             >
// //               See All Treatments
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       <hr className="border-t border-gray-800" />

// //       {/* -------------------- 3. FEATURES / WHY US SECTION -------------------- */}
// //       <section className="py-16 sm:py-24 bg-gray-800 p-4">
// //         <div className="container mx-auto max-w-6xl">
// //           <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
// //             Why Choose <span className={accentColorClass}>Jan Seva</span>?
// //           </h2>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// //             {features.map((feature, index) => (
// //               <div key={index} className="p-6 rounded-xl border border-gray-700">
// //                 {/* Icon Placeholder */}
// //                 <div className={`mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full ${highlightColorClass} text-white text-3xl font-bold`}>
// //                   {/* In a real app, use an actual SVG icon here */}
// //                   <img src={feature.icon} alt={`${feature.title} icon`} className="w-8 h-8 filter invert" />
// //                 </div>
                
// //                 <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
// //                 <p className="text-gray-400">{feature.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <hr className="border-t border-gray-800" />

// //       {/* -------------------- 4. TESTIMONIALS & FINAL CTA SECTION (REPLACEMENT) -------------------- */}
// //       <section className="py-16 sm:py-24 p-4 text-center">
// //         <div className="container mx-auto max-w-4xl">
            
// //           {/* Testimonials Box */}
// //           <h2 className="text-3xl sm:text-4xl font-bold mb-10">
// //             Hear From Our <span className={accentColorClass}>Clients</span>
// //           </h2>

// //           {/* Testimonial Card with Image and Details */}
// //           <div className={`p-6 sm:p-8 mb-8 rounded-xl shadow-2xl bg-gray-800 border-2 border-gray-700 mx-auto max-w-lg`}>
              
// //               <div className="flex items-center space-x-4 mb-4">
// //                   {/* Image Placeholder (Rectangular) */}
// //                   <div className="flex shrink-0">
// //                       <img 
// //                           src={featureIcon2} // Reusing a placeholder icon for demonstration
// //                           alt="Client Photo" 
// //                           // Rectangular image styling
// //                           className="w-20 h-20 object-cover rounded-md border-2 border-teal-400" 
// //                       />
// //                   </div>
// //                   {/* Client Details */}
// //                   <div className="text-left">
// //                       <p className={`font-bold text-xl ${accentColorClass}`}>Rakesh Sharma</p>
// //                       <p className="text-sm text-gray-400">Long-term Patient, Back Rehab</p>
// //                   </div>
// //               </div>

// //               {/* Quote */}
// //               <blockquote className="text-left border-l-4 border-teal-400 pl-4 py-2 mt-4">
// //                   <p className="italic text-gray-200 text-base">
// //                     "After years of chronic back pain, the team at Jan Seva gave me my life back. The attention to detail and personalized care was unmatched."
// //                   </p>
// //               </blockquote>
// //           </div>
          
// //           {/* Button to Testimonials Page */}
// //           <Link 
// //             to="/testimonials" 
// //             className={`${baseButtonClasses} ${buttonOutlineClass} text-lg mb-16`}
// //           >
// //             View All Testimonials
// //           </Link>
          
// //           <hr className="w-24 h-0.5 bg-gray-700 mx-auto mb-16" />

// //           {/* Final Call to Action */}
// //           <h2 className="text-3xl font-bold mb-6">
// //             Ready to Start Your <span className={accentColorClass}>Recovery</span> Journey?
// //           </h2>
// //           <Link 
// //             to="/contact" 
// //             className={`${baseButtonClasses} ${buttonSolidClass} text-lg`}
// //           >
// //             Contact Us Today
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;

































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// // Placeholder imports (replace with your actual asset paths)
// import heroBg from '../assets/images/2.JPG'; 
// import featureIcon1 from '../assets/react.svg';
// import featureIcon2 from '../assets/vite.svg';
// import featureIcon3 from '../assets/vite.svg';


// // 👇 Data for the Carousel (Now 6 testimonials)
// const allTestimonials = [
//     {
//         id: 1,
//         quote: "After years of chronic back pain, the team at Jan Seva gave me my life back. The attention to detail and personalized care was unmatched.",
//         name: "Rakesh Sharma",
//         details: "Long-term Patient, Back Rehab",
//         image: featureIcon2 // Placeholder image
//     },
//     {
//         id: 2,
//         quote: "The sports injury rehabilitation program here is fantastic. I was back on the field faster than I expected, feeling stronger and more confident.",
//         name: "Priya Verma",
//         details: "Athlete, Knee Ligament Repair",
//         image: featureIcon3 // Placeholder image
//     },
//     {
//         id: 3,
//         quote: "The therapists are highly knowledgeable and genuinely care about your recovery. This clinic provides the best physiotherapy I have ever experienced.",
//         name: "Ajay Singh",
//         details: "Elderly Patient, Mobility Improvement",
//         image: featureIcon1 // Placeholder image
//     },
//     {
//         id: 4,
//         quote: "My chronic shoulder pain has completely subsided thanks to their manual therapy sessions. Highly recommended for any joint issues!",
//         name: "Sunita Devi",
//         details: "Office Worker, Shoulder Pain",
//         image: featureIcon2 // Placeholder image
//     },
//     {
//         id: 5,
//         quote: "The post-operative care for my ankle surgery was exceptional. I felt supported every step of the way and regained full function quickly.",
//         name: "Vikram Patel",
//         details: "Post-Op Patient, Ankle Surgery",
//         image: featureIcon3 // Placeholder image
//     },
//     {
//         id: 6,
//         quote: "Excellent advice on ergonomics and posture. My persistent neck stiffness is gone. True professionals who focus on prevention.",
//         name: "Geeta Nair",
//         details: "IT Professional, Neck Pain",
//         image: featureIcon1 // Placeholder image
//     },
// ];

// const Home = () => {
//     // State to manage the carousel index
//     const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

//     // Theme Classes (from previous steps)
//     const mainBgClass = "bg-gray-900 text-white";
//     const accentColorClass = "text-teal-400";
//     const highlightColorClass = "bg-teal-600";
//     const buttonOutlineClass = "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900";
//     const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";
//     const baseButtonClasses = "px-8 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";

//     // Carousel Navigation Functions
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

//     // Get the currently active testimonial data
//     const activeTestimonial = allTestimonials[currentTestimonialIndex];


//     return (
//         <div className={mainBgClass}>

//             {/* -------------------- 1. HERO SECTION -------------------- */}
//             <section 
//                 className="relative h-screen flex items-center justify-center text-center p-4"
//                 style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//             >
//                 {/* Overlay for contrast */}
//                 <div className="absolute inset-0 bg-black opacity-70"></div>
                
//                 {/* Hero Content */}
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
//                             className={`${baseButtonClasses} ${buttonSolidClass} shadow-teal-500/50`}
//                         >
//                             Book Appointment
//                         </Link>
//                         <Link 
//                             to="/about" 
//                             className={`${baseButtonClasses} ${buttonOutlineClass} hover:text-white`}
//                         >
//                             Learn More
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             <hr className="border-t border-gray-800" />

//             {/* -------------------- 2. SERVICES PREVIEW SECTION -------------------- */}
//             <section className="py-16 sm:py-24 p-4">
//                 <div className="container mx-auto max-w-6xl">
//                     <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
//                         Our Specialized <span className={accentColorClass}>Services</span>
//                     </h2>
//                     <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
//                         From injury recovery to preventative care, our expert team offers a wide range of services.
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {/* Service Card 1 */}
//                         <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
//                             <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Orthopedic Rehab</h3>
//                             <p className="text-gray-300 mb-4">
//                                 Targeted therapy for joint and bone injuries, including post-surgical and chronic conditions.
//                             </p>
//                             <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
//                                 View Therapies &rarr;
//                             </Link>
//                         </div>

//                         {/* Service Card 2 */}
//                         <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
//                             <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Sports Injury</h3>
//                             <p className="text-gray-300 mb-4">
//                                 Accelerated recovery and performance enhancement for athletes of all levels.
//                             </p>
//                             <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
//                                 View Rehabs &rarr;
//                             </Link>
//                         </div>

//                         {/* Service Card 3 */}
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
//                         <Link 
//                             to="/treatments" 
//                             className={`${baseButtonClasses} ${buttonOutlineClass}`}
//                         >
//                             See All Treatments
//                         </Link>
//                     </div>
//                 </div>
//             </section>

//             <hr className="border-t border-gray-800" />

//             {/* -------------------- 3. FEATURES / WHY US SECTION -------------------- */}
//             <section className="py-16 sm:py-24 bg-gray-800 p-4">
//                 <div className="container mx-auto max-w-6xl">
//                     <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
//                         Why Choose <span className={accentColorClass}>Jan Seva</span>?
//                     </h2>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//                         {features.map((feature, index) => (
//                             <div key={index} className="p-6 rounded-xl border border-gray-700">
//                                 {/* Icon Placeholder */}
//                                 <div className={`mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full ${highlightColorClass} text-white text-3xl font-bold`}>
//                                     {/* In a real app, use an actual SVG icon here */}
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

//             {/* -------------------- 4. TESTIMONIALS & FINAL CTA SECTION (UPDATED FOR CAROUSEL) -------------------- */}
//             <section className="py-16 sm:py-24 p-4 text-center">
//                 <div className="container mx-auto max-w-4xl">
                    
//                     {/* Testimonials Carousel */}
//                     <h2 className="text-3xl sm:text-4xl font-bold mb-10">
//                         Hear From Our <span className={accentColorClass}>Clients</span>
//                     </h2>

//                     {/* Carousel Container */}
//                     <div className="relative mx-auto max-w-lg">
                        
//                         {/* Testimonial Card */}
//                         <div key={activeTestimonial.id} className={`p-6 sm:p-8 mb-4 rounded-xl shadow-2xl bg-gray-800 border-2 border-gray-700 text-center transition-opacity duration-500 ease-in-out`}>
                            
//                             {/* Client Details and Image */}
//                             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
//                                 {/* Image Placeholder (Rectangular) */}
//                                 <div className="flex shrink-0">
//                                     <img 
//                                         src={activeTestimonial.image} 
//                                         alt={`${activeTestimonial.name} Photo`} 
//                                         className="w-20 h-20 object-cover rounded-md border-2 border-teal-400" 
//                                     />
//                                 </div>
//                                 {/* Client Details */}
//                                 <div className="text-center sm:text-left">
//                                     <p className={`font-bold text-xl ${accentColorClass}`}>{activeTestimonial.name}</p>
//                                     <p className="text-sm text-gray-400">{activeTestimonial.details}</p>
//                                 </div>
//                             </div>

//                             {/* Quote */}
//                             <blockquote className="border-t border-gray-700 pt-4">
//                                 <p className="italic text-gray-200 text-base">
//                                     "{activeTestimonial.quote}"
//                                 </p>
//                             </blockquote>
//                         </div>
                        
//                         {/* Carousel Controls (Previous/Next Buttons) */}
//                         <div className="flex justify-center space-x-6 mt-4">
//                             <button 
//                                 onClick={prevTestimonial}
//                                 className={`text-xl ${accentColorClass} hover:text-teal-300 transition-colors`}
//                                 aria-label="Previous testimonial"
//                             >
//                                 &larr; Previous
//                             </button>
//                             {/* Indicator Dots (Optional: add if you want dots) */}
//                             {allTestimonials.map((_, index) => (
//                                 <span 
//                                     key={index}
//                                     className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
//                                         index === currentTestimonialIndex ? 'bg-teal-400' : 'bg-gray-600 hover:bg-gray-500'
//                                     }`}
//                                     onClick={() => setCurrentTestimonialIndex(index)}
//                                 ></span>
//                             ))}
//                             <button 
//                                 onClick={nextTestimonial}
//                                 className={`text-xl ${accentColorClass} hover:text-teal-300 transition-colors`}
//                                 aria-label="Next testimonial"
//                             >
//                                 Next &rarr;
//                             </button>
//                         </div>

//                     </div>
                    
//                     {/* Button to Testimonials Page */}
//                     <Link 
//                         to="/testimonials" 
//                         className={`${baseButtonClasses} ${buttonOutlineClass} text-lg mt-12 mb-16`}
//                     >
//                         View All Testimonials
//                     </Link>
                    
//                     <hr className="w-24 h-0.5 bg-gray-700 mx-auto mb-16" />

//                     {/* Final Call to Action */}
//                     <h2 className="text-3xl font-bold mb-6">
//                         Ready to Start Your <span className={accentColorClass}>Recovery</span> Journey?
//                     </h2>
//                     <Link 
//                         to="/contact" 
//                         className={`${baseButtonClasses} ${buttonSolidClass} text-lg`}
//                     >
//                         Contact Us Today
//                     </Link>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;
















import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Placeholder imports (replace with your actual asset paths)
import heroBg from '../assets/images/2.JPG'; 
import featureIcon1 from '../assets/react.svg';
import featureIcon2 from '../assets/vite.svg';
import featureIcon3 from '../assets/vite.svg';


// 👇 Data for the Carousel (6 testimonials)
const allTestimonials = [
    {
        id: 1,
        quote: "After years of chronic back pain, the team at Jan Seva gave me my life back. The attention to detail and personalized care was unmatched.",
        name: "Rakesh Sharma",
        details: "Long-term Patient, Back Rehab",
        image: featureIcon2 // Placeholder image
    },
    {
        id: 2,
        quote: "The sports injury rehabilitation program here is fantastic. I was back on the field faster than I expected, feeling stronger and more confident.",
        name: "Priya Verma",
        details: "Athlete, Knee Ligament Repair",
        image: featureIcon3 // Placeholder image
    },
    {
        id: 3,
        quote: "The therapists are highly knowledgeable and genuinely care about your recovery. This clinic provides the best physiotherapy I have ever experienced.",
        name: "Ajay Singh",
        details: "Elderly Patient, Mobility Improvement",
        image: featureIcon1 // Placeholder image
    },
    {
        id: 4,
        quote: "My chronic shoulder pain has completely subsided thanks to their manual therapy sessions. Highly recommended for any joint issues!",
        name: "Sunita Devi",
        details: "Office Worker, Shoulder Pain",
        image: featureIcon2 // Placeholder image
    },
    {
        id: 5,
        quote: "The post-operative care for my ankle surgery was exceptional. I felt supported every step of the way and regained full function quickly.",
        name: "Vikram Patel",
        details: "Post-Op Patient, Ankle Surgery",
        image: featureIcon3 // Placeholder image
    },
    {
        id: 6,
        quote: "Excellent advice on ergonomics and posture. My persistent neck stiffness is gone. True professionals who focus on prevention.",
        name: "Geeta Nair",
        details: "IT Professional, Neck Pain",
        image: featureIcon1 // Placeholder image
    },
];

// 👇 MISSING DATA ADDED HERE TO FIX THE ERROR
// Data for the Features Section
const features = [
    { 
      title: "Manual Therapy Experts", 
      description: "Hands-on techniques for immediate pain relief and mobility improvement.", 
      icon: featureIcon1 
    },
    { 
      title: "Personalized Programs", 
      description: "Custom recovery plans tailored specifically to your body and goals.", 
      icon: featureIcon2
    },
    { 
      title: "Modern Equipment", 
      description: "Utilizing the latest technology for effective and accelerated rehabilitation.", 
      icon: featureIcon3
    },
];
// 👆 END OF FIX


const Home = () => {
    // State to manage the carousel index
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    // Theme Classes (from previous steps)
    const mainBgClass = "bg-gray-900 text-white";
    const accentColorClass = "text-teal-400";
    const highlightColorClass = "bg-teal-600";
    const buttonOutlineClass = "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900";
    const buttonSolidClass = "bg-teal-600 text-white hover:bg-teal-700";
    const baseButtonClasses = "px-8 py-3 uppercase font-semibold tracking-wider transition duration-300 rounded-lg shadow-lg";

    // Carousel Navigation Functions
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

    // Get the currently active testimonial data
    const activeTestimonial = allTestimonials[currentTestimonialIndex];


    return (
        <div className={mainBgClass}>

            {/* -------------------- 1. HERO SECTION -------------------- */}
            <section 
                className="relative h-screen flex items-center justify-center text-center p-4"
                style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                
                {/* Hero Content */}
                <div className="relative z-10 max-w-4xl">
                    <p className={`text-xl sm:text-2xl font-light mb-4 ${accentColorClass} uppercase tracking-widest`}>
                        Rediscover Movement. Live Pain-Free.
                    </p>
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
                        Comprehensive <span className={accentColorClass}>Physiotherapy</span> and Rehabilitation Centre
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10">
                        We are dedicated to providing expert care and personalized treatment programs to help you achieve long-term health and wellness.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link 
                            to="/contact" 
                            className={`${baseButtonClasses} ${buttonSolidClass} shadow-teal-500/50`}
                        >
                            Book Appointment
                        </Link>
                        <Link 
                            to="/about" 
                            className={`${baseButtonClasses} ${buttonOutlineClass} hover:text-white`}
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            <hr className="border-t border-gray-800" />

            {/* -------------------- 2. SERVICES PREVIEW SECTION -------------------- */}
            <section className="py-16 sm:py-24 p-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                        Our Specialized <span className={accentColorClass}>Services</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        From injury recovery to preventative care, our expert team offers a wide range of services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Orthopedic Rehab</h3>
                            <p className="text-gray-300 mb-4">
                                Targeted therapy for joint and bone injuries, including post-surgical and chronic conditions.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
                                View Therapies &rarr;
                            </Link>
                        </div>

                        {/* Service Card 2 */}
                        <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Sports Injury</h3>
                            <p className="text-gray-300 mb-4">
                                Accelerated recovery and performance enhancement for athletes of all levels.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
                                View Rehabs &rarr;
                            </Link>
                        </div>

                        {/* Service Card 3 */}
                        <div className={`p-6 ${mainBgClass} border border-gray-700 rounded-xl shadow-xl hover:shadow-teal-400/30 transition duration-300`}>
                            <h3 className={`text-2xl font-semibold mb-3 ${accentColorClass}`}>Pain Management</h3>
                            <p className="text-gray-300 mb-4">
                                Non-pharmacological approaches to reduce pain and improve quality of life.
                            </p>
                            <Link to="/treatments" className={`text-sm font-medium ${accentColorClass} hover:text-teal-300`}>
                                View Equipment &rarr;
                            </Link>
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link 
                            to="/treatments" 
                            className={`${baseButtonClasses} ${buttonOutlineClass}`}
                        >
                            See All Treatments
                        </Link>
                    </div>
                </div>
            </section>

            <hr className="border-t border-gray-800" />

            {/* -------------------- 3. FEATURES / WHY US SECTION -------------------- */}
            <section className="py-16 sm:py-24 bg-gray-800 p-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                        Why Choose <span className={accentColorClass}>Jan Seva</span>?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 rounded-xl border border-gray-700">
                                {/* Icon Placeholder */}
                                <div className={`mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full ${highlightColorClass} text-white text-3xl font-bold`}>
                                    {/* In a real app, use an actual SVG icon here */}
                                    <img src={feature.icon} alt={`${feature.title} icon`} className="w-8 h-8 filter invert" />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <hr className="border-t border-gray-800" />

            {/* -------------------- 4. TESTIMONIALS & FINAL CTA SECTION -------------------- */}
            <section className="py-16 sm:py-24 p-4 text-center">
                <div className="container mx-auto max-w-4xl">
                    
                    {/* Testimonials Carousel */}
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                        Hear From Our <span className={accentColorClass}>Clients</span>
                    </h2>

                    {/* Carousel Container */}
                    <div className="relative mx-auto max-w-lg">
                        
                        {/* Testimonial Card */}
                        <div key={activeTestimonial.id} className={`p-6 sm:p-8 mb-4 rounded-xl shadow-2xl bg-gray-800 border-2 border-gray-700 text-center transition-opacity duration-500 ease-in-out`}>
                            
                            {/* Client Details and Image */}
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                                {/* Image Placeholder (Rectangular) */}
                                <div className="flex-shrink-0">
                                    <img 
                                        src={activeTestimonial.image} 
                                        alt={`${activeTestimonial.name} Photo`} 
                                        className="w-20 h-20 object-cover rounded-md border-2 border-teal-400" 
                                    />
                                </div>
                                {/* Client Details */}
                                <div className="text-center sm:text-left">
                                    <p className={`font-bold text-xl ${accentColorClass}`}>{activeTestimonial.name}</p>
                                    <p className="text-sm text-gray-400">{activeTestimonial.details}</p>
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="border-t border-gray-700 pt-4">
                                <p className="italic text-gray-200 text-base">
                                    "{activeTestimonial.quote}"
                                </p>
                            </blockquote>
                        </div>
                        
                        {/* Carousel Controls (Previous/Next Buttons) */}
                        <div className="flex justify-center space-x-6 mt-4">
                            <button 
                                onClick={prevTestimonial}
                                className={`text-xl ${accentColorClass} hover:text-teal-300 transition-colors`}
                                aria-label="Previous testimonial"
                            >
                                &larr; Previous
                            </button>
                            {/* Indicator Dots */}
                            {allTestimonials.map((_, index) => (
                                <span 
                                    key={index}
                                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                                        index === currentTestimonialIndex ? 'bg-teal-400' : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                                    onClick={() => setCurrentTestimonialIndex(index)}
                                ></span>
                            ))}
                            <button 
                                onClick={nextTestimonial}
                                className={`text-xl ${accentColorClass} hover:text-teal-300 transition-colors`}
                                aria-label="Next testimonial"
                            >
                                Next &rarr;
                            </button>
                        </div>

                    </div>
                    
                    {/* Button to Testimonials Page */}
                    <Link 
                        to="/testimonials" 
                        className={`${baseButtonClasses} ${buttonOutlineClass} text-lg mt-12 mb-16`}
                    >
                        View All Testimonials
                    </Link>
                    
                    <hr className="w-24 h-0.5 bg-gray-700 mx-auto mb-16" />

                    {/* Final Call to Action */}
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Start Your <span className={accentColorClass}>Recovery</span> Journey?
                    </h2>
                    <Link 
                        to="/contact" 
                        className={`${baseButtonClasses} ${buttonSolidClass} text-lg`}
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;