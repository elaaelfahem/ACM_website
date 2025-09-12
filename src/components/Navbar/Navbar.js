import './Navbar.css';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // only for Home
import { Link as ScrollLink } from 'react-scroll';     // for section
import ACMlogo from '../../assets/blanc.png';
import Enstab from '../../assets/enstablanc.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={ACMlogo} alt="logoAcm" className="ACMlogo" />

      <div className="navbar-links">
        <RouterLink to="/" className="desktopMenuListItem">Home</RouterLink>
        <ScrollLink
          className="desktopMenuListItem"
          activeClass="active"
          to="sos-section"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
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
        >
          Contact
        </ScrollLink>
      </div>

      <div className="search">
        <input placeholder="Search..." type="text" />
        <button type="submit">Go</button>
      </div>

      <img src={Enstab} alt="logoenstab" className="logo" />
    </nav>
  );
};

export default Navbar;
