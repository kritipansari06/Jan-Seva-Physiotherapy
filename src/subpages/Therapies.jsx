import React, { useState } from 'react';

const TherapiesData = {
    keyElectropathy: [
        { 
            id: 'tens', 
            title: 'TENS (Transcutaneous Electrical Nerve Stimulation)', 
            icon: '⚡',
            description: 'Delivers small <strong>electrical pulses</strong> through skin electrodes to block pain signals and stimulate endorphins. Effective for <strong>back pain, neck pain, and neuropathic pain</strong>.' 
        },
        { 
            id: 'ift', 
            title: 'IFT (Interferential Therapy)', 
            icon: '📶',
            description: 'Uses <strong>medium-frequency currents</strong> that penetrate deeper than TENS for deep tissue pain relief. Ideal for <strong>joint pain, muscle spasms, and arthritis pain</strong>.' 
        },
        { 
            id: 'ultrasound', 
            title: 'Ultrasound Therapy', 
            icon: '🔊',
            description: 'High-frequency <strong>sound waves</strong> create deep heating, improving blood flow for tissue healing and inflammation control. Used for <strong>tendonitis, ligament injuries, and muscle tears</strong>.' 
        },
    ],
    secondaryElectropathy: [
        { 
            id: 'ift-vacuum', 
            title: 'IFT + Vacuum Therapy', 
            description: 'Combines IFT with <strong>suction electrodes</strong> for better contact and deeper effect. Provides pain relief with muscle stimulation for <strong>chronic pain and tight muscles</strong>.' 
        },
        { 
            id: 'nmes', 
            title: 'Muscle Stimulator (NMES)', 
            description: 'Electrical impulses cause <strong>muscle contraction</strong> to strengthen weak muscles. Used for <strong>paralysis and post-surgery weakness</strong>.' 
        },
        { 
            id: 'hotpack', 
            title: 'Hot Pack Therapy', 
            description: 'Moist heat increases <strong>blood flow</strong> and loosens tight muscles for relaxation and stiffness reduction. Ideal for <strong>back pain, neck stiffness, and chronic arthritis</strong>.' 
        },
        { 
            id: 'coldpack', 
            title: 'Cold Pack / Cryotherapy', 
            description: 'Ice therapy reduces <strong>inflammation and acute pain</strong>. Used for <strong>sprains, strains, and fresh injuries</strong>.' 
        },
        { 
            id: 'traction', 
            title: 'Traction (Cervical & Lumbar)', 
            description: 'Gently stretches the spinal segments for <strong>spine decompression</strong>. Effective for <strong>slip disc, sciatica, and nerve compression</strong>.' 
        },
        { 
            id: 'laser', 
            title: 'Laser Therapy (LLLT)', 
            description: 'Low-level laser light stimulates <strong>cell repair</strong> for accelerated healing. Used for <strong>wounds, tendon injuries, and chronic inflammation</strong>.' 
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
            title: 'Mobilization (Grade I–V)', 
            icon: '🔄',
            description: 'Slow, controlled <strong>joint gliding techniques</strong> to improve joint movement. Used for <strong>frozen shoulder, arthritis, and spinal stiffness</strong>.' 
        },
        { 
            id: 'manipulation', 
            title: 'Manipulation', 
            icon: '💫',
            description: 'Quick thrust techniques for <strong>fast restoration of joint mobility</strong>. Safe when done by trained physiotherapists for <strong>cervical stiffness, lumbar locks, and facet joint issues</strong>.' 
        },
        { 
            id: 'mfr', 
            title: 'Myofascial Release (MFR)', 
            icon: '🖐️',
            description: 'Deep pressure applied on tight <strong>fascia lines</strong> to release muscle tightness and restrictions. Ideal for <strong>trigger points and chronic muscle tightness</strong>.' 
        },
        { 
            id: 'triggerpoint', 
            title: 'Trigger Point Therapy', 
            icon: '🎯',
            description: 'Pressure applied on specific painful spots in muscles to remove <strong>"knots"</strong>. Used for <strong>neck knots, headaches, and upper-back stiffness</strong>.' 
        },
        { 
            id: 'stm', 
            title: 'Soft Tissue Mobilization (STM)', 
            icon: '✋',
            description: 'Deep stroking, kneading, and stretching to improve <strong>muscle flexibility</strong>. Used for <strong>tendonitis and muscle shortening</strong>.' 
        },
        { 
            id: 'cupping', 
            title: 'Cupping Therapy', 
            icon: '🔥',
            description: 'Suction cups lift soft tissues to increase <strong>blood flow</strong> and reduce muscle tension. Effective for <strong>back pain and muscle tightness</strong>.' 
        },
        { 
            id: 'dryneedling', 
            title: 'Dry Needling', 
            icon: '📌',
            description: 'Thin needles inserted into tight muscle spots to release <strong>deep trigger points</strong>. Used for <strong>sciatica, neck pain, and chronic tight areas</strong>.' 
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
            id: 'kinesiotaping', 
            title: 'Kinesio Taping', 
            icon: '🎀',
            description: 'Support muscles without restricting movement. Used for <strong>sports injuries and posture correction</strong>.' 
        },
        { 
            id: 'posture', 
            title: 'Posture Correction Therapy', 
            icon: '🧍',
            description: 'Correct faulty posture patterns through manual correction and exercises. Used for <strong>cervical pain, back pain, and rounded shoulders</strong>.' 
        }
    ]
};

const Therapies = () => {
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
        <>
            <style>{`
                .therapies-page-v2 {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                    min-height: 100vh;
                }

                .main-heading {
                    font-size: 2.5rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 1rem;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .intro-text {
                    text-align: center;
                    font-size: 1.1rem;
                    color: #4a5568;
                    max-width: 800px;
                    margin: 0 auto 3rem;
                    line-height: 1.7;
                }

               
                /* Benefits Section */
                .benefits-section {
                    background: white;
                    border-radius: 20px;
                    padding: 2.5rem;
                    margin-bottom: 3rem;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                .section-heading-v2 {
                    font-size: 2rem;
                    font-weight: 600;
                    margin-bottom: 2rem;
                    color: #2d3748;
                    text-align: center;
                }

                .benefits-tabs {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin: 2rem 0;
                }

                .benefit-tab {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem 1.5rem;
                    border: 2px solid #e2e8f0;
                    background: white;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 1rem;
                    font-weight: 500;
                }

                .benefit-tab:hover {
                    border-color: #667eea;
                    background: #f7fafc;
                }

                .benefit-tab.active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border-color: transparent;
                }

                .benefit-icon {
                    font-size: 1.5rem;
                }

                .benefit-content {
                    text-align: center;
                    padding: 1.5rem;
                    background: #f7fafc;
                    border-radius: 15px;
                    font-size: 1.1rem;
                    color: #4a5568;
                    min-height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .section-description {
                    text-align: center;
                    color: #718096;
                    font-size: 1rem;
                    margin-bottom: 2rem;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .therapy-section {
                    margin-bottom: 3rem;
                }

                /* Triptych Cards */
                .key-therapies-triptych {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .triptych-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    position: relative;
                }

                .triptych-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
                }

                .icon-badge {
                    font-size: 3rem;
                    text-align: center;
                    margin-bottom: 1rem;
                }

                .card-title {
                    font-size: 1.4rem;
                    font-weight: 600;
                    color: #2d3748;
                    margin-bottom: 1rem;
                    text-align: center;
                }

                .card-description {
                    color: #4a5568;
                    line-height: 1.7;
                    font-size: 0.95rem;
                }



                /* Accordion */
                .accordion-container {
                    background: white;
                    border-radius: 15px;
                    padding: 2rem;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                }

                .accordion-heading {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #2d3748;
                    margin-bottom: 1.5rem;
                }

                .accordion-item {
                    border-bottom: 1px solid #e2e8f0;
                }

                .accordion-item:last-child {
                    border-bottom: none;
                }

                .accordion-header {
                    width: 100%;
                    padding: 1.5rem;
                    background: none;
                    border: none;
                    text-align: left;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #2d3748;
                    cursor: pointer;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: color 0.3s ease;
                }

                .accordion-header:hover {
                    color: #667eea;
                }

                .accordion-header.active {
                    color: #667eea;
                }

                .toggle-icon {
                    font-size: 1.5rem;
                    font-weight: 300;
                }

                .accordion-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    padding: 0 1.5rem;
                }

                .accordion-content.open {
                    max-height: 300px;
                    padding: 0 1.5rem 1.5rem;
                }

                .accordion-content p {
                    color: #4a5568;
                    line-height: 1.7;
                }

                .section-divider-v2 {
                    border: none;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #667eea, transparent);
                    margin: 4rem 0;
                }

                /* Advanced Therapy Blocks */
                .advanced-therapy-blocks {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    padding: 2rem;
                }

                .feature-block {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .feature-block:hover {
                    transform: translateY(-5px);
                }

                .block-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .block-icon {
                    font-size: 2.5rem;
                }

                .block-title {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #2d3748;
                }

                .block-description {
                    color: #4a5568;
                    line-height: 1.7;
                    font-size: 0.95rem;
                }



                /* Success Stories & Impact Section */
                .faq-section {
                    background: white;
                    border-radius: 20px;
                    padding: 3rem;
                    margin-bottom: 3rem;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                .impact-container {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    margin-top: 2rem;
                }

               

                

                .impact-icon {
                    font-size: 5rem;
                    opacity: 0.9;
                }

                .impact-details {
                    flex: 1;
                }

                .impact-number-big {
                    font-size: 4rem;
                    font-weight: 700;
                    line-height: 1;
                    margin-bottom: 0.5rem;
                }

                .impact-label-big {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    opacity: 0.95;
                }

                .impact-description {
                    font-size: 1rem;
                    opacity: 0.9;
                    line-height: 1.6;
                }

                .impact-grid-small {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 1.5rem;
                }

                

                .testimonial-highlight {
                    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
                    border-radius: 20px;
                    padding: 3rem;
                    border-left: 6px solid #667eea;
                    position: relative;
                }

                .testimonial-quote {
                    position: absolute;
                    top: 1rem;
                    left: 2rem;
                    font-size: 6rem;
                    color: #667eea;
                    opacity: 0.2;
                    font-family: Georgia, serif;
                    line-height: 1;
                }

                .testimonial-text-featured {
                    font-size: 1.2rem;
                    color: #2d3748;
                    line-height: 1.8;
                    font-style: italic;
                    margin-bottom: 1rem;
                    position: relative;
                    z-index: 1;
                }

                .testimonial-footer {
                    text-align: right;
                    color: #667eea;
                    font-weight: 600;
                    font-size: 1rem;
                }

               
                @media (max-width: 768px) {
                    .therapies-page-v2 {
                        padding: 1rem;
                    }
                    .main-heading {
                        font-size: 1.8rem;
                    }
                    .intro-text {
                        font-size: 1rem;
                    }
                    .stats-container {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .benefits-tabs {
                        flex-direction: column;
                    }
                    .benefit-tab {
                        width: 100%;
                    }
                   
                    .impact-icon {
                        font-size: 3rem;
                    }
                    .impact-number-big {
                        font-size: 3rem;
                    }
                    .impact-label-big {
                        font-size: 1.2rem;
                    }
                    .impact-grid-small {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .testimonial-quote {
                        font-size: 4rem;
                    }
                }
            `}</style>

            <div className="therapies-page-v2">
                <h1 className="main-heading">जन सेवा फिज़ियो सेंटर – Our Therapies</h1>
                <p className="intro-text">
                    Physiotherapy is a comprehensive medical practice aimed at improving body mobility, strength, and overall health. Our primary objective is to significantly reduce pain, strengthen weakened muscles and joints, and help the patient return to a normal, active life as quickly as possible.
                </p>

               
                {/* Benefits Section */}
                <section className="benefits-section">
                    <h2 className="section-heading-v2">🎯 Key Benefits of Our Therapies</h2>
                    <div className="benefits-tabs">
                        {Object.keys(benefitsData).map((key) => (
                            <button
                                key={key}
                                className={`benefit-tab ${selectedBenefit === key ? 'active' : ''}`}
                                onClick={() => setSelectedBenefit(key)}
                            >
                                <span className="benefit-icon">{benefitsData[key].icon}</span>
                                <span className="benefit-label">{benefitsData[key].title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="benefit-content">
                        <p>{benefitsData[selectedBenefit].desc}</p>
                    </div>
                </section>

                {/* --- Electropathy & Pain Management Section --- */}
                <section className="therapy-section electrotherapy-section">
                    <h2 className="section-heading-v2">⚡ Essential Electrotherapy & Pain Management</h2>
                    <p className="section-description">Advanced electrical and physical modalities for effective pain relief and tissue healing</p>
                    
                    {/* 1. Triptych/Key Feature Cards */}
                    <div className="key-therapies-triptych">
                        {TherapiesData.keyElectropathy.map((therapy) => (
                            <div 
                                className="triptych-card" 
                                key={therapy.id}
                            >
                                <div className="icon-badge">{therapy.icon}</div>
                                <h3 className="card-title">{therapy.title}</h3>
                                <p className="card-description" 
                                    dangerouslySetInnerHTML={createMarkup(therapy.description)} />
                            </div>
                        ))}
                    </div>

                    {/* 2. Secondary Electropathy - Accordion */}
                    <div className="accordion-container">
                        <h3 className="accordion-heading">Additional Electrotherapy & Physical Modalities</h3>
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
                    <p className="section-description">Expert hands-on techniques for joint mobility, muscle release, and functional restoration</p>
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

                {/* Success Stories & Impact Section */}
                <section className="faq-section">
                    <h2 className="section-heading-v2">📊 Our Impact in Numbers</h2>
                    <div className="impact-container">
                        

                        <div className="testimonial-highlight">
                            <div className="testimonial-quote">"</div>
                            <p className="testimonial-text-featured">जन सेवा फिज़ियो सेंटर has transformed countless lives through dedicated care and advanced treatment methods. Our commitment to excellence continues to serve the Jaipur community.</p>
                            <div className="testimonial-footer">— Trusted by families across Jaipur</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Therapies;