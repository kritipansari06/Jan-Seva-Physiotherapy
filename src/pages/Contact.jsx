import React from 'react';
import {
    Phone,
    Mail,
    MessageSquare,
    MapPin,
    Calendar,
    Clock,
} from 'lucide-react'; // Using lucide-react for professional icons

// Define the core information for easy updates
const contactInfo = {
    headerText: "Get in Touch With Our Care Team",
    subText: "We are here to answer your questions and schedule appointments.",
    address: "123 Health Ave, Suite 400, MedCity, 54321",
    phoneNumber: "+1 (800) 555-0199",
    email: "appointments@healthclinic.com",
    facebookLink: "https://www.facebook.com/HealthClinic",
    twitterLink: "https://www.twitter.com/HealthClinic",
    instagramLink: "https://www.instagram.com/HealthClinic",
    bookingLink: "/book-consultation", // Placeholder for a separate booking page
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2505504786483!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858063bc97fe1f%3A0xa64552438848a855!2sSan%20Francisco%20General%20Hospital%20and%20Trauma%20Center!5e0!3m2!1sen!2sus!4v1701547200000!5m2!1sen!2sus"
};

// Component for the reusable Contact Card/Button
const ContactCard = ({ icon: Icon, title, description, href, target = '_self' }) => (
    <a
        href={href}
        target={target}
        className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 bg-white min-w-[150px] sm:min-w-[200px]"
    >
        <Icon className="w-8 h-8 text-teal-600 mb-2" />
        <p className="text-gray-900 font-semibold text-lg">{title}</p>
        <p className="text-gray-500 text-sm mt-1 text-center">{description}</p>
    </a>
);

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <header className="bg-teal-600 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                        {contactInfo.headerText}
                    </h1>
                    <p className="text-xl font-light opacity-90">
                        {contactInfo.subText}
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                {/* Contact Actions Grid (The Core Wireframe Part) */}
                <section className="mb-12">
                    <div className="p-8 border border-gray-100 rounded-xl shadow-2xl bg-white">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Direct Contact Options
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
                            {/* Call Now */}
                            <div className="col-span-2 lg:col-span-2 flex justify-center">
                                <ContactCard
                                    icon={Phone}
                                    title="Call Now"
                                    description="Speak to a nurse or receptionist"
                                    href={`tel:${contactInfo.phoneNumber}`}
                                />
                            </div>

                            {/* Send Mail */}
                            <div className="col-span-2 lg:col-span-2 flex justify-center">
                                <ContactCard
                                    icon={Mail}
                                    title="Send Mail"
                                    description="Email for general inquiries"
                                    href={`mailto:${contactInfo.email}`}
                                />
                            </div>

                            {/* Booking/Consultation Button - Enhanced for medical context */}
                            <div className="col-span-2 lg:col-span-2 flex justify-center">
                                <a
                                    href={contactInfo.bookingLink}
                                    className="flex flex-col items-center justify-center p-6 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 min-w-[150px] sm:min-w-[200px]"
                                >
                                    <Calendar className="w-8 h-8 mb-2" />
                                    <p className="font-semibold text-lg">Book Now</p>
                                    <p className="text-sm mt-1 opacity-90 text-center">Schedule your consultation</p>
                                </a>
                            </div>

                            {/* Social Media Message Options (Messaging Icons) */}
                            {/* I combined the 3 "Message Us" boxes into a row of professional social links */}
                            <div className="col-span-2 flex justify-center">
                                <ContactCard
                                    icon={MessageSquare}
                                    title="Facebook"
                                    description="Message us on Meta"
                                    href={contactInfo.facebookLink}
                                    target="_blank"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center">
                                <ContactCard
                                    icon={MessageSquare}
                                    title="Twitter"
                                    description="Send a Quick Tweet"
                                    href={contactInfo.twitterLink}
                                    target="_blank"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center">
                                <ContactCard
                                    icon={MessageSquare}
                                    title="Instagram"
                                    description="DM us on Instagram"
                                    href={contactInfo.instagramLink}
                                    target="_blank"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Details & Map Section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    {/* Operating Hours and Location Details */}
                    <div className="lg:col-span-1 p-6 bg-white border border-gray-100 rounded-xl shadow-lg h-full">
                        <h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center">
                            <Clock className="w-6 h-6 mr-2" /> Operating Hours
                        </h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex justify-between">
                                <span className="font-medium">Monday - Friday:</span>
                                <span>9:00 AM - 5:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Saturday:</span>
                                <span>9:00 AM - 12:00 PM (Emergency Only)</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-medium">Sunday:</span>
                                <span>Closed</span>
                            </li>
                            <li className="pt-4 border-t mt-4 border-gray-100">
                                <p className="text-sm font-semibold text-red-500">
                                    For medical emergencies, please dial 911.
                                </p>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold text-teal-600 mt-6 mb-3 flex items-center">
                            <MapPin className="w-5 h-5 mr-2" /> Location
                        </h3>
                        <p className="text-gray-700 font-medium">
                            {contactInfo.address}
                        </p>
                        <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 hover:underline text-sm mt-1 inline-block"
                        >
                            Get Directions
                        </a>
                    </div>

                    {/* Embedded Map Section */}
                    <div className="lg:col-span-2 border border-gray-100 rounded-xl shadow-lg overflow-hidden">
                        <h2 className="sr-only">Clinic Location Map</h2>
                        <iframe
                            title="Clinic Location Map"
                            src={contactInfo.mapEmbedUrl}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </section>
            </main>

            {/* Footer/Bottom Text Area */}
            <footer className="bg-gray-800 text-white text-center py-6 mt-12">
                <p className="text-lg font-light">
                    Any other details necessary other than for or book consultation
                </p>
                <p className="text-sm opacity-75 mt-1">
                    Please visit our FAQ page for answers to common questions about billing and insurance.
                </p>
            </footer>
        </div>
    );
};

export default Contact;