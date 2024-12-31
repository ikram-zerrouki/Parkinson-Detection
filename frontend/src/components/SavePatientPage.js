import React, { useState } from 'react';
import './SavePatientPage.css';
import Nav from './Nav';
import { useTranslation } from 'react-i18next';

const SavePatientPage = () => {
  const { t } = useTranslation();

  // États pour les données du formulaire
  const [formData, setFormData] = useState({
    name: '',
    patient_id: '',
    date_of_birth: '',
    gender: '',
    phone_number: '',
    email: '',
    irm: '',
    diagnosis: '',
    description: '',
    update_date: '',
    doctor_name: '',
    emergency_name: '',
    relation: '',
    emergency_phone: '',
  });

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour envoyer les données au backend
  const createPatient = async (patientData) => {
    // Ajoutez cette ligne pour voir les données envoyées
    console.log("Données du patient :", patientData); 

    try {
      const response = await fetch('http://127.0.0.1:8000/create_patient/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(patientData),
      });

      // Vérifiez si la réponse est correcte
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Erreur lors de la création du patient:', errorData.error);
        return; // Sortir de la fonction si l'erreur se produit
      }

      const data = await response.json();
      console.log('Patient créé avec succès:', data);
    } catch (error) {
      console.error("Erreur lors de la création du patient :", error);
    }
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    createPatient(formData);  // Envoie les données du formulaire au backend
  };

  return (
    <div className="save-patient-page">
      <Nav />
      <form className="patient-form" onSubmit={handleSubmit}>
        <h2>{t('savePatient.patientTitle')}</h2>

        <div className="form-group">
          <label>{t('savePatient.nameLabel')} :</label>
          <input
            type="text"
            name="name"
            placeholder={t('savePatient.namePlaceholder')}
            value={formData.name}
            onChange={handleChange}
          />

          <label>{t('savePatient.idLabel')} :</label>
          <input
            type="text"
            name="patient_id"
            placeholder={t('savePatient.idPlaceholder')}
            value={formData.patient_id}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('savePatient.dobLabel')} :</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
          />

          <label>{t('savePatient.genderLabel')} :</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">{t('savePatient.genderPlaceholder')}</option>
            <option value="M">{t('savePatient.male')}</option>
            <option value="F">{t('savePatient.female')}</option>
          </select>
        </div>

        <div className="form-group">
          <label>{t('savePatient.phoneLabel')} :</label>
          <input
            type="text"
            name="phone_number"
            placeholder={t('savePatient.phonePlaceholder')}
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('savePatient.emailLabel')} :</label>
          <input
            type="email"
            name="email"
            placeholder={t('savePatient.emailPlaceholder')}
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('savePatient.irmLabel')} :</label>
          <input
            type="number"
            name="irm"
            placeholder={t('savePatient.irmPlaceholder')}
            value={formData.irm}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('savePatient.diagnosisLabel')} :</label>
          <input
            type="text"
            name="diagnosis"
            placeholder={t('savePatient.diagnosisPlaceholder')}
            value={formData.diagnosis}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('savePatient.descriptionLabel')} :</label>
          <textarea
            name="description"
            placeholder={t('savePatient.descriptionPlaceholder')}
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label>{t('savePatient.updateLabel')} :</label>
          <input
            type="date"
            name="update_date"
            value={formData.update_date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('savePatient.doctorLabel')} :</label>
          <input
            type="text"
            name="doctor_name"
            placeholder={t('savePatient.doctorPlaceholder')}
            value={formData.doctor_name}
            onChange={handleChange}
          />
        </div>

        <h3>{t('savePatient.emergencyTitle')}</h3>
        <div className="form-group">
          <label>{t('savePatient.emergencyNameLabel')} :</label>
          <input
            type="text"
            name="emergency_name"
            placeholder={t('savePatient.emergencyNamePlaceholder')}
            value={formData.emergency_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('savePatient.relationLabel')} :</label>
          <input
            type="text"
            name="relation"
            placeholder={t('savePatient.relationPlaceholder')}
            value={formData.relation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>{t('savePatient.emergencyPhoneLabel')} :</label>
          <input
            type="text"
            name="emergency_phone"
            placeholder={t('savePatient.emergencyPhonePlaceholder')}
            value={formData.emergency_phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-submit">
          <button type="submit">{t('savePatient.submitButton')}</button>
        </div>
      </form>
    </div>
  );
};

export default SavePatientPage;
