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
                  <a href="https://drive.google.com/file/d/1mnncjeG1BWLPFc6q3oL3VzOIy6nkle12/view?usp=sharing"  target='_blank' rel="noopener noreferrer">Particule dans un potentiel scalaire et stationnaire</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">les bases mathematiques de la mecanique quantique</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1I3OnkjmcKbXm508gkFb_AcRhXBfpEIYj/view?usp=sharing" target='_blank' rel="noopener noreferrer">Cour mecanique quantique complet</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resource-card main-card">
            <div className="card-content">
              <img src={summariesImg} alt="Summaries" className="resource-icon" />
              <h2>SUMMARIES</h2>
                <a href="https://drive.google.com/file/d/1KdyVHlj170nzoGUoIQmTtO7jo_7Q_IfE/view?usp=sharing" target='_blank' rel="noopener noreferrer">Systeme monophases</a>
                <a href="https://drive.google.com/file/d/1Ga4Z650MvhB0Cl7xy9MFwcgDurqJmdjc/view?usp=sharing" target='_blank' rel="noopener noreferrer">Systeme triphases(resume 1)</a> 
                <a href="https://drive.google.com/file/d/1xN-oF-IAOou3MlACD08fKWYCb5_gihIJ/view?usp=sharing" target='_blank' rel="noopener noreferrer">Systeme triphases(resume 2)</a>  
                <a href="https://drive.google.com/file/d/1KdyVHlj170nzoGUoIQmTtO7jo_7Q_IfE/view?usp=sharing" target='_blank' rel="noopener noreferrer">Transformateur monophases</a> 
                <a href="https://drive.google.com/file/d/1cyDX2lArMAJIiok5rNAKi8JYydCjq4i_/view?usp=sharing" target='_blank' rel="noopener noreferrer">Machine a courant continu</a>
                <a href="https://drive.google.com/file/d/1Qcch5v4KpLivSjuFDqEMoIH6FMemRBCX/view?usp=sharing" target='_blank' rel="noopener noreferrer">Moteur asychrone</a>
                </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={exercicesImg} alt="TP" className="resource-icon" />
              <h2>TP</h2>
              <li>
                <h4>TP1</h4>
                <a href ="https://drive.google.com/file/d/1neA0vNmEO3rAYIbj1nU1Vu_Er2X3cRsK/view?usp=sharing" target='_blank' rel="noopener noreferrer">tp1 circuit 1</a>
                <a href ="https://drive.google.com/file/d/1z4eAgMNhBv2nq_PJC9cisLaMdgkvPQfl/view?usp=sharing" target='_blank' rel="noopener noreferrer">tp1 circuit 1</a>
                <a href ="https://drive.google.com/file/d/1b_0xhHb05f0Xq_3DlUFDHa4bOJ7uCErA/view?usp=sharing" target='_blank' rel="noopener noreferrer">tp1 circuit 2</a>
                <a href ="https://drive.google.com/file/d/1lVVHKY7Suk-Wg18-4Wrxw7gaZQjWmQXm/view?usp=sharing" target='_blank' rel="noopener noreferrer">TP1 (exemple compte rendu)</a>
              </li>   
              <li>
                <h4>TP2</h4>
                <a href ="https://drive.google.com/file/d/1vu6lHta0G_BkJ_CwXm1RwVTjn0XN3_VW/view?usp=sharing" target='_blank' rel="noopener noreferrer">tp2 version vierge</a>
                <a href ="https://drive.google.com/file/d/1RqI1O2y0UBnKzTSuXncK8wKJ_RMITr_t/view?usp=sharing" target='_blank' rel="noopener noreferrer">TP2 (exemple compte rendu)</a>
              </li>
              <li>
                <h4>TP3</h4>
                <a href ="https://drive.google.com/file/d/1HVrlyi4h46CUsKvufNfGfluxelf5Y1sR/view?usp=sharing" target='_blank' rel="noopener noreferrer">tp3 version vierge</a>
              </li>
              <li>
                <h4>TP2</h4>
                <a href ="https://drive.google.com/file/d/1TcOl19r2Z65gnPmuNBNwTBngLUxog698/view?usp=sharing" target='_blank' rel="noopener noreferrer">tp3 version vierge</a>
                <a href ="https://drive.google.com/file/d/1DYnxPj886GYQFwCZafhFV00p5twn8rVp/view?usp=sharing" target='_blank' rel="noopener noreferrer">TP3 (exemple compte rendu)</a>
              </li>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={tdimg} alt="TD" className="resource-icon" />
              <h2>TD</h2>
              <li>
                <a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD : Systeme a deux niveaux</a>
              </li>
 
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" /> 
              <h2>DS</h2>
              <li><a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 17-18</a></li>
              <li><a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 21-22</a></li>
              <li><a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 22-23</a> </li>
            </div>
          </div>


          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
              <li><a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 17-18</a></li>
              <li><a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 20-21</a></li>
              <li><a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 22-23</a> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default quantique;