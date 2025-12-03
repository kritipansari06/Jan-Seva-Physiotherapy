import React from 'react';

const Wellness = () => {
  return (
    <div className="wellness-container">
      <h1 className="main-heading">🌟 Wellness & Holistic Care</h1>
      <p className="intro-text">
        Our focus extends beyond immediate pain relief to encompass long-term wellness. We offer corrective therapies and relaxation techniques essential for injury prevention and a healthy, active lifestyle.
      </p>

      {/* --- Corrective and Preventative Training --- */}
      <section className="wellness-section posture-training">
        <h2 className="section-heading">🧘 Corrective & Preventative Training</h2>
        <div className="wellness-grid">

          <div className="wellness-card">
            <h3 className="card-title">Postural Correction & Core Training</h3>
            <p className="card-description">
              Comprehensive training designed to correct detrimental **postural habits** and build robust core stability. This foundational strengthening helps the body remain balanced, reducing the recurrence of chronic back and neck pain.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="wellness-card">
            <h3 className="card-title">Paraffin Wax Bath</h3>
            <p className="card-description">
              A gentle, heat-based treatment primarily for the small joints of the hands and feet. It is excellent for reducing stiffness and pain associated with **rheumatoid arthritis** and helps restore fine joint movement after trauma or surgery.
            </p>
            <div className="image-placeholder">

[Image of hands dipped in a paraffin wax bath]
</div>
          </div>

          <div className="wellness-card">
            <h3 className="card-title">Foam Roller & Flexibility Training</h3>
            <p className="card-description">
              We instruct patients on the proper use of Foam Rollers and Yoga Mats for self-myofascial release, significantly enhancing muscle **flexibility and range of motion**. This routine helps reduce muscle tightness, stiffness, and aids relaxation.
            </p>
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>
      
      {/* --- Long-Term Health and Lifestyle Management --- */}
      <section className="wellness-section relaxation-recovery">
        <h2 className="section-heading">🧠 Health Management & Relaxation</h2>
        <div className="wellness-grid">
          
          <div className="wellness-card">
            <h3 className="card-title">Gait Analysis & Training</h3>
            <p className="card-description">
              A specialized assessment of a person's walking pattern (gait). We then design training programs to correct abnormalities caused by injury, neurological conditions, or surgery, restoring efficient and safe independent mobility.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="wellness-card">
            <h3 className="card-title">Ergonomics & Injury Prevention</h3>
            <p className="card-description">
              We provide tailored assessments and recommendations for optimizing your workspace, home, and vehicle ergonomics. This prevents the development of repetitive strain injuries and postural pain, especially for prolonged sitting.
            </p>
            <div className="image-placeholder">

[Image of a properly set up ergonomic workstation]
</div>
          </div>
          
          <div className="wellness-card">
            <h3 className="card-title">Client Education & Home Exercise Program (HEP)</h3>
            <p className="card-description">
              Empowering patients with detailed knowledge about their condition and providing a custom-designed **at-home routine**. This ensures the maintenance of therapeutic progress and fosters long-term self-management.
            </p>
            <div className="image-placeholder">

[Image of a person doing simple stretches at home]
</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wellness;