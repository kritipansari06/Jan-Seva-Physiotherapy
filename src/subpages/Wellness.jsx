import React, { useState } from 'react';

const WellnessData = {
    keyWellness: [
        { 
            id: 'posture', 
            title: 'Posture & Ergonomic Wellness', 
            icon: '🧘',
            description: 'Correcting <strong>sitting, standing, and working positions</strong> to reduce strain on the neck, back, and joints. Prevents chronic pain, improves spinal alignment, and reduces work-related muscle tension.' 
        },
        { 
            id: 'lifestyle', 
            title: 'Lifestyle & Fitness Wellness', 
            icon: '💪',
            description: 'Guidance on <strong>daily physical activity, flexibility routines, strengthening exercises</strong>, and healthy movement patterns. Supports long-term health, weight control, energy levels, and better musculoskeletal function.' 
        },
        { 
            id: 'injury-prevention', 
            title: 'Injury Prevention Wellness', 
            icon: '🛡️',
            description: 'Includes <strong>warm-up routines, core strengthening, flexibility training</strong>, and movement correction. Helps avoid sports injuries, workplace strain, and overuse problems by building joint resilience.' 
        },
        { 
            id: 'stress-relief', 
            title: 'Stress Relief & Relaxation Wellness', 
            icon: '🧘‍♀️',
            description: 'Uses <strong>deep breathing, stretching, mindfulness</strong>, and gentle mobility exercises to reduce muscle tension and improve mental calmness. Prevents stress-related stiffness, headaches, and posture issues.' 
        },
        { 
            id: 'chronic-management', 
            title: 'Chronic Condition Management', 
            icon: '❤️',
            description: 'Supports long-term control of <strong>arthritis, back pain, joint degeneration</strong>, and lifestyle-related disorders. Focuses on mobility exercises and joint-protection strategies to maintain comfort and independence.' 
        },
        { 
            id: 'preventive-care', 
            title: 'Preventive Care & Health Optimization', 
            icon: '⭐',
            description: 'Proactive wellness strategies including <strong>body awareness, movement screening</strong>, and early intervention. Helps identify potential issues before they develop into serious conditions.' 
        }
    ],
    secondaryWellness: [
        { 
            id: 'posture-mobility', 
            title: 'Posture & Ergonomic Wellness (Body Awareness)', 
            description: 'Enhances body awareness and <strong>workstation ergonomics</strong> to protect the spine and reduce repetitive strain injuries. Encourages balanced posture during daily movements to prevent chronic musculoskeletal issues.' 
        },
        { 
            id: 'lifestyle-strength', 
            title: 'Lifestyle & Fitness Wellness (Active Living)', 
            description: 'Promotes regular exercise routines, <strong>strength building, and mobility training</strong> to keep the body active and stable. Helps maintain cardiovascular health, flexibility, and overall functional ability throughout life.' 
        },
        { 
            id: 'injury-prevention-training', 
            title: 'Injury Prevention Wellness (Movement Safety)', 
            description: 'Emphasizes <strong>safe movement patterns, proper lifting techniques, balance training</strong>, and sport-specific conditioning. Reduces the likelihood of falls, sprains, and muscle tears by improving physical stress response.' 
        },
        { 
            id: 'stress-relaxation', 
            title: 'Stress Relief & Relaxation Wellness (Mental Health)', 
            description: 'Improves emotional well-being by reducing tension using <strong>gentle mobility work, controlled breathing, and guided relaxation</strong> methods. Supports better sleep, reduced fatigue, and calmer daily functioning.' 
        }
    ],
    advancedWellness: [
        { 
            id: 'posture-longterm', 
            title: 'Posture & Ergonomic Wellness', 
            icon: '🎯',
            description: 'Develops long-term posture correction habits and <strong>ergonomic adjustments</strong> that protect joints during work, sports, and routine activities. Helps minimize spinal stress and improve movement efficiency.' 
        },
        { 
            id: 'lifestyle-sustainable', 
            title: 'Lifestyle & Fitness Wellness', 
            icon: '🌟',
            description: 'Encourages <strong>sustainable fitness, healthy mobility, and strength-based wellness</strong>. Supports long-term physical health by promoting consistent exercise, active living, and good movement quality.' 
        },
        { 
            id: 'injury-prevention-strategy', 
            title: 'Injury Prevention Wellness', 
            icon: '🔒',
            description: 'Creates long-term prevention strategies using <strong>core stability, balance training, flexibility routines</strong>, and corrective exercises. Safeguards the body from recurring injuries and age-related declines.' 
        },
        { 
            id: 'stress-management', 
            title: 'Stress Relief & Relaxation Wellness', 
            icon: '☮️',
            description: 'Focuses on long-term <strong>muscle relaxation, improved breathing patterns, and stress management</strong> routines. Enhances recovery, supports mental health, and maintains physical comfort.' 
        },
        { 
            id: 'chronic-ongoing', 
            title: 'Chronic Condition Management', 
            icon: '🩺',
            description: 'Provides ongoing wellness support for conditions requiring continuous care. Helps <strong>maintain mobility, reduce flare-ups</strong>, and ensure better functional capacity through guided therapeutic routines.' 
        },
        { 
            id: 'holistic-wellness', 
            title: 'Holistic Health & Well-being', 
            icon: '🌈',
            description: 'Integrates <strong>physical, mental, and lifestyle wellness</strong> for comprehensive health optimization. Promotes balance between body function, emotional health, and daily vitality for sustained quality of life.' 
        }
    ]
};

const Wellness = () => {
    const [activeSecondaryId, setActiveSecondaryId] = useState(null);
    const [selectedBenefit, setSelectedBenefit] = useState('prevention');

    const toggleAccordion = (id) => {
        setActiveSecondaryId(activeSecondaryId === id ? null : id);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    const benefitsData = {
        prevention: { icon: '🛡️', title: 'Disease Prevention', desc: 'Proactive strategies to prevent injuries and chronic conditions' },
        vitality: { icon: '⚡', title: 'Enhanced Vitality', desc: 'Boost energy levels and improve overall quality of life' },
        balance: { icon: '⚖️', title: 'Mind-Body Balance', desc: 'Harmonize physical health with mental and emotional well-being' },
        longevity: { icon: '🌱', title: 'Long-term Health', desc: 'Build sustainable habits for lifelong wellness and independence' }
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
                <h1 className="main-heading">जन सेवा फिज़ियो सेंटर — Wellness Programs</h1>
                <p className="intro-text">
                    Comprehensive wellness programs designed to promote long-term health, prevent injuries, and enhance quality of life. Our holistic approach combines physical therapy expertise with lifestyle guidance for optimal well-being.
                </p>

                <section className="benefits-section">
                    <h2 className="section-heading-v2">🎯 Benefits of Wellness Programs</h2>
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
                    <h2 className="section-heading-v2">🌟 Posture, Lifestyle & Injury Prevention Wellness</h2>
                    <p className="section-description">Foundational wellness programs for healthy living, injury prevention, and chronic condition management</p>
                    
                    <div className="key-therapies-triptych">
                        {WellnessData.keyWellness.map((wellness) => (
                            <div 
                                className="triptych-card" 
                                key={wellness.id}>
                                <div className="icon-badge">{wellness.icon}</div>
                                <h3 className="card-title">{wellness.title}</h3>
                                <p className="card-description" 
                                    dangerouslySetInnerHTML={createMarkup(wellness.description)} />
                            </div>
                        ))}
                    </div>

                    <div className="accordion-container">
                        <h3 className="accordion-heading">Mobility, Strength, Balance & Daily Wellness</h3>
                        {WellnessData.secondaryWellness.map((wellness) => (
                            <div className="accordion-item" key={wellness.id}>
                                <button 
                                    className={`accordion-header ${activeSecondaryId === wellness.id ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(wellness.id)}
                                >
                                    {wellness.title}
                                    <span className="toggle-icon">{activeSecondaryId === wellness.id ? '−' : '+'}</span>
                                </button>
                                <div className={`accordion-content ${activeSecondaryId === wellness.id ? 'open' : ''}`}>
                                    <p dangerouslySetInnerHTML={createMarkup(wellness.description)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                <hr className="section-divider-v2" />

                <section className="therapy-section advanced-therapy-section">
                    <h2 className="section-heading-v2">✨ Functional, Preventive & Long-Term Wellness</h2>
                    <p className="section-description">Sustainable wellness strategies for lasting health, injury prevention, and optimal quality of life</p>
                    <div className="advanced-therapy-blocks">
                        {WellnessData.advancedWellness.map((wellness) => (
                            <div className="feature-block" key={wellness.id}>
                                <div className="block-header">
                                    <div className="block-icon">{wellness.icon}</div>
                                    <h3 className="block-title">{wellness.title}</h3>
                                </div>
                                <p className="block-description"
                                    dangerouslySetInnerHTML={createMarkup(wellness.description)} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="faq-section">
                    <h2 className="section-heading-v2">🌈 Your Journey to Optimal Wellness</h2>
                    <div className="impact-container">
                        <div className="testimonial-highlight">
                            <div className="testimonial-quote">"</div>
                            <p className="testimonial-text-featured">जन सेवा फिज़ियो सेंटर believes that true wellness extends beyond treatment. Our comprehensive wellness programs empower you to take control of your health, prevent injuries, and maintain vitality for years to come.</p>
                            <div className="testimonial-footer">— Empowering healthy living every day</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Wellness;