import React, { useEffect } from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";
import image9 from "../assets/9.png";
import image10 from "../assets/10.png";
import image11 from "../assets/11.png";
import image12 from "../assets/12.png";

const whyChooseUsData = [
  { title: "Years of working experience with an Embassy/High Commission", icon: image1 },
  { title: "Excellence in consultancy services", icon: image2 },
  { title: "Satisfied Customers", icon: image3 },
  { title: "Successful Student Visas", icon: image4 },
  { title: "Superior knowledge and understanding of visa rules and regulations", icon: image5 },
  { title: "Detailed financial assessment for case profile", icon: image6 },
  { title: "Customized Interview Preparation", icon: image7 },
  { title: "Personal and Professional Integrity", icon: image8 },
  { title: "Honest, Impartial & Quality Advice", icon: image9 },
  { title: "Unmatched Expertise", icon: image10 },
  { title: "Client Focused Personal & Dedicated Approach", icon: image11 },
  { title: "Timely Feedback", icon: image12 },
];

const WhyChooseUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInScale");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".why-choose-us-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="text-center mb-10">
        <h2
          className="text-4xl font-extrabold text-gray-800 animate-bounceIn"
        >
          WHY CHOOSE US
        </h2>
        <div className="h-1 w-16 bg-red-500 mx-auto mt-3 animate-expand"></div>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {whyChooseUsData.map((item, index) => (
          <div
            key={index}
            className="why-choose-us-card bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center text-center transform opacity-0 transition-all duration-700 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="icon-container relative w-16 h-16 mb-4 animate-pulse hover:animate-spin">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Title */}
            <h3 className="text-sm md:text-lg font-bold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          /* Fade-In Scale Animation */
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.7) translateY(30px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          /* Bounce In Animation */
          @keyframes bounceIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
              opacity: 1;
            }
            70% {
              transform: scale(0.95);
            }
            100% {
              transform: scale(1);
            }
          }

          /* Expand Line Animation */
          @keyframes expand {
            0% {
              width: 0;
            }
            100% {
              width: 4rem;
            }
          }

          /* Pulse Animation */
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-fadeInScale {
            animation: fadeInScale 1s ease-out forwards;
          }

          .animate-bounceIn {
            animation: bounceIn 1.2s ease-out forwards;
          }

          .animate-expand {
            animation: expand 1s ease-out forwards;
          }

          /* Card Hover and Spin Effects */
          .why-choose-us-card {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }

          .why-choose-us-card:hover {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            transform: translateY(-10px) rotate(2deg) scale(1.05);
          }

          .animate-pulse {
            animation: pulse 1.5s infinite ease-in-out;
          }

          .hover\\:animate-spin:hover {
            animation: spin 1s linear infinite;
          }

          @media (max-width: 768px) {
            .why-choose-us-card {
              transform: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default WhyChooseUs;
