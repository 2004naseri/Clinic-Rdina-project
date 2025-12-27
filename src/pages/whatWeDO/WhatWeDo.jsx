// import React from "react";
// import { useNavigate } from "react-router-dom"; // Add this
// import {
//   GraduationCap,
//   HeartPulse,
//   Droplets,
//   Wheat,
//   Home,
//   Shield,
//   ShieldCheck,
// } from "lucide-react";

// const WhatWeDo = () => {
//   const navigate = useNavigate();

//   const focusAreas = [
//     {
//       id: "education", // Path: /what-we-do/education
//       title: "Education & Life Skills",
//       icon: <GraduationCap className="w-6 h-6 text-primary-blue" />,
//       image: "/ococ-image/social-image.jpg",
//       description:
//         "Quality education and vocational training to ensure a self-reliant future.",
//     },
//     {
//       id: "health", // Path: /what-we-do/health
//       title: "Health, Nutrition & WASH",
//       image: "/ococ-image/health1.jpg",
//       icon: <HeartPulse className="w-6 h-6 text-primary-red" />,
//       description:
//         "Healthcare, mental counseling, and clean water access for vulnerable children.",
//     },
//     {
//       id: "social", // Path: /what-we-do/social
//       title: "Social Protection & Shelter",
//       image: "/ococ-image/outside1.jpg",
//       icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
//       description:
//         "Safe shelter and protection from exploitation and social exclusion.",
//     },
//     {
//       id: "food-security", // Path: /what-we-do/food-security
//       title: "Food Security & Agriculture",
//       image: "/ococ-image/agriculture.jpg",
//       icon: <Wheat className="w-6 h-6 text-orange-500" />,
//       description:
//         "Sustainable farming and agriculture to reduce child malnutrition.",
//     },
//   ];

//   return (
//     <section id="what-we-do" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-20">
//           <span className="text-primary-blue font-bold tracking-widest uppercase text-sm">
//             Strategic Areas 2024-2028
//           </span>
//           <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
//             Our Thematic Focus Areas
//           </h2>
//           <div className="mt-6 w-20 h-1.5 bg-accent-teal rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {focusAreas.map((area) => (
//             <div
//               key={area.id}
//               onClick={() => navigate(`/what-we-do/${area.id}`)} // Clickable Card
//               className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer"
//             >
//               <div className="h-64 overflow-hidden relative">
//                 <img
//                   src={area.image}
//                   alt={area.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
//                   {area.icon}
//                 </div>
//               </div>

//               <div className="p-10 flex flex-col flex-grow">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-blue transition-colors">
//                   {area.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
//                   {area.description}
//                 </p>

//                 <div className="flex items-center gap-2 text-sm font-bold text-primary-blue group-hover:gap-4 transition-all">
//                   LEARN MORE
//                   <span className="w-8 h-[1px] bg-primary-blue"></span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;
import React, { useState } from "react"; // Added useState
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  HeartPulse,
  Droplets,
  Wheat,
  Home,
  Shield,
  ShieldCheck,
  ChevronLeft, // Added for carousel
  ChevronRight, // Added for carousel
} from "lucide-react";

const WhatWeDo = () => {
  const navigate = useNavigate();

  // Added state for carousel
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [imageTransition, setImageTransition] = useState({});

  const focusAreas = [
    {
      id: "education",
      title: "Education & Life Skills",
      icon: <GraduationCap className="w-6 h-6 text-primary-blue" />,
      images: [
        // Changed from "image" to "images" array
        "/ococ-image/children.jpg", // Add your additional images
        "/ococ-image/education2.jpeg",
        "/ococ-image/education1.jpeg",
      ],
      description:
        "Quality education and vocational training to ensure a self-reliant future.",
    },
    {
      id: "health",
      title: "Health, Nutrition & WASH",
      images: [
        // Changed from "image" to "images" array
        "/ococ-image/health1.jpg",
        "/ococ-image/health2.jpg",
        "/ococ-image/health3.jpeg",
      ],
      icon: <HeartPulse className="w-6 h-6 text-primary-red" />,
      description:
        "Healthcare, mental counseling, and clean water access for vulnerable children.",
    },
    {
      id: "social",
      title: "Social Protection & Shelter",
      images: [
        // Changed from "image" to "images" array
        "/ococ-image/outside1.jpg",
        "/ococ-image/school.jpg", // Add your additional images
        "/ococ-image/social-image.jpg",
      ],
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      description:
        "Safe shelter and protection from exploitation and social exclusion.",
    },
    {
      id: "food-security",
      title: "Food Security & Agriculture",
      images: [
        // Changed from "image" to "images" array
        "/ococ-image/agriculture.jpg",
        "/ococ-image/agriculture2.jpeg", // Add your additional images
        "/ococ-image/agriculture3.jpeg", // Add your additional images
      ],
      icon: <Wheat className="w-6 h-6 text-orange-500" />,
      description:
        "Sustainable farming and agriculture to reduce child malnutrition.",
    },
  ];

  // Clickable Card
  function handleCardClick(area) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    navigate(`/what-we-do/${area}`);
  }

  // Added handlers for carousel navigation
  const handlePrevImage = (e, areaId, totalImages) => {
    e.stopPropagation();
    setImageTransition((prev) => ({ ...prev, [areaId]: "fade-out" }));

    setTimeout(() => {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [areaId]: ((prev[areaId] || 0) - 1 + totalImages) % totalImages,
      }));
      setImageTransition((prev) => ({ ...prev, [areaId]: "fade-in" }));
    }, 150);

    setTimeout(() => {
      setImageTransition((prev) => ({ ...prev, [areaId]: "" }));
    }, 300);
  };

  const handleNextImage = (e, areaId, totalImages) => {
    e.stopPropagation();
    setImageTransition((prev) => ({ ...prev, [areaId]: "fade-out" }));

    setTimeout(() => {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [areaId]: ((prev[areaId] || 0) + 1) % totalImages,
      }));
      setImageTransition((prev) => ({ ...prev, [areaId]: "fade-in" }));
    }, 150);

    setTimeout(() => {
      setImageTransition((prev) => ({ ...prev, [areaId]: "" }));
    }, 300);
  };

  return (
    <section id="what-we-do" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-primary-blue font-bold tracking-widest uppercase text-sm">
            Strategic Areas 2024-2028
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Thematic Focus Areas
          </h2>
          <div className="mt-6 w-20 h-1.5 bg-accent-teal rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {focusAreas.map((area) => {
            // Added these variables for carousel
            const currentIndex = currentImageIndex[area.id] || 0;
            const totalImages = area.images.length;
            const transition = imageTransition[area.id] || "";

            return (
              <div
                key={area.id}
                onClick={() => handleCardClick(area.id)}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={area.images[currentIndex]}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                    {area.icon}
                  </div>

                  {/* Added carousel controls - only show if multiple images */}
                  {totalImages > 1 && (
                    <>
                      {/* Previous Button */}
                      <button
                        onClick={(e) =>
                          handlePrevImage(e, area.id, totalImages)
                        }
                        className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 md:opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={(e) =>
                          handleNextImage(e, area.id, totalImages)
                        }
                        className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 md:opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                      </button>

                      {/* Image Indicators */}
                      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
                        {area.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                              idx === currentIndex
                                ? "w-6 md:w-8 bg-primary-blue"
                                : "w-1 md:w-1.5 bg-primary-blue/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-blue transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {area.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-bold text-primary-blue group-hover:gap-4 transition-all">
                    LEARN MORE
                    <span className="w-8 h-[1px] bg-primary-blue"></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
