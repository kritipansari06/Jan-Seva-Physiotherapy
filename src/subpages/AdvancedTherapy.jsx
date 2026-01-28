import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const AdvancedRehabData = {
    keyTherapies: [
        {
            id: 'balance-board',
            title: 'Balance Board',
            image: '/images/rehab/balance-board.png',
            description:
                'Balance board training challenges <strong>postural control</strong> and improves balance and coordination.',
            benefits: [
                'Improves balance',
                'Enhances proprioception',
                'Strengthens stabilizing muscles',
                'Prevents falls',
                'Improves neuromuscular control'
            ]
        },
        {
            id: 'bosu-ball',
            title: 'Wobble / BOSU Ball',
            image: '/images/rehab/bosu.png',
            description:
                'Wobble and BOSU ball exercises provide <strong>unstable surface training</strong> to improve coordination.',
            benefits: [
                'Enhances core stability',
                'Improves dynamic balance',
                'Increases coordination',
                'Strengthens lower limbs',
                'Useful in sports rehab'
            ]
        },
        {
            id: 'cones',
            title: 'Cones Training',
            image: '/images/rehab/cones.png',
            description:
                'Cone-based drills improve <strong>agility, balance, and movement accuracy</strong>.',
            benefits: [
                'Improves agility',
                'Enhances coordination',
                'Develops movement control',
                'Improves reaction time',
                'Useful in functional training'
            ]
        }
    ],

    advancedApplications: [
        {
            id: 'parallel-bar',
            title: 'Parallel Bar Training',
            image: '/images/rehab/parallel-bar.png',
            description:
                'Parallel bars are used for <strong>supported gait training</strong> and weight bearing practice.',
            benefits: [
                'Improves walking ability',
                'Enhances weight shifting',
                'Builds confidence',
                'Improves balance',
                'Used in neurological rehab'
            ]
        },
        {
            id: 'stepper',
            title: 'Stepper Training',
            image: '/images/rehab/stepper.png',
            description:
                'Stepper exercises improve <strong>functional strength and endurance</strong>.',
            benefits: [
                'Improves lower limb strength',
                'Enhances stair climbing ability',
                'Improves endurance',
                'Promotes functional mobility',
                'Safe progressive training'
            ]
        },
        {
            id: 'dry-needling',
            title: 'Dry Needling',
            image: '/images/rehab/dry-needling.png',
            description:
                'Dry needling targets <strong>myofascial trigger points</strong> to reduce pain and muscle tightness.',
            benefits: [
                'Reduces muscle pain',
                'Releases trigger points',
                'Improves muscle function',
                'Reduces spasm',
                'Accelerates recovery'
            ]
        },
        {
            id: 'cupping',
            title: 'Cupping Therapy',
            image: '/images/rehab/cupping.png',
            description:
                'Cupping therapy uses <strong>negative pressure</strong> to improve circulation and healing.',
            benefits: [
                'Improves blood flow',
                'Reduces muscle tension',
                'Promotes healing',
                'Relieves pain',
                'Enhances tissue recovery'
            ]
        },
        {
            id: 'iastm',
            title: 'IASTM',
            image: '/images/rehab/iastm.png',
            description:
                'Instrument Assisted Soft Tissue Mobilization improves <strong>soft tissue mobility</strong>.',
            benefits: [
                'Breaks scar tissue',
                'Improves tissue flexibility',
                'Enhances circulation',
                'Reduces stiffness',
                'Speeds up recovery'
            ]
        }
    ]
};

const AdvancedTherapy = () => {
    const { isDarkMode } = useTheme();
    const [selectedBenefit, setSelectedBenefit] = useState('pain');
    const [selectedImage, setSelectedImage] = useState(null);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        pain: {
            icon: '⚖️',
            title: 'Balance & Coordination',
            desc: 'Improves proprioceptive feedback, postural control, and reduces risk of falls'
        },
        healing: {
            icon: '🚶',
            title: 'Gait & Functional Recovery',
            desc: 'Restores walking ability and functional independence'
        },
        muscle: {
            icon: '🩺',
            title: 'Pain Management',
            desc: 'Modern techniques for pain relief and faster recovery'
        },
        recovery: {
            icon: '🚀',
            title: 'Quick Recovery',
            desc: 'Balance training and advanced pain management accelerate rehabilitation'
        }
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
                        ×
                    </button>
                    <img
                        src={selectedImage}
                        alt="Enlarged view"
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-yellow-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Advanced Rehabilitation & Functional Training
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Advanced rehabilitation techniques focusing on balance, gait training, and modern pain management for optimal recovery. Restore confidence, mobility, and independence.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ✨ Why Choose Advanced Rehabilitation?
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center mb-6">
                        {Object.keys(benefitsData).map((key) => (
                            <button
                                key={key}
                                onClick={() => setSelectedBenefit(key)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                                    selectedBenefit === key
                                        ? 'bg-blue-600 text-white shadow-lg'
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

                {/* Main Therapies Section - Balance & Coordination */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ⚙️ Essential Advanced Modalities
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Balance and coordination training for postural control and stability
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {AdvancedRehabData.keyTherapies.map((therapy) => (
                            <div
                                key={therapy.id}
                                className={`flex flex-col h-full rounded-xl overflow-hidden shadow-md transition-transform ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="w-full aspect-video overflow-hidden bg-gray-200">
                                    <img
                                        src={therapy.image}
                                        alt={therapy.title}
                                        className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                                        onClick={() => setSelectedImage(therapy.image)}
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                        {therapy.title}
                                    </h3>
                                    <p
                                        className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                        dangerouslySetInnerHTML={createMarkup(therapy.description)}
                                    />
                                    <div className="mt-auto">
                                        <h4 className={`font-bold text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Key Benefits:
                                        </h4>
                                        <ul className="space-y-1">
                                            {therapy.benefits.map((benefit, idx) => (
                                                <li key={idx} className={`text-xs flex items-start gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    <span className={`flex shrink-0 font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advanced Applications - Gait & Pain Recovery */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ✨ Advanced Treatment Protocols
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Gait training and advanced pain management for specialized clinical outcomes
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {AdvancedRehabData.advancedApplications.map((app) => (
                            <div
                                key={app.id}
                                className={`flex flex-col h-full rounded-xl overflow-hidden shadow-md transition-transform ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="w-full aspect-video overflow-hidden bg-gray-200">
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                                        onClick={() => setSelectedImage(app.image)}
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                        {app.title}
                                    </h3>
                                    <p
                                        className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                        dangerouslySetInnerHTML={createMarkup(app.description)}
                                    />
                                    <div className="mt-auto">
                                        <h4 className={`font-bold text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Key Benefits:
                                        </h4>
                                        <ul className="space-y-1">
                                            {app.benefits.map((benefit, idx) => (
                                                <li key={idx} className={`text-xs flex items-start gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    <span className={`flex shrink-0 font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>✓</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How It Works Section */}
                <section className={`rounded-2xl p-8 mb-12 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🔬 How Advanced Rehabilitation Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: '⚖️ Balance & Coordination Mechanism',
                                points: [
                                    'Improves proprioceptive feedback',
                                    'Enhances postural control',
                                    'Strengthens stabilizing muscles',
                                    'Improves neuromuscular coordination',
                                    'Reduces risk of falls'
                                ]
                            },
                            {
                                title: '🚶 Functional Recovery & Pain Relief',
                                points: [
                                    'Restores gait and functional movements',
                                    'Improves muscle activation patterns',
                                    'Reduces pain and muscle tightness',
                                    'Enhances circulation and healing',
                                    'Promotes faster rehabilitation'
                                ]
                            }
                        ].map((item, idx) => (
                            <div key={idx} className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                    {item.title}
                                </h3>
                                <ul className="space-y-3">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className={`flex shrink-0 font-bold text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                →
                                            </span>
                                            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Applications Section */}
                <section className={`rounded-2xl p-8 mb-12 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        📋 Common Conditions Treated
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            'Balance Disorders',
                            'Gait Abnormalities',
                            'Post Stroke Rehabilitation',
                            'Neurological Conditions',
                            'Post Fracture Recovery',
                            'Post Surgical Rehabilitation',
                            'Sports Injuries',
                            'Chronic Musculoskeletal Pain',
                            'Low Back Pain',
                            'Age-related Mobility Issues'
                        ].map((condition, idx) => (
                            <div key={idx} className={`p-4 rounded-lg flex items-center gap-3 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                <span className={`text-2xl flex shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                    ✓
                                </span>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    {condition}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Safety Section */}
                <section className={`rounded-2xl p-8 mb-12 ${isDarkMode ? 'bg-blue-900/20 border border-blue-600' : 'bg-blue-50 border border-blue-300'}`}>
                    <h2 className={`text-3xl font-bold text-center mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        🛡️ Safety & Contraindications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                ✅ Safe When
                            </h3>
                            <ul className="space-y-2">
                                {['Exercises supervised by therapist', 'Proper assessment is completed', 'Progression is gradual', 'Patient comfort is maintained'].map((item, i) => (
                                    <li key={i} className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                                ⚠️ Avoid In
                            </h3>
                            <ul className="space-y-2">
                                {['Unstable fractures', 'Severe pain during activity', 'Acute inflammation', 'Unsupervised advanced training'].map((item, i) => (
                                    <li key={i} className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <span className={isDarkMode ? 'text-red-400' : 'text-red-600'}>⚠️</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={`rounded-2xl p-8 transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'} text-white text-center`}>
                    <h2 className="text-3xl font-bold mb-4">Ready to Begin Advanced Rehabilitation?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Balance training, gait rehabilitation, and advanced pain management can restore confidence, mobility, and independence.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg">
                        Book Your Rehabilitation Session
                    </a>
                </section>
            </div>
        </div>
    );
};

export default AdvancedTherapy;
