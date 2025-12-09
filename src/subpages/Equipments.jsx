import React, { useState } from 'react';

const EquipmentData = {
    keyEquipment: [
        { 
            id: 'electrotherapy', 
            title: 'Electrotherapy Devices', 
            icon: '⚡',
            description: 'Includes <strong>TENS, IFT, Ultrasound therapy units, NMES, and Laser machines</strong>. Use electrical currents, sound waves, or light to reduce pain, activate weak muscles, and promote tissue healing.' 
        },
        { 
            id: 'exercise', 
            title: 'Exercise & Strengthening Equipment', 
            icon: '💪',
            description: 'Features <strong>resistance bands, dumbbells, medicine balls, ankle weights, physioballs, and pulley systems</strong>. Rebuild strength, flexibility, endurance, and joint stability during rehabilitation.' 
        },
        { 
            id: 'mobility', 
            title: 'Mobility Support Equipment', 
            icon: '🚶',
            description: 'Includes <strong>walkers, canes, crutches, wheelchairs, orthotic supports, and braces</strong>. Help patients move safely by stabilizing weak joints, reducing strain, and improving balance.' 
        },
        { 
            id: 'manual', 
            title: 'Manual Therapy Tools', 
            icon: '🖐️',
            description: 'Contains <strong>foam rollers, massage guns, trigger-point tools, cupping sets, and IASTM instruments</strong>. Reduce muscle tension, break adhesions, improve circulation, and support soft-tissue release.' 
        },
        { 
            id: 'cardio', 
            title: 'Cardio-Rehab Machines', 
            icon: '🏃',
            description: 'Includes <strong>treadmills, stationary cycles, steppers, and cross-trainers</strong>. Build stamina, cardiovascular fitness, and functional endurance during long-term rehabilitation programs.' 
        },
        { 
            id: 'specialized', 
            title: 'Specialized Treatment Equipment', 
            icon: '🔧',
            description: 'Advanced tools including <strong>traction units, shockwave therapy devices, and compression therapy systems</strong>. Provide targeted treatment for complex conditions and accelerate recovery.' 
        }
    ],
    secondaryEquipment: [
        { 
            id: 'electrotherapy-therapeutic', 
            title: 'Electrotherapy Devices (Therapeutic)', 
            description: 'Pain-relief machines such as <strong>TENS, IFT, Ultrasound, and NMES</strong> designed to stimulate nerves, reduce inflammation, and improve muscle activation. Accelerate recovery for both acute and chronic conditions.' 
        },
        { 
            id: 'exercise-strength', 
            title: 'Exercise & Strengthening Equipment (Advanced)', 
            description: 'Tools like <strong>TheraBands, kettlebells, strength tubes, balance boards, and reformers</strong> improve muscle power, flexibility, coordination, and posture. Crucial for restoring full function after injuries or surgery.' 
        },
        { 
            id: 'mobility-assistive', 
            title: 'Mobility Support Equipment (Assistive)', 
            description: 'Assistive devices such as <strong>adjustable walkers, elbow crutches, gait trainers, and supportive braces</strong> used to aid walking, protect healing tissues, and promote safe movement during rehabilitation.' 
        },
        { 
            id: 'manual-therapy', 
            title: 'Manual Therapy Tools (Clinical)', 
            description: 'Equipment like <strong>fascia tools, massage rollers, silicon cups, and percussive devices</strong> that assist therapists in reducing stiffness, releasing tight fascia, and improving soft-tissue mobility.' 
        }
    ],
    advancedEquipment: [
        { 
            id: 'electrotherapy-clinical', 
            title: 'Electrotherapy Devices', 
            icon: '🔬',
            description: 'Therapeutic systems such as <strong>muscle stimulators, ultrasound units, laser therapy devices, and diathermy machines</strong> used to control pain, increase blood flow, and assist injured muscles in regaining function.' 
        },
        { 
            id: 'exercise-functional', 
            title: 'Exercise & Strengthening Equipment', 
            icon: '🎯',
            description: 'Functional tools like <strong>resistance machines, wall pulleys, balance cushions, wobble boards, and core-training tools</strong> that enhance stability, correct imbalances, and support safe return to physical activity.' 
        },
        { 
            id: 'mobility-daily', 
            title: 'Mobility Support Equipment', 
            icon: '🦽',
            description: 'Daily-use supports including <strong>walking sticks, tripod canes, wheelchairs, knee braces, ankle supports, and orthotic inserts</strong> that help maintain mobility and protect joints during the healing phase.' 
        },
        { 
            id: 'manual-recovery', 
            title: 'Manual Therapy Tools', 
            icon: '🌡️',
            description: 'Recovery aids such as <strong>hot/cold packs, massage sticks, handheld rollers, and IASTM blades</strong> that complement manual techniques by easing muscle tension and improving tissue quality.' 
        },
        { 
            id: 'cardio-lowimpact', 
            title: 'Cardio-Rehab Machines', 
            icon: '🚴',
            description: 'Low-impact devices like <strong>recumbent bikes, air bikes, and compact step machines</strong> that maximize cardiovascular training while reducing stress on joints, ideal for rehabilitation and wellness.' 
        },
        { 
            id: 'assessment-tools', 
            title: 'Assessment & Monitoring Tools', 
            icon: '📊',
            description: 'Clinical measurement devices including <strong>goniometers, dynamometers, posture analyzers, and range-of-motion tools</strong> that help track progress, measure improvements, and ensure optimal treatment outcomes.' 
        }
    ]
};

const Equipment = () => {
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);
    const [selectedBenefit, setSelectedBenefit] = useState('recovery');

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        recovery: { icon: '🎯', title: 'Faster Recovery', desc: 'Advanced equipment accelerates healing and tissue repair' },
        precision: { icon: '🔬', title: 'Precision Treatment', desc: 'Target specific areas with specialized therapeutic devices' },
        safety: { icon: '🛡️', title: 'Safe Rehabilitation', desc: 'Support systems ensure safe movement during recovery' },
        outcomes: { icon: '⭐', title: 'Better Outcomes', desc: 'State-of-the-art equipment for optimal rehabilitation results' }
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

                .key-therapies-triptych {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2.5rem;
                    margin-bottom: 3rem;
                }

                .triptych-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2.5rem;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .triptych-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
                    background-color: #fcfdff;
                }

                .icon-badge {
                    font-size: 3rem;
                    text-align: center;
                    margin-bottom: 1.5rem;
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
                    margin-top: 0.8rem;
                }

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

                .advanced-therapy-blocks {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2.5rem;
                    padding: 2rem;
                }

                .feature-block {
                    background: white;
                    border-radius: 20px;
                    padding: 2.5rem;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                }

                .feature-block:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
                    background-color: #fcfdff;
                }

                .block-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
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
                    .benefits-tabs {
                        flex-direction: column;
                    }
                    .benefit-tab {
                        width: 100%;
                    }
                    .testimonial-quote {
                        font-size: 4rem;
                    }
                }
            `}</style>

            <div className="therapies-page-v2">
                <h1 className="main-heading">जन सेवा फिज़ियो सेंटर — Equipment & Facilities</h1>
                <p className="intro-text">
                    Our center is equipped with state-of-the-art rehabilitation and therapeutic equipment designed to provide the highest quality care. From advanced electrotherapy devices to specialized exercise tools, we ensure optimal treatment outcomes for every patient.
                </p>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <h2 className="section-heading-v2">🎯 Equipment Advantages</h2>
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

                {/* Electrotherapy, Exercise & Mobility Equipment Section */}
                <section className="therapy-section electrotherapy-section">
                    <h2 className="section-heading-v2">🏥 Electrotherapy, Exercise & Mobility Equipment</h2>
                    <p className="section-description">Comprehensive range of therapeutic devices and training equipment for effective rehabilitation</p>
                    
                    <div className="key-therapies-triptych">
                        {EquipmentData.keyEquipment.map((equipment) => (
                            <div 
                                className="triptych-card" 
                                key={equipment.id}
                            >
                                <div className="icon-badge">{equipment.icon}</div>
                                <h3 className="card-title">{equipment.title}</h3>
                                <p className="card-description" 
                                    dangerouslySetInnerHTML={createMarkup(equipment.description)} />
                            </div>
                        ))}
                    </div>

                    {/* Therapeutic Devices & Support Systems - Accordion */}
                    <div className="accordion-container">
                        <h3 className="accordion-heading">Therapeutic Devices, Strength Tools & Support Systems</h3>
                        {EquipmentData.secondaryEquipment.map((equipment) => (
                            <div className="accordion-item" key={equipment.id}>
                                <button 
                                    className={`accordion-header ${activeSecondaryId === equipment.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(equipment.id)}
                                >
                                    {equipment.title}
                                    <span className="toggle-icon">{activeSecondaryId === equipment.id ? '−' : '+'}</span>
                                </button>
                                <div className={`accordion-content ${activeSecondaryId === equipment.id ? 'open' : ''}`}>
                                    <p dangerouslySetInnerHTML={createMarkup(equipment.description)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <hr className="section-divider-v2" />

                {/* Clinical Devices & Functional Training Tools Section */}
                <section className="therapy-section advanced-therapy-section">
                    <h2 className="section-heading-v2">✨ Clinical Devices, Functional Training Tools & Rehab Aids</h2>
                    <p className="section-description">Advanced equipment for clinical treatment, functional training, and comprehensive rehabilitation support</p>
                    <div className="advanced-therapy-blocks">
                        {EquipmentData.advancedEquipment.map((equipment) => (
                            <div className="feature-block" key={equipment.id}>
                                <div className="block-header">
                                    <div className="block-icon">{equipment.icon}</div>
                                    <h3 className="block-title">{equipment.title}</h3>
                                </div>
                                <p className="block-description"
                                    dangerouslySetInnerHTML={createMarkup(equipment.description)} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact Section */}
                <section className="faq-section">
                    <h2 className="section-heading-v2">🔬 Quality Equipment for Better Care</h2>
                    <div className="impact-container">
                        <div className="testimonial-highlight">
                            <div className="testimonial-quote">"</div>
                            <p className="testimonial-text-featured">जन सेवा फिज़ियो सेंटर is committed to providing the best rehabilitation equipment and facilities. Our investment in advanced technology ensures that every patient receives world-class treatment in a comfortable, professional environment.</p>
                            <div className="testimonial-footer">— Excellence in every detail</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Equipment;