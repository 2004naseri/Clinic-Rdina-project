// // import { useState, useEffect } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import Logo from "./Logo";
// // import { navigationItems, ctaConfig, socialLinks } from "../../data/navbarData";

// // const NavbarMobile = () => {
// //   const location = useLocation();
// //   const [isOpen, setIsOpen] = useState(false);

// //   // Close menu on route change
// //   useEffect(() => setIsOpen(false), [location]);

// //   // Prevent background scroll
// //   useEffect(() => {
// //     document.body.style.overflow = isOpen ? "hidden" : "unset";
// //   }, [isOpen]);

// //   return (
// //     <div className="lg:hidden">
// //       {/* --- HAMBURGER BUTTON --- */}
// //       <button
// //         onClick={() => setIsOpen(true)}
// //         className="p-2 text-text-primary hover:text-primary transition-colors"
// //         aria-label="Open Menu"
// //       >
// //         <svg
// //           className="w-8 h-8"
// //           fill="none"
// //           stroke="currentColor"
// //           viewBox="0 0 24 24"
// //         >
// //           <path
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             strokeWidth="1.5"
// //             d="M4 8h16M4 16h16"
// //           />
// //         </svg>
// //       </button>

// //       {/* --- LEFT SIDE OVERLAY --- */}
// //       <div
// //         className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-500
// //           ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
// //         onClick={() => setIsOpen(false)}
// //       />

// //       {/* --- RIGHT SIDE DRAWER MENU (70% Width) --- */}
// //       <aside
// //         className={`fixed top-0 right-0 z-[70] h-full w-[75%] sm:w-[60%] bg-background shadow-2xl
// //           transition-transform duration-500 ease-out flex flex-col
// //           ${isOpen ? "translate-x-0" : "translate-x-full"}`}
// //       >
// //         {/* Header inside Menu */}
// //         <div className="flex items-center justify-between p-6 border-b border-secondary-light">
// //           <span className="font-display text-lg italic text-primary">Menu</span>
// //           <button
// //             onClick={() => setIsOpen(false)}
// //             className="text-text-secondary"
// //           >
// //             <svg
// //               className="w-6 h-6"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d="M6 18L18 6M6 6l12 12"
// //               />
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Navigation Links */}
// //         <nav className="flex-1 overflow-y-auto py-8 px-8">
// //           <ul className="space-y-6">
// //             {navigationItems.map((item, index) => (
// //               <li
// //                 key={item.id}
// //                 className={`transition-all duration-500 delay-[${index * 100}ms]
// //                   ${
// //                     isOpen
// //                       ? "opacity-100 translate-x-0"
// //                       : "opacity-0 translate-x-10"
// //                   }`}
// //               >
// //                 <Link
// //                   to={item.path}
// //                   className="block font-body text-xl tracking-widest uppercase hover:text-primary transition-colors"
// //                 >
// //                   {item.label}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>

// //           <div className="mt-12">
// //             <Link
// //               to={ctaConfig.primary.path}
// //               className="block w-full text-center bg-primary text-white py-4 rounded-full font-body text-sm uppercase tracking-widest shadow-elegant"
// //             >
// //               {ctaConfig.primary.label}
// //             </Link>
// //           </div>
// //         </nav>

// //         {/* Footer inside Menu */}
// //         <div className="p-8 border-t border-secondary-light bg-secondary-light/30">
// //           <div className="flex gap-6 justify-center">
// //             {Object.entries(socialLinks).map(([key, url]) => (
// //               <a
// //                 key={key}
// //                 href={url}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="text-text-secondary hover:text-accent transition-colors"
// //               >
// //                 <span className="capitalize text-xs tracking-widest">
// //                   {key}
// //                 </span>
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </aside>
// //     </div>
// //   );
// // };

// // export default NavbarMobile;

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "./Logo";
// import { navigationItems, ctaConfig } from "../../data/navbarData";

// const NavbarMobile = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => setIsOpen(false), [location]);

//   return (
//     <div className="lg:hidden flex items-center justify-between w-full">
//       <Logo className="scale-90" />

//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="relative z-[80] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
//       >
//         <span
//           className={`h-0.5 w-6 bg-primary transition-transform ${
//             isOpen ? "rotate-45 translate-y-2" : ""
//           }`}
//         />
//         <span
//           className={`h-0.5 w-6 bg-primary transition-opacity ${
//             isOpen ? "opacity-0" : "opacity-100"
//           }`}
//         />
//         <span
//           className={`h-0.5 w-6 bg-primary transition-transform ${
//             isOpen ? "-rotate-45 -translate-y-2" : ""
//           }`}
//         />
//       </button>

//       {/* Full Screen Menu Overlay */}
//       <div
//         className={`fixed inset-0 z-[70] bg-background transition-all duration-700 ease-in-out
//         ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//       >
//         <div className="flex flex-col h-full justify-center items-center p-12">
//           <nav className="text-center">
//             <ul className="space-y-8">
//               {navigationItems.map((item) => (
//                 <li key={item.id}>
//                   <Link
//                     to={item.path}
//                     className="text-3xl font-display italic text-text-primary hover:text-primary transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <div className="mt-16 w-full max-w-xs">
//             <Link
//               to={ctaConfig.primary.path}
//               className="block w-full text-center border border-primary text-primary py-4 uppercase tracking-[0.2em] text-xs font-bold"
//             >
//               {ctaConfig.primary.label}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarMobile;
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { navigationItems, ctaConfig } from "../../data/navbarData";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  const location = useLocation();
  const navigate = useNavigate();
  function handleClick(path) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Changed from "instant" to "auto"
    });
    navigate(path);
  }

  useEffect(() => setIsOpen(false), [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center justify-between w-full">
      <Logo className="scale-90" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[110] p-2"
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`h-0.5 w-full bg-[#430568] transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-[#430568] transition-all ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-full bg-[#430568] transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 z-[105] bg-white transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-10">
          <nav>
            <ul className="space-y-8">
              {navigationItems.map((item, index) => (
                <li
                  key={item.id}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`transition-all duration-500 ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <button
                    onClick={() => handleClick(item.path)}
                    className={`text-[11px] uppercase hover:cursor-pointer tracking-[0.25em] font-semibold transition-all duration-300 ${
                      isActive(item.path)
                        ? "text-[#88243d]"
                        : "text-[#430568] hover:text-[#88243d]"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] bg-[#88243d] transition-all duration-300 ${
                        isActive(item.path)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto mb-20">
            <Link
              to={ctaConfig.primary.path}
              className="block w-full text-center bg-[#660665] text-white py-5 uppercase tracking-widest text-xs font-bold"
            >
              {ctaConfig.primary.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
