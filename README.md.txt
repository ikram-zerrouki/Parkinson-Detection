# ParkinsonAid: Advanced Parkinson's Disease Detection Platform

## Overview
ParkinsonAid is an advanced web-based platform designed to assist healthcare professionals in detecting Parkinson's disease by analyzing MRI images. The platform leverages deep learning models integrated into a user-friendly interface, enabling doctors to upload and process multiple MRI images simultaneously for accurate and efficient diagnosis.

---

## Features
- **Multi-Image Upload**: Upload up to 50 MRI images simultaneously for batch processing.
- **AI-Powered Diagnosis**: Utilizes state-of-the-art deep learning models (e.g., MobileNet, ResNet) trained on T1-weighted MRI datasets for high accuracy.
- **Bilingual Interface**: Supports both English and French, offering a seamless user experience for diverse audiences.
- **Doctor Profile Management**: Personalize and manage doctor profiles with details like name, contact information, and profile pictures.
- **Responsive Design**: Fully responsive and accessible on various devices.

---

## Technology Stack
### **Frontend**
- **React.js**: For building an intuitive and dynamic user interface.
- **CSS**: For styling the application with a clean and professional appearance.

### **Backend**
- **Django**: For robust and scalable server-side logic.
- **REST API**: For seamless communication between the frontend and backend.

### **Database**
- **MySQL**: To securely store user data and application information.

### **AI Model**
- **TensorFlow/Keras**: Frameworks used to develop and integrate pre-trained AI models for Parkinson's detection.

---

## Project Structure
```plaintext
ParkinsonAid/
├── frontend/        # React frontend code
├── backend/         # Django backend code
├── ai_model/        # AI model integration
├── database/        # Database schema and seed files
└── README.md        # Project documentation
