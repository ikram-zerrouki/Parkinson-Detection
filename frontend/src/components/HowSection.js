import React from 'react';
import './HowSection.css'; // Create this CSS file for styling
import brainImage from '../assets/images/brain-image.png';  // Adjust the path if needed

const HowSection = () => {
  return (
    <div className="how-section">
      <div className="how-content">
         <div className="title-container">
            <h2>How It Works Behind <br />the Scenes</h2>
            <div className="separator2"></div>
         </div>
        <p>
        Behind the scenes, Parkinson Aid harnesses the power of advanced
        machine learning to analyze MRI scans with precision and speed. 
        Our AI model has been trained on thousands of images to recognize
        subtle patterns and changes in the brain that are early indicators
        of Parkinson’s disease. When a new MRI scan is uploaded, the model 
        processes it, compares it with vast datasets, and identifies potential
        markers that might not be visible to the human eye. The result is 
        a reliable, data-driven analysis that helps doctors make more 
        informed decisions, all while continuously learning and improving 
        from new data. This cutting-edge technology brings a 
        new level of confidence and accuracy to Parkinson’s detection.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>

      <div className="how-image">
        <img src={brainImage} alt="Doctor with MRI" className="image-border"/>
      </div>
    </div>
  );
};

export default HowSection;