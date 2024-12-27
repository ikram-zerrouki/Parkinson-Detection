import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate pour la redirection
import Nav from './Nav'; // Navigation (si nécessaire)
import './LoginPage.css';
import { useTranslation } from 'react-i18next'; // Import pour la traduction

function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Pour afficher un message d'erreur
  const navigate = useNavigate(); // Initialiser useNavigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    
    // Validation simple des champs
    if (email === "test@example.com" && password === "123456") {
      console.log('Connexion réussie. Redirection vers le Dashboard');
      navigate('/dashboard'); // Rediriger vers la page Dashboard si les infos sont correctes
    } else {
      console.log('Erreur de connexion. Veuillez vérifier vos informations.');
      setError(t('login.invalidCredentials')); // Afficher un message d'erreur (traduction)
    }
  };

  return (
    <>
      <Nav /> {/* Inclure la navigation si nécessaire */}
      <div className="login-page">
        <div className="login-container">
          <div className="photo-section"></div> {/* Section d'image (si nécessaire) */}
          <div className="login-box">
            <h1 className="login-titleLog">{t('login.title')}</h1>
            {error && <p className="error-message">{error}</p>} {/* Afficher le message d'erreur */}
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">{t('login.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Mettre à jour l'état de l'email
                  placeholder={t('login.emailPlaceholder')}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">{t('login.passwordLabel')}</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Mettre à jour l'état du mot de passe
                  placeholder={t('login.passwordPlaceholder')}
                  required
                />
              </div>
              <button type="submit" className="login-button">
                {t('login.loginButton')}
              </button>
            </form>
            <div className="login-footer">
              <a href="/signup">{t('login.createAccount')}</a>
              <a href="/forgot-password">{t('login.forgotPassword')}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
