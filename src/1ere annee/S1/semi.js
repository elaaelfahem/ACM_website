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
                  <h4>Chapitre 1</h4>
                  <a href="https://drive.google.com/file/d/1_FkZrkSxkPKMxGH4mVJpbbo3mKV2G67_/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Physiques des semi-conducteurs et des composants</a>
                </li>
                <li>
                  <h4>Chapitre 2</h4>
                  <a href="https://drive.google.com/file/d/1qHwrA8wwAU51HcKX0CD3N7Pvn6bfJdTm/view?usp=sharing" target='_blank' rel="noopener noreferrer">Semi-conducteurs en Equilibre</a>
                </li>

                <li>
                  <h4>Chapitre 3</h4>
                  <a href="https://drive.google.com/file/d/173JHZKyotqIzrJ62TndMAM778gId8xNW/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Jonction PN</a>
                </li>
                <li>
                  <h4>Chapitre 4</h4>
                  <a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">Mechanisme de conduction dans les semi-connducteurs</a>
                </li>
                <li>
                  <h4>Chapitre 5</h4>
                  <a href="https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing" target='_blank' rel="noopener noreferrer">Contact entre deuc materiaux</a>
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
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume 1</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume 2</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume 3</a></li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={exercicesImg} alt="TP" className="resource-icon" />
              <h2>TP</h2>
              <li>
                <h4>Tp1</h4>
                <a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">tp1(exemple compte rendu)</a>
                <a href='https://drive.google.com/drive/u/1/folders/1W_9AptsQhsIBIU110DBAf77U8-O3kjg8' target='_blank' rel="noopener noreferrer">photos</a>
              </li>
              <li>
                <h4>Tp2</h4>
                <a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">tp2(exemple compte rendu)</a>
                <a href='https://docs.google.com/document/d/1vW-MzufKUy9hBXWqxjIroCpK2U71PFzE/edit' target='_blank' rel="noopener noreferrer">les courbes</a>
                <a href='https://docs.google.com/document/d/1kZPRww7dzhctStyTXuIfbtUSefUC4L4C/edit?rtpof=true&tab=t.0' target='_blank' rel="noopener noreferrer">les tableaux</a>
                <a href='https://drive.google.com/drive/u/1/folders/1kcQua7RKZnvb0HnEVbpEOUBzI9-9Yw97' target='_blank' rel="noopener noreferrer">photos</a>
              </li>
              <li>
                <h4>Tp3</h4>
                <a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">tp3(exemple compte rendu)</a>
                <a href='https://docs.google.com/document/d/13ASdXbB1D_U46pREAg1B3jGTEwQrbTdG/edit' target='_blank' rel="noopener noreferrer">photos</a>
                <a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">photos</a>
                <a href='https://docs.google.com/document/d/1UnltFbTyAAxgincVRq0WTl5HJLoNeUGO/edit' target='_blank' rel="noopener noreferrer">photos</a>
                <a href='https://docs.google.com/document/d/1wooYF8-B8RwR5BdE_kvOxg40-VeMaXA2/edit' target='_blank' rel="noopener noreferrer">photos</a>
              </li>         
            </div>
          </div>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={tdimg} alt="TD" className="resource-icon" />
              <h2>TD</h2>
              <ul className="resource-links">
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Td1</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Td2</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Td3</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Td4</a></li>
            </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <ul className="resource-links">
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">DS 15-16</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">DS 20-21</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">DS 21-22</a></li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 15-16</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 16-17</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 17-18</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 19-20</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 20-21</a></li>
              <li><a href='https://drive.google.com/file/d/1HvD__22KnH06pjZdTkK82We8JkMS_Hmz/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 21-22</a></li>

              </ul>
            </div>
          </div>
        
      
    </section>
  );
};

export default Semi;