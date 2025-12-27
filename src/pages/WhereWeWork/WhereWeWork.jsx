import React from "react";
import {
  MapPin,
  Target,
  Landmark,
  ArrowUpRight,
  Globe2,
  Building2,
} from "lucide-react";

const WhereWeWork = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. High-Impact Hero Header */}
      <section className="relative pt-32 pb-20 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-blue/20 border border-primary-blue/30 text-primary-blue text-xs font-bold tracking-widest uppercase mb-6">
              Geographical Footprint
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
              A Vision for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-teal">
                Every Province.
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              OCOC is systematically expanding its reach. Our strategic plan
              ensures that humanitarian aid and developmental services reach
              orphaned families from Kabul to the most remote districts of
              Afghanistan.
            </p>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-blue/10 to-transparent"></div>
      </section>

      {/* 2. The Map Section (Your Working Map Image) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: Expansion Strategy Text */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Strategic Expansion Plan
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our operations follow a structured{" "}
                <strong>Three-Tier Growth Model</strong>. We don't just work in
                cities; we build networks that connect urban resource hubs with
                rural family units.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Current Focus",
                    desc: "Kabul and major regional centers serving as primary distribution hubs.",
                    color: "bg-primary-blue",
                  },
                  {
                    title: "2025 Expansion",
                    desc: "Expanding into Northern and Western provinces including Mazar-i-Sharif and Herat.",
                    color: "bg-accent-teal",
                  },
                  {
                    title: "2028 Goal",
                    desc: "Full operational capacity across all 34 provinces of Afghanistan.",
                    color: "bg-primary-red",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                  >
                    <div
                      className={`w-1.5 h-auto rounded-full ${item.color}`}
                    ></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-primary-blue rounded-[2rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 italic">
                  "Across All Cities"
                </h3>
                <p className="text-blue-100 text-sm">
                  Our roadmap (Page 6) commits OCOC to establishing technical
                  units in every major urban center to monitor child welfare and
                  ensure local accountability.
                </p>
              </div>
              <Globe2 className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10" />
            </div>
          </div>

          {/* Right: The Interactive Map Display */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-100 group">
              {/* Replace "path-to-your-map-image.png" with your actual variable/path */}
              <img
                src="/ococ-image/map.png"
                alt="OCOC Working Map Afghanistan"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              />

              {/* Floating Legend */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white max-w-xs">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary-red" /> Coverage
                  Legend
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-primary-blue"></span>{" "}
                    Operational Capacity
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>{" "}
                    Potential Network
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="w-3 h-3 rounded-full bg-green-600"></span>{" "}
                    Operational Presence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Future City Infrastructure */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Future City Infrastructure
            </h2>
            <p className="text-gray-600 mt-4">
              Building the foundation for sustainable urban development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                city: "Technical Hubs",
                detail:
                  "Every major city will host a Technical Unit to manage FSL and WASH services locally.",
              },
              {
                icon: <Landmark className="w-6 h-6" />,
                city: "Legal Centers",
                detail:
                  "Protection and social inclusion offices to advocate for the rights of orphaned children.",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                city: "Supply Points",
                detail:
                  "Strategically located NFI and Food Security storage to ensure rapid emergency response.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.city}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final CTA for Partnerships */}
      <section className="py-20 max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-neutral-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-6">
            Support Our National Expansion
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Reaching all 34 provinces requires collaboration. Join our network
            as a donor or implementing partner to help us scale faster.
          </p>
          <button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 mx-auto">
            Contact for Partnerships <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhereWeWork;
