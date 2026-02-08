// src/pages/ConditionsPage.jsx
// ========================================
// CONDITIONS PAGE - All Skin Conditions
// ========================================

import {
  Section,
  Container,
  SectionHeader,
  Card,
  Button,
} from "../../components/ui";
import conditionsData from "../../data/conditionsData";

const ConditionsPage = () => {
  const { hero, conditions, cta } = conditionsData;

  // Split into featured and other conditions
  const featuredConditions = conditions.filter((c) => c.featured);
  const otherConditions = conditions.filter((c) => !c.featured);

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
            <h1 className="backdrop-blur-3xl bg-white/30 p-7 rounded-xl text-4xl">
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
          2. FEATURED CONDITIONS
      ==================== */}
      {featuredConditions.length > 0 && (
        <Section background="white" padding="default">
          <Container>
            <SectionHeader
              title="Most Common Concerns"
              description="Our most popular treatments address these frequently seen skin conditions."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredConditions.map((condition, index) => (
                <div
                  key={condition.id}
                  style={{
                    animation: "slideUp 0.5s ease-out backwards",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <Card
                    image={condition.image}
                    title={condition.name}
                    description={condition.shortDescription}
                    link={`/conditions/${condition.id}`} // ← UNCOMMENTED!
                    linkText="View Solutions"
                    imageHeight="h-64"
                  />

                  {/* Severity Badge */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-text-muted">
                      Severity:{" "}
                      <span className="font-medium text-text-secondary">
                        {condition.severity}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-primary">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>
                        {condition.relatedTreatments.length} treatments
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ====================
          3. OTHER CONDITIONS
      ==================== */}
      {otherConditions.length > 0 && (
        <Section background="surface" padding="default">
          <Container>
            <SectionHeader
              title="Additional Conditions We Treat"
              description="Comprehensive solutions for a wide range of skin concerns."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherConditions.map((condition, index) => (
                <div
                  key={condition.id}
                  className="group"
                  style={{
                    animation: "slideUp 0.5s ease-out backwards",
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {/* Compact Card */}
                  <div className="card card-hover p-6 h-full flex flex-col">
                    {/* Icon/Letter */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="font-display text-2xl text-primary">
                        {condition.image.placeholder}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {condition.name}
                    </h3>

                    {/* Description */}
                    <p className="text-body-sm text-text-muted mb-4 flex-1">
                      {condition.shortDescription}
                    </p>

                    {/* Link */}
                    <a
                      href={`/conditions/${condition.id}`}
                      className="inline-flex items-center gap-2 text-accent text-xs font-medium uppercase tracking-wider hover:gap-3 transition-all"
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-3 h-3"
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
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ====================
          4. CTA SECTION
      ==================== */}
      <Section background="white" padding="default">
        <Container>
          <div className="bg-surface rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative h-64 lg:h-auto">
                {cta.image?.src ? (
                  <img
                    src={cta.image.src}
                    alt={cta.image.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10" />
                )}
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="heading-lg mb-4">{cta.title}</h2>
                <p className="text-body-lg text-text-secondary mb-8 leading-relaxed">
                  {cta.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    "Comprehensive skin analysis",
                    "Personalized treatment plan",
                    "Expert recommendations",
                    "No obligation required",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-primary"
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
                      </div>
                      <span className="text-sm text-text-secondary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button to={cta.buttonLink} variant="primary">
                  {cta.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default ConditionsPage;
