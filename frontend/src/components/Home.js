import React from 'react';
import './Home.css';
import doctorImage from '../assets/images/doctor-image.png';
import brainImage from '../assets/images/brain-image.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Import du Link

const Home = () => {
  const { t, i18n } = useTranslation();

  // Fonction pour changer la langue
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="Home">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <span className="logo-green">PARKINSON</span> <span className="logo-white">AID</span>
          </Link>
        </div>
        <ul className="navbar-menu">
          <li><Link to="/">{t('menuHome')}</Link></li>
          <li><Link to="/about">{t('aboutHome')}</Link></li>
          <li><Link to="/contact" className="active">{t('contactHome')}</Link></li>
        </ul>
        <div className="navbar-buttons">
          <Link to="/login" className="btn-login">{t('loginHome')}</Link>
          <Link to="/signup" className="btn-signup">{t('signupHome')}</Link>
          <div className="language-switcher1">
            <select onChange={changeLanguage} defaultValue={i18n.language}>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </nav>

      <header className="header-section">
        <div className="header-overlay">
          <h1>
            {t('headerHome.titleHome')} <span className="highlight-green">{t('headerHome.highlightHome')}</span> {t('headerHome.subtitleHome')}<span className="highlight-green">{t('headerHome.ConfidenceHome')}</span>
          </h1>
        </div>
      </header>

      <section className="info-section">
        <div className="info-block">
          <div className="info-image">
            <img src={doctorImage} alt="Doctor with MRI images" />
          </div>

          <div className="info-text">
            <h2><span className="highlight"></span>{t('infoSectionHome.title1Home')}</h2>
            <p>{t('infoSectionHome.description1Home')}</p>
            <Link to="/signup" className="info-btn">{t('infoSectionHome.signUpHome')}</Link>
          </div>
        </div>
        <div className="info-block">
          <div className="info-text">
            <h2><span className="highlight"></span>{t('infoSectionHome.title2Home')}</h2>
            <p>{t('infoSectionHome.description2Home')}</p>
            <Link to="/about" className="info-btn">{t('infoSectionHome.learnMoreHome')}</Link>
          </div>
          <div className="info-image">
            <img src={brainImage} alt="Brain technology" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/terms">{t('footerHome.termsHome')}</Link>
          <Link to="/privacy">{t('footerHome.privacyHome')}</Link>
        </div>
        <div className="footer-bottom">
          &copy; 2024 Parkinson Aid. {t('footerHome.rightsHome')}.
        </div>
      </footer>
    </div>
  );
};

export default Home;
