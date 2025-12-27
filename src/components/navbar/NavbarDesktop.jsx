// src/components/layout/navbar/NavbarDesktop.jsx
// ========================================
// DESKTOP NAVIGATION MENU (≥1024px)
// ========================================

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "./NavLogo";
import DropdownMenu from "./DropdownMenu";
import { ctaButton, mainMenu } from "../../data/NavbarData";

const NavbarDesktop = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (menuId) => {
    setOpenDropdown(openDropdown === menuId ? null : menuId);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="hidden lg:flex items-center justify-between w-full">
      {/* Logo */}
      <NavLogo />

      {/* Main Navigation Menu */}
      <ul className="flex items-center gap-8">
        {mainMenu.map((item) => (
          <li key={item.id}>
            {item.hasDropdown ? (
              <DropdownMenu
                label={item.label}
                items={item.dropdownItems}
                isOpen={openDropdown === item.id}
                onToggle={() => handleDropdownToggle(item.id)}
                onClose={handleDropdownClose}
              />
            ) : (
              <Link
                to={item.path}
                className={`font-body text-sm font-medium transition-colors duration-200 nav-link-underline nav-link ${
                  isActive(item.path)
                    ? "text-primary active"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link to={ctaButton.path} className="btn-primary flex items-center gap-2">
        {ctaButton.label}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </Link>
    </nav>
  );
};

export default NavbarDesktop;
