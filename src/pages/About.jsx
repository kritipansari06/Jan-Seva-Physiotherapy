import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Users, Heart, Target } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const GOALS = [
  { num: '01', title: 'Patient-Centered Care', desc: 'Delivering personalized treatment plans prioritizing patient comfort and recovery goals.' },
  { num: '02', title: 'Clinical Excellence', desc: 'Maintaining highest standards through continuous education and evidence-based treatments.' },
  { num: '03', title: 'Accessibility', desc: 'Making quality services accessible regardless of background.' },
  { num: '04', title: 'Innovation', desc: 'Embracing new technologies for cutting-edge rehabilitation solutions.' },
  { num: '05', title: 'Prevention', desc: 'Promoting health awareness to reduce injuries and chronic conditions.' },
  { num: '06', title: 'Community Impact', desc: 'Contributing through outreach programs and collaborative healthcare initiatives.' },
];

const SERVICES = [
  { icon: '🏃', title: 'Sports Rehabilitation', desc: 'Specialized care for athletes' },
  { icon: '🦴', title: 'Orthopedic Care', desc: 'Joint and bone disorder treatment' },
  { icon: '🧠', title: 'Neurological Rehab', desc: 'Recovery from stroke and injuries' },
  { icon: '👴', title: 'Geriatric Therapy', desc: 'Care for elderly patients' },
  { icon: '👶', title: 'Pediatric Care', desc: 'Developmental support' },
  { icon: '💆', title: 'Manual Therapy', desc: 'Hands-on techniques' },
  { icon: '⚡', title: 'Electrotherapy', desc: 'Advanced pain solutions' },
  { icon: '🏋️', title: 'Exercise Therapy', desc: 'Fitness and recovery' },
];

const VALUES = [
  { icon: '🤝', title: 'Integrity', desc: 'Honest and transparent' },
  { icon: '❤️', title: 'Compassion', desc: 'Empathy and understanding' },
  { icon: '🎯', title: 'Excellence', desc: 'Highest quality care' },
  { icon: '🌟', title: 'Innovation', desc: 'New approaches' },
];

const STATS = [
  { num: '10,000+', label: 'Patients Treated' },
  { num: '15+', label: 'Years Experience' },
  { num: '50+', label: 'Health Camps' },
  { num: '98%', label: 'Satisfaction Rate' },
];

const FACILITIES = [
  { title: 'Advanced Equipment', desc: 'State-of-the-art rehabilitation technology' },
  { title: 'Modern Infrastructure', desc: 'Spacious, well-ventilated treatment rooms' },
  { title: 'Hydrotherapy Pool', desc: 'Temperature-controlled for aquatic therapy' },
  { title: 'Exercise Studio', desc: 'Fully equipped gym with specialized equipment' },
  { title: 'Private Consultation', desc: 'Comfortable spaces for confidential assessments' },
  { title: 'Waiting Lounge', desc: 'Comfortable seating with refreshments' },
];

const TIMELINE = [
  { year: '2010', event: 'Foundation', desc: 'Healing Touch Physiotherapy established' },
  { year: '2013', event: 'Expansion', desc: 'Opened second treatment wing' },
  { year: '2016', event: 'Recognition', desc: 'Best Physiotherapy Center Award' },
  { year: '2019', event: 'Innovation', desc: 'Introduced tele-rehabilitation services' },
  { year: '2023', event: 'Growth', desc: 'Expanded to serve 10,000+ patients' },
];

const Card = ({ children, className = '' }) => (
  <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition ${className}`}>
    {children}
  </div>
);

const Section = ({ title, accent, children, className = '' }) => (
  <section className={className}>
    <h2 className={`text-3xl font-bold text-center mb-4 ${accent}`}>{title}</h2>
    <div className={`w-24 h-1 bg-linear-to-r from-purple-600 to-purple-800 mx-auto mb-12 rounded-full`} />
    {children}
  </section>
);

const About = () =>{
  const { isDarkMode } = useTheme();
  const dark = isDarkMode;

  const cardBg = dark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const accent = dark ? 'text-purple-400' : 'text-purple-600';
  const textSecondary = dark ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className={`relative ${dark ? 'bg-linear-to-br from-purple-900 to-purple-950' : 'bg-linear-to-br from-purple-600 to-purple-900'} text-white py-32 md:py-40 text-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="relative max-w-full mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Healing Touch Physiotherapy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">Where Compassion Meets Clinical Excellence</p>
        </div>
      </div>

      <Section title="About Us" accent={accent} className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${textSecondary}`}>
            <p>Welcome to Healing Touch Physiotherapy. Established with a vision to provide world-class rehabilitation care, we serve our community for over a decade with dedication and expertise.</p>
            <p>Our center combines cutting-edge technology with evidence-based treatment protocols for exceptional outcomes across all ages.</p>
            <p>We believe in empowering patients through education and personalized treatment plans tailored to unique needs and recovery goals.</p>
          </div>
          <Card className={`${dark ? 'bg-linear-to-br from-purple-900 to-purple-800' : 'bg-linear-to-br from-purple-100 to-purple-200'} p-8`}>
            <div className={`${dark ? 'bg-gray-800' : 'bg-white'} p-10 rounded-xl text-center space-y-4`}>
              <div className="text-5xl">🏥</div>
              <div className={`font-bold text-lg ${accent}`}>Excellence in Rehabilitation</div>
              <div className="text-5xl">💪</div>
              <div className={`font-bold text-lg ${accent}`}>Restoring Mobility</div>
              <div className="text-5xl">❤️</div>
              <div className={`font-bold text-lg ${accent}`}>Caring for Community</div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Mission & Vision */}
      <section className={`py-20 ${dark ? 'bg-linear-to-b from-gray-900 to-gray-800' : 'bg-linear-to-b from-white to-purple-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${accent}`}>Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className={`${cardBg} border border-t-4 border-t-purple-600`}>
              <div className="text-5xl mb-6">🎯</div>
              <h3 className={`text-3xl font-bold mb-6 ${accent}`}>Our Mission</h3>
              <p className={`leading-relaxed ${textSecondary}`}>Provide exceptional physiotherapy combining clinical excellence with compassionate care, helping individuals achieve optimal physical function and enhanced quality of life.</p>
            </Card>
            <Card className={`${cardBg} border border-t-4 border-t-purple-800`}>
              <div className="text-5xl mb-6">👁️</div>
              <h3 className={`text-3xl font-bold mb-6 ${accent}`}>Our Vision</h3>
              <p className={`leading-relaxed ${textSecondary}`}>Be the leading physiotherapy center, setting standards for clinical excellence, patient satisfaction, and innovative rehabilitation practices.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className={`py-20 ${dark ? 'bg-linear-to-br from-purple-900 to-purple-950' : 'bg-linear-to-br from-purple-600 to-purple-900'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {GOALS.map((g, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20">
                <div className="text-6xl font-bold opacity-50 mb-4">{g.num}</div>
                <h4 className="text-2xl font-bold mb-4">{g.title}</h4>
                <p className="opacity-90">{g.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className={`py-20 max-w-6xl mx-auto px-4`}>
        <h2 className={`text-3xl font-bold text-center mb-12 ${accent}`}>Meet Our Senior Consultant</h2>
        <div className={`rounded-3xl shadow-2xl overflow-hidden ${dark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="grid md:grid-cols-3 gap-0">
            <img className="w-full h-full object-cover aspect-square md:aspect-auto" src="/src/assets/images/Doctor.jpg" alt="Dr. Shivam Sharma" />
            <div className="md:col-span-2 p-8">
              <h3 className={`text-4xl font-bold mb-2 ${accent}`}>Dr. Shivam Sharma</h3>
              <div className={`text-xl font-semibold mb-6 ${dark ? 'text-purple-300' : 'text-purple-800'}`}>Senior Physiotherapist & Clinical Director</div>
              <p className={`mb-6 text-justify ${textSecondary}`}>Distinguished physiotherapist with 15+ years of clinical experience in musculoskeletal and neurological rehabilitation.</p>
              <div className="space-y-4">
                {[
                  { label: 'Qualifications', text: 'MPT, BPT, Certified Manual Therapist' },
                  { label: 'Specializations', text: 'Sports Injury, Spinal Disorders, Post-Surgical Rehab' },
                  { label: 'Experience', text: '15+ years of clinical practice' },
                  { label: 'Achievements', text: 'Excellence in Clinical Practice Award 2022' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className={`mt-1 flex shrink-0 ${accent}`} />
                    <div>
                      <strong className={dark ? 'text-white' : 'text-gray-800'}>{item.label}:</strong>
                      <span className={`ml-2 ${textSecondary}`}>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className={`py-20 ${dark ? 'bg-gray-900' : 'bg-gray-900'} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-7xl mb-6">🏛️</div>
            <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">R.P. Pansari Jan Seva Trust</h2>
            <p className="text-xl opacity-80">Founded on principles of service and community welfare</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'About the Trust', content: 'Established in 2005 to provide quality healthcare. Operates multiple facilities serving underprivileged communities.' },
              { title: 'Community Impact', content: 'Served 50,000+ patients through healthcare initiatives. Conducted 200+ health camps in underserved areas.' },
              { title: 'Trust Objectives', content: 'Provide affordable healthcare, establish wellness facilities, conduct awareness programs, support medical education.' },
              { title: 'Future Initiatives', content: 'Mobile physiotherapy units, research wings, vocational training, educational partnerships.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
                <h4 className="text-2xl font-bold text-purple-400 mb-4">{item.title}</h4>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`py-20 max-w-6xl mx-auto px-4`}>
        <h2 className={`text-3xl font-bold text-center mb-12 ${accent}`}>Our Specialized Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <Card key={i} className={`${dark ? 'bg-linear-to-br from-gray-700 to-gray-600' : 'bg-linear-to-br from-gray-50 to-gray-100'} text-center`}>
              <div className="text-6xl mb-4">{s.icon}</div>
              <h4 className={`text-xl font-bold mb-3 ${accent}`}>{s.title}</h4>
              <p className={`text-sm ${textSecondary}`}>{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={`py-20 ${dark ? 'bg-linear-to-r from-purple-900 to-purple-800' : 'bg-linear-to-r from-purple-600 to-purple-800'} text-white`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((v, i) => (
              <div key={i} className="text-center bg-white/10 backdrop-blur-lg p-8 rounded-xl">
                <div className="text-6xl mb-4">{v.icon}</div>
                <h4 className="text-2xl font-bold mb-3">{v.title}</h4>
                <p className="opacity-90">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-20 max-w-6xl mx-auto px-4`}>
        <h2 className={`text-3xl font-bold text-center mb-12 ${accent}`}>Our Impact in Numbers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Card key={i} className={`${cardBg} border text-center`}>
              <div className={`text-5xl font-bold mb-3 ${accent}`}>{s.num}</div>
              <div className={textSecondary}>{s.label}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className={`py-20 max-w-6xl mx-auto px-4`}>
        <h2 className={`text-3xl font-bold text-center mb-12 ${accent}`}>World-Class Facilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {FACILITIES.map((f, i) => (
            <Card key={i} className={`${cardBg} border border-l-4 border-l-purple-600`}>
              <h4 className={`text-xl font-bold mb-3 ${accent}`}>{f.title}</h4>
              <p className={textSecondary}>{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className={`py-20 ${dark ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="space-y-12">
            {TIMELINE.map((t, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-center`}>
                <div className="flex-1" />
                <div className="w-4 h-4 bg-purple-500 rounded-full flex shrink-0" />
                <div className="flex-1">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{t.year}</div>
                    <h4 className="text-xl font-bold mb-2">{t.event}</h4>
                    <p className="text-gray-300">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 ${dark ? 'bg-linear-to-br from-purple-900 to-purple-950' : 'bg-linear-to-br from-purple-600 to-purple-900'} text-white text-center`}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Start Your Recovery Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">Take the first step towards a pain-free, active life.</p>
          <button className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
export default About