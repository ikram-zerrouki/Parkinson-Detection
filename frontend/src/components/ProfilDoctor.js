import React, { useState } from 'react';
import './ProfilDoctor.css';
import Nav from './Nav';
import defaultProfilePic from '../assets/images/profile-place.jpg';  // Place l'image par défaut ici
import { useTranslation } from 'react-i18next';

const ProfilDoctor = () => {
  const { t } = useTranslation();
  
  const [doctorData, setDoctorData] = useState({
    name: '',
    dob: '',
    phoneNumber: '',
    email: '',
    profilePic: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({
      ...doctorData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setDoctorData({
      ...doctorData,
      profilePic: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer les données ou sauvegarder le profil du docteur
    console.log(doctorData);
  };

  const handleExit = () => {
    // Logic to exit or navigate away
    console.log("Exit button clicked");
    // For example, you can redirect to another page or clear the form
  };

  return (
    <div className="profil-doctor-page">
        <Nav />
      <form className="doctor-form" onSubmit={handleSubmit}>
        <h2>{t('profileDoctor.title')}</h2>
        <div className="form-group">
          <div className="form-left">
            <label>{t('profileDoctor.nameLabel')}</label>
            <input
              type="text"
              name="name"
              placeholder={t('profileDoctor.placeholderName')}
              value={doctorData.name}
              onChange={handleInputChange}
            />

            <label>{t('profileDoctor.dobLabel')}</label>
            <input
              type="date"
              name="dob"
              value={doctorData.dob}
              onChange={handleInputChange}
            />

            <label>{t('profileDoctor.emailLabel')}</label>
            <input
              type="email"
              name="email"
              placeholder={t('profileDoctor.placeholderEmail')}
              value={doctorData.email}
              onChange={handleInputChange}
            />

            <label>{t('profileDoctor.phoneNumberLabel')}</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder={t('profileDoctor.placeholderPhoneNumber')}
              value={doctorData.phoneNumber}
              onChange={handleInputChange}
            />

          </div>

          <div className="form-right">
            <label><strong>{t('profileDoctor.uploadPicLabel')}</strong></label>
            <div className="profile-pic-container">
              <label htmlFor="profilePicInput">
                <img
                  src={
                    doctorData.profilePic
                      ? URL.createObjectURL(doctorData.profilePic)
                      : defaultProfilePic
                  }
                  alt="Profile"
                  className="profile-pic"
                />
                <div className="overlay">
                  <span className="upload-text">{t('profileDoctor.addPhotoText')}</span>
                </div>
              </label>
              <input
                id="profilePicInput"
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}  // Cache le champ input réel
              />
            </div>
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="save-btn">{t('profileDoctor.saveProfileButton')}</button>
          <button type="button" className="exit-btn" onClick={handleExit}>{t('profileDoctor.exitButton')}</button>
        </div>
      </form>
    </div>
  );
};

export default ProfilDoctor;
