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
      link: "/study-in-australia",
    },
    {
      image: canadaImage,
      flag: canadaFlag,
      title: "Study in Canada",
      description:
        "Enjoy quality education and an affordable fee structure while pursuing your studies in Canada.",
      link: "/study-in-canada",
    },
    {
      image: usaImage,
      flag: usaFlag,
      title: "Study in USA",
      description:
        "Experience academic excellence with the world’s most advanced internet and technology structure in the US.",
      link: "/study-in-usa",
    },
    {
      image: ukImage,
      flag: ukFlag,
      title: "Study in the UK",
      description:
        "Plenty of research facilities and even more opportunities to explore your career options in the UK.",
      link: "/study-in-uk",
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
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {destinations.map((destination, index) => (
          <a
            key={index}
            href={destination.link}
            data-index={index}
            className={`destination-card relative group py-5 px-5 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-3 ${
              visibleCards.includes(index.toString()) ? "animate-zoomIn" : "opacity-0"
            }`}
            style={{ textDecoration: "none" }} // Ensure links are clickable
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
            {/* Content Section */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">{destination.title}</h3>
              <p className="text-gray-600 mt-2">{destination.description}</p>
            </div>
          </a>
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

          .destination-card a {
            text-decoration: none;
            color: inherit;
          }
        `}
      </style>
    </div>
  );
};

export default StudyDestinations;
