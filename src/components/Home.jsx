import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import hero from '../assets/images/physio2.png';
import t1 from '../assets/images/testimonial1.png';
import t2 from '../assets/images/testimonial2.png';
import t3 from '../assets/images/testimonial3.png';
import t4 from '../assets/images/testimonial4.jpg';
import t5 from '../assets/images/testimonial5.jpg';
import t6 from '../assets/images/testimonial6.jpg';

const TESTIMONIALS = [{ id: 1, img: t1 }, { id: 2, img: t2 }, { id: 3, img: t3 }, { id: 4, img: t4 }, { id: 5, img: t5 }, { id: 6, img: t6 }];

const FEATURES = [
  { title: 'Manual Therapy Experts', desc: 'Hands-on techniques for immediate pain relief and mobility improvement.', icon: '🤲' },
  { title: 'Personalized Programs', desc: 'Custom recovery plans tailored specifically to your body and goals.', icon: '📋' },
  { title: 'Modern Equipment', desc: 'Utilizing the latest technology for effective and accelerated rehabilitation.', icon: '⚡' },
];

const SERVICES = [
  { title: 'Orthopedic Rehab', desc: 'Targeted therapy for joint and bone injuries.', link: 'View Therapies' },
  { title: 'Sports Injury', desc: 'Accelerated recovery for athletes of all levels.', link: 'View Rehabs' },
  { title: 'Pain Management', desc: 'Non-pharmacological approaches to reduce pain.', link: 'View Equipment' },
];

const Btn = ({ children, variant = 'solid', to }) => (
  <Link to={to} className={`px-8 py-3 uppercase font-semibold tracking-wider rounded-lg shadow-lg transition ${variant === 'solid' ? 'bg-teal-600 text-white hover:bg-teal-700' : 'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white'}`}>
    {children}
  </Link>
);

const Modal = ({ img, onClose }) => (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <button className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300" onClick={onClose}>×</button>
    <img src={img} alt="View" className="max-w-full max-h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
  </div>
);

const Home = () => {
  const { isDarkMode } = useTheme();
  const [selected, setSelected] = useState(null);
  const dark = isDarkMode;

  const accent = dark ? 'text-teal-400' : 'text-teal-600';
  const bg = dark ? 'bg-gray-900' : 'bg-white';
  const secondary = dark ? 'bg-gray-800' : 'bg-gray-50';

  return (
    <div className={bg}>
      {selected && <Modal img={selected} onClose={() => setSelected(null)} />}

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center p-4" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className={`absolute inset-0 ${dark ? 'bg-gray-900/70' : 'bg-gray-50/65'}`} />
        <div className="relative z-10 max-w-4xl">
          <p className={`text-xl sm:text-2xl font-light mb-4 ${accent} uppercase tracking-widest`}>Rediscover Movement. Live Pain-Free.</p>
          <h1 className={`text-4xl sm:text-6xl font-extrabold mb-6 leading-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
            Comprehensive <span className={accent}>Physiotherapy</span> and Rehabilitation Centre
          </h1>
          <p className={`text-lg sm:text-xl mb-10 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
            Expert care and personalized treatment programs for long-term health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Btn to="/contact">Connect with us</Btn>
            <Btn variant="outline" to="/about">Learn More</Btn>
          </div>
        </div>
      </section>

      <hr className={`border-t ${dark ? 'border-gray-700' : 'border-gray-300'}`} />

      {/* Services */}
      <section className={`py-16 sm:py-24 p-4 ${secondary}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>Our Specialized <span className={accent}>Services</span></h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${dark ? 'text-gray-300' : 'text-gray-600'}`}>From injury recovery to preventative care, our expert team offers a wide range of services.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {SERVICES.map((s, i) => (
              <div key={i} className={`p-6 rounded-xl shadow-lg hover:shadow-teal-400/30 transition border ${dark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                <h3 className={`text-2xl font-semibold mb-3 ${accent}`}>{s.title}</h3>
                <p className={dark ? 'text-gray-300' : 'text-gray-700'}>{s.desc}</p>
                <Link to="/treatments" className={`text-sm font-medium mt-4 inline-block ${accent} hover:opacity-80`}>{s.link} →</Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Btn to="/treatments">See All Treatments</Btn>
          </div>
        </div>
      </section>

      <hr className={`border-t ${dark ? 'border-gray-700' : 'border-gray-300'}`} />

      {/* Why Choose Us */}
      <section className={`py-16 sm:py-24 p-4 ${bg}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${dark ? 'text-white' : 'text-gray-900'}`}>Why Choose <span className={accent}>Jan Seva</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {FEATURES.map((f, i) => (
              <div key={i} className={`p-6 rounded-xl border shadow-md hover:shadow-xl transition ${dark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-linear-to-br from-teal-50 to-blue-50'}`}>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-teal-600 text-white text-3xl">{f.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>{f.title}</h3>
                <p className={dark ? 'text-gray-400' : 'text-gray-600'}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className={`border-t ${dark ? 'border-gray-700' : 'border-gray-300'}`} />

      {/* Testimonials */}
      <section className={`py-16 sm:py-24 p-4 text-center ${secondary}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-10 ${dark ? 'text-white' : 'text-gray-900'}`}>Hear From Our <span className={accent}>Clients</span></h2>
          <div className="relative overflow-hidden mb-12">
            <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .marquee { animation: marquee 30s linear infinite; } .marquee:hover { animation-play-state: paused; }`}</style>
            <div className="flex marquee">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="flex shrink-0 w-80 mx-4 cursor-pointer" onClick={() => setSelected(t.img)}>
                  <div className={`rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition ${dark ? 'border border-gray-700' : ''}`}>
                    <img src={t.img} alt="Testimonial" className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Btn to="/testimonials">View All Testimonials</Btn>
          <hr className={`w-24 h-0.5 ${dark ? 'bg-gray-700' : 'bg-gray-300'} mx-auto mt-16`} />
        </div>
      </section>
    </div>
  );
}
export default Home