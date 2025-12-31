// src/pages/PackagesPage.jsx
// ========================================
// PACKAGES PAGE - Treatment Packages
// ========================================

import { Section, Container, SectionHeader, Button } from "../../components/ui";
import packagesData from "../../data/packagesData";

const PackagesPage = () => {
  const { hero, packages, benefits, cta } = packagesData;

  return (
    <main id="main-content" className="relative bg-background">
      {/* ====================
          1. HERO SECTION
      ==================== */}
      <Section
        background="transparent"
        padding="large"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {hero.image.src && !hero.image.placeholder?.show ? (
            <>
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
            </>
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${hero.image.placeholder.gradient}`}
            />
          )}
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center py-12 lg:py-20">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white tracking-[0.3em] uppercase text-xs font-medium mb-6 rounded-full border border-white/30">
              {hero.badge}
            </span>
            <h1 className="backdrop-blur-xl bg-white/30 p-7 rounded-xl text-4xl">
              {hero.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </Section>

      {/* ====================
          2. PACKAGES GRID
      ==================== */}
      <Section background="white" padding="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`
                  relative card group overflow-hidden
                  ${
                    pkg.featured
                      ? "border-2 border-primary shadow-xl scale-105"
                      : ""
                  }
                `}
                style={{
                  animation: "slideUp 0.5s ease-out backwards",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Badge */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-semibold uppercase tracking-wide rounded-full z-10">
                    {pkg.badge}
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <img
                    src={pkg.image.src}
                    alt={pkg.image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Tier Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-text-primary uppercase">
                    {pkg.tier}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-2xl text-text-primary mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-text-muted">{pkg.tagline}</p>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display text-primary">
                      ${pkg.price}
                    </span>
                    <span className="text-lg text-text-muted line-through">
                      ${pkg.originalPrice}
                    </span>
                  </div>
                  <div className="text-sm text-accent font-medium">
                    Save ${pkg.savings} • {pkg.duration}
                  </div>

                  {/* Includes */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                      Includes:
                    </div>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <svg
                            className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
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
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    to="/contact"
                    variant={pkg.featured ? "primary" : "outline"}
                    className="w-full justify-center mt-6"
                  >
                    Book This Package
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ====================
          3. WHY CHOOSE PACKAGES
      ==================== */}
      <Section background="surface" padding="default">
        <Container>
          <SectionHeader
            title={benefits.title}
            description="Experience the advantages of our comprehensive treatment packages."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.features.map((feature, i) => (
              <div
                key={i}
                className="text-center"
                style={{
                  animation: "slideUp 0.5s ease-out backwards",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  {feature.icon === "savings" && (
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {feature.icon === "calendar" && (
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                  {feature.icon === "results" && (
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {feature.icon === "support" && (
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="font-display text-xl text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ====================
          4. CTA SECTION
      ==================== */}
      <Section background="primary" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="heading-lg text-white mb-4">{cta.title}</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {cta.description}
            </p>
            <Button
              to={cta.buttonLink}
              variant="secondary"
              size="large"
              className="mx-auto mb-6"
            >
              {cta.buttonText}
            </Button>
            <p className="text-sm text-white/70 italic">{cta.note}</p>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default PackagesPage;
