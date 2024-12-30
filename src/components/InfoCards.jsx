import React from "react";
import { useInView } from "react-intersection-observer";
import consultationIcon from "../assets/a.png";
import expertiseIcon from "../assets/b.png";
import successIcon from "../assets/c.png";

const InfoCards = () => {
  const cardData = [
    {
      icon: consultationIcon,
      title: "CONSULTATION",
      description:
        "We provide personalized consultation to guide students in every step of their journey, from selecting colleges to ensuring their visa process is seamless and stress-free. Trust us to turn your global education dreams into reality.",
    },
    {
      icon: expertiseIcon,
      title: "OUR EXPERTISE",
      description:
        "With years of experience in visa processes and admissions guidance, our team provides unmatched expertise to help students navigate their academic and career journeys with confidence and success.",
    },
    {
      icon: successIcon,
      title: "OUR SUCCESS",
      description:
        "Our success is defined by the achievements of our students. With countless success stories, we continue to thrive on referrals from satisfied clients who trust us to make their dreams a reality.",
    },
  ];

  const gradient = "from-[#84FAB0] to-[#8FD3F4]";
  const hoverGradient = "from-[#89F7FE] via-[#66A6FF] to-[#8E44AD]";

  return (
    <div className="bg-gradient-to-r from-[#F0F4FF] to-[#E4ECF6] py-10 px-8">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {cardData.map((card, index) => {
          const { ref, inView } = useInView({
            threshold: 0.2,
            triggerOnce: true,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`relative bg-gradient-to-r ${gradient} rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl group ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } transition-opacity transition-transform duration-700 ease-out`}
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg z-0`}
              ></div>

              {/* Icon with Background */}
              <div
                className={`w-20 h-20 mx-auto rounded-full flex justify-center items-center mb-4 relative z-10 bg-gradient-to-r ${gradient} group-hover:bg-gradient-to-r ${hoverGradient} transition-all`}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="h-12 w-12 object-contain transition-transform transform group-hover:scale-110"
                />
              </div>

              {/* Title with Animation */}
              <h3
                className={`text-lg font-bold text-gray-800 relative z-10 group-hover:text-white transition-colors ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                } transition-opacity transition-transform duration-700 ease-out`}
              >
                {card.title}
              </h3>

              {/* Description with Animation */}
              <p
                className={`text-gray-700 text-sm mt-4 relative z-10 group-hover:text-white transition-colors ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                } transition-opacity transition-transform duration-1000 ease-out`}
              >
                {card.description}
              </p>

              {/* Bottom Border */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${hoverGradient}`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoCards;
