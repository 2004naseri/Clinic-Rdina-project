// src/pages/treatmentsPage/TreatmentsPage.jsx
// ═══════════════════════════════════════════════════════
// TREATMENTS LISTING  —  Radina Aesthetic Brand
// Palette: secondary (#430568) · primary (#b17bbc) · accent (#d4a574)
// Fonts: font-display (Cormorant Garamond) · font-body (Montserrat)
// No Section/Container/Button UI components
// ═══════════════════════════════════════════════════════

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import treatmentsData, {
  getTreatmentsByCategory,
} from "../../data/treatmentsData";

const TreatmentsPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const hero = treatmentsData?.hero;
  const categories = treatmentsData?.categories || [];
  const cta = treatmentsData?.cta;

  const filteredTreatments = getTreatmentsByCategory
    ? getTreatmentsByCategory(activeCategory)
    : treatmentsData?.treatments || [];

  const handleTreatmentClick = (id) => {
    navigate(`/treatments/${id}`);
  };

  return (
    <div className="bg-background overflow-x-hidden">
      {/* ══════════════════════════════════════
          HERO  —  Full bleed, giant title
      ══════════════════════════════════════ */}
      <section className="relative h-[80vh] min-h-[520px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          {hero?.image?.src ? (
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="w-full h-full object-cover"
              onError={(e) => e.target.classList.add("hidden")}
            />
          ) : null}
          {/* Brand purple gradient over image */}
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-secondary via-secondary/60 to-secondary/25"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r
                          from-secondary/70 via-transparent to-transparent"
          />
        </div>

        {/* Vertical label */}
        <div
          className="absolute right-10 top-1/3 z-10 hidden lg:flex
                        flex-col items-center gap-3"
        >
          <div className="w-px h-14 bg-white/15" />
          <span
            className="font-body text-[7px] tracking-[0.5em] uppercase
                           text-white/25 [writing-mode:vertical-rl]"
          >
            Radina Aesthetic
          </span>
          <div className="w-px h-14 bg-white/15" />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12 pb-16 w-full">
          {hero?.badge && (
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-accent" />
              <span
                className="font-body text-[8px] tracking-[0.45em]
                               uppercase text-accent font-semibold"
              >
                {hero.badge}
              </span>
            </div>
          )}

          <h1
            className="font-display font-light text-white leading-[0.92]
                       tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 9vw, 128px)" }}
          >
            {hero?.title || "Our Treatments"}
          </h1>

          <p
            className="font-body text-[13px] leading-[1.9] text-white/60
                         max-w-[520px]"
          >
            {hero?.description}
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-t from-background to-transparent z-10"
        />
      </section>

      {/* ══════════════════════════════════════
          CATEGORY FILTER  —  Clean pill tabs
      ══════════════════════════════════════ */}
      <section
        className="bg-background py-12 sticky top-0 z-30
                          border-b border-border shadow-sm"
      >
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-body text-[9px] font-semibold tracking-[0.25em]
                             uppercase px-6 py-3 transition-all duration-300
                             border cursor-pointer
                             ${
                               activeCategory === cat.id
                                 ? "bg-secondary text-white border-secondary"
                                 : "bg-transparent text-text-muted border-border hover:border-secondary/40 hover:text-secondary"
                             }`}
              >
                {cat.name}
              </button>
            ))}

            {/* Count pill */}
            <div className="ml-auto flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-body text-[10px] text-text-muted">
                {filteredTreatments.length} treatment
                {filteredTreatments.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TREATMENTS GRID
          Each card: image top, content bottom
          No rounded corners — clean editorial squares
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          {filteredTreatments.length > 0 ? (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px
                            bg-border"
            >
              {filteredTreatments.map((treatment, index) => (
                <div
                  key={treatment.id}
                  onClick={() => handleTreatmentClick(treatment.id)}
                  className="group cursor-pointer bg-white hover:bg-surface
                             transition-colors duration-300 flex flex-col"
                  style={{
                    animation: "slideUp 0.5s ease-out backwards",
                    animationDelay: `${index * 0.07}s`,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-secondary/5">
                    {treatment.image?.src ? (
                      <img
                        src={treatment.image.src}
                        alt={treatment.image.alt || treatment.name}
                        className="w-full h-full object-cover transition-transform
                                   duration-700 group-hover:scale-[1.06]"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      /* Placeholder with giant initial */
                      <div
                        className="w-full h-full bg-gradient-to-br
                                       from-secondary/8 to-primary/8
                                       flex items-center justify-center"
                      >
                        <span
                          className="font-display text-[120px] font-light
                                          text-secondary/10 leading-none select-none"
                        >
                          {treatment.name?.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Overlay on hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t
                                    from-secondary/90 via-secondary/30 to-transparent
                                    opacity-0 group-hover:opacity-100
                                    transition-opacity duration-500
                                    flex items-end justify-center pb-7"
                    >
                      <div
                        className="flex items-center gap-2 font-body text-[9px]
                                      font-bold tracking-[0.3em] uppercase text-white"
                      >
                        View Treatment
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-1
                                        transition-transform duration-300"
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
                    </div>

                    {/* Badge */}
                    {treatment.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span
                          className="font-body text-[8px] font-bold
                                          tracking-[0.25em] uppercase px-3 py-1.5
                                          bg-accent text-secondary"
                        >
                          {treatment.badge}
                        </span>
                      </div>
                    )}

                    {/* Duration pill */}
                    {treatment.duration && (
                      <div className="absolute bottom-4 right-4 z-10">
                        <span
                          className="font-body text-[8px] tracking-[0.2em]
                                          uppercase px-3 py-1.5 bg-white/90
                                          backdrop-blur-sm text-text-primary"
                        >
                          {treatment.duration}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3
                      className="font-display font-normal text-text-primary
                                  group-hover:text-secondary transition-colors
                                  duration-300 leading-tight mb-3"
                      style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
                    >
                      {treatment.name}
                    </h3>

                    <p
                      className="font-body text-[12px] leading-[1.85]
                                   text-text-muted mb-5 flex-1 line-clamp-3"
                    >
                      {treatment.shortDescription}
                    </p>

                    {/* Divider */}
                    <div
                      className="h-px bg-gradient-to-r from-transparent
                                     via-border to-transparent mb-5"
                    />

                    {/* Price + sub-count row */}
                    <div className="flex items-end justify-between">
                      <div>
                        <p
                          className="font-body text-[8px] tracking-[0.25em]
                                       uppercase text-text-muted mb-1"
                        >
                          Starting from
                        </p>
                        <p
                          className="font-display text-[22px] font-normal
                                       text-secondary"
                        >
                          {treatment.price || "On consultation"}
                        </p>
                      </div>

                      {treatment.subTreatments?.length > 0 && (
                        <div className="text-right">
                          <p
                            className="font-body text-[8px] tracking-[0.2em]
                                         uppercase text-text-muted mb-1"
                          >
                            Includes
                          </p>
                          <p
                            className="font-body text-[11px] font-semibold
                                         text-primary"
                          >
                            {treatment.subTreatments.length} treatments
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom accent bar */}
                    <div
                      className="mt-6 h-0.5 bg-gradient-to-r
                                     from-secondary/0 via-secondary/0 to-secondary/0
                                     group-hover:from-secondary group-hover:via-primary
                                     group-hover:to-accent
                                     transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-28">
              <p className="font-display text-[40px] font-light text-secondary/20 mb-4">
                No results
              </p>
              <p className="font-body text-[12px] text-text-muted mb-8">
                Try selecting a different category
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="btn-secondary"
              >
                View All Treatments
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA  —  Brand gradient, gold accents
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br
                        from-secondary via-secondary-dark to-primary-dark"
        />
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px]
                        rounded-full border border-white/5 pointer-events-none"
        />
        <div
          className="absolute -bottom-40 -left-20 w-[400px] h-[400px]
                        rounded-full border border-white/4 pointer-events-none"
        />

        {/* Ghost letter */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2
                        font-display font-light text-white/[0.04] leading-none
                        select-none pointer-events-none hidden xl:block"
          style={{ fontSize: "380px" }}
        >
          R
        </div>

        {/* Gold shimmer */}
        <div
          className="absolute top-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />

        <div
          className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12
                        py-28 lg:py-36 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-10 h-px bg-accent/40" />
            <span
              className="font-body text-[7px] tracking-[0.55em] uppercase
                             text-accent/70 font-semibold"
            >
              Begin Your Journey
            </span>
            <span className="w-10 h-px bg-accent/40" />
          </div>

          <h2
            className="font-display font-light text-white leading-[1.0] mb-6"
            style={{ fontSize: "clamp(34px, 6vw, 80px)" }}
          >
            {cta?.title || "Ready to Begin?"}
          </h2>

          <p
            className="font-body text-[13px] leading-[2] text-white/50
                         max-w-[420px] mx-auto mb-12"
          >
            {cta?.description ||
              "Book your free consultation with Dr. Hussaini today."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              to={cta?.buttonLink || "/contact"}
              className="inline-block px-12 py-4 bg-accent text-secondary
                         font-body text-[9px] font-bold tracking-[0.35em] uppercase
                         hover:bg-white transition-colors duration-300"
            >
              {cta?.buttonText || "Book Free Consultation"}
            </Link>
            <Link
              to="/treatments"
              onClick={() => setActiveCategory("all")}
              className="inline-flex items-center gap-3 px-10 py-4
                         border border-white/20 text-white/70
                         font-body text-[9px] font-bold tracking-[0.25em] uppercase
                         hover:border-accent hover:text-accent
                         transition-all duration-300"
            >
              Browse All Treatments
            </Link>
          </div>

          {/* Feature pills */}
          {cta?.features && (
            <div
              className="flex flex-wrap items-center justify-center gap-6 mt-10
                             pt-10 border-t border-white/10"
            >
              {cta.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg
                    className="w-3.5 h-3.5 text-accent shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span
                    className="font-body text-[10px] text-white/50
                                    tracking-[0.15em] uppercase"
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
      </section>
    </div>
  );
};

export default TreatmentsPage;
