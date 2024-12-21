import React from 'react';
import './BeginSection.css'; // Create this CSS file for styling
import doctorImage from '../assets/images/doctor-image.png'; // Adjust the path if needed

const BeginSection = () => {
  return (
    <div className="begin-section">
      <div className="begin-image">
        <img src={doctorImage} alt="Doctor with MRI" className="image-border"/>
      </div>
      <div className="separator"><h2></h2></div>
      <div className="begin-content">
        <h2>How to Begin Using <br />Parkinson Aid</h2>
        <p>
        Parkinson Aid is designed exclusively for neurologists and healthcare professionals 
        to leverage advanced MRI-based diagnostics for Parkinson’s disease.
         By utilizing our platform, you can seamlessly upload and analyze high-resolution
          MRI scans using state-of-the-art AI algorithms tailored to detect early signs of
           Parkinson’s with exceptional accuracy. Once you sign up, you’ll be able 
           to securely store and manage your patients' MRI data, allowing for ongoing
            monitoring and easy access to historical records. Begin your journey with 
            Parkinson Aid today and integrate powerful, data-driven insights into your 
            practice for improved patient care.
        </p>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
};

export default BeginSection;

