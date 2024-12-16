import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling
import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image

import Home from './pages/Home';
import Contact from './pages/Contact';
import AustraliaPage from './pages/AustraliaPage';
import USAPage from './pages/USAPage ';
import CanadaPage from './pages/CanadaPage';
import UKPage from './pages/UkPage';
import About from './pages/About';
import VisaApplicationPage from './pages/VisaApplicationPage';
import AdmissionsPage from './pages/AdmissionsPage';
import CareerCounsellingPage from './pages/CareerCounsellingPage';
import AcademicGuidancePage from './pages/AcademicGuidancePage';
import PreDepartureBriefingPage from './pages/PreDepartureBriefingPage';
import VisaLodgementPage from './pages/VisaLodgementPage';





const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/intandem" element={<Home />} />
          <Route path="/study-in-canada" element={<CanadaPage />} />
          <Route path="/study-in-usa" element={<USAPage />} />
          <Route path="/study-in-uk" element={<UKPage />} />
          <Route path="/study-in-australia" element={<AustraliaPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/visa-preparation" element={<VisaApplicationPage />} />
          <Route path="/college-admissions" element={<AdmissionsPage />} />
          <Route path="/career-counselling" element={<CareerCounsellingPage />} />
          <Route path="/academic-guidance" element={<AcademicGuidancePage />} />
          <Route path="/pre-departure" element={<PreDepartureBriefingPage />} />
          <Route path="/visa-lodgement" element={<VisaLodgementPage />} />
        </Routes>

        {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/9779705566983"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
