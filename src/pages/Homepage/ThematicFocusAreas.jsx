import React from "react";
import { ArrowRight, Target, CheckCircle } from "lucide-react";
import { thematicFocusAreas } from "./../../data/HomePageData/HomepageData";

function ThematicFocusAreas() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600  bg-clip-text text-transparent mb-6">
            9 Thematic Focus Areas
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach to creating lasting impact across
            Afghanistan
          </p>

          <div className="mt-8 w-24 h-1.5 bg-gradient-to-r from-gray-500 via-gray-800 to-gray-500   rounded-full mx-auto"></div>
        </div>

        {/* Beautiful Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {thematicFocusAreas.map((area, index) => {
            const IconComponent = area.icon;

            return (
              <div key={area.id} className="group relative">
                {/* Main Card */}
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Number - Top Right */}
                  <div className="absolute top-6 right-6 w-14 h-14 flex items-center justify-center bg-gray-50 rounded-xl">
                    <span className="text-2xl font-bold text-gray-300">
                      {area.number}
                    </span>
                  </div>

                  {/* Icon Container - 60% Blue, 30% Green, 10% Others */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`
                      p-5 rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3
                      transition-all duration-500
                    `}
                      style={{
                        background:
                          index === 0 ||
                          index === 1 ||
                          index === 2 ||
                          index === 5 ||
                          index === 6
                            ? "linear-gradient(135deg, var(--color-primary-blue), var(--color-accent-light-blue))"
                            : index === 3 || index === 4 || index === 7
                            ? "linear-gradient(135deg, var(--color-primary-green), #34d399)"
                            : "linear-gradient(135deg, var(--primary-yellow), #fbbf24)",
                      }}
                    >
                      <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                      style={{
                        background:
                          index === 0 ||
                          index === 1 ||
                          index === 2 ||
                          index === 5 ||
                          index === 6
                            ? "var(--color-primary-blue)"
                            : index === 3 || index === 4 || index === 7
                            ? "var(--color-primary-green)"
                            : "var(--primary-yellow)",
                      }}
                    ></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight min-h-[64px]">
                    {area.title}
                  </h3>

                  {/* Divider Line - 60% Blue, 30% Green, 10% Others */}
                  <div
                    className="w-16 h-1 rounded-full mb-4"
                    style={{
                      background:
                        index === 0 ||
                        index === 1 ||
                        index === 2 ||
                        index === 5 ||
                        index === 6
                          ? "linear-gradient(90deg, var(--color-primary-blue), var(--color-accent-light-blue))"
                          : index === 3 || index === 4 || index === 7
                          ? "linear-gradient(90deg, var(--color-primary-green), #34d399)"
                          : "linear-gradient(90deg, var(--primary-yellow), #fbbf24)",
                    }}
                  ></div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    {area.description}
                  </p>

                  {/* Learn More Link */}
                  <button className="group/btn inline-flex items-center gap-2 text-primary-blue font-semibold hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Bottom Accent Line - 60% Blue, 30% Green, 10% Others */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
                    style={{
                      background:
                        index === 0 ||
                        index === 1 ||
                        index === 2 ||
                        index === 5 ||
                        index === 6
                          ? "linear-gradient(90deg, var(--color-primary-blue), var(--color-accent-light-blue))"
                          : index === 3 || index === 4 || index === 7
                          ? "linear-gradient(90deg, var(--color-primary-green), #34d399)"
                          : "linear-gradient(90deg, var(--primary-yellow), #fbbf24)",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section - Strategic Plan */}
        {/* <div className="mt-24">
          <div className="bg-gradient-to-br from-primary-blue to-primary-green rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0"> */}
        {/* Left Side - Content */}
        {/* <div className="p-10 lg:p-16 text-white"> */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">2024-2028</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-extrabold mb-6">
                  Strategic Plan for Afghanistan's Future
                </h3>

                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Our comprehensive five-year strategy focuses on sustainable
                  development, child protection, and community empowerment
                  across all nine thematic areas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-blue font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Download Plan
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                    View Programs
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div> */}

        {/* Right Side - Stats */}
        {/* <div className="bg-white/10 backdrop-blur-sm p-10 lg:p-16 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">9</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">
                        Focus Areas
                      </p>
                      <p className="text-white/80">Strategic Priorities</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">5</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">Years</p>
                      <p className="text-white/80">Strategic Timeline</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">4+</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">Provinces</p>
                      <p className="text-white/80">Areas of Impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        {/* </div>  */}

        {/* Premium Timeline Section - Redesigned */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-10">
                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Strategic Implementation Timeline
                </h4>
                <p className="text-gray-600">
                  Five years of transformative impact across Afghanistan
                </p>
              </div>

              {/* Timeline Visual */}
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full -translate-y-1/2"></div>
                <div
                  className="absolute top-1/2 left-0 right-0 h-1 rounded-full -translate-y-1/2"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-primary-blue) 0%, var(--color-primary-green) 50%, var(--primary-yellow) 100%)",
                    boxShadow: "0 0 20px rgba(66, 133, 244, 0.3)",
                  }}
                ></div>

                {/* Milestones */}
                <div className="relative flex justify-between items-center py-8">
                  {/* Start - 2024 */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary-blue shadow-2xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">2024</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-900 mb-1">
                        Launch Phase
                      </p>
                      <p className="text-sm text-gray-600">
                        Program Initiation
                      </p>
                    </div>
                  </div>

                  {/* Mid - 2026 */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary-green shadow-xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-lg">2026</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-900 mb-1">
                        Mid-Term Review
                      </p>
                      <p className="text-sm text-gray-600">
                        Assessment & Adjustment
                      </p>
                    </div>
                  </div>

                  {/* End - 2028 */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--primary-yellow), #fbbf24)",
                      }}
                    >
                      <span className="text-white font-bold text-xl">2028</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-900 mb-1">
                        Achievement Goal
                      </p>
                      <p className="text-sm text-gray-600">
                        Full Implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
                  <p className="text-3xl font-bold text-primary-blue">9</p>
                  <p className="text-sm text-gray-600 mt-1">Focus Areas</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
                  <p className="text-3xl font-bold text-primary-green">5</p>
                  <p className="text-sm text-gray-600 mt-1">Years</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
                  <p
                    className="text-3xl font-bold"
                    style={{ color: "var(--primary-yellow)" }}
                  >
                    4+
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Provinces</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
                  <p className="text-3xl font-bold text-primary-blue">100%</p>
                  <p className="text-sm text-gray-600 mt-1">Commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThematicFocusAreas;
