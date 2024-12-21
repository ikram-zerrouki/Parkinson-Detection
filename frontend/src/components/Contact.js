import React from "react";
import { useTranslation } from "react-i18next";  // Import pour la traduction
import "./Contact.css";
import Nav from './Nav';
import AddressIcon from "../assets/images/Frame-1.png"; 
import PhoneIcon from "../assets/images/Frame.png";
import EmailIcon from "../assets/images/Layer_1.png";

const Contact = () => {
  const { t } = useTranslation();  // Hook pour la traduction

  return (
    <>
    <Nav />
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-sections">
          <div className="contact-form">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.formInstructions')}</p>
            <form>
              <input type="text" name="name" placeholder={t('contact.namePlaceholder')} required />
              <input type="email" name="email" placeholder={t('contact.emailPlaceholder')} required />
              <input type="text" name="subject" placeholder={t('contact.subjectPlaceholder')} required />
              <textarea name="message" placeholder={t('contact.messagePlaceholder')} required></textarea>
              <button type="submit">{t('contact.submitButton')}</button>
            </form>
          </div>
          <div className="feedback-section">
            <h2>{t('contact.feedbackTitle')}</h2>
            <p>{t('contact.feedbackInstructions')}</p>
            <button className="feedback-button">{t('contact.feedbackButton')}</button>
          </div>
        </div>
        <div className="contact-info">
          <h3>{t('contact.contactInfoTitle')}</h3>
          <p><img src={AddressIcon} alt="Address Icon" className="icon" /> {t('contact.address')}</p>
          <p><img src={PhoneIcon} alt="Phone Icon" className="icon" /> {t('contact.phone')}</p>
          <p><img src={EmailIcon} alt="Email Icon" className="icon" /> {t('contact.email')}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
