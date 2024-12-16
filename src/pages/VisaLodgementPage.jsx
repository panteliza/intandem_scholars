import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VisaLodgementImage from "../assets/www.jpg"; // Replace with correct path

const VisaLodgementPage = () => {
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
        style={{ backgroundImage: `url(${VisaLodgementImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold animate-slideDown">
            Visa Lodgement Services
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            About the Visa Lodgement Process
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            The visa application process can be complex, confusing, and subject to constant changes. Let us guide you through every step to ensure a smooth and error-free visa lodgement experience.
          </p>

          {/* Process Overview */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                1. Importance of Accurate Visa Lodgement
              </h3>
              <p className="text-gray-600 mb-4">
                Visa lodgement mistakes, such as incomplete applications or inaccuracies, can lead to delays or unsuccessful results. Since visa application fees are non-refundable, errors can be costly. To avoid such issues, our experts ensure that your visa application is perfect and error-free.
              </p>
            </div>

            {/* Steps to Apply */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                2. Steps for Successful Visa Lodgement
              </h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Obtain your university’s admission letter.</li>
                <li>Arrange financial support to meet the study-abroad requirements.</li>
                <li>Familiarize yourself with the immigration rules of your destination country.</li>
                <li>Complete visa application forms accurately and submit all required documents.</li>
                <li>Adhere to deadlines and keep track of application progress.</li>
                <li>Seek professional guidance to avoid common errors.</li>
              </ol>
            </div>

            {/* Challenges of Visa Lodgement */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                3. Challenges of the Process
              </h3>
              <p className="text-gray-600 mb-4">
                Obtaining a student visa involves a lot of paperwork and specific requirements that vary by country. These challenges include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Understanding and meeting the unique criteria of each nation.</li>
                <li>Gathering and organizing a significant amount of documentation.</li>
                <li>Ensuring that all forms are completed correctly and on time.</li>
                <li>Managing stress and uncertainty during the application process.</li>
              </ul>
            </div>

            {/* Expert Guidance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                4. How We Can Help
              </h3>
              <p className="text-gray-600 mb-4">
                Our Location-Based Counselors are here to guide you through every step of the visa lodgement process, ensuring a smooth and successful application. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reviewing and completing visa application forms.</li>
                <li>Providing advice on immigration rules and regulations.</li>
                <li>Helping you gather and organize all required documents.</li>
                <li>Submitting your application on time and tracking its progress.</li>
                <li>Offering personalized support to address your specific needs.</li>
              </ul>
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

export default VisaLodgementPage;
