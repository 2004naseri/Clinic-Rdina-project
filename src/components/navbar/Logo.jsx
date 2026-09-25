// src/components/navbar/Logo.jsx
// ========================================
// LOGO COMPONENT
// The image lives at /images/logo.png — swap that file to rebrand.
// ========================================

import { Link } from "react-router-dom";
import { brandConfig } from "../../data/navbarData";

const Logo = ({ className = "" }) => {
  return (
    <Link
      to={brandConfig.link}
      className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label={brandConfig.name}
    >
      <img
        src="/images/logo.png"
        alt={brandConfig.name}
        className="h-12 w-auto md:h-16 object-contain"
      />
    </Link>
  );
};

export default Logo;
