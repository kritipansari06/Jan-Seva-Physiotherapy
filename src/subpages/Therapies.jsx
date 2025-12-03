import React from 'react';
// Assuming CenterStyles.css is imported in your main App.js or similar file
// import './CenterStyles.css'; 

const Therapies = () => {
  return (
    <div className="therapies-container">
      <h1 className="main-heading">जन सेवा फिज़ियो सेंटर – Our Therapies</h1>
      <p className="intro-text">
        Physiotherapy is a comprehensive medical practice aimed at improving body mobility, strength, and overall health. Our primary objective is to significantly reduce pain, strengthen weakened muscles and joints, and help the patient return to a normal, active life as quickly as possible.
      </p>

      {/* --- Electropathy & Pain Management Section --- */}
      <section className="therapy-section electrotherapy-section">
        <h2 className="section-heading">⚡ Electropathy & Pain Management</h2>
        <div className="therapy-grid">
          
          <div className="therapy-card">
            <h3 className="card-title">IFT (Interferential Therapy)</h3>
            <p className="card-description">
              Utilizes **light electrical current waves** delivered at specific frequencies to penetrate deep into nerves and muscles, significantly reducing pain. It effectively stimulates the area to improve local **blood flow** and enhance muscle activity and relaxation.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="therapy-card">
            <h3 className="card-title">TENS (Transcutaneous Electrical Nerve Stimulation)</h3>
            <p className="card-description">
              A non-invasive technique applying **mild electrical stimulation** directly through the skin to provide relief from **chronic pain** and severe nerve pain. By blocking pain signals and promoting endorphin release, it also relaxes muscles and reduces joint stiffness.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="therapy-card">
            <h3 className="card-title">Ultrasound Therapy</h3>
            <p className="card-description">
              Uses high-frequency **sound waves** to generate thermal and non-thermal effects deep within the tissues. This targets and reduces deep-seated **inflammation and pain**, proving highly beneficial for injuries to muscles, ligaments, and tendons.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="therapy-card">
            <h3 className="card-title">SWD (Short Wave Diathermy)</h3>
            <p className="card-description">
              Generates heat in the deep connective tissues to significantly alleviate stiffness and pain. It is exceptionally effective for managing conditions like severe **back pain**, various forms of arthritis, and intense joint stiffness.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="therapy-card">
            <h3 className="card-title">IRR (Infrared Radiation)</h3>
            <p className="card-description">
              Applies a warm light source to reduce superficial muscle and joint stiffness. It offers soothing relief for sprains, mild muscular injuries, and general **muscle fatigue**.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
          <div className="therapy-card">
            <h3 className="card-title">Hydrocollator Hot Packs</h3>
            <p className="card-description">
              A highly effective method of applying moist heat, which reduces deep muscle stiffness and pain. The warmth aids in improving joint **flexibility** and accelerating overall muscle recovery.
            </p>
            <div className="image-placeholder"></div>
          </div>

        </div>
      </section>
      
      {/* --- Advanced Therapy Section (Relocation of Advanced Therapy) --- */}
      <section className="therapy-section advanced-therapy-section">
        <h2 className="section-heading">✨ Advanced Manual Therapy Techniques</h2>
        <div className="therapy-grid">

          <div className="therapy-card">
            <h3 className="card-title">Dry Needling</h3>
            <p className="card-description">
              Involves the precise insertion of fine needles into **myofascial trigger points** to release deeply embedded muscle knots. This technique provides rapid and significant relief from chronic pain and helps improve joint range of movement.
            </p>
            <div className="image-placeholder"></div>
          </div>

          <div className="therapy-card">
            <h3 className="card-title">Cupping Therapy</h3>
            <p className="card-description">
              A traditional method where suction cups are applied to the skin to enhance **local blood flow**. This action helps reduce pain and swelling, effectively relieving muscle fatigue and chronic stiffness.
            </p>
            <div className="image-placeholder"></div>
          </div>

          <div className="therapy-card">
            <h3 className="card-title">Massage Gun & Thrive Massager</h3>
            <p className="card-description">
              Utilizes high-speed, percussive deep tissue massage to rapidly eliminate muscular stiffness and intense fatigue. It is highly effective in accelerating muscle recovery and reducing overall physical tension.
            </p>
            <div className="image-placeholder"></div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Therapies;