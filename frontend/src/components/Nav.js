import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Importer Link
import './Nav.css';

const Nav = ({ userProfile, handleLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="nav-custom">
      <div className="nav-logo">
        <Link to="/">
          <span className="logo-green">PARKINSON</span> <span className="logo-black">AID</span>
        </Link>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">{t('nav.menu')}</Link></li>
        <li><Link to="/about">{t('nav.about')}</Link></li>
        <li><Link to="/contact" className="active">{t('nav.contact')}</Link></li>
      </ul>
      <div className="nav-buttons">
        <div className="language-switcher">
          <select onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">{t('nav.languageSwitcher.en')}</option>
            <option value="fr">{t('nav.languageSwitcher.fr')}</option>
          </select>
        </div>

        {userProfile && (
          <div className="user-profile-custom" onClick={toggleDropdown}>
            <img src={userProfile.image} alt="Profile" className="profile-pic-custom" />
            <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <span>{userProfile.name}</span>
              <button onClick={handleLogout}>{t('nav.logout')}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
