import React, { useState } from 'react';

const RehabData = {
    keyRehab: [
        { 
            id: 'orthopedic', 
            title: 'Orthopedic Rehabilitation', 
            icon: '🦴',
            description: 'Recovery from <strong>fractures, ligament tears, joint injuries</strong>, and post-surgical procedures. Restores strength, mobility, balance, and joint stability for pain-free daily activities.' 
        },
        { 
            id: 'neurological', 
            title: 'Neurological Rehabilitation', 
            icon: '🧠',
            description: 'For <strong>stroke, spinal cord injuries, Parkinson\'s disease</strong>, and brain injuries. Improves coordination, muscle control, balance, and walking ability through neuro-facilitation.' 
        },
        { 
            id: 'sports', 
            title: 'Sports Rehabilitation', 
            icon: '⚽',
            description: 'Addresses athletic injuries like <strong>sprains, strains, tendonitis</strong>, and muscle tears. Rebuilds strength, improves flexibility, and ensures safe return to peak performance.' 
        },
        { 
            id: 'postsurgical', 
            title: 'Post-Surgical Rehabilitation', 
            icon: '🏥',
            description: 'Supports healing after <strong>orthopedic or spinal surgeries</strong>. Focuses on pain control, swelling reduction, early mobility, and restoring full function through structured phases.' 
        },
        { 
            id: 'geriatric', 
            title: 'Geriatric Rehabilitation', 
            icon: '👴',
            description: 'Helps older adults manage <strong>arthritis, balance deficits, joint stiffness</strong>, and weakness. Improves mobility, safety, independence, and prevents falls.' 
        },
        { 
            id: 'pediatric', 
            title: 'Pediatric Rehabilitation', 
            icon: '👶',
            description: 'For children with <strong>developmental delays, cerebral palsy, muscular dystrophy</strong>. Enhances motor skills, muscle tone, balance, and functional independence.' 
        }
    ],
    secondaryRehab: [
        { 
            id: 'orthopedic-restorative', 
            title: 'Orthopedic Rehabilitation (Restorative)', 
            description: 'A restorative approach for musculoskeletal injuries, focusing on <strong>rebuilding joint function, reducing pain</strong>, and promoting tissue healing. Ensures smooth transition from immobilization to active movement and full recovery.' 
        },
        { 
            id: 'neurological-restorative', 
            title: 'Neurological Rehabilitation (Restorative)', 
            description: 'Restores lost functions affected by the nervous system. Emphasizes <strong>neuroplasticity, gait training, balance re-education</strong>, and sensory-motor integration for independence.' 
        },
        { 
            id: 'sports-condition', 
            title: 'Sports Rehabilitation (Condition-Specific)', 
            description: 'Tailored to the demands of each sport. Combines <strong>strengthening, proprioception, agility drills</strong>, and conditioning to optimize performance and reduce recurring injuries.' 
        },
        { 
            id: 'postsurgical-functional', 
            title: 'Post-Surgical Rehabilitation (Functional)', 
            description: 'Rebuilds functional mobility following procedures like <strong>ACL repair, spinal fusion, or tendon surgery</strong>. Progresses through recovery milestones for safe healing and optimal outcomes.' 
        }
    ],
    advancedRehab: [
        { 
            id: 'orthopedic-performance', 
            title: 'Orthopedic Rehabilitation', 
            icon: '💪',
            description: 'Supports long-term recovery and <strong>performance restoration</strong> after injuries or surgeries affecting bones, joints, and muscles. Ensures patients regain full strength, endurance, and functional movement for work or daily life.' 
        },
        { 
            id: 'neurological-longterm', 
            title: 'Neurological Rehabilitation', 
            icon: '🎯',
            description: 'Provides ongoing support for chronic neurological conditions. Helps patients <strong>maintain mobility, prevent complications</strong>, and continue improving functional abilities through continuous therapy.' 
        },
        { 
            id: 'sports-performance', 
            title: 'Sports Rehabilitation', 
            icon: '🏃',
            description: 'Focuses on high-level performance recovery, sport-specific conditioning, and <strong>injury prevention strategies</strong>. Works on speed, power, balance, and technique refinement for athletes.' 
        },
        { 
            id: 'postsurgical-longterm', 
            title: 'Post-Surgical Rehabilitation', 
            icon: '🔄',
            description: 'Extends recovery to long-term functional restoration. Ensures <strong>full range of motion, muscular balance</strong>, and confidence in movement to avoid future complications or reinjury.' 
        },
        { 
            id: 'geriatric-wellness', 
            title: 'Geriatric Rehabilitation', 
            icon: '🌟',
            description: 'Promotes long-term wellness by maintaining strength, mobility, and functional skills. Helps in <strong>fall prevention, independence</strong>, and managing chronic conditions safely.' 
        },
        { 
            id: 'pediatric-developmental', 
            title: 'Pediatric Rehabilitation', 
            icon: '🌱',
            description: 'Supports developmental growth, long-term motor learning, and functional progression. Helps children adapt, strengthen, and achieve <strong>age-appropriate physical abilities</strong> over extended periods.' 
        }
    ]
};

const Rehabilitation = () => {
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);
    const [selectedBenefit, setSelectedBenefit] = useState('physical');

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        physical: { icon: '🦴', title: 'Physical Recovery', desc: 'Restore strength, mobility, and function after injuries or surgeries' },
        functional: { icon: '🎯', title: 'Functional Restoration', desc: 'Return to daily activities, work, and sports with confidence' },
        independence: { icon: '🌟', title: 'Independence', desc: 'Regain autonomy and quality of life through structured rehabilitation' },
        prevention: { icon: '🛡️', title: 'Prevention', desc: 'Reduce risk of re-injury and long-term complications' }
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
                <h1 className="main-heading">जन सेवा फिज़ियो सेंटर — Rehabilitation Programs</h1>
                <p className="intro-text">
                    Comprehensive rehabilitation programs designed to restore function, improve quality of life, and help patients return to their normal activities. Our evidence-based approach combines specialized techniques with personalized care for optimal recovery outcomes.
                </p>

                <section className="benefits-section">
                    <h2 className="section-heading-v2">🎯 Key Benefits of Rehabilitation</h2>
                    <div className="benefits-tabs">
                        {Object.keys(benefitsData).map((key) => (
                            <button
                                key={key}
                                className={`benefit-tab ${selectedBenefit === key ? 'active' : ''}`}
                                onClick={() => setSelectedBenefit(key)}>
                                <span className="benefit-icon">{benefitsData[key].icon}</span>
                                <span className="benefit-label">{benefitsData[key].title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="benefit-content">
                        <p>{benefitsData[selectedBenefit].desc}</p>
                    </div>
                </section>

                <section className="therapy-section electrotherapy-section">
                    <h2 className="section-heading-v2">🏥 Physical & Functional Rehabilitation</h2>
                    <p className="section-description">Comprehensive rehabilitation programs for injuries, surgeries, neurological conditions, and developmental needs</p>
                    
                    <div className="key-therapies-triptych">
                        {RehabData.keyRehab.map((rehab) => (
                            <div 
                                className="triptych-card" 
                                key={rehab.id}>
                                <div className="icon-badge">{rehab.icon}</div>
                                <h3 className="card-title">{rehab.title}</h3>
                                <p className="card-description" 
                                    dangerouslySetInnerHTML={createMarkup(rehab.description)} />
                            </div>
                        ))}
                    </div>

                    <div className="accordion-container">
                        <h3 className="accordion-heading">Restorative & Condition-Specific Programs</h3>
                        {RehabData.secondaryRehab.map((rehab) => (
                            <div className="accordion-item" key={rehab.id}>
                                <button 
                                    className={`accordion-header ${activeSecondaryId === rehab.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(rehab.id)}>
                                    {rehab.title}
                                    <span className="toggle-icon">{activeSecondaryId === rehab.id ? '−' : '+'}</span>
                                </button>
                                <div className={`accordion-content ${activeSecondaryId === rehab.id ? 'open' : ''}`}>
                                    <p dangerouslySetInnerHTML={createMarkup(rehab.description)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <hr className="section-divider-v2" />

                <section className="therapy-section advanced-therapy-section">
                    <h2 className="section-heading-v2">✨ Performance, Recovery & Long-Term Rehabilitation</h2>
                    <p className="section-description">Advanced programs for sustained recovery, performance optimization, and long-term wellness</p>
                    <div className="advanced-therapy-blocks">
                        {RehabData.advancedRehab.map((rehab) => (
                            <div className="feature-block" key={rehab.id}>
                                <div className="block-header">
                                    <div className="block-icon">{rehab.icon}</div>
                                    <h3 className="block-title">{rehab.title}</h3>
                                </div>
                                <p className="block-description"
                                    dangerouslySetInnerHTML={createMarkup(rehab.description)} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="faq-section">
                    <h2 className="section-heading-v2">📊 Our Commitment to Recovery</h2>
                    <div className="impact-container">
                        <div className="testimonial-highlight">
                            <div className="testimonial-quote">"</div>
                            <p className="testimonial-text-featured">जन सेवा फिज़ियो सेंटर provides comprehensive rehabilitation services designed to restore function and improve quality of life. Our personalized approach ensures each patient receives the care they need for optimal recovery.</p>
                            <div className="testimonial-footer">— Dedicated to your recovery journey</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Rehabilitation;