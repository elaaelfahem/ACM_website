import React, { useState, useEffect } from 'react';
import './SplashScreen.css';
import logo from '../../assets/Logo Acm.png';

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 2 seconds, then call onFinish
    const timer1 = setTimeout(() => setFadeOut(true), 2000);
    const timer2 = setTimeout(() => onFinish(), 2700);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-content">
        <img src={logo} alt="ACM Logo" className="splash-logo" />
        <h1 className="splash-title">SOS ACM</h1>
        <div className="splash-bar-wrapper">
          <div className="splash-bar"></div>
        </div>
        <p className="splash-tagline">Empowering ENSTAB Students</p>
      </div>
    </div>
  );
};

export default SplashScreen;
