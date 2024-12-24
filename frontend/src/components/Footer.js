import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#terms">Terms & Conditions</a>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Parkinson Aid. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

