import React, { useEffect } from "react";
import TeamImage from "../assets/can.jpg"; // Ensure this path is correct
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const AboutIntandem = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-10 pt-[100px] animate-fadeIn">
        {/* Adjusted padding to prevent content overlap */}
        <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-slideDown">
          About Intandem Scholars
        </h1>
        <div className="max-w-7xl w-full flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden animate-zoomIn">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 group relative">
            <img
              src={TeamImage}
              alt="Team Intandem"
              className="w-full h-[300px] md:h-auto object-cover transition-transform transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <p className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Intandem Scholars: Empowering Futures Together
            </p>
          </div>

          {/* Right Section - Description */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-white animate-fadeIn delay-300">
              Welcome to Intandem Scholars
            </h2>
            <p className="text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradientReveal ">
              At Intandem Scholars, we pride ourselves on providing expert
              education consultancy services to aspiring students. Based in the
              heart of Kathmandu, Nepal, our mission is to guide and empower
              students in achieving their academic and career goals by offering
              personalized and professional support.
            </p>
            <p className="text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradientReveal delay-500">
              With years of experience, we’ve helped countless students find the
              perfect universities and courses, simplifying the application
              process while ensuring their transition abroad is seamless. Our
              expert team provides tailored advice, from visa assistance to
              academic counseling, creating a supportive environment for
              success.
            </p>
            <p className="text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradientReveal delay-700">
              Join us at Intandem Scholars, where your dreams meet our expertise,
              and together, we pave the path to a brighter and more fulfilling
              future.
            </p>
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
      <style>{`
        /* Fade-in effect */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-down effect */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Zoom-in effect */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Gradient shimmer effect */
        @keyframes gradientCycle {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Gradient reveal animation */
        @keyframes gradientReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        /* Classes */
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 1.5s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1.5s ease-out forwards;
        }

        .animate-gradientReveal {
          animation: gradientReveal 1.2s ease-in-out forwards;
          display: inline-block;
          transform-origin: bottom;
          background-size: 400% 400%;
          animation: gradientCycle 6s ease infinite;
        }

        .animate-gradientReveal.delay-500 {
          animation-delay: 0.5s;
        }

        .animate-gradientReveal.delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default AboutIntandem;
