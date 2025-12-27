import React from "react";
import { Building2, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[700px] max-h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/ococ-image/team.jpg"
          alt="Children in Afghanistan receiving care and education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <Building2 className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wide">
              Established 2022 • Kabul, Afghanistan
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Who We Are
          </h1>

          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mx-auto mb-8"></div>

          {/* Tagline - EXACT from Profile */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto italic font-light">
            "Together, we can give Afghanistan's orphaned children the care and
            opportunities they deserve"
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl font-bold text-white mb-2">2022</p>
              <p className="text-sm text-white/80">Established</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl font-bold text-white mb-2">4+</p>
              <p className="text-sm text-white/80">Provinces</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl font-bold text-white mb-2">5-10</p>
              <p className="text-sm text-white/80">Years Exp.</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
