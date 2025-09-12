import './troisieme.css';
import background from '../../assets/back1.png';

const LastSemester = () => {
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
              </div>
              <h2>EAN</h2>
            </div>

            <div className="year-card">
              <div className="year-image-container">
              </div>
              <h2>SIC</h2>
            </div>
            
            <div className="year-card">
              <div className="year-image-container">
                
              </div>
              <h2>SETP</h2>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSemester;