import React from "react";
import DirectorPhoto from "../assets/md.jpeg";

const MessageFromDirector = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-5 sm:px-10 md:px-20 py-10 pt-[15px] animate-fadeIn">
      <div className="max-w-7xl w-full flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden animate-zoomIn">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 group relative">
          <img
            src={DirectorPhoto}
            alt="Shailendra Upadhyay"
            className="w-full h-[250px] md:h-auto object-cover transition-transform transform hover:scale-105 duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
          <p className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Shailendra Upadhyay: Empowering Nepalese Students
          </p>
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h2 className=" sm:text-3xl lg:text-3xl font-semibold text-white animate-fadeIn delay-300">
            Message From The Managing Director
          </h2>
          <p className=" sm:text-3xl lg:text-3xl leading-relaxed text-justify bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradientReveal">
            Welcome to <span className="font-semibold text-indigo-600">InTandem Scholars</span>!
          </p>
          <p className="sm:text-2xl lg:text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradientReveal delay-500">
            As the Managing Director, I am thrilled to extend a warm welcome to all prospective students and their families. At InTandem Scholars, we are passionate about providing exceptional guidance and support to Nepalese students aspiring to pursue higher education abroad. Our mission is to empower you to achieve your academic and career goals by connecting you with world-class educational opportunities.
          </p>
          <p className="sm:text-2xl lg:text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradientReveal delay-700">
            Having visited the UK, USA, and many other countries numerous times, I bring firsthand experience and valuable insights to help you navigate the complexities of studying abroad. We understand that this journey can be challenging, which is why our team of experienced consultants is here to assist you every step of the way—from selecting the right university and course to navigating the admissions and visa processes.
          </p>
          <p className="sm:text-2xl lg:text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradientReveal delay-1000">
            Although we are new in this field, we are trustworthy and dedicated. We utilize state-of-the-art technology, including artificial intelligence, to streamline visa processing and ensure a smooth experience for our students.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Warm regards,</h3>
            <p className="text-lg font-medium text-gray-800">Shailendra Upadhyay</p>
            <p className="text-sm text-gray-500">Managing Director, InTandem Scholars</p>
            <a
              href="https://www.linkedin.com/in/shailendra-k-u?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-indigo-600 font-medium hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
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

export default MessageFromDirector;
