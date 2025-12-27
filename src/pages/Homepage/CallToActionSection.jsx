import React, { useState } from "react";
import { Heart, Sparkles, ArrowRight, Check } from "lucide-react";
import {
  impactStats,
  donationOptions,
  waysToDonate,
} from "./../../data/HomePageData/CtaSectionData";

function CallToActionSection() {
  const [selectedAmount, setSelectedAmount] = useState("$100");

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-orange/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Top Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-primary-blue via-primary-green to-accent-teal"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-8 md:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange/10 rounded-full mb-6">
                <Heart className="w-5 h-5 text-accent-orange fill-current" />
                <span className="text-sm font-bold text-accent-orange uppercase tracking-wider">
                  Make an Impact
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary-blue via-primary-green to-accent-teal bg-clip-text text-transparent">
                  Together, We Can Give Hope
                </span>
              </h2>

              <p className="text-lg md:text-xl text-neutral-dark-grey leading-relaxed mb-8">
                Your donation provides orphaned children in Afghanistan with
                education, healthcare, and the opportunity to build a brighter
                future.
              </p>

              {/* Quick Impact Stats */}
              <div className="space-y-4 mb-8">
                {impactStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <div
                        className={`p-3 bg-${stat.color}/10 rounded-lg group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent
                          className={`w-6 h-6 text-${stat.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <p className={`text-2xl font-bold text-${stat.color}`}>
                          {stat.number}
                        </p>
                        <p className="text-sm font-semibold text-gray-700">
                          {stat.label}
                        </p>
                        <p className="text-xs text-gray-500">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary-green" />
                  <span className="text-sm text-gray-600">
                    100% Transparent
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary-green" />
                  <span className="text-sm text-gray-600">Registered NGO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary-green" />
                  <span className="text-sm text-gray-600">Direct Impact</span>
                </div>
              </div>
            </div>

            {/* Right Side - Donation Form */}
            <div className="bg-gradient-to-br from-primary-blue via-primary-blue to-primary-green p-8 md:p-12 lg:p-16 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Your Donation
                  </h3>
                </div>

                {/* Donation Amount Options */}
                <div className="space-y-3 mb-8">
                  {donationOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAmount(option.amount)}
                      className={`
                        w-full p-4 rounded-xl border-2 transition-all duration-300 text-left
                        ${
                          selectedAmount === option.amount
                            ? "bg-white border-white shadow-xl scale-105"
                            : "bg-white/10 border-white/30 hover:bg-white/20 backdrop-blur-sm"
                        }
                        ${
                          option.popular
                            ? "ring-2 ring-accent-orange ring-offset-2 ring-offset-primary-blue"
                            : ""
                        }
                      `}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-xl font-bold ${
                            selectedAmount === option.amount
                              ? "text-primary-blue"
                              : "text-white"
                          }`}
                        >
                          {option.amount}
                        </span>
                        {option.popular && (
                          <span className="px-3 py-1 bg-accent-orange text-white text-xs font-bold rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm ${
                          selectedAmount === option.amount
                            ? "text-gray-600"
                            : "text-white/80"
                        }`}
                      >
                        {option.impact}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Donate Button */}
                <button className="group w-full bg-accent-orange hover:bg-accent-orange/90 text-white font-bold py-5 px-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg">
                  <Heart className="w-6 h-6 fill-current" />
                  <span>Donate {selectedAmount}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-white/80 text-sm text-center mt-4">
                  Secure payment powered by trusted providers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Ways to Give */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Other Ways to Support
            </h3>
            <p className="text-lg text-neutral-dark-grey">
              Choose the giving method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {waysToDonate.map((way, index) => {
              const IconComponent = way.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-primary-blue"
                >
                  <div className="inline-flex p-4 bg-primary-blue/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {way.title}
                  </h4>
                  <p className="text-neutral-dark-grey mb-4">
                    {way.description}
                  </p>
                  <button className="text-primary-blue font-semibold flex items-center gap-2 mx-auto group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary-blue to-primary-green p-8 md:p-10 rounded-2xl shadow-2xl max-w-4xl">
            <Sparkles className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
              "Together, we can give Afghanistan's orphaned children the care
              and opportunities they deserve"
            </p>
            <p className="text-white/90 mt-4">- OCOC Mission Statement</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
