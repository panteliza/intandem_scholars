import React from 'react';
import graduateImg from '../assets/aa.jpg'; // Update with your image path
import groupStudentsImg from '../assets/bb.jpg'; // Update with your image path

const ServicesSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Commence with Your Goals</h1>
          <p className="text-lg text-gray-600 mb-6">
            Intandem Scholars offers you the best education consultancy in Nepal.
          </p>
          <ul className="space-y-4">
            <li>
              <span className="text-blue-600 font-semibold">Visa Consultation:</span>{' '}
              Expert help with visa requirements.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">Admissions Advice:</span>{' '}
              Guidance for college/university admission.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">Travel and Stay:</span>{' '}
              Assistance with accommodation abroad.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">College Admissions:</span>{' '}
              Help choosing the best institution.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">Visa Preparation:</span>{' '}
              Step-by-step visa application guidance.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">Career Counselling:</span>{' '}
              Tailored career advice and planning.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">Academic Guidance:</span>{' '}
              Support for academic success strategies.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">Pre-Departure Briefing:</span>{' '}
              Smooth transition preparation abroad.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">Visa Lodgement:</span>{' '}
              Assistance with timely visa submission.
            </li>
          </ul>
        </div>

        {/* Images Section */}
        <div className="lg:w-1/2 grid grid-cols-1 gap-6 relative">
          {/* First Image */}
          <div
            className="w-full h-64 lg:h-80 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-700"
            style={{ backgroundImage: `url(${graduateImg})` }}
          ></div>
          {/* Second Image */}
          <div
            className="w-full h-64 lg:h-72 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-110 hover:-rotate-3 transition-all duration-700"
            style={{ backgroundImage: `url(${groupStudentsImg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
