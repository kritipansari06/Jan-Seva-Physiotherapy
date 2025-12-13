import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, Navigation, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CONTACT_INFO = {
  address: '123 Health Ave, Suite 400, MedCity, 54321',
  phone: '+1 (800) 555-0199',
  email: 'appointments@healthclinic.com',
  whatsapp: 'https://wa.me/18005550199',
  facebook: 'https://www.facebook.com/HealthClinic',
  instagram: 'https://www.instagram.com/HealthClinic',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2505504786483!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858063bc97fe1f%3A0xa64552438848a855!2sSan%20Francisco%20General%20Hospital!5e0!3m2!1sen!2sus!4v1701547200000!5m2!1sen!2sus',
};

const CONTACTS = [
  { icon: Phone, title: 'Call Now', href: `tel:${CONTACT_INFO.phone}`, text: CONTACT_INFO.phone, color: 'teal' },
  { icon: Mail, title: 'Send Mail', href: `mailto:${CONTACT_INFO.email}`, text: CONTACT_INFO.email, color: 'blue' },
  { icon: Send, title: 'WhatsApp', href: CONTACT_INFO.whatsapp, text: 'Message Us', color: 'green', external: true },
  { icon: MessageCircle, title: 'Instagram', href: CONTACT_INFO.instagram, text: 'Message Us', color: 'pink', external: true },
  { icon: MessageCircle, title: 'Facebook', href: CONTACT_INFO.facebook, text: 'Message Us', color: 'purple', external: true },
];

const HOURS = [
  { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM', color: 'teal' },
  { day: 'Saturday', time: 'Emergency Only', color: 'orange' },
  { day: 'Sunday', time: 'Closed', color: 'red' },
];

const FAQS = [
  { q: 'Do I need an appointment?', a: 'Yes, we recommend scheduling an appointment. Walk-ins are welcome based on availability.' },
  { q: 'What should I bring to my first visit?', a: 'Please bring medical records, previous X-rays, valid ID, and comfortable clothing.' },
  { q: 'Do you accept insurance?', a: 'We work with most major insurance providers. Contact us to verify your coverage.' },
  { q: 'How long does a typical session last?', a: 'A typical session lasts 45-60 minutes. First consultation may take longer for assessment.' },
];

const ContactCard = ({ icon: Icon, title, href, text, color, external, isDarkMode }) => {
  const colors = { teal: 'teal', blue: 'blue', green: 'green', pink: 'pink', purple: 'purple' };
  const bgColor = isDarkMode ? `bg-${color}-900/20 border-${color}-600` : `bg-${color}-50 border-${color}-200`;
  const textColor = isDarkMode ? `text-${color}-400` : `text-${color}-600`;

  return (
    <a
      href={href}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`group flex flex-col items-center justify-center p-6 border-2 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} w-full shadow-md hover:shadow-xl transform hover:-translate-y-1 ${bgColor}`}
    >
      <div className={`relative p-4 rounded-full border-2 mb-4 group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? `bg-${color}-900/40 border-${color}-600` : `bg-${color}-100 border-${color}-300`}`}>
        <Icon className={`w-8 h-8 ${textColor}`} />
      </div>
      <p className={`font-semibold text-base mb-4 text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{title}</p>
      <span className={`px-6 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300 border-${color}-500 ${textColor} hover:bg-${color}-500 hover:text-white`}>
        {text}
      </span>
    </a>
  );
};

const Contact = () => {
  const { isDarkMode } = useTheme();
  const dark = isDarkMode;

  return (
    <div className={`min-h-screen ${dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition`}>
      {/* Header */}
      <header className={`border-4 ${dark ? 'border-teal-600 bg-gray-800' : 'border-teal-400 bg-teal-50'} mx-4 md:mx-8 mt-8 rounded-3xl py-12 text-center shadow-xl`}>
        <div className="container mx-auto px-4">
          <div className={`inline-block p-3 ${dark ? 'bg-teal-900/20' : 'bg-teal-100'} rounded-full mb-4`}>
            <MessageCircle className={`w-10 h-10 ${dark ? 'text-teal-400' : 'text-teal-600'}`} />
          </div>
          <h1 className={`text-3xl md:text-5xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-800'}`}>
            Get in Touch With Our Care Team
          </h1>
          <p className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            We are here to answer your questions and schedule appointments.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Contact Methods */}
        <section className="mb-12">
          <div className={`border-4 ${dark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-3xl p-6 md:p-10 shadow-xl`}>
            <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${dark ? 'text-white' : 'text-gray-800'}`}>
              Choose Your <span className={dark ? 'text-teal-400' : 'text-teal-600'}>Contact Method</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {CONTACTS.slice(0, 2).map((c, i) => (
                <ContactCard key={i} {...c} isDarkMode={dark} />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {CONTACTS.slice(2).map((c, i) => (
                <ContactCard key={i} {...c} isDarkMode={dark} />
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-12">
          <div className={`border-4 ${dark ? 'border-gray-700' : 'border-gray-300'} rounded-3xl overflow-hidden bg-white shadow-xl`}>
            <div className="bg-linear-to-r from-teal-500 to-cyan-500 p-8 text-center">
              <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Visit Our Clinic</h2>
              <p className="text-white text-lg opacity-90 mb-4">{CONTACT_INFO.address}</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="h-[400px] md:h-[500px] bg-gray-100">
              <iframe title="Clinic Location" src={CONTACT_INFO.mapUrl} width="100%"
                height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              />
            </div>

            {/* Hours */}
            <div className={`p-6 ${dark ? 'bg-gray-800 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'}`}>
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Clock className={`w-6 h-6 mr-2 ${dark ? 'text-teal-400' : 'text-teal-600'}`} />
                  <h3 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>Operating Hours</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  {HOURS.map((h, i) => (
                    <div key={i} className={`p-4 rounded-xl border-2 shadow-sm ${dark ? `bg-gray-700 border-${h.color}-600` : `bg-white border-${h.color}-200`}`}>
                      <p className={`font-semibold mb-1 ${dark ? `text-${h.color}-400` : `text-gray-700`}`}>{h.day}</p>
                      <p className={`font-bold ${dark ? `text-${h.color}-300` : `text-${h.color}-600`}`}>{h.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className={`border-4 ${dark ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-3xl p-8 md:p-10 shadow-xl`}>
          <div className="text-center mb-8">
            <div className={`inline-block p-3 ${dark ? 'bg-teal-900/20' : 'bg-teal-100'} rounded-full mb-4`}>
              <MessageCircle className={`w-10 h-10 ${dark ? 'text-teal-400' : 'text-teal-600'}`} />
            </div>
            <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-800'}`}>
              Frequently Asked <span className={dark ? 'text-teal-400' : 'text-teal-600'}>Questions</span>
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <details key={i} className={`group p-5 rounded-xl transition-all duration-300 ${dark ? 'bg-teal-900/20 border-2 border-teal-600' : 'bg-teal-50 border-2 border-teal-200'}`}>
                <summary className={`cursor-pointer font-semibold text-lg flex justify-between items-center ${dark ? 'text-white' : 'text-gray-800'}`}>
                  {faq.q}
                  <span className={`${dark ? 'text-teal-400' : 'text-teal-600'} group-open:rotate-180 transition-transform`}>▼</span>
                </summary>
                <p className={`mt-3 pl-2 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{faq.a}</p>
              </details>
            ))}
          </div>

          <div className={`mt-8 pt-6 border-t-2 ${dark ? 'border-gray-700' : 'border-gray-200'} text-center`}>
            <p className={`font-medium mb-4 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Still have questions? We're here to help!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all border-2 ${dark ? 'border-teal-600 text-teal-400 hover:bg-teal-900/20' : 'border-teal-600 text-teal-600 hover:bg-teal-50'}`}>
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default Contact;