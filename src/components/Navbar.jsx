import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

import { MdOutlineClose } from 'react-icons/md';
import { FiAlignJustify } from "react-icons/fi";
import logo from '../assets/logo1.png'; // Main logo
import logo2 from '../assets/logo1.png'; // Sidebar logo
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

const navLinks = [
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact us' },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const renderServicesDropdown = () => (
    <div className="bg-white mt-2 rounded-lg shadow-lg">
      {services.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className="block bg-gray-100 hover:bg-[#07A2BB] text-gray-700 text-sm text-center py-2 px-2 rounded-md shadow transition-all"
          onClick={() => {
            setShowDropdown(false);
            setShowSidebar(false);
          }}
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

<nav className="w-full bg-white shadow-md px-6 flex justify-between items-center fixed top-0 left-0 z-50">

        {/* Logo */}
        <div className="flex items-center space-x-1 ">
          <img src={logo} alt="Muktinath Girls Hostel Logo" className="h-[70px] w-[80px]" />
          <div>
            <h1 className="text-[12px] sm:text-2xl font-bold text-[#2D4591]">
              Indandem Scholars
            </h1>
            <p className="text-[10px] sm:text-sm text-[#03C300]">
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
            {showDropdown && (
              <div className="absolute top-12 bg-white p-2 grid grid-cols-1 sm:grid-cols-2 gap-2 z-[1] shadow-lg rounded-lg w-[250px]">
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
            )}
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
          <div className="flex gap-2">
            <img src={img1} alt="Icon 1" className="h-[40px] w-[40px] object-contain" />
            <img src={img2} alt="Icon 2" className="h-[40px] w-[40px] object-contain" />
            <img src={img3} alt="Icon 3" className="h-[40px] w-[40px] object-contain" />
            <img src={img4} alt="LinkedIn Icon" className="h-[40px] w-[40px] object-contain" />
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
            <div className="flex justify-center items-center py-6">
              <img
                src={logo2}
                alt="Intandem Scholars Sidebar Logo"
                className="h-[120px] object-contain zoom-effect"
              />
            </div>
            <Link
              to="/"
              className="text-[#099BA4] font-medium py-3 px-6 border-b border-gray-200 hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              Home
            </Link>
            <div className="border-b border-gray-200 px-6">
              <button
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full py-3 text-gray-700"
              >
                <span>Services</span>
                {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showDropdown && <div className="mt-2">{renderServicesDropdown()}</div>}
            </div>
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="py-3 px-6 border-b border-gray-200 hover:bg-[#07A2BB]"
                onClick={toggleSidebar}
              >
                {label}
              </Link>
            ))}
            <div className="flex justify-center gap-2 mt-4 px-6">
              <img src={img1} alt="Icon 1" className="h-[40px] w-[40px] object-contain" />
              <img src={img2} alt="Icon 2" className="h-[40px] w-[40px] object-contain" />
              <img src={img3} alt="Icon 3" className="h-[40px] w-[40px] object-contain" />
              <img src={img4} alt="LinkedIn Icon" className="h-[40px] w-[40px] object-contain" />
              
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
