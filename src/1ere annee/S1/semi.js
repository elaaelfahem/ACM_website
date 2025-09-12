import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Semi = () => {
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
                  <a href="https://drive.google.com/file/d/1iclmMax_D9RCdpQ00tZHvdoUYQeQEfgI/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Semi-conducteurs a l'equilibre</a>
                </li>
                <li>
                  <h4>Chapitre </h4>
                  <a href="https://drive.google.com/file/d/1C8VqfAEH5evFA4Euc2iGOzo0A1-0ptNa/view?usp=sharing" target='_blank' rel="noopener noreferrer">Semi-conducteurs Hors Equilibre</a>
                </li>

                <li>
                  <h4>Chapitre</h4>
                  <a href="https://drive.google.com/file/d/1-RgJuwBK7g4M0TsPZsOpRlab09GITP1P/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Metal-Semi-conducteur</a>
                </li>
                <li>
                  <h4>Chapitre </h4>
                  <a href="https://drive.google.com/file/d/1mREnd2E6r_jMSALiOOfXq3ty2PYDLvTK/view?usp=sharing" target='_blank' rel="noopener noreferrer">Etude des jonctions PN</a>

                </li>
                <li>
                  <h4>Chapitre </h4>
                  <a href="https://drive.google.com/file/d/11W76JX789a52xBUUgTrLc1X3hbJlhS7A/view?usp=sharing" target='_blank' rel="noopener noreferrer">Jonctions PN</a>
                </li>
                <li>
                  <h4>Chapitre </h4>
                  <a href="https://drive.google.com/file/d/1WmhGYIKoAXVtL3oBOb5TQZH59ppe_T6K/view?usp=sharing" target='_blank' rel="noopener noreferrer">Diode schottky</a>
                </li>
                <li>
                  <h4>Chapitre </h4>
                  <a href="https://drive.google.com/file/d/1mREnd2E6r_jMSALiOOfXq3ty2PYDLvTK/view?usp=sharing" target='_blank' rel="noopener noreferrer">Cellule Photovoltaique</a>
                </li>
                <li>
                  <h4>Chapitre </h4>
                  <a href="https://drive.google.com/file/d/1mREnd2E6r_jMSALiOOfXq3ty2PYDLvTK/view?usp=sharing" target='_blank' rel="noopener noreferrer">les cellules solaire Photovoltaique</a>
                </li>
                <li>
                  <h4>Chapitre </h4>
                  <a href="https://drive.google.com/file/d/1k31pw0ANw3Kl9JNf5ZjSWvFNKLmEjmTy/view?usp=sharing" target='_blank' rel="noopener noreferrer">Transistors bipolaires</a>
                  
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
              <p className="coming-soon">Content coming soon</p>
            </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <ul className="resource-links">
                <li><p className="coming-soon">Content coming soon</p></li>
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

export default Semi;