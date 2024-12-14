import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import australiaImg from "../assets/australia.jpg"; // Replace with your Australia image
import visaProcessImg from "../assets/11.jpg"; // Replace with your Visa Process image
import scholarshipImg from "../assets/22.jpg"; // Replace with your Scholarship image

const AustraliaPage = () => {
  // Scroll to the top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-red-600 text-white py-8 px-4 pt-[100px]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Study in Australia</h1>
            <p className="text-lg">
              Explore opportunities to study in one of the most dynamic and multicultural countries.
            </p>
          </div>
          <img
            src={australiaImg}
            alt="Australia"
            className="w-full lg:w-1/3 mt-6 lg:mt-0 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Study in Australia */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Study in Australia from Nepal?</h2>
          <p className="text-lg text-gray-700">
            Australia offers students a dynamic, multicultural experience, access to globally ranked
            universities, and opportunities for professional and personal growth.
          </p>
        </div>
      </section>

      {/* Facts About Australia */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Facts About Australia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-gray-700">
              <li>Australia is the world’s 13th-largest economy.</li>
              <li>Australia is the fourth-happiest country globally.</li>
              <li>Over 260 languages are spoken in Australia.</li>
              <li>
                5 of the top 30 best student cities in the world are in Australia.
              </li>
              <li>
                8 out of the top 100 universities globally are located in Australia.
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li>Australia ranks 9th globally in the university system ranking.</li>
              <li>
                It is the 3rd most popular destination for international students.
              </li>
              <li>
                5 of the top 40 cities with the best infrastructure are in Australia.
              </li>
              <li>
                Melbourne has been ranked the world’s most livable city for 3 consecutive years.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reasons to Study in Australia */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Reasons to Study in Australia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold">1. High-Quality Education</h3>
              <p className="text-gray-700">
                Australian universities are globally renowned for their academic standards and a
                diverse range of courses.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">2. Global Recognition</h3>
              <p className="text-gray-700">
                Degrees from Australian universities are highly regarded by employers and
                institutions worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">3. Cultural Diversity</h3>
              <p className="text-gray-700">
                Australia provides a multicultural environment and global networking opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">4. Research Opportunities</h3>
              <p className="text-gray-700">
                Australian universities lead in cutting-edge research and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">5. Vibrant Lifestyle</h3>
              <p className="text-gray-700">
                Experience stunning beaches, rich culture, and modern cities in Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Process */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Student Visa Process for Australia</h2>
            <p className="text-lg text-gray-700 mb-4">
              The student visa process includes receiving your COE, financial proof, health
              insurance, and fulfilling all requirements by the Department of Home Affairs.
            </p>
            <p className="text-lg text-gray-700">
              After submission, students undergo a health examination and, in some cases, an
              interview at the Australian embassy or consulate.
            </p>
          </div>
          <img
            src={visaProcessImg}
            alt="Visa Process"
            className="w-full lg:w-1/3 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <img
            src={scholarshipImg}
            alt="Scholarships"
            className="w-full lg:w-1/3 rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Scholarships in Australia</h2>
            <p className="text-lg text-gray-700 mb-4">
              Australia offers a wide range of scholarships for international students, including
              merit-based, research, and need-based financial support.
            </p>
            <p className="text-lg text-gray-700">
              Scholarships help cover tuition fees, living expenses, or both, depending on the
              program and eligibility criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AustraliaPage;
