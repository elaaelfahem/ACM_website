import React from "react";
import "./description.css";
import background from "../../assets/whiteback.jpg";

const Description = () => {
    return (
        <section className="DESCRIPTION" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "cover" }}>
       <div className="sos-container">
            <header className="sos-header" data-aos="fade-up">
                <h1 className="title">The support every ENSTAB student needs.</h1>
                    <p className="sos-subtitle">
                            Because we make learning simple, practical,<br />
                            and designed for your success.
                    </p>
            </header>
      <div className="sos-features">
        <div className="sos-feature hover-lift" data-aos="fade-up" data-aos-delay="100">
          <div className="sos-divider" />
          <div className="sos-feature-icon">📚</div>
          <h2 className="sos-feature-title"><span className="sos-feature-number">01.</span> Practice</h2>
          <p className="sos-feature-description">
            Real challenges, projects, and coding contests to boost your skills.
          </p>
        </div>

        <div className="sos-feature hover-lift" data-aos="fade-up" data-aos-delay="200">
          <div className="sos-divider" />
          <div className="sos-feature-icon">🗂️</div>
          <h2 className="sos-feature-title"><span className="sos-feature-number">02.</span> Resources</h2>
          <p className="sos-feature-description">
            Summaries, exams, and exercises made for ENSTAB students.
          </p>
        </div>

        <div className="sos-feature hover-lift" data-aos="fade-up" data-aos-delay="300">
          <div className="sos-divider" />
          <div className="sos-feature-icon">🚀</div>
          <h2 className="sos-feature-title"><span className="sos-feature-number">03.</span> All-in-One</h2>
          <p className="sos-feature-description">
            Everything you need to succeed in your studies, all in one place.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Description;