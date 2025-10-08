import './premiere1.css';
import background from '../../assets/back1.png';
import { Link } from 'react-router-dom';
import tech from '../../assets/tech.png';
import math from '../../assets/math.png';
import phy from '../../assets/phy.png';

const FirstSemester = () => {
  return (
    <section className="semester-section" style={{ backgroundImage: `url(${background})` }}>
    <div className="semester-container">
      <h1 className="semester-title">1st Semester</h1>
      <p className="semester-subtitle">LET'S DIVE INTO YOUR FIRST SEMESTER LEARNING PATH.</p>
      
      <div className="divider"></div>
      
      <div className="course-cards">
        <div className="course-card">
          <h2 className="course-title">MATH-INFO 1</h2>
          <img src={math} alt="math" className="course-icon" />
          <ul className="course-topics">
            <li><Link to="/Analyse">Analyse pour l’ingénieur</Link></li>
            <li><Link to="/proba">Probabilités</Link></li>
            <li><Link to="/matiere">Python for Data Science</Link></li>
            <li><Link to="/algo">Algorithmique et Programmation</Link></li>
          </ul>
        </div>
        
        <div className="course-card">
          <h2 className="course-title">SC.DE L'ING</h2>
          <img src={phy} alt="phy" className="course-icon" />
          <ul className="course-topics">
            <li><Link to="/matiere">Physique pour l’ingénieur</Link></li>
            <li><Link to="/fluide">Mecanique des fluides</Link></li>
            <li><Link to="/semi">Semi conducteurs</Link></li>
          </ul>
        </div>

        <div className="course-card">
          <h2 className="course-title">TECH.DE L'ING</h2>
          <img src={tech} alt="phy" className="course-icon" />
          <ul className="course-topics">
            <li><Link to="/circuit">Circuit et systemes electriques</Link></li>
            <li><Link to="/metro">Metrologie pour l’ingénieur</Link></li>
            <li><Link to="/mecanique">Systemes Mecanique pour la Robotique</Link></li>
          </ul>
        </div>

        <div className="course-card">
          <h2 className="course-title">SOC.ECO</h2> 
          <img src={tech} alt="phy" className="course-icon" />
          <ul className="course-topics">
            <Link to="/matiere"><li>Anglais 1</li></Link>
            <Link to="/comptabilite"><li>Comptabilite</li></Link>
            <Link to="/gestion"><li>Gestion d'entreprise</li></Link>
            <Link to="/communication"><li>Techniques de communication</li></Link>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default FirstSemester;