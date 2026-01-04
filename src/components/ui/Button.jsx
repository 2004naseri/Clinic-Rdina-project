// src/components/ui/Button.jsx
// ========================================
// REUSABLE BUTTON COMPONENT
// ========================================
// All button styles in one component

import { Link, useNavigate } from "react-router-dom";

const Button = ({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = "default", // 'small' | 'default' | 'large'
  to, // Link destination
  href, // External link
  onClick,
  icon,
  iconPosition = "right", // 'left' | 'right'
  fullWidth = false,
  disabled = false,
  className = "",
  type = "button",
}) => {
  const navigate = useNavigate();
  function handleClick(path) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Changed from "instant" to "auto"
    });
    navigate(path);
  }
  // Variant styles
  const variants = {
    primary: `
      bg-primary text-white hover:bg-primary-dark
      shadow-sm hover:shadow-md
    `,
    secondary: `
      bg-secondary text-neutral-50 hover:bg-secondary-dark
      shadow-sm hover:shadow-md
    `,
    outline: `
      bg-transparent border-2 border-primary text-primary
      hover:bg-primary hover:text-white
    `,
    ghost: `
      bg-transparent text-primary hover:bg-primary-50
    `,
  };

  // Size styles
  const sizes = {
    small: "px-4 py-2 text-xs",
    default: "px-6 py-3.5 text-sm",
    large: "px-8 py-4 text-base",
  };

  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-body font-medium tracking-wide uppercase rounded-full
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 active:translate-y-0
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  // Icon component
  const Icon = () => {
    if (!icon) return null;

    const iconSizes = {
      small: "w-3 h-3",
      default: "w-4 h-4",
      large: "w-5 h-5",
    };

    return (
      <span
        className={`${iconSizes[size]} transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </span>
    );
  };

  // Content
  const Content = () => (
    <>
      {icon && iconPosition === "left" && <Icon />}
      <span>{children}</span>
      {icon && iconPosition === "right" && <Icon />}
    </>
  );

  // Render as Link (internal)
  if (to && !disabled) {
    return (
      <button
        onClick={() => handleClick(to)}
        className={`${baseClasses} group`}
      >
        <Content />
      </button>
    );
  }

  // Render as anchor (external)
  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} group`}
      >
        <Content />
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} group`}
    >
      <Content />
    </button>
  );
};

// Common icons as helper components
export const CalendarIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-full h-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export const ArrowIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-full h-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export const PhoneIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className="w-full h-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

export default Button;
