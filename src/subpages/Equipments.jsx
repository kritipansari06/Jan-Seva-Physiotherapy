import React from 'react';

const Equipments = () => {
  return (
    <div className="equipments-container">
      <h1 className="main-heading">🛠️ Equipment & Rehabilitation Tools</h1>
      <p className="intro-text">
        Our center is equipped with state-of-the-art tools vital for restoring movement, building core strength, and ensuring the complete rehabilitation required for a full return to daily activities.
      </p>

      {/* --- Rehabilitation and Mobility Tools --- */}
      <section className="equipment-section rehab-tools">
        <h2 className="section-heading">🏋️ Exercise & Rehabilitation Tools</h2>
        <div className="equipment-grid">
          
          <div className="equipment-card">
            <h3 className="card-title">Quadriceps Chair</h3>
            <p className="card-description">
              A specialized chair designed to isolate and effectively strengthen the muscles around the knees and thighs. It is crucial for post-knee surgery, ACL reconstruction, or arthritis recovery.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="equipment-card">
            <h3 className="card-title">Shoulder Wheel & Finger Ladder</h3>
            <p className="card-description">
              These tools work together to systematically increase the **range of motion (ROM)** of the shoulder and hand joints. They are essential for reducing adhesive capsulitis (frozen shoulder) stiffness and rebuilding strength post-surgery.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="equipment-card">
            <h3 className="card-title">T-Pulley System</h3>
            <p className="card-description">
              A versatile system that allows patients to work on the strength and **flexibility** of the shoulder, arm, and upper back. It gently helps stretch muscles and improves range of movement.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="equipment-card">
            <h3 className="card-title">CPM Machine (Continuous Passive Motion)</h3>
            <p className="card-description">
              Used immediately after joint surgery or fracture to gently and gradually restore joint movement. By continuously moving the joint, it reduces pain and keeps the joint active while strengthening surrounding tissues.
            </p>
            <div className="image-placeholder"></div>
          </div>

        </div>
      </section>

      {/* --- Strength, Balance, and Coordination --- */}
      <section className="equipment-section strength-balance-tools">
        <h2 className="section-heading">🤸 Strength, Balance, and Coordination</h2>
        <div className="equipment-grid">
          
          <div className="equipment-card">
            <h3 className="card-title">Balance Board & BOSU Ball</h3>
            <p className="card-description">
              Crucial for training the body's **proprioception** (sense of self-movement and position). They significantly improve balance and strengthen the core, which is vital for elderly patients and those undergoing neurological rehabilitation.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="equipment-card">
            <h3 className="card-title">Hand Exerciser Table</h3>
            <p className="card-description">
              Dedicated station to enhance the minute strength, dexterity, and coordination of the hands and fingers. This improves fine motor control and efficiency in essential daily tasks.
            </p>
            <div className="image-placeholder"></div>
          </div>

          <div className="equipment-card">
            <h3 className="card-title">Resistance Tools (Bands, Loops, Weights)</h3>
            <p className="card-description">
              Includes Dumbbells, Therabands, Theratubes, and Thera Loops, used to progressively increase **muscle strength** and tone. They are foundational to injury recovery and personalized fitness maintenance programs.
            </p>
            <div className="image-placeholder">

[Image of colored resistance bands and small weights]
</div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Equipments;