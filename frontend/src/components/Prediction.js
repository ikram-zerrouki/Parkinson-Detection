import React, { useState } from 'react';
import Nav from '../components/Nav';
import { useTranslation } from 'react-i18next';
import "./Prediction.css";

function Prediction() {
  const { t } = useTranslation();
  const [isConnected, setIsConnected] = useState(true);
  const userProfile = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/40',
  };

  const handleLogout = () => {
    setIsConnected(false);
  };

  // Dummy prediction data
  const predictionPercentage = 83; // Example percentage

  // Define a dynamic style for the circular progress
  const circleStyle = {
    background: `conic-gradient(#12C675 0% ${predictionPercentage}%, #e0e0e0 ${predictionPercentage}% 100%)`,
  };

  return (
    <div className="prediction-page">
      <Nav userProfile={isConnected ? userProfile : null} handleLogout={handleLogout} />
      
      {/* Main Prediction Section */}
      <div className="prediction-content">
        <h2>{t('prediction.title')}</h2>
        <p>{t('prediction.uploadedImages')}</p>

        {/* Circular Progress Bar */}
        <div className="circular-progress">
          <div className="circle" style={circleStyle}>
            <span>{predictionPercentage}%</span>
          </div>
        </div>

        {/* Prediction Description */}
        <p className="prediction-text">
          {t('prediction.predictionResult')}
        </p>

        {/* Buttons */}
        <div className="button-group">
          <button className='btn'>{t('prediction.saveButton')}</button>
          <button className='btn'>{t('prediction.exitButton')}</button>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
