import React from 'react';
import './matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';
const SubjectResources = () => {
  return (
    <section className="archive-section" style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "cover" }}>
    <div className="subject-resources">
      <div className="resources-header">
        <h1>Subject Resources</h1>
        <p>ALL THE RESOURCES YOU NEED FOR THIS SUBJECT, IN ONE PLACE.</p>
      </div>

      <div className="resources-grid">
        <div className="resource-card main-card">
          <div className="card-content">
            <img src={coursesImg} alt="Courses" className="resource-icon" />
            <h2>COURSES</h2>
          </div>
        </div>

        <div className="resource-card main-card">
          <div className="card-content">
            <img src={summariesImg} alt="Summaries" className="resource-icon" />
            <h2>SUMMARIES</h2>
          </div>
        </div>

        <div className="resource-card">
          <div className="card-content">
            <img src={exercicesImg} alt="Explore" className="resource-icon" />
            <h3>TP</h3>
          </div>
        </div>

        <div className="resource-card">
          <div className="card-content">
            <img src={tdimg} alt="Explore" className="resource-icon" />
            <h3>TD</h3>
          </div>
        </div>

        <div className="resource-card">
          <div className="card-content">
            <img src={devoirsImg} alt="Explore" className="resource-icon" />
            <h3>DS</h3>
          </div>
        </div>

        <div className="resource-card">
          <div className="card-content">
            <img src={examesImg} alt="Explore" className="resource-icon" />
            <h3>EXAMENS</h3>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SubjectResources;