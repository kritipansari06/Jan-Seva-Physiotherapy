import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ElectroTherapyData = {
    keyTherapies: [
        {
            id: 'tens',
            title: 'TENS (Transcutaneous Electrical Nerve Stimulation)',
            image: '/images/Treatments/ElectroTherapy/TENS.png',
            description:'TENS uses <strong>low-frequency electrical currents</strong> applied through surface electrodes to relieve pain. It works mainly on the <strong>Gate Control Theory</strong> of pain and is widely used in acute and chronic pain conditions.',
            benefits: [
                'Pain relief through gate control mechanism',
                'Reduces acute and chronic pain',
                'Non-invasive and drug-free',
                'Easy and safe to apply',
                'Improves patient comfort'
            ]
        },
        {
            id: 'ift',
            title: 'IFT (Interferential Therapy)',
            image: '/images/Treatments/ElectroTherapy/IFT.png',
            description:'IFT uses <strong>medium-frequency currents</strong> that intersect within tissues to produce deep analgesic effects. It is effective for <strong>muscle pain, joint pain, and inflammation</strong>.',
            benefits: [
                'Deep tissue pain relief',
                'Reduces muscle spasm',
                'Improves blood circulation',
                'Decreases inflammation',
                'Comfortable for patients'
            ]
        },
        {
            id: 'ultrasound',
            title: 'Ultrasound Therapy (U.S)',
            image: '/images/Treatments/ElectroTherapy/Ultrasound.png',
            description:'Ultrasound therapy uses <strong>high-frequency sound waves</strong> to promote tissue healing, reduce pain, and improve soft tissue extensibility. It is commonly used in <strong>tendon and ligament injuries</strong>.',
            benefits: [
                'Promotes tissue healing',
                'Reduces pain and stiffness',
                'Improves tissue elasticity',
                'Enhances blood flow',
                'Effective for soft tissue injuries'
            ]
        },
        {
            id: 'swd',
            title: 'Short Wave Diathermy (SWD)',
            image: '/images/Treatments/ElectroTherapy/SWD.png',
            description:'SWD uses <strong>high-frequency electromagnetic waves</strong> to produce deep heating in tissues. It helps in pain relief, muscle relaxation, and improving circulation.',
            benefits: [
                'Deep heating effect',
                'Relieves chronic pain',
                'Reduces muscle spasm',
                'Improves circulation',
                'Enhances tissue healing'
            ]
        },
        {
            id: 'irr',
            title: 'Infrared Radiation (IRR)',
            image: '/images/Treatments/ElectroTherapy/IRR.png',
            description:'Infrared radiation produces <strong>superficial heating</strong> of tissues. It is mainly used to relieve pain, improve circulation, and reduce muscle stiffness.',
            benefits: [
                'Superficial pain relief',
                'Improves local blood flow',
                'Relaxes muscles',
                'Reduces stiffness',
                'Simple and safe modality'
            ]
        }
    ],

    advancedApplications: [
        {
            id: 'nmes',
            title: 'NMES (Neuromuscular Electrical Stimulation)',
            image: '/images/Treatments/ElectroTherapy/NMES.png',
            description:'NMES uses <strong>electrical stimulation to produce muscle contraction</strong>. It is used for muscle strengthening, re-education, and prevention of muscle atrophy.',
            benefits: [
                'Improves muscle strength',
                'Prevents muscle atrophy',
                'Enhances muscle re-education',
                'Useful in paralysis and post-surgical cases',
                'Improves functional recovery'
            ]
        },
        {
            id: 'cpm',
            title: 'CPM (Continuous Passive Motion)',
            image: '/images/Treatments/ElectroTherapy/CPM.png',
            description:'CPM is a mechanical modality that moves a joint <strong>passively through a controlled range</strong>. It is commonly used after orthopedic surgeries.',
            benefits: [
                'Improves joint mobility',
                'Prevents joint stiffness',
                'Reduces post-operative pain',
                'Enhances synovial fluid circulation',
                'Promotes early rehabilitation'
            ]
        },
        {
            id: 'cervical-traction',
            title: 'Cervical Traction',
            image: '/images/Treatments/ElectroTherapy/CervicalTraction.png',
            description:'Cervical traction applies a <strong>gentle pulling force to the neck</strong> to reduce nerve root compression and relieve cervical pain.',
            benefits: [
                'Relieves neck pain',
                'Reduces nerve root compression',
                'Decreases muscle spasm',
                'Improves cervical mobility',
                'Helpful in cervical spondylosis'
            ]
        },
        {
            id: 'russian-current',
            title: 'Russian Current',
            image: '/images/Treatments/ElectroTherapy/RussianCurrent.png',
            description:'Russian current is a form of <strong>medium-frequency electrical stimulation</strong> mainly used for muscle strengthening.',
            benefits: [
                'Increases muscle power',
                'Improves muscle endurance',
                'Useful in sports and rehabilitation',
                'Prevents muscle wasting',
                'Enhances neuromuscular control'
            ]
        },
        {
            id: 'lumbar-traction',
            title: 'Lumbar Traction',
            image: '/images/Treatments/ElectroTherapy/LumbarTraction.png',
            description:'Lumbar traction applies <strong>traction force to the lower spine</strong> to reduce disc pressure and relieve low back pain.',
            benefits: [
                'Relieves low back pain',
                'Reduces disc compression',
                'Decreases muscle spasm',
                'Improves lumbar mobility',
                'Helpful in lumbar disc prolapse'
            ]
        }
    ]
};

const ElectroTherapy = () => {
    const { isDarkMode } = useTheme();
    const [selectedBenefit, setSelectedBenefit] = useState('pain');
    const [selectedImage, setSelectedImage] = useState(null);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        pain: {
            icon: '⚡',
            title: 'Pain Relief',
            desc: 'Electrical stimulation blocks pain signals and provides fast relief'
        },
        healing: {
            icon: '💪',
            title: 'Tissue Healing',
            desc: 'Stimulates cellular activity and accelerates tissue regeneration'
        },
        muscle: {
            icon: '🦵',
            title: 'Muscle Strength',
            desc: 'Restores muscle function and prevents atrophy'
        },
        recovery: {
            icon: '🚀',
            title: 'Quick Recovery',
            desc: 'Non-invasive treatment for faster rehabilitation'
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)} aria-label="Close">
                        ×
                    </button>
                    <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <div className="max-w-6xl mx-auto px-4 py-12">

                {/* Header */}
                <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-yellow-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Electrotherapy & Modern Electrical Stimulation
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Harness the power of electrical energy for pain relief, muscle strengthening, and accelerated tissue healing. Electrotherapy is a proven, evidence-based approach to rehabilitation and pain management.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ⚡ Why Choose Electrotherapy?
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
                        ⚙️ Essential Electrotherapy Modalities
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Six powerful electrical and energy-based therapies for comprehensive pain management and healing
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ElectroTherapyData.keyTherapies.map((therapy) => (
                            <div key={therapy.id} className={`flex flex-col h-full rounded-xl overflow-hidden shadow-md transition-transform ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="w-full aspect-video overflow-hidden bg-gray-200">
                                    <img src={therapy.image} alt={therapy.title}
                                        className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                                        onClick={() => setSelectedImage(therapy.image)}
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                        {therapy.title}
                                    </h3>
                                    <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
                                        dangerouslySetInnerHTML={createMarkup(therapy.description)}>
                                    </p>
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

                {/* Advanced Applications */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ✨ Advanced Electrical Treatment Protocols
                    </h2>  
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Advanced electrotherapy applications used for specialized clinical outcomes
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ElectroTherapyData.advancedApplications.map((app) => (
                            <div key={app.id} className={`flex flex-col h-full rounded-xl overflow-hidden shadow-md transition-transform  ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="w-full aspect-video overflow-hidden bg-gray-200">
                                    <img src={app.image} alt={app.title} className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
                                        onClick={() => setSelectedImage(app.image)}/>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                        {app.title}
                                    </h3>
                                    <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                     dangerouslySetInnerHTML={createMarkup(app.description)}>
                                    </p>
                                    <div className="mt-auto">
                                        <h4 className={`font-bold text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Key Benefits:
                                        </h4>
                                        <ul className="space-y-1">
                                            {app.benefits.map((benefit, idx) => (
                                                <li key={idx} className={`text-xs flex items-start gap-2 ${ isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    <span className={`flex shrink-0 font-bold ${ isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                        ✓
                                                    </span>
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
                        🔬 How Electrotherapy Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: '⚡ Pain Relief Mechanism',
                                points: [
                                    'Gate Control Theory - blocks pain signals',
                                    'Stimulates endorphin production',
                                    'Reduces inflammation naturally',
                                    'Interrupts pain pathways to brain',
                                    'Provides non-pharmacological relief'
                                ]
                            },
                            {
                                title: '💪 Tissue Healing Mechanism',
                                points: [
                                    'Stimulates cellular energy production',
                                    'Increases ATP (cellular fuel) synthesis',
                                    'Promotes collagen synthesis',
                                    'Enhances blood flow and oxygen delivery',
                                    'Accelerates natural healing processes'
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
                            'Back & Neck Pain',
                            'Arthritis & Joint Pain',
                            'Muscle Spasms',
                            'Sports Injuries',
                            'Post-Surgical Rehabilitation',
                            'Nerve Pain (Neuropathy)',
                            'Plantar Fasciitis',
                            'Muscle Weakness',
                            'Tendonitis & Bursitis',
                            'Chronic Pain Conditions',
                            'Wound Healing',
                            'Paralysis Recovery'
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
                                {['Non-invasive treatment', 'Minimal side effects', 'Drug-free option', 'Suitable for all ages'].map((item, i) => (
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
                                {['Pacemakers or cardiac devices', 'Pregnancy (consult therapist)', 'Metal implants (area-specific)', 'Severe skin conditions'].map((item, i) => (
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
                    <h2 className="text-3xl font-bold mb-4">Ready to Experience Electrotherapy?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Whether you're managing chronic pain or recovering from an injury, electrotherapy can accelerate your healing and improve your quality of life.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg">
                        Book Your Electrotherapy Session
                    </a>
                </section>
            </div>
        </div>
    );
};

export default ElectroTherapy;