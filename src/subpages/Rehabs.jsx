import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const RehabData = {
    keyRehab: [
        { id: 'orthopedic', title: 'Orthopedic Rehabilitation', icon: '🦴', description: 'Recovery from <strong>fractures, ligament tears, joint injuries</strong>, and post-surgical procedures. Restores strength, mobility, balance, and joint stability for pain-free daily activities.' },
        { id: 'neurological', title: 'Neurological Rehabilitation', icon: '🧠', description: 'For <strong>stroke, spinal cord injuries, Parkinson\'s disease</strong>, and brain injuries. Improves coordination, muscle control, balance, and walking ability through neuro-facilitation.' },
        { id: 'sports', title: 'Sports Rehabilitation', icon: '⚽', description: 'Addresses athletic injuries like <strong>sprains, strains, tendonitis</strong>, and muscle tears. Rebuilds strength, improves flexibility, and ensures safe return to peak performance.' },
        { id: 'postsurgical', title: 'Post-Surgical Rehabilitation', icon: '🏥', description: 'Supports healing after <strong>orthopedic or spinal surgeries</strong>. Focuses on pain control, swelling reduction, early mobility, and restoring full function through structured phases.' },
        { id: 'geriatric', title: 'Geriatric Rehabilitation', icon: '👴', description: 'Helps older adults manage <strong>arthritis, balance deficits, joint stiffness</strong>, and weakness. Improves mobility, safety, independence, and prevents falls.' },
        { id: 'pediatric', title: 'Pediatric Rehabilitation', icon: '👶', description: 'For children with <strong>developmental delays, cerebral palsy, muscular dystrophy</strong>. Enhances motor skills, muscle tone, balance, and functional independence.' }
    ],
    secondaryRehab: [
        { id: 'orthopedic-restorative', title: 'Orthopedic Rehabilitation (Restorative)', description: 'A restorative approach for musculoskeletal injuries, focusing on <strong>rebuilding joint function, reducing pain</strong>, and promoting tissue healing. Ensures smooth transition from immobilization to active movement and full recovery.' },
        { id: 'neurological-restorative', title: 'Neurological Rehabilitation (Restorative)', description: 'Restores lost functions affected by the nervous system. Emphasizes <strong>neuroplasticity, gait training, balance re-education</strong>, and sensory-motor integration for independence.' },
        { id: 'sports-condition', title: 'Sports Rehabilitation (Condition-Specific)', description: 'Tailored to the demands of each sport. Combines <strong>strengthening, proprioception, agility drills</strong>, and conditioning to optimize performance and reduce recurring injuries.' },
        { id: 'postsurgical-functional', title: 'Post-Surgical Rehabilitation (Functional)', description: 'Rebuilds functional mobility following procedures like <strong>ACL repair, spinal fusion, or tendon surgery</strong>. Progresses through recovery milestones for safe healing and optimal outcomes.' }
    ],
    advancedRehab: [
        { id: 'orthopedic-performance', title: 'Orthopedic Rehabilitation', icon: '💪', description: 'Supports long-term recovery and <strong>performance restoration</strong> after injuries or surgeries affecting bones, joints, and muscles. Ensures patients regain full strength, endurance, and functional movement for work or daily life.' },
        { id: 'neurological-longterm', title: 'Neurological Rehabilitation', icon: '🎯', description: 'Provides ongoing support for chronic neurological conditions. Helps patients <strong>maintain mobility, prevent complications</strong>, and continue improving functional abilities through continuous therapy.' },
        { id: 'sports-performance', title: 'Sports Rehabilitation', icon: '🏃', description: 'Focuses on high-level performance recovery, sport-specific conditioning, and <strong>injury prevention strategies</strong>. Works on speed, power, balance, and technique refinement for athletes.' },
        { id: 'postsurgical-longterm', title: 'Post-Surgical Rehabilitation', icon: '🔄', description: 'Extends recovery to long-term functional restoration. Ensures <strong>full range of motion, muscular balance</strong>, and confidence in movement to avoid future complications or reinjury.' },
        { id: 'geriatric-wellness', title: 'Geriatric Rehabilitation', icon: '🌟', description: 'Promotes long-term wellness by maintaining strength, mobility, and functional skills. Helps in <strong>fall prevention, independence</strong>, and managing chronic conditions safely.' },
        { id: 'pediatric-developmental', title: 'Pediatric Rehabilitation', icon: '🌱', description: 'Supports developmental growth, long-term motor learning, and functional progression. Helps children adapt, strengthen, and achieve <strong>age-appropriate physical abilities</strong> over extended periods.' }
    ]
};

const Rehabilitation = () => {
    const { isDarkMode } = useTheme();
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);
    const [selectedBenefit, setSelectedBenefit] = useState('physical');

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        physical: { icon: '🦴', title: 'Physical Recovery', desc: 'Restore strength, mobility, and function after injuries or surgeries' },
        functional: { icon: '🎯', title: 'Functional Restoration', desc: 'Return to daily activities, work, and sports with confidence' },
        independence: { icon: '🌟', title: 'Independence', desc: 'Regain autonomy and quality of life through structured rehabilitation' },
        prevention: { icon: '🛡️', title: 'Prevention', desc: 'Reduce risk of re-injury and long-term complications' }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    जन सेवा फिज़ियो सेंटर — Rehabilitation Programs
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Comprehensive rehabilitation programs designed to restore function, improve quality of life, and help patients return to their normal activities.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🎯 Key Benefits of Rehabilitation
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center mb-6">
                        {Object.keys(benefitsData).map((key) => (
                            <button
                                key={key}
                                onClick={() => setSelectedBenefit(key)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    selectedBenefit === key
                                        ? 'bg-purple-600 text-white shadow-lg'
                                        : isDarkMode
                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
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

                {/* Rehabilitation Section */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🏥 Physical & Functional Rehabilitation
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Comprehensive rehabilitation programs for injuries, surgeries, neurological conditions, and developmental needs
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {RehabData.keyRehab.map((rehab) => (
                            <div 
                                key={rehab.id}
                                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                                    isDarkMode
                                        ? 'bg-gray-800 border border-gray-700 hover:shadow-2xl'
                                        : 'bg-white border border-gray-200 hover:shadow-xl'
                                }`}
                            >
                                <div className="text-5xl mb-4">{rehab.icon}</div>
                                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {rehab.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                                    dangerouslySetInnerHTML={createMarkup(rehab.description)} />
                            </div>
                        ))}
                    </div>

                    {/* Accordion */}
                    <div className={`rounded-xl p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Restorative & Condition-Specific Programs
                        </h3>
                        {RehabData.secondaryRehab.map((rehab) => (
                            <div key={rehab.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <button
                                    onClick={() => toggleAccordion(rehab.id)}
                                    className={`w-full text-left p-4 font-semibold flex justify-between items-center hover:text-purple-600 transition-colors ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-900'
                                    }`}
                                >
                                    {rehab.title}
                                    <span className="text-2xl">{activeSecondaryId === rehab.id ? '−' : '+'}</span>
                                </button>
                                {activeSecondaryId === rehab.id && (
                                    <div className={`p-4 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                                        <p dangerouslySetInnerHTML={createMarkup(rehab.description)} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advanced Rehabilitation */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ✨ Performance, Recovery & Long-Term Rehabilitation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {RehabData.advancedRehab.map((rehab) => (
                            <div 
                                key={rehab.id}
                                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                                    isDarkMode
                                        ? 'bg-gray-800 border border-gray-700 hover:shadow-2xl'
                                        : 'bg-white border border-gray-200 hover:shadow-xl'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">{rehab.icon}</span>
                                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {rehab.title}
                                    </h3>
                                </div>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                                    dangerouslySetInnerHTML={createMarkup(rehab.description)} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact Section */}
                <section className={`rounded-2xl p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        📊 Our Commitment to Recovery
                    </h2>
                    <div className={`p-6 rounded-xl border-l-4 border-purple-600 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-lg italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            "जन सेवा फिज़ियो सेंटर provides comprehensive rehabilitation services designed to restore function and improve quality of life. Our personalized approach ensures each patient receives the care they need for optimal recovery."
                        </p>
                        <p className="text-right text-purple-600 font-bold mt-4">— Dedicated to your recovery journey</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Rehabilitation;