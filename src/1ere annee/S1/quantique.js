import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const quantique = () => {
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
                  <a href="https://drive.google.com/file/d/1GufSQXIowtnp3G9ZgUcGio9kmFssR5_z/view?usp=sharing"  target='_blank' rel="noopener noreferrer">Particule dans un potentiel scalaire et stationnaire</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1vFV8FE8hl_rWC7Sut59rykBxWgyal821/view?usp=sharing" target='_blank' rel="noopener noreferrer">les bases mathematiques de la mecanique quantique</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1L7nPrxSTFJgr6I44Hj8LMxt7s_YJfXjU/view?usp=sharing" target='_blank' rel="noopener noreferrer">Cour mecanique quantique complet</a>
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
               <ul className="resource-links">
              <p className="coming-soon">Content coming soon</p>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={tdimg} alt="TD" className="resource-icon" />
              <h2>TD</h2>
              <li>
                <ul className="resource-links">
              <li>
                <a href="https://drive.google.com/file/d/1Y-Ddax0sCLMfSr280rvF5TxwdvNLF_xM/view?usp=sharing" target='_blank' rel="noopener noreferrer">Td1</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1Y-Ddax0sCLMfSr280rvF5TxwdvNLF_xM/view?usp=sharing" target='_blank' rel="noopener noreferrer">Td2</a>
              </li>
              </ul>
              </li>
 
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" /> 
              <h2>DS</h2>
              <li><a href="https://drive.google.com/file/d/1LXmsH-ytp7_ukXa8_iRlMFA4eHwTypza/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 20-21</a></li>
              <li><a href="https://drive.google.com/file/d/1omUhuIZtIMtnVPV-P3yrFN2ypQRTmv9m/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 21-22</a></li>
            </div>
          </div>


          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
              <li><a href="https://drive.google.com/file/d/1omUhuIZtIMtnVPV-P3yrFN2ypQRTmv9m/view?usp=sharing" target='_blank' rel="noopener noreferrer">Examen 17-18</a></li>
              <li><a href="https://drive.google.com/file/d/14BlfqYgacBLFlfxUqUC40F_wE7OzJb_9/view?usp=sharing" target='_blank' rel="noopener noreferrer">Examen 20-21</a></li>
              <li><a href="https://drive.google.com/file/d/1ai0FC11JEgoS2I33vKq1aO1JuvdSfHuz/view?usp=sharing" target='_blank' rel="noopener noreferrer">Examen 21-22</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default quantique;