// src/hooks/useScrollPosition.js
// ========================================
// CUSTOM HOOK: Track Scroll Position
// ========================================
// Returns scroll position and direction for navbar behavior

import { useState, useEffect } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;

      setScrollPosition({
        scrollY: currentScrollY,
        isScrolled: currentScrollY > 50,
        scrollDirection:
          currentScrollY > lastScrollY
            ? "down"
            : currentScrollY < lastScrollY
            ? "up"
            : null,
      });

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call
    updateScrollPosition();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};
