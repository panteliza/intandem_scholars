import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { MdOutlineClose } from 'react-icons/md';
import { FiAlignJustify } from "react-icons/fi";
import logo from '../assets/logo1.png'; // Main logo
import logo1 from '../assets/logo2.png'; // Sidebar logo
import img1 from '../assets/facebook.png';
import img2 from '../assets/googlemap.png';
import img3 from '../assets/whatsapp.png';
import img4 from '../assets/linkedin.png';

const services = [
  { path: '/college-admissions', label: 'College & University Admissions' },
  { path: '/visa-preparation', label: 'Visa Preparation' },
  { path: '/career-counselling', label: 'Career Counselling' },
  { path: '/academic-guidance', label: 'Academic Guidance' },
  { path: '/pre-departure', label: 'Pre Departure Briefing' },
  { path: '/visa-lodgement', label: 'Visa Lodgement' },
];

const abroad = [
  { path: '/study-in-usa', label: 'Study In USA' },
  { path: '/study-in-australia', label: 'Study In Australia' },
  { path: '/study-in-canada', label: 'Study In Canada' },
  { path: '/study-in-uk', label: 'Study In UK' },
];

const navLinks = [
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact us' },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleDropdown1 = () => setShowDropdown1(!showDropdown1);

  const renderServicesDropdown = () => (
    <div className="bg-white mt-2 rounded-lg shadow-lg">
      {services.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
          onClick={() => setShowDropdown(false)}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  const renderStudyAbroadDropdown = () => (
    <div className="bg-white mt-2 rounded-lg shadow-lg">
      {abroad.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
          onClick={() => setShowDropdown1(false)}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        .zoom-effect {
          transition: transform 0.3s ease-in-out;
        }
        .zoom-effect:hover {
          transform: scale(1.1);
        }
      `}</style>

      <nav className="w-full bg-white shadow-md sm:px-6 sm:py-3 pr-4 flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[70px] w-[80px]" />
          <div>
            <h1 className="text-[17px] sm:text-3xl font-bold text-[#2D4591]">
              Intandem Scholars
            </h1>
            <p className="text-[13px] sm:text-[15px] text-[#03C300]">
              "From Admission to Arrival Together"
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <Link to="/" className="text-[#099BA4] font-medium hover:text-[#038A58]">
            Home
          </Link>
          <div
            className="relative text-gray-700 cursor-pointer hover:text-[#038A58]"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-1">
              <span>Services</span>
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && renderServicesDropdown()}
          </div>
          <div
            className="relative text-gray-700 cursor-pointer hover:text-[#038A58]"
            onClick={toggleDropdown1}
          >
            <div className="flex items-center gap-1">
              <span>Study Abroad</span>
              {showDropdown1 ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown1 && renderStudyAbroadDropdown()}
          </div>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="text-gray-700 hover:text-[#07A2BB] transition-all"
            >
              {label}
            </Link>
          ))}
          {/* Social Icons */}
          <div className="flex gap-2">
            <a href="https://www.facebook.com/share/1A6FSDCwy8/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <img src={img1} alt="Facebook" className="h-[40px] w-[40px] object-contain" />
            </a>
            <a href="https://www.google.com/maps/dir//Intandem+Scholars,+Battisputali+Marg,+Kathmandu+44600/@27.7020787,85.3406429,17z" className="hover:scale-110 transform transition-transform duration-300" target="_blank" rel="noopener noreferrer">
              <img src={img2} alt="Google Maps" className="h-[40px] w-[40px] object-contain" />
            </a>
            <a href="https://wa.me/9705566983" target="_blank" rel="noopener noreferrer">
              <img src={img3} alt="WhatsApp" className="h-[40px] w-[40px] object-contain" />
            </a>
            <a href="https://www.linkedin.com/company/intandemscholars/?originalSubdomain=np" target="_blank" rel="noopener noreferrer">
              <img src={img4} alt="LinkedIn" className="h-[40px] w-[40px] object-contain" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <FiAlignJustify className="text-3xl lg:hidden cursor-pointer text-[#286CFF]" onClick={toggleSidebar} />

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-[2] flex flex-col">
            <MdOutlineClose
              className="absolute top-4 right-4 text-3xl text-gray-700 cursor-pointer hover:text-gray-900"
              onClick={toggleSidebar}
            />
            <div className="flex justify-center">
              <img src={logo1} alt="Sidebar Logo" className="h-[140px] object-contain zoom-effect" />
            </div>
            <Link to="/" className="py-3 px-6 border-b hover:bg-gray-100" onClick={toggleSidebar}>
              Home
            </Link>
            <div className="border-b px-6">{renderServicesDropdown()}</div>
            <div className="border-b px-6">{renderStudyAbroadDropdown()}</div>
            {navLinks.map(({ path, label }) => (
              <Link key={path} to={path} className="py-3 px-6 border-b hover:bg-gray-100" onClick={toggleSidebar}>
                {label}
              </Link>
            ))}
            {/* Social Icons in Sidebar */}
            <div className="flex justify-center gap-2 mt-4 px-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={img1} alt="Facebook" className="h-[40px] w-[40px]" />
              </a>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                <img src={img2} alt="Google Maps" className="h-[40px] w-[40px]" />
              </a>
              <a href="https://wa.me/9705566983" target="_blank" rel="noopener noreferrer">
                <img src={img3} alt="WhatsApp" className="h-[40px] w-[40px]" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={img4} alt="LinkedIn" className="h-[40px] w-[40px]" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
