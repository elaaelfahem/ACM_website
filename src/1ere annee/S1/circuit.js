import React from 'react';
import '../../pages/Matiere/matiere.css';
import coursesImg from '../../assets/cours.png';
import summariesImg from '../../assets/resume.png';
import exercicesImg from '../../assets/ex.png';
import examesImg from '../../assets/exam.png';
import devoirsImg from '../../assets/DS.png';
import tdimg from '../../assets/td.png';
import background from '../../assets/back1.png';

const Circuit = () => {
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
                  <a href="https://drive.google.com/file/d/1olCmXTWcENrr9BXtE4PoFLPLgeZt-BgU/view?usp=sharing"  target='_blank' rel="noopener noreferrer">Circuit monophases</a>
                  <h4>Chapitre 2</h4>
                  <a href="https://drive.google.com/file/d/1rX0BLRN3_DB36k3NR0M-kZD3iX0mVlCR/view?usp=sharing" target='_blank' rel="noopener noreferrer">Systeme triphases</a>
                  <h4>Chapitre 3</h4>
                  <a href="https://drive.google.com/file/d/1zxZ4OahMOZfpMT0xS-i1tNUHQq5iAxNG/view?usp=sharing" target='_blank' rel="noopener noreferrer">Transformateur</a>
                  <h4>Chapitre 4 </h4>
                  <a href="https://drive.google.com/file/d/1iMqvPfQl99y4GsiGGc4iz2ZkxnHx_uLb/view?usp=sharing" target='_blank' rel="noopener noreferrer">Machine a courant continu</a>

                </li>
              </ul>
            </div>
          </div>

          <div className="resource-card main-card">
            <div className="card-content">
              <img src={summariesImg} alt="Summaries" className="resource-icon" />
              <h2>SUMMARIES</h2>
              <li>
                <a href="https://drive.google.com/file/d/1tBj9c8HDr13khwqrRTpurog6_k_1VkXS/view?usp=sharing" target='_blank' rel="noopener noreferrer">Systeme monophases</a></li>
              <li><a href="https://drive.google.com/file/d/1PNlVq-bT9cTm8m2llULqTD-a2Rg8Cua5/view?usp=sharing" target='_blank' rel="noopener noreferrer">Systeme triphases(resume 1)</a> </li> 
              <li><a href="https://drive.google.com/file/d/1kgVMBcXMQAqRdmQ3fzKsFXGpu6TZdcSe/view?usp=sharing" target='_blank' rel="noopener noreferrer">Systeme triphases(resume 2)</a>  </li>
              <li><a href="https://drive.google.com/file/d/1xKQh1UEgVt8gN7CUr1DqeCQZUS03UDhc/view?usp=sharing" target='_blank' rel="noopener noreferrer">Transformateur monophases</a> </li>
               <li> <a href="https://drive.google.com/file/d/1H5msEIVDhlNtVDih6j2sy6IFJZRSp6gG/view?usp=sharing" target='_blank' rel="noopener noreferrer">Machine a courant continu</a></li>
               <li> <a href="https://drive.google.com/file/d/1Z6nT1P07bGPMR_SDlrGYpkOy70x_tLHQ/view?usp=sharing" target='_blank' rel="noopener noreferrer">Moteur asychrone</a></li>
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
                <a href="https://drive.google.com/file/d/1ymnFRg0M2n_njbjYNQqE813soZ9WWM4v/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD1 : les systeme monophases</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1pG5--8Dscb9WrOpuXDZSq4sVzAfostfT/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD2 : les systeme triphases</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1pG5--8Dscb9WrOpuXDZSq4sVzAfostfT/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD3 : transformateur monophases</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1vmBYmTzNa30RDXPWMq_YYeLPsSFRYDJw/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD4 : Machine a courant continu</a>
              </li>              
              <li>
                <a href="https://drive.google.com/file/d/1T6VBbl_SUWIQb8ToizI9N98Aibf00Eot/view?usp=sharing" target='_blank' rel="noopener noreferrer">TD5: Machines asychrones</a>
              </li>   
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
              <li><a href="https://drive.google.com/file/d/1S_BXCRNZKGw2JltLx95fkNtWy466VOfk/view?usp=sharing" target='_blank' rel="noopener noreferrer">DS 21-22</a></li>
            </div>
          </div>


          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/1rWhr91gMhPpITCYlXgjmqMfLXFDZ8X57/view?usp=sharing'target='_blank' rel="noopener noreferrer">Examen 21-22</a></li>
                <li><a href='https://drive.google.com/file/d/1NuoJlhJcK9ET-2A_DpJvGEOZKOC-TT6b/view?usp=sharing' target='_blank' rel="noopener noreferrer">Examen 17-18</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circuit;