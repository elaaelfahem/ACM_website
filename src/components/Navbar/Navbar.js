import './Navbar.css';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import ACMlogo from '../../assets/blanc.png';
import Enstab from '../../assets/enstablanc.png';
import Search from '../Search/Search';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={ACMlogo} alt="logoAcm" className="ACMlogo" />

      {/* Desktop Links */}
      <div className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>
        <RouterLink to="/" className="desktopMenuListItem" onClick={() => setMenuOpen(false)}>Home</RouterLink>
        <ScrollLink
          className="desktopMenuListItem"
          activeClass="active"
          to="sos-section"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </ScrollLink>
        <ScrollLink
          className="desktopMenuListItem"
          activeClass="active"
          to="feedback-container"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Feedback
        </ScrollLink>
        <ScrollLink
          className="desktopMenuListItem"
          activeClass="active"
          to="contact-section"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </ScrollLink>
      </div>

      {/* Right side: Search + Logo */}
      <div className="navbar-right">
        <Search />
        <img src={Enstab} alt="logoenstab" className="logo" />
      </div>

      {/* Hamburger button (mobile) */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
        <span className={`ham-line ${menuOpen ? 'open' : ''}`}></span>
      </button>
    </nav>
  );
};

export default Navbar;