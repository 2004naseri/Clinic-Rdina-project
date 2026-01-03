// src/pages/HomePage.jsx
// ========================================
// HOMEPAGE - FIXED IMAGE DISPLAY
// ========================================
// Now images show correctly in hero and philosophy sections!

import { Link } from "react-router-dom";
import {
  Section,
  Container,
  SectionHeader,
  Card,
  Button,
  CalendarIcon,
} from "../../components/ui";
import homePageData from "../../data/homePageData";

const HomePage = () => {
  const { hero, featuredTreatments, philosophy, cta } = homePageData;

  return (
    <main id="main-content" className="relative bg-background">
      {/* ====================
          1. HERO SECTION 
      ==================== */}
      // HomePage Hero Section - Text Over Image Style //
      ======================================== // Replace your current HomePage
      hero with this // ========================================
      <Section
        background="transparent"
        padding="none"
        className="relative overflow-hidden"
      >
        {/* Full-width Background Image with Gradient Overlay */}
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

        {/* Content Overlay */}
        <Container className="relative z-10">
          <div className="min-h-[85vh] lg:min-h-[90vh] flex items-center">
            <div className="max-w-3xl mx-auto text-center py-12 lg:py-20">
              {/* Badge */}
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white tracking-[0.3em] uppercase text-xs font-medium mb-6 rounded-full border border-white/30 animate-fade-in">
                {hero.badge}
              </span>

              {/* Title */}
              <h1
                className="text-black  mb-6 animate-slide-up backdrop-blur-xl bg-white/30 p-7 rounded-xl text-4xl"
                style={{ animationDelay: "0.1s" }}
              >
                {hero.title}
              </h1>

              {/* Description */}
              <p
                className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                {hero.description}
              </p>

              {/* Buttons */}
              <div
                className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                {hero.buttons.map((btn, i) => (
                  <Button
                    key={i}
                    to={btn.link}
                    variant={btn.variant}
                    size="large"
                    icon={i === 1 ? <CalendarIcon /> : null}
                    className={
                      btn.variant === "primary"
                        ? "bg-accent text-white hover:bg-accent-dark"
                        : "border-2 border-white text-white hover:bg-white hover:text-primary"
                    }
                  >
                    {btn.text}
                  </Button>
                ))}
              </div>

              {/* Stats Row - Centered */}
              <div
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                {hero.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-4xl lg:text-5xl text-white mb-2 drop-shadow-lg">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm text-white/80 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom Gradient Fade to White */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
      </Section>
      {/* ====================
          2. FEATURED TREATMENTS
      ==================== */}
      <Section background="white">
        <Container>
          <SectionHeader
            title={featuredTreatments.title}
            description={featuredTreatments.description}
            action={{
              label: featuredTreatments.viewAllLink.text,
              link: featuredTreatments.viewAllLink.link,
            }}
          />

          {/* Treatment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTreatments.treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                style={{
                  animation: "slideUp 0.6s ease-out backwards",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Card
                  image={treatment.image}
                  badge={treatment.badge}
                  title={treatment.title}
                  description={treatment.description}
                  link={treatment.link}
                  linkText="Learn More"
                  imageHeight="h-72"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>
      {/* ====================
          3. PHILOSOPHY SECTION - FIXED
      ==================== */}
      <Section background="surface">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side - FIXED */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
                {/* Show image if src exists and has valid path, otherwise show placeholder */}
                {philosophy.image.src &&
                philosophy.image.src.length > 0 &&
                !philosophy.image.placeholder?.show ? (
                  // REAL IMAGE
                  <img
                    src={philosophy.image.src}
                    alt={philosophy.image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If image fails to load, hide it and show gradient
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "block";
                    }}
                  />
                ) : null}

                {/* PLACEHOLDER GRADIENT (fallback) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${philosophy.image.placeholder.gradient}`}
                  style={{
                    display:
                      philosophy.image.src &&
                      !philosophy.image.placeholder?.show
                        ? "none"
                        : "block",
                  }}
                />

                {/* Decorative Frame */}
                <div className="absolute inset-4 border-2 border-white/60 rounded-2xl" />
              </div>

              {/* Floating Stats Card - Moved to bottom left to not cover image */}
              <div className="absolute -bottom-8 -left-8 w-64 bg-white rounded-2xl shadow-xl p-8 hidden lg:block">
                <div className="text-center">
                  <div className="font-display text-5xl text-primary mb-2">
                    {philosophy.statsCard.number}
                  </div>
                  <div className="text-body-sm uppercase tracking-widest text-text-muted">
                    {philosophy.statsCard.label}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(philosophy.statsCard.rating.stars)].map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-accent fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        )
                      )}
                    </div>
                    <p className="text-xs text-text-muted mt-2">
                      {philosophy.statsCard.rating.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <span className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-4 block">
                  {philosophy.badge}
                </span>
                <h2 className="heading-lg mb-6">
                  {philosophy.title.text}{" "}
                  <span className="italic font-light text-primary">
                    {philosophy.title.highlight}
                  </span>
                </h2>
                <p className="text-body-lg leading-relaxed">
                  {philosophy.description}
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-4">
                {philosophy.features.map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-primary"
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
                    <div>
                      <div className="font-body font-medium text-text-primary mb-1">
                        {feature.title}
                      </div>
                      <div className="text-body-sm text-text-muted">
                        {feature.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <Button
                to={philosophy.button.link}
                variant={philosophy.button.variant}
              >
                {philosophy.button.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      {/* ====================
          4. CTA SECTION
      ==================== */}
      <Section background="white">
        <Container>
          <div className="relative bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-16 lg:py-24 px-8 lg:px-16 rounded-[2.5rem] shadow-elegant overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="heading-xl text-white mb-6">{cta.title}</h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed">
                {cta.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {cta.buttons.map((btn, i) => (
                  <Link
                    key={i}
                    to={btn.link}
                    className={`
                      px-10 py-4 rounded-full uppercase text-xs tracking-[0.2em] 
                      font-semibold transition-all shadow-lg hover:shadow-xl inline-block
                      ${
                        btn.variant === "primary-white"
                          ? "bg-white text-primary hover:bg-secondary-light"
                          : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                      }
                    `}
                  >
                    {btn.text}
                  </Link>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-white/20">
                {cta.trustIndicators.map((item, i, arr) => (
                  <>
                    <div key={i} className="text-center">
                      <div className="text-white/70 text-xs uppercase tracking-widest mb-2">
                        {item.label}
                      </div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px h-8 bg-white/20" />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default HomePage;
