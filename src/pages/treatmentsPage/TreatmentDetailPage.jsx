// src/pages/TreatmentDetailPage/TreatmentDetailPage.jsx
// ========================================
// COMPLETE TREATMENT DETAIL PAGE
// ALL data pulled from treatmentsData.js - NO hardcoded text
// Compact before/after gallery
// READY TO COPY & PASTE
// ========================================

import React, { useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Section, Container, Button } from "../../components/ui";
import { getTreatmentById, treatmentsData } from "../../data/treatmentsData";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  Sparkles,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  Star,
  Award,
  Shield,
  Users,
} from "lucide-react";

const TreatmentDetailPage = () => {
  const { treatmentId } = useParams();
  const treatment = getTreatmentById(treatmentId);
  const navigate = useNavigate();

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  return (
    <main
      id="main-content"
      className="relative bg-gradient-to-b from-rose-50 via-white to-purple-50"
    >
      {/* HERO SECTION */}
      <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {treatment.image.src ? (
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

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
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

            {treatment.badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm font-medium">
                  {treatment.badge}
                </span>
              </div>
            )}

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-display">
              {treatment.name}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {treatment.shortDescription}
            </p>

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

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-20 text-white fill-current"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* TRUST BADGES FROM DATA */}
      <Section background="transparent" padding="default">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-12">
            {treatmentsData.trustBadges.map((badge, i) => {
              const IconComponent = {
                award: Award,
                shield: Shield,
                users: Users,
                star: Star,
              }[badge.icon];

              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-primary/10 hover:border-primary/30 transition-all shadow-lg"
                >
                  <IconComponent className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-text-primary text-center">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* COMPACT BEFORE/AFTER GALLERY FROM DATA */}
      {treatment.beforeAfterGallery && (
        <Section background="white" padding="default">
          <Container>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-2 font-display">
                {treatment.beforeAfterGallery.title}
              </h2>
              <p className="text-text-secondary">
                {treatment.beforeAfterGallery.description}
              </p>
            </div>

            <CompactBeforeAfterGallery gallery={treatment.beforeAfterGallery} />
          </Container>
        </Section>
      )}

      {/* MAIN CONTENT */}
      <Section background="transparent" padding="default">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  Overview
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {treatment.longDescription}
                </p>
              </section>

              {/* How It Works */}
              {treatment.howItWorks && (
                <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/10">
                  <h2 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3 font-display">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                    {treatment.howItWorks.title}
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
                        className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
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
                        className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-text-secondary">{benefit}</span>
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
                        className="bg-white rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
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

            {/* Right Sidebar - FROM DATA */}
            <div className="space-y-6">
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
                  {treatment.resultsTime && (
                    <div className="flex justify-between items-center pb-4 border-b border-white/20">
                      <span className="text-white/80">Results</span>
                      <span className="font-semibold">
                        {treatment.resultsTime}
                      </span>
                    </div>
                  )}
                  {treatment.lastingTime && (
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Lasts</span>
                      <span className="font-semibold">
                        {treatment.lastingTime}
                      </span>
                    </div>
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

              {/* Why Choose Us - FROM DATA */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-lg">
                <h3 className="text-xl font-bold text-text-primary mb-6 font-display">
                  Why Choose Radina?
                </h3>
                <ul className="space-y-4">
                  {treatmentsData.whyChooseUs.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact - FROM DATA */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-text-primary mb-4 font-display">
                  {treatmentsData.sidebarContact.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {treatmentsData.sidebarContact.description}
                </p>
                <div className="space-y-3">
                  <a
                    href={treatmentsData.sidebarContact.phone.link}
                    className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">
                      {treatmentsData.sidebarContact.phone.display}
                    </span>
                  </a>
                  <a
                    href={treatmentsData.sidebarContact.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">
                      {treatmentsData.sidebarContact.whatsapp.display}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA - FROM DATA */}
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

// ==========================================
// COMPACT BEFORE/AFTER GALLERY COMPONENT
// ==========================================
const CompactBeforeAfterGallery = ({ gallery }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const active = gallery.images[activeIndex];

  const handleMove = (e) => {
    if (!isDragging && e.type !== "mousemove") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.type.includes("mouse") ? e.clientX : e.touches?.[0]?.clientX;
    if (!x) return;
    const position = Math.max(
      0,
      Math.min(((x - rect.left) / rect.width) * 100, 100),
    );
    setSliderPosition(position);
  };

  return (
    <div>
      {/* Main Slider - Compact */}
      <div className="max-w-2xl mx-auto mb-6">
        <div
          className="relative aspect-video rounded-xl overflow-hidden shadow-xl select-none"
          onMouseMove={handleMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          <img
            src={active.after}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={active.before}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3 bg-primary"></div>
                <div className="w-0.5 h-3 bg-primary"></div>
              </div>
            </div>
          </div>

          <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-xs font-medium">
            Before
          </div>
          <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-xs font-medium">
            After
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm font-medium">
            {active.label}
          </div>
        </div>
      </div>

      {/* Thumbnails - Compact */}
      <div className="flex justify-center gap-3">
        {gallery.images.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              setSliderPosition(50);
            }}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              activeIndex === i
                ? "border-primary scale-110"
                : "border-border opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={img.after}
              alt={img.label}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-text-muted mt-4 italic">
        {gallery.disclaimer}
      </p>
    </div>
  );
};

export default TreatmentDetailPage;
