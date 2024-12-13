import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling
import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image

import Home from './pages/Home';
import Contact from './pages/Contact';




const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/intandem" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
         
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
