import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import logo from "../assets/logo1.png";
import logo2 from "../assets/logo1.png";
import img1 from "../assets/facebook.png";
import img2 from "../assets/googlemap.png";
import img3 from "../assets/whatsapp.png";
import img4 from "../assets/linkedin.png";

// Data for Services and Study Abroad Links
const services = [
  { path: "/college-admissions", label: "College & University Admissions" },
  { path: "/visa-preparation", label: "Visa Preparation" },
  { path: "/career-counselling", label: "Career Counselling" },
  { path: "/academic-guidance", label: "Academic Guidance" },
  { path: "/pre-departure", label: "Pre Departure Briefing" },
  { path: "/visa-lodgement", label: "Visa Lodgement" },
];

const abroad = [
  { path: "/study-in-usa", label: "Study In USA" },
  { path: "/study-in-australia", label: "Study In Australia" },
  { path: "/study-in-canada", label: "Study In Canada" },
  { path: "/study-in-uk", label: "Study In UK" },
];

const navLinks = [
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact us" },
];

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [showAbroad, setShowAbroad] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "services") {
      setShowServices(!showServices);
      setShowAbroad(false); // Close the Study Abroad dropdown
    } else if (dropdown === "abroad") {
      setShowAbroad(!showAbroad);
      setShowServices(false); // Close the Services dropdown
    }
  };

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
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

          {/* Services Dropdown */}
          <div className="relative cursor-pointer">
            <div
              className="flex items-center gap-1 text-gray-700 hover:text-[#038A58]"
              onClick={() => toggleDropdown("services")}
            >
              <span>Services</span>
              {showServices ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showServices && (
              <div className="absolute top-12 bg-white rounded-lg shadow-lg w-[250px]">
                {services.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block py-2 px-4 hover:bg-[#07A2BB] text-gray-700 rounded-md transition-all"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Study Abroad Dropdown */}
          <div className="relative cursor-pointer">
            <div
              className="flex items-center gap-1 text-gray-700 hover:text-[#038A58]"
              onClick={() => toggleDropdown("abroad")}
            >
              <span>Study Abroad</span>
              {showAbroad ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showAbroad && (
              <div className="absolute top-12 bg-white rounded-lg shadow-lg w-[250px]">
                {abroad.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block py-2 px-4 hover:bg-[#07A2BB] text-gray-700 rounded-md transition-all"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map(({ path, label }) => (
            <Link key={path} to={path} className="hover:text-[#07A2BB]">
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <FiAlignJustify
          className="text-3xl lg:hidden cursor-pointer text-[#286CFF]"
          onClick={toggleSidebar}
        />

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-[2] flex flex-col">
            <MdOutlineClose
              className="absolute top-4 right-4 text-3xl cursor-pointer"
              onClick={toggleSidebar}
            />
            <div className="py-6 text-center">
              <img src={logo2} alt="Logo" className="h-[100px] mx-auto" />
            </div>
            <Link to="/" className="px-6 py-3 hover:bg-gray-200">
              Home
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="border-t">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex justify-between items-center px-6 py-3 w-full text-gray-700"
              >
                Services {showServices ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showServices && (
                <div>
                  {services.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      className="block px-8 py-2 hover:bg-gray-200"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Study Abroad Dropdown */}
            <div className="border-t">
              <button
                onClick={() => toggleDropdown("abroad")}
                className="flex justify-between items-center px-6 py-3 w-full text-gray-700"
              >
                Study Abroad {showAbroad ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showAbroad && (
                <div>
                  {abroad.map(({ path, label }) => (
                    <Link
                      key={path}
                      to={path}
                      className="block px-8 py-2 hover:bg-gray-200"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
