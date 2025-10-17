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
    <section
      className="archive-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="subject-resources">
        <div className="resources-header">
          <h1>Subject Resources</h1>
          <p>ALL THE RESOURCES YOU NEED FOR THIS SUBJECT, IN ONE PLACE.</p>
        </div>

        <div className="resources-grid">

          {/* COURSES */}
          <div className="resource-card main-card">
            <div className="card-content">
              <img src={coursesImg} alt="Courses" className="resource-icon" />
              <h2>COURSES</h2>
              <ul className="resource-links">
                <li>
                  <h4>Chapitre 1</h4>
                  <a
                    href="https://drive.google.com/file/d/1gDtcyq7mwPG3X-m9UW2qmIUS8IdqrZmF/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Physiques des semi-conducteurs et des composants
                  </a>
                </li>
                <li>
                  <h4>Chapitre 2</h4>
                  <a
                    href="https://drive.google.com/file/d/1gDtcyq7mwPG3X-m9UW2qmIUS8IdqrZmF/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Semi-conducteurs en Équilibre
                  </a>
                </li>
                <li>
                  <h4>Chapitre 3</h4>
                  <a
                    href="https://drive.google.com/file/d/1KEO2IzF0yoFxS5XjHIThnVltx2AZ3dVL/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jonction PN
                  </a>
                </li>
                <li>
                  <h4>Chapitre 4</h4>
                  <a
                    href="https://drive.google.com/file/d/1v9-CknMljGKf75M7LTbDkcuqoclxpE6_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mécanisme de conduction dans les semi-conducteurs
                  </a>
                </li>
                <li>
                  <h4>Chapitre 5</h4>
                  <a
                    href="https://drive.google.com/file/d/1pve9VXjp2f-iiz8yNURT1RnSw2dCF9Sx/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact entre deux matériaux
                  </a>
                </li>
                <li>
                  <h4>Chapitre 6</h4>
                  <a
                    href="https://drive.google.com/file/d/1WmhGYIKoAXVtL3oBOb5TQZH59ppe_T6K/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Diode Schottky
                  </a>
                </li>
                <li>
                  <h4>Chapitre 7</h4>
                  <a
                    href="https://drive.google.com/file/d/1mREnd2E6r_jMSALiOOfXq3ty2PYDLvTK/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cellule Photovoltaïque
                  </a>
                </li>
                <li>
                  <h4>Chapitre 8</h4>
                  <a
                    href="https://drive.google.com/file/d/1mREnd2E6r_jMSALiOOfXq3ty2PYDLvTK/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Les cellules solaires photovoltaïques
                  </a>
                </li>
                <li>
                  <h4>Chapitre 9</h4>
                  <a
                    href="https://drive.google.com/file/d/1k31pw0ANw3Kl9JNf5ZjSWvFNKLmEjmTy/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Transistors bipolaires
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* SUMMARIES */}
          <div className="resource-card main-card">
            <div className="card-content">
              <img src={summariesImg} alt="Summaries" className="resource-icon" />
              <h2>SUMMARIES</h2>
              <ul className="resource-links">
                <li>
                  <a
                    href="https://drive.google.com/file/d/1FiLBqoI7UgHolFi91BGJ49hE9rvKuhgy/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Résumé 1
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1n3VnSJCmvvFfbG8gfUoHYbFgxWCTBGbm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Résumé 2
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1961ib9retz2XOLp7ZDk5hh08Iv6mR_Wa/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Résumé 3
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* TP */}
          <div className="resource-card">
            <div className="card-content">
              <img src={exercicesImg} alt="TP" className="resource-icon" />
              <h2>TP</h2>
              <ul className="resource-links">
                <p className="coming-soon">Content coming soon</p>
              </ul>
            </div>
          </div>

          {/* TD */}
          <div className="resource-card">
            <div className="card-content">
              <img src={tdimg} alt="TD" className="resource-icon" />
              <h2>TD</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/1LZphF1fc1APwTIPbgxTuYOVecQRoLsBG/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD 1</a></li>
                <li><a href='https://drive.google.com/file/d/1JAoCm8ZYID0mT2NPZaFRwCmP19wVX1uW/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD 2</a></li>
                <li><a href='https://drive.google.com/file/d/1XKYO-Io-2t2lLgckIZwnsygv18rpC58s/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD 3</a></li>
                <li><a href='https://drive.google.com/file/d/1D5ht-t-HhHe6nHL8kztAOQwAx7JdXXze/view?usp=sharing' target='_blank' rel="noopener noreferrer">TD 4</a></li>
              </ul>
            </div>
          </div>

          {/* DS */}
          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/1UtCWgfc4uwxCfevETrF5_xeTObSlXPZv/view?usp=sharing' target='_blank' rel="noopener noreferrer">DS 15-16</a></li>
                <li><a href='https://drive.google.com/file/d/17hgHUuZU5fIK3mOivW2DU_WhdYbRgD6W/view?usp=sharing' target='_blank' rel="noopener noreferrer">DS 20-21</a></li>
                <li><a href='https://drive.google.com/file/d/1fLcoK2_kAjAr08Jn8M7-M80rHdjQvM24/view?usp=sharing' target='_blank' rel="noopener noreferrer">DS 21-22</a></li>
              </ul>
            </div>
          </div>

          {/* EXAMS */}
          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/188vzU2wXH9eNR26Kp8395-1oLEf5M_Pl/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 15-16</a></li>
                <li><a href='https://drive.google.com/file/d/1wupJ2yEutOQTcavsupvLFJyOdGZJfN03/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 16-17</a></li>
                <li><a href='https://drive.google.com/file/d/1Aq7iW1QHTgcSCYfgb57FABM3aIxyBIxs/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 17-18</a></li>
                <li><a href='https://drive.google.com/file/d/170I1lEv1rGVhxjk0Ob0T2I0Wbn5LskXe/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 19-20</a></li>
                <li><a href='https://drive.google.com/file/d/170I1lEv1rGVhxjk0Ob0T2I0Wbn5LskXe/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 20-21</a></li>
                <li><a href='https://drive.google.com/file/d/1YMcAdffjupldncIwOoRvtbJ888IT3ZOh/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 21-22</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Semi;
