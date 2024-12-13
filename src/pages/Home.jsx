import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import InfoCards from '../components/InfoCards';
import StudyDestinations from '../components/StudyDestinations';
import WhyChooseUs from '../components/whyChooseUsData';
import VisaConsultancySlider from '../components/VisaConsultancySlider';

const Home = () => {
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[72px]">
        <Navbar />
      </div>
      
      {/* Main content section */}
      <div>
        <VisaConsultancySlider/>
        <InfoCards/>
        <StudyDestinations/>
        <WhyChooseUs/>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
