import './premiere2.css';
import background from '../../assets/back1.png';
import { Link } from 'react-router-dom';
import tech from '../../assets/tech.png';
import math from '../../assets/math.png';
import phy from '../../assets/phy.png';

const SecondSemester = () => {
  return (
    <section className="semester-section" style={{ backgroundImage: `url(${background})` }}>
    <div className="semester-container">
      <h1 className="semester-title">2ND Semester</h1>
      <p className="semester-subtitle">LET'S DIVE INTO YOUR SECOND SEMESTER LEARNING PATH.</p>
      
      <div className="divider"></div>
      
      <div className="course-cards">
        <div className="course-card">
          <h2 className="course-title">MATH-INFO 2</h2>
          <img src={math} alt="math" className="course-icon" />
          <ul className="course-topics">
            <li><Link to="/matiere">Analyse numerique</Link></li>
            <li><Link to="/matiere">Optimisation</Link></li>
            <li><Link to="/matiere">Stastistique pour l’ingénieur</Link></li>
          </ul>
        </div>
        <div className="course-cards">
        <div className="course-card">
          <h2 className="course-title">Outils digitaux pourl'ingénieur 1</h2>
          <img src={math} alt="math" className="course-icon" />
          <ul className="course-topics">
            <li><Link to="/matiere">Introduction a L'IA</Link></li>
            <li><Link to="/matiere">POO</Link></li>
            <li><Link to="/matiere">CATIA</Link></li>
          </ul>
        </div>

        <div className="course-card">
          <h2 className="course-title">SC.DE L'ING 2</h2>
          <img src={phy} alt="phy" className="course-icon" />
          <ul className="course-topics">
            <li><Link to="/matiere">Thermodynamique pour l’ingénieur</Link></li>
            <li><Link to="/matiere">Electronique des composants</Link></li>
            <li><Link to="/matiere">Asservissement et regulation industriels</Link></li>
          </ul>
        </div>

        <div className="course-card">
          <h2 className="course-title">SOC.ECO 2</h2>
          <img src={tech} alt="phy" className="course-icon" />
          <ul className="course-topics">
            <Link to="/matiere"><li>Anglais 2</li></Link>
            <Link to="/matiere"><li>Droit</li></Link>
            <Link to="/matiere"><li>Philo pour l’ingénieur</li></Link>
            <Link to="/matiere"><li>Economie verte</li></Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
};

export default SecondSemester;