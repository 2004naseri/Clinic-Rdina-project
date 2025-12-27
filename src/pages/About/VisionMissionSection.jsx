import React from "react";
import { Target, Eye } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Vision & Mission</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Card - EXACT FROM PDF */}
          <div className="bg-white p-12 rounded-[2rem] shadow-xl border-b-8 border-primary-blue">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="text-primary-blue w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Our Vision
            </h3>
            <p className="text-xl text-neutral-dark-grey leading-relaxed">
              To create a future where every orphaned child and vulnerable woman
              in Afghanistan has access to quality education, healthcare, and
              emotional support, enabling them to live a life of dignity, hope,
              and opportunity.
            </p>
          </div>

          {/* Mission Card - EXACT FROM PDF */}
          <div className="bg-white p-12 rounded-[2rem] shadow-xl border-b-8 border-accent-teal">
            <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-accent-teal w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Our Mission
            </h3>
            <p className="text-xl text-neutral-dark-grey leading-relaxed">
              OCOC is dedicated to eliminating poverty and injustice by
              empowering vulnerable communities. We provide high-quality
              education, healthcare, and protection to orphaned children and
              women in Afghanistan, ensuring their fundamental rights are
              protected through sustainable development and humanitarian aid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
