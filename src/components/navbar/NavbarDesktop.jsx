// import { Link, useLocation } from "react-router-dom";
// import Logo from "./Logo";
// import { navigationItems, ctaConfig } from "../../data/navbarData";

// const NavbarDesktop = () => {
//   const location = useLocation();
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="hidden lg:flex items-center justify-between w-full">
//       <Logo />
//       {/* <img src="/images/logo.png" /> */}
//       <nav>
//         <ul className="flex items-center gap-12">
//           {navigationItems.map((item) => (
//             <li key={item.id} className="relative group">
//               <Link
//                 to={item.path}
//                 className={`text-[11px] uppercase tracking-[0.3em] font-semibold transition-all duration-300
//                   ${
//                     isActive(item.path)
//                       ? "text-primary"
//                       : "text-text-secondary hover:text-primary"
//                   }`}
//               >
//                 {item.label}
//                 {/* Minimalist indicator */}
//                 <span
//                   className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-300
//                   ${
//                     isActive(item.path)
//                       ? "opacity-100"
//                       : "opacity-0 group-hover:opacity-100"
//                   }`}
//                 />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <Link
//         to={ctaConfig.primary.path}
//         className="bg-primary text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold
//                    hover:bg-accent transition-all duration-300 rounded-none shadow-lg hover:shadow-accent/20"
//       >
//         {ctaConfig.primary.label}
//       </Link>
//     </div>
//   );
// };

// export default NavbarDesktop;

import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { navigationItems, ctaConfig } from "../../data/navbarData";

const NavbarDesktop = () => {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const navigate = useNavigate();
  function handleClick(path) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Changed from "instant" to "auto"
    });
    navigate(path);
  }
  return (
    <div className="hidden lg:flex items-center justify-between w-full">
      <Logo />

      <nav>
        <ul className="flex items-center gap-10">
          {navigationItems.map((item) => (
            <li key={item.id} className="relative group">
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
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        to={ctaConfig.primary.path}
        className="flex items-center gap-2.5 bg-[#660665] text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#430568] transition-all duration-300"
      >
        <svg
          className="w-4 h-4 shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        {ctaConfig.primary.label}
      </Link>
    </div>
  );
};

export default NavbarDesktop;
