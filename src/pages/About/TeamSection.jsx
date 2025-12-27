import React from "react";
import {
  Users,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Droplets,
  Wheat,
  Landmark,
} from "lucide-react";

const TeamSection = () => {
  // Data exactly from the Organizational Chart (Page 13)
  const departments = [
    {
      name: "Education",
      icon: <GraduationCap className="w-5 h-5 text-primary-blue" />,
    },
    {
      name: "Health & Nutrition",
      icon: <HeartPulse className="w-5 h-5 text-primary-red" />,
    },
    { name: "WASH", icon: <Droplets className="w-5 h-5 text-blue-400" /> },
    {
      name: "FSL & Agriculture",
      icon: <Wheat className="w-5 h-5 text-orange-500" />,
    },
    {
      name: "Enterprise Development",
      icon: <Landmark className="w-5 h-5 text-accent-teal" />,
    },
  ];

  return (
    <section id="team" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Our Leadership & Structure
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-primary-blue to-accent-teal mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            OCOC is governed by a dedicated Board of Directors and managed by
            experienced professionals committed to humanitarian excellence in
            Afghanistan.
          </p>
        </div>

        {/* Top Tier Management Grid - Exact from Page 13 Chart */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Governance */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-primary-blue transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-primary-blue w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Governance
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">• General Assembly</li>
              <li className="flex items-center gap-2">• Board of Directors</li>
              <li className="flex items-center gap-2">
                • Audit & Risk Committee
              </li>
              <li className="flex items-center gap-2">
                • HR & Procurement Committee
              </li>
            </ul>
          </div>

          {/* Executive Leadership */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-accent-teal transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-teal-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-accent-teal w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Executive Leadership
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">• Executive Director</li>
              <li className="flex items-center gap-2">
                • Deputy Executive Director
              </li>
              <li className="flex items-center gap-2">
                • Senior Management Team (SMT)
              </li>
              <li className="flex items-center gap-2">• Technical Advisors</li>
            </ul>
          </div>

          {/* Core Operations */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-primary-red transform hover:-translate-y-2 transition-transform duration-300">
            <div className="bg-red-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Briefcase className="text-primary-red w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Specialized Units
            </h3>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                >
                  {dept.icon} {dept.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ANIMATED MESSAGE SECTION - THE HEART OF THE PAGE */}
        <div className="mt-24 mb-16 max-w-5xl mx-auto px-6">
          <div className="relative p-1 border-t border-b border-gray-100 py-16">
            {/* Subtle Accent Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary-blue rounded-full"></div>

            <div className="relative z-10 text-center">
              {/* Small Professional Label */}
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary-blue/60 mb-8 block">
                Our Professional Foundation
              </span>

              {/* The Main Message - Clean & Powerful */}
              <h4 className="text-2xl lg:text-4xl font-light text-neutral-dark-grey leading-[1.6] italic">
                "Our cadre of women and men managers, personnel, and trainers
                have{" "}
                <span className="font-semibold text-gray-900 not-italic border-b-2 border-accent-teal/30">
                  5-10 years of experience
                </span>{" "}
                in the public and private sectors, representing a wealth of
                expertise for the{" "}
                <span className="text-primary-blue font-medium not-italic">
                  empowerment of orphaned children and women in Afghanistan.
                </span>
                "
              </h4>

              {/* Organizational Stamp/Signature style */}
              <div className="mt-10 flex flex-col items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-gray-300"></div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    OCOC Organizational Strength
                  </p>
                  <div className="w-8 h-[1px] bg-gray-300"></div>
                </div>
              </div>
            </div>

            {/* Bottom Accent Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent-teal rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
