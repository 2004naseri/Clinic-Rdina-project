// src/pages/TreatmentDetailPage/TreatmentDetailPage.jsx
// ========================================
// TREATMENT DETAIL PAGE - STUNNING REDESIGN
// ========================================

import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Section, Container, Button } from "../../components/ui";
import { getTreatmentById } from "../../data/treatmentsData";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  Sparkles,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
} from "lucide-react";

const TreatmentDetailPage = () => {
  const { treatmentId } = useParams();
  const treatment = getTreatmentById(treatmentId);
  const navigate = useNavigate();

  // If treatment not found, redirect to treatments page
  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  return (
    <main
      id="main-content"
      className="relative bg-gradient-to-b from-rose-50 via-white to-purple-50"
    >
      {/* ====================
          1. HERO SECTION - STUNNING
      ==================== */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {treatment.image.src &&
          !treatment.image.src.includes("placeholder") ? (
            <>
              <img
                src={treatment.image.src}
                alt={treatment.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-rose-900/60" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-rose-600" />
          )}
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            {/* Back Button */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/treatments");
              }}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm uppercase tracking-wider font-medium">
                Back to Treatments
              </span>
            </button>

            {/* Badge */}
            {treatment.badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm font-medium">
                  {treatment.badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display">
              {treatment.name}
            </h1>

            {/* Short Description */}
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {treatment.shortDescription}
            </p>

            {/* Quick Info Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <Clock className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  {treatment.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <DollarSign className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  {treatment.price}
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

      {/* ====================
          2. MAIN CONTENT
      ==================== */}
      <Section background="transparent" padding="default">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  Overview
                </h2>
                <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-4">
                  {treatment.longDescription
                    .split("\n\n")
                    .map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-text-secondary leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </section>

              {/* How It Works */}
              {/* ✅ FIXED VERSION */}
              {treatment.howItWorks && (
                <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10">
                  <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    {treatment.howItWorks.title || "How It Works"}
                  </h2>
                  <p className="text-text-secondary leading-relaxed text-lg">
                    {treatment.howItWorks.description}
                  </p>
                </section>
              )}

              {/* Treatment Areas */}
              {treatment.treatmentAreas && (
                <section>
                  <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    Treatment Areas
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {treatment.treatmentAreas.map((area, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{area}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Benefits */}
              {treatment.benefits && (
                <section>
                  <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    Benefits
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {treatment.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                        style={{
                          animation: "slideUp 0.5s ease-out backwards",
                          animationDelay: `${i * 0.05}s`,
                        }}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-text-secondary pt-1">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              {treatment.faqs && treatment.faqs.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {treatment.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                        style={{
                          animation: "slideUp 0.5s ease-out backwards",
                          animationDelay: `${i * 0.1}s`,
                        }}
                      >
                        <h3 className="text-xl font-bold text-text-primary mb-3 font-display">
                          {faq.question}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
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
                    <span className="text-white/80">Duration</span>
                    <span className="font-semibold">{treatment.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/20">
                    <span className="text-white/80">Price</span>
                    <span className="font-semibold">{treatment.price}</span>
                  </div>
                  {treatment.resultsTimeline && (
                    <>
                      {treatment.resultsTimeline.initial && (
                        <div className="flex justify-between items-center pb-4 border-b border-white/20">
                          <span className="text-white/80">Initial Results</span>
                          <span className="font-semibold">
                            {treatment.resultsTimeline.initial}
                          </span>
                        </div>
                      )}
                      {treatment.resultsTimeline.duration && (
                        <div className="flex justify-between items-center pb-4 border-b border-white/20">
                          <span className="text-white/80">Results Last</span>
                          <span className="font-semibold">
                            {treatment.resultsTimeline.duration}
                          </span>
                        </div>
                      )}
                      {treatment.resultsTimeline.sessions && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/80">Sessions</span>
                          <span className="font-semibold">
                            {treatment.resultsTimeline.sessions}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="large"
                  className="w-full justify-center bg-white text-primary hover:bg-white/90 shadow-lg mb-4"
                  icon={<Calendar className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Book This Treatment
                </Button>

                <p className="text-center text-white/80 text-sm">
                  Free consultation included
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-lg">
                <h3 className="text-xl font-bold text-text-primary mb-6 font-display">
                  Why Choose Radina?
                </h3>
                <ul className="space-y-4">
                  {[
                    "CPD-certified specialists",
                    "Premium, approved products",
                    "Natural-looking results",
                    "Safe, professional environment",
                    "Personalized consultations",
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
                  Our team is here to help you understand your options.
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

      {/* ====================
          3. RELATED TREATMENTS CTA
      ==================== */}
      <Section background="primary" padding="default">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6 font-display">
              Explore Other Treatments
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover more ways to enhance your natural beauty
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/treatments" variant="secondary" size="large">
                View All Treatments
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default TreatmentDetailPage;
