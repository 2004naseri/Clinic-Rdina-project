import React from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const programsData = {
  education: {
    title: "Education & Life Skills",
    image: "/ococ-image/social-image.jpg",
    overview:
      "Education is the key to breaking the cycle of poverty. Our programs foster intellectual, emotional, and social growth.",
    components: [
      "Formal Education & Scholarships for orphans.",
      "Vocational training in tailoring, carpentry, and computer literacy.",
      "Girls' Education Advocacy and specialized support.",
    ],
  },
  health: {
    title: "Health, Nutrition & WASH",
    image: "/ococ-image/health1.jpg",
    overview:
      "A holistic approach to physical well-being, combining medical care with clean water and sanitation.",
    components: [
      "Emergency medical assistance and mental health counseling.",
      "Balanced nutritional feeding programs.",
      "WASH: Clean drinking water and sanitation infrastructure.",
      "Hygiene kit distribution and safe water education.",
    ],
  },
  social: {
    title: "Social Protection & Shelter",
    image: "/ococ-image/outside1.jpg",
    overview:
      "Ensuring orphaned children live in safe, dignified environments free from exploitation.",
    components: [
      "Safe shelter and Non-Food Items (NFI) for displaced families.",
      "Child protection advocacy and legal support.",
      "Inclusion programs for marginalized orphaned groups.",
    ],
  },
  "food-security": {
    title: "Food Security & Agriculture",
    image: "/ococ-image/agriculture.jpg",
    overview:
      "Strengthening local food systems and sustainable agriculture to prevent malnutrition.",
    components: [
      "Sustainable agriculture and animal husbandry training.",
      "Cooperative farming models for community resilience.",
      "Climate-smart farming techniques for Afghan farmers.",
    ],
  },
  "focus-areas": {
    title: "9 Thematic Strategic Areas",
    image: "/ococ-image/3image.jpg",
    overview:
      "OCOC operates under a 5-Year Strategic Roadmap (2024–2028) focusing on nine core pillars.",
    components: [
      "Education and Life Skills",
      "Health and Nutrition",
      "Water, Sanitation and Hygiene (WASH)",
      "Food Security and Livelihoods (FSL)",
      "Shelter and Non-Food Items (NFI)",
      "Protection and Social Inclusion",
      "Enterprise Development",
      "Humanitarian Coordination",
      "Research and Evidence-based Programming",
    ],
  },
};

const ProgramDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = programsData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Program Not Found
          </h1>
          <button
            onClick={() => navigate("/what-we-do")}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* ==================== HERO SECTION - FIXED ==================== */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[700px] max-h-[600px] overflow-hidden">
        {/* Background Image - Fixed with proper object positioning */}
        <div className="absolute inset-0">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover object-center"
            style={{
              objectPosition: "50% 40%", // Focuses on the important part of the image
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Button */}
              <button
                onClick={() => navigate("/what-we-do")}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-semibold">Back to Programs</span>
              </button>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                {data.title}
              </h1>

              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 md:h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#ffffff"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="#ffffff"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* ==================== CONTENT SECTION ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-10 border-l-4 border-blue-600">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic font-light">
                {data.overview}
              </p>
            </div>
          </div>

          {/* Components Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 flex items-center gap-3">
              <div className="w-1.5 h-10 bg-gradient-to-b from-blue-600 to-teal-500 rounded-full"></div>
              Key Program Components
            </h2>

            <div className="grid gap-6">
              {data.components.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-4 md:gap-6 p-6 md:p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-teal-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl p-10 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Want to Support This Program?
              </h3>
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Your contribution helps us continue providing vital services to
                orphaned children across Afghanistan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/donate")}
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Donate Now
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
