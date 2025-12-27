// src/components/layout/navbar/DropdownMenu.jsx
// ========================================
// REUSABLE DROPDOWN MENU COMPONENT
// ========================================

import { Link } from "react-router-dom";
import { useClickOutside } from "../../hooks/useClickOutside";

const DropdownMenu = ({ label, items, isOpen, onToggle, onClose }) => {
  const dropdownRef = useClickOutside(onClose);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        onClick={onToggle}
        className="flex items-center gap-1 font-body text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 py-2 nav-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        {/* Chevron Icon */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-dropdown-bg border border-dropdown-border rounded-lg shadow-elegant overflow-hidden dropdown-menu animate-fade-in z-50">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={onClose}
              className="block px-4 py-3 hover:bg-dropdown-hover transition-colors duration-200 group"
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-body text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                {item.description && (
                  <span className="font-body text-xs text-text-muted">
                    {item.description}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
