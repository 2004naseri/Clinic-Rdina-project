// import React from "react";

// const AboutIntroSection = () => {
//   return (
//     <section id="about" className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-16 items-center">
//           {/* Text Content - EXACT from PDF Page 3 */}
//           <div className="lg:w-1/2 space-y-8">
//             <div>
//               <span className="text-primary-blue font-bold tracking-widest uppercase text-sm">
//                 Established 2022
//               </span>
//               <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
//                 About the Organization
//               </h2>
//             </div>

//             <div className="space-y-6 text-lg text-neutral-dark-grey leading-relaxed">
//               <p>
//                 The Organization for the Care of Orphaned Children (OCOC) is a
//                 non-profit, community-based, non-governmental, and non-political
//                 organization (NGO) dedicated to enhancing the lives of orphaned
//                 and vulnerable children in Afghanistan[cite: 114].
//               </p>

//               <p>
//                 OCOC was established to provide care, education, and support for
//                 children who have lost their parents or guardians due to
//                 conflict, poverty, or other challenging circumstances[cite:
//                 115]. Our goal is to ensure that every child, regardless of
//                 their background or challenges, can live a life of dignity,
//                 hope, and opportunity[cite: 116].
//               </p>

//               <div className="bg-accent-light-blue/30 p-6 rounded-2xl border-l-4 border-primary-blue italic">
//                 OCOC was established in 2022 in Kabul, incorporated under the
//                 laws of Afghanistan and holds Afghanistan Ministry of Economy
//                 License # 5678[cite: 117].
//               </div>

//               <p>
//                 Our cadre of women and men managers, personnel, and trainers
//                 which has 5-10 years of experience in the public and private
//                 sectors represent their experience and consultants to OCOC for
//                 empowerment of orphaned children and women in Afghanistan[cite:
//                 119].
//               </p>
//             </div>
//           </div>

//           {/* Big View Visual Side */}
//           <div className="lg:w-1/2 relative">
//             <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent-light-blue rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
//             <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>

//             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
//               <img
//                 src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
//                 alt="Humanitarian support in Afghanistan"
//                 className="w-full h-[600px] object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
//                 <p className="text-white text-xl font-medium italic">
//                   "Together, we can give Afghanistan's orphaned children the
//                   care and opportunities they deserve" [cite: 84]
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutIntroSection;

import React from "react";
import { Heart, Building2, Users } from "lucide-react";

const AboutIntroSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary-blue/10 rounded-full mb-6">
            <Building2 className="w-5 h-5 text-primary-blue" />
            <span className="text-sm font-bold text-primary-blue uppercase tracking-wide">
              Established 2022
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            About OCOC
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue to-primary-green rounded-full mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content (EXACT from Document Page 3) */}
          <div className="space-y-6">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {/* Paragraph 1 - EXACT TEXT */}
              <p>
                The Organization for the Care of Orphaned Children (OCOC) is a
                <strong>
                  {" "}
                  non-profit, community-based, non-governmental, and
                  non-political organization (NGO)
                </strong>{" "}
                dedicated to enhancing the lives of orphaned and vulnerable
                children in Afghanistan.
              </p>

              {/* Paragraph 2 - EXACT TEXT */}
              <p>
                OCOC was established to provide care, education, and support for
                children who have lost their parents or guardians due to
                conflict, poverty, or other challenging circumstances. Our goal
                is to ensure that every child, regardless of their background or
                challenges, can live a life of{" "}
                <strong>dignity, hope, and opportunity</strong>.
              </p>
            </div>

            {/* Highlight Box - License Info (EXACT TEXT) */}
            <div className="bg-gradient-to-r from-primary-blue/10 to-primary-green/10 p-6 md:p-8 rounded-2xl border-l-4 border-primary-blue">
              <p className="text-gray-800 leading-relaxed">
                <strong>OCOC was established in 2022 in Kabul</strong>,
                incorporated under the laws of Afghanistan and holds Afghanistan
                <strong> Ministry of Economy License # 5678</strong>.
              </p>
            </div>

            {/* Expertise Text (EXACT TEXT) */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Our cadre of women and men managers, personnel, and trainers which
              has
              <strong> 5-10 years of experience</strong> in the public and
              private sectors represent their experience and consultants to OCOC
              for empowerment of orphaned children and women in Afghanistan.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <p className="text-3xl font-bold text-primary-blue">2022</p>
                <p className="text-xs text-gray-600 mt-1">Established</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <p className="text-3xl font-bold text-primary-green">4+</p>
                <p className="text-xs text-gray-600 mt-1">Provinces</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <p className="text-3xl font-bold text-primary-blue">5-10</p>
                <p className="text-xs text-gray-600 mt-1">Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-blue/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-green/20 rounded-full blur-2xl"></div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                alt="OCOC supporting children in Afghanistan"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <Heart className="w-6 h-6 text-white flex-shrink-0 fill-current" />
                  <p className="text-white text-lg md:text-xl font-medium italic leading-relaxed">
                    "Together, we can give Afghanistan's orphaned children the
                    care and opportunities they deserve"
                  </p>
                </div>
                <p className="text-white/80 text-sm">
                  — OCOC Mission Statement
                </p>
              </div>

              {/* Top Badge */}
              <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary-blue" />
                  <span className="text-sm font-bold text-gray-800">
                    Since 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#vision-mission"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Learn About Our Vision & Mission
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
