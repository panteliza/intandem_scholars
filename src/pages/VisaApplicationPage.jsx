import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VisaImage from "../assets/qqq.jpg"; // Replace with correct path

const VisaApplicationPage = () => {
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
        style={{ backgroundImage: `url(${VisaImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold animate-slideDown">
            Visa Application Process
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Understanding the Visa Application Process
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Navigate through the visa application process with ease and clarity.
            Below is a detailed guide to help you understand the steps and
            requirements for a successful application.
          </p>

          {/* Requirements Section */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                1. Visa Requirements
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Valid passport with a minimum of 6 months validity.</li>
                <li>Confirmation of Enrollment (CoE) from the institution.</li>
                <li>Proof of financial capacity for living and tuition expenses.</li>
                <li>Health insurance coverage for the duration of stay.</li>
                <li>English language proficiency test scores (e.g., IELTS, TOEFL).</li>
              </ul>
            </div>

            {/* Application Steps */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                2. Steps to Apply
              </h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>
                  Gather all required documents, including financial statements
                  and educational transcripts.
                </li>
                <li>Receive your CAS (Confirmation of Acceptance for Studies).</li>
                <li>Submit the visa application form online.</li>
                <li>
                  Pay the visa fee and book a biometrics appointment at the
                  designated center.
                </li>
                <li>Attend the visa interview, if required.</li>
                <li>Wait for visa approval and prepare for your journey.</li>
              </ol>
            </div>

            {/* Financial Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                3. Financial Requirements
              </h3>
              <p className="text-gray-600 mb-4">
                Demonstrating financial capacity is a critical part of your visa
                application. Below are the estimated costs you need to cover:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Tuition fees: $10,000 to $30,000 per year (varies by program).</li>
                <li>Living expenses: $1,000 to $1,500 per month.</li>
                <li>Health insurance: $500 to $1,000 annually.</li>
                <li>Travel expenses and miscellaneous costs.</li>
              </ul>
            </div>

            {/* Final Note */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Need Assistance?
              </h3>
              <p className="text-gray-600">
                Applying for a visa can be overwhelming, but you don’t have to
                do it alone. At Intandem Scholars, our expert team is here to
                guide you through every step of the application process.
              </p>
              <p className="mt-4 text-gray-600">
                Reach out to us today to ensure your application is seamless and
                stress-free.
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

export default VisaApplicationPage;
