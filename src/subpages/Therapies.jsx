import React, { useState } from 'react';
// Import your new CSS file here:
// import './ModernTherapiesDesign.css'; 

const TherapiesData = {
    keyElectropathy: [
        { 
            id: 'ift', 
            title: 'IFT (Interferential Therapy)', 
            icon: '⚡',
            description: 'Utilizes **light electrical current waves** delivered at specific frequencies to penetrate deep into nerves and muscles, significantly reducing pain. It effectively stimulates the area to improve local **blood flow** and enhance muscle activity and relaxation.' 
        },
        { 
            id: 'tens', 
            title: 'TENS (Transcutaneous Electrical Nerve Stimulation)', 
            icon: '📶',
            description: 'A non-invasive technique applying **mild electrical stimulation** directly through the skin to provide relief from **chronic pain** and severe nerve pain. By blocking pain signals and promoting endorphin release, it also relaxes muscles and reduces joint stiffness.' 
        },
        { 
            id: 'ultrasound', 
            title: 'Ultrasound Therapy', 
            icon: '🔊',
            description: 'Uses high-frequency **sound waves** to generate thermal and non-thermal effects deep within the tissues. This targets and reduces deep-seated **inflammation and pain**, proving highly beneficial for injuries to muscles, ligaments, and tendons.' 
        },
    ],
    secondaryElectropathy: [
        { 
            id: 'swd', 
            title: 'SWD (Short Wave Diathermy)', 
            description: 'Generates heat in the deep connective tissues to significantly alleviate stiffness and pain. It is exceptionally effective for managing conditions like severe **back pain**, various forms of arthritis, and intense joint stiffness.' 
        },
        { 
            id: 'irr', 
            title: 'IRR (Infrared Radiation)', 
            description: 'Applies a warm light source to reduce superficial muscle and joint stiffness. It offers soothing relief for sprains, mild muscular injuries, and general **muscle fatigue**.' 
        },
        { 
            id: 'hotpacks', 
            title: 'Hydrocollator Hot Packs', 
            description: 'A highly effective method of applying moist heat, which reduces deep muscle stiffness and pain. The warmth aids in improving joint **flexibility** and accelerating overall muscle recovery.' 
        }
    ],
    advancedTherapies: [
        { 
            id: 'dryneedling', 
            title: 'Dry Needling', 
            icon: '📌',
            description: 'Involves the precise insertion of fine needles into **myofascial trigger points** to release deeply embedded muscle knots. This technique provides rapid and significant relief from chronic pain and helps improve joint range of movement.' 
        },
        { 
            id: 'cupping', 
            title: 'Cupping Therapy', 
            icon: '🔥',
            description: 'A traditional method where suction cups are applied to the skin to enhance **local blood flow**. This action helps reduce pain and swelling, effectively relieving muscle fatigue and chronic stiffness.' 
        },
        { 
            id: 'massagegun', 
            title: 'Massage Gun & Thrive Massager', 
            icon: '💪',
            description: 'Utilizes high-speed, percussive deep tissue massage to rapidly eliminate muscular stiffness and intense fatigue. It is highly effective in accelerating muscle recovery and reducing overall physical tension.' 
        }
    ]
};

const Therapies = () => {
    // State to manage which accordion item is currently open
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    return (
        <div className="therapies-page-v2">
            <h1 className="main-heading">जन सेवा फिज़ियो सेंटर – Our Therapies</h1>
            <p className="intro-text">
                Physiotherapy is a comprehensive medical practice aimed at improving body mobility, strength, and overall health. Our primary objective is to significantly reduce pain, strengthen weakened muscles and joints, and help the patient return to a normal, active life as quickly as possible.
            </p>

            {/* --- Electropathy & Pain Management Section --- */}
            <section className="therapy-section electrotherapy-section">
                <h2 className="section-heading-v2">⚡ Essential Electropathy & Pain Management</h2>
                
                {/* 1. Triptych/Key Feature Cards */}
                <div className="key-therapies-triptych">
                    {TherapiesData.keyElectropathy.map((therapy) => (
                        <div className="triptych-card" key={therapy.id}>
                            <div className="icon-badge">{therapy.icon}</div>
                            <h3 className="card-title">{therapy.title}</h3>
                            <p className="card-description" 
                                dangerouslySetInnerHTML={createMarkup(therapy.description)} />
                            
                        </div>
                    ))}
                </div>

                {/* 2. Secondary Electropathy - Accordion */}
                <div className="accordion-container">
                    <h3 className="accordion-heading">Other Heat & Electrical Modalities</h3>
                    {TherapiesData.secondaryElectropathy.map((therapy) => (
                        <div className="accordion-item" key={therapy.id}>
                            <button 
                                className={`accordion-header ${activeSecondaryId === therapy.id ? 'active' : ''}`}
                                onClick={() => toggleAccordion(therapy.id)}
                            >
                                {therapy.title}
                                <span className="toggle-icon">{activeSecondaryId === therapy.id ? '−' : '+'}</span>
                            </button>
                            <div className={`accordion-content ${activeSecondaryId === therapy.id ? 'open' : ''}`}>
                                <p dangerouslySetInnerHTML={createMarkup(therapy.description)} />
                                
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <hr className="section-divider-v2" />

            {/* --- Advanced Manual Therapy Section --- */}
            <section className="therapy-section advanced-therapy-section">
                <h2 className="section-heading-v2">✨ Advanced Manual Therapy Techniques</h2>
                <div className="advanced-therapy-blocks">
                    
                    {TherapiesData.advancedTherapies.map((therapy) => (
                        <div className="feature-block" key={therapy.id}>
                            <div className="block-header">
                                <div className="block-icon">{therapy.icon}</div>
                                <h3 className="block-title">{therapy.title}</h3>
                            </div>
                            <p className="block-description"
                                dangerouslySetInnerHTML={createMarkup(therapy.description)} />
                            
                        </div>
                    ))}
                    
                </div>
            </section>

        </div>
    );
};

export default Therapies;