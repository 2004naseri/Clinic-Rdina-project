import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { navigationItems, ctaConfig } from "../../data/navbarData";

const NavbarDesktop = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="hidden lg:flex items-center justify-between w-full py-4">
      <Logo />

      <ul className="flex items-center gap-10">
        {navigationItems.map((item) => (
          <li key={item.id} className="relative group">
            <Link
              to={item.path}
              className={`font-body text-[13px] uppercase tracking-[0.2em] font-medium transition-colors duration-300
                ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-text-secondary hover:text-primary"
                }`}
            >
              {item.label}
              {/* Elegant Underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[1.5px] bg-accent transition-all duration-300 
                ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to={ctaConfig.primary.path}
        className="btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8 py-2.5 
                   text-xs uppercase tracking-widest transition-all duration-500 rounded-full"
      >
        {ctaConfig.primary.label}
      </Link>
    </nav>
  );
};

export default NavbarDesktop;
