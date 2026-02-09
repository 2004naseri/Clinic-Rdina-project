// src/pages/TreatmentsPage/TreatmentsPage.jsx
// ========================================
// FIXED TREATMENTS PAGE - Works with any data structure
// Just COPY and REPLACE your TreatmentsPage.jsx
// ========================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section, Container, Button } from "../../components/ui";
import treatmentsData, {
  getTreatmentsByCategory,
} from "../../data/treatmentsData";
import {
  Clock,
  Zap,
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const TreatmentsPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  // SAFE data extraction with fallbacks
  const hero = treatmentsData?.hero || {
    badge: "Our Services",
    title: "Advanced Aesthetic Treatments",
    description: "Discover our treatments",
    image: {
      src: "",
      alt: "",
      placeholder: { show: true, gradient: "from-primary/20 to-accent/20" },
    },
  };

  const categories = treatmentsData?.categories || [
    { id: "all", name: "All Treatments" },
  ];

  const cta = treatmentsData?.cta || {
    title: "Ready to Begin?",
    description: "Book your consultation today",
    buttonText: "Book Now",
    buttonLink: "/contact",
    features: [
      "Expert care",
      "Proven results",
      "Safe treatments",
      "Personalized plans",
    ],
  };

  // Get filtered treatments safely
  const filteredTreatments = getTreatmentsByCategory
    ? getTreatmentsByCategory(activeCategory)
    : treatmentsData?.treatments || [];

  const handleTreatmentClick = (treatmentId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/treatments/${treatmentId}`);
  };

  return (
    <main id="main-content" className="relative bg-background">
      {/* HERO SECTION */}
      <Section
        background="transparent"
        padding="large"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {hero.image?.src && !hero.image.placeholder?.show ? (
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
              className={`absolute inset-0 bg-gradient-to-br ${hero.image?.placeholder?.gradient || "from-primary/20 to-accent/20"}`}
            />
          )}
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center py-12 lg:py-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white tracking-[0.3em] uppercase text-xs font-medium mb-6 rounded-full border border-white/30 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              {hero.badge}
            </span>
            <h1 className="backdrop-blur-xl bg-white/30 p-7 rounded-xl text-4xl lg:text-5xl font-bold text-black mb-6 animate-slide-up">
              {hero.title}
            </h1>
            <p
              className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              {hero.description}
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </Section>

      {/* CATEGORY FILTERS */}
      <Section background="white" padding="default">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Browse By Category
              </h2>
              <p className="text-text-muted">
                Find the perfect treatment for your needs
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    relative px-8 py-4 rounded-2xl font-medium text-sm
                    transition-all duration-300 ease-out
                    ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-xl scale-105"
                        : "bg-white text-text-secondary hover:bg-primary/5 hover:text-primary border-2 border-border hover:border-primary/30"
                    }
                  `}
                >
                  {activeCategory === category.id && (
                    <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                  )}
                  <span className="relative z-10">{category.name}</span>
                </button>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <p className="text-sm font-medium text-text-primary">
                  {filteredTreatments.length} treatment
                  {filteredTreatments.length !== 1 ? "s" : ""} available
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* TREATMENTS GRID */}
      <Section background="surface" padding="large">
        <Container>
          {filteredTreatments && filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment, index) => (
                <div
                  key={treatment.id}
                  onClick={() => handleTreatmentClick(treatment.id)}
                  className="group cursor-pointer"
                  style={{
                    animation: "slideUp 0.6s ease-out backwards",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2">
                    {/* Badge */}
                    {treatment.badge && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-accent to-accent-dark text-white text-xs font-bold uppercase tracking-wide rounded-full shadow-lg">
                          <Star className="w-3 h-3 fill-white" />
                          {treatment.badge}
                        </div>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      {treatment.image?.src &&
                      !treatment.image.src.includes("placeholder") ? (
                        <>
                          <img
                            src={treatment.image.src}
                            alt={treatment.image.alt || treatment.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary-light/20 group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-display text-9xl text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                              {treatment.image?.placeholder ||
                                treatment.name?.charAt(0) ||
                                "T"}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                        <div className="flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-semibold text-sm uppercase tracking-wider shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Quick Info Pills */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10">
                        {treatment.duration && (
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-text-primary">
                            <Clock className="w-3 h-3 text-primary" />
                            {treatment.duration}
                          </div>
                        )}
                        {treatment.downtime && (
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-text-primary">
                            <Zap className="w-3 h-3 text-accent" />
                            {treatment.downtime}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display text-2xl text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {treatment.name}
                      </h3>

                      <p className="text-sm text-text-muted mb-4 flex-1 line-clamp-3 leading-relaxed">
                        {treatment.shortDescription}
                      </p>

                      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-text-muted mb-1">
                            Starting from
                          </div>
                          <div className="text-2xl font-bold text-primary">
                            {treatment.price || "Contact us"}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      {treatment.resultsTime && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-xs text-text-muted">
                            <TrendingUp className="w-4 h-4 text-secondary" />
                            <span>
                              Results:{" "}
                              <strong className="text-text-primary">
                                {treatment.resultsTime}
                              </strong>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary group-hover:h-2 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-surface rounded-full mb-6">
                <Sparkles className="w-10 h-10 text-text-muted" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                No Treatments Found
              </h3>
              <p className="text-text-muted mb-8">
                Try selecting a different category
              </p>
              <Button
                onClick={() => setActiveCategory("all")}
                variant="primary"
              >
                View All Treatments
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section background="white" padding="large">
        <Container>
          <div className="relative bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-16 lg:py-20 px-8 lg:px-16 rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {cta.title}
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                {cta.description}
              </p>

              {/* Features - SAFE mapping */}
              {cta.features && cta.features.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {cta.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
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
                      <span className="text-sm font-medium text-white/90 text-center">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <Button
                to={cta.buttonLink}
                size="large"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-12 py-6"
              >
                {cta.buttonText}
              </Button>

              <p className="text-white/70 text-sm mt-6 italic">
                Free consultation • No obligation • Expert advice
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default TreatmentsPage;
