import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ExerciseTherapyData = {
    keyTherapies: [
        {
            id: 'passive-stretching',
            title: 'Passive Stretching',
            image: '/images/Treatments/ExerciseTherapy/passive-stretching.png',
            description: 'Passive stretching involves <strong>external assistance</strong> to stretch muscles without patient effort.',
            benefits: [
                'Improves flexibility',
                'Reduces muscle tightness',
                'Safe for early rehabilitation',
                'Prevents contractures',
                'Enhances joint mobility'
            ]
        },
        {
            id: 'active-stretching',
            title: 'Active Stretching',
            image: '/images/Treatments/ExerciseTherapy/active-stretching.png',
            description: `Active stretching uses <strong>patient's own muscle activity </strong> to achieve stretch.`,
            benefits: [
                'Improves muscle control',
                'Increases flexibility',
                'Enhances neuromuscular coordination',
                'Promotes independence',
                'Useful in functional rehab'
            ]
        },
        {
            id: 'treadmill',
            title: 'Treadmill',
            image: '/images/Treatments/ExerciseTherapy/treadmill.png',
            description: 'Treadmill exercises improve <strong>cardiorespiratory endurance</strong> and walking capacity.',
            benefits: [
                'Improves cardiovascular fitness',
                'Enhances walking endurance',
                'Increases stamina',
                'Supports gait training',
                'Controlled speed and intensity'
            ]
        },
        {
            id: 'cycle-ergometer',
            title: 'Cycle Ergometer',
            image: '/images/Treatments/ExerciseTherapy/cycle-ergometer.png',
            description: 'Cycle ergometer is used for <strong>aerobic conditioning</strong> and lower limb endurance.',
            benefits: [
                'Improves aerobic capacity',
                'Strengthens lower limbs',
                'Low impact exercise',
                'Enhances circulation',
                'Suitable for all age groups'
            ]
        }
    ],

    advancedApplications: [
        {
            id: 'finger-ladder',
            title: 'Finger Ladder Exercise',
            image: '/images/Treatments/ExerciseTherapy/finger-ladder.png',
            description:'Finger ladder exercise is used to <strong>improve shoulder range of motion</strong> by gradually walking the fingers up a wall or ladder surface.',
            benefits: [
                'Improves shoulder mobility',
                'Increases range of motion',
                'Safe and controlled movement',
                'Useful in frozen shoulder',
                'Easy home-based exercise'
            ]
        },
        {
            id: 'shoulder-wheel',
            title: 'Shoulder Wheel',
            image: '/images/Treatments/ExerciseTherapy/shoulder-wheel.png',
            description:'Shoulder wheel exercises help in <strong>active assisted shoulder movements</strong> and are commonly used in rehabilitation.',
            benefits: [
                'Enhances shoulder flexibility',
                'Reduces stiffness',
                'Improves coordination',
                'Promotes smooth joint movement',
                'Ideal for post-injury rehab'
            ]
        },
        {
            id: 'cpm-machine',
            title: 'CPM Machine',
            image: '/images/Treatments/ExerciseTherapy/CPM.png',
            description:'Continuous Passive Motion (CPM) machine moves joints <strong>passively through a preset range</strong> to prevent stiffness.',
            benefits: [
                'Prevents joint stiffness',
                'Improves joint nutrition',
                'Reduces pain post-surgery',
                'Maintains range of motion',
                'Supports early rehabilitation'
            ]
        },
        {
            id: 't-pulley',
            title: 'T-Pulley Exercise',
            image: '/images/Treatments/ExerciseTherapy/t-pulley.png',
            description:'T-pulley exercises are used for <strong>assisted shoulder elevation and abduction</strong>.',
            benefits: [
                'Improves shoulder elevation',
                'Assisted active movement',
                'Reduces muscle tightness',
                'Enhances functional reach',
                'Simple mechanical setup'
            ]
        },
        {
            id: 'ankle-exercise',
            title: 'Ankle Exercises',
            image: '/images/Treatments/ExerciseTherapy/ankle-exercises.png',
            description:'Ankle exercises include movements to <strong>improve strength and mobility</strong> of the ankle joint.',
            benefits: [
                'Improves ankle mobility',
                'Enhances balance',
                'Strengthens ankle muscles',
                'Prevents stiffness',
                'Useful after ankle injuries'
            ]
        },
        {
            id: 'dumbbells',
            title: 'Dumbbells',
            image: '/images/Treatments/ExerciseTherapy/dumbbells.png',
            description:'Dumbbells are used for <strong>progressive resistance exercises</strong> to strengthen muscles.',
            benefits: [
                'Increases muscle strength',
                'Improves endurance',
                'Allows graded resistance',
                'Enhances joint stability',
                'Versatile strengthening tool'
            ]
        },
        {
            id: 'weight-cuff',
            title: 'Weight Cuff',
            image: '/images/Treatments/ExerciseTherapy/weight-cuff.png',
            description:'Weight cuffs provide <strong>external resistance</strong> during limb movements.',
            benefits: [
                'Strengthens limb muscles',
                'Improves functional movements',
                'Easy to apply',
                'Allows gradual load increase',
                'Used in rehab programs'
            ]
        },
        {
            id: 'theraband',
            title: 'Theraband',
            image: '/images/Treatments/ExerciseTherapy/theraband.png',
            description:'Therabands are elastic resistance bands used for <strong>muscle strengthening and flexibility</strong>.',
            benefits: [
                'Provides variable resistance',
                'Improves muscle control',
                'Lightweight and portable',
                'Safe for all age groups',
                'Widely used in physiotherapy'
            ]
        },
        {
            id: 'theratube',
            title: 'Theratube',
            image: '/images/Treatments/ExerciseTherapy/theratube.png',
            description:'Theratubes are hollow elastic tubes used for <strong>resistance training</strong>.',
            benefits: [
                'Improves muscle power',
                'Enhances coordination',
                'Different resistance levels',
                'Supports functional training',
                'Durable and effective'
            ]
        },
        {
            id: 'quadriceps-chair',
            title: 'Quadriceps Chair Exercise',
            image: '/images/Treatments/ExerciseTherapy/quadriceps-chair.png',
            description:'Quadriceps chair exercises focus on <strong>strengthening thigh muscles</strong>.',
            benefits: [
                'Strengthens quadriceps',
                'Improves knee stability',
                'Enhances walking ability',
                'Important for knee rehab',
                'Improves functional mobility'
            ]
        }
    ]
};

const ExerciseTherapy = () => {
    const { isDarkMode } = useTheme();
    const [selectedBenefit, setSelectedBenefit] = useState('pain');
    const [selectedImage, setSelectedImage] = useState(null);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        pain: {
            icon: '💪',
            title: 'Muscle & Joint Function',
            desc: 'Improves muscle strength, endurance, and restores normal movement patterns'
        },
        healing: {
            icon: '🦵',
            title: 'Flexibility & Mobility',
            desc: 'Enhances joint mobility, reduces stiffness, and improves tissue extensibility'
        },
        muscle: {
            icon: '🏃',
            title: 'Functional Independence',
            desc: 'Promotes independence in daily activities and supports long-term mobility'
        },
        recovery: {
            icon: '🚀',
            title: 'Quick Recovery',
            desc: 'Personalized exercise programs accelerate rehabilitation and recovery'
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
                    Exercise Therapy & Rehabilitation
                </h1>
                <p className={`text-center text-lg mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    A personalized exercise program can restore strength, mobility, and confidence. Evidence-based exercise therapy for comprehensive rehabilitation and functional recovery.
                </p>

                {/* Benefits Section */}
                <section className={`rounded-2xl p-8 mb-12 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} shadow-lg`}>
                    <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        🧘 Why Choose Exercise Therapy?
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

                {/* Main Therapies Section - Stretching & Endurance */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ⚙️ Essential Exercise Modalities
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Stretching and endurance exercises for flexibility and cardiorespiratory fitness
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ExerciseTherapyData.keyTherapies.map((therapy) => (
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

                {/* Advanced Applications - Home & Muscle Strengthening */}
                <section className="mb-12">
                    <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        ✨ Advanced Exercise & Strengthening
                    </h2>
                    <p className={`text-center mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Home exercises and muscle strengthening for comprehensive rehabilitation
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ExerciseTherapyData.advancedApplications.map((app) => (
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
                        🔬 How Exercise Therapy Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: '💪 Muscle & Joint Function',
                                points: [
                                    'Improves muscle strength and endurance',
                                    'Enhances joint mobility and flexibility',
                                    'Reduces stiffness and tightness',
                                    'Restores normal movement patterns',
                                    'Improves functional independence'
                                ]
                            },
                            {
                                title: '🚀 Recovery & Rehabilitation',
                                points: [
                                    'Enhances blood circulation',
                                    'Improves oxygen delivery to tissues',
                                    'Prevents muscle wasting',
                                    'Promotes faster recovery',
                                    'Supports long-term mobility'
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
                            'Post Fracture Stiffness',
                            'Post Surgical Rehabilitation',
                            'Muscle Weakness',
                            'Joint Stiffness',
                            'Frozen Shoulder',
                            'Low Back Pain',
                            'Knee Osteoarthritis',
                            'Sports Injuries',
                            'Neurological Rehabilitation',
                            'Balance Disorders'
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
                                ✅ Safe Practices
                            </h3>
                            <ul className="space-y-2">
                                {['Perform under therapist supervision', 'Maintain proper posture', 'Warm-up before exercise', 'Progress gradually'].map((item, i) => (
                                    <li key={i} className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                                ⚠️ Avoid If
                            </h3>
                            <ul className="space-y-2">
                                {['Severe pain during movement', 'Unstable fractures', 'Acute inflammation', 'Unsupervised heavy resistance'].map((item, i) => (
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
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Exercise Therapy?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        A personalized exercise program can restore strength, mobility, and confidence in daily activities.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg">
                        Book Your Exercise Therapy Session
                    </a>
                </section>
            </div>
        </div>
    );
};

export default ExerciseTherapy;