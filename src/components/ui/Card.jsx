// src/components/ui/Card.jsx
// ========================================
// REUSABLE CARD COMPONENT - FIXED
// ========================================
// Now properly handles both images and placeholders

import { Link, useNavigate } from "react-router-dom";

const Card = ({
  image,
  badge,
  title,
  description,
  link,
  linkText = "Learn More",
  variant = "default",
  className = "",
  imageHeight = "h-64",
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
  const CardContent = () => (
    <>
      {/* Image Container */}
      {image && (
        <div
          className={`
            relative ${imageHeight} bg-surface rounded-2xl mb-6 overflow-hidden
            group-hover:shadow-lg transition-all duration-500
          `}
        >
          {/* Check if real image exists */}
          {image.src &&
          image.src !== "" &&
          !image.src.includes("placeholder") ? (
            // Real Image
            <img
              src={image.src}
              alt={image.alt || title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            // Placeholder
            <>
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary-light/10 group-hover:scale-110 transition-transform duration-700" />

              {/* Letter/Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-8xl text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                  {image.placeholder || title?.[0] || "R"}
                </span>
              </div>
            </>
          )}

          {/* Hover Overlay with CTA */}
          {link && (
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <span className="px-6 py-2.5 bg-white text-primary rounded-full text-xs uppercase tracking-wider font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {linkText}
              </span>
            </div>
          )}

          {/* Optional Badge */}
          {badge && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-primary uppercase tracking-wide">
              {badge}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="space-y-3">
        {title && (
          <h3 className="heading-sm group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-body-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        )}

        {/* Link Arrow */}
        {link && (
          <div className="flex items-center gap-2 text-accent font-medium text-xs tracking-wider uppercase pt-2">
            <span>{linkText}</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  // Wrapper
  const cardClasses = `
    group card card-hover
    ${variant === "featured" ? "border-2 border-primary/20" : ""}
    ${variant === "minimal" ? "border-none shadow-none hover:shadow-md" : ""}
    ${className}
  `;

  // If there's a link, make the whole card clickable
  if (link) {
    return (
      <button onClick={() => handleClick(link)} className={cardClasses}>
        <CardContent />
      </button>
    );
  }

  // Otherwise, just return a div
  return (
    <div className={cardClasses}>
      <CardContent />
    </div>
  );
};

export default Card;
