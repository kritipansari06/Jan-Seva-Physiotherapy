import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const EquipmentData = {
    keyEquipment: [
        { id: 'electrotherapy', title: 'Electrotherapy Devices', image: '/public/images/Therapies/EQP.png', description: 'Includes <strong>TENS, IFT, Ultrasound therapy units, NMES, and Laser machines</strong>. Use electrical currents, sound waves, or light to reduce pain, activate weak muscles, and promote tissue healing.' },
        { id: 'exercise', title: 'Exercise & Strengthening Equipment', image: '/images/equipments/exercise.jpg', description: 'Features <strong>resistance bands, dumbbells, medicine balls, ankle weights, physioballs, and pulley systems</strong>. Rebuild strength, flexibility, endurance, and joint stability during rehabilitation.' },
        { id: 'mobility', title: 'Mobility Support Equipment', image: '/images/equipments/mobility.jpg', description: 'Includes <strong>walkers, canes, crutches, wheelchairs, orthotic supports, and braces</strong>. Help patients move safely by stabilizing weak joints, reducing strain, and improving balance.' },
        { id: 'manual', title: 'Manual Therapy Tools', image: '/images/equipments/manual-therapy.jpg', description: 'Contains <strong>foam rollers, massage guns, trigger-point tools, cupping sets, and IASTM instruments</strong>. Reduce muscle tension, break adhesions, improve circulation, and support soft-tissue release.' },
        { id: 'cardio', title: 'Cardio-Rehab Machines', image: '/images/equipments/cardio.jpg', description: 'Includes <strong>treadmills, stationary cycles, steppers, and cross-trainers</strong>. Build stamina, cardiovascular fitness, and functional endurance during long-term rehabilitation programs.' },
        { id: 'specialized', title: 'Specialized Treatment Equipment', image: '/images/equipments/specialized.jpg', description: 'Advanced tools including <strong>traction units, shockwave therapy devices, and compression therapy systems</strong>. Provide targeted treatment for complex conditions and accelerate recovery.' }
    ],
    secondaryEquipment: [
        { id: 'electrotherapy-therapeutic', title: 'Electrotherapy Devices (Therapeutic)', description: 'Pain-relief machines such as <strong>TENS, IFT, Ultrasound, and NMES</strong> designed to stimulate nerves, reduce inflammation, and improve muscle activation. Accelerate recovery for both acute and chronic conditions.' },
        { id: 'exercise-strength', title: 'Exercise & Strengthening Equipment (Advanced)', description: 'Tools like <strong>TheraBands, kettlebells, strength tubes, balance boards, and reformers</strong> improve muscle power, flexibility, coordination, and posture. Crucial for restoring full function after injuries or surgery.' },
        { id: 'mobility-assistive', title: 'Mobility Support Equipment (Assistive)', description: 'Assistive devices such as <strong>adjustable walkers, elbow crutches, gait trainers, and supportive braces</strong> used to aid walking, protect healing tissues, and promote safe movement during rehabilitation.' },
        { id: 'manual-therapy', title: 'Manual Therapy Tools (Clinical)', description: 'Equipment like <strong>fascia tools, massage rollers, silicon cups, and percussive devices</strong> that assist therapists in reducing stiffness, releasing tight fascia, and improving soft-tissue mobility.' }
    ],
    advancedEquipment: [
        { id: 'electrotherapy-clinical', title: 'Electrotherapy Devices', image: '/images/equipments/electrotherapy-clinical.jpg', description: 'Therapeutic systems such as <strong>muscle stimulators, ultrasound units, laser therapy devices, and diathermy machines</strong> used to control pain, increase blood flow, and assist injured muscles in regaining function.' },
        { id: 'exercise-functional', title: 'Exercise & Strengthening Equipment', image: '/images/equipments/exercise-functional.jpg', description: 'Functional tools like <strong>resistance machines, wall pulleys, balance cushions, wobble boards, and core-training tools</strong> that enhance stability, correct imbalances, and support safe return to physical activity.' },
        { id: 'mobility-daily', title: 'Mobility Support Equipment', image: '/images/equipments/mobility-daily.jpg', description: 'Daily-use supports including <strong>walking sticks, tripod canes, wheelchairs, knee braces, ankle supports, and orthotic inserts</strong> that help maintain mobility and protect joints during the healing phase.' },
        { id: 'manual-recovery', title: 'Manual Therapy Tools', image: '/images/equipments/manual-recovery.jpg', description: 'Recovery aids such as <strong>hot/cold packs, massage sticks, handheld rollers, and IASTM blades</strong> that complement manual techniques by easing muscle tension and improving tissue quality.' },
        { id: 'cardio-lowimpact', title: 'Cardio-Rehab Machines', image: '/images/equipments/cardio-lowimpact.jpg', description: 'Low-impact devices like <strong>recumbent bikes, air bikes, and compact step machines</strong> that maximize cardiovascular training while reducing stress on joints, ideal for rehabilitation and wellness.' },
        { id: 'assessment-tools', title: 'Assessment & Monitoring Tools', image: '/images/equipments/assessment-tools.jpg', description: 'Clinical measurement devices including <strong>goniometers, dynamometers, posture analyzers, and range-of-motion tools</strong> that help track progress, measure improvements, and ensure optimal treatment outcomes.' }
    ]
};

const Equipment = () => {
    const { isDarkMode } = useTheme();
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);
    const [selectedBenefit, setSelectedBenefit] = useState('recovery');
    const [selectedImage, setSelectedImage] = useState(null);

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        recovery: { icon: '🎯', title: 'Faster Recovery', desc: 'Advanced equipment accelerates healing and tissue repair' },
        precision: { icon: '🔬', title: 'Precision Treatment', desc: 'Target specific areas with specialized therapeutic devices' },
        safety: { icon: '🛡️', title: 'Safe Rehabilitation', desc: 'Support systems ensure safe movement during recovery' },
        outcomes: { icon: '⭐', title: 'Better Outcomes', desc: 'State-of-the-art equipment for optimal rehabilitation results' }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}>
                    <button 
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close">
                    </button>
                    <img src={selectedImage} alt="Enlarged view" 
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}/>
                </div>
            )}

            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    जन सेवा फिज़ियो सेंटर — Equipment & Facilities
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Our center is equipped with state-of-the-art rehabilitation and therapeutic equipment designed to provide the highest quality care.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🎯 Equipment Advantages
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center mb-6">
                        {Object.keys(benefitsData).map((key) => (
                            <button key={key} onClick={() => setSelectedBenefit(key)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    selectedBenefit === key
                                        ? 'bg-purple-600 text-white shadow-lg'
                                        : isDarkMode
                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}>
                                <span className="text-xl">{benefitsData[key].icon}</span>
                                {benefitsData[key].title}
                            </button>
                        ))}
                    </div>
                    <div className={`p-6 rounded-xl text-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {benefitsData[selectedBenefit].desc}
                        </p>
                    </div>
                </section>

                {/* Equipment Section */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🏥 Electrotherapy, Exercise & Mobility Equipment
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Comprehensive range of therapeutic devices and training equipment for effective rehabilitation
                    </p>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {EquipmentData.keyEquipment.map((equipment) => (
        <div key={equipment.id} 
             // 1. Force cards to be equal height in a row
             className={`flex flex-col h-full rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            
            {/* 2. Fixed aspect ratio container (16:9) prevents vertical stretching on mobile */}
            <div className="w-full aspect-video overflow-hidden bg-gray-200">
                <img 
                    src={equipment.image} 
                    alt={equipment.title}
                    // 3. object-cover keeps the image proportioned while filling the box
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedImage(equipment.image)}
                />
            </div>

            {/* 4. flex-grow pushes the content to fill the card height */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {equipment.title}
                </h3>
                <p className={`flex-grow ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                   dangerouslySetInnerHTML={createMarkup(equipment.description)} />
            </div>
        </div>
    ))}
</div>

                    {/* Accordion */}
                    <div className={`rounded-xl p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Therapeutic Devices, Strength Tools & Support Systems
                        </h3>
                        {EquipmentData.secondaryEquipment.map((equipment) => (
                            <div key={equipment.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <button onClick={() => toggleAccordion(equipment.id)}
                                    className={`w-full text-left p-4 font-semibold flex justify-between items-center hover:text-purple-600 transition-colors ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-900'
                                    }`}>
                                    {equipment.title}
                                    <span className="text-2xl">{activeSecondaryId === equipment.id ? '−' : '+'}</span>
                                </button>
                                {activeSecondaryId === equipment.id && (
                                    <div className={`p-4 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                                        <p dangerouslySetInnerHTML={createMarkup(equipment.description)} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advanced Equipment */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ✨ Clinical Devices, Functional Training Tools & Rehab Aids
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {EquipmentData.advancedEquipment.map((equipment) => (
                            <div key={equipment.id}
                                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                                    isDarkMode
                                        ? 'bg-gray-800 border border-gray-700 hover:shadow-2xl'
                                        : 'bg-white border border-gray-200 hover:shadow-xl'
                                }`}>
                                {/* Image Container */}
                                <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-200 cursor-pointer">
                                    <img src={equipment.image} alt={equipment.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                        onClick={() => setSelectedImage(equipment.image)}/>
                                </div>
                                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {equipment.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                                    dangerouslySetInnerHTML={createMarkup(equipment.description)} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact Section */}
                <section className={`rounded-2xl p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🔬 Quality Equipment for Better Care
                    </h2>
                    <div className={`p-6 rounded-xl border-l-4 border-purple-600 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-lg italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            "जन सेवा फिज़ियो सेंटर is committed to providing the best rehabilitation equipment and facilities. Our investment in advanced technology ensures that every patient receives world-class treatment."
                        </p>
                        <p className="text-right text-purple-600 font-bold mt-4">— Excellence in every detail</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Equipment;