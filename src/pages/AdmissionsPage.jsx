import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdmissionsImage from "../assets/kkk.jpg"; // Replace with correct path

const AdmissionsPage = () => {
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
        style={{ backgroundImage: `url(${AdmissionsImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold animate-slideDown">
            College & University Admissions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Your Gateway to Higher Education
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Explore the steps and requirements for securing admission to your
            dream college or university. From application guidelines to tips
            for success, we've got you covered.
          </p>

          {/* Admission Requirements */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                1. Admission Requirements
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Completed application form with personal details.</li>
                <li>High school transcripts or equivalent academic records.</li>
                <li>Standardized test scores (e.g., SAT, ACT, or other regional exams).</li>
                <li>Statement of Purpose (SOP) or personal essay.</li>
                <li>Letters of recommendation from teachers or mentors.</li>
                <li>Portfolio (if applying for creative or design programs).</li>
              </ul>
            </div>

            {/* Steps to Apply */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                2. Steps to Apply
              </h3>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Research colleges and universities that align with your goals.</li>
                <li>Prepare and gather all required documents.</li>
                <li>Submit applications through the institution’s portal or common platforms (e.g., Common App).</li>
                <li>Pay the application fee for each submission.</li>
                <li>Track your application status and respond to any additional requests.</li>
                <li>Attend interviews or entrance exams, if applicable.</li>
                <li>Receive admission decisions and choose your preferred institution.</li>
              </ol>
            </div>

            {/* Financial Aid and Scholarships */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                3. Financial Aid & Scholarships
              </h3>
              <p className="text-gray-600 mb-4">
                Higher education can be costly, but financial aid and scholarships
                can make it accessible. Below are some common funding options:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Merit-based scholarships offered by institutions.</li>
                <li>Need-based financial aid packages.</li>
                <li>Government grants or subsidized loans.</li>
                <li>External scholarships from private organizations.</li>
                <li>Work-study opportunities available on-campus.</li>
              </ul>
            </div>

            {/* Tips for Success */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                4. Tips for a Successful Application
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Start your application process early to avoid last-minute stress.</li>
                <li>Proofread all documents to ensure accuracy and clarity.</li>
                <li>Customize your SOP to reflect your unique strengths and aspirations.</li>
                <li>Follow up with recommenders to ensure timely submission of letters.</li>
                <li>Keep a checklist of deadlines for each institution.</li>
              </ul>
            </div>

            {/* Final Note */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                Need Guidance?
              </h3>
              <p className="text-gray-600">
                Applying for college or university can be a daunting task, but our
                experienced advisors are here to help. At Intandem Scholars, we
                provide personalized support to help you craft a compelling
                application and navigate the admissions process.
              </p>
              <p className="mt-4 text-gray-600">
                Contact us today to take the first step towards your academic
                future.
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

export default AdmissionsPage;
