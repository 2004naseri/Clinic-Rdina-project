// ConditionsPage.jsx — Tailwind v4 version
import { useState } from "react";
import { Link } from "react-router-dom";
import conditionsData from "../../data/conditionsData";

const { hero, conditions, cta } = conditionsData;
const featured = conditions.filter((c) => c.featured);
const others = conditions.filter((c) => !c.featured);

// ─── Featured Card ────────────────────────────────────────────
function FeaturedCard({ condition, index }) {
  return (
    <Link
      to={`/conditions/${condition.id}`}
      className="group block bg-white border border-border hover:border-primary/25 overflow-hidden
                 transition-all duration-500 ease-out
                 hover:-translate-y-2.5 hover:shadow-[0_40px_80px_rgba(67,5,104,0.18)]
                 shadow-[0_4px_24px_rgba(67,5,104,0.07)]"
      style={{
        animation: `fadeUp 0.65s cubic-bezier(.16,1,.3,1) ${index * 0.13}s both`,
      }}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={condition.image.src}
          alt={condition.image.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.09]"
          onError={(e) => {
            e.target.classList.add("hidden");
            e.target.nextElementSibling.classList.remove("hidden");
          }}
        />
        {/* Fallback */}
        <div className="hidden absolute inset-0 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
          <span className="font-display text-8xl text-white/20 font-light">
            {condition.name[0]}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category badge */}
        <div
          className="absolute top-4 left-4 bg-white/92 backdrop-blur-sm px-3.5 py-1.5
                        font-body text-[9px] font-bold tracking-[0.18em] uppercase text-secondary"
        >
          {condition.category}
        </div>

        {/* Stats on hover */}
        <div
          className="absolute bottom-4 left-0 right-0 px-5 flex gap-5
                        opacity-0 translate-y-2.5 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-400"
        >
          {condition.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[22px] font-normal text-accent leading-none">
                {s.value}
              </div>
              <div className="font-body text-[8px] tracking-[0.15em] uppercase text-white/70 mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-7">
        <p className="font-body text-[9px] tracking-[0.22em] uppercase text-accent font-semibold mb-2.5">
          {condition.severity}
        </p>
        <h3 className="font-display text-[27px] font-normal text-text-primary leading-[1.15] mb-2.5 tracking-tight">
          {condition.name}
        </h3>
        <p className="font-body text-xs leading-[1.85] text-text-muted mb-5">
          {condition.shortDescription}
        </p>

        {/* Symptom pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {condition.symptoms.slice(0, 3).map((s) => (
            <span
              key={s.label}
              className="font-body text-[8px] px-2.5 py-1 border border-border text-primary-dark
                         tracking-[0.12em] uppercase"
            >
              {s.label}
            </span>
          ))}
        </div>

        <span
          className="inline-flex items-center gap-1.5 font-body text-[10px] font-bold
                         tracking-[0.2em] uppercase text-secondary border-b border-secondary/25 pb-0.5
                         group-hover:border-secondary transition-colors duration-300"
        >
          Explore Treatment
          <svg
            className="w-2.5 h-2.5"
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
    </Link>
  );
}

// ─── Compact Card ─────────────────────────────────────────────
function CompactCard({ condition, index }) {
  return (
    <Link
      to={`/conditions/${condition.id}`}
      className="group flex flex-col gap-2.5 relative overflow-hidden
                 bg-white border border-border p-6
                 hover:bg-secondary hover:border-secondary
                 transition-all duration-400 ease-out
                 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(67,5,104,0.22)]
                 shadow-[0_2px_12px_rgba(67,5,104,0.05)]"
      style={{
        animation: `fadeUp 0.6s cubic-bezier(.16,1,.3,1) ${index * 0.07}s both`,
      }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-9 h-9
                      border-t-2 border-r-2 border-primary/10 group-hover:border-accent/50
                      transition-colors duration-400"
      />

      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full overflow-hidden border-2 border-border
                      group-hover:border-accent/40 transition-colors duration-400 shrink-0"
      >
        <img
          src={condition.image.src}
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.parentElement.classList.add(
              "bg-gradient-to-br",
              "from-secondary",
              "to-primary",
            );
            e.target.classList.add("hidden");
          }}
        />
      </div>

      <h3
        className="font-display text-[20px] font-medium text-text-primary leading-[1.15]
                     group-hover:text-white transition-colors duration-400"
      >
        {condition.name}
      </h3>

      <p
        className="font-body text-[11px] leading-[1.75] text-text-muted flex-1
                    group-hover:text-white/65 transition-colors duration-400"
      >
        {condition.shortDescription}
      </p>

      <span
        className="inline-flex items-center gap-1.5 font-body text-[9px] font-bold
                       tracking-[0.2em] uppercase text-secondary group-hover:text-accent
                       transition-colors duration-400 mt-1"
      >
        Learn More
        <svg
          className="w-2 h-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Link>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function ConditionsPage() {
  return (
    <main id="main-content" className="bg-white font-body overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/88 via-primary/62 to-black/25" />
        </div>

        {/* Vertical side label */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 z-10
                        flex items-center gap-3 whitespace-nowrap
                        font-body text-[8px] tracking-[0.45em] uppercase text-white/30"
        >
          <span className="w-8 h-px bg-white/30 inline-block" />
          Radina Aesthetic Clinic
          <span className="w-8 h-px bg-white/30 inline-block" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-12 py-20 animate-[fadeIn_1.2s_ease_both]">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-9 animate-[float_5s_ease-in-out_infinite]">
            <span className="w-9 h-px bg-accent inline-block" />
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-accent font-semibold">
              {hero.badge}
            </span>
            <span className="w-9 h-px bg-accent inline-block" />
          </div>

          <h1
            className="font-display font-light text-white leading-[0.95] tracking-tight mb-8
                         text-[clamp(52px,9vw,100px)]"
          >
            {hero.title}
          </h1>

          <div className="flex items-center gap-4 mb-7">
            <span className="w-14 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.28em] uppercase text-accent/80">
              Advanced Dermatology
            </span>
          </div>

          <p className="font-body text-[15px] leading-[1.9] text-white/78 max-w-[520px] mb-14">
            {hero.description}
          </p>

          {/* Stats */}
          <div className="flex gap-12 flex-wrap">
            {[
              ["10+", "Conditions"],
              ["20+", "Treatments"],
              ["5★", "Rated"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-[46px] font-light text-accent leading-none">
                  {v}
                </div>
                <div className="font-body text-[9px] tracking-[0.22em] uppercase text-white/45 mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent to-white z-10" />
      </section>

      {/* ══ FEATURED CONDITIONS ═══════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-12">
          {/* Header */}
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p
                className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3
                             flex items-center gap-2.5"
              >
                <span className="w-5 h-px bg-accent inline-block" />
                Most Common Concerns
              </p>
              <h2
                className="font-display font-normal text-text-primary tracking-tight leading-[1.05]
                             text-[clamp(36px,4vw,58px)]"
              >
                Popular Treatments
              </h2>
            </div>
            <p className="font-body text-[13px] leading-[1.85] text-text-muted max-w-[360px]">
              Our most sought-after treatments address these frequently seen
              conditions with proven, medical-grade protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featured.map((c, i) => (
              <FeaturedCard key={c.id} condition={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ MARQUEE BAND ══════════════════════════════════════ */}
      <div
        className="bg-gradient-to-r from-secondary via-primary-dark to-primary
                      py-11 px-12 flex items-center justify-center gap-7 flex-wrap text-center"
      >
        {[
          "Advanced Technology",
          "✦",
          "Personalized Care",
          "✦",
          "Proven Results",
          "✦",
          "Expert Dermatologists",
        ].map((item, i) => (
          <span
            key={i}
            className={
              item === "✦"
                ? "text-accent text-base"
                : "font-body text-[9px] tracking-[0.25em] uppercase text-white/72 font-semibold"
            }
          >
            {item}
          </span>
        ))}
      </div>

      {/* ══ ADDITIONAL CONDITIONS ═════════════════════════════ */}
      <section className="bg-surface py-24">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              Complete Care
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight leading-[1.1] mb-3.5
                           text-[clamp(32px,4vw,52px)]"
            >
              Additional Conditions We Treat
            </h2>
            <p className="font-body text-[13px] leading-[1.85] text-text-muted max-w-[460px] mx-auto">
              Comprehensive solutions for a wide range of skin concerns,
              tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((c, i) => (
              <CompactCard key={c.id} condition={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="bg-white py-24 px-12">
        <div
          className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2
                        border border-border overflow-hidden"
        >
          {/* Image */}
          <div className="relative min-h-[420px] lg:min-h-[480px]">
            <img
              src={cta.image?.src}
              alt={cta.image?.alt}
              className="w-full h-full object-cover object-[center_10%]"
              onError={(e) => {
                e.target.classList.add("hidden");
                e.target.nextElementSibling.classList.remove("hidden");
              }}
            />
            <div className="hidden absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent
                            flex items-end p-10"
            >
              <p className="font-display text-[28px] font-light text-white leading-[1.3] italic">
                "Your skin deserves expert care."
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-12 lg:p-14 bg-surface flex flex-col justify-center">
            <p
              className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-4
                           flex items-center gap-2.5"
            >
              <span className="w-4 h-px bg-accent inline-block" />
              Free Consultation
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight leading-[1.15] mb-4
                           text-[clamp(26px,2.8vw,42px)]"
            >
              {cta.title}
            </h2>
            <p className="font-body text-[13px] leading-[1.9] text-text-muted mb-8">
              {cta.description}
            </p>

            <div className="flex flex-col gap-3 mb-9">
              {[
                "Comprehensive skin analysis",
                "Personalized treatment plan",
                "Expert recommendations",
                "No obligation required",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full bg-gradient-to-br from-secondary to-primary
                                  flex items-center justify-center shrink-0"
                  >
                    <svg
                      className="w-2.5 h-2.5"
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-body text-[12px] text-text-secondary">
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to={cta.buttonLink}
              className="self-start inline-block px-10 py-4
                         bg-gradient-to-r from-secondary to-primary text-white
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:opacity-85 hover:-translate-y-0.5"
            >
              {cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
