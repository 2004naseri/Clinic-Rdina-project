// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Youtube,
//   Heart,
//   ArrowRight,
//   ExternalLink,
//   Send,
// } from "lucide-react";
// import {
//   quickLinks,
//   contactInfo,
//   programs,
//   resources,
//   socialLinks,
// } from "../data/footerData";

// function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-green rounded-full blur-3xl"></div>
//       </div>

//       {/* Top Accent Line */}
//       <div className="h-1 bg-gradient-to-r from-primary-blue via-primary-green to-accent-teal"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
//           {/* Organization Info - Larger Section */}
//           <div className="lg:col-span-4">
//             <div className="mb-6">
//               <img
//                 src="/ococ-image/logo.jpg"
//                 alt="OCOC Logo"
//                 className="h-16 w-auto object-contain rounded-lg mb-4 bg-white/10 p-2"
//               />
//               <h3 className="text-2xl font-bold mb-2">OCOC</h3>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Organization for the Care of Orphaned Children - Empowering
//                 Afghanistan's orphaned children through education, healthcare,
//                 and comprehensive support since 2022.
//               </p>
//             </div>

//             {/* Newsletter Signup */}
//             <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
//               <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
//                 <Send className="w-5 h-5 text-primary-blue" />
//                 Stay Updated
//               </h4>
//               <p className="text-gray-400 text-sm mb-4">
//                 Subscribe to our newsletter for updates
//               </p>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-blue text-sm"
//                 />
//                 <button className="px-4 py-2 bg-primary-blue hover:bg-primary-blue/90 rounded-lg transition-colors">
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="lg:col-span-2">
//             <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
//               <div className="w-1 h-6 bg-primary-blue rounded-full"></div>
//               About Us
//             </h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm"
//                   >
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Programs */}
//           <div className="lg:col-span-2">
//             <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
//               <div className="w-1 h-6 bg-primary-green rounded-full"></div>
//               Our Programs
//             </h4>
//             <ul className="space-y-3">
//               {programs.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm"
//                   >
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div className="lg:col-span-2">
//             <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
//               <div className="w-1 h-6 bg-accent-teal rounded-full"></div>
//               Resources
//             </h4>
//             <ul className="space-y-3">
//               {resources.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm"
//                   >
//                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info - EXACT from Document */}
//           <div className="lg:col-span-2">
//             <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
//               <div className="w-1 h-6 bg-accent-orange rounded-full"></div>
//               Contact Us
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3 text-sm">
//                 <Phone className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="text-gray-400">{contactInfo.phone[0]}</p>
//                   <p className="text-gray-400">{contactInfo.phone[1]}</p>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3 text-sm">
//                 <Mail className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
//                 <div>

//                   <a
//                     href={`mailto:${contactInfo.email[0]}`}
//                     className="text-gray-400 hover:text-white transition-colors block"
//                   >
//                     {contactInfo.email[0]}
//                   </a>
//                   <a
//                     href={`mailto:${contactInfo.email[1]}`}
//                     className="text-gray-400 hover:text-white transition-colors block"
//                   >
//                     {contactInfo.email[1]}
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3 text-sm">
//                 <MapPin className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
//                 <p className="text-gray-400">{contactInfo.address}</p>
//               </li>
//               <li className="flex items-start gap-3 text-sm">
//                 <ExternalLink className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
//                 <a
//                   href={`https://${contactInfo.website}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   {contactInfo.website}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/10 mb-8"></div>

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Social Links */}
//           <div className="flex items-center gap-3">
//             <span className="text-gray-400 text-sm mr-2">Follow Us:</span>
//             {socialLinks.map((social, index) => {
//               const IconComponent = social.icon;
//               return (
//                 <a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className={`p-2 bg-white/5 hover:bg-white/10 ${social.color} rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
//                 >
//                   <IconComponent className="w-5 h-5" />
//                 </a>
//               );
//             })}
//           </div>

//           {/* Legal Info */}
//           <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
//             <span className="flex items-center gap-2">
//               <Heart className="w-4 h-4 text-accent-orange fill-current" />
//               Made with love in Afghanistan
//             </span>
//             <span className="hidden md:block">•</span>
//             <span>Est. {contactInfo.established}</span>
//             <span className="hidden md:block">•</span>
//             <span>{contactInfo.license}</span>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-8 pt-8 border-t border-white/10">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
//             <p>
//               © {new Date().getFullYear()} OCOC - Organization for the Care of
//               Orphaned Children. All rights reserved.
//             </p>
//             <div className="flex items-center gap-4">
//               <a href="/privacy" className="hover:text-white transition-colors">
//                 Privacy Policy
//               </a>
//               <span>•</span>
//               <a href="/terms" className="hover:text-white transition-colors">
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Accent */}
//       <div className="h-1 bg-gradient-to-r from-primary-blue via-primary-green to-accent-teal"></div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Heart,
  ArrowRight,
  ExternalLink,
  Send,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  quickLinks,
  contactInfo,
  programs,
  resources,
  socialLinks,
} from "../data/footerData";

function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-teal-600"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Organization Info - Larger Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img
                src="/ococ-image/logo.jpg"
                alt="OCOC Logo"
                className="h-16 w-auto object-contain rounded-lg mb-4 bg-white/10 p-2"
              />
              <h3 className="text-2xl font-bold mb-2">OCOC</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Organization for the Care of Orphaned Children - Empowering
                Afghanistan's orphaned children through education, healthcare,
                and comprehensive support since 2022.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-600" />
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links - About Us */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
              About Us
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm text-left"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm text-left"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-teal-600 rounded-full"></div>
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm text-left"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Mapped Data */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-orange-500 rounded-full"></div>
              Contact Us
            </h4>
            <ul className="space-y-4">
              {/* Phone Numbers - Map Array */}
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  {contactInfo.phone.map((number, index) => (
                    <p key={index} className="text-gray-400">
                      {number}
                    </p>
                  ))}
                </div>
              </li>

              {/* Email Addresses - Map Array */}
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  {contactInfo.email.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email}`}
                      className="text-gray-400 hover:text-white transition-colors block"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400">{contactInfo.address}</p>
              </li>

              {/* Website */}
              <li className="flex items-start gap-3 text-sm">
                <ExternalLink className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {contactInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links - Map Array */}
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm mr-2">Follow Us:</span>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2 bg-white/5 hover:bg-white/10 ${social.color} rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Legal Info */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-orange-500 fill-current" />
              Made with love in Afghanistan
            </span>
            <span className="hidden md:block">•</span>
            <span>Est. {contactInfo.established}</span>
            <span className="hidden md:block">•</span>
            <span>{contactInfo.license}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} OCOC - Organization for the Care of
              Orphaned Children. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleLinkClick("/privacy")}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => handleLinkClick("/terms")}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-teal-600"></div>
    </footer>
  );
}

export default Footer;
