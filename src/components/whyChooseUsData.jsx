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
          className="text-3xl font-bold text-gray-800"
          style={{ animation: "slideInDown 1.5s ease-out" }}
        >
          WHY CHOOSE US
        </h2>
        <div className="h-1 w-16 bg-red-500 mx-auto mt-2"></div>
      </div>
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {whyChooseUsData.map((item, index) => (
          <div
            key={index}
            className="why-choose-us-card bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform opacity-0 transition-transform duration-1000"
          >
            <div className="icon-container relative w-16 h-16 mb-4 heartbeat">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-sm md:text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          /* Fade-In and Scale-In Animation */
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.8) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          /* Slide In Down Animation */
          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Heartbeat Animation */
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            25% {
              transform: scale(1.1);
            }
            50% {
              transform: scale(1);
            }
            75% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-fadeInScale {
            animation: fadeInScale 1s ease-out forwards;
          }

          .heartbeat {
            animation: heartbeat 2s infinite ease-in-out;
          }

          /* Hover Effects */
          .why-choose-us-card {
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .why-choose-us-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default WhyChooseUs;
