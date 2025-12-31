// import { Link, useLocation } from "react-router-dom";
// import Logo from "./Logo";
// import { navigationItems, ctaConfig } from "../../data/navbarData";

// const NavbarDesktop = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="hidden lg:flex items-center justify-between w-full py-4">
//       <Logo />

//       <ul className="flex items-center gap-10">
//         {navigationItems.map((item) => (
//           <li key={item.id} className="relative group">
//             <Link
//               to={item.path}
//               className={`font-body text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-300
//                 ${
//                   isActive(item.path)
//                     ? "text-primary"
//                     : "text-text-secondary hover:text-primary"
//                 }`}
//             >
//               {item.label}
//               {/* Elegant Underline */}
//               <span
//                 className={`absolute -bottom-1 left-0 h-[1.5px] bg-accent transition-all duration-300
//                 ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}`}
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <Link
//         to={ctaConfig.primary.path}
//         className="btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8 py-2.5
//                    text-xs uppercase tracking-widest transition-all duration-500 rounded-full"
//       >
//         {ctaConfig.primary.label}
//       </Link>
//     </nav>
//   );
// };

// export default NavbarDesktop;

import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { navigationItems, ctaConfig } from "../../data/navbarData";

const NavbarDesktop = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden lg:flex items-center justify-between w-full">
      <Logo />

      <nav>
        <ul className="flex items-center gap-12">
          {navigationItems.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                to={item.path}
                className={`text-[11px] uppercase tracking-[0.3em] font-semibold transition-all duration-300
                  ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-text-secondary hover:text-primary"
                  }`}
              >
                {item.label}
                {/* Minimalist indicator */}
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-300 
                  ${
                    isActive(item.path)
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        to={ctaConfig.primary.path}
        className="bg-primary text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold 
                   hover:bg-accent transition-all duration-300 rounded-none shadow-lg hover:shadow-accent/20"
      >
        {ctaConfig.primary.label}
      </Link>
    </div>
  );
};

export default NavbarDesktop;
