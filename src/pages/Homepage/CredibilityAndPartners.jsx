import React from "react";
import {
  Shield,
  Handshake,
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Building2,
} from "lucide-react";

import {
  accountabilityData,
  partnersData,
  projectsData,
} from "./../../data/HomePageData/CredibilityAndPartners";

function CredibilityAndPartners() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-blue/10 rounded-full mb-6">
            <Shield className="w-5 h-5 text-primary-blue" />
            <span className="text-sm font-bold text-primary-blue uppercase tracking-wide">
              Transparency & Commitment
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Impact & Accountability
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building trust through transparent operations and proven results
          </p>

          <div className="mt-8 w-24 h-1.5 bg-gradient-to-r from-primary-blue to-primary-green rounded-full mx-auto"></div>
        </div>

        {/* Accountability Framework */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-primary-blue rounded-2xl shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900">
                  Accountability Framework
                </h3>
                <p className="text-gray-600 mt-1">
                  Our commitment to transparency
                </p>
              </div>
            </div>

            {/* EXACT TEXT FROM DOCUMENT - 4 Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {accountabilityData.items.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-primary-green" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-primary-blue/10 rounded-2xl p-6 text-center border-l-4 border-primary-blue">
                <p className="text-4xl font-bold text-primary-blue mb-2">
                  2022
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Established
                </p>
              </div>
              <div className="bg-primary-green/10 rounded-2xl p-6 text-center border-l-4 border-primary-green">
                <p className="text-4xl font-bold text-primary-green mb-2">4+</p>
                <p className="text-sm text-gray-600 font-semibold">Provinces</p>
              </div>
              <div className="bg-primary-blue/10 rounded-2xl p-6 text-center border-l-4 border-primary-blue">
                <p className="text-4xl font-bold text-primary-blue mb-2">2M+</p>
                <p className="text-sm text-gray-600 font-semibold">$ Managed</p>
              </div>
              <div className="bg-primary-green/10 rounded-2xl p-6 text-center border-l-4 border-primary-green">
                <p className="text-4xl font-bold text-primary-green mb-2">
                  100%
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  Transparency
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners & Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Partners - ALL 9 PARTNERS */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary-green/5 to-primary-blue/5 rounded-3xl shadow-xl p-8 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-green rounded-xl shadow-md">
                  <Handshake className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Key Affiliations
                  </h3>
                  <p className="text-sm text-gray-600">
                    {partnersData.length} Strategic Partners
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6 italic">
                Building partnerships for sustainable impact across Afghanistan
              </p>

              {/* ALL 18 PARTNERS - Scrollable */}
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary-blue scrollbar-track-gray-100">
                {partnersData.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {partner.status === "Member" ? (
                        <div className="w-8 h-8 rounded-lg bg-primary-green/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-primary-green" />
                        </div>
                      ) : partner.status === "Partner" ? (
                        <div className="w-8 h-8 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                          <Handshake className="w-5 h-5 text-primary-blue" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-gray-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800 leading-tight mb-1">
                        {partner.name}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            partner.status === "Member"
                              ? "bg-primary-green/10 text-primary-green"
                              : partner.status === "Partner"
                              ? "bg-primary-blue/10 text-primary-blue"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {partner.status}
                        </span>
                        <span className="text-xs text-gray-500">
                          • {partner.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary-blue rounded-xl shadow-md">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Proven Impact
                  </h3>
                  <p className="text-sm text-gray-600">
                    Project Portfolio & Results
                  </p>
                </div>
              </div>

              {/* ALL 4 PROJECTS */}
              <div className="grid grid-cols-1 gap-6">
                {projectsData.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-l-4 border-primary-blue hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900 flex-1 pr-4 leading-tight">
                        {project.title}
                      </h4>
                      <span
                        className={`px-4 py-1.5 text-xs font-bold rounded-full whitespace-nowrap ${
                          project.status === "Active"
                            ? "bg-primary-green text-white shadow-md"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-5 h-5 text-primary-blue flex-shrink-0" />
                        <span className="text-gray-700 font-semibold">
                          {project.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-5 h-5 text-primary-green flex-shrink-0" />
                        <span className="text-gray-700">
                          Budget:{" "}
                          <span className="font-semibold">
                            {project.budget}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 font-medium">
                        Duration: {project.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-blue mb-1">
                      2M+
                    </p>
                    <p className="text-xs text-gray-600 font-semibold uppercase">
                      $ Managed
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-green mb-1">
                      4
                    </p>
                    <p className="text-xs text-gray-600 font-semibold uppercase">
                      Provinces
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-blue mb-1">
                      5
                    </p>
                    <p className="text-xs text-gray-600 font-semibold uppercase">
                      Projects
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-green mb-1">
                      2022
                    </p>
                    <p className="text-xs text-gray-600 font-semibold uppercase">
                      Since
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: var(--color-primary-blue);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: var(--color-primary-green);
        }
      `}</style>
    </section>
  );
}

export default CredibilityAndPartners;
