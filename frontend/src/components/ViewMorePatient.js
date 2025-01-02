import React, { useEffect, useState } from 'react';
import './ViewMorePatient.css';
import Nav from './Nav';
import { useTranslation } from 'react-i18next';  // Import de la bibliothèque de traduction

const ViewMorePatientPage = () => {
  const { t } = useTranslation();  // Utilisation du hook de traduction

  // Simuler la récupération des informations depuis le backend
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Ici, tu peux appeler une API pour récupérer les informations du patient depuis le backend.
    // Je vais simuler des données pour l'exemple.
    const fetchPatientData = async () => {
      const data = {
        name: 'John Doe',
        id: '12345',
        birthday: '1980-01-15',
        gender: 'Male',
        phone: '05-55-12-34-97',
        email: 'johndoe@example.com',
        numberOfIRM: 5,
        diagnosisResult: 'Parkinson’s',
        description: 'The patient has been experiencing symptoms for 3 years.',
        lastUpdate: '2024-09-10',
        doctorName: 'Dr. Smith',
        emergencyContact: {
          name: 'Jane Doe',
          relation: 'Wife',
          phone: '05-55-67-89-36',
        },
      };
      setPatientData(data);
    };

    fetchPatientData();
  }, []);

  if (!patientData) {
    return <div>{t('viewMorePatient.loading')}</div>;  // Message de chargement
  }

  return (
    <div className="view-more-patient-page">
      <Nav />
      <div className="patient-details">
        <h2>{t('viewMorePatient.title')}</h2>
        <div className="info-group">
          <label>{t('viewMorePatient.name')}:</label>
          <p>{patientData.name}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.id')}:</label>
          <p>{patientData.id}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.birthday')}:</label>
          <p>{patientData.birthday}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.gender')}:</label>
          <p>{patientData.gender}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.phone')}:</label>
          <p>{patientData.phone}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.email')}:</label>
          <p>{patientData.email}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.numberOfIRM')}:</label>
          <p>{patientData.numberOfIRM}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.diagnosisResult')}:</label>
          <p>{patientData.diagnosisResult}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.description')}:</label>
          <p>{patientData.description}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.lastUpdate')}:</label>
          <p>{patientData.lastUpdate}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.doctorName')}:</label>
          <p>{patientData.doctorName}</p>
        </div>

        <h3>{t('viewMorePatient.emergencyContact.title')}</h3>
        <div className="info-group">
          <label>{t('viewMorePatient.emergencyContact.name')}:</label>
          <p>{patientData.emergencyContact.name}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.emergencyContact.relation')}:</label>
          <p>{patientData.emergencyContact.relation}</p>
        </div>
        <div className="info-group">
          <label>{t('viewMorePatient.emergencyContact.phone')}:</label>
          <p>{patientData.emergencyContact.phone}</p>
        </div>
        <div className="form-submit">
          <button type="button" className="back-button">{t('viewMorePatient.backButton')}</button>  {/* Bouton Back */}
        </div>
      </div>
    </div>
  );
};

export default ViewMorePatientPage;
