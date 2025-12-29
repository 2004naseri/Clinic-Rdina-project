// src/components/ui/Container.jsx
// ========================================
// REUSABLE CONTAINER COMPONENT
// ========================================
// Consistent width and padding across all sections

const Container = ({
  children,
  size = "default", // 'default' | 'small' | 'large' | 'full'
  className = "",
}) => {
  // Size variants
  const sizes = {
    small: "max-w-4xl",
    default: "max-w-[1400px]",
    large: "max-w-[1600px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        container-custom
        ${sizes[size] || sizes.default}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
