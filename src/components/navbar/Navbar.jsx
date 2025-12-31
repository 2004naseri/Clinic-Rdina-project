// import { NavbarDesktop, NavbarMobile } from "./index";
// import { useScrollPosition } from "../../hooks/useScrollPosition";

// const Navbar = () => {
//   const { isScrolled } = useScrollPosition();

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
//         ${
//           isScrolled
//             ? "bg-secondary-light/90 backdrop-blur-md py-2 shadow-elegant"
//             : "bg-transparent py-6"
//         }`}
//     >
//       <div className="container-custom">
//         <NavbarDesktop />
//         <NavbarMobile />
//       </div>

//       {/* Luxury Detail: A razor-thin gradient line at the very bottom of the nav */}
//       <div
//         className={`h-[1px] w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent transition-opacity duration-500 ${
//           isScrolled ? "opacity-100" : "opacity-0"
//         }`}
//       />
//     </header>
//   );
// };

// export default Navbar;

import { NavbarDesktop, NavbarMobile } from "./index";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-secondary-light/50 shadow-sm">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* We move Logo here to keep it centered or left-aligned consistently */}
          <NavbarDesktop />
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
