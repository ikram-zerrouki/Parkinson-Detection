import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-overlay">
        <h1>
          Detect <span className="highlight-green">Parkinson</span> With Precision, Act With <span className="highlight-green">Confidence</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
