import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const TherapiesData = {
    keyElectropathy: [
        { 
            id: 'tens', 
            title: 'TENS (Transcutaneous Electrical Nerve Stimulation)', 
            icon: '⚡',
            description: 'Uses controlled electrical currents to reduce pain, relax muscles, improve blood flow, and stimulate healing. Common form for <strong>nerve pain relief</strong>.' 
        },
        { 
            id: 'ift', 
            title: 'IFT (Interferential Therapy)', 
            icon: '📶',
            description: 'Uses <strong>medium-frequency currents</strong> that penetrate deeper for deep tissue pain modulation. Ideal for <strong>joint pain, muscle spasms, and arthritis pain</strong>.' 
        },
        { 
            id: 'ultrasound', 
            title: 'Ultrasound Therapy', 
            icon: '🔊',
            description: 'Applies high-frequency <strong>sound waves</strong> to promote tissue repair, reduce inflammation, and improve soft-tissue elasticity. Often used for <strong>tendonitis and ligament injuries</strong>.' 
        },
        { 
            id: 'laser', 
            title: 'Laser & Light Therapy', 
            icon: '💡',
            description: 'Low-level laser or infrared light enhances <strong>cellular regeneration</strong>, reduces inflammation, and improves tissue healing. Helpful in chronic pain, soft-tissue damage, and post-surgical recovery.' 
        },
        { 
            id: 'hotpack', 
            title: 'Thermotherapy (Heat Therapy)', 
            icon: '🌡️',
            description: 'Improves circulation, relaxes tight muscles, and increases tissue flexibility. Used in <strong>chronic pain, arthritis, stiffness, and muscle spasms</strong>.' 
        },
        { 
            id: 'coldpack', 
            title: 'Cryotherapy (Cold Therapy)', 
            icon: '❄️',
            description: 'Reduces <strong>swelling, inflammation, and pain</strong> by lowering tissue temperature. Common in acute injuries like <strong>sprains and strains</strong> to control early-stage inflammation.' 
        }
    ],
    secondaryElectropathy: [
        { 
            id: 'traction', 
            title: 'Traction Therapy (Cervical & Lumbar)', 
            description: 'Mechanical or manual traction gently <strong>decompresses the spine</strong>, reduces nerve compression, and relieves conditions like cervical/lumbar disc issues and spondylosis.' 
        },
        { 
            id: 'nmes', 
            title: 'Muscle Stimulator (NMES)', 
            description: 'Electrical impulses cause <strong>muscle contraction</strong> to strengthen weak muscles. Essential for <strong>paralysis, post-surgery weakness</strong>, and muscle re-education.' 
        },
        { 
            id: 'ift-vacuum', 
            title: 'IFT + Vacuum Therapy', 
            description: 'Combines IFT with <strong>suction electrodes</strong> for better contact and deeper effect. Provides pain relief with muscle stimulation for <strong>chronic pain and tight muscles</strong>.' 
        },
        { 
            id: 'shockwave', 
            title: 'Shockwave Therapy (ESWT)', 
            description: 'Sound waves improve blood flow and break <strong>scar tissue</strong>. Effective for <strong>plantar fasciitis, calcific tendonitis, and chronic trigger points</strong>.' 
        }
    ],
    advancedTherapies: [
        { 
            id: 'mobilization', 
            title: 'Joint Mobilization', 
            icon: '🔄',
            description: 'Skilled hands-on techniques that restore <strong>joint movement</strong>, realign restricted segments, and reduce stiffness. Useful in <strong>neck pain, back pain, and frozen shoulder</strong>.' 
        },
        { 
            id: 'manipulation', 
            title: 'Manipulation', 
            icon: '💫',
            description: 'Quick thrust techniques to restore joint movement, realign restricted segments, and reduce stiffness. Useful in <strong>neck pain, back pain, and frozen shoulder</strong>.' 
        },
        { 
            id: 'stm', 
            title: 'Soft-Tissue Mobilization', 
            icon: '✋',
            description: 'Targets muscles, tendons, fascia, and ligaments to release tightness, improve flexibility, and <strong>break adhesions</strong>. Helps relieve chronic muscle tension and post-injury stiffness.' 
        },
        { 
            id: 'mfr', 
            title: 'Myofascial Release (MFR)', 
            icon: '🖐️',
            description: 'Gentle but sustained pressure applied to <strong>fascial layers</strong> to reduce deep restrictions, improve mobility, and reduce chronic pain patterns.' 
        },
        { 
            id: 'triggerpoint', 
            title: 'Trigger Point Therapy', 
            icon: '🎯',
            description: 'Focused pressure on tender muscle points to relieve <strong>radiating pain</strong>, improve blood flow, and restore normal muscle function.' 
        },
        { 
            id: 'cupping', 
            title: 'Cupping Therapy', 
            icon: '🔥',
            description: 'Uses vacuum cups to lift soft tissues, increase circulation, and reduce muscle congestion. Effective for <strong>back pain and muscle tightness</strong>.' 
        },
        { 
            id: 'dryneedling', 
            title: 'Dry Needling', 
            icon: '📌',
            description: 'Fine needles are inserted into trigger points to release <strong>deep-muscle tension</strong>, reduce chronic pain, and restore proper movement patterns.' 
        },
        { 
            id: 'kinesiotaping', 
            title: 'Kinesio Taping', 
            icon: '🎀',
            description: 'Elastic therapeutic tape applied to support joints, reduce pain, improve muscle function, and enhance movement <strong>without restricting mobility</strong>.' 
        },
        { 
            id: 'maitland', 
            title: 'Maitland Technique', 
            icon: '🔬',
            description: 'Restore joint motion through <strong>specific grades</strong>. Used for <strong>spine issues and shoulder stiffness</strong>.' 
        },
        { 
            id: 'mulligan', 
            title: 'Mulligan Technique', 
            icon: '🎪',
            description: 'Pain-free mobilization with movement (MWM). Used for <strong>knee pain, tennis elbow, and ankle restrictions</strong>.' 
        },
        { 
            id: 'neurodynamics', 
            title: 'Neurodynamics / Nerve Mobilization', 
            icon: '⚡',
            description: 'Gentle nerve gliding movements to free <strong>nerve adhesions</strong>. Used for <strong>sciatica, carpal tunnel, and cervical radiculopathy</strong>.' 
        },
        { 
            id: 'strengthening', 
            title: 'Strengthening Therapy', 
            icon: '💪',
            description: 'Customized exercise programs that focus on rebuilding muscle power, endurance, and stability after <strong>injury, surgery, or chronic weakness</strong>. Essential for long-term recovery.' 
        },
        { 
            id: 'stretching', 
            title: 'Stretching & Flexibility Therapy', 
            icon: '🤸',
            description: 'Improves <strong>range of motion</strong>, reduces stiffness, and prevents muscle shortening. Used in post-injury recovery, posture correction, and movement optimization.' 
        },
        { 
            id: 'posture', 
            title: 'Postural Correction Therapy', 
            icon: '🧍',
            description: 'Identifies faulty posture patterns and retrains the body through targeted exercises and ergonomic adjustments. Helps reduce <strong>chronic neck, shoulder, and back pain</strong>.' 
        },
        { 
            id: 'balance', 
            title: 'Balance & Proprioception Training', 
            icon: '⚖️',
            description: 'Restores coordination and joint stability, especially after ligament injuries, ankle sprains, or neurological conditions. Essential for <strong>fall prevention and athletic recovery</strong>.' 
        },
        { 
            id: 'gait', 
            title: 'Gait Training', 
            icon: '🚶',
            description: 'Improves walking patterns using exercises, feedback, and supportive devices. Beneficial for <strong>neurological issues, post-surgery rehabilitation</strong>, and mobility conditions.' 
        },
        { 
            id: 'corestab', 
            title: 'Core Stabilization Therapy', 
            icon: '🛡️',
            description: 'Strengthens the deep abdominal and spinal muscles for improved posture, stability, and injury prevention. Key for <strong>lower-back rehabilitation</strong>.' 
        },
        { 
            id: 'functionalrehab', 
            title: 'Functional Rehabilitation', 
            icon: '🧗',
            description: 'Recreates daily movement patterns — lifting, walking, bending, sitting, and athletic motions. Helps patients return safely to <strong>work, sports, and everyday activities</strong>.' 
        },
    ]
};

const Therapies = () => {
    const { isDarkMode } = useTheme();
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);
    const [selectedBenefit, setSelectedBenefit] = useState('pain');

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        pain: { icon: '🎯', title: 'Pain Relief', desc: 'Targeted therapies for chronic and acute pain management' },
        mobility: { icon: '🏃', title: 'Enhanced Mobility', desc: 'Improve range of motion and flexibility' },
        recovery: { icon: '💪', title: 'Faster Recovery', desc: 'Accelerate healing from injuries and surgeries' },
        wellness: { icon: '🌟', title: 'Overall Wellness', desc: 'Promote long-term health and vitality' }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    जन सेवा फिज़ियो सेंटर – Our Therapies
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Physiotherapy is a comprehensive medical practice aimed at improving body mobility, strength, and overall health.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🎯 Key Benefits of Our Therapies
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

                {/* Electrotherapy Section */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ⚡ Essential Electrotherapy & Pain Management
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Advanced electrical and physical modalities for effective pain relief
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {TherapiesData.keyElectropathy.map((therapy) => (
                            <div 
                                key={therapy.id}
                                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                                    isDarkMode
                                        ? 'bg-gray-800 border border-gray-700 hover:shadow-2xl'
                                        : 'bg-white border border-gray-200 hover:shadow-xl'
                                }`}
                            >
                                <div className="text-5xl mb-4">{therapy.icon}</div>
                                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {therapy.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                                    dangerouslySetInnerHTML={createMarkup(therapy.description)} />
                            </div>
                        ))}
                    </div>

                    {/* Accordion */}
                    <div className={`rounded-xl p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Additional Electrotherapy & Physical Modalities
                        </h3>
                        {TherapiesData.secondaryElectropathy.map((therapy) => (
                            <div key={therapy.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <button
                                    onClick={() => toggleAccordion(therapy.id)}
                                    className={`w-full text-left p-4 font-semibold flex justify-between items-center hover:text-purple-600 transition-colors ${
                                        isDarkMode ? 'text-gray-300' : 'text-gray-900'
                                    }`}
                                >
                                    {therapy.title}
                                    <span className="text-2xl">{activeSecondaryId === therapy.id ? '−' : '+'}</span>
                                </button>
                                {activeSecondaryId === therapy.id && (
                                    <div className={`p-4 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                                        <p dangerouslySetInnerHTML={createMarkup(therapy.description)} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advanced Therapies */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ✨ Advanced Manual Therapy Techniques
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TherapiesData.advancedTherapies.map((therapy) => (
                            <div 
                                key={therapy.id}
                                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                                    isDarkMode
                                        ? 'bg-gray-800 border border-gray-700 hover:shadow-2xl'
                                        : 'bg-white border border-gray-200 hover:shadow-xl'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-3xl">{therapy.icon}</span>
                                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {therapy.title}
                                    </h3>
                                </div>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                                    dangerouslySetInnerHTML={createMarkup(therapy.description)} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact Section */}
                <section className={`rounded-2xl p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        📊 Our Impact in Numbers
                    </h2>
                    <div className={`p-6 rounded-xl border-l-4 border-purple-600 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-lg italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            "जन सेवा फिज़ियो सेंटर has transformed countless lives through dedicated care and advanced treatment methods. Our commitment to excellence continues to serve the Jaipur community."
                        </p>
                        <p className="text-right text-purple-600 font-bold mt-4">— Trusted by families across Jaipur</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Therapies;