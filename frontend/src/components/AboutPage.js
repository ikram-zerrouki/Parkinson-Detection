import React from "react";
import { useTranslation } from 'react-i18next';
import "./AboutPage.css";
import Nav from "./Nav";
import ikramImg from "../assets/images/ikram.png";
import safiaImg from "../assets/images/ines.png";
import supervisorImg from "../assets/images/supervisor.png";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav />
      <div className="about-container">
        {/* Première partie */}
        <h1>{t('about.title')} <span className="highlightAbout">PARKINSON</span> AID</h1>

        <div className="about-sections">
          <div className="about-section">
            <h2 className="section-title">{t('about.sections.projectInfoTitle')}</h2>
            <p className="section-text">
              {t('about.sections.projectInfo')}
            </p>
          </div>
          <div className="about-section">
            <h2 className="section-title">{t('about.sections.technicalDetailsTitle')}</h2>
            <p className="section-text">
              {t('about.sections.technicalDetails')}
            </p>
          </div>
        </div>

        {/* Deuxième partie */}
        <div className="vision-mission-values">
          <h1 className="vmv-title">{t('about.visionMissionValues.title')}</h1>
          <div className="vmv-underline"></div>

          <div className="vmv-sections">
            <div className="vmv-item">
              <div className="vmv-icon vision-icon"></div>
              <h2 className="vmv-subtitle">{t('about.visionMissionValues.visionTitle')}</h2>
              <p className="vmv-text">{t('about.visionMissionValues.vision')}</p>
            </div>

            <div className="vmv-item">
              <div className="vmv-icon mission-icon"></div>
              <h2 className="vmv-subtitle">{t('about.visionMissionValues.missionTitle')}</h2>
              <p className="vmv-text">{t('about.visionMissionValues.mission')}</p>
            </div>

            <div className="vmv-item">
              <div className="vmv-icon values-icon"></div>
              <h2 className="vmv-subtitle">{t('about.visionMissionValues.valuesTitle')}</h2>

              {/* Listage des valeurs */}
              <p className="vmv-text">
                <strong>{t('about.visionMissionValues.values.valueone')}</strong> {t('about.visionMissionValues.values.valueonetext')}<br />
                <strong>{t('about.visionMissionValues.values.valuetwo')}</strong> {t('about.visionMissionValues.values.valuetwotext')}<br />
                <strong>{t('about.visionMissionValues.values.valuethree')}</strong> {t('about.visionMissionValues.values.valuethreetext')}<br />
                <strong>{t('about.visionMissionValues.values.valuefour')}</strong> {t('about.visionMissionValues.values.valuefourtext')}<br />
                <strong>{t('about.visionMissionValues.values.valuefive')}</strong> {t('about.visionMissionValues.values.valuefivetext')}
              </p>
            </div>
          </div>
        </div>

        {/* Troisième partie */}
        <div className="team-section">
          <h1 className="vmv-title">{t('about.team.title')}</h1>
          <div className="vmv-underline"></div>
          <div className="team-members">
            <div className="team-member">
              <img src={ikramImg} alt="Ikram" className="team-img" />
              <h3>{t('about.team.members.ikram.name')}</h3>
              <p>{t('about.team.members.ikram.description')}</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/ikram-zerrouki-385b12232/" className="social-link">{t('about.team.members.ikram.linkedin')}</a>
                <a href="mailto:ikram.zerrouki@gmail.com" className="social-link">{t('about.team.members.ikram.gmail')}</a>
              </div>
            </div>

            <div className="team-member">
              <img src={safiaImg} alt="Safia Ines" className="team-img" />
              <h3>{t('about.team.members.safia.name')}</h3>
              <p>{t('about.team.members.safia.description')}</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/safia-ines-benguiar/" className="social-link">{t('about.team.members.safia.linkedin')}</a>
                <a href="mailto:safia.benguiar@gmail.com" className="social-link">{t('about.team.members.safia.gmail')}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Quatrième partie */}
        <div className="supervisor-section">
          <h1 className="vmv-title">{t('about.supervisedBy.title')}</h1>
          <div className="vmv-underline"></div>
          <div className="supervisor-details">
            <img src={supervisorImg} alt="Supervisor" className="supervisor-img" />
            <h3>{t('about.supervisedBy.name')}</h3>
            <p>{t('about.supervisedBy.position')}</p>
            <p>{t('about.supervisedBy.organization')}</p>
            <p>{t('about.supervisedBy.address')}</p>
            <p>{t('about.supervisedBy.phone')}</p>
            <p>{t('about.supervisedBy.email')}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
