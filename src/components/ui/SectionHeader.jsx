// src/components/ui/SectionHeader.jsx
// ========================================
// REUSABLE SECTION HEADER
// ========================================
// Use for section titles and descriptions

import { Link } from "react-router-dom";

const SectionHeader = ({
  badge,
  title,
  description,
  align = "left", // 'left' | 'center'
  action,
  className = "",
}) => {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  return (
    <div
      className={`
        flex flex-col gap-4 mb-12 lg:mb-16
        ${alignments[align]}
        ${className}
      `}
    >
      {/* Optional Badge */}
      {badge && (
        <span className="text-accent tracking-[0.3em] uppercase text-xs font-medium">
          {badge}
        </span>
      )}

      {/* Title and Action Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
        <div
          className={`flex flex-col gap-4 ${
            align === "center" ? "items-center" : ""
          }`}
        >
          {/* Title */}
          <h2 className="heading-xl max-w-3xl">{title}</h2>

          {/* Description */}
          {description && (
            <p
              className={`
                text-body-lg text-text-secondary max-w-2xl
                ${align === "center" ? "text-center" : ""}
              `}
            >
              {description}
            </p>
          )}
        </div>

        {/* Optional Action Link */}
        {action && (
          <Link
            to={action.link}
            className="group flex items-center gap-2 text-primary font-body text-sm 
                     tracking-widest uppercase hover:gap-4 transition-all flex-shrink-0"
          >
            {action.label}
            <svg
              className="w-4 h-4"
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
          </Link>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
