import React from 'react';

const ResourceCard = ({ title, icon, links, isMainCard }) => {
  return (
    <div className={`resource-card ${isMainCard ? 'main-card' : ''}`}>
      <div className="card-content">
        {icon && <img src={icon} alt={title} className="resource-icon" />}
        <h2>{title.toUpperCase()}</h2>
        {links && links.length > 0 ? (
          <ul className="resource-links">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="coming-soon">Content coming soon</p>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
