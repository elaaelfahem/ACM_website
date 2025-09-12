import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Analyse = () => {
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
                  <a href="https://drive.google.com/file/d/1eNPhK9sxnThr36upHWlarCm4jR0F7CtF/view?usp=sharing" target='_blank' rel="noopener noreferrer">Application differentielle</a>
                </li>
                <li>
                  <h4>Chapitre 2</h4>
                  <a href="https://drive.google.com/file/d/1-CyXX-68b9zthj5Ae36DW9QH0g0Artuh/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Equation differentielle</a>
                </li>
                <li>
                  <h4>Chapitre 3</h4>
                  <a href="https://drive.google.com/file/d/1-CyXX-68b9zthj5Ae36DW9QH0g0Artuh/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Systeme d'equations differentielle</a>
                </li>
                <li>
                  <h4>Chapitre 4</h4>
                  <a href="https://drive.google.com/file/d/16V-qjgWHPOH4SBk1QHcDM6EvC0raz4-v/view?usp=sharing" target='_blank' rel="noopener noreferrer">Notion de distribution</a>
                </li>
                <li>
                  <h4>Chapitre 5</h4>
                  <a href="https://drive.google.com/file/d/16V-qjgWHPOH4SBk1QHcDM6EvC0raz4-v/view?usp=sharing"  target='_blank' rel="noopener noreferrer">Transformation de Fourier</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resource-card main-card">
            <div className="card-content">
              <img src={summariesImg} alt="Summaries" className="resource-icon" />
              <h2>SUMMARIES</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/1WGzeTiYo5EBj_3CNroCqvMTbw3WVOERU/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume 1</a></li>
                <li><a href='https://drive.google.com/file/d/1SZIbR3xfYp3Jo6ls9cyX-ZIs1taixQYf/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume 2</a></li>
                <li><a href='https://drive.google.com/file/d/1Yam0Et4hi98wXLgeI3yDuApmklchUlvp/view?usp=sharing' target='_blank' rel="noopener noreferrer">Resume Equation differentielle</a></li>
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
                <li><a href='https://drive.google.com/file/d/11d5qy64HxXNPlLDIWvqbphJZzEvylPKA/view?usp=sharing' target='_blank' rel="noopener noreferrer">Serie 1: calculs differentielle (partie 1)</a></li>
                <li><a href="https://drive.google.com/file/d/1Et8N_aD_VxAvDuUtBDFy3kZxIyEKM4Pp/view?usp=sharing" target='_blank' rel="noopener noreferrer">Serie 1: calculs differentielle (partie 2)</a></li>
                <li><a href='https://drive.google.com/file/d/1Qto-yHmanO0c2YdR2X7j8hJxWFqQCXKK/view?usp=sharing' target='_blank' rel="noopener noreferrer">Serie 1 : Calculs differentielle</a></li>
                <li><a href="https://drive.google.com/file/d/1r1gFmwHW_0t_Pz2Mhbqx2kqGf8yvxCgi/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD2</a></li>
                <li><a href="https://drive.google.com/file/d/1TuJDoYJdG52mUqPXEzMxZa9Swd_gmD6t/view?usp=sharing" target='_blank' rel="noopener noreferrer">Serie 2</a></li>
                <li><a href='https://drive.google.com/file/d/1ke350-DcMS-fNkAcShP4HafmFa7OYFSo/view?usp=sharing' target='_blank' rel="noopener noreferrer">Serie 3</a></li>
                <li><a href="https://drive.google.com/file/d/1209z7iQzOeeIdg46MG_AuzUx22L-orLB/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD3</a></li>
                <li><a href="https://drive.google.com/file/d/1a9qACSSAByNrz56GdLnsK6wgHSvDtSRr/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD4</a></li>
                <li><a href="https://drive.google.com/file/d/15rp9tOa01S2JopnxubWL2cIC-ip_Muiv/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD5</a></li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/17xALsCsMLHVS1ARNAeUqhJq4ZiQmIMtM/view?usp=sharing' target='_blank' rel="noopener noreferrer">DS 20-21</a></li>
                <li><a href="https://drive.google.com/file/d/15b3PvF55jp8RLptzvTUkee12NabQuXjF/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 21-22</a></li>
                <li><a href="https://drive.google.com/file/d/1B2kj9uguFCpfgCWTWblQORzu0AcL-4Z2/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 18-19</a></li>
              </ul>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/drive/folders/1yJpm1_g0LAmgFk9KAN8sNuTLMbqiv7sP?fbclid=IwY2xjawMpTbpleHRuA2FlbQIxMQABHjep2ZE65_DWm3aJTa-chhHdR1mj-jco4mw1oZu4d4Rl2WWbEKWY85GqlJkF_aem_5jJe7qL-WuQJ97h7Jo01zA'>Examen 20-21</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analyse;