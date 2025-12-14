import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Users, Heart, Target } from 'lucide-react';
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
    { num: '01', title: 'Patient-Centered Care', desc: 'Delivering personalized treatment plans that prioritize patient comfort, dignity, and individual recovery goals.' },
    { num: '02', title: 'Clinical Excellence', desc: 'Maintaining the highest standards of professional practice through continuous education and evidence-based treatments.' },
    { num: '03', title: 'Accessibility', desc: 'Making quality physiotherapy services accessible to all members of our community regardless of their background.' },
    { num: '04', title: 'Innovation', desc: 'Embracing new technologies and treatment modalities to provide cutting-edge rehabilitation solutions.' },
    { num: '05', title: 'Prevention', desc: 'Promoting health awareness and preventive strategies to reduce the incidence of injuries and chronic conditions.' },
    { num: '06', title: 'Community Impact', desc: 'Contributing to community health through outreach programs, workshops, and collaborative healthcare initiatives.' }
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

  const values = [
    { icon: '🤝', title: 'Integrity', desc: 'Honest, ethical, and transparent in all our interactions' },
    { icon: '❤️', title: 'Compassion', desc: 'Treating every patient with empathy and understanding' },
    { icon: '🎯', title: 'Excellence', desc: 'Striving for the highest quality in every aspect of care' },
    { icon: '🌟', title: 'Innovation', desc: 'Embracing new approaches to improve patient outcomes' }
  ];

  const stats = [
    { number: '10,000+', label: 'Patients Treated' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Health Camps' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const facilities = [
    { title: 'Advanced Equipment', desc: 'State-of-the-art rehabilitation technology and therapeutic devices' },
    { title: 'Modern Infrastructure', desc: 'Spacious, well-ventilated treatment rooms with ergonomic design' },
    { title: 'Hydrotherapy Pool', desc: 'Temperature-controlled pool for aquatic therapy sessions' },
    { title: 'Exercise Studio', desc: 'Fully equipped gym with specialized rehabilitation equipment' },
    { title: 'Private Consultation Rooms', desc: 'Comfortable spaces for confidential patient assessments' },
    { title: 'Waiting Lounge', desc: 'Comfortable seating area with refreshments and entertainment' }
  ];

  const timeline = [
    { year: '2010', event: 'Foundation', desc: 'Healing Touch Physiotherapy was established with a vision to provide world-class rehabilitation services' },
    { year: '2013', event: 'Expansion', desc: 'Opened second treatment wing with advanced electrotherapy equipment' },
    { year: '2016', event: 'Recognition', desc: 'Received Best Physiotherapy Center Award from State Health Department' },
    { year: '2019', event: 'Innovation', desc: 'Introduced tele-rehabilitation services and home care programs' },
    { year: '2023', event: 'Growth', desc: 'Expanded to serve 10,000+ patients with a team of 20+ specialists' }
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
            <div className={`space-y-6 leading-relaxed ${textSecondary}`}>
              <p>
                Welcome to Healing Touch Physiotherapy, a premier destination for comprehensive rehabilitation and wellness services. Established with a vision to provide world-class physiotherapy care, we have been serving our community for over a decade with dedication, expertise, and compassion.
              </p>
              <p>
                Our center combines cutting-edge technology with evidence-based treatment protocols to deliver exceptional outcomes for patients of all ages. From sports injuries to chronic pain management, from neurological rehabilitation to geriatric care, we offer a holistic approach to healing.
              </p>
              <p>
                We believe in empowering our patients through education and personalized treatment plans. Every individual who walks through our doors receives care that is tailored to their unique needs, lifestyle, and recovery goals.
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
              <p className={`leading-relaxed mb-4 ${textSecondary}`}>
                To provide exceptional physiotherapy services that combine clinical excellence with compassionate care, helping individuals achieve optimal physical function and enhanced quality of life.
              </p>
              <p className={textTertiary}>
                We strive to create a healing environment where patients feel supported, understood, and empowered throughout their recovery journey.
              </p>
            </div>
            
            <div className={`p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-teal-500 ${cardBg}`}>
              <div className="text-5xl mb-6">👁️</div>
              <h3 className={`text-3xl font-bold mb-6 ${accentColor}`}>Our Vision</h3>
              <p className={`leading-relaxed mb-4 ${textSecondary}`}>
                To be recognized as the leading physiotherapy center in the region, setting standards for clinical excellence, patient satisfaction, and innovative rehabilitation practices.
              </p>
              <p className={textTertiary}>
                We aim to expand our services to reach underserved populations and establish centers of excellence that serve as training grounds for future professionals.
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
                className={`relative p-8 rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-2 border-teal-600 hover:shadow-xl hover:shadow-teal-600/20' 
                    : 'bg-white border-2 border-teal-200 shadow-lg hover:shadow-xl hover:shadow-teal-400/20'
                }`}>
                <div className={`absolute top-0 right-0 text-8xl font-bold opacity-10 group-hover:opacity-20 transition-opacity ${accentColor}`}>
                  {goal.num}
                </div>
                <div className="relative z-10">
                  <h4 className={`text-2xl font-bold mb-4 ${accentColor}`}>{goal.title}</h4>
                  <p className={textSecondary}>{goal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Consultant */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Meet Our Senior Consultant</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className={`max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden ${cardBg}`}>
            <div className="grid md:grid-cols-3 gap-0">
              <div>
                <img className="w-full h-full object-cover aspect-square md:aspect-auto" src="/src/assets/images/Doctor.jpg" alt="Dr. Shivam Sharma" />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className={`text-4xl font-bold mb-2 ${accentColor}`}>Dr. Shivam Sharma</h3>
                <div className={`text-xl font-semibold mb-6 ${accentColor}`}>Senior Physiotherapist & Clinical Director</div>
                <p className={`mb-6 text-justify ${textSecondary}`}>
                  Dr. Shivam Sharma is a distinguished physiotherapist with over 15 years of clinical experience in musculoskeletal and neurological rehabilitation.
                </p>
                
                <div className="space-y-4">
                  {[
                    { label: 'Qualifications', text: 'MPT, BPT, Certified Manual Therapist' },
                    { label: 'Specializations', text: 'Sports Injury, Spinal Disorders, Post-Surgical Rehab' },
                    { label: 'Experience', text: '15+ years of clinical practice' },
                    { label: 'Achievements', text: 'Excellence in Clinical Practice Award 2022' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <ChevronRight className={`mt-1 flex shrink-0 ${accentColor}`} />
                      <div>
                        <strong className={isDarkMode ? 'text-white' : 'text-gray-800'}>{item.label}:</strong>
                        <span className={`ml-2 ${textTertiary}`}>{item.text}</span>
                      </div>
                    </div>
                  ))}
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
                content: 'The R.P. Pansari Jan Seva Trust was established in 2005 with a noble mission to provide quality healthcare services to all sections of society. The trust operates multiple healthcare facilities, focusing on serving underprivileged communities.'
              },
              {
                title: 'Community Impact',
                icon: '👥',
                content: 'Since its inception, the trust has served over 50,000 patients through various healthcare initiatives. Our outreach programs have conducted more than 200 health camps in underserved areas.'
              },
              {
                title: 'Trust Objectives',
                icon: '🎯',
                content: 'Provide affordable healthcare, establish wellness facilities, conduct awareness programs, and support medical education in rehabilitation sciences for the benefit of society.'
              },
              {
                title: 'Future Initiatives',
                icon: '🚀',
                content: 'Expanding services with mobile physiotherapy units, establishing research wings, creating vocational training programs, and developing partnerships with educational institutions.'
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

      {/* Values Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-r from-teal-900 to-teal-800' : 'bg-linear-to-r from-teal-600 to-teal-700'} text-white`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className={`text-center p-8 rounded-2xl backdrop-blur-sm border-2 ${isDarkMode ? 'bg-white/10 border-white/30 hover:bg-white/20' : 'bg-white/10 border-white/30 hover:bg-white/20'} transition-all duration-300 hover:-translate-y-2 group`}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h4 className="text-2xl font-bold mb-3">{value.title}</h4>
                <p className="opacity-90">{value.desc}</p>
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

      {/* Facilities Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>World-Class Facilities</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow-md border-l-4 border-teal-600 hover:shadow-xl hover:translate-x-2 transition-all duration-300 ${cardBg}`}>
                <h4 className={`text-xl font-bold mb-3 ${accentColor}`}>{facility.title}</h4>
                <p className={textTertiary}>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced */}
      <section className={`py-20 ${sectionBg}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${accentColor}`}>Our Journey</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-center`}>
                <div className="flex-1" />
                <div className="w-5 h-5 bg-linear-to-br from-teal-500 to-teal-600 rounded-full flex shrink-0 shadow-lg" />
                <div className="flex-1">
                  <div className={`${cardBg} p-6 rounded-2xl border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-teal-500`}>
                    <div className={`text-3xl font-bold ${accentColor} mb-2`}>{item.year}</div>
                    <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{item.event}</h4>
                    <p className={textTertiary}>{item.desc}</p>
                  </div>
                </div>
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