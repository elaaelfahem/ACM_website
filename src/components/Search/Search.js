import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../../data/courses.json';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    const lower = query.toLowerCase();
    const found = Object.entries(coursesData)
      .filter(([id, course]) =>
        course.title?.toLowerCase().includes(lower) ||
        id.toLowerCase().includes(lower)
      )
      .map(([id, course]) => ({ id, title: course.title }));
    setResults(found);
    setIsOpen(true);
  }, [query]);

  return (
    <div className="search-wrapper">
      <div className="search-input-row">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search courses... (e.g. Analyse, Algo)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="search-input"
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery('')}>✖</button>
        )}
      </div>
      {isOpen && results.length > 0 && (
        <div className="search-dropdown">
          {results.map(r => (
            <Link
              key={r.id}
              to={`/matiere/${r.id}`}
              className="search-result-item"
              onClick={() => { setQuery(''); setIsOpen(false); }}
            >
              📚 {r.title}
            </Link>
          ))}
        </div>
      )}
      {isOpen && results.length === 0 && (
        <div className="search-dropdown">
          <p className="search-no-result">No courses found for "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default Search;
