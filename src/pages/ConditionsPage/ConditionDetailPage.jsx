// src/pages/ConditionsPage/ConditionDetailPage.jsx
// ========================================
// CONDITION DETAIL PAGE
// ========================================

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Section,
  Container,
  SectionHeader,
  Button,
  Card,
} from "../../components/ui";
import { getConditionById, conditionsData } from "../../data/conditionsData";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
} from "lucide-react";

const ConditionDetailPage = () => {
  const { conditionId } = useParams();
  const navigate = useNavigate();
  const condition = getConditionById(conditionId);

  if (!condition) {
    return (
      <Section background="white" padding="large">
        <Container>
          <div className="text-center py-20">
            <h1 className="heading-lg mb-4">Condition Not Found</h1>
            <p className="text-text-secondary mb-8">
              The condition you're looking for doesn't exist.
            </p>
            <Button to="/conditions" variant="primary">
              View All Conditions
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  // Get related conditions (same severity or other featured conditions)
  const relatedConditions = conditionsData.conditions
    .filter(
      (c) =>
        c.id !== condition.id &&
        (c.severity === condition.severity || c.featured)
    )
    .slice(0, 3);

  return (
    <main id="main-content" className="relative bg-background">
      {/* HERO SECTION */}
      <HeroSection condition={condition} navigate={navigate} />

      {/* MAIN CONTENT */}
      <Section background="transparent" padding="default">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  About {condition.name}
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {condition.longDescription}
                </p>
              </section>

              {/* Symptoms */}
              {condition.symptoms && condition.symptoms.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    Common Symptoms
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {condition.symptoms.map((symptom, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                        style={{
                          animation: "slideUp 0.5s ease-out backwards",
                          animationDelay: `${i * 0.05}s`,
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Treatments */}
              {condition.relatedTreatments &&
                condition.relatedTreatments.length > 0 && (
                  <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10">
                    <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                      <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                      Recommended Treatments
                    </h2>
                    <p className="text-text-secondary mb-6">
                      Our specialists recommend the following treatments for{" "}
                      {condition.name.toLowerCase()}:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {condition.relatedTreatments.map((treatment, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
                          style={{
                            animation: "slideUp 0.5s ease-out backwards",
                            animationDelay: `${i * 0.05}s`,
                          }}
                        >
                          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-5 h-5 text-accent"
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
                          </div>
                          <span className="font-medium text-text-primary">
                            {treatment}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <Button to="/treatments" variant="primary">
                        View All Treatments
                      </Button>
                    </div>
                  </section>
                )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="sticky top-24 bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 font-display">
                  Treatment Information
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Condition Severity</span>
                    <span className="font-semibold">{condition.severity}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Treatment Options</span>
                    <span className="font-semibold">
                      {condition.relatedTreatments?.length || 0}+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Consultation</span>
                    <span className="font-semibold">Free</span>
                  </div>
                </div>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="large"
                  className="w-full justify-center bg-white text-primary hover:bg-white/90 shadow-lg mb-4"
                  icon={<Calendar className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Book Consultation
                </Button>

                <p className="text-center text-white/80 text-sm">
                  Get personalized treatment plan
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-lg">
                <h3 className="text-xl font-bold text-text-primary mb-6 font-display">
                  Why Choose Radina?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Expert skin assessment",
                    "Personalized treatment plans",
                    "Advanced technology",
                    "Medical-grade products",
                    "Proven results",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-text-primary mb-4 font-display">
                  Have Questions?
                </h3>
                <p className="text-text-secondary mb-6">
                  Our team is here to help you understand your treatment
                  options.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+447795976868"
                    className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">07795 976868</span>
                  </a>
                  <a
                    href="https://wa.me/447882244808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* RELATED CONDITIONS */}
      {relatedConditions.length > 0 && (
        <Section background="surface" padding="default">
          <Container>
            <SectionHeader
              title="Related Conditions"
              description="You might also be interested in"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedConditions.map((relatedCondition, index) => (
                <div
                  key={relatedCondition.id}
                  style={{
                    animation: "slideUp 0.5s ease-out backwards",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <Card
                    image={relatedCondition.image}
                    title={relatedCondition.name}
                    description={relatedCondition.shortDescription}
                    link={`/conditions/${relatedCondition.id}`}
                    linkText="Learn More"
                    imageHeight="h-64"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA SECTION */}
      <Section background="primary" padding="default">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="heading-lg text-white mb-4">
              Ready to Address Your Skin Concerns?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Schedule a complimentary consultation with our expert team. We'll
              assess your skin and recommend the most effective treatment plan
              for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/contact");
                }}
                variant="secondary"
                size="large"
                className="bg-white text-primary hover:bg-white/90"
              >
                Book Free Consultation
              </Button>
              <Button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/conditions");
                }}
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View All Conditions
              </Button>
            </div>

            <p className="text-sm text-white/70 italic mt-6">
              Expert assessment • Personalized plan • Proven results
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
};

// ==========================================
// HERO SECTION
// ==========================================
const HeroSection = ({ condition, navigate }) => {
  return (
    <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {condition.image.src &&
        !condition.image.src.includes("/images/conditions") ? (
          <>
            <img
              src={condition.image.src}
              alt={condition.image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-rose-900/60" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="font-display text-[20rem] text-white">
                {condition.image.placeholder}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          {/* Back Button */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/conditions");
            }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider font-medium">
              Back to Conditions
            </span>
          </button>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display">
            {condition.name}
          </h1>

          {/* Short Description */}
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            {condition.shortDescription}
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-white/80 text-sm">Severity:</span>
              <span className="text-white font-medium">
                {condition.severity}
              </span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-white/80 text-sm">Treatment Options:</span>
              <span className="text-white font-medium">
                {condition.relatedTreatments?.length || 0}+
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 text-white fill-current"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ConditionDetailPage;
