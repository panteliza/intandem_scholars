import React, { useEffect, useState } from "react";
import australiaImage from "../assets/aus.jpg";
import canadaImage from "../assets/canada1.jpg";
import usaImage from "../assets/usa.jpg";
import ukImage from "../assets/uk.jpg";
import australiaFlag from "../assets/australia-flag.png";
import canadaFlag from "../assets/canada-flag.png";
import usaFlag from "../assets/usa-flag.jpg";
import ukFlag from "../assets/uk-flag.png";

const StudyDestinations = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".destination-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const destinations = [
    {
      image: australiaImage,
      flag: australiaFlag,
      title: "Study in Australia",
      description:
        "Widen your career scope by studying in Australia in some of the top globally ranked universities.",
      link: "Learn more",
    },
    {
      image: canadaImage,
      flag: canadaFlag,
      title: "Study in Canada",
      description:
        "Enjoy quality education and an affordable fee structure while pursuing your studies in Canada.",
      link: "Learn more",
    },
    {
      image: usaImage,
      flag: usaFlag,
      title: "Study in USA ",
      description:
        "Experience academic excellence with the world’s most advanced internet and technology structure in the US.",
      link: "Learn more",
    },
    {
      image: ukImage,
      flag: ukFlag,
      title: "Study in the UK",
      description:
        "Plenty of research facilities and even more opportunities to explore your career options in the UK.",
      link: "Learn more",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="text-center mb-10">
        <h2
          className="text-3xl font-bold text-gray-800"
          style={{ animation: "slideInDown 1.5s ease-out" }}
        >
          Your academic goals are waiting to be achieved
        </h2>
        <p className="text-gray-600 mt-2">Choose your study destination</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {destinations.map((destination, index) => (
          <div
            key={index}
            data-index={index}
            className={`destination-card relative group p-5 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-3 ${
              visibleCards.includes(index.toString()) ? "animate-zoomIn" : "opacity-0"
            }`}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute -bottom-5 right-5 bg-white rounded-full p-1 shadow-lg border-4 border-gray-200">
                <img
                  src={destination.flag}
                  alt={`${destination.title} Flag`}
                  className="w-10 h-10 rounded-full object-contain"
                />
              </div>
            </div>
            {/* Hover Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-center bg-cover flex flex-col justify-center items-center text-white p-4"
              style={{
                backgroundImage: `url(${destination.image})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <h3 className="text-xl font-bold">{destination.title}</h3>
              <button
                className="mt-4 px-4 py-2 bg-white text-blue-500 font-semibold rounded-full shadow-md hover:bg-gray-200"
              >
                {destination.link}
              </button>
            </div>
            {/* Content Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">
                {destination.title}
              </h3>
              <p className="text-gray-600 mt-2">{destination.description}</p>
             
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS for Enhanced Animations */}
      <style>
        {`
          @keyframes slideInDown {
            from {
              transform: translateY(-70px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes zoomIn {
            from {
              transform: scale(0.5); /* Start smaller */
              opacity: 0;
            }
            to {
              transform: scale(1.1); /* Overshoot for impact */
              opacity: 1;
            }
          }

          .animate-zoomIn {
            animation: zoomIn 1.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default StudyDestinations;
