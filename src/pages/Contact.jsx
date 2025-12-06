import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, Calendar, CheckCircle2, ArrowRight, Navigation } from 'lucide-react';

const contactInfo = {
    headerText: "Get in Touch With Our Care Team",
    subText: "We are here to answer your questions and schedule appointments.",
    address: "123 Health Ave, Suite 400, MedCity, 54321",
    phoneNumber: "+1 (800) 555-0199",
    email: "appointments@healthclinic.com",
    whatsAppLink: "https://wa.me/18005550199",
    facebookLink: "https://www.facebook.com/HealthClinic",
    instagramLink: "https://www.instagram.com/HealthClinic",
    bookingLink: "/book-consultation", 
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2505504786483!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858063bc97fe1f%3A0xa64552438848a855!2sSan%20Francisco%20General%20Hospital%20and%20Trauma%20Center!5e0!3m2!1sen!2sus!4v1701547200000!5m2!1sen!2sus"
};

const ContactCard = ({ icon: Icon, title, buttonText, href, target = '_self', accentColor = 'teal' }) => {
    const colorClasses = {
        teal: 'border-teal-400 hover:bg-teal-50 text-teal-600',
        blue: 'border-blue-400 hover:bg-blue-50 text-blue-600',
        green: 'border-green-400 hover:bg-green-50 text-green-600',
        pink: 'border-pink-400 hover:bg-pink-50 text-pink-600',
        purple: 'border-purple-400 hover:bg-purple-50 text-purple-600'
    };

    const iconColors = {
        teal: 'bg-teal-100 text-teal-600 border-teal-300',
        blue: 'bg-blue-100 text-blue-600 border-blue-300',
        green: 'bg-green-100 text-green-600 border-green-300',
        pink: 'bg-pink-100 text-pink-600 border-pink-300',
        purple: 'bg-purple-100 text-purple-600 border-purple-300'
    };

    const buttonColors = {
        teal: 'border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white',
        blue: 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white',
        green: 'border-green-500 text-green-600 hover:bg-green-500 hover:text-white',
        pink: 'border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white',
        purple: 'border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white'
    };

    return (
        <div className="flex justify-center h-full">
            <a
                href={href}
                target={target}
                className={`group flex flex-col items-center justify-center p-6 border-2 rounded-2xl transition-all duration-300 bg-white w-full shadow-md hover:shadow-xl transform hover:-translate-y-1 ${colorClasses[accentColor]}`}>
                
                <div className={`relative p-4 rounded-full border-2 mb-4 group-hover:scale-110 transition-transform duration-300 ${iconColors[accentColor]}`}>
                    <Icon className="w-8 h-8" />
                </div>

                <p className="text-gray-800 font-semibold text-base mb-4 text-center">
                    {title}
                </p>
                
                <span className={`px-6 py-2 text-sm font-medium rounded-lg border-2 transition-all duration-300 ${buttonColors[accentColor]}`}>
                    {buttonText}
                </span>
            </a>
        </div>
    );
};

const Contact = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-teal-50">
            {/* Hero Header */}
            <header className="border-4 border-teal-400 mx-4 md:mx-8 mt-8 rounded-3xl py-12 text-center bg-linear-to-br from-teal-50 to-cyan-50 shadow-xl">
                <div className="container mx-auto px-4">
                    <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
                        <MessageCircle className="w-10 h-10 text-teal-600" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-800">
                        {contactInfo.headerText}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {contactInfo.subText}
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                {/* Contact Methods Section */}
                <section className="mb-12">
                    <div className="border-4 border-gray-300 rounded-3xl p-6 md:p-10 bg-white shadow-xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                            Choose Your <span className="text-teal-600">Contact Method</span>
                        </h2>

                        {/* Top Row: Call and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <ContactCard 
                                icon={Phone} 
                                title="Call Now"
                                buttonText="Call Now"
                                href={`tel:${contactInfo.phoneNumber}`}
                                accentColor="teal"
                            />

                            <ContactCard 
                                icon={Mail} 
                                title="Send Mail"
                                buttonText="Send Mail"
                                href={`mailto:${contactInfo.email}`}
                                accentColor="blue"
                            />
                        </div>
                        
                        {/* Bottom Row: Social Media */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <ContactCard 
                                icon={Send} 
                                title="WhatsApp"
                                buttonText="Message Us"
                                href={contactInfo.whatsAppLink}
                                target="_blank"
                                accentColor="green"
                            />

                            <ContactCard 
                                icon={MessageCircle} 
                                title="Instagram"
                                buttonText="Message Us"
                                href={contactInfo.instagramLink}
                                target="_blank"
                                accentColor="pink"
                            />

                            <ContactCard 
                                icon={MessageCircle} 
                                title="Facebook"
                                buttonText="Message Us"
                                href={contactInfo.facebookLink}
                                target="_blank"
                                accentColor="purple"
                            />
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="mb-12">
                    <div className="border-4 border-gray-300 rounded-3xl overflow-hidden bg-white shadow-xl">
                        {/* Map Header */}
                        <div className="bg-linear-to-r from-teal-500 to-cyan-500 p-8 text-center">
                            <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Visit Our Clinic</h2>
                            <p className="text-white text-lg opacity-90 mb-4">{contactInfo.address}</p>
                            
                            {/* Get Directions Button */}
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                <Navigation className="w-5 h-5" />
                                Get Directions
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Map Embed */}
                        <div className="h-[400px] md:h-[500px] bg-gray-100 relative">
                            <iframe
                                title="Clinic Location Map"
                                src={contactInfo.mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Operating Hours Below Map */}
                        <div className="p-6 bg-linear-to-br from-gray-50 to-teal-50 border-t-2 border-gray-200">
                            <div className="max-w-4xl mx-auto">
                                <div className="flex items-center justify-center mb-4">
                                    <Clock className="w-6 h-6 text-teal-600 mr-2" />
                                    <h3 className="text-xl font-bold text-gray-800">Operating Hours</h3>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div className="bg-white p-4 rounded-xl border-2 border-teal-200 shadow-sm">
                                        <p className="font-semibold text-gray-700 mb-1">Monday - Friday</p>
                                        <p className="text-teal-600 font-bold">9:00 AM - 5:00 PM</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border-2 border-orange-200 shadow-sm">
                                        <p className="font-semibold text-gray-700 mb-1">Saturday</p>
                                        <p className="text-orange-600 font-bold">Emergency Only</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border-2 border-red-200 shadow-sm">
                                        <p className="font-semibold text-gray-700 mb-1">Sunday</p>
                                        <p className="text-red-600 font-bold">Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="border-4 border-gray-300 rounded-3xl p-8 md:p-10 bg-white shadow-xl">
                    <div className="text-center mb-8">
                        <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
                            <MessageCircle className="w-10 h-10 text-teal-600" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                            Frequently Asked <span className="text-teal-600">Questions</span>
                        </h3>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Quick answers to common questions about our services
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {/* FAQ 1 */}
                        <details className="group bg-linear-to-r from-teal-50 to-cyan-50 p-5 rounded-xl border-2 border-teal-200 hover:shadow-md transition-all duration-300">
                            <summary className="cursor-pointer font-semibold text-gray-800 text-lg flex justify-between items-center">
                                Do I need an appointment?
                                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 pl-2">
                                Yes, we recommend scheduling an appointment to ensure you receive prompt attention. Walk-ins are welcome based on availability.
                            </p>
                        </details>

                        {/* FAQ 2 */}
                        <details className="group bg-linear-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border-2 border-blue-200 hover:shadow-md transition-all duration-300">
                            <summary className="cursor-pointer font-semibold text-gray-800 text-lg flex justify-between items-center">
                                What should I bring to my first visit?
                                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 pl-2">
                                Please bring any medical records, previous X-rays or reports, a valid ID, and comfortable clothing suitable for physical examination.
                            </p>
                        </details>

                        {/* FAQ 3 */}
                        <details className="group bg-linear-to-r from-green-50 to-teal-50 p-5 rounded-xl border-2 border-green-200 hover:shadow-md transition-all duration-300">
                            <summary className="cursor-pointer font-semibold text-gray-800 text-lg flex justify-between items-center">
                                Do you accept insurance?
                                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 pl-2">
                                We work with most major insurance providers. Please contact us with your insurance details, and we'll verify your coverage.
                            </p>
                        </details>

                        {/* FAQ 4 */}
                        <details className="group bg-linear-to-r from-purple-50 to-pink-50 p-5 rounded-xl border-2 border-purple-200 hover:shadow-md transition-all duration-300">
                            <summary className="cursor-pointer font-semibold text-gray-800 text-lg flex justify-between items-center">
                                How long does a typical session last?
                                <span className="text-purple-600 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-3 text-gray-600 pl-2">
                                A typical physiotherapy session lasts 45-60 minutes. Your first consultation may take longer for a comprehensive assessment.
                            </p>
                        </details>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 pt-6 border-t-2 border-gray-200 text-center">
                        <p className="text-gray-700 font-medium mb-4">
                            Still have questions? We're here to help!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href={`tel:${contactInfo.phoneNumber}`} className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg">
                                <Phone className="w-5 h-5" />
                                Call Us Now
                            </a>
                            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300">
                                <Mail className="w-5 h-5" />
                                Send Email
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;