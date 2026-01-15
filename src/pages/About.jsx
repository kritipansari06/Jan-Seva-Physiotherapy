import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goals = [
    { title: 'Personalized Care', desc: 'Delivering personalized treatment plans that prioritize patient comfort, dignity, and individual recovery goals.' },
    { title: 'Clinical Excellence', desc: 'Maintaining the highest standards of professional practice through continuous education and evidence-based treatments.' },
    { title: 'Inclusive Access', desc: 'Making quality physiotherapy services accessible to all members of our community regardless of their background.' },
    { title: 'Advanced Practice', desc: 'Embracing new technologies and treatment modalities to provide cutting-edge rehabilitation solutions.' },
    { title: 'Injury Prevention', desc: 'Promoting health awareness and preventive strategies to reduce the incidence of injuries and chronic conditions.' },
    { title: 'Community Impact', desc: 'Contributing to community health through outreach programs, workshops, and collaborative healthcare initiatives.' }
  ];

  const services = [
    { icon: '🏃', title: 'Sports Rehabilitation', desc: 'Specialized care for athletes and active individuals' },
    { icon: '🦴', title: 'Orthopedic Care', desc: 'Treatment for joint and bone disorders' },
    { icon: '🧠', title: 'Neurological Rehab', desc: 'Recovery from stroke, injury, and conditions' },
    { icon: '👴', title: 'Geriatric Therapy', desc: 'Specialized care for elderly patients' },
    { icon: '👶', title: 'Pediatric Care', desc: 'Developmental support for children' },
    { icon: '💆', title: 'Manual Therapy', desc: 'Hands-on treatment techniques' },
    { icon: '⚡', title: 'Electrotherapy', desc: 'Advanced pain management solutions' },
    { icon: '🏋️', title: 'Exercise Therapy', desc: 'Customized fitness and recovery programs' }
  ];

  const stats = [
    { number: '3,000+', label: 'Lives Transformed Through Specialized Care' },
    { number: '20,000+', label: 'Expertly Guided Recovery Sessions'},
    { number: '5500+', label: 'Free Community Welfare Treatments' },
    { number: '97%', label: 'Clinical Success & Satisfaction Rate' }
  ];

  const accentColor = isDarkMode ? 'text-teal-400' : 'text-teal-600';
  const accentBg = isDarkMode ? 'bg-teal-900/20' : 'bg-teal-50';
  const cardBg = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const textTertiary = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const sectionBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';

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
        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Healing Touch Physiotherapy
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Where Compassion Meets Clinical Excellence in Rehabilitation and Wellness
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>About Us</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 text-justify leading-relaxed ${textSecondary}`}>
              <p className='font-bold'>
                Welcome to Jan Seva Physiotherapy, Losal—a trusted center dedicated to healing, rehabilitation, and wellness. Established with the vision of making quality physiotherapy accessible to all, we proudly serve Losal and nearby communities with care, commitment, and compassion.
              </p>
              <p className='font-bold'>
                At Jan Seva Physiotherapy, patients receive care from an experienced and expert physiotherapist, ensuring thoughtful assessment and effective treatment at every step. With the support of modern equipment and evidence-based therapies, we provide comprehensive rehabilitation for all age groups—from injury recovery and post-surgical care to chronic pain management, neurological rehabilitation, and geriatric support.
              </p>
              <p className='font-bold'>
                We believe in empowering patients through guidance, clarity, and personalized attention. Each treatment plan is carefully designed to suit individual conditions, lifestyles, and recovery goals—delivering care that is reliable, affordable, and approachable.
              </p>
            </div>
            
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className={`${accentBg} p-8 rounded-2xl shadow-2xl border-2 ${isDarkMode ? 'border-teal-600' : 'border-teal-200'}`}>
                <div className={`${cardBg} p-10 rounded-xl text-center space-y-4 border-2`}>
                  <div className="text-5xl">🏥</div>
                  <div className={`font-bold text-lg ${accentColor}`}>Excellence in Rehabilitation</div>
                  <div className="text-5xl">💪</div>
                  <div className={`font-bold text-lg ${accentColor}`}>Restoring Mobility</div>
                  <div className="text-5xl">❤️</div>
                  <div className={`font-bold text-lg ${accentColor}`}>Caring for Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Our Mission & Vision</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-teal-600 ${cardBg}`}>
              <div className="text-5xl mb-6">🎯</div>
              <h3 className={`text-3xl font-bold mb-6 ${accentColor}`}>Our Mission</h3>
              <p className={`leading-relaxed text-justify mb-4 ${textSecondary}`}>
                Our mission is to reach the maximum number of people and help them regain movement, strength, and confidence through compassionate physiotherapy care.
                We strive to establish Jan Seva Physiotherapy as the leading physiotherapy center in Losal by providing high-quality yet affordable treatment.
              </p>
              <p className={`text-justify ${textTertiary}`}>
                By extending our services to nearby rural areas, we aim to ensure that everyone can benefit from effective physiotherapy. Through awareness, accessibility, and ethical care, we work towards improving quality of life and promoting long-term healing.
              </p>
            </div>
            
            <div className={`p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-teal-500 ${cardBg}`}>
              <div className="text-5xl mb-6">👁️</div>
              <h3 className={`text-3xl font-bold mb-6 ${accentColor}`}>Our Vision</h3>
              <p className={`leading-relaxed text-justify  mb-4 ${textSecondary}`}>
                Our vision is to become the most trusted and leading physiotherapy center in the region. We aspire to expand our services, reach underserved rural communities, and treat more complex and critical cases.
                Through advanced technologies, modern therapies, and continuous growth, we envision building a healthier, stronger community.
              </p>
              <p className={`text-justify ${textTertiary}`}>
                We also aim to set new standards in ethical care, patient satisfaction, and rehabilitation excellence.
                Above all, we seek to create a future where quality physiotherapy is accessible to all and pain-free living becomes a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Goals - Enhanced */}
      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-b from-gray-800 to-gray-900' : 'bg-linear-to-b from-gray-50 to-white'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Our Core Goals</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, idx) => (
              <div
  key={idx}
  className={`flex flex-col p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
    isDarkMode
      ? 'bg-gray-800 border border-teal-600/40 hover:shadow-xl hover:shadow-teal-600/20'
      : 'bg-white border border-teal-200 shadow-md hover:shadow-xl'
  }`}
>
  {/* FIXED HEIGHT TITLE */}
  <h4
    className={`font-bold text-lg md:text-2xl leading-snug mb-4 min-h-[3rem] ${accentColor}`}
  >
    {goal.title}
  </h4>

  {/* BODY TEXT */}
  <p
    className={`text-base leading-relaxed text-left ${textSecondary}`}
  >
    {goal.desc}
  </p>
</div>

            ))}
          </div>
        </div>
      </section>


{/* Senior Consultant Section */}
<section className={`py-20 ${sectionBg}`}> {/* Reduced from py-20 */}
  <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className={`text-4xl font-bold text-center mb-3 ${accentColor}`}>Meet Our Senior Consultant</h2> {/* Reduced mb-4 to mb-3 */}
    <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-6 rounded-full`} /> {/* Reduced mb-8 to mb-6 */}
    
    <div className={`max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden ${cardBg}`}>
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-2">
          {/* Maintained your aspect ratio logic */}
          <img className="w-full h-full object-cover aspect-square md:aspect-auto" src="/images/Doctor.jpg" alt="Dr. Shivam Sharma" />
        </div>
        
        <div className="md:col-span-3 p-7 flex flex-col justify-between"> {/* Reduced from p-8 to p-7 */}
          <div>
            <h3 className={`text-3xl font-bold mb-1 ${accentColor}`}>Dr. Shivam Sharma</h3> {/* Reduced mb-2 to mb-1 */}
            <div className={`text-lg font-semibold mb-3 ${accentColor}`}>Senior Physiotherapist & Clinical Incharge</div> {/* Reduced mb-4 to mb-3 */}
            <p className={`mb-3 text-justify text-md leading-relaxed ${textSecondary}`}> {/* Reduced mb-4 to mb-3 */}
              Dr. Shivam Sharma is a distinguished physiotherapist with over 5+ years of clinical experience in musculoskeletal and neurological rehabilitation.
            </p>
            
            <div className="space-y-2 mb-4"> {/* Tightened from space-y-3 to space-y-2 */}
              {[
                { label: 'Qualifications', text: 'MPT, BPT, Certified Manual Therapist' },
                { label: 'Specializations', text: 'Sports & Musculoskeletal Injury, Spinal Disorders, Post-Surgical Rehab' },
                { label: 'Experience', text: '5+ years of clinical practice' },
                { label: 'Achievements', text: 'Excellence in Clinical Practice Award 2022' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <ChevronRight className={`mt-0.5 flex shrink-0 w-5 h-5 ${accentColor}`} />
                  <div>
                    <strong className={`text-md ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.label}:</strong>
                    <span className={`ml-2 text-sm ${textTertiary}`}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section - Slightly more compact padding */}
          <div className={`mt-2 p-3 rounded-xl border-l-4 border-teal-500 ${
            isDarkMode 
              ? 'bg-teal-900/30' 
              : 'bg-teal-50'
          }`}>
            <div className="flex items-start gap-3">
              <span className="text-3xl flex shrink-0">💬</span>
              <div>
                <p className={`text-base italic font-semibold mb-1 ${textSecondary}`}> {/* Reduced mb-2 to mb-1 */}
                  "Physiotherapy is not just about treating pain—it's about restoring hope, mobility, and the freedom to live life fully."
                </p>
                <p className={`text-xs font-bold ${accentColor}`}>— Dr. Shivam Sharma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Trust Section - Enhanced */}
      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-r from-teal-900 via-teal-800 to-gray-800' : 'bg-linear-to-r from-teal-50 via-cyan-50 to-blue-50'} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #0d9488 0%, transparent 50%)',
          }} />
        </div>
        
        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">🏛️</div>
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              R.P. Pansari Jan Seva Trust
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Founded on the principles of service, compassion, and community welfare</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'About the Trust',
                icon: '🤝',
                content: 'Established in 1994, R. P. Pansari Jan Seva Trust is dedicated to the welfare of society through service-driven initiatives. The Trust works across healthcare, education, social welfare, and spiritual development, focusing on inclusive and compassionate impact.'
              },
              {
                title: 'Community Impact',
                icon: '👥',
                content: 'Through ethical care and compassionate service, the center has successfully treated and rehabilitated thousands of patients, reducing long-term disability and significantly improving quality of life in the community.'
              },
              {
                title: 'Trust Objectives',
                icon: '🎯',
                content: 'Trust means an organization or initiative working selflessly for public welfare, without profit, driven by service, compassion, and social responsibility. In an NGO trust, the focus is on helping people, uplifting communities, and creating positive impact in areas like health, education, and social well-being.'
              },
              {
                title: 'Future Initiatives',
                icon: '🚀',
                content: 'The Trust is committed to holistic community empowerment through cutting-edge skill development programs, comprehensive healthcare outreach, cultural heritage restoration, and strategic social collaborations—fostering sustainable growth across education, health, social welfare, and spiritual domains.'
              }
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-2xl backdrop-blur-sm border-2 hover:-translate-y-2 transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800/50 border-teal-500 shadow-lg hover:shadow-teal-600/30'
                  : 'bg-white/70 border-teal-300 shadow-md hover:shadow-lg'
              }`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className={`text-2xl font-bold ${accentColor} mb-4`}>{item.title}</h4>
                <p className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Our Specialized Services</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${cardBg} border-2 group`}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h4 className={`text-xl font-bold mb-3 ${accentColor}`}>{service.title}</h4>
                <p className={`text-sm ${textTertiary}`}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Our Impact in Numbers</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className={`p-8 rounded-xl text-center hover:shadow-2xl transition-shadow ${cardBg} border-2 shadow-lg hover:-translate-y-1`}>
                <div className={`text-5xl font-bold mb-3 ${accentColor}`}>{stat.number}</div>
                <div className={`text-lg ${textTertiary}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-br from-teal-900 to-teal-800' : 'bg-linear-to-br from-teal-600 to-teal-700'} text-white text-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Start Your Recovery Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards a pain-free, active life. Our expert team is ready to help you achieve your health goals.
          </p>
          <button className="bg-white text-teal-600 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 hover:bg-gray-100">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;