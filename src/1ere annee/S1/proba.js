import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Proba = () => {
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
                  <h4>Chapitre 1</h4>
                  <a href="https://drive.google.com/file/d/1-SpyaEyEKjEa4QM0OOfsQN9aFW71CAwX/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Espaces mesurables Fonctions mesurables Espaces mesures</a>
                </li>
                <li>
                  <h4>Chapitre 2</h4>
                  <a href="https://drive.google.com/file/d/1iAuPxH8fZkaGrEZh7Puwtl7JrKBl6GQn/view?usp=sharing" target='_blank' rel="noopener noreferrer"> Calcul d'integrale au sens de Lebesgue</a>
                </li>

                <li>
                  <h4>Chapitre 3</h4>
                  <a href="https://drive.google.com/file/d/1oTtwU4FO7Tol0txD0R5UU0JBcy-gMUAD/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Variables aleatoires</a>
                </li>
                <li>
                  <h4>Chapitre 4</h4>
                  <a href="https://drive.google.com/file/d/1Orf_YFVPhNQHjbiOxV43KQwZbSv7ryod/view?usp=sharing" target='_blank' rel="noopener noreferrer">Vecteurs aleatoires</a>
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
                <li><a href='https://drive.google.com/file/d/1qHvjS-YHQhSGe2_CBiQfstAyRUWUdLMb/view?usp=sharing' target='_blank' rel="noopener noreferrer">Serie Variables aleatoires</a></li>
                <li><a href="https://drive.google.com/file/d/1FOz0Mw3wMaMVe5H8iDH3m7AKuSmrh8zW/view?usp=sharing" target='_blank' rel="noopener noreferrer">Serie 4</a></li>
                <li><a href='https://drive.google.com/file/d/1gxsc9T-8QI9-7MYw7eR1PjCPAkBbaRE3/view?usp=sharing' target='_blank' rel="noopener noreferrer">Serie 5</a></li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/1DbIrlndZIElT7tSYQZukc-Hq7cSEYSH5/view?usp=sharing' target='_blank' rel="noopener noreferrer">DS 20-21</a></li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/1LSTQgH-6IFd3qofsEewV1tK-9TGFdPdb/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 17-18</a></li>
                <li><a href='https://drive.google.com/file/d/1yAM9F46Pt8H8oiB09ig93YpWpOBaOvNx/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 21-22</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proba;