import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';


const Fluide = () => {
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
                  <a href="https://drive.google.com/file/d/1kaYFT085j5LCctns6Ht6dYEnlSmzVXzm/view?usp=sharing" target='_blank' rel="noopener noreferrer">Introduction</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1h_Ddn-oE7W6W0Uf3rLdPT4uluPf1xyvk/view?usp=sharing" target='_blank' rel="noopener noreferrer">Chapitre 1</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1MD0IuXpdpS83oarZdmsplmy2gpFikPvp/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Chapitre 2</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1dwsmkAy11CZDrzFJQc2W-r_DYGE2zlUq/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Chapitre 3</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1T0Bcr5IVUhXQMF-vPXvD3-H616a4Ohjx/view?usp=sharing" target='_blank' rel="noopener noreferrer">Chapitre 4</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resource-card main-card">
            <div className="card-content">
              <img src={summariesImg} alt="Summaries" className="resource-icon" />
              <h2>SUMMARIES</h2>
                <li>
                  <a href="https://drive.google.com/file/d/1T0Bcr5IVUhXQMF-vPXvD3-H616a4Ohjx/view?usp=sharing" target='_blank' rel="noopener noreferrer">Mecanique des fluides</a>
                </li>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={exercicesImg} alt="TP" className="resource-icon" />
              <h2>TP</h2>
                <li>
                  <a href="https://drive.google.com/file/d/1yvpQbop_M76wCFaJN4kvBRhD9qswRkCb/view?usp=sharing" target='_blank' rel="noopener noreferrer">TP1</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1yvpQbop_M76wCFaJN4kvBRhD9qswRkCb/view?usp=sharing" target='_blank' rel="noopener noreferrer">TP2</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/15oWy0CayJPCFdivee7vPuAuX6gXYIxIk/view?usp=sharing" target='_blank' rel="noopener noreferrer">TP3</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/15oWy0CayJPCFdivee7vPuAuX6gXYIxIk/view?usp=sharing" target='_blank' rel="noopener noreferrer">Mecanique des fluides</a>
                </li>
                </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={tdimg} alt="TD" className="resource-icon" />
              <h2>TD</h2>
                <li>
                  <a href="https://drive.google.com/file/d/1NbsQlWzFF3bbJiPn-hcLIxi8Mu5Qj_pl/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD1</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1qwAxInkWA1m4ugSZ1s1Ii6yWedOi3Rhw/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD2</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1BBejiZ4akegitBOuguZnI1xxyqNQwLoT/view?usp=sharing" target='_blank' rel="noopener noreferrer">Exercices de revision</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1hwaCBc2QzfbSRHEsPZtmNlp3AhgUb8KA/view?usp=sharing" target='_blank' rel="noopener noreferrer">Exercices complementaires</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1O-9nSUBCy8i4XnawWcq2EPfkKFUg4mCl/view?usp=sharing" target='_blank' rel="noopener noreferrer">Serie 3</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/15UaQB8OmeUuyw1HfGZ0z_oKFdXwIPTTH/view?usp=sharing" target='_blank' rel="noopener noreferrer">Serie 4</a>
                </li>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
                <li>
                  <a href="https://drive.google.com/file/d/1NbsQlWzFF3bbJiPn-hcLIxi8Mu5Qj_pl/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 17-18</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1BBejiZ4akegitBOuguZnI1xxyqNQwLoT/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 20-21</a>
                </li>
                

            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
                <li>
                  <a href="https://drive.google.com/file/d/1IJibUl3ge2MeZnc4LBXd2cLtBeeRFt8R/view?usp=sharing" target='_blank' rel="noopener noreferrer">Examen 16-17</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1S29OJzodFnmKmfERbB5n6ZizFTM8e7PE/view?usp=sharing" target='_blank' rel="noopener noreferrer">Examen 18-19</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1S29OJzodFnmKmfERbB5n6ZizFTM8e7PE/view?usp=sharing" target='_blank' rel="noopener noreferrer">Examen 21-22</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fluide ;