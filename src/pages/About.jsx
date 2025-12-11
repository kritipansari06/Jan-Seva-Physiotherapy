import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Award, Users, Heart, Target } from 'lucide-react';
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

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>

      <div className={`relative ${isDarkMode ? 'bg-linear-to-br from-purple-900 via-purple-800 to-purple-950' : 'bg-linear-to-br from-purple-600 via-purple-700 to-purple-900'} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'moveGrid 20s linear infinite'
          }} />
        </div>
        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Healing Touch Physiotherapy
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Where Compassion Meets Clinical Excellence in Rehabilitation and Wellness
          </p>
        </div>
      </div>

      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-purple-600'}`}>About Us</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-linear-to-r from-purple-500 to-purple-700' : 'bg-linear-to-br from-purple-600 to-purple-800'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
              <div className={`${isDarkMode ? 'bg-linear-to-br from-purple-900 to-purple-800' : 'bg-linear-to-br from-purple-100 to-purple-200'} p-8 rounded-2xl shadow-2xl`}>
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-10 rounded-xl text-center space-y-4`}>
                  <div className="text-5xl">🏥</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Excellence in Rehabilitation</div>
                  <div className="text-5xl">💪</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Restoring Mobility</div>
                  <div className="text-5xl">❤️</div>
                  <div className={`font-bold text-lg ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Caring for Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-b from-gray-900 to-gray-800' : 'bg-linear-to-b from-white to-purple-50'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-purple-600'}`}>Our Mission & Vision</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-linear-to-r from-purple-500 to-purple-700' : 'bg-linear-to-r from-purple-600 to-purple-800'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-purple-600 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="text-5xl mb-6">🎯</div>
              <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Our Mission</h3>
              <p className={`leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To provide exceptional physiotherapy services that combine clinical excellence with compassionate care, helping individuals achieve optimal physical function and enhanced quality of life.
              </p>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                We strive to create a healing environment where patients feel supported, understood, and empowered throughout their recovery journey.
              </p>
            </div>
            
            <div className={`p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-purple-800 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="text-5xl mb-6">👁️</div>
              <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Our Vision</h3>
              <p className={`leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To be recognized as the leading physiotherapy center in the region, setting standards for clinical excellence, patient satisfaction, and innovative rehabilitation practices.
              </p>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                We aim to expand our services to reach underserved populations and establish centers of excellence that serve as training grounds for future professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-br from-purple-900 to-purple-950' : 'bg-linear-to-br from-purple-600 to-purple-900'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-linear-to-br from-white to-transparent" />
        </div>
        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Core Goals</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12 rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className={`${isDarkMode ? 'bg-white/10' : 'bg-white/10'} backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105`}>
                <div className="text-6xl font-bold opacity-50 mb-4">{goal.num}</div>
                <h4 className="text-2xl font-bold mb-4">{goal.title}</h4>
                <p className="opacity-90">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-br from-gray-800 to-gray-900' : 'bg-linear-to-br from-gray-100 to-gray-200'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-purple-600'}`}>Meet Our Senior Consultant</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-linear-to-r from-purple-500 to-purple-700' : 'bg-linear-to-r from-purple-600 to-purple-800'} mx-auto mb-12 rounded-full`} />
          
          <div className={`max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="grid md:grid-cols-3 gap-0">
              <div>
                <img className="w-full h-full object-cover aspect-square md:aspect-auto" src="/src/assets/images/Doctor.jpg" alt="Dr. Shivam Sharma" />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Dr. Shivam Sharma</h3>
                <div className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-purple-300' : 'text-purple-800'}`}>Senior Physiotherapist & Clinical Director</div>
                <p className={`mb-6 text-justify ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
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
                      <ChevronRight className={`mt-1 flex shrink-0 ${isDarkMode ? 'text-purple-600' : 'text-purple-600'}`} />
                      <div>
                        <strong className={isDarkMode ? 'text-white' : 'text-gray-800'}>{item.label}:</strong>
                        <span className={`ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '40px 40px'}} />
        </div>
        
        <div className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">🏛️</div>
            <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              R.P. Pansari Jan Seva Trust
            </h2>
            <p className="text-xl opacity-80">Founded on the principles of service, compassion, and community welfare</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'About the Trust',
                content: 'The R.P. Pansari Jan Seva Trust was established in 2005 with a noble mission to provide quality healthcare services to all sections of society. The trust operates multiple healthcare facilities, focusing on serving underprivileged communities.'
              },
              {
                title: 'Community Impact',
                content: 'Since its inception, the trust has served over 50,000 patients through various healthcare initiatives. Our outreach programs have conducted more than 200 health camps in underserved areas.'
              },
              {
                title: 'Trust Objectives',
                content: 'Provide affordable healthcare, establish wellness facilities, conduct awareness programs, and support medical education in rehabilitation sciences for the benefit of society.'
              },
              {
                title: 'Future Initiatives',
                content: 'Expanding services with mobile physiotherapy units, establishing research wings, creating vocational training programs, and developing partnerships with educational institutions.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
                <h4 className="text-2xl font-bold text-purple-400 mb-4">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-purple-600'}`}>Our Specialized Services</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-linear-to-r from-purple-500 to-purple-700' : 'bg-linear-to-r from-purple-600 to-purple-800'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${isDarkMode ? 'bg-linear-to-br from-gray-700 to-gray-600' : 'bg-linear-to-br from-gray-50 to-gray-100'}`}>
                <div className="text-6xl mb-4">{service.icon}</div>
                <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>{service.title}</h4>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-r from-purple-900 to-purple-800' : 'bg-linear-to-r from-purple-600 to-purple-800'} text-white`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12 rounded-full" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center bg-white/10 backdrop-blur-lg p-8 rounded-xl">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h4 className="text-2xl font-bold mb-3">{value.title}</h4>
                <p className="opacity-90">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-purple-600'}`}>Our Impact in Numbers</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-linear-to-r from-purple-500 to-purple-700' : 'bg-linear-to-r from-purple-600 to-purple-800'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className={`p-8 rounded-xl text-center hover:shadow-2xl transition-shadow ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <div className={`text-5xl font-bold mb-3 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>{stat.number}</div>
                <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-b from-gray-900 to-gray-800' : 'bg-linear-to-b from-white to-purple-50'}`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-purple-600'}`}>World-Class Facilities</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-linear-to-r from-purple-500 to-purple-700' : 'bg-linear-to-r from-purple-600 to-purple-800'} mx-auto mb-12 rounded-full`} />
          
          <div className="grid md:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl shadow-md border-l-4 border-purple-600 hover:shadow-xl hover:translate-x-2 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h4 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>{facility.title}</h4>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Journey</h2>
          <div className={`w-24 h-1 ${isDarkMode ? 'bg-linear-to-r from-purple-400 to-purple-600' : 'bg-linear-to-r from-purple-400 to-purple-600'} mx-auto mb-12 rounded-full`} />
          
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className={`flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-center`}>
                <div className="flex-1" />
                <div className="w-4 h-4 bg-purple-500 rounded-full flex shrink-0" />
                <div className="flex-1">
                  <div className={`${isDarkMode ? 'bg-white/5' : 'bg-white/5'} backdrop-blur-lg p-6 rounded-xl border border-white/10`}>
                    <div className="text-3xl font-bold text-purple-400 mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold mb-2">{item.event}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDarkMode ? 'bg-linear-to-br from-purple-900 to-purple-950' : 'bg-linear-to-br from-purple-600 to-purple-900'} text-white text-center`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Start Your Recovery Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards a pain-free, active life. Our expert team is ready to help you achieve your health goals.
          </p>
          <button className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            Book Your Consultation
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default About;