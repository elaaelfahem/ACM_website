import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';  
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Comptabilite  = () => {
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
                  <a href="https://drive.google.com/file/d/1Y0K7A6zYSE7GwUF0DC0mSLTo0pbdGpmH/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Comptabilite generale</a>
                </li>
                 <li>
                  <a href="https://drive.google.com/file/d/1ZzCi9szMsd0ejOJFBuPTguOR56DM_Fte/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Presnetation de la Comptabilite generale</a>
                </li>
                 <li>
                  <a href="https://drive.google.com/file/d/1OIcKmJbLMibXlPB5sfSX_UcET84NtPbt/view?usp=sharing" target ='_blank' rel="noopener noreferrer">le Bilan</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/11NarfJ6pIzeQmt9UNA_oXNXaegdv97o4/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Les livres comptables</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Enregistrement comptables des factures</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/11NarfJ6pIzeQmt9UNA_oXNXaegdv97o4/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Modalite de l'enregistrement de la TVA</a>
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
                <p className="coming-soon">Content coming soon</p>
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

export default Comptabilite;