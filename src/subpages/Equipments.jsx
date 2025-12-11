import React, { useState } from 'react';
// NEW: Import useTheme
import { useTheme } from '../context/ThemeContext';

const EquipmentData = {
    keyEquipment: [
        { 
            id: 'electrotherapy', 
            title: 'Electrotherapy Devices', 
            icon: '⚡',
            description: 'Includes <strong>TENS, IFT, Ultrasound therapy units, NMES, and Laser machines</strong>. Use electrical currents, sound waves, or light to reduce pain, activate weak muscles, and promote tissue healing.' 
        },
        { 
            id: 'exercise', 
            title: 'Exercise & Strengthening Equipment', 
            icon: '💪',
            description: 'Features <strong>resistance bands, dumbbells, medicine balls, ankle weights, physioballs, and pulley systems</strong>. Rebuild strength, flexibility, endurance, and joint stability during rehabilitation.' 
        },
        { 
            id: 'mobility', 
            title: 'Mobility Support Equipment', 
            icon: '🚶',
            description: 'Includes <strong>walkers, canes, crutches, wheelchairs, orthotic supports, and braces</strong>. Help patients move safely by stabilizing weak joints, reducing strain, and improving balance.' 
        },
        { 
            id: 'manual', 
            title: 'Manual Therapy Tools', 
            icon: '🖐️',
            description: 'Contains <strong>foam rollers, massage guns, trigger-point tools, cupping sets, and IASTM instruments</strong>. Reduce muscle tension, break adhesions, improve circulation, and support soft-tissue release.' 
        },
        { 
            id: 'cardio', 
            title: 'Cardio-Rehab Machines', 
            icon: '🏃',
            description: 'Includes <strong>treadmills, stationary cycles, steppers, and cross-trainers</strong>. Build stamina, cardiovascular fitness, and functional endurance during long-term rehabilitation programs.' 
        },
        { 
            id: 'specialized', 
            title: 'Specialized Treatment Equipment', 
            icon: '🔧',
            description: 'Advanced tools including <strong>traction units, shockwave therapy devices, and compression therapy systems</strong>. Provide targeted treatment for complex conditions and accelerate recovery.' 
        }
    ],
    secondaryEquipment: [
        { 
            id: 'electrotherapy-therapeutic', 
            title: 'Electrotherapy Devices (Therapeutic)', 
            description: 'Pain-relief machines such as <strong>TENS, IFT, Ultrasound, and NMES</strong> designed to stimulate nerves, reduce inflammation, and improve muscle activation. Accelerate recovery for both acute and chronic conditions.' 
        },
        { 
            id: 'exercise-strength', 
            title: 'Exercise & Strengthening Equipment (Advanced)', 
            description: 'Tools like <strong>TheraBands, kettlebells, strength tubes, balance boards, and reformers</strong> improve muscle power, flexibility, coordination, and posture. Crucial for restoring full function after injuries or surgery.' 
        },
        { 
            id: 'mobility-assistive', 
            title: 'Mobility Support Equipment (Assistive)', 
            description: 'Assistive devices such as <strong>adjustable walkers, elbow crutches, gait trainers, and supportive braces</strong> used to aid walking, protect healing tissues, and promote safe movement during rehabilitation.' 
        },
        { 
            id: 'manual-advanced', 
            title: 'Manual Therapy Tools (Advanced)', 
            description: 'Equipment like <strong>traction tables, specialized massage chairs, and continuous passive motion (CPM) machines</strong> enhance the effectiveness of manual and hands-on therapy techniques for joint and tissue repair.' 
        }
    ]
};

const createMarkup = (htmlString) => {
    return { __html: htmlString };
};

const Equipment = () => {
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);
    // NEW: Get theme state
    const { isDarkMode } = useTheme();

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    // NEW: Define theme-dependent classes
    const mainBgClass = isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-700';
    const sectionBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const cardBgClass = isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200';
    const cardHoverClass = isDarkMode ? 'hover:bg-gray-600' : 'hover:shadow-lg';
    const headingClass = isDarkMode ? 'text-teal-400' : 'text-teal-600';
    const textClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';

    return (
        <div className={`py-12 ${mainBgClass} min-h-screen`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h1 className={`text-4xl font-extrabold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Advanced Physiotherapy Equipment
                </h1>
                <p className={`text-center max-w-3xl mx-auto mb-10 text-lg ${textClass}`}>
                    Comprehensive range of therapeutic devices and training equipment for effective rehabilitation
                </p>

                <section className={`equipment-section p-8 rounded-xl ${sectionBgClass} shadow-xl mb-12`}>
                    <h2 className={`text-3xl font-semibold mb-8 text-center ${headingClass}`}>
                        Our Key Equipment Categories
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {EquipmentData.keyEquipment.map((equipment) => (
                            <div 
                                className={`p-6 rounded-xl border-t-4 ${cardBgClass} transition-all duration-300 ${cardHoverClass} shadow-md`} 
                                style={{ borderColor: isDarkMode ? '#4ade80' : '#047857' }} // Teal border on top
                                key={equipment.id}>
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`text-4xl ${headingClass}`}>{equipment.icon}</div>
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{equipment.title}</h3>
                                </div>
                                <p className={`${textClass}`}
                                    dangerouslySetInnerHTML={createMarkup(equipment.description)} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className={`faq-section p-8 rounded-xl ${sectionBgClass} shadow-xl mb-12`}>
                    <h2 className={`text-3xl font-semibold mb-8 text-center ${headingClass}`}>
                        Specialized Equipment & Applications
                    </h2>
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {EquipmentData.secondaryEquipment.map((equipment) => (
                            <div key={equipment.id} className={`border rounded-lg overflow-hidden ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <button 
                                    className={`flex justify-between items-center w-full p-4 font-semibold transition duration-200 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'}`}
                                    onClick={() => toggleAccordion(equipment.id)}>
                                    {equipment.title} 
                                    <span className={`text-2xl font-light ${headingClass}`}>{activeSecondaryId === equipment.id ? '−' : '+'}</span>
                                </button>
                                <div className={`px-4 pb-4 transition-all duration-300 ${activeSecondaryId === equipment.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-600'}`}>
                                    <p className="pt-2">{equipment.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <section className="faq-section">
                    <h2 className={`text-3xl font-semibold mb-8 text-center ${headingClass}`}>🔬 Quality Equipment for Better Care</h2>
                    <div className="max-w-3xl mx-auto">
                        <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-800 shadow-teal-500/20' : 'bg-white shadow-lg'}`}>
                            <div className={`text-6xl font-extrabold text-center ${headingClass}`}>"</div>
                            <p className={`text-center text-xl italic mt-2 ${textClass}`}>
                                जन सेवा फिज़ियो सेंटर is committed to providing the best rehabilitation equipment and facilities. Our investment in advanced technology ensures that every patient receives world-class treatment in a comfortable, professional environment.
                            </p>
                            <div className={`text-center font-medium mt-4 ${headingClass}`}>— Excellence in every detail</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Equipment;