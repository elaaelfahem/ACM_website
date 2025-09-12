import './Enstarchive.css';
import img1 from '../../assets/1er.png';
import img2 from '../../assets/2eme.png';
import img3 from '../../assets/3eme.png';
import background from '../../assets/back1.png';
import { Link } from 'react-router-dom';

const EnstaArchive = () => {
  return (
    <section className="archive-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="full-width-container">
        <div className="content-wrapper">
          <div className="header">
            <h1 className="title">Select Your Academic Year</h1>
            <p className="subtitle">SELECT YOUR ACADEMIC YEAR TO ACCESS COURSE CONTENT:</p>
          </div>
          
          <div className="years-grid">
            <div className="year-card">
              <div className="year-image-container">
                <img src={img1} alt="1st Year" className="year-image" />
              </div>
              <h2>1ST YEAR</h2>
              <ul className="semester-list">
                <li><Link to="/premiere1">1st Semester</Link></li>
                <li><Link to="/premiere2">2nd Semester</Link></li>
              </ul>
            </div>

            <div className="year-card">
              <div className="year-image-container">
                <img src={img2} alt="2nd Year" className="year-image" />
              </div>
              <h2>2ND YEAR</h2>
              <ul className="semester-list">
                <li><Link to="/desieme1">1st Semester</Link></li>
                <li><Link to="/desieme2">2nd Semester</Link></li>
              </ul>
            </div>
            
            <div className="year-card">
              <div className="year-image-container">
                <img src={img3} alt="3rd Year" className="year-image" />
              </div>
              <h2>3RD YEAR</h2>
              <ul className="semester-list">
                <li><Link to="/troisieme1">1st Semester</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnstaArchive;