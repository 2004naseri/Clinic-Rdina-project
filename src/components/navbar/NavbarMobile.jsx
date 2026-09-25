// src/components/layout/navbar/NavbarMobile.jsx
// ========================================
// MOBILE NAVBAR - New Professional Design
// ========================================

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Check, Instagram, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import {
  navigationItems,
  ctaConfig,
  socialLinks,
} from "../../data/navbarData";

const findSocial = (id) => socialLinks.find((s) => s.id === id);

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="lg:hidden flex items-center justify-between w-full">
      {/* Logo */}
      <Logo className="scale-90" />

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[110] p-2"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-secondary" />
        ) : (
          <Menu className="w-6 h-6 text-secondary" />
        )}
      </button>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Drawer Menu - 70% Width */}
      <aside
        className={`fixed top-0 right-0 z-[105] h-full w-[70%] bg-white shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="border-b border-neutral-200 px-6 py-6">
          <div className="flex items-center gap-3">
            <Menu className="w-5 h-5 text-primary" />
            <span className="font-display text-2xl text-primary italic">
              Menu
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li
                key={item.id}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full text-left px-4 py-4 rounded-xl font-body text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:bg-surface hover:text-primary"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {isActive(item.path) && <Check className="w-4 h-4" />}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <Link
              to={ctaConfig.primary.path}
              className="flex items-center justify-center gap-2.5 w-full bg-accent text-white py-4 rounded-full font-body text-xs uppercase tracking-[0.25em] font-bold shadow-lg hover:bg-accent-dark transition-all duration-300"
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
        </nav>

        {/* Menu Footer */}
        <div className="border-t border-neutral-200 px-6 py-6 bg-surface">
          <div className="text-center">
            <p className="text-xs text-text-muted mb-3 uppercase tracking-wider">
              Follow Us
            </p>
            <div className="flex justify-center gap-4">
              {/* Social Icons — links come from siteConfig */}
              {findSocial("instagram") && (
                <a
                  href={findSocial("instagram").url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {findSocial("whatsapp") && (
                <a
                  href={findSocial("whatsapp").url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default NavbarMobile;
