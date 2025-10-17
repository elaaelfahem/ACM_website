import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';  
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Mecaniquue  = () => {
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
                  <h4>Chapitre</h4>
                  <a href="https://drive.google.com/file/d/1EvOsTI4WMNE4KXR_IrDIL8UKj6IKA81Z/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Cours de Systèmes Mécaniques pour la Robotique</a>
                </li>
                <li>
                  <h4>Chapitre</h4>
                  <a href="https://drive.google.com/file/d/1y1t7Xl_mhMkS0vnKl5sDRv1G6t_Kz3vE/view?usp=sharing" target='_blank' rel="noopener noreferrer">Robotics</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resource-card main-card">
            <div className="card-content">
              <img src={summariesImg} alt="Summaries" className="resource-icon" />
              <h2>SUMMARIES</h2>
              <ul className="resource-links">
              <p className="coming-soon">Content coming soon</p>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={exercicesImg} alt="TP" className="resource-icon" />
              <h2>TP</h2>
              <p className="coming-soon">Content coming soon</p>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={tdimg} alt="TD" className="resource-icon" />
              <h2>TD</h2>
              <ul className="resource-links">
              <li><a href='https://drive.google.com/file/d/1w-GVJkUi0ovqVYCWNFl_nwiiUvGKc72E/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD1</a></li>
              <li><a href='https://drive.google.com/file/d/1i8Hfo4zQnjKALjgNAFT4sAdLfAEmDn59/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD1(correction)</a></li>
              <li><a href='https://drive.google.com/file/d/1dnVJ6s2yE8pmDBoQFZMac34fyr1dcHkq/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD2</a></li>
              <li><a href='https://drive.google.com/file/d/1p8gDVv3fqyu-VUPivKytY0_2o9acg370/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD2(correction)</a></li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <ul className="resource-links">
              <li><a href='https://drive.google.com/file/d/1I3FEr2YUpa6v6nJfkfrdF7CVVGqIGxRc/view?usp=sharing' target='_blank' rel="noopener noreferrer">ds 19-20</a></li>
              <li><a href='https://drive.google.com/file/d/12FQAfWCrCiHVqOND7G-J_fXWRK0zu_aY/view?usp=sharing' target='_blank' rel="noopener noreferrer">ds 20-21</a></li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
              <p className="coming-soon">Content coming soon</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mecaniquue;