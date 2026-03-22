import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content" data-aos="fade-up">
        <div className="notfound-code">404</div>
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-subtitle">
          Looks like this page took a wrong turn. Don't worry, the resources are still here!
        </p>
        <Link to="/" className="notfound-btn">← Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
