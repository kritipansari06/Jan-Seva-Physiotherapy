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

  const founders = [
    {
      name: 'Mr. R.P. Pansari',
      title: 'Founder & Vision Bearer',
      bioPoints: [
        {description: 'Shri R. P. Pansari Ji embodied service, trust, and compassion. Raised in Losal, he carried lifelong values of integrity, humility, and responsibility.'},
        {description: 'A CA Gold Medalist, he dedicated nearly five decades to the Birla Group, earning respect through honesty and ethical leadership.'},
        {description: 'His heart always remained with the people, supporting healthcare, social welfare, spirituality, and education selflessly.'},
        {description: 'Wherever there was need, he transformed compassion into action through meaningful social and healthcare initiatives.'},
        {description: 'Driven by love for his hometown, he founded Jan Seva Physiotherapy in Losal, rooted in care, healing, and “सेवा ही सर्वस्व”.'},
        {description: 'His life inspires us to measure success by lives touched and communities strengthened.'},
      ],
      vision: 'सेवा परमो धर्म:। सेवा ही सर्वस्व ।',
      image: '/images/Founder.JPG'
    }
  ];
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
            <div className={`space-y-6 leading-relaxed text-justify ${textSecondary}`}>
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
              <p className={`text-center mt-4 font-semibold ${accentColor}`}>— Mr. R.P. Pansari</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}            
      <section className={`py-24 ${sectionBg} relative overflow-hidden`}>

        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 tracking-tight ${accentColor}`}>
              The Visionary Behind It All
            </h2>
            <div className={`w-32 h-1.5 ${isDarkMode ? 'bg-teal-400' : 'bg-teal-600'} mx-auto rounded-full`} />
          </div>

          {founders.map((founder, idx) => (
            <div key={idx} className={`max-w-6xl mx-auto ${cardBg} backdrop-blur-sm rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 hover:border-teal-500/50 transition-all duration-500 group`}>

              <div className="flex flex-col lg:flex-row items-center">

                <div className="w-full lg:w-2/5 p-8 lg:p-12 flex justify-center">
                  <div className="relative group">
                    
                    <div className={`absolute -inset-4 border-2 border-dashed ${isDarkMode ? 'border-teal-600/30' : 'border-teal-300'} rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-400`}></div>

                    <div className="relative">
                      <img src={founder.image} alt={founder.name} 
                        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl transform transition-transform duration-400 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 rounded-2xl duration-500" />
                    </div>
                  </div>
                </div>
          
                {/* Content Side */}
                <div className="w-full lg:w-3/5 p-8 lg:p-16 lg:pl-0 text-center lg:text-left">
                  <div className="mb-6">
                    <span className="text-teal-500 font-bold tracking-widest uppercase text-sm">Founder & CEO</span>
                    <h3 className={`text-4xl md:text-5xl font-bold ${accentColor} mt-2`}>
                      {founder.name}
                    </h3>
                  </div>
          
                  <div className={`space-y-4 mb-10 ${textSecondary}`}>
                    {founder.bioPoints && founder.bioPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-4 group/item">
                        <div className="mt-1.5 shrink-0">
                          <div className="w-2 h-2 rounded-full bg-teal-500 group-hover/item:scale-150 transition-transform" />
                        </div>
                        <p className="text-lg leading-relaxed text-justify font-medium">
                          {point.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Vision Quote Box */}
                  <div className={`relative ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} p-8 rounded-2xl border-l-8 border-teal-500 shadow-inner`}>
                    <svg className="absolute top-4 left-4 w-8 h-8 text-teal-500/20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8v8H6v4h4v4H4v-8h4V8h2zm12 0v8h-4v4h4v4h-6v-8h4V8h2z" />
                    </svg>
                    <p className={`italic ${textSecondary} text-xl md:text-2xl leading-snug relative z-10`}>
                      "{founder.vision}"
                    </p>
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
                    <p className={`text-justify ${textSecondary}`}>{milestone.story}</p>
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
                <p className={`${textTertiary} leading-relaxed text-justify`}>
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
                <p className={`text-justify ${textTertiary}`}>{inspiration.description}</p>
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