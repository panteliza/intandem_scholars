import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[80px]">
        <Navbar />
      </div>
      
      {/* Main content section */}
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
