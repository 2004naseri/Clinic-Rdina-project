// src/components/layout/navbar/NavbarMobile.jsx
// ========================================
// MOBILE NAVIGATION MENU (<1024px)
// ========================================

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "./NavLogo";
import { mainMenu, ctaButton } from "../../data/NavbarData";

const NavbarMobile = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedDropdown(null);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menuId) => {
    setExpandedDropdown(expandedDropdown === menuId ? null : menuId);
  };

  return (
    <div className="lg:hidden flex items-center justify-between w-full">
      {/* Logo */}
      <NavLogo />

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col gap-1.5 w-7 h-6 justify-center items-center nav-button z-50"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`hamburger-line h-0.5 w-full bg-text-primary rounded-full ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`hamburger-line h-0.5 w-full bg-text-primary rounded-full ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`hamburger-line h-0.5 w-full bg-text-primary rounded-full ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-mobile-overlay z-40 mobile-menu-overlay animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full px-6 py-20">
            {/* Menu Items */}
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {mainMenu.map((item, index) => (
                <div key={item.id} className="w-full">
                  {item.hasDropdown ? (
                    <div className="flex flex-col items-center gap-3">
                      {/* Dropdown Trigger */}
                      <button
                        onClick={() => toggleDropdown(item.id)}
                        className={`font-heading text-2xl font-semibold text-text-primary hover:text-primary transition-all duration-300 animate-slide-in-stagger stagger-${
                          index + 1
                        }`}
                      >
                        {item.label}
                      </button>

                      {/* Dropdown Items */}
                      {expandedDropdown === item.id && (
                        <div className="flex flex-col items-center gap-2 animate-fade-in">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.path}
                              className="font-body text-base text-text-secondary hover:text-primary transition-colors duration-200"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-heading text-2xl font-semibold text-text-primary hover:text-primary transition-all duration-300 animate-slide-in-stagger stagger-${
                        index + 1
                      } block text-center`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                to={ctaButton.path}
                className="btn-primary mt-6 animate-slide-in-stagger stagger-7 flex items-center gap-2"
              >
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
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
