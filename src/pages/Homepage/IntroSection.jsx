// import React from "react";
// import { Heart, Landmark, Users } from "lucide-react";

// // Recommended path for an emotional, high-impact image
// const organizationImage = "./ococ-image/littleGirl.jpg";

// function IntroSection() {
//   return (
//     <section
//       className="
//       relative
//       py-16 md:py-24 px-4 sm:px-6 lg:px-12
//       bg-white text-gray-800
//       overflow-hidden
//     "
//     >
//       {/* Decorative Diagonal Shape (Top Right Accent)
//           Using bg-primary-blue/10 (assuming Tailwind color mapping is active) */}
//       <div
//         className="
//         absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96
//         bg-primary-blue/10 transform skew-y-6 origin-top-right opacity-50
//         z-0
//       "
//       ></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Main Title - Using text-primary-blue */}
//         <h2
//           className="
//           text-4xl sm:text-5xl font-extrabold text-center mb-16
//           text-primary-blue
//           relative
//         "
//         >
//           About the Organization for the Care of Orphaned Children (OCOC)
//           <span
//             className="
//             block w-24 h-1 mx-auto mt-3 rounded-full
//             bg-primary-blue
//           "
//           ></span>
//         </h2>

//         {/* Content Grid: Image beside Key Identity */}
//         <div
//           className="
//           grid grid-cols-1 md:grid-cols-12 gap-10 items-start
//         "
//         >
//           {/* 1. Core Identity and Mission (Col 5) */}
//           <div className="md:col-span-5 order-2 md:order-1 space-y-8">
//             <div
//               className="
//               p-6 lg:p-10 bg-primary-blue/5 rounded-2xl shadow-xl
//               border-l-8 border-primary-blue
//             "
//             >
//               <h3
//                 className="
//                 text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2
//               "
//               >
//                 {/* Using text-primary-blue */}
//                 <Heart className="w-6 h-6 fill-current text-primary-blue" />
//                 Our Foundational Commitment
//               </h3>

//               {/* EXACT TEXT BLOCK 1 */}
//               <p className="text-gray-700 leading-relaxed text-lg mb-4">
//                 The Organization for the Care of Orphaned Children (OCOC) is a
//                 non-profit, community-based, non-governmental, and non-political
//                 organization (NGO) dedicated to enhancing the lives of orphaned
//                 and vulnerable children in Afghanistan.
//               </p>

//               {/* EXACT TEXT BLOCK 2 */}
//               <p className="text-gray-700 leading-relaxed text-lg">
//                 OCOC was established to provide care, education, and support for
//                 children who have lost their parents or guardians due to
//                 conflict, poverty, or other challenging circumstances. Our goal
//                 is to ensure that every child, regardless of their background or
//                 challenges, can live a life of dignity, hope, and opportunity.
//               </p>
//             </div>

//             {/* Mission Statement Callout - Using bg-primary-blue */}
//             <blockquote
//               className="
//               p-4 text-white rounded-xl shadow-lg
//               italic text-center font-semibold
//               bg-primary-blue
//             "
//             >
//               <p>
//                 OCOC has had the mission to ensure that every child, regardless
//                 of their background, is given the chance to thrive in a safe,
//                 nurturing environment.
//               </p>
//             </blockquote>
//           </div>

//           {/* 2. Image Section (Col 7) */}
//           <div className="md:col-span-7 order-1 md:order-2 sticky top-8">
//             <div className="relative p-4 bg-white rounded-3xl shadow-[0_20px_50px_rgba(66,133,244,0.3)]">
//               <img
//                 src={organizationImage}
//                 alt="Group of smiling children supported by OCOC"
//                 className="
//                   w-full h-auto object-cover max-h-[450px]
//                   rounded-2xl border-4 border-accent-light-blue // Used accent light blue for border
//                   transform hover:scale-[1.01] transition duration-500
//                 "
//               />
//               <figcaption
//                 className="
//                 absolute bottom-0 right-0 px-4 py-2 text-white text-sm rounded-tl-xl rounded-br-2xl
//                 bg-primary-blue/80
//               "
//               >
//                 Empowering children in Kabul, Afghanistan.
//               </figcaption>
//             </div>
//           </div>
//         </div>

//         {/* 3. Footer Details (Full Width Credibility and Expertise) */}
//         <div className="mt-16 pt-8 border-t border-gray-200">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
//             {/* Legal Status Card - Using border-primary-blue and text-primary-blue */}
//             <div className="p-6 bg-white rounded-lg shadow-lg border-b-4 border-primary-blue">
//               <h4 className="text-xl font-bold flex items-center gap-2 mb-2 text-primary-blue">
//                 <Landmark className="w-5 h-5" />
//                 Legal Status & Establishment
//               </h4>
//               <p className="text-sm mt-2 text-gray-600">
//                 OCOC was **established in 2022 in Kabul, incorporated under the
//                 laws of Afghanistan and holds Afghanistan Ministry of Economy
//                 License # 5678.**
//               </p>
//               <p className="text-sm mt-3 text-gray-600">
//                 Since its inception, OCOC has had the mission to ensure that
//                 every child, regardless of their background, is given the chance
//                 to thrive in a safe, nurturing environment.
//               </p>
//             </div>

//             {/* Focus on Empowerment - Using border-primary-blue and text-primary-blue */}
//             <div className="p-6 bg-white rounded-lg shadow-lg border-b-4 border-primary-blue">
//               <h4 className="text-xl font-bold flex items-center gap-2 mb-2 text-primary-blue">
//                 {/* Using text-primary-blue */}
//                 <Heart className="w-5 h-5 fill-current text-primary-blue" />
//                 Comprehensive Empowerment
//               </h4>
//               <p className="text-sm mt-2 text-gray-600">
//                 Through **education, healthcare, and emotional support**, OCOC
//                 aims to **empower children and women to reach their full
//                 potential**, while fostering a sense of belonging and
//                 inclusivity.
//               </p>
//             </div>

//             {/* Expertise Card - Using border-primary-blue and text-primary-blue */}
//             <div className="p-6 bg-white rounded-lg shadow-lg border-b-4 border-primary-blue">
//               <h4 className="text-xl font-bold flex items-center gap-2 mb-2 text-primary-blue">
//                 <Users className="w-5 h-5" />
//                 Our Experienced Cadre
//               </h4>
//               <p className="text-sm text-gray-600">
//                 **Our cadre of women and men managers, personnel, and trainers
//                 which has 5-10 years of experience in the public and private
//                 sectors represent their experience and consultants to OCOC for
//                 empowerment of orphaned children and women in Afghanistan.**
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default IntroSection;

import React from "react";
import { Heart, Landmark, Users, ArrowRight } from "lucide-react";

// Image path - replace with your actual image path
const organizationImage = "./ococ-image/3image.jpg";

function IntroSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white text-gray-800 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-blue/5 transform skew-y-6 origin-top-right opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary-green/5 transform -skew-y-6 origin-bottom-left opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600  bg-clip-text text-transparent mb-4">
            Organization for the Care of Orphaned Children
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid: Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
          {/* Left Column - Core Identity */}
          <div className="space-y-6">
            {/* Main Identity Card */}
            <div className="bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 rounded-2xl shadow-xl border-l-4 border-primary-blue p-6 lg:p-8 transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-blue rounded-lg">
                  <Heart className="w-6 h-6 text-white fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Our Foundation
                </h3>
              </div>

              {/* EXACT TEXT FROM DOCUMENT - Page 3 */}
              <p className="text-gray-700 leading-relaxed text-base mb-4">
                The Organization for the Care of Orphaned Children (OCOC) is a
                non-profit, community-based, non-governmental, and non-political
                organization (NGO) dedicated to enhancing the lives of orphaned
                and vulnerable children in Afghanistan.
              </p>

              <p className="text-gray-700 leading-relaxed text-base">
                OCOC was established to provide care, education, and support for
                children who have lost their parents or guardians due to
                conflict, poverty, or other challenging circumstances. Our goal
                is to ensure that every child, regardless of their background or
                challenges, can live a life of dignity, hope, and opportunity.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-primary-blue text-white rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <p className="text-lg font-semibold italic leading-relaxed">
                  "Our commitment is to ensure that every child, regardless of
                  their background, is given the chance to thrive in a safe,
                  nurturing environment."
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-primary-green text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Learn More About Our Mission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="lg:sticky lg:top-24">
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform group-hover:scale-[1.02] transition-all duration-500">
                <img
                  src={organizationImage}
                  alt="OCOC - Empowering orphaned children in Afghanistan"
                  className="w-full h-auto object-cover max-h-[500px] rounded-2xl border-4 border-accent-light-blue"
                />

                {/* Image Caption */}
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-primary-blue/90 backdrop-blur-sm text-white text-sm rounded-lg shadow-lg">
                  <p className="font-semibold">Empowering children in Kabul</p>
                </div>
              </div>

              {/* Decorative Floating Element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-green/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section - EXACT TEXT FROM DOCUMENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 - Legal Status */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl border-b-4 border-primary-blue p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-blue/10 rounded-lg group-hover:bg-primary-blue group-hover:text-white transition-colors">
                <Landmark className="w-6 h-6 text-primary-blue group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-primary-blue">
                Legal Status
              </h4>
            </div>

            {/* EXACT TEXT FROM DOCUMENT - Page 3 */}
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <span className="font-semibold text-gray-800">
                Established in 2022
              </span>{" "}
              in Kabul, incorporated under the laws of Afghanistan.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Ministry of Economy License:{" "}
              <span className="font-bold text-primary-blue">#5678</span>
            </p>
          </div>

          {/* Card 2 - Empowerment Focus */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl border-b-4 border-primary-green p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-green/10 rounded-lg group-hover:bg-primary-green group-hover:text-white transition-colors">
                <Heart className="w-6 h-6 text-primary-green group-hover:text-white fill-current" />
              </div>
              <h4 className="text-xl font-bold text-primary-green">
                Our Approach
              </h4>
            </div>

            {/* EXACT TEXT FROM DOCUMENT - Page 3 */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Through{" "}
              <span className="font-semibold text-gray-800">
                education, healthcare, and emotional support
              </span>
              , OCOC aims to empower children and women to reach their full
              potential, while fostering a sense of belonging and inclusivity.
            </p>
          </div>

          {/* Card 3 - Expertise */}
          <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl border-b-4 border-accent-teal p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent-teal/10 rounded-lg group-hover:bg-accent-teal group-hover:text-white transition-colors">
                <Users className="w-6 h-6 text-accent-teal group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-accent-teal">
                Expert Team
              </h4>
            </div>

            {/* EXACT TEXT FROM DOCUMENT - Page 3 */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Our cadre of women and men managers, personnel, and trainers has{" "}
              <span className="font-semibold text-gray-800">
                5-10 years of experience
              </span>{" "}
              in the public and private sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
