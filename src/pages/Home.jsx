import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import InfoCards from '../components/InfoCards';
import StudyDestinations from '../components/StudyDestinations';
import WhyChooseUs from '../components/whyChooseUsData';
import VisaConsultancySlider from '../components/VisaConsultancySlider';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
      
      {/* Main content section */}
      <div className="w-full flex-shrink-0">
        <VisaConsultancySlider/>
        <InfoCards/>
        <StudyDestinations/>
        <WhyChooseUs/>
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
