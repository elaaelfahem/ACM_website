import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';  
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Metro  = () => {
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
                  <a href="https://drive.google.com/file/d/1Y_vISAHnuzDXoI-6HjtzEkuS6qbFaF_k/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Introduction generale</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1mBOXv2jOn9XUB00-f9yXoSqd9CtCIWeV/view?usp=sharing" target='_blank' rel="noopener noreferrer">Qualite</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1t86yQStECxkFhOACvMVAaCrq6anA7qQN/view?usp=sharing" target='_blank' rel="noopener noreferrer">Erreur</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resource-card main-card">
            <div className="card-content">
              <img src={summariesImg} alt="Summaries" className="resource-icon" />
              <h2>SUMMARIES</h2>
              <ul className="resource-links">
              <li><a href='https://drive.google.com/file/d/1HVcakFZM7iGSqtX75k1QlpMKcJ3tmtVm/view?usp=sharing' target='_blank' rel="noopener noreferrer">resume</a></li>
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
              <ul className="resource-links">
              <li><a href='https://drive.google.com/file/d/1E88DfYlLGXRg4oFUzStY18TIW2pcJq-B/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD1</a></li>
              </ul>
              
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <ul className="resource-links">
              <li><a href='https://drive.google.com/file/d/13TY-ZdXwqtefyxo_hEsMwI0xrql_xQfH/view?usp=sharing' target='_blank' rel="noopener noreferrer">ds 20-21</a></li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Metro;