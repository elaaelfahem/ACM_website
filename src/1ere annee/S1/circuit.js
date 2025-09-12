import React from 'react';
import './Algo.css';
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
                  <h4>C</h4>
                  <a href="https://docs.google.com/presentation/d/1AQ-btPZAhtoWIBlulIdykzHIKJjQlfZg/edit?slide=id.p1#slide=id.p1" target='_blank' rel="noopener noreferrer">Editeur en langage C</a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1LPo_SKKklI1ALeuobguaYY2Z1t5JqRUt/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Programmation C</a>
                </li>
                <li>
                
                  <a href="https://drive.google.com/file/d/123-5kDXAFP_3lqMLy1xtWGpe5jAHtWSs/view?usp=sharing" target ='_blank' rel="noopener noreferrer">Introduction</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1WS13AwVZmOh1wzoOsjmW4px6UtMHIJH7/view?usp=sharing" target='_blank' rel="noopener noreferrer">Operateurs et variables</a>
                </li>
                 <li>
                  <a href="https://drive.google.com/file/d/1WS13AwVZmOh1wzoOsjmW4px6UtMHIJH7/view?usp=sharing" target='_blank' rel="noopener noreferrer">Les Boucles</a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1tffaDagz5YgatH5KliqCnAMqbro6Zyzd/view?usp=sharing"  target='_blank' rel="noopener noreferrer">Inversion de variables</a></li><br/>
                  <h4>Chapitre 1</h4>
                  <li><a href="https://docs.google.com/presentation/d/1HNmo30vpRmIEpa9JJXLErb1tuFfC0E-_/edit?slide=id.p1#slide=id.p1" target='_blank' rel="noopener noreferrer">Les Bases de programmation C</a>
                  <h4>Chapitre 2</h4>
                  <a href="https://docs.google.com/presentation/d/1k5TXeOVwhoGgmXIXNp87oRnTyN75EFK5/edit?slide=id.p1#slide=id.p1" target='_blank' rel="noopener noreferrer">Les Tableaux</a>
                  <h4>Chapitre 3</h4>
                  <a href="https://docs.google.com/presentation/d/1V3j1yHhad6z2rBQsH1PLJZcKEFRqnn1j/edit?slide=id.p1#slide=id.p1" target='_blank' rel="noopener noreferrer">Les Pointeurs</a>
                  <h4>Chapitre 4 </h4>
                  <a href="https://docs.google.com/presentation/d/1O8p4bDPgeqJ6ySvgwfCNk2fDbV_ihGZc/edit?slide=id.p1#slide=id.p1" target='_blank' rel="noopener noreferrer">Les Chaines de Caracteres</a>
                  <h4>Chapitre 5</h4>
                  <a href="https://docs.google.com/presentation/d/1JKZ71i_uw9anuoITledl9RYpRiPhJTUM/edit?slide=id.p1#slide=id.p1" target='_blank' rel="noopener noreferrer">Les Fonctions</a>
                  <h4>Chapitre 6</h4>
                  <a href="https://docs.google.com/presentation/d/1D3qGze-AOsL1mstjT2zx58a0O3FdXukE/edit?slide=id.p1#slide=id.p1" target='_blank' rel="noopener noreferrer">Les Structures</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resource-card main-card">
            <div className="card-content">
              <img src={summariesImg} alt="Summaries" className="resource-icon" />
              <h2>SUMMARIES</h2>
                <p className="coming-soon">Content coming soon</p>
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
              <p className="coming-soon">Content coming soon</p>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={devoirsImg} alt="DS" className="resource-icon" />
              <h2>DS</h2>
                <p className="coming-soon">Content coming soon</p>
            </div>
          </div>

          <div className="resource-card">
            <div className="card-content">
              <img src={examesImg} alt="Exams" className="resource-icon" />
              <h2>EXAMENS</h2>
              <ul className="resource-links">
                <li><a href='https://drive.google.com/file/d/1tKPMA_osKbuCacpNuvaimFRUnwUo6Wek/view?usp=sharing'>Examen 21-22</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circuit;