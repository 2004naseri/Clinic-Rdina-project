// src/components/layout/navbar/NavLogo.jsx
// ========================================
// LOGO COMPONENT
// ========================================

import { logo } from "../../data/NavbarData";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to={logo.link} className="flex items-center gap-3 logo-hover group">
      {/* Logo Icon/Circle with Gradient */}
      <div className="relative">
        <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
          {/* Initial Letter */}
          <span
            className="text-xl font-bold text-text-light"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            R
          </span>
        </div>
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <h1
          className="text-xl font-bold text-primary leading-tight tracking-wide"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {logo.text}
        </h1>
        <p
          className="text-xs text-text-muted tracking-wider uppercase"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          {logo.tagline}
        </p>
      </div>
    </Link>
  );
};

export default NavLogo;
