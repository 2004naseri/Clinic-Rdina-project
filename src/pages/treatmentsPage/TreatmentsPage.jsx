// src/pages/TreatmentsPage.jsx
// ========================================
// TREATMENTS PAGE - All Treatments
// ========================================

import { useState } from "react";
import {
  Section,
  Container,
  SectionHeader,
  Card,
  Button,
} from "../../components/ui";
import treatmentsData, {
  getTreatmentsByCategory,
} from "../../data/treatmentsData";

const TreatmentsPage = () => {
  const { hero, categories, cta } = treatmentsData;
  const [activeCategory, setActiveCategory] = useState("all");

  // Get filtered treatments based on active category
  const filteredTreatments = getTreatmentsByCategory(activeCategory);

  return (
    <main id="main-content" className="relative bg-background">
      {/* ====================
          1. HERO SECTION WITH IMAGE
      ==================== */}
      <Section
        background="transparent"
        padding="large"
        className="relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {hero.image.src && !hero.image.placeholder?.show ? (
            <>
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "block";
                }}
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
            </>
          ) : (
            // Gradient placeholder
            <div
              className={`absolute inset-0 bg-gradient-to-br ${hero.image.placeholder.gradient}`}
            />
          )}
        </div>

        {/* Content */}
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center py-12 lg:py-20">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white tracking-[0.3em] uppercase text-xs font-medium mb-6 rounded-full border border-white/30">
              {hero.badge}
            </span>
            <h1 className="heading-xl text-orange-300 bg-gray-300 backdrop:blur-3xl mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </div>
        </Container>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </Section>

      {/* ====================
          2. CATEGORY FILTERS
      ==================== */}
      <Section background="white" padding="small">
        <Container>
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full font-body text-sm font-medium
                  transition-all duration-300 ease-out
                  ${
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary"
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="text-center mt-6">
            <p className="text-sm text-text-muted">
              Showing {filteredTreatments.length} treatment
              {filteredTreatments.length !== 1 ? "s" : ""}
            </p>
          </div>
        </Container>
      </Section>

      {/* ====================
          3. TREATMENTS GRID
      ==================== */}
      <Section background="white" padding="default">
        <Container>
          {filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment, index) => (
                <div
                  key={treatment.id}
                  style={{
                    animation: "slideUp 0.5s ease-out backwards",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <Card
                    image={treatment.image}
                    badge={treatment.badge}
                    title={treatment.name}
                    description={treatment.shortDescription}
                    link={`/treatments/${treatment.id}`}
                    linkText="View Details"
                    imageHeight="h-64"
                  />

                  {/* Price & Duration */}
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-text-muted">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{treatment.duration}</span>
                    </div>
                    <div className="font-medium text-primary">
                      {treatment.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // No results
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">
                No treatments found in this category.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* ====================
          4. CTA SECTION
      ==================== */}
      <Section background="primary" padding="default">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="heading-lg text-white mb-6">{cta.title}</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {cta.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {cta.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 text-white/90 text-sm"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0"
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
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              to={cta.buttonLink}
              variant="secondary"
              size="large"
              className="mx-auto"
            >
              {cta.buttonText}
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default TreatmentsPage;
