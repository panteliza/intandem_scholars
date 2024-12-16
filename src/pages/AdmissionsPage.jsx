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
    <div className="w-full flex-shrink-0 overflow-hidden bg-gradient-to-b from-blue-50 to-gray-50 animate-pageFadeIn">
      {/* Navbar */}
      <Navbar className="animate-slideDown" />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-72 animate-fadeInSlideUp"
        style={{ backgroundImage: `url(${AdmissionsImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fadeIn">
          <h1 className="text-5xl text-white font-extrabold animate-bounceIn">
            College & University Admissions
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 bg-gray-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center animate-zoomIn">
            Your Gateway to Higher Education
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center animate-slideUpFadeIn">
            Explore the steps and requirements for securing admission to your
            dream college or university. From application guidelines to tips
            for success, we've got you covered.
          </p>

          {/* Admission Requirements */}
          <div className="space-y-8 animate-slideUpFadeInDelayed">
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
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
            <div className="bg-white p-6 rounded-lg shadow-md animate-fadeInSlideUp">
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
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeIn">
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

            {/* IELTS and PTE */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-zoomIn">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                4. IELTS and PTE Test Preparation
              </h3>
              <p className="text-gray-600 mb-4">
                If you want to study abroad in a country with native English speakers, you need to demonstrate your English proficiency. This ensures effective communication and study success.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>PTE (Pearson Test of English):</strong> A computer-based test accepted globally by educational institutions. Our PTE preparation courses offer unlimited practice resources, experienced tutors, and interactive coaching sessions to help you score high.
                </li>
                <li>
                  <strong>IELTS (International English Language Testing System):</strong> A widely recognized English proficiency test. Our IELTS preparation classes provide study materials, mock tests, and personalized guidance to help students achieve a favorable score.
                </li>
              </ul>
              <p className="mt-4 text-gray-600">
                Whether you need assistance with PTE or IELTS, our expert faculty ensures effective preparation tailored to your needs. Contact us to learn more about our test preparation programs.
              </p>
            </div>

            {/* Tips for Success */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUpFadeInDelayed">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                5. Tips for a Successful Application
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
            <div className="bg-white p-6 rounded-lg shadow-md animate-slideUp">
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
      <Footer className="animate-fadeIn" />

      {/* Animations */}
      <style>{`
        @keyframes pageFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpFadeInDelayed {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pageFadeIn {
          animation: pageFadeIn 1.5s ease-in-out;
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in;
        }

        .animate-zoomIn {
          animation: zoomIn 1.2s ease-out;
        }

        .animate-fadeInSlideUp {
          animation: fadeInSlideUp 1.5s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out;
        }

        .animate-slideUpFadeIn {
          animation: slideUpFadeIn 1.5s ease-out;
        }

        .animate-slideUpFadeInDelayed {
          animation: slideUpFadeInDelayed 2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdmissionsPage;
