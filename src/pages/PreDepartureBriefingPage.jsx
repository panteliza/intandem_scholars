import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BriefingImage from "../assets/uuu.jpg"; // Replace with correct path

const PreDepartureBriefingPage = () => {
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
        style={{ backgroundImage: `url(${BriefingImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold animate-slideDown">
            Pre-Departure Briefing
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Preparing for Your Journey Abroad
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Embarking on your journey abroad can be exciting yet overwhelming. Our comprehensive pre-departure briefing ensures you are fully prepared and confident as you begin your new adventure.
          </p>

          {/* Essential Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                1. Essential Documentation
              </h3>
              <p className="text-gray-600 mb-4">
                Ensure you have all the necessary documents ready before departure:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Valid passport with appropriate visa.</li>
                <li>Offer letter or Confirmation of Enrollment (CoE).</li>
                <li>Travel insurance documents.</li>
                <li>Copies of academic and financial records.</li>
                <li>Emergency contact details.</li>
              </ul>
            </div>

            {/* Packing Tips */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                2. Packing Tips
              </h3>
              <p className="text-gray-600 mb-4">
                Packing smart is crucial for a hassle-free journey. Here are some tips:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Carry weather-appropriate clothing based on your destination.</li>
                <li>Pack a first-aid kit with basic medicines.</li>
                <li>Include adapters and chargers for your electronic devices.</li>
                <li>Carry essential toiletries and personal hygiene items.</li>
                <li>Ensure your luggage complies with airline baggage policies.</li>
              </ul>
            </div>

            {/* Cultural Awareness */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                3. Understanding Local Culture
              </h3>
              <p className="text-gray-600 mb-4">
                Adapting to a new culture can be challenging. Here's how you can prepare:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Research local customs, traditions, and etiquette.</li>
                <li>Learn a few basic phrases in the local language.</li>
                <li>Familiarize yourself with local laws and regulations.</li>
                <li>Be open-minded and respectful towards cultural differences.</li>
                <li>Stay updated on local events and news.</li>
              </ul>
            </div>

            {/* Financial Preparedness */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                4. Financial Preparedness
              </h3>
              <p className="text-gray-600 mb-4">
                Managing finances abroad is a vital aspect of your journey. Consider these steps:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Set up an international bank account if possible.</li>
                <li>Carry some local currency for initial expenses.</li>
                <li>Understand currency exchange rates and transaction fees.</li>
                <li>Budget for tuition fees, accommodation, and living expenses.</li>
                <li>Keep emergency funds accessible at all times.</li>
              </ul>
            </div>

            {/* Final Tips */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                5. Final Travel Tips
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Double-check flight details and travel itinerary.</li>
                <li>Arrive at the airport well in advance.</li>
                <li>Keep digital and hard copies of important documents.</li>
                <li>Inform family or friends about your travel plans.</li>
                <li>Stay calm and enjoy the journey!</li>
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

export default PreDepartureBriefingPage;
