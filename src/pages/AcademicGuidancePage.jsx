import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AcademicImage from "../assets/sss.jpg"; // Replace with correct path

const AcademicGuidancePage = () => {
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
        style={{ backgroundImage: `url(${AcademicImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold animate-slideDown">
            Academic Guidance and Support
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Your Pathway to Academic Success
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Get comprehensive guidance on studying abroad, securing scholarships,
            and finding suitable accommodations to make your academic journey smooth and successful.
          </p>

          {/* Accommodation Guidance */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                1. Student Accommodation Options
              </h3>
              <p className="text-gray-600 mb-4">
                Finding the right accommodation is a crucial part of your study-abroad journey. Here are some tips:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Explore online platforms for verified and trustworthy accommodation listings.
                </li>
                <li>
                  Check international newspapers and classifieds from the destination country.
                </li>
                <li>
                  Reach out to family or friends who might help or host you temporarily.
                </li>
                <li>
                  Contact your university for on-campus housing or recommendations for reliable housing options.
                </li>
                <li>
                  Seek help from study abroad consultants for personalized accommodation assistance.
                </li>
              </ul>
            </div>

            {/* Scholarship Assistance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                2. Scholarship Assistance
              </h3>
              <p className="text-gray-600 mb-4">
                Scholarships can ease the financial burden of studying abroad. Here’s how we can assist you:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Search for scholarships based on your academic interests and financial needs.</li>
                <li>Provide detailed information on national and international scholarship opportunities.</li>
                <li>Assist with the preparation and submission of scholarship applications.</li>
                <li>Inform you about university-specific scholarship programs for qualified candidates.</li>
                <li>Guide you through every step of the scholarship application process.</li>
              </ul>
              <p className="mt-4 text-gray-600">
                Contact us at <a href="mailto:info@thenext.edu.np" className="text-blue-600 underline">info@thenext.edu.np</a> or call (4010522, 4010523) for more details.
              </p>
            </div>

            {/* Factors to Consider for Study Abroad */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                3. Key Factors for Study Abroad Success
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Location:</strong> Choose accommodations close to your university to save time and travel costs.
                </li>
                <li>
                  <strong>Budget:</strong> Plan your finances to cover rent, tuition fees, and living expenses comfortably.
                </li>
                <li>
                  <strong>Type of Accommodation:</strong> Decide between on-campus housing, private apartments, or homestays based on your preferences.
                </li>
                <li>
                  <strong>Safety:</strong> Research the safety and reliability of the area where you plan to live.
                </li>
              </ul>
            </div>

            {/* Support Services */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                4. Comprehensive Support Services
              </h3>
              <p className="text-gray-600">
                Whether it’s finding accommodations, applying for scholarships, or academic planning, our team of experts is here to help. Reach out to us to ensure a smooth and successful academic experience.
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

export default AcademicGuidancePage;
