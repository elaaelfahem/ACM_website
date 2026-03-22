import React from 'react';
import './aboutus.css';
import background from "../../assets/1.png";
import logo from "../../assets/Logo Acm.png";
const AboutUs = () => {
  return (
    <section className="sos-section" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "cover" }}>
    <div className="acm-container">
      <div className="acm-header" data-aos="fade-down">
        <div className="acm-logos">
          <img src={logo} alt="logoacm" className="acmimg hover-lift" />
        </div>
        <h1 className="acm-title">Who are we ?</h1>
      </div>

      <div className="acm-description" data-aos="fade-up" data-aos-delay="100">
        <p>
ACM ENSTAB is the official local chapter of the <span className='acm'>Association for Computing Machinery</span> at the National School of Advanced Sciences and Technologies of Borj Cedria (ENSTAB). Founded in 2018 by <span className='FOUNDER'>Mohamed Ali Rhouma</span>
the club brings together a passionate community of students interested in Computer Science, Artificial intelligence, Competitive Programming, Software Development, and Tech culture. Through workshops, challenges, Bootcamps, and Projects, 
ACM ENSTAB aims to train students, foster innovation, promote a competitive and collaborative mindset, and help members excel in national and international competitions. The club reflects a vision of learning, performance, and passion for technology.
        </p>
      </div>

      <div className="acm-contact" data-aos="fade-up" data-aos-delay="200">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Campus Universitaire à Borj-Cédria, BP 122 Hammam-Chort 1164, Tunisie</span>
        </div>
      </div>
    </div>
    
    </section>
  );
};

export default AboutUs;