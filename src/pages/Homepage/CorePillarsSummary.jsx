import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { focusAreasData } from "../../data/HomePageData/CorePillarsSummary";
import { useNavigate } from "react-router";

function CorePillarsSummary() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/what-we-do");
  };
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(66, 133, 244, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(15, 157, 88, 0.03) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-primary-blue/20 mb-6">
            <Sparkles className="w-5 h-5 text-primary-blue" />
            <span className="text-sm font-bold text-primary-blue uppercase tracking-wider">
              Our Core Programs
            </span>
          </div> */}

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600  bg-clip-text text-transparent">
            Four Pillars of Comprehensive Support
          </h2>

          <p className="text-lg md:text-xl text-neutral-dark-grey max-w-3xl mx-auto leading-relaxed">
            OCOC's programming is structured around four thematic areas to
            ensure a comprehensive and holistic approach to child welfare and
            community development.
          </p>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-primary-blue rounded-full"></div>
            <div className="w-12 h-1 bg-primary-green rounded-full"></div>
            <div className="w-12 h-1 bg-accent-teal rounded-full"></div>
          </div>
        </div>

        {/* Cards Grid - Beautiful Layout */}
        <div className="space-y-16 lg:space-y-20">
          {focusAreasData.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const DetailIcon = pillar.detailIcon;
            const isEven = index % 2 === 0;

            return (
              <div key={pillar.id} className="group">
                <div
                  className={`
                  grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center
                  ${!isEven ? "lg:grid-flow-dense" : ""}
                `}
                >
                  {/* Image Section - NO OVERLAY, Clean & Beautiful */}
                  <div
                    className={`lg:col-span-5 ${
                      !isEven ? "lg:col-start-8" : ""
                    }`}
                  >
                    <div className="relative group/image">
                      {/* Main Image Container */}
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover transform group-hover/image:scale-105 transition-transform duration-700"
                        />

                        {/* Subtle Bottom Gradient ONLY - Keeps image visible */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>

                        {/* Floating Badge */}
                        <div className="absolute top-6 right-6">
                          <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-gray-100">
                            <span
                              className={`text-${pillar.accentColor} font-bold text-sm`}
                            >
                              Program 0{pillar.id}
                            </span>
                          </div>
                        </div>

                        {/* Icon Badge - Bottom Left */}
                        <div className="absolute bottom-6 left-6">
                          <div
                            className={`p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-${pillar.accentColor}/30 transform group-hover/image:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent
                              className={`w-8 h-8 text-${pillar.accentColor}`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div
                        className={`absolute -bottom-4 -right-4 w-32 h-32 bg-${pillar.accentColor}/10 rounded-full blur-2xl -z-10`}
                      ></div>
                      <div
                        className={`absolute -top-4 -left-4 w-24 h-24 bg-${pillar.accentColor}/10 rounded-full blur-2xl -z-10`}
                      ></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`lg:col-span-7 ${
                      !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-blue/10 to-primary-green/10 rounded-full">
                        <DetailIcon
                          className={`w-5 h-5 text-${pillar.accentColor}`}
                        />
                        <span
                          className={`text-sm font-semibold text-${pillar.accentColor} uppercase tracking-wider`}
                        >
                          Essential Service
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                        {pillar.title}
                      </h3>

                      {/* Divider Line */}
                      <div
                        className={`w-20 h-1.5 bg-gradient-to-r ${pillar.gradient} rounded-full`}
                      ></div>

                      {/* Overview Text */}
                      <p className="text-lg text-neutral-dark-grey leading-relaxed">
                        {pillar.overview}
                      </p>

                      {/* Key Point - Highlighted */}
                      <div
                        className={`pl-6 border-l-4 border-${pillar.accentColor}`}
                      >
                        <p
                          className={`text-base font-semibold text-${pillar.accentColor} italic`}
                        >
                          {pillar.keyPoint}
                        </p>
                      </div>

                      {/* Key Highlights - Clean Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                        {pillar.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                          >
                            <div
                              className={`flex-shrink-0 w-2 h-2 rounded-full bg-${pillar.accentColor} mt-2`}
                            ></div>
                            <span className="text-sm font-medium text-gray-700 leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button - Beautiful Color */}
                      <div className="pt-4">
                        <a
                          href={pillar.link}
                          className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <span>Explore {pillar.title}</span>
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator Line Between Cards */}
                {index < focusAreasData.length - 1 && (
                  <div className="mt-16 lg:mt-20 flex items-center justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24">
          <div className="relative bg-gradient-to-r from-primary-blue via-primary-green to-accent-teal p-1 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/10 rounded-full mb-6">
                  <Sparkles className="w-5 h-5 text-primary-blue" />
                  <span className="text-sm font-bold text-primary-blue">
                    Make a Difference
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
                  Ready to Learn More About Our Impact?
                </h3>

                <p className="text-lg text-neutral-dark-grey mb-8">
                  Discover how OCOC is transforming lives through comprehensive
                  programs designed to empower orphaned children and strengthen
                  communities across Afghanistan.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleClick}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    View All Programs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-blue font-bold rounded-full border-2 border-primary-blue hover:bg-primary-blue hover:text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                    Download Brochure
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorePillarsSummary;
