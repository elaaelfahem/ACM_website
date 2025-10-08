import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Anglais  = () => {
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
                  <a href="https://docs.google.com/presentation/d/14-84vZaUBDSrCs0KboSduP0xn3N3H6a8/edit?slide=id.p1#slide=id.p1" target ='_blank' rel="noopener noreferrer">Design and modelling</a>
                </li>
                 <li>
                  <a href="https://docs.google.com/document/d/1Ewg5uddAiGb_u7L5OpbEkmWrdRyXyzYM/edit" target ='_blank' rel="noopener noreferrer">Design and modelling (report)</a>
                </li>
                 <li>
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
                  <a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Comment eviter les conflits</a>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Anglais ;