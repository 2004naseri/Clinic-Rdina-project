// src/pages/PackagesPage/PackagesPage.jsx — Tailwind v4
import { useState } from "react";
import { Link } from "react-router-dom";
import packagesData from "../../data/packagesData";

const { hero, packages, benefits, cta } = packagesData;

// ─── Session Timeline ─────────────────────────────────────────
function SessionTimeline({ sessions }) {
  return (
    <div className="flex flex-col gap-0 mt-6">
      {sessions.map((session, i) => (
        <div key={i} className="flex gap-4 group/session">
          {/* Left — number + line */}
          <div className="flex flex-col items-center shrink-0">
            <div
              className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary
                            flex items-center justify-center shrink-0 z-10"
            >
              <span className="font-body text-[10px] font-bold text-white">
                {session.number}
              </span>
            </div>
            {i < sessions.length - 1 && (
              <div className="w-px flex-1 bg-border mt-1 mb-1 min-h-[24px]" />
            )}
          </div>

          {/* Right — content */}
          <div className={`pb-5 flex-1 ${i < sessions.length - 1 ? "" : ""}`}>
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <h4 className="font-display text-[17px] font-normal text-text-primary leading-snug">
                {session.name}
              </h4>
              {session.timing !== `Session ${session.number}` && (
                <span
                  className="font-body text-[9px] tracking-[0.12em] uppercase
                                 text-text-muted bg-surface px-2 py-0.5 border border-border"
                >
                  {session.timing}
                </span>
              )}
            </div>
            <p className="font-body text-[12px] leading-[1.8] text-text-muted">
              {session.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Package Card ─────────────────────────────────────────────
function PackageCard({ pkg, index }) {
  const [expanded, setExpanded] = useState(pkg.featured);
  const savings = pkg.originalPrice - pkg.price;
  const savingsPct = Math.round((savings / pkg.originalPrice) * 100);

  return (
    <div
      className={`relative flex flex-col border overflow-hidden
                  transition-all duration-500
                  ${
                    pkg.featured
                      ? "border-secondary shadow-[0_20px_60px_rgba(67,5,104,0.18)]"
                      : "border-border hover:border-secondary/40 hover:shadow-[0_12px_40px_rgba(67,5,104,0.1)]"
                  }`}
      style={{
        animation: `fadeUp 0.65s cubic-bezier(.16,1,.3,1) ${index * 0.15}s both`,
      }}
    >
      {/* Featured top bar */}
      {pkg.featured && (
        <div className="h-1 bg-gradient-to-r from-secondary to-primary w-full" />
      )}

      {/* Special offer ribbon */}
      {pkg.specialOffer?.active && (
        <div
          className="bg-gradient-to-r from-accent to-accent-dark px-4 py-2
                        flex items-center justify-center gap-2"
        >
          <span className="font-body text-[9px] font-bold tracking-[0.2em] uppercase text-white">
            ✦ {pkg.specialOffer.label}
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image.src}
          alt={pkg.image.alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.05]"
          onError={(e) => {
            e.target.classList.add("hidden");
            e.target.nextElementSibling.classList.remove("hidden");
          }}
        />
        <div className="hidden absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

        {/* Package number */}
        <div
          className="absolute top-4 left-4 font-display text-[52px] font-light
                        text-white/15 leading-none select-none"
        >
          {pkg.number}
        </div>

        {/* Badge */}
        {pkg.badge && (
          <div
            className={`absolute top-4 right-4 px-3 py-1.5
                           font-body text-[9px] font-bold tracking-[0.15em] uppercase
                           ${
                             pkg.featured
                               ? "bg-secondary text-white"
                               : "bg-white/90 backdrop-blur-sm text-secondary"
                           }`}
          >
            {pkg.badge}
          </div>
        )}

        {/* Sessions + duration */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <span
            className="font-body text-[9px] tracking-[0.15em] uppercase text-white/80
                           bg-black/30 backdrop-blur-sm px-2.5 py-1"
          >
            {pkg.sessions} Sessions
          </span>
          <span
            className="font-body text-[9px] tracking-[0.15em] uppercase text-white/80
                           bg-black/30 backdrop-blur-sm px-2.5 py-1"
          >
            {pkg.duration}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7">
        {/* Name + tagline */}
        <div className="mb-5">
          <h3 className="font-display text-[24px] font-normal text-text-primary leading-snug mb-1.5">
            {pkg.name}
          </h3>
          <p className="font-body text-[12px] leading-[1.8] text-text-muted">
            {pkg.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex items-end gap-3 mb-1">
          <div>
            <div className="font-body text-[9px] tracking-[0.2em] uppercase text-accent font-semibold mb-1">
              Special Price
            </div>
            <div className="font-display text-[44px] font-light text-secondary leading-none">
              £{pkg.price}
            </div>
          </div>
          <div className="pb-1.5 flex flex-col gap-0.5">
            <span className="font-body text-[13px] text-text-muted line-through">
              £{pkg.originalPrice}
            </span>
            <span
              className="font-body text-[9px] font-bold tracking-[0.12em] uppercase
                             text-white bg-accent px-2 py-0.5"
            >
              Save {savingsPct}%
            </span>
          </div>
        </div>

        {/* Ideal for */}
        <div className="py-4 border-t border-b border-border mb-5 mt-3">
          <p className="font-body text-[9px] tracking-[0.2em] uppercase text-text-muted font-semibold mb-1.5">
            Ideal For
          </p>
          <p className="font-body text-[12px] leading-[1.7] text-text-secondary">
            {pkg.idealFor}
          </p>
        </div>

        {/* Session plan toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between py-3 px-4
                     bg-surface border border-border hover:border-secondary/40
                     transition-colors duration-300 cursor-pointer mb-0"
        >
          <span className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-text-primary">
            Package Content — {pkg.sessions} Sessions
          </span>
          <svg
            className={`w-4 h-4 text-secondary transition-transform duration-300
                        ${expanded ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Session timeline */}
        <div
          className={`overflow-hidden transition-[max-height] duration-500 ease-out
                         ${expanded ? "max-h-[600px]" : "max-h-0"}`}
        >
          <div className="pt-2 pb-2 border border-t-0 border-border px-4">
            <SessionTimeline sessions={pkg.sessionPlan} />
          </div>
        </div>

        {/* Spacer to push CTA to bottom */}
        <div className="flex-1 min-h-[16px]" />

        {/* Urgency notice */}
        <div className="flex items-center gap-2 py-3 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
          <p className="font-body text-[10px] text-text-muted italic">
            Availability is limited. Early booking is recommended.
          </p>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className={`w-full py-4 text-center font-body text-[10px] font-bold
                       tracking-[0.25em] uppercase transition-all duration-300
                       ${
                         pkg.featured
                           ? "bg-gradient-to-r from-secondary to-primary text-white hover:opacity-90"
                           : "border border-secondary text-secondary hover:bg-secondary hover:text-white"
                       }`}
        >
          Book This Package
        </Link>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function PackagesPage() {
  return (
    <main id="main-content" className="bg-white font-body overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className="w-full h-full object-cover"
            onError={(e) => e.target.classList.add("hidden")}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-[rgba(26,4,50,0.96)] via-secondary/50 to-black/20"
          />
        </div>

        {/* Side label */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 z-10
                        hidden lg:flex items-center gap-3 whitespace-nowrap
                        font-body text-[8px] tracking-[0.45em] uppercase text-white/30"
        >
          <span className="w-8 h-px bg-white/30 inline-block" />
          Radina Aesthetic Clinic
          <span className="w-8 h-px bg-white/30 inline-block" />
        </div>

        <div
          className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12
                        pb-16 pt-32 animate-[fadeIn_1s_ease_both]"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              {hero.badge}
            </span>
          </div>

          <h1
            className="font-display font-light text-white tracking-tight leading-[0.95] mb-5
                         text-[clamp(44px,7vw,88px)] max-w-[700px]"
          >
            {hero.title}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="w-14 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.28em] uppercase text-accent/80">
              Multi-Session Programmes
            </span>
          </div>

          <p className="font-body text-[15px] leading-[1.9] text-white/75 max-w-[520px] mb-8">
            {hero.description}
          </p>

          {/* Urgency */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5
                          border border-accent/40 bg-accent/10 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-body text-[10px] tracking-[0.15em] uppercase text-accent font-semibold">
              {hero.urgency}
            </span>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-b from-transparent to-white z-10"
        />
      </section>

      {/* ══ PACKAGES ══════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              Our Programmes
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight
                           leading-[1.05] text-[clamp(32px,4vw,54px)] mb-3"
            >
              Choose Your Package
            </h2>
            <p className="font-body text-[13px] leading-[1.85] text-text-muted max-w-[480px] mx-auto">
              Each package is a structured, medically supervised programme —
              timed for maximum results.
            </p>
          </div>

          <div
            className={`grid gap-8
                           ${
                             packages.length === 1
                               ? "grid-cols-1 max-w-[480px] mx-auto"
                               : packages.length === 2
                                 ? "grid-cols-1 md:grid-cols-2"
                                 : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                           }`}
          >
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          {/* Custom package note */}
          <div className="mt-12 text-center">
            <p className="font-body text-[12px] text-text-muted">
              Looking for something tailored?{" "}
              <Link
                to="/contact"
                className="text-secondary font-semibold border-b border-secondary/30
                           hover:border-secondary transition-colors duration-300"
              >
                Book a consultation
              </Link>{" "}
              and Dr. Hussaini will design a personalised plan for you.
            </p>
          </div>
        </div>
      </section>

      {/* ══ BENEFITS BAND ═════════════════════════════════════ */}
      <section className="bg-surface py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              Why Choose a Package
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight
                           leading-[1.05] text-[clamp(28px,3.5vw,46px)]"
            >
              The Package Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group p-7 bg-white border border-border
                           hover:border-secondary/40 hover:-translate-y-1.5
                           hover:shadow-[0_20px_40px_rgba(67,5,104,0.1)]
                           transition-all duration-400 relative overflow-hidden"
                style={{
                  animation: `fadeUp 0.55s cubic-bezier(.16,1,.3,1) ${i * 0.1}s both`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5
                                bg-gradient-to-r from-secondary to-primary
                                scale-x-0 group-hover:scale-x-100
                                transition-transform duration-400 origin-left"
                />
                <div
                  className="font-display text-[48px] font-light text-border leading-none
                                mb-4 select-none group-hover:text-primary/8 transition-colors duration-400"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="font-display text-[20px] font-normal text-text-primary mb-2.5
                               group-hover:text-secondary transition-colors duration-300"
                >
                  {b.title}
                </h3>
                <p className="font-body text-[12px] leading-[1.85] text-text-muted">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-secondary via-primary-dark to-primary py-24 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/8" />
          <div className="absolute -bottom-24 -left-14 w-72 h-72 rounded-full border border-white/6" />
        </div>

        <div
          className="relative z-10 max-w-[1200px] mx-auto
                        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-accent inline-block" />
              <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
                Free Consultation
              </span>
            </div>
            <h2
              className="font-display font-light text-white tracking-tight leading-[1.05] mb-5
                           text-[clamp(30px,4vw,54px)]"
            >
              {cta.title}
            </h2>
            <p className="font-body text-[14px] leading-[1.9] text-white/70 mb-6 max-w-[460px]">
              {cta.description}
            </p>
            <p className="font-body text-[11px] text-white/50 italic">
              ✦ {cta.note}
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            {/* Urgency */}
            <div
              className="flex items-center gap-2.5 px-5 py-3
                            border border-accent/40 bg-accent/10 w-full lg:w-auto"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
              <span
                className="font-body text-[10px] tracking-[0.12em] uppercase
                               text-accent font-semibold"
              >
                {cta.urgency}
              </span>
            </div>

            <Link
              to={cta.buttonLink}
              className="inline-block px-12 py-4 bg-white text-secondary
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:bg-accent hover:text-white
                         text-center w-full lg:w-auto"
            >
              {cta.buttonText}
            </Link>

            <Link
              to="/conditions"
              className="inline-block px-12 py-4 border border-white/35 text-white
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:border-white/80
                         text-center w-full lg:w-auto"
            >
              View Conditions We Treat
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
