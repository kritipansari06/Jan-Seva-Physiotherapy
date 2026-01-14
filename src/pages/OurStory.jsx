// import React, { useState, useEffect } from 'react';
// import { Heart, Lightbulb, Users, Target, Zap } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// const OurStory = () => {
//   const { isDarkMode } = useTheme();
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const accentColor = isDarkMode ? 'text-teal-400' : 'text-teal-600';
//   const accentBg = isDarkMode ? 'bg-teal-900/20' : 'bg-teal-50';
//   const cardBg = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
//   const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-700';
//   const textTertiary = isDarkMode ? 'text-gray-400' : 'text-gray-600';
//   const sectionBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';

//   const milestones = [
//     {
//       year: 'Apr, 2023',
//       title: 'The Beginning',
//       story: 'Dr. R.P. Pansari, a visionary with a heart for community service, established the Jan Seva Trust with a simple mission: to make quality healthcare accessible to everyone, regardless of their financial status.',
//       icon: '💡',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       year: 'Sep, 2023',
//       title: 'Physiotherapy Wing Launch',
//       story: 'Recognizing the critical need for rehabilitation services in losal, R.P.Pansari Jan Seva Trust opened its physiotherapy center with advanced equipment and a dedicated therapist and a dedicated team.',
//       icon: '🏥',
//       color: 'from-cyan-500 to-teal-500'
//     },
//     {
//       year: '2024',
//       title: 'Expansion & Community Reach',
//       story: 'As patient success stories grew, we expanded our facility, introduced advanced equipment, and started conducting regular health camps in underserved communities.',
//       icon: '🚀',
//       color: 'from-teal-500 to-green-500'
//     },
//     {
//       year: '2025',
//       title: 'Digital Transformation',
//       story: 'We adopted digital systems to manage patient medical records and visits, began sharing patient feedback on social media. We also launched our website to make our services more accessible and connected.',
//       icon: '💻',
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       year: '2026',
//       title: 'Vision for Tomorrow',
//       story: 'We aim to expand our wings to serve a wider community, providing specialized care for critical patients from our town and nearby area by advanced technologies and modern therapies.',
//       icon: '🌟',
//       color: 'from-emerald-500 to-teal-500'
//     },
//     // {
//     //   year: '2024',
//     //   title: 'Vision for Tomorrow',
//     //   story: 'Today, we serve over 2,000+ active patients annually, conduct 50+ health camps, and continue expanding our mission to make rehabilitation accessible to all.',
//     //   icon: '🌟',
//     //   color: 'from-teal-500 to-blue-500'
//     // }
//   ];

//   const founders = [
//     {
//       name: 'Dr. R.P. Pansari',
//       title: 'Founder & Vision Bearer',
//       bio: 'A compassionate healthcare professional and social entrepreneur who believed that quality healthcare is a right, not a privilege.',
//       vision: 'Dedicated to serving communities and building institutions that outlive personal ambitions.',
//       image: '/public/images/IMG_20250711_153208.jpg'
//     }
//   ];

//   const inspirations = [
//     {
//       icon: '❤️',
//       title: 'Compassion',
//       description: 'Witnessing the suffering of people who couldn\'t afford quality healthcare sparked the idea to create an accessible solution.'
//     },
//     {
//       icon: '🤝',
//       title: 'Community Service',
//       description: 'The age-old Sanskrit principle "सेवा परमो धर्म:" (Service is the highest duty) became the guiding philosophy.'
//     },
//     {
//       icon: '🎯',
//       title: 'Belief in Potential',
//       description: 'Understanding that proper rehabilitation could transform lives and restore independence to countless individuals.'
//     },
//     {
//       icon: '🌍',
//       title: 'Social Impact',
//       description: 'A desire to create positive change in society through healthcare accessibility and community wellness programs.'
//     }
//   ];

//   const challenges = [
//     {
//       challenge: 'Awareness Gap',
//       overcome: 'In a rural area with limited knowledge of physiotherapy, we spread awareness through community camps, print ads, personal interactions, patient and attendant counseling, sharing feedback, and active social media engagement.'
//     },
//     {
//       challenge: 'Geographic Barriers',
//       overcome: 'Initially, only town residents accessed our services, while nearby rural areas remained unaware. Through awareness efforts and outreach, people from surrounding rural communities now visit us regularly for treatment.'
//     },
//     {
//       challenge: 'Limited Resources',
//       overcome: 'We secured a prime, centrally accessible location with strong infrastructure and built a strong team of skilled professionals - laying the foundation for reliable, quality patient care.'
//     },
//     {
//       challenge: 'Training & Development',
//       overcome: 'Recruited new staff and trained them,, introduced advanced therapies and modern machinery, and adopted the latest medical approaches to enhance patient care.'
//     }
//   ];

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//       {/* Hero Section */}
//       <div className={`relative ${isDarkMode ? 'bg-linear-to-br from-teal-900 to-teal-800' : 'bg-linear-to-br from-teal-600 to-teal-700'} text-white overflow-hidden`}>
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//             backgroundSize: '50px 50px',
//           }} />
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
//           <div className="text-6xl mb-6">📖</div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             Our Story
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
//             From a simple vision to a thriving community healthcare center — The journey of Jan Seva Physiotherapy
//           </p>
//         </div>
//       </div>

//       {/* The Why Section */}
//       <section className={`py-20 ${sectionBg}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Why It Started</h2>
//           <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className={`space-y-6 leading-relaxed ${textSecondary}`}>
//               <p className="text-md">
//                 Our journey began with a personal experience of our Chairman, Mr. R. P. Pansari. During a difficult phase, he underwent physiotherapy in Kolkata, where quality rehabilitation was available—but costly.              </p>
//               <p className="text-md">
//                 On returning to his hometown, he noticed a painful gap: the absence of proper physiotherapy facilities and the inability of many people to afford expensive treatments. Patients were left with limited options and prolonged suffering.              </p>
//               <p className="text-md">
//                 Moved by this reality and guided by the principle “सेवा परमो धर्म:” (Service is the highest duty), Mr. R. P. Pansari founded Jan Seva Physiotherapy with a clear mission—to provide high-quality, affordable, and compassionate care for all.              </p>
//               <p className="text-md">
//                 What started as a purpose-driven initiative has today become a trusted center, dedicated to restoring movement, relieving pain, and serving the community. </p>
//             </div>
            
//             <div className={`${accentBg} p-8 rounded-2xl shadow-2xl border-2 ${isDarkMode ? 'border-teal-600' : 'border-teal-200'}`}>
//               <div className="text-6xl mb-6 text-center">🎯</div>
//               <h3 className={`text-2xl font-bold mb-4 text-center ${accentColor}`}>The Catalyst</h3>
//               <p className={`text-center ${textSecondary}`}>
//                 "Every person deserves the chance to recover, move freely, and live without pain. That belief sparked a revolution in community healthcare."
//               </p>
//               <p className={`text-center mt-4 font-semibold ${accentColor}`}>— Dr. R.P. Pansari</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className={`py-20 ${sectionBg}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Our Journey</h2>
//           <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
//           <div className="space-y-12">
//             {milestones.map((milestone, idx) => (
//               <div key={idx} className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-center`}>
//                 <div className="flex-1" />
//                 <div className="w-12 h-12 flex shrink-0">
//                   <div className={`w-full h-full rounded-full flex items-center justify-center text-2xl bg-linear-to-br ${milestone.color} shadow-lg`}>
//                     {milestone.icon}
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <div className={`${cardBg} p-8 rounded-2xl border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
//                     <div className={`text-4xl font-bold ${accentColor} mb-2`}>{milestone.year}</div>
//                     <h4 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{milestone.title}</h4>
//                     <p className={textSecondary}>{milestone.story}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Challenges Overcome Section */}
//       <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Challenges We Overcame</h2>
//           <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {challenges.map((item, idx) => (
//               <div key={idx} className={`${cardBg} p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300`}>
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className="text-3xl">🏔️</div>
//                   <h3 className={`text-xl font-bold ${accentColor}`}>{item.challenge}</h3>
//                 </div>
//                 <p className={`${textTertiary} leading-relaxed`}>
//                   <strong>How we overcame it:</strong> {item.overcome}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Founder Section */}
//       {/* <section className={`py-20 ${sectionBg}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>The Visionary Behind It All</h2>
//           <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
//           {founders.map((founder, idx) => (
//             <div key={idx} className={`max-w-3xl mx-auto ${cardBg} rounded-2xl shadow-2xl overflow-hidden border-2 hover:shadow-3xl transition-all duration-300 p-8 md:p-12`}>
//               <div className="flex flex-col md:flex-row items-center gap-8">
//                 <div className="text-8xl md:text-9xl">{founder.image}</div>
//                 <div className="flex-1">
//                   <h3 className={`text-3xl font-bold ${accentColor} mb-2`}>{founder.name}</h3>
//                   <p className={`text-xl font-semibold ${textSecondary} mb-4`}>{founder.title}</p>
//                   <p className={`${textSecondary} leading-relaxed mb-4`}>{founder.bio}</p>
//                   <div className={`${accentBg} p-4 rounded-lg border-l-4 border-teal-600`}>
//                     <p className={`italic ${textSecondary}`}>"{founder.vision}"</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       <section className={`py-20 ${sectionBg}`}>
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>The Visionary Behind It All</h2>
//     <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
    
//     {founders.map((founder, idx) => (
//       <div key={idx} className={`max-w-4xl mx-auto ${cardBg} rounded-2xl shadow-2xl overflow-hidden border-2 hover:shadow-3xl transition-all duration-300 p-8 md:p-12`}>
//         <div className="flex flex-col md:flex-row items-center gap-12">
          
//           {/* IMAGE REPLACEMENT START */}
//           <div className="flex shrink-0">
//             <div className="relative">
//               {/* Decorative background circle */}
//               <div className={`absolute -inset-2 ${isDarkMode ? 'bg-teal-500/20' : 'bg-teal-100'} rounded-full blur-xl opacity-50`}></div>
              
//               <img 
//                 src={founder.image} 
//                 alt={founder.name} 
//                 className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-700 transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//           </div>
//           {/* IMAGE REPLACEMENT END */}

//           <div className="flex-1 text-center md:text-left">
//             <h3 className={`text-3xl font-bold ${accentColor} mb-2`}>{founder.name}</h3>
//             <p className={`text-xl font-semibold ${textSecondary} mb-4`}>{founder.title}</p>
//             <p className={`${textSecondary} text-lg leading-relaxed mb-6`}>{founder.bio}</p>
//             <div className={`${accentBg} p-6 rounded-xl border-l-4 border-teal-600 shadow-sm`}>
//               <p className={`italic ${textSecondary} text-lg`}>"{founder.vision}"</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

//       {/* Values Born From Story */}
//       <section className={`py-20 ${isDarkMode ? 'bg-linear-to-r from-teal-900 to-teal-800' : 'bg-linear-to-r from-teal-600 to-teal-700'} text-white`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-center mb-4">Values Born From Our Story</h2>
//           <p className="text-center text-lg opacity-90 max-w-2xl mx-auto mb-12">
//             Every challenge, every success, every patient story has shaped who we are today.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {inspirations.map((inspiration, idx) => (
//               <div key={idx} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${cardBg} border-2`}>
//                 <div className="text-5xl mb-4">{inspiration.icon}</div>
//                 <h3 className={`text-xl font-bold mb-3 ${accentColor}`}>{inspiration.title}</h3>
//                 <p className={textTertiary}>{inspiration.description}</p>
//               </div>
//             ))}
//           </div>
          
//           <div className="grid md:grid-cols-5 gap-6">
//             {[
//               { icon: Heart, label: 'Compassion', desc: 'Heart-driven care' },
//               { icon: Users, label: 'Community', desc: 'Serving together' },
//               { icon: Target, label: 'Excellence', desc: 'Quality first' },
//               { icon: Lightbulb, label: 'Innovation', desc: 'Always improving' },
//               { icon: Zap, label: 'Impact', desc: 'Changing lives' }
//             ].map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div key={idx} className="text-center">
//                   <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-3 border border-white/20">
//                     <Icon className="w-8 h-8 mx-auto" />
//                   </div>
//                   <h4 className="font-bold text-lg">{item.label}</h4>
//                   <p className="text-sm opacity-80">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Where We're Headed */}
//       <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className={`mt-12 ${accentBg} p-8 rounded-2xl border-2 max-w-2xl mx-auto`}>
//             <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//               Our story isn't over—it's just beginning. Every patient we help, every community we serve, adds a new chapter to our legacy of healing and hope.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className={`py-20 ${isDarkMode ? 'bg-linear-to-br from-teal-900 to-teal-800' : 'bg-linear-to-br from-teal-600 to-teal-700'} text-white text-center`}>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
//           <p className="text-xl mb-8 opacity-90">
//             Your recovery journey could be the next inspiring chapter in our community's healing narrative.
//           </p>
//           <a href="/contact" className="inline-block bg-white text-teal-600 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 hover:bg-gray-100">
//             Start Your Journey With Us
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurStory;














import React, { useState, useEffect } from 'react';
import { Heart, Lightbulb, Users, Target, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const OurStory = () => {
  const { isDarkMode } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const accentColor = isDarkMode ? 'text-teal-400' : 'text-teal-600';
  const accentBg = isDarkMode ? 'bg-teal-900/20' : 'bg-teal-50';
  const cardBg = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const textTertiary = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const sectionBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';

  const milestones = [
    {
      year: 'Apr, 2023',
      title: 'The Beginning',
      story: 'Dr. R.P. Pansari, a visionary with a heart for community service, established the Jan Seva Trust with a simple mission: to make quality healthcare accessible to everyone, regardless of their financial status.',
      icon: '💡',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: 'Sep, 2023',
      title: 'Physiotherapy Wing Launch',
      story: 'Recognizing the critical need for rehabilitation services in losal, R.P.Pansari Jan Seva Trust opened its physiotherapy center with advanced equipment and a dedicated therapist and a dedicated team.',
      icon: '🏥',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      year: '2024',
      title: 'Expansion & Community Reach',
      story: 'As patient success stories grew, we expanded our facility, introduced advanced equipment, and started conducting regular health camps in underserved communities.',
      icon: '🚀',
      color: 'from-teal-500 to-green-500'
    },
    {
      year: '2025',
      title: 'Digital Transformation',
      story: 'We adopted digital systems to manage patient medical records and visits, began sharing patient feedback on social media. We also launched our website to make our services more accessible and connected.',
      icon: '💻',
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2026',
      title: 'Vision for Tomorrow',
      story: 'We aspire to become a trusted rehabilitation center by expanding our services and providing advanced, compassionate care to patients from our town and nearby areas—making physiotherapy a natural choice for recovery by advanced technologies and modern therapies.',
      icon: '🌟',
      color: 'from-emerald-500 to-teal-500'
    },
  ];

  // const founders = [
  //   {
  //     name: 'Mr. R.P. Pansari',
  //     title: 'Founder & Vision Bearer',
  //     bio: 'Shri R. P. Pansari Ji is not just a name, but a feeling of service, trust, and compassion. His journey began in Losal, where he received his early education and values. A CA Gold Medalist, he devoted nearly 50 years to the Birla Group, earning respect through honesty, dedication, and leadership.Yet, beyond all achievements, his heart always beat for society. Shri R. P. Pansari Ji has selflessly dedicated his life to health, social, spiritual, and educational service, quietly transforming lives and uplifting communities. Wherever there was a need, his name was present through meaningful action and support. Rooted deeply in love for his hometown, Shri R. P. Pansari Ji brought this spirit of service back to Losal by establishing Jan Seva Physio Center—a place born from compassion, meant to heal, and guided by the belief that service to humanity is the highest purpose. Shri R. P. Pansari Ji’s name continues to inspire, heal, and guide generations through the power of selfless service.',
  //     vision: 'Dedicated to serving communities and building institutions that outlive personal ambitions.',
  //     image: '/public/images/IMG_20250711_153208.jpg'
  //   }
  // ];


  const founders = [
  {
    name: 'Mr. R.P. Pansari',
    title: 'Founder & Vision Bearer',
    bioPoints: [
      {
        title: 'More Than a Name',
        description: 'Shri R. P. Pansari Ji stands for service, trust, and compassion. Raised in Losal, he imbibed values of integrity, humility, and responsibility early in life, which shaped his lifelong commitment to society.'
      },
      {
        title: 'Professional Excellence',
        description: 'A CA Gold Medalist, he dedicated nearly five decades to the Birla Group. His career was marked by honesty, discipline, and ethical leadership, earning him deep respect and setting high professional standards.'
      },
      {
        title: 'Life of Service',
        description: 'Beyond professional success, his heart always remained with the people. He devoted himself to healthcare, social welfare, spiritual growth, and education—working selflessly and often quietly to uplift lives.'
      },
      {
        title: 'Service in Action',
        description: 'Wherever there was need, his presence translated into meaningful action. Through healthcare initiatives, social programs, and educational support, he consistently turned compassion into impact.'
      },
      {
        title: 'Giving Back to Losal',
        description: 'With deep love for his hometown, he established Jan Seva Physiotherapy in Losal—a center founded on care, healing, and the belief that “सेवा ही सर्वस्व”.'
      },
      {
        title: 'Enduring Legacy',
        description: 'His life continues to inspire, reminding us that true success is measured not by position or wealth, but by the lives touched and communities strengthened.'
      }
    ],
    vision: 'सेवा परमो धर्म:। सेवा ही सर्वस्व ।',
    image: '/public/images/IMG_20250711_153208.jpg'
  }
];

  const inspirations = [
    {
      icon: '❤️',
      title: 'Compassion',
      description: 'Witnessing the suffering of people who couldn\'t afford quality healthcare sparked the idea to create an accessible solution.'
    },
    {
      icon: '🤝',
      title: 'Community Service',
      description: 'The age-old Sanskrit principle "सेवा परमो धर्म:" (Service is the highest duty) became the guiding philosophy.'
    },
    {
      icon: '🎯',
      title: 'Belief in Potential',
      description: 'Understanding that proper rehabilitation could transform lives and restore independence to countless individuals.'
    },
    {
      icon: '🌍',
      title: 'Social Impact',
      description: 'A desire to create positive change in society through healthcare accessibility and community wellness programs.'
    },
    {
      icon: '💪',
      title: 'Excellence',
      description: 'Commitment to quality-first approach in every aspect of patient care and facility management.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Continuous improvement and adoption of advanced therapies and modern technologies.'
    },
    {
      icon: '⭐',
      title: 'Integrity',
      description: 'Building trust through transparent, ethical, and honest practices with our patients and community.'
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'Expanding our reach to serve more communities and making sustainable positive impact.'
    }
  ];

  const challenges = [
    {
      challenge: 'Awareness Gap',
      overcome: 'In a rural area with limited knowledge of physiotherapy, we spread awareness through community camps, print ads, personal interactions, patient and attendant counseling, sharing feedback, and active social media engagement.'
    },
    {
      challenge: 'Geographic Barriers',
      overcome: 'Initially, only town residents accessed our services, while nearby rural areas remained unaware. Through awareness efforts and outreach, people from surrounding rural communities now visit us regularly for treatment.'
    },
    {
      challenge: 'Limited Resources',
      overcome: 'We secured a prime, centrally accessible location with strong infrastructure and built a strong team of skilled professionals - laying the foundation for reliable, quality patient care.'
    },
    {
      challenge: 'Training & Development',
      overcome: 'Recruited new staff and trained them,, introduced advanced therapies and modern machinery, and adopted the latest medical approaches to enhance patient care.'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <div className={`relative ${isDarkMode ? 'bg-linear-to-br from-teal-900 to-teal-800' : 'bg-linear-to-br from-teal-600 to-teal-700'} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
          <div className="text-6xl mb-6">📖</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            From a simple vision to a thriving community healthcare center — The journey of Jan Seva Physiotherapy
          </p>
        </div>
      </div>

      {/* The Why Section */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Why It Started</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 leading-relaxed ${textSecondary}`}>
              <p className="text-md">
                Our journey began with a personal experience of our Chairman, Mr. R. P. Pansari. During a difficult phase, he underwent physiotherapy in Kolkata, where quality rehabilitation was available—but costly.              </p>
              <p className="text-md">
                On returning to his hometown, he noticed a painful gap: the absence of proper physiotherapy facilities and the inability of many people to afford expensive treatments. Patients were left with limited options and prolonged suffering.              </p>
              <p className="text-md">
                Moved by this reality and guided by the principle "सेवा परमो धर्म:" (Service is the highest duty), Mr. R. P. Pansari founded Jan Seva Physiotherapy with a clear mission—to provide high-quality, affordable, and compassionate care for all.              </p>
              <p className="text-md">
                What started as a purpose-driven initiative has today become a trusted center, dedicated to restoring movement, relieving pain, and serving the community. </p>
            </div>
            
            <div className={`${accentBg} p-8 rounded-2xl shadow-2xl border-2 ${isDarkMode ? 'border-teal-600' : 'border-teal-200'}`}>
              <div className="text-6xl mb-6 text-center">🎯</div>
              <h3 className={`text-2xl font-bold mb-4 text-center ${accentColor}`}>The Catalyst</h3>
              <p className={`text-center ${textSecondary}`}>
                "Every person deserves the chance to recover, move freely, and live without pain. That belief sparked a revolution in community healthcare."
              </p>
              <p className={`text-center mt-4 font-semibold ${accentColor}`}>— Dr. R.P. Pansari</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>The Visionary Behind It All</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          {founders.map((founder, idx) => (
            <div key={idx} className={`max-w-4xl mx-auto ${cardBg} rounded-2xl shadow-2xl overflow-hidden border-2 hover:shadow-3xl transition-all duration-300 p-8 md:p-12`}>
              <div className="flex flex-col md:flex-row items-center gap-12">
                
                {/* IMAGE REPLACEMENT START */}
                <div className="flex shrink-0">
                  <div className="relative">
                    {/* Decorative background circle */}
                    <div className={`absolute -inset-2 ${isDarkMode ? 'bg-teal-500/20' : 'bg-teal-100'} rounded-full blur-xl opacity-50`}></div>
                    
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-700 transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
                {/* IMAGE REPLACEMENT END */}

                <div className="flex-1 text-center md:text-left">
                  <h3 className={`text-3xl font-bold ${accentColor} mb-2`}>{founder.name}</h3>
                  <p className={`text-xl font-semibold ${textSecondary} mb-4`}>{founder.title}</p>
                  <p className={`${textSecondary} text-lg leading-relaxed mb-6`}>{founder.bio}</p>
                  <div className={`${accentBg} p-6 rounded-xl border-l-4 border-teal-600 shadow-sm`}>
                    <p className={`italic ${textSecondary} text-lg`}>"{founder.vision}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Our Visionary Section */}
<section className={`py-20 ${sectionBg}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>About Our Visionary</h2>
    <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
    
    {founders.map((founder, idx) => (
      <div key={idx} className={`max-w-4xl mx-auto`}>
        {/* Bio Points as Bullet List */}
        <div className={`space-y-3 ${textSecondary}`}>
          {founder.bioPoints && founder.bioPoints.map((point, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className={`text-teal-500 font-bold text-xl flex-shrink-0`}>•</span>
              <div>
                <h5 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-base mb-1`}>{point.title}</h5>
                <p className="text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

     {/* Founder Section */}
<section className={`py-20 ${sectionBg}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>The Visionary Behind It All</h2>
    <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
    
    {founders.map((founder, idx) => (
      <div key={idx} className={`max-w-4xl mx-auto ${cardBg} rounded-2xl shadow-2xl overflow-hidden border-2 hover:shadow-3xl transition-all duration-300 p-8 md:p-12`}>
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* IMAGE REPLACEMENT START */}
          <div className="flex shrink-0">
            <div className="relative">
              {/* Decorative background circle */}
              <div className={`absolute -inset-2 ${isDarkMode ? 'bg-teal-500/20' : 'bg-teal-100'} rounded-full blur-xl opacity-50`}></div>
              
              <img 
                src={founder.image} 
                alt={founder.name} 
                className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-xl border-4 border-white dark:border-gray-700 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          {/* IMAGE REPLACEMENT END */}

          <div className="flex-1 text-center md:text-left">
            <h3 className={`text-3xl font-bold ${accentColor} mb-2`}>{founder.name}</h3>
            <p className={`text-xl font-semibold ${textSecondary} mb-6`}>{founder.title}</p>
            
            {/* Bio Points as Brief List */}
            <div className={`space-y-2 mb-6 ${textSecondary} text-sm`}>
              {founder.bioPoints && founder.bioPoints.map((point, i) => (
                <div key={i} className="flex gap-2">
                  <span className={`text-teal-500 font-bold`}>•</span>
                  <p>
                    <span className="text-md">{point.description}</span>
                  </p>
                </div>
              ))}
            </div>
            
            <div className={`${accentBg} p-6 rounded-xl border-l-4 border-teal-600 shadow-sm`}>
              <p className={`italic ${textSecondary} text-lg`}>"{founder.vision}"</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Timeline Section */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Our Journey</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-center`}>
                <div className="flex-1" />
                <div className="w-12 h-12 flex shrink-0">
                  <div className={`w-full h-full rounded-full flex items-center justify-center text-2xl bg-linear-to-br ${milestone.color} shadow-lg`}>
                    {milestone.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className={`${cardBg} p-8 rounded-2xl border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                    <div className={`text-4xl font-bold ${accentColor} mb-2`}>{milestone.year}</div>
                    <h4 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{milestone.title}</h4>
                    <p className={textSecondary}>{milestone.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Overcome Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Challenges We Overcame</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((item, idx) => (
              <div key={idx} className={`${cardBg} p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">🏔️</div>
                  <h3 className={`text-xl font-bold ${accentColor}`}>{item.challenge}</h3>
                </div>
                <p className={`${textTertiary} leading-relaxed`}>
                  <strong>How we overcame it:</strong> {item.overcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Values Born From Story */}
      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-r from-teal-900 to-teal-800' : 'bg-linear-to-r from-teal-600 to-teal-700'} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Values Born From Our Story</h2>
          <p className="text-center text-lg opacity-90 max-w-2xl mx-auto mb-12">
            Every challenge, every success, every patient story has shaped who we are today.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspirations.map((inspiration, idx) => (
              <div key={idx} className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${cardBg} border-2`}>
                <div className="text-5xl mb-4">{inspiration.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${accentColor}`}>{inspiration.title}</h3>
                <p className={textTertiary}>{inspiration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We're Headed */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`mt-12 ${accentBg} p-8 rounded-2xl border-2 max-w-2xl mx-auto`}>
            <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our story isn't over—it's just beginning. Every patient we help, every community we serve, adds a new chapter to our legacy of healing and hope.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-br from-teal-900 to-teal-800' : 'bg-linear-to-br from-teal-600 to-teal-700'} text-white text-center`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Your recovery journey could be the next inspiring chapter in our community's healing narrative.
          </p>
          <a href="/contact" className="inline-block bg-white text-teal-600 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 hover:bg-gray-100">
            Start Your Journey With Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurStory;