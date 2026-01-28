import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ManualTherapyData = {
    keyTherapies: [
        {
            id: 'manipulation',
            title: 'Manipulation',
            image: '/images/manual/manipulation.png',
            description:
                'Manipulation involves <strong>high-velocity, low-amplitude movements</strong> applied to joints to restore mobility and reduce pain.',
            benefits: [
                'Improves joint mobility',
                'Reduces pain quickly',
                'Restores normal joint mechanics',
                'Relieves stiffness',
                'Enhances functional movement'
            ]
        },
        {
            id: 'mobilization',
            title: 'Mobilization',
            image: '/images/manual/mobilization.png',
            description:
                'Mobilization uses <strong>gentle, rhythmic passive movements</strong> within joint range to reduce pain and stiffness.',
            benefits: [
                'Increases joint range of motion',
                'Reduces joint stiffness',
                'Safe and controlled technique',
                'Improves joint nutrition',
                'Used in early rehabilitation'
            ]
        },
        {
            id: 'iastm',
            title: 'IASTM',
            image: '/images/manual/iastm.png',
            description:
                'Instrument Assisted Soft Tissue Mobilization (IASTM) uses <strong>special tools</strong> to treat soft tissue restrictions.',
            benefits: [
                'Breaks scar tissue',
                'Improves tissue mobility',
                'Enhances blood flow',
                'Reduces muscle tightness',
                'Accelerates healing'
            ]
        },
        {
            id: 'mfr',
            title: 'Myofascial Release (MFR)',
            image: '/images/manual/mfr.png',
            description:
                'MFR applies <strong>sustained pressure</strong> to fascial restrictions to restore mobility and relieve pain.',
            benefits: [
                'Releases fascial tightness',
                'Reduces chronic pain',
                'Improves flexibility',
                'Enhances posture',
                'Promotes relaxation'
            ]
        },
        {
            id: 'massage',
            title: 'Massage Therapy',
            image: '/images/manual/massage.png',
            description:
                'Massage therapy involves <strong>manual soft tissue techniques</strong> to promote relaxation and circulation.',
            benefits: [
                'Relieves muscle tension',
                'Improves circulation',
                'Reduces stress',
                'Enhances tissue healing',
                'Improves overall well-being'
            ]
        },
        {
            id: 'soft-tissue',
            title: 'Soft Tissue Mobilization',
            image: '/images/manual/soft-tissue.png',
            description:
                'Soft tissue mobilization targets <strong>muscles, fascia, and connective tissues</strong> to improve mobility.',
            benefits: [
                'Improves tissue flexibility',
                'Reduces adhesions',
                'Relieves muscle pain',
                'Enhances functional movement',
                'Supports rehabilitation'
            ]
        },
        {
            id: 'trigger-point',
            title: 'Trigger Point Therapy',
            image: '/images/manual/trigger-point.png',
            description:
                'Trigger point therapy applies <strong>focused pressure</strong> on tight muscle knots to relieve referred pain.',
            benefits: [
                'Releases trigger points',
                'Reduces referred pain',
                'Improves muscle function',
                'Decreases muscle spasm',
                'Enhances mobility'
            ]
        },
        {
            id: 'maitland',
            title: 'Maitland Mobilization',
            image: '/images/manual/maitland.png',
            description:
                'Maitland technique uses <strong>graded oscillatory joint movements</strong> based on pain and stiffness assessment.',
            benefits: [
                'Pain-based joint treatment',
                'Improves joint mechanics',
                'Safe and precise',
                'Widely used clinically',
                'Enhances patient comfort'
            ]
        },
        {
            id: 'nerve',
            title: 'Nerve Mobilization',
            image: '/images/manual/nerve.png',
            description:
                'Nerve mobilization restores <strong>normal nerve movement</strong> and reduces neural tension.',
            benefits: [
                'Reduces nerve pain',
                'Improves neural mobility',
                'Enhances function',
                'Decreases tingling & numbness',
                'Useful in radiculopathy'
            ]
        }
    ]
};

const ManualTherapy = () => {
    const { isDarkMode } = useTheme();
    const [selectedBenefit, setSelectedBenefit] = useState('pain');
    const [selectedImage, setSelectedImage] = useState(null);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        pain: {
            icon: '🖐️',
            title: 'Pain Relief',
            desc: 'Skilled hands-on techniques reduce pain and muscle guarding'
        },
        healing: {
            icon: '💆',
            title: 'Tissue Healing',
            desc: 'Improves blood circulation and stimulates tissue recovery'
        },
        muscle: {
            icon: '🦵',
            title: 'Mobility Restoration',
            desc: 'Restores joint and soft tissue mobility and function'
        },
        recovery: {
            icon: '🚀',
            title: 'Quick Recovery',
            desc: 'Evidence-based manual therapy accelerates rehabilitation'
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
                    Manual Therapy & Hands-On Rehabilitation
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Manual therapy uses skilled hands-on techniques to reduce pain, restore mobility, and improve functional movement. Evidence-based, hands-on care for faster recovery and long-term wellness.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🖐️ Why Choose Manual Therapy?
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

                {/* Main Therapies Section - Manual Techniques */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ⚙️ Manual Therapy Techniques
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Skilled hands-on techniques for pain relief, mobility restoration, and functional recovery
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ManualTherapyData.keyTherapies.map((therapy) => (
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
                        🔬 How Manual Therapy Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: '🖐️ Joint & Soft Tissue Mechanics',
                                points: [
                                    'Restores normal joint movement',
                                    'Reduces stiffness and adhesions',
                                    'Improves tissue extensibility',
                                    'Corrects movement restrictions',
                                    'Enhances biomechanical alignment'
                                ]
                            },
                            {
                                title: '💆 Pain Relief & Healing',
                                points: [
                                    'Reduces muscle guarding',
                                    'Improves blood circulation',
                                    'Decreases pain sensitivity',
                                    'Stimulates tissue healing',
                                    'Improves neuromuscular control'
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
                            'Neck & Back Pain',
                            'Frozen Shoulder',
                            'Joint Stiffness',
                            'Muscle Spasm',
                            'Sports Injuries',
                            'Post Fracture Stiffness',
                            'Post Surgical Rehabilitation',
                            'Sciatica & Nerve Pain',
                            'Poor Posture',
                            'Chronic Musculoskeletal Pain'
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
                                {['Performed by trained therapist', 'Patient is relaxed', 'Proper assessment is done', 'Technique applied correctly'].map((item, i) => (
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
                                {['Acute fractures', 'Severe osteoporosis', 'Active infection or inflammation', 'Malignancy in treatment area'].map((item, i) => (
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
                    <h2 className="text-3xl font-bold mb-4">Ready to Experience Manual Therapy?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Hands-on therapy can restore movement, reduce pain, and improve your quality of life naturally.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg">
                        Book Your Manual Therapy Session
                    </a>
                </section>
            </div>
        </div>
    );
};

export default ManualTherapy;
