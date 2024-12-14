import React, { useEffect, useRef } from 'react';
import aawazLogo from '../assets/logo1.png';
import facebookImg from '../assets/facebook.png';
import googleImg from '../assets/googlemap.png';
import whatsappImg from '../assets/whatsapp.png';
import footerbgimage from '../assets/bgimage.jpeg';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import img4 from '../assets/linkedin.png';

const Footer = () => {
  const navItems1 = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" },
  ];

  const contactItems = [
    { icon: <BsTelephoneFill />, link: "tel: +977 9705566983", label: " 977 9705566983" },
    { icon: <HiOutlineMail />, link: "mailto:supadhyay@intandemscholars.com", label: "supadhyay@intandemscholars.com" },
    { icon: <MdLocationOn />, label: "Battisputali Marg, Old Baneshwor, Kathmandu" },
  ];

  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${footerbgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Darker red overlay */}
      <div className="absolute inset-0  opacity-50 z-0"></div>

      <div
        ref={footerRef}
        className="flex flex-col gap-4 py-6 px-4 sm:px-7 md:flex-row justify-center items-center md:gap-8 lg:gap-12 xl:gap-16 relative z-10"
        style={{
          animation: 'fadeIn 1s ease forwards',
          animationPlayState: 'paused',
        }}
      >
        <div className="flex flex-col items-center gap-3 sm:gap-5">
          <Link to="/">
            <img
              src={aawazLogo}
              alt="Aawaz Logo"
              className="h-[200px] w-[240px] rounded-full transition-transform duration-700 ease-in-out hover:scale-110 "
            />
          </Link>
          <div className="flex gap-1 sm:gap-3">
            <a
              href="https://www.facebook.com/share/1A6FSDCwy8/?mibextid=LQQJ4d"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img src={facebookImg} alt="Facebook" className="w-8 h-8" />
            </a>
            <a
              href="https://www.google.com/maps/dir//Intandem+Scholars,+Battisputali+Marg,+Kathmandu+44600/@27.7020787,85.3406429,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39eb193ca8412ca1:0xbc5eaf962c8bfd62!2m2!1d85.3406835!2d27.7020624?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img src={googleImg} alt="Google" className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/9705566983"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img src={whatsappImg} alt="WhatsApp" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/intandemscholars/?originalSubdomain=np"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img src={img4} alt="Linkedin" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <NavSection title="Quick Links" items={navItems1} />

        <div className="flex flex-col items-center font-semibold text-[16px] sm:text-[18px] gap-2 sm:gap-3">
          <div className="font-bold text-[18px] sm:text-[20px] text-white text-center">
            Intandem Scholars
          </div>
          {contactItems.map((item, index) => (
            <ContactItem key={index} icon={item.icon} link={item.link} label={item.label} />
          ))}
        </div>
      </div>
      <div className="text-center py-3 font-semibold text-white bg-red-600 w-full">
  <span className="glitter-effect">
    &copy; 2024 <span className="glitter-effect-text">Intandem Scholars</span> , Developed & Design by  
    {' '}
    <a 
      href="https://www.cloudsnepalweb.com/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="glitter-effect-text"
    >
      Clouds Nepal Web Pvt. Ltd.
    </a>
  </span>
</div>


      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
           .glitter-effect-text {
    position: relative;
    display: inline-block;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    background-image: linear-gradient(90deg, #e5e5e5, #f0f0f0, #e5e5e5);
    background-size: 200% 100%;
    animation: glitter 1.5s infinite linear;
    -webkit-background-clip: text; /* Ensure gradient only applies to text */
    background-clip: text;
  }

  /* Create the glittering animation */
  @keyframes glitter {
    0% {
      background-position: 200% 0;
    }
    50% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Optional: Soft white glow for moon-like shine */
  .glitter-effect-text {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.3);
  }
      `}</style>
    </div>
  );
};

const NavSection = ({ title, items }) => (
  <div className="flex flex-col items-center font-semibold text-[16px] sm:text-[18px] gap-2 sm:gap-5">
    {items.map((item, index) => (
      <NavItem key={index} link={item.link} label={item.label} />
    ))}
  </div>
);

const NavItem = ({ link, label }) => (
  <div className="flex gap-2 items-center">
    <Link to={link} className="text-white hover:text-gray-300 transition-colors duration-300">
      {label}
    </Link>
  </div>
);

const ContactItem = ({ icon, link, label }) => (
  <div className="flex gap-2 items-center text-white hover:text-gray-300 transition-colors duration-300">
    {icon}
    {link ? <a href={link}>{label}</a> : <span>{label}</span>}
  </div>
);

export default Footer;
