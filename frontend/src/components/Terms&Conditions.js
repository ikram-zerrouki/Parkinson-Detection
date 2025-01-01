import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Nav from './Nav';
import "./PrivacyP.css"; // Import the CSS file

function TermsPage() {
  const { t } = useTranslation();
  const [isConnected, setIsConnected] = useState(true);

  const userProfile = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/40',
  };

  const handleLogout = () => {
    setIsConnected(false);
  };

  return (
    <div className="privacy-policy-page">
      <Nav userProfile={isConnected ? userProfile : null} handleLogout={handleLogout} />
      <main className="main-content">
        <h2>{t('termsTitle')}</h2>

        <section>
          <p>{t('termsWelcome')}</p>
        </section>

        <section>
          <h3>{t('termsAcceptanceTitle')}</h3>
          <p>{t('termsAcceptance')}</p>
        </section>

        <section>
          <h3>{t('termsProfessionalUseTitle')}</h3>
          <p>{t('termsProfessionalUse')}</p>
        </section>

        <section>
          <h3>{t('termsDataPrivacyTitle')}</h3>
          <p>{t('termsDataPrivacy')}</p>
        </section>

        <section>
          <h3>{t('termsMedicalDisclaimerTitle')}</h3>
          <p>{t('termsMedicalDisclaimer')}</p>
        </section>

        <section>
          <h3>{t('termsDataSecurityTitle')}</h3>
          <p>{t('termsDataSecurity')}</p>
        </section>

        <section>
          <h3>{t('termsIntellectualPropertyTitle')}</h3>
          <p>{t('termsIntellectualProperty')}</p>
        </section>

        <section>
          <h3>{t('termsLiabilityTitle')}</h3>
          <p>{t('termsLiability')}</p>
        </section>

        <section>
          <h3>{t('termsUserResponsibilitiesTitle')}</h3>
          <p>{t('termsUserResponsibilities')}</p>
        </section>

        <section>
          <h3>{t('termsModificationsTitle')}</h3>
          <p>{t('termsModifications')}</p>
        </section>
      </main>

      <footer className="footerP">
        <button className="back-button">{t('backButton')}</button>
      </footer>
    </div>
  );
}

export default TermsPage;
