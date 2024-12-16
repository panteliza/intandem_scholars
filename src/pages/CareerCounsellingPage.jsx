import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareerImage from "../assets/lll.jpg"; // Replace with correct path

const CareerCounsellingPage = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72"
        style={{ backgroundImage: `url(${CareerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold animate-slideDown">
            Career Counselling Services
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Plan Your Future with Confidence
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Discover your strengths, interests, and opportunities with our
            comprehensive career counselling services. Let us guide you towards
            a fulfilling career path.
          </p>

          {/* Services Offered */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                1. Our Services
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Personalized career assessments and evaluations.</li>
                <li>Guidance on selecting the right career path.</li>
                <li>Help with resume building and interview preparation.</li>
                <li>Insights into current job market trends.</li>
                <li>Support for career transitions and upskilling.</li>
              </ul>
            </div>

            {/* Steps to Get Started */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                2. How to Get Started
              </h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Schedule an initial consultation with our counsellors.</li>
                <li>Complete a career assessment to understand your strengths.</li>
                <li>Participate in one-on-one counselling sessions.</li>
                <li>Develop a personalized career action plan.</li>
                <li>Receive ongoing support and guidance as you progress.</li>
              </ol>
            </div>

            {/* Benefits of Career Counselling */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                3. Benefits of Career Counselling
              </h3>
              <p className="text-gray-600 mb-4">
                Career counselling offers numerous benefits, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Clarity about career goals and objectives.</li>
                <li>Better decision-making when choosing educational programs.</li>
                <li>Improved confidence in job searches and applications.</li>
                <li>Enhanced skills to stay competitive in the job market.</li>
                <li>Access to a network of professionals and resources.</li>
              </ul>
            </div>

            {/* Final Note */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Let Us Help You Succeed
              </h3>
              <p className="text-gray-600">
                Navigating your career path doesn’t have to be challenging. Our
                expert counsellors are here to help you make informed decisions
                and achieve your professional aspirations.
              </p>
              <p className="mt-4 text-gray-600">
                Contact us today to take the first step towards a brighter future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 1.2s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in;
        }
      `}</style>
    </div>
  );
};

export default CareerCounsellingPage;
