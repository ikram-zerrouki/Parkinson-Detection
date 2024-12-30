import React, { useState } from 'react';
import Nav from './Nav';
import { useTranslation } from 'react-i18next';
import "./PrivacyP.css"; // Import the CSS file

function PrivacyPolicy() {
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
                <h2>{t('privacy.title')}</h2>

                <section>
                    <p>{t('privacy.intro')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section1.title')}</h3>
                    <p>{t('privacy.section1.content')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section2.title')}</h3>
                    <p>{t('privacy.section2.content')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section3.title')}</h3>
                    <p>{t('privacy.section3.content')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section4.title')}</h3>
                    <p>{t('privacy.section4.content')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section5.title')}</h3>
                    <p>{t('privacy.section5.content')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section6.title')}</h3>
                    <p>{t('privacy.section6.content')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section7.title')}</h3>
                    <p>{t('privacy.section7.content')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section8.title')}</h3>
                    <p>{t('privacy.section8.content')}</p>
                </section>

                <section>
                    <h3>{t('privacy.section9.title')}</h3>
                    <p>{t('privacy.section9.content')}</p>
                </section>
            </main>

            <footer className="footerP">
                <button className="back-button">{t('privacy.backButton')}</button>
            </footer>
        </div>
    );
}

export default PrivacyPolicy;
