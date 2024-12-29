import React from 'react';
import './Navbar1.css';
import Header from './Header';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <a href="#">
          <span className="logo-green">PARKINSON</span> <span className="logo-white">AID</span>
        </a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#" className="active">Contact</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn-login">Log In</button>
        <button className="btn-signup">Sign Up</button>
        <div className="language-switcher">
          <select>
            <option value="en">English</option>
            <option value="fr">Français</option>
            {/* Add more languages as needed */}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

