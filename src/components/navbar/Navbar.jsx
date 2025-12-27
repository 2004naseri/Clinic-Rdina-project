// src/components/layout/navbar/Navbar.jsx
// ========================================
// MAIN NAVBAR COMPONENT (Smart Component)
// ========================================
// Handles scroll behavior and responsive switching

import { useState, useEffect } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const { scrollY, isScrolled } = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Navbar Container */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-40 
          navbar-container
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${
            isScrolled
              ? "bg-navbar-bg navbar-blur navbar-shadow border-b border-navbar-border"
              : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="custom-container py-4">
          {/* Desktop Navigation */}
          <NavbarDesktop />

          {/* Mobile Navigation */}
          <NavbarMobile />
        </div>
      </header>

      {/* Spacer to prevent content jump */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
