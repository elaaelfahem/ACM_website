import './desieme1.css';
import background from '../../assets/back1.png';
import { Link } from 'react-router-dom';

const FirstSemester2 = () => {
  return (
    <section className="semester-section" style={{ backgroundImage: `url(${background})` }}>
    <div className="semester-container">
      <h1 className="semester-title">1st Semester</h1>
      <p className="semester-subtitle">LET'S DIVE INTO YOUR FIRST SEMESTER LEARNING PATH.</p>
      
      <div className="divider"></div>
      
      <div className="course-cards">
        <div className="course-card">
          <h2 className="course-title">MATH-INFO 2</h2>
          <ul className="course-topics">
            <li><Link to="/matiere/ro1">Recherche Operationnelle 1</Link></li>
            <li><Link to="/matiere/processus_stochastiques">Processus Stochastiques</Link></li>
            <li><Link to="/matiere/calcul_scientifique">Calcul Scientifique</Link></li>
          </ul>
        </div>
        
        <div className="course-card">
          <h2 className="course-title">OUTILS DIGITAUX POUR L'ING</h2>
          <ul className="course-topics">
            <li><Link to="/matiere/ia">Intelligence Artificielle</Link></li>
            <li><Link to="/matiere/traitement_images">Technique de traitement d'images</Link></li>
            <li><Link to="/matiere/linux">Linux</Link></li>
          </ul>
        </div>
        <div className='course-card'>
          <h2 className="course-title">SC.DE L ING 3</h2>
          <ul className="course-topics">
            <li><Link to="/matiere/rdm">Resistance des materiaux </Link></li>
            <li><Link to="/matiere/transfert_thermiques">Transfert thermiques</Link></li>
            <li><Link to="/matiere/physique_materiaux">Physique des materiaux</Link></li>
            <li><Link to="/matiere/fonctions_electronique">Fonctions de l'electronique</Link></li>
          </ul>
        </div>
        
        <div className="course-card">
          <h2 className="course-title">SOC.ECO</h2>
          <ul className="course-topics">
            <li><Link to="/matiere/anglais">Anglais 3</Link></li>
            <li><Link to="/matiere/gestion_projets">Gestion de projets</Link></li>
            <li><Link to="/matiere/management">Management des équipes</Link></li>
            <li><Link to="/matiere/option">Option</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FirstSemester2;