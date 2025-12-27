// import { useState, useEffect } from "react";

// function HomePageHeader() {
//   // Array of background images
//   const backgroundImages = [
//     // "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80", // Programming code on screen
//     // "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80", // Computer networking/server room
//     // "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80", // Graphic design/creative work
//     // "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80", // Video production/content creation
//     // "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80", // Business/marketing consulting
//     // "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80", // Data analysis/tech work

//     "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1920&q=80",
//     "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80",
//     "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?w=1920&q=80",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [nextImageIndex, setNextImageIndex] = useState(1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNextImageIndex(
//         (prevIndex) => (prevIndex + 1) % backgroundImages.length
//       );

//       setTimeout(() => {
//         setCurrentImageIndex(
//           (prevIndex) => (prevIndex + 1) % backgroundImages.length
//         );
//       }, 1000);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const RobotIcon = () => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="w-4 h-4 ml-2"
//     >
//       <path
//         fillRule="evenodd"
//         d="M18.974 6.643a2.25 2.25 0 0 0-2.246 2.246V12a3 3 0 0 0 3 3h.75a.75.75 0 0 0 .75-.75V8.89A2.25 2.25 0 0 0 18.974 6.643ZM8.636 3.55a.75.75 0 1 0-.75-1.299 1.5 1.5 0 0 1 1.708.232c.28.216.522.474.729.754H16.5A1.5 1.5 0 0 1 18 5.25v.421c0 .768.172 1.516.485 2.202 1.493 3.327 1.838 5.485 1.838 5.762v.228h-.002a2.375 2.375 0 0 1-2.483 2.332 2.375 2.375 0 0 1-2.484-2.332V9.389a3.75 3.75 0 0 0-3.75-3.75h-.188a3.75 3.75 0 0 0-3.75 3.75v5.761a2.375 2.375 0 0 1-2.483 2.332h-.001V13.63A6.75 6.75 0 0 0 3.75 7.5V6a2.25 2.25 0 0 1 2.25-2.25h3.086c.071.183.155.36.25.529ZM5.25 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H5.25Z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );

//   return (
//     <div className="relative w-full min-h-screen lg:min-h-[90vh] flex flex-col items-center justify-center bg-gray-950 text-white font-sans overflow-hidden">
//       {/* Background Image Slider with Smooth Zoom */}
//       <style>{`
//         @keyframes smoothZoomIn {
//           0% {
//             transform: scale(1);
//           }
//           100% {
//             transform: scale(1.15);
//           }
//         }

//         .bg-slide-current {
//           animation: smoothZoomIn 5s ease-out forwards;
//           opacity: 1;
//           z-index: 2;
//         }

//         .bg-slide-next {
//           animation: smoothZoomIn 5s ease-out forwards;
//           opacity: 0;
//           z-index: 1;
//           transition: opacity 2s ease-in-out;
//         }

//         .bg-slide-next.active {
//           opacity: 1;
//         }
//       `}</style>

//       <div className="absolute inset-0 bg-gray-950">
//         {/* Current Image */}
//         <div
//           key={`current-${currentImageIndex}`}
//           className="absolute inset-0 bg-cover bg-center bg-slide-current"
//           style={{
//             backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
//             backgroundPosition: "center center",
//           }}
//         />

//         {/* Next Image (Pre-loading and fading in) */}
//         <div
//           key={`next-${nextImageIndex}`}
//           className={`absolute inset-0 bg-cover bg-center bg-slide-next ${
//             nextImageIndex !== currentImageIndex ? "active" : ""
//           }`}
//           style={{
//             backgroundImage: `url(${backgroundImages[nextImageIndex]})`,
//             backgroundPosition: "center center",
//           }}
//         />

//         <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10"></div>
//         <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-gray-950 to-transparent z-10"></div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
//         {backgroundImages.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setNextImageIndex(index);
//               setTimeout(() => setCurrentImageIndex(index), 1000);
//             }}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === currentImageIndex
//                 ? "bg-amber-400 w-8"
//                 : "bg-white/40 hover:bg-white/60"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Main Content - RTL Direction */}
//       <div className="relative z-10 w-full flex flex-col items-center px-4 md:px-12 lg:px-20 py-20 max-w-6xl">
//         {/* Main Headline */}

//         {/* Subheadings and Description */}
//         <div className="relative z-20 w-full flex flex-col items-center px-4 md:px-12 lg:px-20 py-20 max-w-6xl text-center">
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl mb-6">
//             Caring for <span className="text-blue-400">Orphaned Children</span>{" "}
//             in Afghanistan
//           </h1>

//           <p className="text-slate-200 text-lg md:text-xl max-w-2xl">
//             Education, healthcare, and protection for a safer future.
//           </p>
//         </div>

//         {/* Optional: Subtle background accent shapes */}
//         <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
//         <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none"></div>
//       </div>
//     </div>
//   );
// }

// export default HomePageHeader;

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

// OCOC Official Color Palette (Kept internally for non-Tailwind animation/style logic where necessary)
const colors = {
  primary: {
    blue: "#4285f4", // Used for inline styles referencing the variable value
    green: "#0f9d58",
  },
};

function HomePageHeader() {
  // Array of background images related to children, education, and care
  const backgroundImages = [
    // "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=80",
    // "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1920&q=80",
    // "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&q=80",
    // "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80",
    // "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1920&q=80",

    "/ococ-image/meetting.jpg",
    "/ococ-image/3image.jpg",
    "/ococ-image/health1.jpg",
    "/ococ-image/office.jpg",
    "/ococ-image/outside1.jpg",
    "/ococ-image/outside2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % backgroundImages.length
        );
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex flex-col items-center justify-center bg-gray-950 text-white font-sans overflow-hidden">
      {/* Background Image Slider CSS (retained) */}
      <style>{`
        @keyframes smoothZoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        
        .bg-slide-current {
          animation: smoothZoomIn 6s ease-out forwards;
          opacity: 1;
          z-index: 2;
        }
        
        .bg-slide-next {
          animation: smoothZoomIn 6s ease-out forwards;
          opacity: 0;
          z-index: 1;
          transition: opacity 2s ease-in-out;
        }
        
        .bg-slide-next.active {
          opacity: 1;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Image Layer (retained) */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Current Image */}
        <div
          key={`current-${currentImageIndex}`}
          className="absolute inset-0 bg-cover bg-center bg-slide-current"
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundPosition: "center center",
          }}
        />

        {/* Next Image */}
        <div
          key={`next-${nextImageIndex}`}
          className={`absolute inset-0 bg-cover bg-center bg-slide-next ${
            nextImageIndex !== currentImageIndex ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${backgroundImages[nextImageIndex]})`,
            backgroundPosition: "center center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10"></div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-gray-950 to-transparent z-10"></div>
      </div>

      {/* Slide Indicators - Using Tailwind/CSS Variables for Color */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setNextImageIndex(index);
              setTimeout(() => setCurrentImageIndex(index), 1000);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "w-6 bg-primary-blue " // Using CSS variable for active color
                : "w-1.5 hover:w-3 bg-primary-blue/20" // Using utility class for inactive color
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Minimal Content */}
      <div className="relative z-20 w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-5xl">
        {/* Organization Badge - Using Tailwind/CSS Variables for Color */}
        <p
          className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wider text-center py-2 px-6 rounded-full backdrop-blur-md border-2 float-animation drop-shadow-xl"
          style={{
            // Directly using the CSS variables for properties like border-color and background that require specific variable syntax
            borderColor: "var(--color-primary-blue)",
            // Light blue background tint (adjust opacity as needed)
            background: `var(--color-primary-blue)1A`, // 1A is ~10% opacity
            textShadow: `0 0 8px ${colors.primary.blue}80`, // Use JS object for complex shadow
          }}
        >
          <span className="flex items-center justify-center gap-3 text-white">
            {/* Using text-primary-blue class for the icon color */}
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[--color-primary-blue]" />
            OCOC - Organization for the Care of Orphaned Children
          </span>
        </p>

        {/* New Second Line of Text (Medium Size) */}
        <h1 className="mt-6 text-xl sm:text-2xl md:text-3xl font-extrabold text-white text-center tracking-wide leading-snug drop-shadow-lg max-w-3xl">
          A Brighter Future for Afghanistan's Youth.
        </h1>
        <p className="mt-2 text-base sm:text-lg text-gray-300 text-center max-w-2xl">
          Providing essential care, education, and hope across four provinces.
        </p>
      </div>

      {/* Decorative Elements - Using CSS Variables for Color */}
      <div
        className="absolute -top-10 -left-10 w-40 sm:w-52 h-40 sm:h-52 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "var(--color-primary-blue)" }}
      ></div>
      <div
        className="absolute -bottom-10 -right-10 w-40 sm:w-52 h-40 sm:h-52 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "var(--color-primary-blue)" }}
      ></div>
    </div>
  );
}

export default HomePageHeader;
