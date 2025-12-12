import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const WellnessData = {
    keyWellness: [
        { id: 'posture', title: 'Posture & Ergonomic Wellness', icon: '🧘', description: 'Correcting <strong>sitting, standing, and working positions</strong> to reduce strain on the neck, back, and joints. Prevents chronic pain, improves spinal alignment, and reduces work-related muscle tension.' },
        { id: 'lifestyle', title: 'Lifestyle & Fitness Wellness', icon: '💪', description: 'Guidance on <strong>daily physical activity, flexibility routines, strengthening exercises</strong>, and healthy movement patterns. Supports long-term health, weight control, energy levels, and better musculoskeletal function.' },
        { id: 'injury-prevention', title: 'Injury Prevention Wellness', icon: '🛡️', description: 'Includes <strong>warm-up routines, core strengthening, flexibility training</strong>, and movement correction. Helps avoid sports injuries, workplace strain, and overuse problems by building joint resilience.' },
        { id: 'stress-relief', title: 'Stress Relief & Relaxation Wellness', icon: '🧘‍♀️', description: 'Uses <strong>deep breathing, stretching, mindfulness</strong>, and gentle mobility exercises to reduce muscle tension and improve mental calmness. Prevents stress-related stiffness, headaches, and posture issues.' },
        { id: 'chronic-management', title: 'Chronic Condition Management', icon: '❤️', description: 'Supports long-term control of <strong>arthritis, back pain, joint degeneration</strong>, and lifestyle-related disorders. Focuses on mobility exercises and joint-protection strategies to maintain comfort and independence.' },
        { id: 'preventive-care', title: 'Preventive Care & Health Optimization', icon: '⭐', description: 'Proactive wellness strategies including <strong>body awareness, movement screening</strong>, and early intervention. Helps identify potential issues before they develop into serious conditions.' }
    ],
    secondaryWellness: [
        { id: 'posture-mobility', title: 'Posture & Ergonomic Wellness (Body Awareness)', description: 'Enhances body awareness and <strong>workstation ergonomics</strong> to protect the spine and reduce repetitive strain injuries. Encourages balanced posture during daily movements to prevent chronic musculoskeletal issues.' },
        { id: 'lifestyle-strength', title: 'Lifestyle & Fitness Wellness (Active Living)', description: 'Promotes regular exercise routines, <strong>strength building, and mobility training</strong> to keep the body active and stable. Helps maintain cardiovascular health, flexibility, and overall functional ability throughout life.' },
        { id: 'injury-prevention-training', title: 'Injury Prevention Wellness (Movement Safety)', description: 'Emphasizes <strong>safe movement patterns, proper lifting techniques, balance training</strong>, and sport-specific conditioning. Reduces the likelihood of falls, sprains, and muscle tears by improving physical stress response.' },
        { id: 'stress-relaxation', title: 'Stress Relief & Relaxation Wellness (Mental Health)', description: 'Improves emotional well-being by reducing tension using <strong>gentle mobility work, controlled breathing, and guided relaxation</strong> methods. Supports better sleep, reduced fatigue, and calmer daily functioning.' }
    ],
    advancedWellness: [
        { id: 'posture-longterm', title: 'Posture & Ergonomic Wellness', icon: '🎯', description: 'Develops long-term posture correction habits and <strong>ergonomic adjustments</strong> that protect joints during work, sports, and routine activities. Helps minimize spinal stress and improve movement efficiency.' },
        { id: 'lifestyle-sustainable', title: 'Lifestyle & Fitness Wellness', icon: '🌟', description: 'Encourages <strong>sustainable fitness, healthy mobility, and strength-based wellness</strong>. Supports long-term physical health by promoting consistent exercise, active living, and good movement quality.' },
        { id: 'injury-prevention-strategy', title: 'Injury Prevention Wellness', icon: '🔒', description: 'Creates long-term prevention strategies using <strong>core stability, balance training, flexibility routines</strong>, and corrective exercises. Safeguards the body from recurring injuries and age-related declines.' },
        { id: 'stress-management', title: 'Stress Relief & Relaxation Wellness', icon: '☮️', description: 'Focuses on long-term <strong>muscle relaxation, improved breathing patterns, and stress management</strong> routines. Enhances recovery, supports mental health, and maintains physical comfort.' },
        { id: 'chronic-ongoing', title: 'Chronic Condition Management', icon: '🩺', description: 'Provides ongoing wellness support for conditions requiring continuous care. Helps <strong>maintain mobility, reduce flare-ups</strong>, and ensure better functional capacity through guided therapeutic routines.' },
        { id: 'holistic-wellness', title: 'Holistic Health & Well-being', icon: '🌈', description: 'Integrates <strong>physical, mental, and lifestyle wellness</strong> for comprehensive health optimization. Promotes balance between body function, emotional health, and daily vitality for sustained quality of life.' }
    ]
};

const Wellness = () => {
    const { isDarkMode } = useTheme();
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);
    const [selectedBenefit, setSelectedBenefit] = useState('prevention');

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        prevention: { icon: '🛡️', title: 'Disease Prevention', desc: 'Proactive strategies to prevent injuries and chronic conditions' },
        vitality: { icon: '⚡', title: 'Enhanced Vitality', desc: 'Boost energy levels and improve overall quality of life' },
        balance: { icon: '⚖️', title: 'Mind-Body Balance', desc: 'Harmonize physical health with mental and emotional well-being' },
        longevity: { icon: '🌱', title: 'Long-term Health', desc: 'Build sustainable habits for lifelong wellness and independence' }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    जन सेवा फिज़ियो सेंटर — Wellness Programs
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Comprehensive wellness programs designed to promote long-term health, prevent injuries, and enhance quality of life.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🎯 Benefits of Wellness Programs
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

                {/* Wellness Section */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🌟 Posture, Lifestyle & Injury Prevention Wellness
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Foundational wellness programs for healthy living, injury prevention, and chronic condition management
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {WellnessData.keyWellness.map((wellness) => (
                            <div 
                                key={wellness.id}
                                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                                    isDarkMode
                                        ? 'bg-gray-800 border border-gray-700 hover:shadow-2xl'
                                        : 'bg-white border border-gray-200 hover:shadow-xl'
                                }`}
                            >
                                <div className="text-5xl mb-4">{wellness.icon}</div>
                                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {wellness.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                                    dangerouslySetInnerHTML={createMarkup(wellness.description)} />
                            </div>
                        ))}
                    </div>

                    {/* Accordion */}
                    <div className={`rounded-xl p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Mobility, Strength, Balance & Daily Wellness
                        </h3>
                        {WellnessData.secondaryWellness.map((wellness) => (
                            <div key={wellness.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <button
                                    onClick={() => toggleAccordion(wellness.id)}
                                    className={`w-full text-left p-4 font-semibold flex justify-between items-center hover:text-purple-600 transition-colors ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-900'
                                    }`}
                                >
                                    {wellness.title}
                                    <span className="text-2xl">{activeSecondaryId === wellness.id ? '−' : '+'}</span>
                                </button>
                                {activeSecondaryId === wellness.id && (
                                    <div className={`p-4 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                                        <p dangerouslySetInnerHTML={createMarkup(wellness.description)} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advanced Wellness */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ✨ Functional, Preventive & Long-Term Wellness
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {WellnessData.advancedWellness.map((wellness) => (
                            <div 
                                key={wellness.id}
                                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                                    isDarkMode
                                        ? 'bg-gray-800 border border-gray-700 hover:shadow-2xl'
                                        : 'bg-white border border-gray-200 hover:shadow-xl'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">{wellness.icon}</span>
                                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {wellness.title}
                                    </h3>
                                </div>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                                    dangerouslySetInnerHTML={createMarkup(wellness.description)} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact Section */}
                <section className={`rounded-2xl p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🌈 Your Journey to Optimal Wellness
                    </h2>
                    <div className={`p-6 rounded-xl border-l-4 border-purple-600 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-lg italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            "जन सेवा फिज़ियो सेंटर believes that true wellness extends beyond treatment. Our comprehensive wellness programs empower you to take control of your health, prevent injuries, and maintain vitality for years to come."
                        </p>
                        <p className="text-right text-purple-600 font-bold mt-4">— Empowering healthy living every day</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Wellness;