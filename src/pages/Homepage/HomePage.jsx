// src/pages/Homepage/HomePage.jsx
// ═══════════════════════════════════════════════════════
// HOMEPAGE  —  Radina Aesthetic Brand
// Palette: secondary (#430568) · primary (#b17bbc) · accent (#d4a574)
// Fonts: font-display (Cormorant Garamond) · font-body (Montserrat)
// Sections: Hero → Featured Treatments → Philosophy → Testimonials → FAQ → CTA
// ═══════════════════════════════════════════════════════

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import homePageData from "../../data/homePageData";
import { getFeaturedTreatments } from "../../data/treatmentsData";
import { getFeaturedTestimonials } from "../../data/Testimonialsdata";
import faqData from "../../data/faqData";

const HomePage = () => {
  const {
    hero,
    featuredTreatments: featuredConfig,
    philosophy,
    cta,
  } = homePageData;
  const navigate = useNavigate();

  const featuredTreatments = getFeaturedTreatments().slice(
    0,
    featuredConfig.displayLimit || 3,
  );

  const handleClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <div className="bg-background overflow-x-hidden">
      {/* ══════════════════════════════════════
          HERO  —  Full bleed, brand gradient
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          {hero.image.src && !hero.image.placeholder?.show ? (
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="w-full h-full object-cover"
              onError={(e) => e.target.classList.add("hidden")}
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br
                             ${
                               hero.image.placeholder?.gradient ||
                               "from-secondary to-primary"
                             }`}
            />
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-secondary/95 via-secondary/55 to-secondary/20"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r
                          from-secondary/65 via-transparent to-transparent"
          />
        </div>

        {/* Decorative vertical strip */}
        <div
          className="absolute right-10 top-1/3 z-10 hidden lg:flex
                        flex-col items-center gap-3"
        >
          <div className="w-px h-16 bg-white/12" />
          <span
            className="font-body text-[7px] tracking-[0.5em] uppercase
                           text-white/20 [writing-mode:vertical-rl]"
          >
            Radina Aesthetic Clinic
          </span>
          <div className="w-px h-16 bg-white/12" />
        </div>

        <div
          className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12
                        pt-32 lg:pt-36 pb-24 lg:pb-32 w-full"
        >
          {/* Badge */}
          {hero.badge && (
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span
                className="font-body text-[8px] tracking-[0.45em]
                               uppercase text-accent font-semibold"
              >
                {hero.badge}
              </span>
            </div>
          )}

          {/* Giant title */}
          <h1
            className="font-display font-light text-white leading-[0.92]
                       tracking-tight mb-8"
            style={{ fontSize: "clamp(50px, 9.5vw, 134px)" }}
          >
            {hero.title}
          </h1>

          <p
            className="font-body text-[13px] leading-[2] text-white/55
                         max-w-[500px] mb-12"
          >
            {hero.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-20">
            {hero.buttons?.map((btn, i) => (
              <button
                key={i}
                onClick={() => handleClick(btn.link)}
                className={`font-body text-[9px] font-bold tracking-[0.3em]
                             uppercase px-10 py-4 transition-all duration-300
                             ${
                               i === 0
                                 ? "bg-accent text-secondary hover:bg-white"
                                 : "border border-white/30 text-white/80 hover:border-accent hover:text-accent"
                             }`}
              >
                {btn.text}
              </button>
            ))}
          </div>

          {/* Stats row */}
          {hero.stats && (
            <div className="flex flex-wrap gap-10">
              {hero.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  {i > 0 && <span className="w-px h-8 bg-white/15" />}
                  <div>
                    <p
                      className="font-display font-light text-white leading-none mb-1"
                      style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
                    >
                      {stat.number}
                    </p>
                    <p
                      className="font-body text-[8px] tracking-[0.3em]
                                   uppercase text-white/35"
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-t from-background to-transparent z-10"
        />
      </section>

      {/* ══════════════════════════════════════
          FEATURED TREATMENTS
      ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-px bg-accent" />
                <span
                  className="font-body text-[8px] tracking-[0.4em]
                                 uppercase text-accent font-semibold"
                >
                  Featured
                </span>
              </div>
              <h2
                className="font-display font-light text-secondary leading-tight"
                style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
              >
                {featuredConfig.title}
              </h2>
            </div>
            <Link
              to={featuredConfig.viewAllLink?.link || "/treatments"}
              className="hidden md:flex items-center gap-2 font-body text-[9px]
                         font-bold tracking-[0.25em] uppercase text-secondary/60
                         hover:text-secondary transition-colors duration-300"
            >
              {featuredConfig.viewAllLink?.text || "View All"}
              <svg
                className="w-3.5 h-3.5"
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
          </div>

          {/* Treatment cards — no border-radius, editorial grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {featuredTreatments.map((treatment, index) => (
              <div
                key={treatment.id}
                onClick={() => handleClick(`/treatments/${treatment.id}`)}
                className="group cursor-pointer bg-white hover:bg-surface
                           transition-colors duration-300 flex flex-col"
                style={{
                  animation: "slideUp 0.5s ease-out backwards",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-secondary/5">
                  {treatment.image?.src ? (
                    <img
                      src={treatment.image.src}
                      alt={treatment.image.alt || treatment.name}
                      className="w-full h-full object-cover
                                 transition-transform duration-700
                                 group-hover:scale-[1.06]"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  ) : (
                    <div
                      className="w-full h-full bg-gradient-to-br
                                     from-secondary/8 to-primary/8
                                     flex items-center justify-center"
                    >
                      <span
                        className="font-display text-[100px] font-light
                                        text-secondary/10 leading-none select-none"
                      >
                        {treatment.name?.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t
                                  from-secondary/88 to-transparent
                                  opacity-0 group-hover:opacity-100
                                  transition-opacity duration-500
                                  flex items-end justify-center pb-7"
                  >
                    <span
                      className="font-body text-[9px] font-bold
                                      tracking-[0.3em] uppercase text-white
                                      flex items-center gap-2"
                    >
                      View Treatment
                      <svg
                        className="w-3.5 h-3.5"
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
                    </span>
                  </div>

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
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3
                    className="font-display font-normal text-text-primary
                                group-hover:text-secondary transition-colors
                                duration-300 leading-tight mb-3"
                    style={{ fontSize: "clamp(18px, 1.7vw, 24px)" }}
                  >
                    {treatment.name}
                  </h3>
                  <p
                    className="font-body text-[12px] leading-[1.85]
                                 text-text-muted line-clamp-2 flex-1 mb-5"
                  >
                    {treatment.shortDescription}
                  </p>
                  <div
                    className="h-px bg-gradient-to-r from-transparent
                                   via-border to-transparent mb-5"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="font-body text-[8px] tracking-[0.25em]
                                     uppercase text-text-muted mb-0.5"
                      >
                        From
                      </p>
                      <p className="font-display text-[20px] font-normal text-secondary">
                        {treatment.price || "On consultation"}
                      </p>
                    </div>
                    <span
                      className="font-body text-[8px] font-bold
                                      tracking-[0.25em] uppercase text-accent
                                      group-hover:text-secondary
                                      transition-colors duration-300
                                      flex items-center gap-1.5"
                    >
                      Explore
                      <svg
                        className="w-3 h-3 group-hover:translate-x-0.5
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
                    </span>
                  </div>
                  {/* Hover bar */}
                  <div
                    className="mt-5 h-0.5 bg-gradient-to-r
                                   from-secondary/0 to-secondary/0
                                   group-hover:from-secondary group-hover:via-primary
                                   group-hover:to-accent transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile view all */}
          <div className="mt-10 text-center md:hidden">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 font-body text-[9px]
                         font-bold tracking-[0.25em] uppercase text-secondary
                         border-b border-secondary/30 pb-0.5"
            >
              View All Treatments
              <svg
                className="w-3.5 h-3.5"
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
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY  —  Split layout
      ══════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden">
                {philosophy.image.src && !philosophy.image.placeholder?.show ? (
                  <img
                    src={philosophy.image.src}
                    alt={philosophy.image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.classList.add("hidden")}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br
                                   ${
                                     philosophy.image.placeholder?.gradient ||
                                     "from-secondary/20 to-primary/20"
                                   }`}
                  />
                )}
                {/* Inner border */}
                <div className="absolute inset-4 border border-white/40" />
              </div>

              {/* Floating stats card */}
              <div
                className="absolute -bottom-8 -right-4 lg:-right-10
                              w-52 bg-white p-7 shadow-elegant hidden lg:block"
              >
                <p
                  className="font-display text-[44px] font-light text-secondary
                               leading-none mb-1"
                >
                  {philosophy.statsCard?.number}
                </p>
                <p
                  className="font-body text-[8px] tracking-[0.3em] uppercase
                               text-text-muted mb-4"
                >
                  {philosophy.statsCard?.label}
                </p>
                <div className="h-px bg-border mb-3" />
                <div className="flex items-center gap-0.5 mb-1.5">
                  {[...Array(philosophy.statsCard?.rating?.stars || 5)].map(
                    (_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 text-accent fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ),
                  )}
                </div>
                <p className="font-body text-[9px] text-text-muted">
                  {philosophy.statsCard?.rating?.text}
                </p>
              </div>
            </div>

            {/* Text side */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-px bg-accent" />
                  <span
                    className="font-body text-[8px] tracking-[0.4em]
                                   uppercase text-accent font-semibold"
                  >
                    {philosophy.badge}
                  </span>
                </div>
                <h2
                  className="font-display font-light text-text-primary
                              leading-tight mb-6"
                  style={{ fontSize: "clamp(26px, 3.5vw, 50px)" }}
                >
                  {philosophy.title?.text}{" "}
                  <em className="not-italic text-secondary font-light">
                    {philosophy.title?.highlight}
                  </em>
                </h2>
                <p className="font-body text-[13px] leading-[2] text-text-secondary">
                  {philosophy.description}
                </p>
              </div>

              {/* Feature list */}
              <ul className="space-y-5">
                {philosophy.features?.map((feature, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div
                      className="w-9 h-9 shrink-0 border border-secondary/20
                                    flex items-center justify-center mt-0.5"
                    >
                      <svg
                        className="w-4 h-4 text-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p
                        className="font-body text-[12px] font-semibold
                                     text-text-primary mb-1 tracking-wide"
                      >
                        {feature.title}
                      </p>
                      <p
                        className="font-body text-[11px] leading-[1.8]
                                     text-text-muted"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleClick(philosophy.button?.link || "/about")}
                className="btn-secondary"
              >
                {philosophy.button?.text || "Learn More About Us"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <TestimonialsSection />

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <FAQSection />

      {/* ══════════════════════════════════════
          CTA  —  Brand gradient
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
          className="absolute -bottom-40 -left-20 w-[380px] h-[380px]
                        rounded-full border border-white/4 pointer-events-none"
        />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2
                        font-display font-light text-white/[0.04] leading-none
                        select-none pointer-events-none hidden xl:block"
          style={{ fontSize: "360px" }}
        >
          R
        </div>
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
              Your Journey Starts Here
            </span>
            <span className="w-10 h-px bg-accent/40" />
          </div>

          <h2
            className="font-display font-light text-white leading-[1.0] mb-6"
            style={{ fontSize: "clamp(34px, 6vw, 82px)" }}
          >
            {cta.title}
          </h2>

          <p
            className="font-body text-[13px] leading-[2] text-white/50
                         max-w-[420px] mx-auto mb-12"
          >
            {cta.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {cta.buttons?.map((btn, i) => (
              <button
                key={i}
                onClick={() => handleClick(btn.link)}
                className={`font-body text-[9px] font-bold tracking-[0.35em]
                             uppercase px-12 py-4 transition-all duration-300
                             ${
                               btn.variant === "primary-white"
                                 ? "bg-accent text-secondary hover:bg-white"
                                 : "border border-white/20 text-white/70 hover:border-accent hover:text-accent"
                             }`}
              >
                {btn.text}
              </button>
            ))}
          </div>

          {/* Trust indicators */}
          {cta.trustIndicators && (
            <div
              className="flex flex-wrap items-center justify-center gap-8
                             pt-10 border-t border-white/10"
            >
              {cta.trustIndicators.map((item, i, arr) => (
                <React.Fragment key={i}>
                  <div className="text-center">
                    <p
                      className="font-body text-[7px] tracking-[0.4em] uppercase
                                   text-white/28 mb-1.5"
                    >
                      {item.label}
                    </p>
                    <p className="font-display text-[16px] font-light text-white/70">
                      {item.value}
                    </p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px h-7 bg-white/12 hidden sm:block" />
                  )}
                </React.Fragment>
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

// ══════════════════════════════════════
// TESTIMONIALS SECTION
// ══════════════════════════════════════
const TestimonialsSection = () => {
  const featuredTestimonials = getFeaturedTestimonials();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-7 h-px bg-accent" />
          <span
            className="font-body text-[8px] tracking-[0.4em] uppercase
                           text-accent font-semibold"
          >
            Client Stories
          </span>
        </div>
        <h2
          className="font-display font-light text-secondary leading-tight mb-14"
          style={{ fontSize: "clamp(26px, 3.8vw, 52px)" }}
        >
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {featuredTestimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 flex flex-col"
              style={{
                animation: "slideUp 0.5s ease-out backwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-accent fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Large opening quote */}
              <div
                className="font-display text-[60px] text-secondary/10
                               leading-none mb-2 select-none"
              >
                "
              </div>

              <p
                className="font-display font-light text-[16px] leading-[1.7]
                             text-text-secondary italic flex-1 mb-6"
              >
                {testimonial.quote}
              </p>

              <div className="h-px bg-border mb-5" />

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 bg-secondary/8 flex items-center
                                 justify-center shrink-0"
                >
                  <span className="font-display text-lg text-secondary">
                    {testimonial.image?.placeholder ||
                      testimonial.name?.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-[11px] font-semibold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-[9px] text-text-muted tracking-wide">
                    {testimonial.location} · {testimonial.treatment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ══════════════════════════════════════
// FAQ SECTION
// ══════════════════════════════════════
const FAQSection = () => {
  const generalFAQs = faqData.general.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-7 h-px bg-accent" />
          <span
            className="font-body text-[8px] tracking-[0.4em] uppercase
                           text-accent font-semibold"
          >
            FAQ
          </span>
        </div>
        <h2
          className="font-display font-light text-secondary leading-tight mb-4"
          style={{ fontSize: "clamp(26px, 3.5vw, 50px)" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="font-body text-[12px] leading-[1.9] text-text-muted mb-14">
          Find answers to common questions about our treatments and services.
        </p>

        <div>
          {generalFAQs.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} />
          ))}
          <div className="border-t border-border" />
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-[12px] text-text-muted mb-5">
            Still have questions? We're here to help.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

// FAQ Item
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-t border-border"
      style={{
        animation: "slideUp 0.5s ease-out backwards",
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex items-start justify-between gap-6
                   bg-transparent border-none cursor-pointer"
      >
        <div className="flex items-baseline gap-5">
          <span
            className="font-body text-[10px] text-accent font-semibold
                            tabular-nums shrink-0"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-display text-[17px] font-normal leading-snug
                             transition-colors duration-300
                             ${isOpen ? "text-secondary" : "text-text-primary"}`}
          >
            {faq.question}
          </span>
        </div>
        <span
          className={`text-text-muted text-xl shrink-0 mt-0.5 leading-none
                          transition-transform duration-300
                          ${isOpen ? "rotate-45 text-secondary" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-out
                       ${isOpen ? "max-h-48" : "max-h-0"}`}
      >
        <p
          className="font-body text-[12.5px] leading-[2] text-text-secondary
                       pb-6 ml-9"
        >
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
