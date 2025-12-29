// src/components/ui/Section.jsx
// ========================================
// REUSABLE SECTION COMPONENT
// ========================================
// Use this for all page sections

const Section = ({
  children,
  background = "white", // 'white' | 'surface' | 'primary' | 'gradient'
  padding = "default", // 'none' | 'small' | 'default' | 'large'
  className = "",
  id,
}) => {
  // Background variants
  const backgrounds = {
    white: "bg-white",
    surface: "bg-surface",
    primary: "bg-primary text-white",
    gradient:
      "bg-gradient-to-br from-primary via-primary-dark to-accent text-white",
    transparent: "bg-transparent",
  };

  // Padding variants
  const paddings = {
    none: "",
    small: "py-12 lg:py-16",
    default: "py-20 lg:py-28",
    large: "py-28 lg:py-36",
  };

  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        ${backgrounds[background] || backgrounds.white}
        ${paddings[padding] || paddings.default}
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Section;
