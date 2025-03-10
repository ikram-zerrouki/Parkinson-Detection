import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/AboutPage';
import HomeP from './pages/Home';
import ContactPage from './pages/Contact';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/Dashboard';
import HistoryPageContainer from './pages/HistoryPage';
import PredictionContainer from './pages/Prediction';
import PrivacyPage from './pages/PrivacyPage';
import ProfilDoctorPage from './pages/ProfilDoctor';
import SavePatientPageWrapper from './pages/SavePatientPage';
import TermsandConditions from './pages/Terms&Conditions';
import UploadContainer from './pages/Upload';
import ViewMorePatientPageWrapper from './pages/ViewMorePatient';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/history" element={<HistoryPageContainer />} />
          <Route path="/prediction" element={<PredictionContainer />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/profile-doctor" element={<ProfilDoctorPage />} />
          <Route path="/save-patient" element={<SavePatientPageWrapper />} />
          <Route path="/terms" element={<TermsandConditions />} />
          <Route path="/upload" element={<UploadContainer />} />
          <Route path="/view-more-patient" element={<ViewMorePatientPageWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
