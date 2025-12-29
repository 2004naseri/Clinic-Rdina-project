import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { navigationItems, ctaConfig, socialLinks } from "../../data/navbarData";

const NavbarMobile = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* --- HAMBURGER BUTTON --- */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-text-primary hover:text-primary transition-colors"
        aria-label="Open Menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>

      {/* --- LEFT SIDE OVERLAY --- */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-500
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* --- RIGHT SIDE DRAWER MENU (70% Width) --- */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[75%] sm:w-[60%] bg-background shadow-2xl 
          transition-transform duration-500 ease-out flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header inside Menu */}
        <div className="flex items-center justify-between p-6 border-b border-secondary-light">
          <span className="font-display text-lg italic text-primary">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-secondary"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-8 px-8">
          <ul className="space-y-6">
            {navigationItems.map((item, index) => (
              <li
                key={item.id}
                className={`transition-all duration-500 delay-[${index * 100}ms]
                  ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
              >
                <Link
                  to={item.path}
                  className="block font-body text-xl tracking-widest uppercase hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link
              to={ctaConfig.primary.path}
              className="block w-full text-center bg-primary text-white py-4 rounded-full font-body text-sm uppercase tracking-widest shadow-elegant"
            >
              {ctaConfig.primary.label}
            </Link>
          </div>
        </nav>

        {/* Footer inside Menu */}
        <div className="p-8 border-t border-secondary-light bg-secondary-light/30">
          <div className="flex gap-6 justify-center">
            {Object.entries(socialLinks).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <span className="capitalize text-xs tracking-widest">
                  {key}
                </span>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavbarMobile;
