import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const HotTherapyData = {
    keyTherapies: [
        {
            id: 'hydrocollator',
            title: 'Hydrocollator Pack',
            image: '/images/hot-therapy/hydrocollator.jpg',
            description:
                'Hydrocollator packs provide <strong>moist heat</strong> to relieve pain, reduce muscle spasm, and improve tissue extensibility.',
            benefits: [
                'Pain relief',
                'Muscle relaxation',
                'Improves circulation',
                'Reduces stiffness'
            ]
        },
        {
            id: 'swd',
            title: 'Short Wave Diathermy (SWD)',
            image: '/images/hot-therapy/swd.jpg',
            description:
                'SWD uses <strong>high-frequency electromagnetic waves</strong> to produce deep heating in tissues.',
            benefits: [
                'Deep heating',
                'Relieves chronic pain',
                'Reduces muscle spasm',
                'Improves blood flow'
            ]
        },
        {
            id: 'irr',
            title: 'Infrared Radiation (IRR)',
            image: '/images/hot-therapy/irr.jpg',
            description:
                'Infrared radiation provides <strong>superficial heat</strong> to effectively relieve pain and muscle stiffness.',
            benefits: [
                'Superficial pain relief',
                'Muscle relaxation',
                'Improves circulation',
                'Reduces stiffness'
            ]
        },
        {
            id: 'paraffin',
            title: 'Paraffin Wax',
            image: '/images/hot-therapy/paraffin.jpg',
            description:
                'Paraffin wax therapy delivers <strong>deep moist heat</strong> and is commonly used for painful stiff joints.',
            benefits: [
                'Improves joint mobility',
                'Reduces stiffness',
                'Softens tissues',
                'Relieves pain'
            ]
        },
        {
            id: 'cryotherapy',
            title: 'Cryotherapy',
            image: '/images/cold-therapy/cryotherapy.jpg',
            description:
                'Cryotherapy applies <strong>controlled cold</strong> to injured tissues to reduce inflammation and pain.',
            benefits: [
                'Reduces inflammation',
                'Decreases pain',
                'Controls swelling',
                'Reduces muscle spasm'
            ]
        }
    ]
};

const HotColdTherapy = () => {
    const { isDarkMode } = useTheme();
    const [selectedBenefit, setSelectedBenefit] = useState('pain');
    const [selectedImage, setSelectedImage] = useState(null);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        pain: {
            icon: '🔥',
            title: 'Pain Relief',
            desc: 'Heat and cold modalities reduce pain and muscle spasm effectively'
        },
        healing: {
            icon: '💪',
            title: 'Tissue Healing',
            desc: 'Improves blood flow and accelerates recovery from injuries'
        },
        muscle: {
            icon: '🦵',
            title: 'Muscle Relaxation',
            desc: 'Relaxes muscles, reduces stiffness, and improves mobility'
        },
        recovery: {
            icon: '🚀',
            title: 'Faster Recovery',
            desc: 'Thermal modalities support rehabilitation and functional recovery'
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
                    Hot & Cold Therapy
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Therapeutic heat and cold modalities used for pain relief, muscle relaxation, and accelerated recovery. Advanced heat and cold therapy designed to reduce pain, improve circulation, and support healing.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🔥❄️ Why Choose Hot & Cold Therapy?
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

                {/* Main Therapies Section */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ⚙️ Hot & Cold Therapy Modalities
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Commonly used heat-based and cold therapy treatments for comprehensive pain management and recovery
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HotTherapyData.keyTherapies.map((therapy) => (
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

                {/* How It Works Section */}
                <section className={`rounded-2xl p-8 mb-12 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🔬 How Hot & Cold Therapy Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: '🔥 Thermal Effect',
                                points: [
                                    'Heat increases local blood circulation',
                                    'Improves oxygen and nutrient supply',
                                    'Relaxes muscles and connective tissue',
                                    'Reduces pain and stiffness'
                                ]
                            },
                            {
                                title: '💪 Physiological Effect',
                                points: [
                                    'Decreases muscle spasm',
                                    'Improves tissue flexibility',
                                    'Enhances healing response',
                                    'Promotes relaxation'
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
                            'Muscle stiffness',
                            'Joint pain',
                            'Arthritis',
                            'Chronic pain',
                            'Muscle spasm',
                            'Reduced joint mobility'
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
                                ✅ Safe For Most People
                            </h3>
                            <ul className="space-y-2">
                                {['Non-invasive treatment', 'Minimal side effects', 'Drug-free option', 'Suitable for most ages'].map((item, i) => (
                                    <li key={i} className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                                ⚠️ Contraindications
                            </h3>
                            <ul className="space-y-2">
                                {['Avoid use on open wounds', 'Do not apply on areas with poor sensation', 'Monitor skin during treatment', 'Follow therapist guidance'].map((item, i) => (
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
                    <h2 className="text-3xl font-bold mb-4">Ready to Experience Hot & Cold Therapy?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Safe and effective heat and cold treatments to relieve pain and improve mobility.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg">
                        Book Your Hot & Cold Therapy Session
                    </a>
                </section>
            </div>
        </div>
    );
};

export default HotColdTherapy;
