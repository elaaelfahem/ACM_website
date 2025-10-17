import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';

import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Communication  = () => {
  return (
    <section className="archive-section" style={{ backgroundImage: `url(${background})` }}>
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
              <ul className="resource-links">
                 <li>
                  <a href="https://docs.google.com/presentation/d/14-84vZaUBDSrCs0KboSduP0xn3N3H6a8/edit?slide=id.p1#slide=id.p1" target ='_blank' rel="noopener noreferrer">Communication et soft skills</a>
                </li>
                 <li>
                  <a href="https://docs.google.com/presentation/d/1KJVcRaOJ6bNdI3Tqmi8t5QWeUIzyPgI_/edit?slide=id.p1#slide=id.p1" target ='_blank' rel="noopener noreferrer">Comment eviter les conflits</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={tdimg} alt="TD" className="resource-icon" />
              <h2>Projet</h2>
              <ul className="resource-links">
              <p className="coming-soon">Content coming soon</p>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <ul className="resource-links">
                  <a href="https://drive.google.com/file/d/18oU2Mkkz9cEbL-1WRrsiKo_lLfvbvQWx/view?usp=sharing" target ='_blank' rel="noopener noreferrer">DS 21-22</a>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Communication ;