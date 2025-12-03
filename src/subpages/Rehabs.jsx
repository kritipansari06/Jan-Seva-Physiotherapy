import React from 'react';
// Assuming CenterStyles.css is imported in your main App.js or similar file
// import './CenterStyles.css'; 

const Rehabs = () => {
  return (
    <div className="rehabs-container">
      <h1 className="main-heading">🩺 Comprehensive Rehabilitation (पुनर्वास)</h1>
      <p className="intro-text">
        **Rehabilitation** is the cornerstone of our service, focusing on restoring function, reducing disability, and improving the quality of life after injury, surgery, or chronic illness. Our programs are designed to be individualized, progressive, and highly supportive.
      </p>

      {/* --- Core Philosophy Section --- */}
      <section className="rehab-section core-philosophy-section">
        <h2 className="section-heading">🌱 Our Core Rehabilitation Philosophy</h2>
        <div className="therapy-grid">
          
          <div className="therapy-card">
            <h3 className="card-title">Patient-Centered Goals</h3>
            <p className="card-description">
              Every rehabilitation plan is built around **your specific needs** and desired outcomes. We work together to set measurable goals, ensuring the focus is always on returning you to the activities you love, whether it's sports or simple daily tasks.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="therapy-card">
            <h3 className="card-title">Holistic & Integrative Care</h3>
            <p className="card-description">
              We integrate various modalities—from electrotherapy and advanced techniques like Dry Needling to specialized strength training—to treat the entire person, not just the injury. This approach ensures a deeper, more sustainable recovery.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="therapy-card">
            <h3 className="card-title">Empowerment Through Education</h3>
            <p className="card-description">
              We believe knowledge is key to long-term health. We educate you on injury prevention, proper **body mechanics**, and effective at-home exercises, giving you the tools to manage your health independently long after therapy ends.
            </p>
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* --- Phases of Rehabilitation Section --- */}
      <section className="rehab-section phases-section">
        <h2 className="section-heading">🗺️ The Phases of Your Recovery</h2>
        <div className="therapy-grid">

          <div className="therapy-card">
            <h3 className="card-title">Phase I: Pain Management & Protection</h3>
            <p className="card-description">
              The initial focus is on **reducing acute pain and inflammation** using modalities like IFT, TENS, Ultrasound, and Hydrocollator packs. We emphasize joint protection and gentle, controlled movement to prevent further injury.
            </p>
            <div className="image-placeholder"></div>
          </div>

          <div className="therapy-card">
            <h3 className="card-title">Phase II: Restoration of Mobility & Flexibility</h3>
            <p className="card-description">
              Once pain is controlled, we focus on regaining the full **Range of Motion (ROM)**. Techniques include gentle stretching, joint mobilization, the use of the **CPM Machine**, and tools like the Shoulder Wheel to break down stiffness.
            </p>
            <div className="image-placeholder"></div>
          </div>

          <div className="therapy-card">
            <h3 className="card-title">Phase III: Strength & Functional Training</h3>
            <p className="card-description">
              This phase involves rebuilding muscle strength and endurance using **Quadriceps Chairs**, **resistance bands**, and functional exercises. We also introduce **Balance Board** and core training to prepare the body for daily tasks and activities.
            </p>
            <div className="image-placeholder">

[Image of a person doing a guided squat exercise]
</div>
          </div>
          
          <div className="therapy-card">
            <h3 className="card-title">Phase IV: Sport-Specific & Advanced Conditioning</h3>
            <p className="card-description">
              The final phase targets high-level activities. We utilize **Gait Analysis** and **agility training** to refine movement patterns, ensuring you are conditioned and confident to return to work, sports, and previous lifestyle without risk of re-injury.
            </p>
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rehabs;